package com.ssafy.wouldUmarryme.marry.story.dto.request;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@Getter
public class AddMusicRequest {
    private String artist;
    private String title;
}
