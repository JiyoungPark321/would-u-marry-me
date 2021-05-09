package com.ssafy.wouldUmarryme.marry.story.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetBackgroundRequest;
import com.ssafy.wouldUmarryme.marry.story.service.BackgroundService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"3.background"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/background")
public class BackgroundController {

    private final BackgroundService backgroundService;

    //배경 불러오기
    @GetMapping
    @ApiOperation(value="retrieve BackgroundImg")
    public Object retrieveBackgrorund(@ApiIgnore @CurrentAccount Account account){
        Object response = backgroundService.getBackgroundList();
        return response;
    }

    //배경 저장하기
    @PutMapping
    @ApiOperation(value = "set BackgroundImg")
    public Object setBackground(@Valid @RequestBody @ApiParam(value = "배경 id, 스토리보드 Id" ,required = true) SetBackgroundRequest setBackgroundRequest, @ApiIgnore @CurrentAccount Account account){

        Object response= backgroundService.setBackground(setBackgroundRequest);
        return response;
    }

    //배경 추가하기
    @PostMapping
    @ApiOperation(value = "배경 추가하기")
    public Object createBackground(@Valid @RequestBody @ApiParam(value = "배경 사진",required = true)MultipartFile image) throws IOException{
        Object response = backgroundService.createBackground(image);
        return response;
    }


}
