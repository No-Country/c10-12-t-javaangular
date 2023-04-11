package com.nomades.nomadesapi.service;

import com.nomades.nomadesapi.model.Couchsurfing;

import java.util.List;

public interface ICouchsurfingService {

    List<Couchsurfing> findAll() throws Exception;
    Couchsurfing findById(Long id) throws Exception;
    Couchsurfing save(Couchsurfing entity) throws Exception;
    Couchsurfing update(Long id,Couchsurfing entity) throws Exception;
    boolean delete(Long id) throws Exception;

}
