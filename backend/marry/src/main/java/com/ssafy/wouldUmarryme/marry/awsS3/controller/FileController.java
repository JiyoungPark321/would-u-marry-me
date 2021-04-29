package com.ssafy.wouldUmarryme.marry.awsS3.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryImage;
import com.ssafy.wouldUmarryme.marry.awsS3.service.FileService;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
//import com.ssafy.wouldUmarryme.marry.story.domain.Story;
//import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;
//
//    //이미저 저장
//    @PostMapping("/image")
//    public Object create(@RequestPart(value = "file") MultipartFile image) throws IOException {
//
//        return fileService.createImage(image);
//    }

//    //배경 선택
//    @PostMapping("/background")
//    public Storyboard setBackground(MultipartFile image, Long storyBoard_id, @ApiIgnore @CurrentAccount Account account) throws  IOException{
//        return fileService.setBackground(image,storyBoard_id);
//    }
//
//    //건물 선택
//    @PostMapping("/structer")
//    public Story setStructer(MultipartFile image, Long storyBoard_id, int index, @ApiIgnore @CurrentAccount Account account) throws  IOException{
//        return fileService.setStructer(image,storyBoard_id,index);
//    }



}
