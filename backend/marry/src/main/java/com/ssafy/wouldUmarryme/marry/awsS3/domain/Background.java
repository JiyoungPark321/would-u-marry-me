package com.ssafy.wouldUmarryme.marry.awsS3.domain;


import com.ssafy.wouldUmarryme.marry.story.domain.Storyboard;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "background")
public class Background {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "background_id")
    private Long id;

    @Column(name = "background_path")
    private String backgroundPath;

    @Column(name = "background_full_path")
    private String backgroundFullPath;

    @OneToOne(mappedBy = "background")
    private Storyboard storyboard;
}
