package com.ssafy.wouldUmarryme.marry.story.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateStoryRequest {
    private Long spotId;
    private Long storyBoardId;
    private int index;
}
