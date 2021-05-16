package com.ssafy.wouldUmarryme.marry.account.domain;


import com.ssafy.wouldUmarryme.marry.account.dto.request.UpdateAccountRequest;
import com.ssafy.wouldUmarryme.marry.common.time.TimeEntity;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Account extends TimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    //유저 아이디
    @Column(unique=true)
    private String userName;

    private String password;

    private String nickName;

    private String phoneNumber;

    private String verificationCodeNumber;

    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Storyboard> storyboards;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_USER;

    @Builder
    public Account(@NotNull String userName, @NotNull String password, @NotNull String nickName, @NotNull String phoneNumber, @NotNull UserRole role){
        this.userName = userName;
        this.password = password;
        this.nickName = nickName;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }

    public void updateValue(String password, String nickName, String phoneNumber){
        this.password = password;
        this.nickName = nickName;
        this.phoneNumber = phoneNumber;
    }
}
