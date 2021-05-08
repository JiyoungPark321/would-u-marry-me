package com.ssafy.wouldUmarryme.marry.story.dto.response;

import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Getter;

@Getter
public class UpdateStoryboardTitleResponse {
    private Long id;
    private String title;

    public UpdateStoryboardTitleResponse(Long id, String title){
        this.id=id;
        this.title=title;
    }
    public static UpdateStoryboardTitleResponse of(Storyboard storyboard){
        return new UpdateStoryboardTitleResponse(storyboard.getId(), storyboard.getTitle());
    }
}
