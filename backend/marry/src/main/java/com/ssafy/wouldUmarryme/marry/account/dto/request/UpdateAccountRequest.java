package com.ssafy.wouldUmarryme.marry.account.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateAccountRequest {
    String uid;
    String password;
    String name;
    String phone;
}
