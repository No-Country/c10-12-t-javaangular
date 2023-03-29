package com.nomades.nomadesapi.security.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SignupRequest {
    private String username;
    private String email;
    private String password;
    private Set<String> roles;
}
