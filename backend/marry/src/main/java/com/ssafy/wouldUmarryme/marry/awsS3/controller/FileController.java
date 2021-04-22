package com.ssafy.wouldUmarryme.marry.awsS3.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Image;
import com.ssafy.wouldUmarryme.marry.awsS3.service.FileService;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    //이미저 저장
    @PostMapping("/image")
    public Image create(MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws IOException {
        return fileService.createImage(image);
    }

    //배경 선택
    @PostMapping("/background")
    public Image setBackground(MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws  IOException{
        return fileService.setBackground(image);
    }

    //건물 선택
    @PostMapping("/structer")
    public Image setStructer(MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws  IOException{
        return fileService.setStructer(image);
    }



}
