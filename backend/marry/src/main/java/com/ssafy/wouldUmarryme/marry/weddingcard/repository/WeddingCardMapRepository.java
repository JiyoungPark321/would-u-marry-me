package com.ssafy.wouldUmarryme.marry.weddingcard.repository;

import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCardMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WeddingCardMapRepository extends JpaRepository<WeddingCardMap,Long> {
    Optional<WeddingCardMap> findByWeddingCard(WeddingCard weddingCard);
}
