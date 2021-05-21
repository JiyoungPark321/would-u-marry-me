package com.ssafy.wouldUmarryme.marry.common.exception;

public enum ErrorCode {
    INTERNAL_SERVER_ERROR(500, "C_001", "서버가 올바르게 동작하지 않습니다"),
    INVALID_INPUT_VALUE(400, "C_002", "적절하지 않은 요청 값입니다."),

    //TAG_DUPLICATED(400, "TA_001", "이미 존재하는 태그입니다."),
    //TAG_NOT_FOUND(400, "TA_002", "태그를 찾을 수 없습니다."),

    USER_NOT_FOUND(400,"AU_001", "해당 유저를 찾을 수 없습니다."),
    AUTH_ERROR(400, "AU_002", "인증 관련 오류가 발생했습니다."),
    DUPLICATED_EMAIL(400, "AU_003", "이미 존재하는 E-mail입니다."),
    UNAUTHORIZED_REDIRECT_URI(400, "AU_004", "인증되지 않은 REDIRECT_URI입니다."),
    BAD_LOGIN(400, "AU_005", "잘못된 아이디 또는 패스워드입니다."),
    NOT_MATCH_PW(400, "AU_006", "잘못된 패스워드입니다."),

    DEFAULT_DATA_COPY(400,"FL_001","기본 데이터 복사하는 중 오류가 발생했습니다"),
    VOICE_FILE_NOT_SAVE(400,"FL_002","음성 파일 저장 중 오류가 발생했습니다."),

    CARD_NOT_FOUND(400,"CD_001","해당 카드를 찾을 수 없습니다."),

    CATEGORY_NOT_FOUND(400,"CT_001","해당 카테고리를 찾을 수 없습니다."),

    QR_NOT_FOUND(400,"QR_001","해당 QR을 찾을 수 없습니다."),

    VOICE_NOT_FOUND(400,"VC_001","해당 음성 파일을 찾을 수 없습니다.");

    private final String code;
    private final String message;
    private final int status;

    ErrorCode(int status, String code, String message) {
        this.status = status;
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return this.message;
    }

    public String getCode() {
        return code;
    }

    public int getStatus() {
        return status;
    }
}