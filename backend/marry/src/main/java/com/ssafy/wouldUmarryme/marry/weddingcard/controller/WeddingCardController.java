package com.ssafy.wouldUmarryme.marry.weddingcard.controller;

import com.ssafy.wouldUmarryme.marry.weddingcard.service.WeddingCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Api(tags = {"6.WeddingCard"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/weddingcard")
public class WeddingCardController {

    //private final WeddingCardService weddingCardService;
//
//    @PostMapping
//    @ApiOperation(value = "청첩장 생성")
//    public Object create(@Valid @ApiParam(value = "청첩장 필요한 정보 (템플릿 번호 , 번호의 맞는 내용",required = true)))
//
}
