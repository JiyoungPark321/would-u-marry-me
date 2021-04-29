package com.ssafy.wouldUmarryme.marry.account.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.domain.UserRole;
import com.ssafy.wouldUmarryme.marry.account.dto.request.PasswordRequest;
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



    public Object duplicateAndBlankCheckWhenSignUp(String userName,String password,String nickname,String phoneNumber){

        if(accountRepository.findByUserName(userName).isPresent()){
            return makeResponse("400",null,"this id already exists", HttpStatus.BAD_REQUEST);
        }
        if("".equals(userName)||"".equals(password)||"".equals(nickname)||"".equals(phoneNumber)){
            return makeResponse("400",null,"data is blank",HttpStatus.BAD_REQUEST);
        }
        if(!accountRepository.findAccountByNickName(nickname).isEmpty()){
            return makeResponse("400",null,"this nickname already exists", HttpStatus.BAD_REQUEST);
        }
        return null;
    }
    public Object createAccount(SingupRequest singup) {
        String userName=singup.getUserName().trim();
        String password=singup.getPassword().trim();
        String nickname=singup.getNickName().trim();
        String phone=singup.getPhoneNumber().trim();

        Object response = duplicateAndBlankCheckWhenSignUp(userName,password,nickname,phone);

        if(response!=null){
            return response;
        }

        Account account = Account.builder()
                .userName(singup.getUserName())
                .password(passwordEncoder.encode(singup.getPassword()))
                .nickName(singup.getNickName())
                .phoneNumber(singup.getPhoneNumber())
                .role(UserRole.ROLE_USER)
                .build();

        Account saved = this.accountRepository.save(account);

        return makeResponse("200",convertObjectToJson(account),"success",HttpStatus.OK);
    }

    private Account getAccount(String userName) {
        Account account = accountRepository.findByUserName(userName).orElseThrow(
                () -> {
                    return new NotFoundException(ErrorCode.USER_NOT_FOUND);
                }
        );
        return account;
    }

    public Object updateAccount(UpdateAccountRequest update,Account account){
        Optional<Account> curAccount=accountRepository.findById(account.getId());
        if(!curAccount.isPresent()) {
            return makeResponse("404", null, "account not found", HttpStatus.NOT_FOUND);
        }
        String nickname=update.getNickName().trim();
        String password=update.getPassword().trim();
        String phone=update.getPhoneNumber().trim();

        Account updateAccount=curAccount.get();
        updateAccount.setNickName(nickname);
        updateAccount.setPassword(password);
        updateAccount.setPhoneNumber(phone);
        accountRepository.save(updateAccount);
        return makeResponse("200",convertObjectToJson(updateAccount),"success",HttpStatus.OK);
    }

    public Object deleteAccount(Account account,PasswordRequest delete){
        Optional<Account> curAccount=accountRepository.findById(account.getId());
        if(!curAccount.isPresent()){
            return makeResponse("404",null,"account not found",HttpStatus.NOT_FOUND);
        }
        String password=delete.getPassword();

        if(!password.equals(curAccount.get().getPassword())){
            return makeResponse("400",null,"password is not match",HttpStatus.BAD_REQUEST);
        }
        accountRepository.delete(curAccount.get());
        return makeResponse("200",null,"success",HttpStatus.OK);
    }

}
