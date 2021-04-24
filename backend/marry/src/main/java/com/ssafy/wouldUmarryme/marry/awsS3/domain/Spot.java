package com.ssafy.wouldUmarryme.marry.awsS3.domain;

import com.ssafy.wouldUmarryme.marry.story.domain.Story;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "spot")
public class Spot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "spot_id")
    private Long id;

    @Column(name = "spot_path")
    private String spotPath;

    @Column(name = "spot_full_path")
    private String spotFullPath;

    @OneToOne(mappedBy = "spot", fetch = FetchType.LAZY)
    private Story story;

}
