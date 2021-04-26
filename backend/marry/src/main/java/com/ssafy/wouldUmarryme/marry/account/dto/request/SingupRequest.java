package com.ssafy.wouldUmarryme.marry.account.dto.request;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SingupRequest {
    private String uid;
    private String password;
    private String name;
    private String phone;
}
