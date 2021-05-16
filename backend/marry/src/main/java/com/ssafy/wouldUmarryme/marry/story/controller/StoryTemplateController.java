package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetStoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.service.StoryTemplateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"09. StoryTemplate"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/storytemplate")
public class StoryTemplateController {

    private final StoryTemplateService storyTemplateService;

    @GetMapping
    @ApiOperation(value = "스토리템플릿 불러오기")
    public Object retrieveStoryTemplate(@ApiIgnore @CurrentAccount Account account){
        Object response = storyTemplateService.retrieveStoryTemplate();
        return response;
    }

    @PostMapping
    @ApiOperation(value = "스토리템플릿 추가")
    public Object createTemplate(@Valid @RequestBody @ApiParam(value = "템플릿 사진", required = true) MultipartFile image,@ApiIgnore @CurrentAccount Account account) throws IOException{
        Object response = storyTemplateService.createTemplate(image);
        return response;
    }

    @PutMapping
    @ApiOperation(value = "스토리템플릿 저장")
    public Object setTemplate(@Valid @RequestBody @ApiParam(value = "템플릿 id, 스토리 id",required = true) SetStoryTemplateRequest setStoryTemplateRequest,@ApiIgnore @CurrentAccount Account account){
        Object response = storyTemplateService.setTemplate(setStoryTemplateRequest);
        return response;
    }

}
