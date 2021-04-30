package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "card_image")
public class WeddingCardImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_image_id")
    private Long id;

    @Column(name = "card_image_name")
    private String cardImageName;

    @Column(name = "card_image_Url")
    private String imgUrl;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="card_id")
    private WeddingCard weddingcard;

}
