package com.ssafy.wouldUmarryme.marry.weddingcard.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.CreateWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.service.WeddingCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;

@Api(tags = {"8.WeddingCard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/weddingcard")
public class WeddingCardController {

    private final WeddingCardService weddingCardService;

    @PostMapping
    @ApiOperation(value = "청첩장생성")
    public Object create(@Valid @ApiParam(value = "장소아이디, 스토리보드 아이디 필요",required = true) @RequestBody
    CreateWeddingCardRequest createWeddingCardRequest, @ApiIgnore @CurrentAccount Account account){
        Object response=weddingCardService.createCard(createWeddingCardRequest);
        return response;
    }
//
}
