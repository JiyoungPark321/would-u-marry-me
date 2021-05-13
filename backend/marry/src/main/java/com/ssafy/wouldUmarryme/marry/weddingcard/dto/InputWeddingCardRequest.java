package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardMap;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;

@Getter
@Setter
public class InputWeddingCardRequest {
    private Long cardId;
    private MultipartFile cardImg;
    private String cardDate;
    private String cardPlace;
    private String cardFirstComment;
    private String cardSecondComment;
    private String cardTime;
    private String cardManPhone;
    private String cardWomanPhone;
    private String cardManAccountNumber;
    private String cardWomanAccountNumber;
    private MapInfo mapInfo;
    private String placeName;
    private Double x;
    private Double y;

    //request를 해당 객체로 변환
    public WeddingCard toWeddingCard(){
        return WeddingCard.builder()
                .firstComment(cardFirstComment)
                .secondComment(cardSecondComment)
                .date(cardDate)
                .place(cardPlace)
                .time(cardTime)
                .manPhone(cardManPhone)
                .womanPhone(cardWomanPhone)
                .manAccountNumber(cardManAccountNumber)
                .womanAccountNumber(cardWomanAccountNumber)
                .weddingCardMap(toWeddingCardMap())
                .build();
    }

    public WeddingCardMap toWeddingCardMap(){
        return WeddingCardMap.builder()
                .placeName(placeName)
                .x(x)
                .y(y)
                .build();
    }
}
