package com.a603.tonemate.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class TimbreAnalysis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timbreId;
    private Long userId;

    private Float mfccMean;
    private Float stftMean;
    private Float zcrMean;
    private Float spcMean;
    private Float sprMean;
    private Float rmsMean;
    private Float mfccVar;
    private Float stftVar;
    private Float zcrVar;
    private Float spcVar;
    private Float sprVar;
    private Float rmsVar;

    private Long singer1;
    private Long singer2;
    private Long singer3;
    private Long singer4;
    private Long singer5;

    private Float similarity1;
    private Float similarity2;
    private Float similarity3;
    private Float similarity4;
    private Float similarity5;

    @CreatedDate
    private LocalDateTime time;

    @Builder
    public TimbreAnalysis(Long timbreId, Long userId, Float mfccMean, Float stftMean, Float zcrMean, Float spcMean, Float sprMean, Float rmsMean,
                          Float mfccVar, Float stftVar, Float zcrVar, Float spcVar, Float sprVar, Float rmsVar,
                          Long singer1, Long singer2, Long singer3, Long singer4, Long singer5,
                          Float similarity1, Float similarity2, Float similarity3, Float similarity4, Float similarity5, LocalDateTime time) {
        this.timbreId = timbreId;
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

        this.singer1 = singer1;
        this.singer2 = singer2;
        this.singer3 = singer3;
        this.singer4 = singer4;
        this.singer5 = singer5;

        this.similarity1 = similarity1;
        this.similarity2 = similarity2;
        this.similarity3 = similarity3;
        this.similarity4 = similarity4;
        this.similarity5 = similarity5;

        this.time = time;
    }
}
