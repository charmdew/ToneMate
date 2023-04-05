package com.a603.tonemate.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class TimbreAnalysis extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "timbre_id")
    private Long timbreId;
    private Long userId;
    private float mfccMean;
    private float stftMean;
    private float zcrMean;
    private float spcMean;
    private float sprMean;
    private float rmsMean;
    private float mfccVar;
    private float stftVar;
    private float zcrVar;
    private float spcVar;
    private float sprVar;
    private float rmsVar;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "timbre_id")
    private List<SingerSimilarity> singerSimilarities;

//    private Long singer1;
//    private Long singer2;
//    private Long singer3;
//    private Long singer4;
//    private Long singer5;
//
//    private float similarity1;
//    private float similarity2;
//    private float similarity3;
//    private float similarity4;
//    private float similarity5;

    @Builder
    public TimbreAnalysis(Long userId, float mfccMean, float stftMean, float zcrMean, float spcMean, float sprMean, float rmsMean, float mfccVar, float stftVar, float zcrVar, float spcVar, float sprVar, float rmsVar) {
        this.userId = userId;
        this.mfccMean = mfccMean;
        this.stftMean = stftMean;
        this.zcrMean = zcrMean;
        this.spcMean = spcMean;
        this.sprMean = sprMean;
        this.rmsMean = rmsMean;
        this.mfccVar = mfccVar;
        this.stftVar = stftVar;
        this.zcrVar = zcrVar;
        this.spcVar = spcVar;
        this.sprVar = sprVar;
        this.rmsVar = rmsVar;
    }
}
