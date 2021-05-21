package com.ssafy.wouldUmarryme.marry.story.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter @Setter
@Table(name = "story_images")
public class StoryImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_image_id")
    private Long id;

    @Column(name = "story_image_name")
    private String imgName;

    @Column(name = "story_image_ul")
    private String imgUrl;

    @JsonIgnore
    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "story_id")
    private Story story;

    //몇번째위치의 사진인지
    @Column(name = "story_image_index")
    private int index;

    @Builder
    public StoryImage(String imgName,String imgUrl,Story story,int index){
        this.imgName = imgName;
        this.imgUrl = imgUrl;
        this.story = story;
        this.index = index;
    }

}