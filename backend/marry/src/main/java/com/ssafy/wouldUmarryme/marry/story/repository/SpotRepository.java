package com.ssafy.wouldUmarryme.marry.story.repository;


import com.ssafy.wouldUmarryme.marry.awsS3.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SpotRepository extends JpaRepository<Spot,Long> {
    Optional<Spot> findBySpotPath(String spotPath);
}
