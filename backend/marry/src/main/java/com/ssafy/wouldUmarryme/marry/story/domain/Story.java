package com.ssafy.wouldUmarryme.marry.story.domain;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Structer;
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
    private int index;

    @ManyToOne
    @JoinColumn(name = "storyboard_id")
    private Storyboard storyboard;

    @OneToOne
    @JoinColumn(name="structer_id")
    private Structer structer;

    //이미지 저장
    @Column(name = "image_path1")
    private String imagePath1;

    @Column(name = "img_full_path1")
    private String imgFullPath1;

    @Column(name = "image_path2")
    private String imagePath2;

    @Column(name = "img_full_path2")
    private String imgFullPath2;

    @Column(name = "image_path3")
    private String imagePath3;

    @Column(name = "img_full_path3")
    private String imgFullPath3;

    //글 저장
    @Column(name="sentence1")
    private String sentence1;

    @Column(name="sentence2")
    private String sentence2;


}
