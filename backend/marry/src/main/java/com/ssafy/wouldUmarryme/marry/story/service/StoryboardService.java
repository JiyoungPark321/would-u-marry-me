package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.DeleteStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.*;
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
public class StoryboardService {

    private final StoryBoardRepository storyBoardRepository;


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
