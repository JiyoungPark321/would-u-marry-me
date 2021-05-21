package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Character;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.CharacterStatus;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.story.dto.request.CreateCharacterRequest;
import com.ssafy.wouldUmarryme.marry.story.dto.request.SetCharacterRequest;
import com.ssafy.wouldUmarryme.marry.story.repository.CharacterRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.CharacterStatusRepository;
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
public class CharacterService {

    private final CharacterRepository characterRepository;
    private final StoryBoardRepository storyBoardRepository;
    private final AwsS3Service awsS3Service;

    @Transactional(readOnly = true)
    public Object getCharacterList() {
        List<Character> characterList = characterRepository.findAll();
        return makeResponse("200", characterList, "success", HttpStatus.OK);
    }

    public Object createCharacter(String name,MultipartFile image)throws IOException {
        String imgName = awsS3Service.uploadProfileImage(image,"character",Long.parseLong("1"));
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" +imgName;
        Character character = Character.builder()
                .coupleName(name)
                .coupleUrl(imgUrl)
                .build();
        characterRepository.save(character);
        return makeResponse("200", character, "success", HttpStatus.OK);
    }

    public Object setCharacter(SetCharacterRequest setCharacterRequest, Account account) {
        Optional<Character> character = characterRepository.findById(setCharacterRequest.getCharacterId());
        if(character.isEmpty()){
            return makeResponse("400",null,"fail : character를 찾을 수 없음",HttpStatus.NOT_FOUND);
        }
        Optional<Storyboard> storyboard = storyBoardRepository.findByIdAndAccount(setCharacterRequest.getStoryBoardId(),account);
        if(storyboard.isEmpty()){
            return makeResponse("400",null,"fail : storyboard를 찾을 수 없음",HttpStatus.NOT_FOUND);
        }
        storyboard.get().updateCharacter(character.get());
        Storyboard save = storyBoardRepository.save(storyboard.get());
        return makeResponse("200", character.get(), "success", HttpStatus.OK);
    }
}
