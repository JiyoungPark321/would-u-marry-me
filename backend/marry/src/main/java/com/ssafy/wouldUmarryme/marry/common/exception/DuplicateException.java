package com.ssafy.wouldUmarryme.marry.common.exception;



public class DuplicateException extends BusinessException {

    public DuplicateException(ErrorCode errorCode) {
        super(errorCode);
    }
}
