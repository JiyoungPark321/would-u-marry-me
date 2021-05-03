package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class WeddingCardFour {
    private List<WeddingCard> weddingCardList;
    private MultipartFile cardImg;
    private String manPhone;
    private String manAccount;
    private String womanPhone;
    private String womanAccount;
    private String date;
    private String cardPlace;

}
