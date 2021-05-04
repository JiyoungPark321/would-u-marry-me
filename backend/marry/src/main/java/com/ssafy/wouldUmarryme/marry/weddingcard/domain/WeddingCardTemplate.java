package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "card_template")
public class WeddingCardTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_template_id")
    private Long id; //1, 2, 3, 4

    @Column(name = "card_template_img_name")
    private String imageName;

    @Column(name = "card_template_img_url")
    private String imgUrl;

    @OneToOne(mappedBy = "template",fetch = FetchType.LAZY)
    private WeddingCard weddingCard;
}
