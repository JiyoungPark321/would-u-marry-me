package com.ssafy.wouldUmarryme.account.repository;


import com.ssafy.wouldUmarryme.account.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AccountRepository extends JpaRepository<Account, Integer> {

    Optional<Account> findByUid(String uid);
}
