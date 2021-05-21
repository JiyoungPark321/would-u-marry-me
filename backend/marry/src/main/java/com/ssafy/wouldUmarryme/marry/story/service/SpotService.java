package com.ssafy.wouldUmarryme.marry.story.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.dto.response.SpotResponse;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.repository.SpotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class SpotService {

    private final SpotRepository spotRepository;
    private final AwsS3Service awsS3Service;

    @Transactional(readOnly = true)
    public Object getSpotList() {
        List<Spot> spotList = spotRepository.findAll();
        List<SpotResponse> spotResponses = SpotResponse.listOf(spotList);
        return makeResponse("200", spotResponses, "success", HttpStatus.OK);
    }

    public Object createSpot(MultipartFile image) throws IOException {
        String imgName = awsS3Service.uploadProfileImage(image,"spot",Long.parseLong("1"));
        String imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" +imgName;
        Spot spot = Spot.builder()
                .spotName(imgName)
                .imgUrl(imgUrl)
                .build();
        spotRepository.save(spot);
        return makeResponse("200", spot, "success", HttpStatus.OK);
    }
}
