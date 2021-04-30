package com.ssafy.wouldUmarryme.marry.weddingcard.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "card_comments")
public class WeddingCardComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "card_comment_id")
    private Long id;

    @Column(name = "card_comment_value")
    private String value;

    //몇번째위치의 멘트인지
    @Column(name="card_comment_index")
    private int index;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="card_id")
    private WeddingCard weddingcard;
}
