package com.ssafy.wouldUmarryme.marry.story.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.story.service.SpotService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"08. Spot"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/spot")
public class SpotController {

    private final SpotService spotService;

    //장소 이미지 불러오기
    @GetMapping
    @ApiOperation(value = "장소 이미지 불러오기")
    public Object retrieveSpot(@ApiIgnore @CurrentAccount Account account){
        Object response = spotService.getSpotList();
        return response;
    }

    @PostMapping
    @ApiOperation(value = "장소 이미지 추가")
    public Object CreateSpot(@Valid @RequestParam  @ApiParam(value ="사진",required = true) MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = spotService.createSpot(image);
        return response;
    }


}
