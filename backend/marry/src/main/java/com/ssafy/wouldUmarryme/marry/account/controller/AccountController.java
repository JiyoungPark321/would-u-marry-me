package com.ssafy.wouldUmarryme.marry.account.controller;

import com.ssafy.wouldUmarryme.marry.account.dto.request.SingupRequest;
import com.ssafy.wouldUmarryme.marry.account.service.AccountService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@Api(tags = {"1. Account"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    @ApiOperation(value = "회원 가입")
    @ApiResponse(code = 201, message = "created")
    @PostMapping("")
    public ResponseEntity<String> singup(final @Valid @RequestBody SingupRequest singup){
        accountService.createAccount(singup);
        return new ResponseEntity<String>("Created", HttpStatus.CREATED);
    }

//    @ApiOperation(value = "사용자 정보 조회")
//    @GetMapping
//    public ResponseEntity<AccountSimpleResponse> getAccount(@ApiIgnore @CurrentAccount Account account) {
//        AccountSimpleResponse accountSimpleResponse =  accountService.findAccount(account);
//        return new ResponseEntity<AccountSimpleResponse>(accountSimpleResponse, HttpStatus.OK);
//    }

//    @ApiOperation(value = "회원 탈퇴")
//    @DeleteMapping
//    public ResponseEntity<Void> deleteAccount(@ApiIgnore @CurrentAccount Account account) {
//        accountService.deleteAccount(account);
//        return ResponseEntity.ok().build();
//    }
}
