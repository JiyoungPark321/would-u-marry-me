package com.ssafy.wouldUmarryme.marry.story.repository;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoryBoardRepository extends JpaRepository<Storyboard,Long> {
    List<Storyboard> findAllByAccount(Account account);

    Storyboard findByAccountAndTitle(Account account, String storyboardTitle);

    List<Storyboard> findByAccount(Account account);
}
