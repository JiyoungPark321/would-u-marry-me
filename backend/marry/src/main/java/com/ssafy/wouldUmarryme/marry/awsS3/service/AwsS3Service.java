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
//    private final FileRepository fileRepository; // file 관련 디비

    public static final String CLOUD_FRONT_DOMAIN_NAME = "d3mf3wgh9v41yo.cloudfront.net";

//    @Value("${file.upload-path}")
//    private String tempPath;


    @Transactional
    public String uploadProfileImage(MultipartFile image) throws IOException {
        amazonS3 = awsConfiguration.setS3Client();
        String imageName = image.getOriginalFilename();

        amazonS3.putObject(new PutObjectRequest(awsS3Property.getBucket(), imageName, image.getInputStream(), null)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        return imageName;
    }

//    @Transactional
////    public String upload(List<MultipartFile> files) throws IOException {
//    public List<String> upload(List<MultipartFile> files) throws IOException {
//        amazonS3 = awsConfiguration.setS3Client();
//        List<String> fileNames = new ArrayList<>();
//        String fileName = "filename";
//
//        for (MultipartFile file : files) {
//            fileName = file.getOriginalFilename();
//            fileNames.add(new String(fileName));
//
//            amazonS3.putObject(new PutObjectRequest(awsS3Property.getBucket(), fileName, file.getInputStream(), null)
//                    .withCannedAcl(CannedAccessControlList.PublicRead));
//        }
////        return fileName;
//        return fileNames;
//    }


}