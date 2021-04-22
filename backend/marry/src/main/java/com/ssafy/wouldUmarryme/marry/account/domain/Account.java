package com.ssafy.wouldUmarryme.marry.account.domain;


import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="account_id")
    private Long id;

    //유저 아이디
    @Column(unique=true)
    private String uid;

    private String password;

    private String name;

    private String phone;

    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Storyboard> storyboards;

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
