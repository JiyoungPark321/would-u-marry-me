package com.ssafy.wouldUmarryme.marry.awsS3.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryImage;
import com.ssafy.wouldUmarryme.marry.story.repository.*;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class FileService {

    private final AwsS3Service awsS3Service;
    private final StoryImageRepository fileRepository;
    private final SpotRepository structerRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final StoryRepository storyRepository;
    private final BackgroundRepository backgroundRepository;


    public void create(StoryImage image) {
        fileRepository.save(image);
    }


    public StoryImage createImage(MultipartFile image) throws IOException {
        // 이미지 정보 생성
        StoryImage img = new StoryImage();
        String imgPath = awsS3Service.uploadProfileImage(image);

        img.setImagePath(imgPath);
        img.setImgFullPath("https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgPath);

        fileRepository.save(img);
        return img;
    }


}