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

//    public Story setSpot(MultipartFile image, Long storyboard_id, Long index) {
//        String name = image.getOriginalFilename();
//        Optional<Spot> spot = structerRepository.findBySpotPath(name);
//        Optional<Storyboard> storyboard = storyBoardRepository.findById(storyboard_id);
//
//        //해당 Story를 전에 만든 적이 있는지 체크
//        Optional<Story> story = storyRepository.findByStoryBoardAndIndex(storyboard.get(),index);
//
//        //없다면
//        if(story.isEmpty()){
//            Story newStory = Story.builder()
//                    .index(index)
//                    .spot(spot.get())
//                    .storyboard(storyboard.get())
//                    .build();
//            return storyRepository.save(newStory);
//
//        }
//        //있다면
//        else{
//            Story newStory = story.get();
//            newStory.setSpot(spot.get());
//            return storyRepository.save(newStory);
//        }
//    }

    public Storyboard setBackground(MultipartFile image,Long storyboard_id) {
        String name = image.getOriginalFilename();
        Optional<Background> background = backgroundRepository.findByBackgroundPath(name);
        Optional<Storyboard> storyboard = storyBoardRepository.findById(storyboard_id);

        Storyboard newStoryBoard = storyboard.get();
        newStoryBoard.setBackground(background.get());
        return storyBoardRepository.save(newStoryBoard).get();
    }
}