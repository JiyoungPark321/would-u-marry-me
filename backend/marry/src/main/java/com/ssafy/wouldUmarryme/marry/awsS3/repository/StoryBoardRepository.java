package com.ssafy.wouldUmarryme.marry.awsS3.repository;

import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryBoardRepository extends JpaRepository<Storyboard,Long> {
}
