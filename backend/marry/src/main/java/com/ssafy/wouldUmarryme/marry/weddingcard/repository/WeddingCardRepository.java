package com.ssafy.wouldUmarryme.marry.weddingcard.repository;

import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingCardRepository extends JpaRepository<WeddingCard,Long> {

}
