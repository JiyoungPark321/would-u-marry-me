package com.ssafy.wouldUmarryme.marry.story.dto.response;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Character;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Music;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class StoryboardResponse {
    private Long id;
    private String title;
    private Background background;
    private Music music;
    private WeddingCard weddingCard;
    private List<Story> stories;
    private Character character;

    public StoryboardResponse(Long id,String title
            ,Background background,Music music,WeddingCard weddingCard,List<Story> stories,Character character
                              ){
        this.id=id;
        this.title = title;
        this.background=background;
        this.music=music;
        this.weddingCard=weddingCard;
        this.stories=stories;
        this.character=character;

    }

    public static StoryboardResponse of(Storyboard storyboard){
        return new StoryboardResponse(storyboard.getId(), storyboard.getTitle()
                , storyboard.getBackground(), storyboard.getMusic(),storyboard.getWeddingCard(),storyboard.getStories(),storyboard.getCharacter()
        );
    }

    public static List<StoryboardResponse> listOf(List<Storyboard> storyboards){
        List<StoryboardResponse> storyboardResponses = new ArrayList<>();

        for (Storyboard storyboard : storyboards){
            storyboardResponses.add(of(storyboard));
        }
        return storyboardResponses;
    }

}
