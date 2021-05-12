package com.ssafy.wouldUmarryme.marry.weddingcard.dto;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CreateWeddingCardRequest {
    private Long storyBoardId;
    private Long spotId;
}
