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

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "wedding_card")
public class WeddingCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wedding_card_id")
    private Long id;

    @Column(name = "wedding_card_time")
    private String time;

    @Column(name = "wedding_card_date")
    private String date;

    @Column(name = "wedding_card_place")
    private String place;

    @Column(name = "man_phone")
    private String manPhone;

    @Column(name = "woman_phone")
    private String womanPhone;

    @Column(name = "man_account")
    private String manAccountNumber;

    @Column(name = "woman_account")
    private String womanAccountNumber;

    @Column(name = "first_comment")
    private String firstComment;

    @Column(name = "second_comment")
    private String secondComment;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "spot_id")
    private Spot spot;

    @JsonIgnore
    @OneToOne(mappedBy = "weddingCard", fetch = FetchType.LAZY, orphanRemoval = true)
    private Storyboard storyboard;

    @Column(name = "wedding_card_template")
    private Long template;

    @OneToOne(mappedBy = "weddingCard", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private WeddingCardImage weddingCardImage;

    @OneToOne(mappedBy = "weddingCard", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private WeddingCardMap weddingCardMap;

    @Builder
    public WeddingCard(String time, String date, String place, String manPhone, String womanPhone,
                       String manAccountNumber, String womanAccountNumber, String firstComment,
                       String secondComment, WeddingCardImage weddingCardImage,
                       Storyboard storyboard,Spot spot,WeddingCardMap weddingCardMap){
        this.time = time;
        this.date = date;
        this.place = place;
        this.manPhone = manPhone;
        this.womanPhone = womanPhone;
        this.manAccountNumber = manAccountNumber;
        this.womanAccountNumber = womanAccountNumber;
        this.firstComment = firstComment;
        this.secondComment = secondComment;
        this.weddingCardImage = weddingCardImage;
        this.storyboard = storyboard;
        this.spot = spot;
        this.weddingCardMap = weddingCardMap;
    }

    public void updateValue1(WeddingCard requestWeddingCard, WeddingCardImage requestWeddingCardImage, WeddingCardMap weddingCardMap){
        this.time = requestWeddingCard.time;
        this.date = requestWeddingCard.date;
        this.place = requestWeddingCard.place;
        this.firstComment = requestWeddingCard.firstComment;
        this.secondComment = requestWeddingCard.secondComment;
        this.weddingCardImage = requestWeddingCardImage;
        this.weddingCardMap = weddingCardMap;
    }
    public void updateValue2(WeddingCard requestWeddingCard,WeddingCardMap weddingCardMap){
        this.time = requestWeddingCard.time;
        this.date = requestWeddingCard.date;
        this.place = requestWeddingCard.place;
        this.firstComment = requestWeddingCard.firstComment;
        this.secondComment = requestWeddingCard.secondComment;
        this.weddingCardMap = weddingCardMap;
    }
    public void updateValue3(WeddingCard requestWeddingCard, WeddingCardImage requestWeddingCardImage, WeddingCardMap weddingCardMap){
        this.time = requestWeddingCard.time;
        this.date = requestWeddingCard.date;
        this.place = requestWeddingCard.place;
        this.firstComment = requestWeddingCard.firstComment;
        this.secondComment = requestWeddingCard.secondComment;
        this.weddingCardImage = requestWeddingCardImage;
        this.weddingCardMap = weddingCardMap;
        this.manAccountNumber= requestWeddingCard.manAccountNumber;
        this.womanAccountNumber= requestWeddingCard.womanAccountNumber;
        this.manPhone= requestWeddingCard.manPhone;
        this.womanPhone= requestWeddingCard.womanPhone;
    }
    public void updateValue4(WeddingCard requestWeddingCard, WeddingCardImage requestWeddingCardImage){
        this.time = requestWeddingCard.time;
        this.date = requestWeddingCard.date;
        this.place = requestWeddingCard.place;
        this.firstComment = requestWeddingCard.firstComment;
        this.secondComment = requestWeddingCard.secondComment;
        this.weddingCardImage = requestWeddingCardImage;
        this.manAccountNumber= requestWeddingCard.manAccountNumber;
        this.womanAccountNumber= requestWeddingCard.womanAccountNumber;
        this.manPhone= requestWeddingCard.manPhone;
        this.womanPhone= requestWeddingCard.womanPhone;

    }

    public void updateSpot(Spot spot){this.spot=spot;}
    public void updateTemplate(Long template){this.template=template;}
}
