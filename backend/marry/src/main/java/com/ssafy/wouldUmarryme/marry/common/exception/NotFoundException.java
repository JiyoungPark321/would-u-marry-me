package com.ssafy.wouldUmarryme.marry.common.exception;


public class NotFoundException extends BusinessException {

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }

}
