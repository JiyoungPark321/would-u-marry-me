package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryComment;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryImage;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryTemplate;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetStoryTemplateRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryCommentRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryImageRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryTemplateRepository;
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
public class StoryTemplateService {

    private final AwsS3Service awsS3Service;
    private final StoryTemplateRepository storyTemplateRepository;
    private final StoryRepository storyRepository;
    private final StoryImageRepository storyImageRepository;
    private final StoryCommentRepository storyCommentRepository;

    @Transactional(readOnly = true)
    public Object retrieveStoryTemplate() {
        List<StoryTemplate> storyTemplateList = storyTemplateRepository.findAll();
        return makeResponse("200", storyTemplateList, "success", HttpStatus.OK);
    }

    public Object createTemplate(MultipartFile image) throws IOException {
        String imgName = awsS3Service.uploadProfileImage(image,"storytemplate",Long.parseLong("1"));
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
        StoryTemplate storyTemplate = StoryTemplate.builder()
                .imgName(imgName)
                .imgUrl(imgUrl)
                .build();
        StoryTemplate save = storyTemplateRepository.save(storyTemplate);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object setTemplate(SetStoryTemplateRequest setStoryTemplateRequest) {
        Optional<Story> story = storyRepository.findById(setStoryTemplateRequest.getStoryId());
        if(story.isEmpty()){
            return makeResponse("400",null,"fail : story를 찾을 수 없음.",HttpStatus.NOT_FOUND);
        }

        //기존 테플릿과 다르다면
        //기존 이미지와 코멘트 삭제
        //인덱스 값이 다르기 때문에..!
        if(story.get().getTemplate()!= setStoryTemplateRequest.getStoryTemplateId()){
            List<StoryImage> storyImages = storyImageRepository.findByStory(story.get());
            for (StoryImage image : storyImages){
                storyImageRepository.deleteById(image.getId());
            }
            List<StoryComment> storyComments = storyCommentRepository.findByStory(story.get());
            for (StoryComment comment : storyComments){
                storyCommentRepository.deleteById(comment.getId());
            }
            story.get().updateTemplate(setStoryTemplateRequest.getStoryTemplateId());
            Story save = storyRepository.save(story.get());
            return makeResponse("200",save,"success",HttpStatus.OK);
        }
        //같다면
        //아무것도 할 필요가 없음.
        else{
            return makeResponse("200",story.get(),"success",HttpStatus.OK);
        }



    }
}
