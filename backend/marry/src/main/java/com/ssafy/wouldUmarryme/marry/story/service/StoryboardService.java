package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.repository.AccountRepository;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.DeleteStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.RetrieveStoryBoardDetailRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.response.StoryboardResponse;
import com.ssafy.wouldUmarryme.marry.story.dto.response.UpdateStoryboardTitleResponse;
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
    private final AccountRepository accountRepository;


    public Object createNewStoryBoard(CreateStoryboardRequest createStoryboardRequest, Account account) {
        Storyboard storyboard = Storyboard.builder()
                .title(createStoryboardRequest.getStoryboardTitle())
                .account(account)
                .build();
        storyBoardRepository.save(storyboard);

        return makeResponse("200",storyboard.getId(),"success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardList(Account account){
        List<Storyboard> lists = storyBoardRepository.findByAccount(account);
        return makeResponse("200",StoryboardResponse.listOf(lists),"success",HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardDetail(Long id) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(id);
        System.out.println(storyboard.get().getTitle());
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail",HttpStatus.NOT_FOUND);
        }
        else{
            return makeResponse("200",storyboard.get(),"success",HttpStatus.OK);
        }
    }

    public Object updateTitle(UpdateStoryboardTitleRequest updateStoryboardTitleRequest) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(updateStoryboardTitleRequest.getStoryboardId());
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail",HttpStatus.NOT_FOUND);
        }
        else{
            Storyboard requestStoryboard = updateStoryboardTitleRequest.toStoryboard();
            storyboard.get().updateTitle(requestStoryboard);
            Storyboard save = storyBoardRepository.save(storyboard.get());
            return makeResponse("200", UpdateStoryboardTitleResponse.of(save),"success",HttpStatus.OK);

        }
    }

    public Object deleteStoryboard(DeleteStoryboardRequest deleteStoryboardRequest) {
        storyBoardRepository.deleteById(deleteStoryboardRequest.getStoryboardId());
        return makeResponse("200","","success",HttpStatus.OK);
    }
}
