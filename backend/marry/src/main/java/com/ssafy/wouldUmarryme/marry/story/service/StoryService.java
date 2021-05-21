package com.ssafy.wouldUmarryme.marry.story.service;

import com.amazonaws.services.s3.AmazonS3;
import com.ssafy.wouldUmarryme.marry.account.domain.Account;
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

    public Object createStory(CreateStoryRequest createStoryRequest, Account account) {
        if(createStoryRequest.getIndex()>5){
            return makeResponse("400",null,"fail : 스토리의 개수가 5개를 초과할 수 없습니다.",HttpStatus.NOT_FOUND);
        }

        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(createStoryRequest.getStoryBoardId(),account);
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail : storyboard를 찾을 수 없음.",HttpStatus.NOT_FOUND);
        }
        Optional<Spot> spot = spotRepository.findById(createStoryRequest.getSpotId());
        if(spot.isEmpty()){
            return makeResponse("400",null,"fail : spot를 찾을 수 없음.",HttpStatus.NOT_FOUND);
        }


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
            newStory.updateSpot(spot.get());
            storyRepository.save(newStory);
        }
        return makeResponse("200", newStory, "success", HttpStatus.OK);
    }

    public void setStoryImage(MultipartFile object,Story story, int index) throws IOException {
        String imgName = "";
        String imgUrl = "";
        if(object!=null){

            imgName = awsS3Service.uploadProfileImage(object,"story", story.getId());
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

    public Object setFirstValue(Long storyId, String text1, String text2,MultipartFile image1,MultipartFile image2,Account account) throws IOException{
        Optional<Story> story = storyRepository.findById(storyId);
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(story.get().getStoryboard().getId(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400",null,"fail : 해당 유저의 스토리가 없습니다.",HttpStatus.NOT_FOUND);
        }


        List<StoryImage> images = storyImageRepository.findByStory(story.get());
        List<StoryComment> comments =storyCommentRepository.findByStory(story.get());



        if(images.size()!=0){
            for (StoryImage image : images){
                storyImageRepository.deleteById(image.getId());
            }
        }
        setStoryImage(image1, story.get(),1);
        setStoryImage(image2,story.get(),3);


        if(comments.size()!=0){
            for (StoryComment comment : comments){
                storyCommentRepository.deleteById(comment.getId());
            }
        }

        setStoryComment(text1,story.get(),2);
        setStoryComment(text2,story.get(),4);



        return makeResponse("200", story, "success", HttpStatus.OK);
    }

    public Object setSecondValue(Long storyId,String text1,MultipartFile image1,Account account) throws IOException {
        Optional<Story> story = storyRepository.findById(storyId);

        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(story.get().getStoryboard().getId(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400",null,"fail : 해당 유저의 스토리가 없습니다.",HttpStatus.NOT_FOUND);
        }
        List<StoryImage> images = storyImageRepository.findByStory(story.get());
        List<StoryComment> comments =storyCommentRepository.findByStory(story.get());
        if(images.size()!=0){

            for (StoryImage image : images){
                storyImageRepository.deleteById(image.getId());
            }
        }
        setStoryImage(image1, story.get(),1);

        if(comments.size()!=0){
            for (StoryComment comment : comments){
                storyCommentRepository.deleteById(comment.getId());
            }

        }
        setStoryComment(text1,story.get(),2);



        return makeResponse("200", story, "success", HttpStatus.OK);
    }

    public Object setThirdValue(Long storyId,String text1,MultipartFile image1,MultipartFile image2, MultipartFile image3,Account account) throws IOException{
        Optional<Story> story = storyRepository.findById(storyId);
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(story.get().getStoryboard().getId(),account);
        if(!storyboard.isPresent()){
            return makeResponse("400",null,"fail : 해당 유저의 스토리가 없습니다.",HttpStatus.NOT_FOUND);
        }
        List<StoryImage> images = storyImageRepository.findByStory(story.get());
        List<StoryComment> comments =storyCommentRepository.findByStory(story.get());

        if(images.size()!=0){
            for (StoryImage image : images){
                storyImageRepository.deleteById(image.getId());
            }
        }

        setStoryImage(image1, story.get(),2);
        setStoryImage(image2,story.get(),3);
        setStoryImage(image3,story.get(),4);


        if(comments.size()!=0){
            for (StoryComment comment : comments){
                storyCommentRepository.deleteById(comment.getId());
            }

        }
        setStoryComment(text1,story.get(),1);


        return makeResponse("200", story, "success", HttpStatus.OK);
    }
}
