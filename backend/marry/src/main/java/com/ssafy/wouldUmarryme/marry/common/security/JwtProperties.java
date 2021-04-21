package com.ssafy.wouldUmarryme.marry.common.security;



public class JwtProperties {
    public static final String SECRET = "wouldUmarryme";
    public static final int EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "wouldUmarryme ";
    public static final String HEADER_STRING = "Authorization";
}
