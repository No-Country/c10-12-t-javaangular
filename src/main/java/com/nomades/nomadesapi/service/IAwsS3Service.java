package com.nomades.nomadesapi.service;

import com.nomades.nomadesapi.model.vm.Asset;
import org.springframework.web.multipart.MultipartFile;

public interface IAwsS3Service {

    String putObject(MultipartFile multipartFile);

    String getObjectUrl(String key);

    Asset getObject(String key);

    void deleteObject(String key);

}
