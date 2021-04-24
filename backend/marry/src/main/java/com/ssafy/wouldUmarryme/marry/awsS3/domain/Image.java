package com.ssafy.wouldUmarryme.marry.awsS3.domain;

import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter @Setter
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long id;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "img_full_path")
    private String imgFullPath;

    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "story_id")
    private Story story;

    //몇번째위치의 사진인지
    @Column(name = "image_index")
    private int index;


}