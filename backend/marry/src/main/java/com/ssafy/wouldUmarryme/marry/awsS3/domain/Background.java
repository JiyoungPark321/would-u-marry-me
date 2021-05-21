package com.ssafy.wouldUmarryme.marry.awsS3.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "background")
public class Background {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "background_id")
    private Long id;

    @Column(name = "background_img_name")
    private String backgroundImgName;

    @Column(name = "background_img_url")
    private String backgroundImgUrl;


    @Builder
    public Background(String backgroundImgName,String backgroundImgUrl){
        this.backgroundImgName=backgroundImgName;
        this.backgroundImgUrl=backgroundImgUrl;
    }
}
