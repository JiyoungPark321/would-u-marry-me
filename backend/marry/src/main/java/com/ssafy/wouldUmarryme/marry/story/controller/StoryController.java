package com.ssafy.wouldUmarryme.marry.story.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set1StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set2StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set345StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.service.StoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"07. Story"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/story")
public class StoryController {

    private final StoryService storyService;

    //스토리 생성
    @PostMapping
    @ApiOperation(value = "스토리 생성")
    public Object createStory(@ApiIgnore @CurrentAccount Account account,@Valid @ApiParam(value="SpotId, StoryboardId, Index",required = true) @RequestBody  CreateStoryRequest createStoryRequest){
        Object response = storyService.createStory(createStoryRequest,account);
        return response;
    }


    //스토리 첫 번째 템플릿
    @PutMapping("/first")
    @ApiOperation(value = "스토리에 첫 번째 템플릿 값 넣기")
    public Object setFirstValue(@ApiIgnore @CurrentAccount Account account, @Valid @ApiParam(value="storyId,사진1,코멘트2,사진3,코멘트4",required = true)  Set1StoryTemplateRequest set1StoryTemplateRequest) throws IOException {
        Object response = storyService.setFirstValue(set1StoryTemplateRequest);
        return response;
    }

    //스토리 두 번째 템플릿
    @PutMapping("/second")
    @ApiOperation(value = "스토리에 두 번째 템플릿 값 넣기")
    public Object setSecondValue(@ApiIgnore @CurrentAccount Account account, @Valid @ApiParam(value="storyId,사진1,코멘트2",required = true) Set2StoryTemplateRequest set2StoryTemplateRequest) throws IOException {
        Object response = storyService.setSecondValue(set2StoryTemplateRequest);
        return response;
    }

    //스토리 세 번째 템플릿
    @PutMapping("/third")
    @ApiOperation(value = "스토리에 세 번째 템플릿 값 넣기")
    public Object setThirdValue(@ApiIgnore @CurrentAccount Account account, @Valid @ApiParam(value="storyId,코멘트1,사진2,사진3,사진4",required = true) Set345StoryTemplateRequest set345StoryTemplateRequest) throws IOException {
        Object response = storyService.setThirdValue(set345StoryTemplateRequest);
        return response;
    }

}
