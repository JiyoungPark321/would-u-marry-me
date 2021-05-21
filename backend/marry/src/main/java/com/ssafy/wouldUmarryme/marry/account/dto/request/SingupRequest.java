package com.ssafy.wouldUmarryme.marry.account.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;


@Getter
@Setter
public class SingupRequest {
    private String userName;
    @Pattern(regexp = "[a-zA-Z1-9]{10,20}",message = "영문자, 숫자 포함 10자 ~ 20자 이하입니다.")
    private String password;
    @Pattern(regexp = "[가-힣a-zA-Z1-9]{2,7}",message = "한글,영문자 숫자 포함 2 ~ 7자 이하입니다.")
    private String nickName;
    private String phoneNumber;
}
