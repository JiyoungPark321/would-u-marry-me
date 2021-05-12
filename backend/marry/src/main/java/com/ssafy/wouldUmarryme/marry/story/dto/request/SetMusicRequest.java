package com.ssafy.wouldUmarryme.marry.story.dto.request;


import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class SetMusicRequest {
    private Long musicId;
    private Long storyBoardId;
}
