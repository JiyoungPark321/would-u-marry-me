package com.ssafy.wouldUmarryme.marry.account.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.domain.UserRole;
import com.ssafy.wouldUmarryme.marry.account.dto.request.SingupRequest;
import com.ssafy.wouldUmarryme.marry.account.dto.request.UpdateAccountRequest;
import com.ssafy.wouldUmarryme.marry.account.repository.AccountRepository;
import com.ssafy.wouldUmarryme.marry.common.exception.ErrorCode;
import com.ssafy.wouldUmarryme.marry.common.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    private final PasswordEncoder passwordEncoder;

    private final Long OWN = 0L;


    public Object duplicateAndBlankCheckWhenSignUp(String uid,String password,String name,String phone){
        if(accountRepository.findByUid(uid).isPresent()){
            return makeResponse("400",null,"this id already exists", HttpStatus.BAD_REQUEST);
        }
        if("".equals(uid)||"".equals(password)||"".equals(name)||"".equals(phone)){
            return makeResponse("400",null,"data is blank",HttpStatus.BAD_REQUEST);
        }
        if(accountRepository.findAccountByName(name)!=null){
            return makeResponse("400",null,"this nickname already exists", HttpStatus.BAD_REQUEST);
        }
        return null;
    }
    public Object createAccount(SingupRequest singup) {
        String uid=singup.getUid().trim();
        String password=singup.getPassword().trim();
        String name=singup.getName().trim();
        String phone=singup.getPhone().trim();

        Object response = duplicateAndBlankCheckWhenSignUp(uid,password,name,phone);

        if(response!=null){
            return response;
        }

        Account account = Account.builder()
                .uid(singup.getUid())
                .password(passwordEncoder.encode(singup.getPassword()))
                .name(singup.getName())
                .phone(singup.getPhone())
                .role(UserRole.ROLE_USER)
                .build();
        Account saved = this.accountRepository.save(account);

        return makeResponse("200",convertObjectToJson(account),"success",HttpStatus.OK);
    }

    private Account getAccount(String uid) {
        Account account = accountRepository.findByUid(uid).orElseThrow(
                () -> {
                    return new NotFoundException(ErrorCode.USER_NOT_FOUND);
                }
        );
        return account;
    }

    public Object updateAccount(UpdateAccountRequest update,String id){
        Optional<Account> curAccount=accountRepository.findById((int) Long.parseLong(id));
        if(!curAccount.isPresent()) {
            return makeResponse("404", null, "account not found", HttpStatus.NOT_FOUND);
        }
        String name=update.getName().trim();
        String password=update.getPassword().trim();
        String phone=update.getPhone().trim();

        Account updateAccount=curAccount.get();
        updateAccount.setName(name);
        updateAccount.setPassword(password);
        updateAccount.setPhone(phone);
        accountRepository.save(updateAccount);
        return makeResponse("200",convertObjectToJson(updateAccount),"success",HttpStatus.OK);
    }
//
//    public Object deleteAccount(String uid){
//
//    }

}
