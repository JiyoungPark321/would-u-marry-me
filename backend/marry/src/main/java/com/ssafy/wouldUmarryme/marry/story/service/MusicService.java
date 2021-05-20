package com.ssafy.wouldUmarryme.marry.story.service;


import com.amazonaws.services.s3.AmazonS3;
import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.config.AwsConfiguration;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Music;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.AddMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.UpdateMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.MusicRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
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
public class MusicService {

    private final MusicRepository musicRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final AwsS3Service awsS3Service;

    @Transactional(readOnly = true)
    public Object getMusicList() {
        List<Music> musicList = musicRepository.findAll();
        return makeResponse("200", musicList, "success", HttpStatus.OK);
    }

    public Object setMusic(SetMusicRequest setMusicRequest, Account account) {
        Optional<Music> music = musicRepository.findById(setMusicRequest.getMusicId());

        if(music.isEmpty()){
            return makeResponse("400",null,"fail : music를 찾을 수 없음",HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(setMusicRequest.getStoryBoardId(),account);
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail : storyboard를 찾을 수 없음",HttpStatus.NOT_FOUND);
        }

        Storyboard newStoryBoard = storyboard.get();
        newStoryBoard.setMusic(music.get());
        Storyboard saveStoryboard = storyBoardRepository.save(newStoryBoard);
        return  makeResponse("200", saveStoryboard, "success", HttpStatus.OK);
    }

    public Object createMusic(MultipartFile file) throws IOException {
        String musicName = awsS3Service.uploadProfileImage(file,"music",Long.parseLong("1"));
        String musicUrl =  "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" +musicName;
        Music music = Music.builder()
                .musicName(musicName)
                .musicUrl(musicUrl)
//                .artist(addMusicRequest.getArtist())
//                .title(addMusicRequest.getTitle())
                .build();
        Music save = musicRepository.save(music);
        return makeResponse("200", save, "success", HttpStatus.OK);
    }

    public Object updateImageMusic(MultipartFile image, UpdateMusicRequest updateMusicRequest) throws IOException {
        Optional<Music> curMusic = musicRepository.findById(updateMusicRequest.getMusicId());
        String imgName = awsS3Service.uploadProfileImage(image, "alb", updateMusicRequest.getMusicId());
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imgName;
        if(curMusic.isPresent()) {
            curMusic.get().setMusicImgName(imgName);
            curMusic.get().setMusicImgUrl(imgUrl);

            return makeResponse("200", curMusic.get(), "success", HttpStatus.OK);
        }
        return  makeResponse("400", null, "fail", HttpStatus.NOT_FOUND);
    }
}
