package com.ssafy.wouldUmarryme.marry.story.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class SetSpotRequest {
    private MultipartFile spotImg;
    private Long storyBoardId;
    private int storyIndex;
}
