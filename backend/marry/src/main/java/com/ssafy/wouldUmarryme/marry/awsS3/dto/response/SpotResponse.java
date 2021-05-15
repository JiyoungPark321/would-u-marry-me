package com.ssafy.wouldUmarryme.marry.awsS3.dto.response;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class SpotResponse {
    private Long id;
    private String imgUrl;

    public SpotResponse(Long id, String imgUrl){
        this.id = id;
        this.imgUrl =imgUrl;
    }

    public static SpotResponse of(Spot spot){
        return new SpotResponse(spot.getId(),spot.getImgUrl());
    }

    public static List<SpotResponse> listOf(List<Spot> spots){
        List<SpotResponse> spotResponses = new ArrayList<>();

        for (Spot spot : spots){
            spotResponses.add(of(spot));
        }
        return spotResponses;
    }


}
