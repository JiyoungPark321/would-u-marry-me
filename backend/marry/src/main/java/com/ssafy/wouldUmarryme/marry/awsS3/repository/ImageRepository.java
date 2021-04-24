package com.ssafy.wouldUmarryme.marry.awsS3.repository;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.StoryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<StoryImage, Long> {
}
