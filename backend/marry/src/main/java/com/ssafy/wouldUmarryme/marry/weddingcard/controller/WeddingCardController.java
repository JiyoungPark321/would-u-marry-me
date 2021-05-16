package com.ssafy.wouldUmarryme.marry.weddingcard.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.CreateWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.InputWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.RetrieveWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.TemplateNumberRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.service.WeddingCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags = {"11. WeddingCard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/weddingcard")
public class WeddingCardController {

    private final WeddingCardService weddingCardService;

    @PostMapping
    @ApiOperation(value = "청첩장 생성")
    public Object create(@Valid @ApiParam(value = "장소 Id, 스토리보드 Id 필요",required = true) @RequestBody
                                     CreateWeddingCardRequest createWeddingCardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response = weddingCardService.createCard(createWeddingCardRequest,account);
        return response;
    }

    @PutMapping
    @ApiOperation(value = "청첩장 값 넣기")
    public Object insert(@Valid @ApiParam(value="웨딩카드 Id 필요",required = true)
                                 InputWeddingCardRequest inputWeddingCardRequest, MultipartFile image , @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardService.inputCard(inputWeddingCardRequest,image);
        return response;
    }

    @GetMapping("/{storyBoardId}")
    @ApiOperation(value = "청첩장 조회")
    public Object retrieve(@Valid @ApiParam(value = "스토리보드 Id",required = true)
                           @PathVariable String storyBoardId,@ApiIgnore @CurrentAccount Account account){
        Object response = weddingCardService.retrieveCard(Long.parseLong(storyBoardId),account);
        return response;
    }



}
