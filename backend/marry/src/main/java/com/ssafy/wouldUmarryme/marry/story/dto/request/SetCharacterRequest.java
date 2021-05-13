package com.ssafy.wouldUmarryme.marry.story.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SetCharacterRequest {
    private Long characterId;
    private Long storyBoardId;
}
