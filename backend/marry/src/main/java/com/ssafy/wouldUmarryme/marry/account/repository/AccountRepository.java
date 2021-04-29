package com.ssafy.wouldUmarryme.marry.account.repository;


import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AccountRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByUserName(String userName);
    Optional<Account> findAccountByNickName(String nickname);
}
