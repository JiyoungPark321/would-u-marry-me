package com.ssafy.wouldUmarryme.marry.weddingcard.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.TemplateNumberRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.service.WeddingCardTemplateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import javax.validation.Valid;
import java.io.IOException;

@Api(tags={"10. WeddingCardTemplate"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/weddingcardtemplate")
public class WeddingCardTemplateController {
    private final WeddingCardTemplateService weddingCardTemplateService;

    @PutMapping
    @ApiOperation(value = "웨딩카드템플릿 설정")
    public Object setTemplate(@Valid @ApiParam(value = "카드 Id, 템플릿 Id",required = true) @RequestBody TemplateNumberRequest templateNumberRequest,
                              @ApiIgnore @CurrentAccount Account account){
        Object response = weddingCardTemplateService.setTemplate(templateNumberRequest);
        return response;
    }

    @GetMapping
    @ApiOperation(value = "웨딩카드템플릿 불러오기")
    public Object retrieveWeddingCardTemplate(@ApiIgnore @CurrentAccount Account account){
        Object response = weddingCardTemplateService.retrieveWeddingCardTemplate();
        return response;
    }

    @PostMapping
    @ApiOperation(value = "웨딩카드템플릿 추가")
    public Object createTemplate(@Valid @RequestBody @ApiParam(value = "템플릿 사진", required = true) MultipartFile image,@ApiIgnore @CurrentAccount Account account) throws IOException {
        Object response = weddingCardTemplateService.createWeddingCardTemplate(image);
        return response;
    }
}
