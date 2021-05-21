package com.ssafy.wouldUmarryme.marry.awsS3.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Transactional
@RequiredArgsConstructor
public class FileService {

    private final AwsS3Service awsS3Service;




//    public file createImage(MultipartFile image) throws IOException {
//        // 이미지 정보 생성
//        file files = new file();
//        String imgPath = awsS3Service.uploadProfileImage(image);
//
//        System.out.println("imgPath = " + imgPath);
//        String imgFullpath = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgPath;
//        System.out.println("imgFullpath = " + imgFullpath);
//        files.setFilePath(imgPath);
//        files.setFileFullPath("https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgPath);
//
//        fileRepository.save(files);
//        return files;
//    }


}