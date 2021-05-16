package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.AddMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateMusicRequest;
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

@Api(tags={"06. Music"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/music")
public class MusicController {

    private final MusicService musicService;

    @GetMapping
    @ApiOperation(value = "음악 선택지 불러오기")
    public Object retrieveMusic(@ApiIgnore @CurrentAccount Account account){
        Object response = musicService.getMusicList();
        return response;
    }

    @PutMapping
    @ApiOperation(value = "음악 저장")
    public Object setMusic(@Valid @RequestBody @ApiParam(value = "노래 Id, 스토리보드 Id" , required = true) SetMusicRequest setMusicRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = musicService.setMusic(setMusicRequest,account);
        return response;
    }

    @PostMapping
    @ApiOperation(value = "음악 추가")
    public Object createMusic(@Valid @ApiParam(value = "음악 파일", required = true) MultipartFile music) throws IOException {
        Object response = musicService.createMusic(music);
        return response;
    }

    @PutMapping("/image")
    @ApiOperation(value = "앨범 사진 추가")
    public Object updateImageMusic(@Valid @ApiParam(value = "앨범 파일", required = true) MultipartFile image, UpdateMusicRequest updateMusicRequest) throws IOException {
        Object response = musicService.updateImageMusic(image,updateMusicRequest);
        return response;
    }
}

