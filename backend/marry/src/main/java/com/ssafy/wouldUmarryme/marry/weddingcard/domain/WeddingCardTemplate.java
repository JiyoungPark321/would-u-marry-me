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
@Table(name = "wedding_card_template")
public class WeddingCardTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wedding_card_template_id")
    private Long id; //1, 2, 3, 4

    @Column(name = "wedding_card_template_img_name")
    private String imageName;

    @Column(name = "wedding_card_template_img_url")
    private String imgUrl;


    @Builder
    public WeddingCardTemplate(String imageName, String imgUrl){
        this.imageName = imageName;
        this.imgUrl = imgUrl;
    }
}
