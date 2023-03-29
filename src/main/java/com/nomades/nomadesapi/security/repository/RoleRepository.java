package com.nomades.nomadesapi.security.repository;

import com.nomades.nomadesapi.security.model.Role;
import com.nomades.nomadesapi.security.model.RolesEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RolesEnum name);
}
