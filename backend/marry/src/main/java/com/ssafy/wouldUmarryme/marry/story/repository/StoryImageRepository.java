package com.ssafy.wouldUmarryme.marry.story.repository;


import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryImageRepository extends JpaRepository<StoryImage, Long> {
    List<StoryImage> findByStory(Story story);

    void deleteByStory(Story story);
}
