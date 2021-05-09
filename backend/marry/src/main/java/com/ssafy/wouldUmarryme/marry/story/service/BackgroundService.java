package com.ssafy.wouldUmarryme.marry.story.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetBackgroundRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.BackgroundRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class BackgroundService {

    private final BackgroundRepository backgroundRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final AwsS3Service awsS3Service;

    //이미지 경로 확인해보깃!
    public Object setBackground(SetBackgroundRequest setBackgroundRequest) {
        String name = setBackgroundRequest.getBackgroundImg().getOriginalFilename();
        Optional<Background> background = backgroundRepository.findByBackgroundImgName(name);
        Optional<Storyboard> storyboard = storyBoardRepository.findById(setBackgroundRequest.getStoryBoardId());

        Storyboard newStoryBoard = storyboard.get();
        newStoryBoard.setBackground(background.get());
        Storyboard saveStoryboard = storyBoardRepository.save(newStoryBoard);
        return makeResponse("200",saveStoryboard,"success", HttpStatus.OK);

    }
    @Transactional(readOnly = true)
    public Object getBackgroundList() {
        List<Background> backgroundList = backgroundRepository.findAll();
        return makeResponse("200",backgroundList,"success", HttpStatus.OK);
    }

    public Object createBackground(MultipartFile image) throws IOException {
        String imgName = awsS3Service.uploadProfileImage(image,"bck");
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" +imgName;
        Background background = Background.builder()
                .backgroundImgName(imgName)
                .backgroundImgUrl(imgUrl)
                .build();
        Background save = backgroundRepository.save(background);
        return makeResponse("200",save,"success",HttpStatus.OK);
    }
}
