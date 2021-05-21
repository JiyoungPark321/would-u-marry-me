package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "wedding_card_image")
public class WeddingCardImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wedding_card_image_id")
    private Long id;

    @Column(name = "wedding_card_image_name")
    private String imgName;

    @Column(name = "wedding_card_image_Url")
    private String imgUrl;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wedding_card_id")
    private WeddingCard weddingCard;

    @Builder
    public WeddingCardImage(String imgName,String imgUrl,WeddingCard weddingCard){
        this.imgName = imgName;
        this.imgUrl = imgUrl;
        this.weddingCard = weddingCard;
    }

}
