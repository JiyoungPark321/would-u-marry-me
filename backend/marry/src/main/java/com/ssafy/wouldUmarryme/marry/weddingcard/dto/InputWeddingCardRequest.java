package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InputWeddingCardRequest {
    private Long weddingId;
    private String weddingDate;
    private String weddingPlace;
    private String weddingFirstComment;
    private String weddingSecondComment;
    private String weddingTime;
    private String weddingManPhone;
    private String weddingWomanPhone;
    private String weddingManAccountNumber;
    private String weddingWomanAccountNumber;
    private String placeName;
    private Double x;
    private Double y;

    //request를 해당 객체로 변환
    public WeddingCard toWeddingCard(){
        return WeddingCard.builder()
                .firstComment(weddingFirstComment)
                .secondComment(weddingSecondComment)
                .date(weddingDate)
                .place(weddingPlace)
                .time(weddingTime)
                .manPhone(weddingManPhone)
                .womanPhone(weddingWomanPhone)
                .manAccountNumber(weddingManAccountNumber)
                .womanAccountNumber(weddingWomanAccountNumber)
                .build();
    }

}
