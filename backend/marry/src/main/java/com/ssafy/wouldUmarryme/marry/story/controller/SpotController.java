package com.ssafy.wouldUmarryme.marry.story.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.service.SpotSerivce;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@Api(tags={"6.background"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/spot")
public class SpotController {

    private final SpotSerivce spotSerivce;

    //장소 이미지 불러오기
    @GetMapping
    @ApiOperation(value = "장소이미지 불러오기")
    public Object retrieveSpot(@ApiIgnore @CurrentAccount Account account){
        Object response = spotSerivce.getSpotList();
        return response;
    }


}
