package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.CharacterStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterStatusRepository extends JpaRepository<CharacterStatus,Long> {
}
