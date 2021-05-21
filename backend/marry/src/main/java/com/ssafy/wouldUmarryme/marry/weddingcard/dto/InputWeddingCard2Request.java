package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InputWeddingCard2Request {
    private Long weddingId;
    private String weddingDate;
    private String weddingPlace;
    private String weddingText1;
    private String weddingText2;
    private String weddingTime;
    private String weddingMapPlace;
    private Double weddingMapX;
    private Double weddingMapY;

    //request를 해당 객체로 변환
    public WeddingCard toWeddingCard(){
        return WeddingCard.builder()
                .firstComment(weddingText1)
                .secondComment(weddingText2)
                .date(weddingDate)
                .place(weddingPlace)
                .time(weddingTime)
                .build();
    }

}
