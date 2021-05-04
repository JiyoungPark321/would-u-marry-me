package com.ssafy.wouldUmarryme.marry.story.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetBackgroundRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.BackgroundRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
