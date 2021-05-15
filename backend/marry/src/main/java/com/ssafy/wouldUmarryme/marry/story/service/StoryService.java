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
    private final StoryImageRepository storyImageRepository;
    private final StoryCommentRepository storyCommentRepository;
    private final AwsS3Service awsS3Service;

    public Object createStory(CreateStoryRequest createStoryRequest) {
        Optional<Storyboard> storyboard = storyBoardRepository.findById(createStoryRequest.getStoryBoardId());
        Optional<Spot> spot = spotRepository.findById(createStoryRequest.getSpotId());

        //해당 Story를 전에 만든 적이 있는지 체크
        Optional<Story> story = storyRepository.findByStoryboardAndIndex(storyboard.get(),createStoryRequest.getIndex());

        //없다면
        Story newStory;
        if(story.isEmpty()){
            newStory = Story.builder()
                    .index(createStoryRequest.getIndex())
                    .spot(spot.get())
                    .storyboard(storyboard.get())
                    .build();
            storyRepository.save(newStory);
        }
        else{
            newStory = story.get();
            newStory.setSpot(spot.get());
            storyRepository.save(newStory);
        }
        return makeResponse("200", newStory, "success", HttpStatus.OK);
    }

    public void setStoryImage(MultipartFile object,Story story, int index) throws IOException {
        String imgName = "";
        String imgUrl = "";

        if(object!=null){
            imgName = awsS3Service.uploadProfileImage(object,"story");
            imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
            StoryImage storyImage = StoryImage.builder()
                    .imgName(imgName)
                    .imgUrl(imgUrl)
                    .story(story)
                    .index(index)
                    .build();
            storyImageRepository.save(storyImage);
        }
        else{
            StoryImage storyImage = StoryImage.builder()
                    .story(story)
                    .index(index)
                    .build();
            storyImageRepository.save(storyImage);
        }
    }

    public void setStoryComment(String value, Story story, int index){
        StoryComment storyComment = StoryComment.builder()
                .value(value)
                .index(index)
                .story(story)
                .build();
        storyCommentRepository.save(storyComment);
    }

    public Object setFirstValue(Set1StoryTemplateRequest set1StoryTemplateRequest, MultipartFile image1, MultipartFile image3) throws IOException{
        Optional<Story> story = storyRepository.findById(set1StoryTemplateRequest.getStoryId());

        setStoryImage(image1, story.get(),1);
        setStoryComment(set1StoryTemplateRequest.getSecond(),story.get(),2);
        setStoryImage(image3,story.get(),3);
        setStoryComment(set1StoryTemplateRequest.getFourth(),story.get(),4);

        return makeResponse("200", story, "success", HttpStatus.OK);
    }

    public Object setSecondValue(Set2StoryTemplateRequest set2StoryTemplateRequest) throws IOException {
        Optional<Story> story = storyRepository.findById(set2StoryTemplateRequest.getStoryId());

        setStoryImage(set2StoryTemplateRequest.getFirst(), story.get(),1);
        setStoryComment(set2StoryTemplateRequest.getSecond(), story.get(),2);

        return makeResponse("200", story, "success", HttpStatus.OK);
    }

    public Object setThirdValue(Set345StoryTemplateRequest set345StoryTemplateRequest) throws IOException{
        Optional<Story> story = storyRepository.findById(set345StoryTemplateRequest.getStoryId());

        setStoryComment(set345StoryTemplateRequest.getFirst(),story.get(),1);
        setStoryImage(set345StoryTemplateRequest.getSecond(),story.get(),2);
        setStoryImage(set345StoryTemplateRequest.getThird(),story.get(),3);
        setStoryImage(set345StoryTemplateRequest.getFourth(),story.get(),4);

//        if(set345StoryTemplateRequest.getFourth()!=null){
//            imgName = awsS3Service.uploadProfileImage(set345StoryTemplateRequest.getFourth());
//            imgUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
//            StoryImage storyImage = StoryImage.builder()
//                    .imgName(imgName)
//                    .imgUrl(imgUrl)
//                    .story(story.get())
//                    .index(4)
//                    .build();
//            storyImageRepository.save(storyImage);
//        }else{
//            StoryImage storyImage = StoryImage.builder()
//                    .story(story.get())
//                    .index(4)
//                    .build();
//            storyImageRepository.save(storyImage);
//        }
        return makeResponse("200", story, "success", HttpStatus.OK);
    }
}
