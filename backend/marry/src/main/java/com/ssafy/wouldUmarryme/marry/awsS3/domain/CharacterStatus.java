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

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="character_id")
    private Character character;

    @Builder
    public CharacterStatus(String characterName,String characterUrl,String status,Character character){
        this.characterName=characterName;
        this.characterUrl=characterUrl;
        this.status=status;
        this.character=character;
    }
}
