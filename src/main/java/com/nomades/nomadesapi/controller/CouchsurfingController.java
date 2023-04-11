package com.nomades.nomadesapi.controller;

import com.nomades.nomadesapi.model.Couchsurfing;
import com.nomades.nomadesapi.service.ICouchsurfingService;
import com.nomades.nomadesapi.service.IAwsS3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/couchsurfing")
@RequiredArgsConstructor
public class CouchsurfingController {

    private final ICouchsurfingService couchsurfingService;

    private final IAwsS3Service s3Service;

    @GetMapping("")
    public ResponseEntity<?> getAll(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(couchsurfingService.findAll()
                    .stream()
                    .peek( curso -> {
                        try {
                            curso.setImageUrl(s3Service.getObjectUrl(curso.getImageName()));
                        } catch (Exception e) {
                            throw new RuntimeException(e);
                        }
                    }).collect(Collectors.toList())
            );

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id){
        try{
            Couchsurfing result = couchsurfingService.findById(id);
            result.setImageUrl(s3Service.getObjectUrl(result.getImageName()));
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(result);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody Couchsurfing entity){
        try{
            entity.setImageUrl(s3Service.getObjectUrl(entity.getImageName()));
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(couchsurfingService.save(entity));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Couchsurfing entity){
        try{
            entity.setImageUrl(s3Service.getObjectUrl(entity.getImageName()));
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(couchsurfingService.update(id,entity));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        try{
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(couchsurfingService.delete(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
