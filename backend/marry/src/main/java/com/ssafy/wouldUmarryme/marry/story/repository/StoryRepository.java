package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StoryRepository extends JpaRepository<Story,Long> {
    Optional<Story> findByStoryboardAndIndex(Storyboard storyBoard, int index);

}
