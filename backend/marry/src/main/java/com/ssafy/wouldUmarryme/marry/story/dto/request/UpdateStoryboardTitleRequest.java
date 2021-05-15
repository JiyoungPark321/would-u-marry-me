package com.ssafy.wouldUmarryme.marry.story.dto.request;


import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateStoryboardTitleRequest {
    private Long storyBoardId;
    private String title;

    public Storyboard toStoryboard(){
        return Storyboard.builder()
                .title(title)
                .build();
    }
}
