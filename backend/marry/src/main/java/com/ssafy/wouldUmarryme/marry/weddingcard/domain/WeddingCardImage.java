package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "cardimage")
public class WeddingCardImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cardimage_id")
    private Long id;

    @Column(name = "cardimage_path")
    private String cardImagePath;

    @Column(name = "cardimage_full_path")
    private String WeddingCardImageFullPath;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="card_id")
    private WeddingCard weddingcard;

}
