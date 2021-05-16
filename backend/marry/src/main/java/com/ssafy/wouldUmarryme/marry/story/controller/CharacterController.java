package com.ssafy.wouldUmarryme.marry.story.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateCharacterRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetCharacterRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.service.CharacterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;
import java.util.Objects;

@Api(tags={"04. Character"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/character")
public class CharacterController {

    private final CharacterService characterService;

    //캐릭터 불러오기
    @GetMapping
    @ApiOperation(value = "캐릭터 선택지 불러오기")
    public Object retrieveCharacter(@ApiIgnore @CurrentAccount Account account){
        Object response = characterService.getCharacterList();
        return response;
    }

    //캐릭터 저장하기
    @PutMapping
    @ApiOperation(value = "캐릭터 저장")
    public Object setCharacter(@Valid @RequestBody @ApiParam(value = "캐릭터 Id, 스토리보드 Id" ,required = true) SetCharacterRequest setCharacterRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = characterService.setCharacter(setCharacterRequest,account);
        return response;
    }

    //캐릭터 추가하기
    @PostMapping
    @ApiOperation("캐릭터 추가")
    public Object createCharacter(@RequestParam(value = "name")String name,@RequestParam(value = "image") MultipartFile image,@ApiIgnore @CurrentAccount Account account) throws IOException{
        Object response = characterService.createCharacter(name,image);
        return response;
    }

}
