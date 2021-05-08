package com.ssafy.wouldUmarryme.marry.awsS3.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
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

    @Column(name="character_name")
    private String name;

    @OneToMany(mappedBy = "character",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<CharacterStatus> statuses = new ArrayList<>();

    @JsonIgnore
    @OneToOne(mappedBy = "character", fetch = FetchType.LAZY)
    private Storyboard storyboard;
}
