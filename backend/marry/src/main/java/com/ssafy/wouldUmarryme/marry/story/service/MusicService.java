package com.ssafy.wouldUmarryme.marry.story.service;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Music;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetMusicRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.MusicRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.StoryBoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional(readOnly = true)
    public Object getMusicList() {
        List<Music> musicList = musicRepository.findAll();
        return makeResponse("200",musicList,"success", HttpStatus.OK);
    }

    public Object setMusic(SetMusicRequest setMusicRequest) {
        String name = setMusicRequest.getMusic().getOriginalFilename();
        Optional<Music> music = musicRepository.findByMusicName(name);
        Optional<Storyboard> storyboard = storyBoardRepository.findById(setMusicRequest.getStoryBoardId());

        Storyboard newStoryBoard = storyboard.get();
        newStoryBoard.setMusic(music.get());
        Storyboard saveStoryboard = storyBoardRepository.save(newStoryBoard);
        return  makeResponse("200",saveStoryboard,"success", HttpStatus.OK);

    }
}
