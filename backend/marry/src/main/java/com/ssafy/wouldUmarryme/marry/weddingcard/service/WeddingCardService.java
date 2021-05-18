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
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.CreateWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.InputWeddingCardRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.RetrieveWeddingCardRequest;
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
            return makeResponse("200", save,  "success", HttpStatus.OK);
        }
        //만들어져있다면
       else{
            storyboard.get().getWeddingCard().updateSpot(spot.get());
            WeddingCard save = weddingCardRepository.save(storyboard.get().getWeddingCard());
            return makeResponse("200",save,"success",HttpStatus.OK);
        }


    }

    public Object inputCard(InputWeddingCardRequest inputWeddingCardRequest,MultipartFile image,Account account) throws IOException {
        Optional<WeddingCard> card = weddingCardRepository.findById(inputWeddingCardRequest.getWeddingId());
        if(!card.isPresent()){
           return makeResponse("400", null, "fail : 해당 카드가 없습니다.", HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByWeddingCardAndAccount(card.get(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400", null, "fail : 본인의 카드가 아닙니다.", HttpStatus.NOT_FOUND);
        }

        WeddingCard save = card.get();

        //이미지 저장하기
        String imgName = "";
        String imgUrl = "";
        WeddingCardImage weddingCardImage = null;

        //기존 weddingcardImage가 있는 지 체크 후
        //있으면 삭제
        Optional<WeddingCardImage> isWeddingCardImage = weddingCardImageRepository.findByWeddingCard(card.get());
        if(isWeddingCardImage.isPresent()){
            weddingCardImageRepository.delete(isWeddingCardImage.get());
        }
        if(image != null){
            imgName = awsS3Service.uploadProfileImage(image,"card");
            imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            weddingCardImage = WeddingCardImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .weddingCard(card.get())
                    .build();
            weddingCardImageRepository.save(weddingCardImage);
            save.setWeddingCardImage(weddingCardImage);
        }


        //기존 weddingcardMap이 있는 지 체크 후
        //있으면 삭제해
       Optional<WeddingCardMap> weddingCardMap = weddingCardMapRepository.findByWeddingCard(card.get());
        if(weddingCardMap.isPresent()){
            weddingCardMapRepository.delete(weddingCardMap.get());
        }
        WeddingCardMap builderWeddingCardMap = WeddingCardMap.builder()
                .placeName(inputWeddingCardRequest.getWeddingMapPlace())
                .x(inputWeddingCardRequest.getWeddingMapX())
                .y(inputWeddingCardRequest.getWeddingMapY())
                .weddingCard(card.get())
                .build();
        WeddingCardMap saveMap = weddingCardMapRepository.save(builderWeddingCardMap);

        //값 넣기
        WeddingCard requestWeddingCard = inputWeddingCardRequest.toWeddingCard();

        save.updateValue(requestWeddingCard,weddingCardImage,saveMap);
        weddingCardRepository.save(save);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object retrieveCard(Long storyBoardId, Account account) {
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(storyBoardId,account);
        if(storyboard.isEmpty()){
            return makeResponse("400", null, "fail : storyboard를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        Optional<WeddingCard> retrieve = weddingCardRepository.findById(storyboard.get().getWeddingCard().getId());
        if(retrieve.isEmpty()){
            makeResponse("200",null, "success : 현재 웨딩카드 없음.", HttpStatus.OK);
        }

        return makeResponse("200",retrieve.get(), "success", HttpStatus.OK);
    }
}
