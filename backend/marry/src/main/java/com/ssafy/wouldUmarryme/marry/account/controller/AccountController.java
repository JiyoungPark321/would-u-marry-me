package com.ssafy.wouldUmarryme.marry.account.controller;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.account.domain.UserRole;
import com.ssafy.wouldUmarryme.marry.account.dto.request.SingupRequest;
import com.ssafy.wouldUmarryme.marry.account.dto.request.UpdateAccountRequest;


import com.ssafy.wouldUmarryme.marry.account.service.AccountService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.convertObjectToJson;
import static com.ssafy.wouldUmarryme.marry.common.utils.HttpUtils.makeResponse;
import javax.validation.Valid;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/account")
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    @ApiOperation(value = "회원 가입")
    public Object signup(@Valid @RequestBody @ApiParam(value = "회원가입 시 필요한 회원정보 (아이디, 비밀번호, 닉네임, 전화번호)",
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
    public Object update(@Valid @RequestBody @ApiParam(value="회원 정보 수정 (비밀번호, 닉네임, 전화번호)",required = true) UpdateAccountRequest updateAccountRequest,String id){

        Object response = accountService.updateAccount(updateAccountRequest,id);
        return response;
    }

//    @DeleteMapping
//    @ApiOperation(value="회원 삭제")
//    public Object delete(
//            @Valid @RequestBody @ApiParam(value = "회원정보 탈퇴 시 필요한 회원정보 (비밀번호) ",required = true) String password){
//
//    }










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
