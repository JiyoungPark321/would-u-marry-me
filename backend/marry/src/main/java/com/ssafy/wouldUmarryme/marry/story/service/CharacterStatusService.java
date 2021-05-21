package com.ssafy.wouldUmarryme.marry.story.service;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Character;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.CharacterStatus;
import com.ssafy.wouldUmarryme.marry.awsS3.service.AwsS3Service;
import com.ssafy.wouldUmarryme.marry.story.repository.CharacterRepository;
import com.ssafy.wouldUmarryme.marry.story.repository.CharacterStatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class CharacterStatusService {

    private final CharacterRepository characterRepository;
    private final CharacterStatusRepository characterStatusRepository;
    private final AwsS3Service awsS3Service;

    public Object createCharacter(String status,String gender, Long characterId, MultipartFile image) throws IOException {
        Optional<Character> character = characterRepository.findById(characterId);
        String imgName = awsS3Service.uploadProfileImage(image,"status",characterId);
        String imgUrl = "https://" + awsS3Service.CLOUD_FRONT_DOMAIN_NAME + "/" +imgName;
        CharacterStatus characterStatus = CharacterStatus.builder()
                .status(status)
                .gender(gender)
                .characterUrl(imgUrl)
                .character(character.get())
                .build();
        characterStatusRepository.save(characterStatus);
        return makeResponse("200", characterStatus, "success", HttpStatus.OK);
    }
}
