package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardMap;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

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
    //private WeddingCardMap weddingCardMap;

}
