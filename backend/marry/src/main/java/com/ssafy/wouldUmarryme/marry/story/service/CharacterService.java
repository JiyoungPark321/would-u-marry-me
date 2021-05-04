package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Character;
import com.ssafy.wouldUmarryme.marry.story.repository.CharacterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class CharacterService {

    private final CharacterRepository characterRepository;

    @Transactional(readOnly = true)
    public Object getCharacterList() {
        List<Character> characterList = characterRepository.findAll();
        return makeResponse("200",characterList,"success", HttpStatus.OK);
    }
}
