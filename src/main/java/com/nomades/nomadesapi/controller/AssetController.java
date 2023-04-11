package com.nomades.nomadesapi.controller;

import com.nomades.nomadesapi.model.vm.Asset;
import com.nomades.nomadesapi.service.IAwsS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/assets")

public class AssetController {
    @Autowired
    private IAwsS3Service s3Service;

    @PostMapping("/upload")
    public Map<String, String> uploadFile(@RequestParam MultipartFile file) throws Exception {
        String key = s3Service.putObject(file);
        Map<String,String> result = new HashMap<>();
        result.put("key", key);
        result.put("url", s3Service.getObjectUrl(key));
        return result;
    }
    @GetMapping(value = "/get-object", params = "key")
    public ResponseEntity<ByteArrayResource> getObject (@RequestParam String key) throws Exception {
        Asset asset = s3Service.getObject(key);
        ByteArrayResource resource = new ByteArrayResource(asset.getContent());

        return ResponseEntity
                .ok()
                .header("Content-Type", asset.getContentType())
                .contentLength(asset.getContent().length)
                .body(resource);
    }

    @DeleteMapping(value = "/delete",params = "key")
    void deleteObject(@RequestParam String key) throws Exception {
        s3Service.deleteObject(key);
    }


}
