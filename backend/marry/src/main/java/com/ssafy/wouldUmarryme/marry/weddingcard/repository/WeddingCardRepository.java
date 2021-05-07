package com.ssafy.wouldUmarryme.marry.weddingcard.repository;

import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WeddingCardRepository extends JpaRepository<WeddingCard,Long> {
    Optional<WeddingCard> findByStoryboard(Storyboard storyboard);
}
