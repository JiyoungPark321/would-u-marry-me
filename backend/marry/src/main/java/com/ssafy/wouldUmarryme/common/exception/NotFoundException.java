package com.ssafy.wouldUmarryme.common.exception;


public class NotFoundException extends BusinessException {

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }

}
