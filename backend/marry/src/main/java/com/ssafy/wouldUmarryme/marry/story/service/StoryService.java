package com.ssafy.wouldUmarryme.marry.story.service;

import com.amazonaws.services.s3.AmazonS3;
import com.ssafy.wouldUmarryme.marry.awsS3.config.AwsConfiguration;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import com.ssafy.wouldUmarryme.marry.awsS3.property.AwsS3Property;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.*;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateStoryRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set1StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set2StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.Set345StoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class StoryService {

    private final StoryRepository storyRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final SpotRepository spotRepository;
    private final StoryTemplateRepository storyTemplateRepository;
    private final StoryImageRepository storyImageRepository;
    private final StoryCommentRepository storyCommentRepository;
    private final AwsConfiguration awsConfiguration;
    private final AwsS3Service awsS3Service;

    private AmazonS3 amazonS3;

    public Object createStory(CreateStoryRequest createStoryRequest) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(createStoryRequest.getStoryBoardId());
        Optional<Spot> spot = spotRepository.findById(createStoryRequest.getSpotId());

        //해당 Story를 전에 만든 적이 있는지 체크
        Optional<Story> story = storyRepository.findByStoryboardAndIndex(storyboard.get(),createStoryRequest.getIndex());

        //없다면
        Story newStory;
        if(story.isEmpty()){
            newStory= Story.builder()
                    .index(createStoryRequest.getIndex())
                    .spot(spot.get())
                    .storyboard(storyboard.get())
                    .build();
        }
        else{
            newStory = story.get();
            newStory.setSpot(spot.get());
            storyRepository.save(newStory);
        }
        return makeResponse("200",convertObjectToJson(newStory),"success", HttpStatus.OK);
    }

    public Object retrieveStoryTemplate() {
        List<StoryTemplate> storyTemplateList = storyTemplateRepository.findAll();
        return makeResponse("200",convertObjectToJson(storyTemplateList),"success",HttpStatus.OK);
    }


    public Object setFirstValue(Set1StoryTemplateRequest set1StoryTemplateRequest)  throws IOException{
        amazonS3 = awsConfiguration.setS3Client();
        Optional<Story> story = storyRepository.findById(set1StoryTemplateRequest.getStoryId());
        String imgName="";
        String imgUrl="";
        if(set1StoryTemplateRequest.getFirst()!=null){
            imgName = awsS3Service.uploadProfileImage(set1StoryTemplateRequest.getFirst());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(1)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(1)
                    .build();
            storyImageRepository.save(storyImage);
        }
        if(set1StoryTemplateRequest.getThird()!=null){
            imgName = awsS3Service.uploadProfileImage(set1StoryTemplateRequest.getThird());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(3)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(3)
                    .build();
            storyImageRepository.save(storyImage);
        }
        StoryComment storyComment1 = StoryComment.builder()
                .value(set1StoryTemplateRequest.getSecond())
                .index(2)
                .story(story.get())
                .build();
        storyCommentRepository.save(storyComment1);
        StoryComment storyComment2 = StoryComment.builder()
                .value(set1StoryTemplateRequest.getFourth())
                .index(2)
                .story(story.get())
                .build();
        storyCommentRepository.save(storyComment2);
        return makeResponse("200",convertObjectToJson(story),"success", HttpStatus.OK);
    }

    public Object setSecondValue(Set2StoryTemplateRequest set2StoryTemplateRequest) throws IOException {
        amazonS3 = awsConfiguration.setS3Client();
        Optional<Story> story = storyRepository.findById(set2StoryTemplateRequest.getStoryId());
        String imgName="";
        String imgUrl="";
        if(set2StoryTemplateRequest.getFirst()!=null){
            imgName = awsS3Service.uploadProfileImage(set2StoryTemplateRequest.getFirst());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(1)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(1)
                    .build();
            storyImageRepository.save(storyImage);
        }
        StoryComment storyComment1 = StoryComment.builder()
                .value(set2StoryTemplateRequest.getSecond())
                .index(2)
                .story(story.get())
                .build();
        storyCommentRepository.save(storyComment1);
        return makeResponse("200",convertObjectToJson(story),"success", HttpStatus.OK);
    }

    public Object setThirdValue(Set345StoryTemplateRequest set345StoryTemplateRequest) throws IOException{
        amazonS3 = awsConfiguration.setS3Client();
        Optional<Story> story = storyRepository.findById(set345StoryTemplateRequest.getStoryId());
        String imgName="";
        String imgUrl="";
        if(set345StoryTemplateRequest.getSecond()!=null){
            imgName = awsS3Service.uploadProfileImage(set345StoryTemplateRequest.getSecond());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(2)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(2)
                    .build();
            storyImageRepository.save(storyImage);
        }
        if(set345StoryTemplateRequest.getThird()!=null){
            imgName = awsS3Service.uploadProfileImage(set345StoryTemplateRequest.getThird());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(3)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(3)
                    .build();
            storyImageRepository.save(storyImage);
        }
        if(set345StoryTemplateRequest.getFourth()!=null){
            imgName = awsS3Service.uploadProfileImage(set345StoryTemplateRequest.getFourth());
            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story.get())
                    .index(4)
                    .build();
            storyImageRepository.save(storyImage);
        }else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story.get())
                    .index(4)
                    .build();
            storyImageRepository.save(storyImage);
        }
        StoryComment storyComment1 = StoryComment.builder()
                .value(set345StoryTemplateRequest.getFirst())
                .index(1)
                .story(story.get())
                .build();
        storyCommentRepository.save(storyComment1);
        return makeResponse("200",convertObjectToJson(story),"success", HttpStatus.OK);
    }
}
