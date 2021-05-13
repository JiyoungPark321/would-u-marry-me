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
@Table(name = "wedding_card_map")
public class WeddingCardMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wedding_card_map_id")
    private Long  id;

    @Column(name = "wedding_card_map_name")
    private String placeName;

    @Column(name = "wedding_card_map_x")
    private Double x;

    @Column(name = "wedding_card_map_y")
    private Double y;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wedding_card_id")
    private WeddingCard weddingCard;

    @Builder
    public WeddingCardMap(String placeName, Double x, Double y, WeddingCard weddingCard){
        this.placeName = placeName;
        this.x = x;
        this.y = y;
        this.weddingCard = weddingCard;
    }
}
