package com.ssafy.wouldUmarryme.account.service;

import com.ssafy.wouldUmarryme.common.exception.ErrorCode;
import com.ssafy.wouldUmarryme.common.exception.NotFoundException;
import com.ssafy.wouldUmarryme.account.domain.Account;
import com.ssafy.wouldUmarryme.account.domain.UserRole;
import com.ssafy.wouldUmarryme.account.dto.request.SingupRequest;
import com.ssafy.wouldUmarryme.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    private final PasswordEncoder passwordEncoder;

    private final Long OWN = 0L;

    public Account createAccount(SingupRequest singup) {
        Account account = Account.builder()
                .uid(singup.getUid())
                .password(passwordEncoder.encode(singup.getPassword()))
                .name(singup.getName())
                .role(UserRole.ROLE_USER)
                .build();
        Account saved = this.accountRepository.save(account);

        return saved;
    }

    private Account getAccount(String uid) {
        Account account = accountRepository.findByUid(uid).orElseThrow(
                () -> {
                    return new NotFoundException(ErrorCode.USER_NOT_FOUND);
                }
        );
        return account;
    }

}
