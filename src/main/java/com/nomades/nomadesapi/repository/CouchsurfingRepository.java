package com.nomades.nomadesapi.repository;

import com.nomades.nomadesapi.model.Couchsurfing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CouchsurfingRepository extends JpaRepository<Couchsurfing, Long> {
}
