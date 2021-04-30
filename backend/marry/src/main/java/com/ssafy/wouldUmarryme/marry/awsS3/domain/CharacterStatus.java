package com.ssafy.wouldUmarryme.marry.awsS3.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "character_status")
public class CharacterStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="character_status_id")
    private Long id;

    //사진이름
    @Column(name = "character_status_name")
    private String characterName;

    //풀경로
    @Column(name="character_status_url")
    private String characterUrl;

    @Column(name = "character_status_status")
    private String status;

    @ManyToOne
    @JoinColumn(name="character_id")
    private Character character;
}
