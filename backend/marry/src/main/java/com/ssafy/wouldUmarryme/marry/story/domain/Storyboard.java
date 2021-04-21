package com.ssafy.wouldUmarryme.marry.story.domain;

import com.ssafy.wouldUmarryme.marry.account.domain.Account;
import com.ssafy.wouldUmarryme.marry.awsS3.domain.Structer;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@NoArgsConstructor
@Table(name = "storyboard")
public class Storyboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "storyboard_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "structer_id")
    private Structer structer;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private Account account;
}
