package com.ssafy.wouldUmarryme.marry.common.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(NotFoundException e){
        ErrorCode errorCode = e.getErrorCode();
        String message = errorCode.getMessage();
        String code = errorCode.getCode();
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
    }

    @ExceptionHandler(DuplicateException.class)
    public ResponseEntity<?> handleDuplicateException(DuplicateException e){
        ErrorCode errorCode = e.getErrorCode();
        String message = errorCode.getMessage();
        String code = errorCode.getCode();
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
    }

    @ExceptionHandler(NotMatchException.class)
    public ResponseEntity<?> handleNotMatchException(NotMatchException e){
        ErrorCode errorCode = e.getErrorCode();
        String message = errorCode.getMessage();
        String code = errorCode.getCode();
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
    }

    @ExceptionHandler(CustomFileException.class)
    public ResponseEntity<ErrorResponse> handleCustomFileException(CustomFileException e){
        ErrorCode errorCode = e.getErrorCode();
        String message = errorCode.getMessage();
        String code = errorCode.getCode();
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
        String message = e.getAllErrors().get(0).getDefaultMessage();
        String code = e.getAllErrors().get(0).getCodes()[0];
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception e){
        log.error(e.getMessage(),e);
        ErrorCode errorCode = ErrorCode.INTERNAL_SERVER_ERROR;
        String message = errorCode.getMessage();
        String code = errorCode.getCode();
        ErrorResponse errorResponse = new ErrorResponse(message, code);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorCode.getStatus()));
    }
}