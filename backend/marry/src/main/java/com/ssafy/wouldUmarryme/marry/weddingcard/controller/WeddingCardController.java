package com.ssafy.wouldUmarryme.marry.weddingcard.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.*;
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

    @PutMapping("/template1")
    @ApiOperation(value = "청첩장 1번 템플릿 값 넣기")
    public Object insert1(@Valid @ApiParam(value="웨딩카드 Id 필요",required = false)
                               @ModelAttribute InputWeddingCard1Request inputWeddingCard1Request, @RequestParam(value = "weddingImage1",required = false) MultipartFile weddingImage1 , @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardService.inputCard1(inputWeddingCard1Request,weddingImage1,account);
        return response;
    }
    @PutMapping("/template2")
    @ApiOperation(value = "청첩장 2번 템플릿 값 넣기")
    public Object insert2(@Valid @ApiParam(value="웨딩카드 Id 필요",required = false)
                         @ModelAttribute InputWeddingCard2Request inputWeddingCard2Request, @RequestParam(value = "weddingImage1",required = false) MultipartFile weddingImage1 , @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardService.inputCard2(inputWeddingCard2Request,weddingImage1,account);
        return response;
    }
    @PutMapping("/template3")
    @ApiOperation(value = "청첩장 3번 템플릿 값 넣기")
    public Object insert3(@Valid @ApiParam(value="웨딩카드 Id 필요",required = false)
                         @ModelAttribute InputWeddingCard3Request inputWeddingCard3Request, @RequestParam(value = "weddingImage1",required = false) MultipartFile weddingImage1 , @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardService.inputCard3(inputWeddingCard3Request,weddingImage1,account);
        return response;
    }
    @PutMapping("/template4")
    @ApiOperation(value = "청첩장 4번 템플릿 값 넣기")
    public Object insert4(@Valid @ApiParam(value="웨딩카드 Id 필요",required = false)
                         @ModelAttribute InputWeddingCard4Request inputWeddingCard4Request, @RequestParam(value = "weddingImage1",required = false) MultipartFile weddingImage1 , @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardService.inputCard4(inputWeddingCard4Request,weddingImage1,account);
        return response;
    }

//    @GetMapping("/{storyBoardId}")
//    @ApiOperation(value = "청첩장 조회")
//    public Object retrieve(@Valid @ApiParam(value = "스토리보드 Id",required = true)
//                           @PathVariable String storyBoardId,@ApiIgnore @CurrentAccount Account account){
//        Object response = weddingCardService.retrieveCard(Long.parseLong(storyBoardId),account);
//        return response;
//    }



}
