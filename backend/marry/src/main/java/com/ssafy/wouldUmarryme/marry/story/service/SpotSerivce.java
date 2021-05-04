package com.ssafy.wouldUmarryme.marry.story.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.story.repository.SpotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class SpotSerivce {


    private final SpotRepository spotRepository;

    @Transactional(readOnly = true)
    public Object getSpotList() {
        List<Spot> spotList = spotRepository.findAll();
        return makeResponse("200",spotList,"success", HttpStatus.OK);
    }
}
