package com.ssafy.wouldUmarryme.marry.account.dto.reponse;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
@ToString
public class SearchAccountResponse {

    private Long id;
    private String userName;
    private String nickName;
    private String phoneNumber;

    // static 이면 객체를 안만들고 따른 클래스에서 호출이 가능
    public static SearchAccountResponse toSearchAccountResponse(Account account){
        return SearchAccountResponse.builder()
                .id(account.getId())
                .userName(account.getUserName())
                .nickName(account.getNickName())
                .phoneNumber(account.getPhoneNumber())
                .build();
    }
}
