package com.ssafy.wouldUmarryme.marry.common.exception;

import lombok.Getter;

@Getter
public class ErrorResponse {

    private String message;
    private String code;

    public ErrorResponse(String message, String code) {
        this.message = message;
        this.code = code;
    }
}
