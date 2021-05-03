package com.ssafy.wouldUmarryme.marry.account.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchPasswordRequest {
    String userName;
    String phoneNumber;
    String verificationCodeNumber;
}
