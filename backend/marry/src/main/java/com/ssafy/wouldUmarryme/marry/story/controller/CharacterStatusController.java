package com.ssafy.wouldUmarryme.marry.story.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.service.CharacterStatusService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;

@Api(tags={"05. CharacterStatus"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/status")
public class CharacterStatusController {
    private final CharacterStatusService characterStatusService;

    //캐릭터 상태 추가하기
    //캐릭터 추가하기
    @PostMapping
    @ApiOperation("캐릭터 상태 추가")
    public Object createCharacter(@RequestParam(value = "status")String status, @RequestParam(value = "gender")String gender,@RequestParam(value = "characterId") Long characterId, @RequestParam(value = "image") MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = characterStatusService.createCharacter(status,gender,characterId,image);
        return response;
    }
}
