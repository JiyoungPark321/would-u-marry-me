package com.ssafy.wouldUmarryme.common.exception;



public class DuplicateException extends BusinessException {

    public DuplicateException(ErrorCode errorCode) {
        super(errorCode);
    }
}
