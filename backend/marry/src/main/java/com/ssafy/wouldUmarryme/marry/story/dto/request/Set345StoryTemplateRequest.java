package com.ssafy.wouldUmarryme.marry.story.dto.request;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class Set345StoryTemplateRequest {
    private Long storyId;
    private String text1;
    private MultipartFile image1;
    private MultipartFile image2;
    private MultipartFile image3;
}
