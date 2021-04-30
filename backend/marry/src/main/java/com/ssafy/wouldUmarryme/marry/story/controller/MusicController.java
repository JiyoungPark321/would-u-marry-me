package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.service.MusicService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;

@Api(tags={"5.Music"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/music")
public class MusicController {

    private final MusicService musicService;

    //음악 불러오기
    @GetMapping
    @ApiOperation(value = "retrieve Music")
    public Object retrieveMusic(@ApiIgnore @CurrentAccount Account account){
        Object response = musicService.getMusicList();
        return response;
    }

    //음악 저장하기
    @PutMapping
    @ApiOperation(value = "set BackgroundImg")
    public Object setBackground(@Valid @RequestBody @ApiParam(value = "노래파일, 스토리보드 Id" ,required = true) SetMusicRequest setMusicRequest, @ApiIgnore @CurrentAccount Account account){

        Object response= musicService.setMusic(setMusicRequest);
        return response;
    }
}
