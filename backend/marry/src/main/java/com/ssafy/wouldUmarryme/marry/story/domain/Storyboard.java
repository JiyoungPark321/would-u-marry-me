package com.ssafy.wouldUmarryme.marry.story.domain;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Character;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Music;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table(name = "storyboard")
public class Storyboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "storyboard_id")
    private Long id;

    //타이틀
    @Column(name="storyboard_title")
    private String title;

    //배경이미지
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "background_id")
    private Background background;

    //캐릭터
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="character_id")
    private Character character;

    //배경음악
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "music_id")
    private Music music;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="account_id")
    private Account account;

    @OneToMany(mappedBy = "storyboard", fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    private List<Story> stories = new ArrayList<>();

    @OneToOne(mappedBy = "storyboard",cascade = CascadeType.ALL)
    private WeddingCard weddingCard;

    @Builder
    public Storyboard(@NotNull String title){
        this.title=title;
    }


}
