package com.ssafy.wouldUmarryme.marry.weddingcard.service;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.repository.SpotRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.CreateWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor

public class WeddingCardService {

    private final WeddingCardRepository weddingCardRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final SpotRepository spotRepository;

    public Object createCard(CreateWeddingCardRequest createWeddingCardRequest) {
        Optional<Storyboard> storyboard=storyBoardRepository.findById(createWeddingCardRequest.getStoryBoardId());
        Optional<Spot> spot=spotRepository.findById(createWeddingCardRequest.getSpotId());

        WeddingCard weddingCard= WeddingCard.builder()
                .spot(spot.get())
                .storyboard(storyboard.get())
                .build();
        WeddingCard save= weddingCardRepository.save(weddingCard);
        return makeResponse("200",convertObjectToJson(save),"success", HttpStatus.OK);

    }
}
