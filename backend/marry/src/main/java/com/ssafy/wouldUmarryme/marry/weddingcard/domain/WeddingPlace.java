package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="card_Map")
public class WeddingPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="card_template_place_id")
    private Long  id;

    @Column(name = "card_template_place_name")
    private String placeName;

    @Column(name="card_template_x")
    private Double x;

    @Column(name="card_template_y")
    private Double y;
}
