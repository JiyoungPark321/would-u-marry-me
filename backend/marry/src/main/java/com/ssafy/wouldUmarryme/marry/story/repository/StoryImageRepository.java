package com.ssafy.wouldUmarryme.marry.story.repository;


import com.ssafy.wouldUmarryme.marry.story.domain.StoryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryImageRepository extends JpaRepository<StoryImage, Long> {
}
