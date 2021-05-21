package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Music;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MusicRepository extends JpaRepository<Music,Long> {
    Optional<Music> findByMusicName(String name);
}
