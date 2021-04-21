package com.ssafy.wouldUmarryme.marry.awsS3.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.File;
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

    public void create(File file) {
        fileRepository.save(file);
    }


    public File createImage(MultipartFile file) throws IOException {
        // 이미지 정보 생성
        File f = new File();
        String imgPath = awsS3Service.uploadProfileImage(file);

        f.setImagePath(imgPath);
        f.setImgFullPath("https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgPath);

        fileRepository.save(f);
        return f;
    }

}