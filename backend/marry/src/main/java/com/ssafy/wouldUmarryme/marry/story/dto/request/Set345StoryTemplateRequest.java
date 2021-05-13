package com.ssafy.wouldUmarryme.marry.story.dto.request;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class Set345StoryTemplateRequest {
    private Long storyId;
    private String first;
    private MultipartFile second;
    private MultipartFile third;
    private MultipartFile fourth;
}
