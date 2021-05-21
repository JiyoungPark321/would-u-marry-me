package com.ssafy.wouldUmarryme.marry.weddingcard.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.repository.SpotRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardImage;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardMap;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.*;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardImageRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardMapRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

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
    private final WeddingCardImageRepository weddingCardImageRepository;
    private final AwsS3Service awsS3Service;
    private final WeddingCardMapRepository weddingCardMapRepository;

    public Object createCard(CreateWeddingCardRequest createWeddingCardRequest,Account account) {
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(createWeddingCardRequest.getStoryBoardId(),account);
        if(storyboard.isEmpty()){
            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        Optional<Spot> spot = spotRepository.findById(createWeddingCardRequest.getSpotId());
        if(spot.isEmpty()){
            return makeResponse("400", null, "fail : spot를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }

        //웨딩카드가 처음 만드는 것이라면
        if(storyboard.get().getWeddingCard() == null){
            WeddingCard weddingCard = WeddingCard.builder()
                    .spot(spot.get())
                    .storyboard(storyboard.get())
                    .build();
            WeddingCard save = weddingCardRepository.save(weddingCard);
            storyboard.get().updateWeddingCard(save);
            storyBoardRepository.save(storyboard.get());
            return makeResponse("200", save,  "success", HttpStatus.OK);
        }
        //만들어져있다면
       else{
            storyboard.get().getWeddingCard().updateSpot(spot.get());
            WeddingCard save = weddingCardRepository.save(storyboard.get().getWeddingCard());
            storyboard.get().updateWeddingCard(save);
            storyBoardRepository.save(storyboard.get());
            return makeResponse("200",save,"success",HttpStatus.OK);
        }
    }
    public WeddingCardImage saveImage(WeddingCard weddingCard,MultipartFile image) throws IOException {
        //이미지 저장하기
        String imgName = "";
        String imgUrl = "";
        WeddingCardImage weddingCardImage = null;

        //기존 weddingcardImage가 있는 지 체크 후
        //있으면 삭제
        Optional<WeddingCardImage> isWeddingCardImage = weddingCardImageRepository.findByWeddingCard(weddingCard);
        if(isWeddingCardImage.isPresent()){
            weddingCardImageRepository.delete(isWeddingCardImage.get());
        }
        if(image != null){
            imgName = awsS3Service.uploadProfileImage(image,"card",weddingCard.getId());
            imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            weddingCardImage = WeddingCardImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .weddingCard(weddingCard)
                    .build();
            weddingCardImage = weddingCardImageRepository.save(weddingCardImage);

        }
        return weddingCardImage;
    }


    public Object inputCard1(InputWeddingCard1Request inputWeddingCard1Request, MultipartFile image, Account account) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCard1Request.getWeddingId());
        if(!card.isPresent()){
           return makeResponse("400", null, "fail : 해당 카드가 없습니다.", HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByWeddingCardAndAccount(card.get(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "fail : 본인의 카드가 아닙니다.", HttpStatus.NOT_FOUND);
        }

        WeddingCard save = card.get();
        WeddingCardImage weddingCardImage = saveImage(save,image);


        //기존 weddingcardMap이 있는 지 체크 후
        //있으면 삭제해
       Optional<WeddingCardMap> weddingCardMap = weddingCardMapRepository.findByWeddingCard(card.get());
        if(weddingCardMap.isPresent()){
            weddingCardMapRepository.delete(weddingCardMap.get());
        }
        WeddingCardMap builderWeddingCardMap = WeddingCardMap.builder()
                .placeName(inputWeddingCard1Request.getWeddingMapPlace())
                .x(inputWeddingCard1Request.getWeddingMapX())
                .y(inputWeddingCard1Request.getWeddingMapY())
                .weddingCard(card.get())
                .build();
        WeddingCardMap saveMap = weddingCardMapRepository.save(builderWeddingCardMap);

        //값 넣기
        WeddingCard requestWeddingCard = inputWeddingCard1Request.toWeddingCard();

        save.updateValue1(requestWeddingCard,weddingCardImage,saveMap);
        weddingCardRepository.save(save);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object inputCard2(InputWeddingCard2Request inputWeddingCard2Request, MultipartFile image, Account account) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCard2Request.getWeddingId());
        if(!card.isPresent()){
            return makeResponse("400", null, "fail : 해당 카드가 없습니다.", HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByWeddingCardAndAccount(card.get(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "fail : 본인의 카드가 아닙니다.", HttpStatus.NOT_FOUND);
        }

        WeddingCard save = card.get();


        //기존 weddingcardMap이 있는 지 체크 후
        //있으면 삭제해
        Optional<WeddingCardMap> weddingCardMap = weddingCardMapRepository.findByWeddingCard(card.get());
        if(weddingCardMap.isPresent()){
            weddingCardMapRepository.delete(weddingCardMap.get());
        }
        WeddingCardMap builderWeddingCardMap = WeddingCardMap.builder()
                .placeName(inputWeddingCard2Request.getWeddingMapPlace())
                .x(inputWeddingCard2Request.getWeddingMapX())
                .y(inputWeddingCard2Request.getWeddingMapY())
                .weddingCard(card.get())
                .build();
        WeddingCardMap saveMap = weddingCardMapRepository.save(builderWeddingCardMap);
        //값 넣기
        WeddingCard requestWeddingCard = inputWeddingCard2Request.toWeddingCard();

        save.updateValue2(requestWeddingCard,saveMap);
        weddingCardRepository.save(save);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object inputCard3(InputWeddingCard3Request inputWeddingCard3Request, MultipartFile image, Account account) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCard3Request.getWeddingId());
        if(!card.isPresent()){
            return makeResponse("400", null, "fail : 해당 카드가 없습니다.", HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByWeddingCardAndAccount(card.get(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "fail : 본인의 카드가 아닙니다.", HttpStatus.NOT_FOUND);
        }

        WeddingCard save = card.get();
        WeddingCardImage weddingCardImage =saveImage(save,image);

        //기존 weddingcardMap이 있는 지 체크 후
        //있으면 삭제해
        Optional<WeddingCardMap> weddingCardMap = weddingCardMapRepository.findByWeddingCard(card.get());
        if(weddingCardMap.isPresent()){
            weddingCardMapRepository.delete(weddingCardMap.get());
        }
        WeddingCardMap builderWeddingCardMap = WeddingCardMap.builder()
                .placeName(inputWeddingCard3Request.getWeddingMapPlace())
                .x(inputWeddingCard3Request.getWeddingMapX())
                .y(inputWeddingCard3Request.getWeddingMapY())
                .weddingCard(card.get())
                .build();
        WeddingCardMap saveMap = weddingCardMapRepository.save(builderWeddingCardMap);
        //값 넣기
        WeddingCard requestWeddingCard = inputWeddingCard3Request.toWeddingCard();

        save.updateValue3(requestWeddingCard,weddingCardImage,saveMap);
        weddingCardRepository.save(save);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object inputCard4(InputWeddingCard4Request inputWeddingCard4Request, MultipartFile image, Account account) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCard4Request.getWeddingId());
        if(!card.isPresent()){
            return makeResponse("400", null, "fail : 해당 카드가 없습니다.", HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByWeddingCardAndAccount(card.get(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "fail : 본인의 카드가 아닙니다.", HttpStatus.NOT_FOUND);
        }

        WeddingCard save = card.get();
        //이미지 저장하기
        WeddingCardImage weddingCardImage = saveImage(save,image);


        //값 넣기
        WeddingCard requestWeddingCard = inputWeddingCard4Request.toWeddingCard();

        save.updateValue4(requestWeddingCard,weddingCardImage);
        weddingCardRepository.save(save);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

//    public Object retrieveCard(Long storyBoardId, Account account) {
//        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(storyBoardId,account);
//        if(storyboard.isEmpty()){
//            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
//        }
//        Optional<WeddingCard> retrieve = weddingCardRepository.findById(storyboard.get().getWeddingCard().getId());
//        if(retrieve.isEmpty()){
//            makeResponse("200",null, "success : 현재 웨딩카드 없음.", HttpStatus.OK);
//        }
//
//        return makeResponse("200",retrieve.get(), "success", HttpStatus.OK);
//    }
}
