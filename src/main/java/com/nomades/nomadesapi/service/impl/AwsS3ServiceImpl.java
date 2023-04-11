package com.nomades.nomadesapi.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import com.nomades.nomadesapi.model.vm.Asset;
import com.nomades.nomadesapi.service.IAwsS3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;


@Service
public class AwsS3ServiceImpl implements IAwsS3Service {

    private final static String BUCKET = "nomadesbucket";

    @Autowired
    private AmazonS3 s3Client;

    public String putObject(MultipartFile multipartFile){
        String extension = StringUtils.getFilenameExtension(multipartFile.getOriginalFilename());
        String key = String.format("%s.%s", UUID.randomUUID(), extension);

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType(multipartFile.getContentType());
        try {
            PutObjectRequest putObjectRequest = new PutObjectRequest(
                    BUCKET,
                    key,
                    multipartFile.getInputStream(),
                    objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead);
            s3Client.putObject(putObjectRequest);
            return key;

        }catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }

    public Asset getObject(String key){

        S3Object s3Object = s3Client.getObject(BUCKET, key);
        ObjectMetadata metadata = s3Object.getObjectMetadata();

        try {

            S3ObjectInputStream inputStream = s3Object.getObjectContent();
            byte [] bytes = IOUtils.toByteArray(inputStream);

            return new Asset(bytes, metadata.getContentType());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteObject(String key) {
        s3Client.deleteObject(BUCKET,key);
    }

    public String getObjectUrl(String key){
        return String.format("https://%s.amazonaws.com/%s",BUCKET, key);
    }
}
