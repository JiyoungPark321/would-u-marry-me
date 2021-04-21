package com.ssafy.wouldUmarryme.account.dto.request;

import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
public class UpdatePwRequest {

    private String currentPw;
    private String newPw;

}
