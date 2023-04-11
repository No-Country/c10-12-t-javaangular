package com.nomades.nomadesapi.model.vm;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Asset {
    private byte[] content;
    private String contentType;
}
