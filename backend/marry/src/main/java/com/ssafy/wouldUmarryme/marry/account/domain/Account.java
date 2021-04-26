package com.ssafy.wouldUmarryme.marry.account.domain;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="USER_ID")
    private Long id;

    //유저 아이디
    @Column(unique=true)
    private String uid;

    private String password;

    private String name;

    private String phone;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_GUEST;

    @Builder
    public Account(@NotNull String uid,@NotNull String password,@NotNull String name,@NotNull String phone,@NotNull UserRole role){
        this.uid = uid;
        this.password=password;
        this.name=name;
        this.phone=phone;
        this.role=role;



    }


}
