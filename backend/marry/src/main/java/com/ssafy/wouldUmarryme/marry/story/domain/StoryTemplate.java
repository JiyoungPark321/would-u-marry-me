package com.ssafy.wouldUmarryme.marry.story.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "story_templates")
public class StoryTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_template_id")
    private Long id;

    @Column(name = "story_template_name")
    private String imgName;

    @Column(name = "story_template_Url")
    private String imgUrl;

    @OneToOne(mappedBy = "template" , fetch = FetchType.LAZY)
    private Story story;

}
