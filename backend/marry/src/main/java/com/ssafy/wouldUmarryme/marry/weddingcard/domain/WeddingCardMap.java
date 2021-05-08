package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="card_map")
public class WeddingCardMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="card_map_id")
    private Long  id;

    @Column(name = "card_map_name")
    private String placeName;

    @Column(name="card_map_x")
    private Double x;

    @Column(name="card_map_y")
    private Double y;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "card_id")
    private WeddingCard weddingCard;
}
