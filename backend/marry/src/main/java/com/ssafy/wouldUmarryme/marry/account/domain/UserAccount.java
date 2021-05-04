package com.ssafy.wouldUmarryme.marry.account.domain;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public class UserAccount extends User {
    private Account account;

    public UserAccount(Account account) {
        super(account.getUserName(), account.getPassword(),List.of(new SimpleGrantedAuthority(account.getRole().toString())));
        this.account = account;
    }

    public Account getAccount() {
        return account;
    }
}
