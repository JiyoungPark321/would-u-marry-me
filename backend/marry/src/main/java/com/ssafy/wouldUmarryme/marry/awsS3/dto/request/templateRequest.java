package com.ssafy.wouldUmarryme.marry.awsS3.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class templateRequest {
    private MultipartFile img1;
    private MultipartFile img2;
    private MultipartFile img3;
    private String sentence1;
    private String sentence2;
}
