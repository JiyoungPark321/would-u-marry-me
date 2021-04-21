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
@Table(name = "structer")
public class Structer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "structer_id")
    private Long id;

    @Column(name = "structer_path")
    private String structerPath;

    @Column(name = "structer_full_path")
    private String structerFullPath;

    @OneToOne(mappedBy = "structer")
    private Storyboard storyboard;
}
