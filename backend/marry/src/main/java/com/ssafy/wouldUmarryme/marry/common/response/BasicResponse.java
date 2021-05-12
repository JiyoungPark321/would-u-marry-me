package com.ssafy.wouldUmarryme.marry.common.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;

@ApiModel(value = "응답 양식", description = "서버에서 프론트로 반환하는 데이터 양식")
@Builder
public class BasicResponse {
    @ApiModelProperty(value = "HttpStatusCode", position = 1)
    public String status;
    @ApiModelProperty(value = "Message", position = 2)
    public String message;
    @ApiModelProperty(value = "데이터를 담는 곳 ", position = 3)
    public Object data;
    @ApiModelProperty(value = "object", position = 4)
    public Object object;
}
