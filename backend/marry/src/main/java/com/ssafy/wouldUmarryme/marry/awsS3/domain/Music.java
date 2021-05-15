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
@Table(name = "music")
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "music_id")
    private Long id;

    @Column(name = "music_name")
    private String musicName;

    @Column(name = "music_Url")
    private String musicUrl;


    @Column(name = "music_img_name")
    private String musicImgName;

    @Column(name = "music_img_url")
    private String musicImgUrl;

    @Column(name = "music_title")
    private String title;

    @Column(name = "music_artist")
    private String artist;

    @Builder
    public Music(String musicName, String musicUrl, String title, String artist, String musicImgName, String musicImgUrl){
        this.musicName = musicName;
        this.musicUrl = musicUrl;
        this.artist = artist;
        this.musicImgName = musicImgName;
        this.musicImgUrl = musicImgUrl;
        this.title = title;
    }


}
