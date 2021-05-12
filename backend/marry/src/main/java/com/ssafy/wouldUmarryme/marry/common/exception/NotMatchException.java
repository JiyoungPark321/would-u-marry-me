package com.ssafy.wouldUmarryme.marry.common.exception;



public class NotMatchException extends BusinessException {

    public NotMatchException(ErrorCode errorCode) {
        super(errorCode);
    }

}
