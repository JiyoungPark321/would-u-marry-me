package com.ssafy.wouldUmarryme.marry.account.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;

import com.ssafy.wouldUmarryme.marry.account.dto.request.PasswordRequest;
import com.ssafy.wouldUmarryme.marry.account.dto.request.SingupRequest;
import com.ssafy.wouldUmarryme.marry.account.dto.request.UpdateAccountRequest;


import com.ssafy.wouldUmarryme.marry.account.service.AccountService;
import com.ssafy.wouldUmarryme.marry.common.annotation.CurrentAccount;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;


import javax.validation.Valid;

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
//    @PutMapping
//    @ApiOperation(value="비밀번호 변경")
//    public Object changePassword(
//            @Valid @RequestBody @ApiParam(value="비밀번호 변경 시 필요한정보",required = true)
//    )
    @PutMapping
    @ApiOperation(value="회원 수정")
    public Object update(@Valid @RequestBody @ApiParam(value="회원 정보 수정 (비밀번호(영문자 ,숫자 포함 10자 ~ 20자 이하), 닉네임(한글,영문자 숫자 포함 2 ~ 7자 이하), 전화번호)",required = true) UpdateAccountRequest updateAccountRequest,
                         @ApiIgnore @CurrentAccount Account account //-> jwt토큰 확인
    ){

        Object response = accountService.updateAccount(updateAccountRequest,account);
        return response;
    }
    @DeleteMapping
    @ApiOperation(value = "회원 탈퇴")
    public Object delete(@Valid @RequestBody @ApiParam(value = "회원정보 탈퇴시 필요한 회원정보 (비밀번호)",required = true) PasswordRequest passwordRequest,
                         @ApiIgnore @CurrentAccount Account account){
        Object response=accountService.deleteAccount(account,passwordRequest);
        return response;

    }


//    @ApiOperation(value = "사용자 정보 조회")
//    @GetMapping
//    public ResponseEntity<AccountSimpleResponse> getAccount(@ApiIgnore @CurrentAccount Account account) {
//        AccountSimpleResponse accountSimpleResponse =  accountService.findAccount(account);
//        return new ResponseEntity<AccountSimpleResponse>(accountSimpleResponse, HttpStatus.OK);
//    }


}
