package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import com.ssafy.wouldUmarryme.marry.weddingcard.domain.WeddingCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoryBoardRepository extends JpaRepository<Storyboard,Long> {
    List<Storyboard> findByAccount(Account account);

    Optional<Storyboard> findByIdAndAccount(Long id, Account account);

    void deleteByIdAndAccount(Long id, Account account);

    Optional<Storyboard> findByWeddingCardAndAccount(WeddingCard weddingCard, Account account);
}
