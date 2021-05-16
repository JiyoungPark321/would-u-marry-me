package com.ssafy.wouldUmarryme.marry.awsS3.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "character_id")
    private Long id;

    @Column(name="character_couple_name")
    private String coupleName;

    @Column(name = "character_couple_url")
    private String coupleUrl;

    @OneToMany(mappedBy = "character",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<CharacterStatus> statuses = new ArrayList<>();


    @Builder
    public Character(String coupleName,String coupleUrl){
        this.coupleName=coupleName;
        this.coupleUrl=coupleUrl;
    }
}
