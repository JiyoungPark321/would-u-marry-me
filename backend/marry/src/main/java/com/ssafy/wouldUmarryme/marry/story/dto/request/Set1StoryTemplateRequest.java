package com.ssafy.wouldUmarryme.marry.story.dto.request;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class Set1StoryTemplateRequest {
    private Long storyId;
    private MultipartFile first;
    private String second;
    private MultipartFile third;
    private String fourth;
}
