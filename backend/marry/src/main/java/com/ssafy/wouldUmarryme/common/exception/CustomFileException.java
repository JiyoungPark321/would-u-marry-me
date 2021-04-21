package com.ssafy.wouldUmarryme.common.exception;

public class CustomFileException extends BusinessException {

    public CustomFileException(ErrorCode errorCode) {
        super(errorCode);
    }

}
