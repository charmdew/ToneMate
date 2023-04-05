package com.a603.tonemate.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class PitchAnalysis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pitchId;
    private Long userId;

    private Integer octaveLow;
    private Integer octaveHigh;

    @CreatedDate
    private LocalDateTime time;

    @Column(columnDefinition = "varchar(350)")
    private String possibleList;
    @Column(columnDefinition = "varchar(350)")
    private String normalList;
    @Column(columnDefinition = "varchar(350)")
    private String impossibleList;


    @Builder
    public PitchAnalysis(Long pitchId, Long userId, Integer octaveLow, Integer octaveHigh, LocalDateTime time,
                         String possibleList, String normalList, String impossibleList) {
        super();
        this.pitchId = pitchId;
        this.userId = userId;
        this.octaveLow = octaveLow;
        this.octaveHigh = octaveHigh;
        this.time = time;
        this.possibleList = possibleList;
        this.normalList = normalList;
        this.impossibleList = impossibleList;
    }


}
