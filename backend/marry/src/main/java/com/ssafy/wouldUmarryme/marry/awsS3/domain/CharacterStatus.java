package com.ssafy.wouldUmarryme.marry.awsS3.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
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
    @Column(name ="character_status_id")
    private Long id;

    @Column(name = "character_gender")
    private String gender;


    //풀경로
    @Column(name ="character_status_url")
    private String characterUrl;


    @Column(name = "character_status_status")
    private String status;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private Character character;

    @Builder
    public CharacterStatus(String gender,String characterUrl,String status,Character character){
        this.gender = gender;
        this.characterUrl = characterUrl;
        this.status = status;
        this.character = character;
    }
}
