package com.ssafy.wouldUmarryme.marry.weddingcard.service;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.repository.SpotRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardImage;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardTemplate;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.CreateWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.InputWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.RetrieveWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.TemplateNumberRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardImageRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardTemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

import java.io.IOException;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor

public class WeddingCardService {

    private final WeddingCardRepository weddingCardRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final SpotRepository spotRepository;
    private final WeddingCardTemplateRepository weddingCardTemplateRepository;
    private final WeddingCardImageRepository weddingCardImageRepository;
    private final AwsS3Service awsS3Service;


    public Object createCard(CreateWeddingCardRequest createWeddingCardRequest) {
        Optional<Storyboard> storyboard=storyBoardRepository.findById(createWeddingCardRequest.getStoryBoardId());
        Optional<Spot> spot=spotRepository.findById(createWeddingCardRequest.getSpotId());

        WeddingCard weddingCard= WeddingCard.builder()
                .spot(spot.get())
                .storyboard(storyboard.get())
                .build();
        WeddingCard save= weddingCardRepository.save(weddingCard);
        return makeResponse("200",save,"success", HttpStatus.OK);

    }

    public Object setTemplate(TemplateNumberRequest templateNumberRequest) {
        Optional<WeddingCard> card = weddingCardRepository.findById(templateNumberRequest.getCardId());
        Optional<WeddingCardTemplate> cardTemplate = weddingCardTemplateRepository.findById(templateNumberRequest.getCardTemplateId());

        WeddingCard save = card.get();
        save.setTemplate(cardTemplate.get());
        weddingCardRepository.save(save);

        return makeResponse("200",save,"success", HttpStatus.OK);
    }

    public Object inputCard(InputWeddingCardRequest inputWeddingCardRequest) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCardRequest.getCardId());
        WeddingCard save = card.get();

        //이미지 저장하기
        MultipartFile object = inputWeddingCardRequest.getCardImg();
        String imgName="";
        String imgUrl="";

        if(object!=null){
            imgName = awsS3Service.uploadProfileImage(object,"card");
            imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            WeddingCardImage weddingCardImage= WeddingCardImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .build();
            weddingCardImageRepository.save(weddingCardImage);
            save.setWeddingCardImage(weddingCardImage);
        }

        save.setDate(inputWeddingCardRequest.getCardDate());
        save.setPlace(inputWeddingCardRequest.getCardPlace());
        save.setFirstComment(inputWeddingCardRequest.getCardFirstComment());
        save.setSecondComment(inputWeddingCardRequest.getCardSecondComment());
        save.setTime(inputWeddingCardRequest.getCardTime());
        save.setManPhone(inputWeddingCardRequest.getCardManPhone());
        save.setWomanPhone(inputWeddingCardRequest.getCardWomanPhone());
        save.setManAccountNumber(inputWeddingCardRequest.getCardManAccountNumber());
        save.setWomanAccountNumber(inputWeddingCardRequest.getCardWomanAccountNumber());
        //save.setWeddingCardMap(inputWeddingCardRequest.getWeddingCardMap());
        weddingCardRepository.save(save);
        return makeResponse("200",save,"success",HttpStatus.OK);
    }

    public Object retrieveCard(RetrieveWeddingCardRequest retrieveWeddingCardRequest) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(retrieveWeddingCardRequest.getStoryboardId());
        Optional<WeddingCard> retrieve = weddingCardRepository.findByStoryboard(storyboard.get());
        return makeResponse("200",retrieve.get(),"success",HttpStatus.OK);
    }
}
