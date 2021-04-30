package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.DeleteStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetBackgroundRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetSpotRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;


@Service
@Transactional
@RequiredArgsConstructor
public class StoryboardService {

    private final AwsS3Service awsS3Service;
    private final StoryImageRepository fileRepository;
    private final SpotRepository structerRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final StoryRepository storyRepository;



    //이미지 경로확인해보자!
    public Object setSpot(SetSpotRequest setSpotRequest) {
        String name = setSpotRequest.getSpotImg().getOriginalFilename();
        Optional<Spot> spot = structerRepository.findBySpotName(name);
        Optional<Storyboard> storyboard = storyBoardRepository.findById(setSpotRequest.getStoryBoardId());

        //해당 Story를 전에 만든 적이 있는지 체크
        Optional<Story> story = storyRepository.findByStoryboardAndIndex(storyboard.get(),setSpotRequest.getStoryIndex());

        //없다면
        Story newStory;
        if(story.isEmpty()){
            newStory = Story.builder()
                    .index(setSpotRequest.getStoryIndex())
                    .spot(spot.get())
                    .storyboard(storyboard.get())
                    .build();

        }
        //있다면
        else{
            newStory = story.get();
            newStory.setSpot(spot.get());
            storyRepository.save(newStory);
        }
        return makeResponse("200",convertObjectToJson(newStory),"success", HttpStatus.OK);
    }




    public Object createNewStoryBoard(String title,Account account) {
        Storyboard storyboard = Storyboard.builder()
                .title(title)
                .account(account)
                .build();
        Storyboard saveStoryboard = storyBoardRepository.save(storyboard);
        return makeResponse("200",convertObjectToJson(saveStoryboard),"success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardList(Account account){
        List<Storyboard> lists = storyBoardRepository.findAllByAccount(account);
        return makeResponse("200",convertObjectToJson(lists),"success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardDetail(Long storyboardId) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(storyboardId);
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail",HttpStatus.NOT_FOUND);
        }
        else{
            return makeResponse("200",convertObjectToJson(storyboard.get()),"success",HttpStatus.OK);
        }
    }

    public Object updateTitle(UpdateStoryboardTitleRequest updateStoryboardTitleRequest) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(updateStoryboardTitleRequest.getStoryboardId());
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail",HttpStatus.NOT_FOUND);
        }
        else{
            Storyboard updateStoryboard = storyboard.get();
            updateStoryboard.setTitle(updateStoryboardTitleRequest.getTitle());
            Storyboard saveStoryboard = storyBoardRepository.save(updateStoryboard);
            return makeResponse("200",convertObjectToJson(saveStoryboard),"success",HttpStatus.OK);
        }
    }

    public Object deleteStoryboard(DeleteStoryboardRequest deleteStoryboardRequest) {
        storyBoardRepository.deleteById(deleteStoryboardRequest.getStoryboardId());
        return makeResponse("200","","success",HttpStatus.OK);
    }
}
