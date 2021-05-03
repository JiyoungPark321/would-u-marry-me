package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingPlace;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class WeddingCardTwo {

    private MultipartFile cardImg;
    private String cardDate;
    private String cardPlace;
    private List<WeddingCard> weddingCardComment;
    private String cardTime;
    private WeddingPlace cardMap;

}
