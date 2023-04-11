package com.nomades.nomadesapi.service.impl;

import com.nomades.nomadesapi.model.Couchsurfing;
import com.nomades.nomadesapi.repository.CouchsurfingRepository;
import com.nomades.nomadesapi.service.ICouchsurfingService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CouchsurfingServiceImpl implements ICouchsurfingService {

    private final CouchsurfingRepository couchsurfingRepo;


    @Override
    public List<Couchsurfing> findAll() throws Exception {
        try{
            return couchsurfingRepo.findAll();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Couchsurfing findById(Long id) throws Exception {
        try{
                Optional<Couchsurfing> couchsurfingOptional = couchsurfingRepo.findById(id);
                return couchsurfingOptional.get();

        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Couchsurfing save(Couchsurfing entity) throws Exception {
        try{
            return couchsurfingRepo.save(entity);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Couchsurfing update(Long id, Couchsurfing entity) throws Exception {
        try{

            Optional<Couchsurfing> optionalCouchsurfing = couchsurfingRepo.findById(id);
            Couchsurfing couchsurfingUpdated = optionalCouchsurfing.get();

            couchsurfingUpdated.setId(entity.getId());
            couchsurfingUpdated.setTitle(entity.getTitle());
            couchsurfingUpdated.setDescription(entity.getDescription());
            couchsurfingUpdated.setImageName(entity.getImageName());
            couchsurfingUpdated.setDeleted(entity.isDeleted());

            return couchsurfingRepo.save(couchsurfingUpdated);

        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean delete(Long id) throws Exception {
        try {
            if (couchsurfingRepo.existsById(id)) {
                couchsurfingRepo.deleteById(id);
                return true;
            }else {throw new Exception();}
        } catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
