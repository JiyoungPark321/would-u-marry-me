package com.ssafy.wouldUmarryme.marry.awsS3.repository;

import com.ssafy.wouldUmarryme.marry.awsS3.domain.Background;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BackgroundRepository extends JpaRepository<Background,Long> {
   Optional<Background> findByBackgroundPath(String BackgroundPath);
}
