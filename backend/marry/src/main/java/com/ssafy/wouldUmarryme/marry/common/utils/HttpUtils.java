package com.ssafy.wouldUmarryme.marry.common.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.wouldUmarryme.marry.common.response.BasicResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class HttpUtils {

    private static ObjectMapper objectMapper = new ObjectMapper();

    public static ResponseEntity<BasicResponse> makeResponse(String status, Object data, String message, HttpStatus httpStatus){
        BasicResponse result = BasicResponse.builder().status(status).message(message).data(data).build();
        return new ResponseEntity<>(result,httpStatus);
    }

    //Object를 json로 바꿔주려고 (json은 string type)
    public static String convertObjectToJson(Object object){
        try{
            return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "Failed convert object to json";
        }
    }
}
