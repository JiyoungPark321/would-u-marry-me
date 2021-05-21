package com.ssafy.wouldUmarryme.marry.account.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchPasswordRequest {
    private String userName;
    private String phoneNumber;
    private String verificationCodeNumber;
}
