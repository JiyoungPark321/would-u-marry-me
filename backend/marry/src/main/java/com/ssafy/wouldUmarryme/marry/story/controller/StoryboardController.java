package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryboardRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateStoryboardTitleRequest;
import com.ssafy.wouldUmarryme.marry.story.service.StoryboardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Api(tags={"02. Storyboard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/storyboard")
public class StoryboardController {

    private final StoryboardService storyboardService;

    @PostMapping
    @ApiOperation(value = "스토리보드 생성")
    public Object createStoryboard(@Valid @ApiParam(value="StoryBoard Title",required = true) @RequestBody CreateStoryboardRequest createStoryboardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.createNewStoryBoard(createStoryboardRequest,account);
        return response;
    }

    @GetMapping("/getList")
    @ApiOperation(value = "스토리보드 리스트 조회")
    public Object retrieveStoryboardList(@ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.getStoryboardList(account);
        return response;
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "스토리보드 상세정보 가져오기")
    public Object retrieveStoryboardDetail(@PathVariable @NotNull String id, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.getStoryboardDetail(Long.parseLong(id),account);
        return response;
    }
    @GetMapping("/guest/{id}")
    @ApiOperation(value = "카카오톡 공유하기 스토리보드 가져오기")
    public Object retrieveGusetDetail(@PathVariable @NotNull String id){
        Object response = storyboardService.getGuestDetail(Long.parseLong(id));
        return response;
    }

    @PutMapping("/updateTitle")
    @ApiOperation(value = "스토리보드 이름 변경")
    public Object updateTitle(@Valid @ApiParam(value="스토리보드 Id, 변경할 Title",required = true)@RequestBody UpdateStoryboardTitleRequest updateStoryboardTitleRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.updateTitle(updateStoryboardTitleRequest,account);
        return response;
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "스토리보드 삭제")
    public Object deleteTitle(@PathVariable @NotNull String id, @ApiIgnore @CurrentAccount Account account){
        Object response = storyboardService.deleteStoryboard(Long.parseLong(id),account);
        return response;
    }

}
