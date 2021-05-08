package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "card")
public class WeddingCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_id")
    private Long id;

    @Column(name = "card_time")
    private String time;

    @Column(name="card_date")
    private String date;

    @Column(name="card_place")
    private String place;

    @Column(name="man_phone")
    private String manPhone;

    @Column(name="woman_phone")
    private String womanPhone;

    @Column(name="man_account")
    private String manAccountNumber;

    @Column(name="woman_account")
    private String womanAccountNumber;

    @Column(name="first_comment")
    private String firstComment;

    @Column(name = "second_comment")
    private String secondComment;

    @JsonIgnore
    @OneToOne( fetch = FetchType.LAZY,orphanRemoval = true)
    @JoinColumn(name="spot_id")
    private Spot spot;


    @JsonIgnore
    @OneToOne(mappedBy = "weddingCard",fetch = FetchType.LAZY,orphanRemoval = true)
    private Storyboard storyboard;

    @OneToOne(fetch = FetchType.EAGER,orphanRemoval = true)
    @JoinColumn(name="card_template_id")
    private WeddingCardTemplate template;

    @OneToOne(mappedBy = "weddingCard",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
    private WeddingCardImage weddingCardImage;


    @OneToOne(mappedBy = "weddingCard",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
    private WeddingCardMap weddingCardMap;

    @Builder
    public WeddingCard(Storyboard storyboard,Spot spot){
        this.storyboard=storyboard;
        this.spot=spot;
    }



}
