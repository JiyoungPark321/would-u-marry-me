package com.ssafy.wouldUmarryme.marry.story.domain;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.StoryComment;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.StoryImage;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "story")
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Long id;

    //몇번째 story인지
    @Column(name="story_index")
    private int index;

    //몇번째 템플릿인지
    @Column(name="story_template")
    private int template;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storyboard_id")
    private Storyboard storyboard;

    @OneToOne( fetch = FetchType.LAZY)
    @JoinColumn(name="spot_id")
    private Spot spot;

    //이미지 저장
    @OneToMany(mappedBy = "story",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<StoryImage> images = new ArrayList<>();

    //글 저장
    @OneToMany(mappedBy="story",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<StoryComment> comments = new ArrayList<>();

    @Builder
    public Story(int index, Spot spot, Storyboard storyboard){
        this.index= index;
        this.spot=spot;
        this.storyboard=storyboard;
    }
}
