package com.ssafy.wouldUmarryme.marry.story.dto.request;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class Set2StoryTemplateRequest {
    private Long storyId;
    //private MultipartFile image1;
    private String text1;
}
