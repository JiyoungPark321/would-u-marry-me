package com.ssafy.wouldUmarryme.marry.weddingcard.repository;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WeddingCardImageRepository extends JpaRepository<WeddingCardImage,Long> {

    Optional<WeddingCardImage> findByWeddingCard(WeddingCard weddingCard);
}
