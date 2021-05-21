package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.repository.AccountRepository;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryboardRequest;
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

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;


@Service
@Transactional
@RequiredArgsConstructor
public class StoryboardService {

    private final StoryBoardRepository storyBoardRepository;


    public Object createNewStoryBoard(CreateStoryboardRequest createStoryboardRequest, Account account) {
        Storyboard storyboard = Storyboard.builder()
                .title(createStoryboardRequest.getStoryBoardTitle())
                .account(account)
                .build();
        storyBoardRepository.save(storyboard);
        return makeResponse("200", storyboard.getId(),"success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardList(Account account){
        List<Storyboard> lists = storyBoardRepository.findByAccount(account);
        if(lists.size()==0){
            return  makeResponse("200",null,"success : 현재 storyboard가 없음",HttpStatus.OK);
        }
        return makeResponse("200", StoryboardResponse.listOf(lists), "success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object getStoryboardDetail(Long id,Account account) {
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(id,account);
        if(storyboard.isEmpty()){
            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        else{
            return makeResponse("200", storyboard.get(), "success", HttpStatus.OK);
        }
    }

    public Object updateTitle(UpdateStoryboardTitleRequest updateStoryboardTitleRequest,Account account) {
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(updateStoryboardTitleRequest.getStoryBoardId(),account);
        if(storyboard.isEmpty()){
            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        else{
            Storyboard requestStoryboard = updateStoryboardTitleRequest.toStoryboard();
            storyboard.get().updateTitle(requestStoryboard);
            Storyboard save = storyBoardRepository.save(storyboard.get());
            return makeResponse("200", UpdateStoryboardTitleResponse.of(save),"success", HttpStatus.OK);
        }
    }

    public Object deleteStoryboard(Long id,Account account) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(id);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "Not found storyboard", HttpStatus.NOT_FOUND);
        }
        storyBoardRepository.deleteByIdAndAccount(id,account);
        return makeResponse("200",null,"success",HttpStatus.OK);
    }

    public Object getGuestDetail(long id) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(id);
        if(storyboard.isEmpty()){
            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        else{
            return makeResponse("200", storyboard.get(), "success", HttpStatus.OK);
        }
    }
}
