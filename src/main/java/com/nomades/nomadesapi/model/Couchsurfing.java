package com.nomades.nomadesapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;


@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "couchsurfing")
public class Couchsurfing {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String title;
    @NotNull
    @Column(length = 400)
    private String description;

    private String imageName;

    @Transient
    private String imageUrl;

    private boolean deleted = Boolean.FALSE;
}