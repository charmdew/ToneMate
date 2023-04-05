package com.a603.tonemate.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class PitchAnalysis extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitchId;
    private Long userId;
    private Integer octaveLow;
    private Integer octaveHigh;
    @Column(columnDefinition = "varchar(350)")
    private String possibleList;
    @Column(columnDefinition = "varchar(350)")
    private String normalList;
    @Column(columnDefinition = "varchar(350)")
    private String impossibleList;

    @Builder
    public PitchAnalysis(Long pitchId, Long userId, Integer octaveLow, Integer octaveHigh,
                         String possibleList, String normalList, String impossibleList) {
        this.pitchId = pitchId;
        this.userId = userId;
        this.octaveLow = octaveLow;
        this.octaveHigh = octaveHigh;
        this.possibleList = possibleList;
        this.normalList = normalList;
        this.impossibleList = impossibleList;
    }


}
