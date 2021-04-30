package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.DeleteStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetBackgroundRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetSpotRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.service.StoryboardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;

@Api(tags={"2.Storyboard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/storyboard")
public class StoryboardController {

    private final StoryboardService storyboardService;


    //스토리보드 생성
    @PostMapping
    @ApiOperation(value = "Create new StoryBaord")
    public Object createStorybaord(@Valid @ApiParam(value="StoryBoard Title",required = true) String storyBoardTitle, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.createNewStoryBoard(storyBoardTitle,account);
        return response;
    }

    //스토리보드 리스트 조회
    @GetMapping("/getList")
    @ApiOperation(value = "Retrieve Storyboard List")

    public Object retrieveStoryboardList(@ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.getStoryboardList(account);
        return response;
    }

    //스토리보드 상세 정보 가져오깃
    @GetMapping("/detailStoryboard")
    @ApiOperation(value = "Retrieve Storyboard Detail")
    public Object retrieveStoryboardDetail(@Valid @ApiParam(value="StoryBoard Title",required = true) Long storyboardId,@ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.getStoryboardDetail(storyboardId);
        return response;
    }



    //장소 설정
    @PutMapping("/setSpot")
    @ApiOperation(value = "setSpot")
    public Object setSpot(@Valid @RequestBody @ApiParam(value = "장소이미지, 스토리보드 Id, 인덱스",required = true)SetSpotRequest setSpotRequest,@ApiIgnore @CurrentAccount Account account){
        Object response= storyboardService.setSpot(setSpotRequest);
        return response;
    }

    //스토리보드 이름변경
    @PutMapping("/updateTitle")
    @ApiOperation(value = "updateTitle")
    public Object updateTitle(@Valid @ApiParam(value="스토리보드 Id, 변경할 Title",required = true)UpdateStoryboardTitleRequest updateStoryboardTitleRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.updateTitle(updateStoryboardTitleRequest);
        return response;
    }
    //스토리보드 삭제
    @DeleteMapping
    @ApiOperation(value = "deleteStoryboard")
    public Object deleteTitle(@Valid @ApiParam(value="삭제할 스토리보드 Id,",required = true)DeleteStoryboardRequest deleteStoryboardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.deleteStoryboard(deleteStoryboardRequest);
        return response;
    }

}
