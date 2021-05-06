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
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"5.Music"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/music")
public class MusicController {

    private final MusicService musicService;

    //음악 불러오기
    @GetMapping
    @ApiOperation(value = "음악 선택지 불러오기")
    public Object retrieveMusic(@ApiIgnore @CurrentAccount Account account){
        Object response = musicService.getMusicList();
        return response;
    }

    //음악 저장하기
    @PutMapping
    @ApiOperation(value = "음악 저장하기")
    public Object setMusic(@Valid @RequestBody @ApiParam(value = "노래파일, 스토리보드 Id" ,required = true) SetMusicRequest setMusicRequest, @ApiIgnore @CurrentAccount Account account){

        Object response= musicService.setMusic(setMusicRequest);
        return response;
    }

    //음악 추가하기
    @PostMapping
    @ApiOperation("음악 추가하기기")
    public Object createMusic(@Valid @RequestBody @ApiParam(value = "노래파일" ,required = true)MultipartFile music) throws IOException {
        Object response = musicService.createMusic(music);
        return response;
    }
}

