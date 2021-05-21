package com.ssafy.wouldUmarryme.marry.account.service;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.domain.UserRole;
import com.ssafy.wouldUmarryme.marry.account.dto.reponse.SearchAccountResponse;
import com.ssafy.wouldUmarryme.marry.account.dto.request.*;
import com.ssafy.wouldUmarryme.marry.account.repository.AccountRepository;
import com.ssafy.wouldUmarryme.marry.common.exception.ErrorCode;
import com.ssafy.wouldUmarryme.marry.common.exception.NotFoundException;
import lombok.RequiredArgsConstructor;

import lombok.ToString;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Optional;
import java.util.Random;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;

@Service
@Transactional
@RequiredArgsConstructor

public class AccountService {

    private final AccountRepository accountRepository;

    private final PasswordEncoder passwordEncoder;



    public Object duplicateAndBlankCheckWhenSignUp(String userName,String password,String nickname,String phoneNumber){

        if("".equals(userName)||"".equals(password)||"".equals(nickname)||"".equals(phoneNumber)){
            return makeResponse("400", null, "data is blank", HttpStatus.BAD_REQUEST);
        }
        if(accountRepository.findAccountByNickName(nickname).isPresent()){
            return makeResponse("400", null, "this nickname already exists", HttpStatus.BAD_REQUEST);
        }
        return null;
    }

    public Object createAccount(SingupRequest singup) {
        String userName = singup.getUserName().trim();
        String password = singup.getPassword().trim();
        String nickname = singup.getNickName().trim();
        String phoneNumber = singup.getPhoneNumber().trim();

        Object response = duplicateAndBlankCheckWhenSignUp(userName,password,nickname,phoneNumber);

        if(response!= null){
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

        return makeResponse("200", convertObjectToJson(account), "success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object checkId(IdRequest check){

        if(accountRepository.existsByUserName(check.getUserName())){
            return makeResponse("400", convertObjectToJson(false), "userName already exists", HttpStatus.BAD_REQUEST);
        }
        return makeResponse("200", convertObjectToJson(true), "success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object checkNickName(NickNameRequest check){
        if (accountRepository.existsByNickName(check.getNickName())){
            return makeResponse("400", convertObjectToJson(false), "nickName already exists", HttpStatus.BAD_REQUEST);
        }
        return makeResponse("200", convertObjectToJson(true), "success", HttpStatus.OK);
    }

    private Account getAccount(String userName) {
        Account account = accountRepository.findByUserName(userName).orElseThrow(
                () -> {
                    return new NotFoundException(ErrorCode.USER_NOT_FOUND);
                }
        );
        return account;
    }

    public Object updateAccount(Account account,UpdateAccountRequest update){
        String nickname = update.getNickName().trim();
        String password = passwordEncoder.encode(update.getPassword().trim());
        String phone = update.getPhoneNumber().trim();
        account = getAccount(account.getUserName());
        account.updateValue(password,nickname,phone);
        accountRepository.save(account);

        return makeResponse("200", SearchAccountResponse.toSearchAccountResponse(account), "success", HttpStatus.OK);
    }

    public Object deleteAccount(Account account,PasswordRequest delete){
        String password = delete.getPassword();
        if(!passwordEncoder.matches(password,account.getPassword())){
            return makeResponse("400", null, "password is not match", HttpStatus.BAD_REQUEST);
        }
        accountRepository.delete(account);
        return makeResponse("200", null, "success", HttpStatus.OK);
    }

    public Object changePassword(UpdatePasswordRequest change){
        Optional<Account> curAccount = accountRepository.findByUserName(change.getUserName());
        String newPassword = change.getNewPassword();
        curAccount.get().setPassword(passwordEncoder.encode(newPassword));
        return makeResponse("200", null, "success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object checkPassword(Account account,PasswordRequest check) {
        String password = check.getPassword();
        if (!passwordEncoder.matches(password,account.getPassword())){
          return makeResponse("400", null, "password is not match", HttpStatus.BAD_REQUEST);
        }
        return makeResponse("200", null, "success", HttpStatus.OK);
    }

    public Object searchPassword(SearchPasswordRequest search){
        Optional<Account> curVer = accountRepository.findAccountByVerificationCodeNumberAndUserName(search.getVerificationCodeNumber(),search.getUserName());
        if(!curVer.isPresent()){
            return makeResponse("400", null, "verification code number Not Found", HttpStatus.NOT_FOUND);
        }
        curVer.get().setVerificationCodeNumber(null); //redis 이용하기 !!!

        return  makeResponse("200", convertObjectToJson(search), "success", HttpStatus.OK);
    }

    @Transactional(readOnly = true)
    public Object searchAccount(IdRequest idRequest){
        Optional<Account> curAccount = accountRepository.findByUserName(idRequest.getUserName());
        if (!curAccount.isPresent()){
            return makeResponse("400", null, "User Not Found", HttpStatus.NOT_FOUND);
        }

//        SearchAccountResponse searchAccountResponse= SearchAccountResponse.builder()
//                .id(curAccount.get().getId())
//                .userName(curAccount.get().getUserName())
//                .nickName(curAccount.get().getNickName())
//                .phoneNumber(curAccount.get().getPhoneNumber()).build();

        return makeResponse("200",SearchAccountResponse.toSearchAccountResponse(curAccount.get()),"success",HttpStatus.OK);
    }

    public void verificationCodePhoneNumber(PhoneNumberRequest verificationCode,String cerNum){
        String api_key = "";
        String api_secret = "";
        Message coolsms = new Message(api_key,api_secret);
        HashMap<String,String> params = new HashMap<String,String>();
        params.put("to",verificationCode.getPhoneNumber()); //수신 전화번호
        params.put("from","010"); //발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
        params.put("type","SMS");
        params.put("text","인증번호: "+"["+cerNum+"]"+"입니다.");
        params.put("wouldUmarryme","wouldUmarrymeTEST app 1.0.0");

        try {
            JSONObject obj = (JSONObject) coolsms.send(params);
        } catch (CoolsmsException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCode());
        }
    }

    //account로 못하는 이유가 로그인을 한 상태가 아니여서 userName으로 받아야함
    public Object sendSMS(PhoneNumberRequest phoneNumberRequest){
        Optional<Account> curAccount = accountRepository.findByUserName(phoneNumberRequest.getUserName());
        if(!curAccount.isPresent()){
            return makeResponse("400", null, "userName Not Found", HttpStatus.NOT_FOUND);
        }
        if(!accountRepository.findAccountByPhoneNumberAndUserName(phoneNumberRequest.getPhoneNumber(),phoneNumberRequest.getUserName()).isPresent()){
            return makeResponse("400", null, "Phone number Not Found", HttpStatus.NOT_FOUND);
        }
        StringBuffer temp = new StringBuffer();
        Random rand = new Random();
        String phoneStr = "";
        for (int i=0; i<10; i++){
            int rIndex = rand.nextInt(3);
            switch (rIndex){
                case 0:
                    temp.append((char)((int)(rand.nextInt(26))+97));
                    break;
                case 1:
                    temp.append((char)((int)(rand.nextInt(26))+65));
                    break;
                case 2:
                    temp.append((rand.nextInt(10)));
                    break;
            }
        }
        phoneStr = temp.toString();

        System.out.println("수신자 번호 : " + phoneNumberRequest.getPhoneNumber());
        System.out.println("인증 번호 : " + phoneStr);
        verificationCodePhoneNumber(phoneNumberRequest,phoneStr);
        curAccount.get().setVerificationCodeNumber(phoneStr);

        return makeResponse("200", convertObjectToJson(phoneStr),"success", HttpStatus.OK);
    }

}
