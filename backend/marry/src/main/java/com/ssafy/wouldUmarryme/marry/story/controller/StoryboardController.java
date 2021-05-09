package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.DeleteStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.RetrieveStoryBoardDetailRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.response.StoryboardResponse;
import com.ssafy.wouldUmarryme.marry.story.service.StoryboardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@Api(tags={"2.Storyboard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/storyboard")
public class StoryboardController {

    private final StoryboardService storyboardService;


    //스토리보드 생성
    @PostMapping
    @ApiOperation(value = "Create new StoryBaord")
    public Object createStorybaord(@Valid @ApiParam(value="StoryBoard Title",required = true) @RequestBody CreateStoryboardRequest createStoryboardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.createNewStoryBoard(createStoryboardRequest,account);
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
    @GetMapping("/{id}")
    @ApiOperation(value = "Retrieve Storyboard Detail")
    public Object retrieveStoryboardDetail(@PathVariable @NotNull Long id, @ApiIgnore @CurrentAccount Account account){

        Object response = storyboardService.getStoryboardDetail(id);
        return response;
    }

    //스토리보드 이름변경
    @PutMapping("/updateTitle")
    @ApiOperation(value = "updateTitle")
    public Object updateTitle(@Valid @ApiParam(value="스토리보드 Id, 변경할 Title",required = true)@RequestBody UpdateStoryboardTitleRequest updateStoryboardTitleRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.updateTitle(updateStoryboardTitleRequest);
        return response;
    }
    //스토리보드 삭제
    @DeleteMapping
    @ApiOperation(value = "deleteStoryboard")
    public Object deleteTitle(@Valid @ApiParam(value="삭제할 스토리보드 Id,",required = true) @RequestBody DeleteStoryboardRequest deleteStoryboardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.deleteStoryboard(deleteStoryboardRequest);
        return response;
    }

}
