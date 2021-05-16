package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import com.ssafy.wouldUmarryme.marry.story.domain.StoryComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StoryCommentRepository extends JpaRepository<StoryComment,Long> {
    List<StoryComment> findByStory(Story story);

    void deleteByStory(Story story);
}
