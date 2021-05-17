package com.ssafy.wouldUmarryme.marry.account.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;

import com.ssafy.wouldUmarryme.marry.account.dto.request.*;


import com.ssafy.wouldUmarryme.marry.account.service.AccountService;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;


import javax.validation.Valid;

@Api(tags = {"01. Account"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/account")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    @ApiOperation(value = "회원 가입")
    public Object signup(@Valid @RequestBody @ApiParam(value = "회원가입 시 필요한 회원정보 (아이디, 비밀번호(영문자, 숫자 포함 10자 ~ 20자 이하), 닉네임(한글,영문자 숫자 포함 2 ~ 7자 이하), 전화번호)",
    required = true) SingupRequest singupRequest){
        Object response = accountService.createAccount(singupRequest);
        return response;
    }
    @PostMapping("/id")
    @ApiOperation(value = "아이디 중복체크")
    public Object checkId(@Valid @RequestBody @ApiParam(value = " 아이디 중복인지 체크를 합니다. ", required = true) IdRequest idRequest){
        Object response = accountService.checkId(idRequest);
        return response;
    }
    @PostMapping("/nickname")
    @ApiOperation(value = "닉네임 중복체크")
    public Object checkNickname(@Valid @RequestBody @ApiParam(value=" 닉네임 중복인지 체크를 합니다. " ,required = true) NickNameRequest nickNameRequest){
        Object response = accountService.checkNickName(nickNameRequest);
        return response;
    }

    @PutMapping
    @ApiOperation(value="회원 수정") // Account account ->  jwt토큰 확인
    public Object update(@Valid @RequestBody @ApiParam(value="회원 정보 수정 (비밀번호(영문자 ,숫자 포함 10자 ~ 20자 이하), 닉네임(한글,영문자 숫자 포함 2 ~ 7자 이하), 전화번호)",required = true) UpdateAccountRequest updateAccountRequest,
                         @ApiIgnore @CurrentAccount Account account){
        Object response = accountService.updateAccount(account,updateAccountRequest);
        return response;
    }

    @DeleteMapping
    @ApiOperation(value = "회원 탈퇴")
    public Object delete(@Valid @RequestBody @ApiParam(value = "회원정보 탈퇴시 필요한 회원정보 (비밀번호)",required = true) PasswordRequest passwordRequest,
                         @ApiIgnore @CurrentAccount Account account){
        Object response = accountService.deleteAccount(account,passwordRequest);
        return response;
    }

    @PutMapping("/password")
    @ApiOperation(value = "비밀번호 변경")
    public Object changePassword(@Valid @ApiParam(value = "비밀번호를 변경합니다.",required = true) @RequestBody UpdatePasswordRequest updatePasswordRequest
                             ){
        Object response = accountService.changePassword(updatePasswordRequest);
        return response;
    }

    @PostMapping("/password")
    @ApiOperation(value = "비밀번호 인증")
    public Object checkPassword(@Valid @ApiParam(value = "비밀번호가 맞는지 확인합니다.",required = true) @RequestBody PasswordRequest passwordRequest,
                                @ApiIgnore @CurrentAccount Account account){
        Object response = accountService.checkPassword(account,passwordRequest);
        return response;
    }
    @PostMapping("/search")
    @ApiOperation(value = "비밀번호 찾기")
    public Object search(@Valid @ApiParam(value = "비밀번호 찾기 할 때 필요한 정보 (아이디, 전화번호 , 인증번호)",required = true)@RequestBody SearchPasswordRequest searchPasswordRequest){
        Object response = accountService.searchPassword(searchPasswordRequest);
        return response;
    }
    @PostMapping("/search/account")
    @ApiOperation(value = "회원 정보 조회")
    public Object search(@Valid @ApiParam(value = "회원정보를 조회 합니다.(ID값, 아이디, 닉네임, 전화번호 ", required = true) @RequestBody IdRequest idRequest){
        Object response = accountService.searchAccount(idRequest);
        return response;
    }

    @PostMapping("/sms")
    @ApiOperation(value = "문자 인증")
    public Object SMS(@Valid@ApiParam(value = "문자인증을 합니다.",required = true)  @RequestBody PhoneNumberRequest phoneNumberRequest){
        Object response = accountService.sendSMS(phoneNumberRequest);
        return response;
    }
}
