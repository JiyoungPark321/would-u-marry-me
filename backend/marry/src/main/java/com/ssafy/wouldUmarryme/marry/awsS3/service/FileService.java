package com.ssafy.wouldUmarryme.marry.awsS3.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Image;
import com.ssafy.wouldUmarryme.marry.awsS3.repository.FileRepository;
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
    private final FileRepository fileRepository;

    public void create(Image image) {
        fileRepository.save(image);
    }


    public Image createImage(MultipartFile image) throws IOException {
        // 이미지 정보 생성
        Image img = new Image();
        String imgPath = awsS3Service.uploadProfileImage(image);

        img.setImagePath(imgPath);
        img.setImgFullPath("https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgPath);

        fileRepository.save(img);
        return img;
    }

    public Image setStructer(MultipartFile image) {
    }

    public Image setBackground(MultipartFile image) {
    }
}