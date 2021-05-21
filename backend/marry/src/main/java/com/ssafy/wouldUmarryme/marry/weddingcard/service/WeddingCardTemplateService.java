package com.ssafy.wouldUmarryme.marry.weddingcard.service;

import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardTemplate;
import com.ssafy.wouldUmarryme.marry.weddingcard.dto.TemplateNumberRequest;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardRepository;
import com.ssafy.wouldUmarryme.marry.weddingcard.repository.WeddingCardTemplateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class WeddingCardTemplateService {

    private final AwsS3Service awsS3Service;
    private final WeddingCardRepository weddingCardRepository;
    private final WeddingCardTemplateRepository weddingCardTemplateRepository;

    public Object setTemplate(TemplateNumberRequest templateNumberRequest) {
        Optional<WeddingCard> card = weddingCardRepository.findById(templateNumberRequest.getWeddingId());
        if(card.isEmpty()){
            return makeResponse("400", null, "fail : card를 찾을 수 없음", HttpStatus.NOT_FOUND);
        }
        //템플릿이 다르다면 수정
        if(card.get().getTemplate()!= templateNumberRequest.getWeddingTemplateId()){
            card.get().updateTemplate(templateNumberRequest.getWeddingTemplateId());
            weddingCardRepository.save(card.get());
        }

        return makeResponse("200", card.get(),"success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object retrieveWeddingCardTemplate() {
        List<WeddingCardTemplate> weddingCardTemplateList = weddingCardTemplateRepository.findAll();
        return makeResponse("200", weddingCardTemplateList, "success", HttpStatus.OK);
    }

    public Object createWeddingCardTemplate(MultipartFile image) throws IOException {
        String imaName = awsS3Service.uploadProfileImage(image, "weddingcardtemplate",Long.parseLong("1"));
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imaName;
        WeddingCardTemplate weddingCardTemplate = WeddingCardTemplate.builder()
                .imageName(imaName)
                .imgUrl(imgUrl)
                .build();
        WeddingCardTemplate save = weddingCardTemplateRepository.save(weddingCardTemplate);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }
}
