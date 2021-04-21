package com.ssafy.wouldUmarryme.common.exception;



public class NotMatchException extends BusinessException {

    public NotMatchException(ErrorCode errorCode) {
        super(errorCode);
    }

}
