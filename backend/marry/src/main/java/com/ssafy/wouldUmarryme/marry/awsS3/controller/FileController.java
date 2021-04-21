package com.ssafy.wouldUmarryme.marry.awsS3.controller;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.File;
import com.ssafy.wouldUmarryme.marry.awsS3.service.FileService;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
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
    public File create(MultipartFile image, @ApiIgnore @CurrentAccount Account account) throws IOException {
        return fileService.createImage(image);
    }


}
