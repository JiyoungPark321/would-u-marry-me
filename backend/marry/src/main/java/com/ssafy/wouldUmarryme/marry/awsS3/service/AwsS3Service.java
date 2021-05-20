package com.ssafy.wouldUmarryme.marry.awsS3.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

import com.ssafy.wouldUmarryme.marry.awsS3.config.AwsConfiguration;
import com.ssafy.wouldUmarryme.marry.awsS3.property.AwsS3Property;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AwsS3Service {

    private final AwsConfiguration awsConfiguration;
    private final AwsS3Property awsS3Property;
    private AmazonS3 amazonS3;

    public static final String CLOUD_FRONT_DOMAIN_NAME = "d3mf3wgh9v41yo.cloudfront.net";




    @Transactional
    public String uploadProfileImage(MultipartFile image,String prefix,Long id) throws IOException {
        amazonS3 = awsConfiguration.setS3Client();
        String imageName = id+"_"+prefix+"_"+image.getOriginalFilename();

        amazonS3.putObject(new PutObjectRequest(awsS3Property.getBucket(), imageName, image.getInputStream(), null)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        return imageName;
    }



}