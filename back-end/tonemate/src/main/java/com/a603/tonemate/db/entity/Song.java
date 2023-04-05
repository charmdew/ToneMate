package com.a603.tonemate.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Getter
@NoArgsConstructor
@Table(indexes = {@Index(name = "idx_octavelow", columnList = "octaveLow"),@Index(name = "idx_octavehigh", columnList = "octaveHigh")})//index
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long songId;
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
    
    @Column
    private Integer octaveLow = 0;
    @Column
    private Integer octaveHigh = 500;

    //private Long singerId;
    private String title;
    private String numKy;
    private String numTj;


    @ManyToOne
    @JoinColumn(name = "singer_id")
    @JsonBackReference
    private Singer singer;

    @Builder
	public Song(Long songId, Float mfccMean, Float stftMean, Float zcrMean, Float spcMean, Float sprMean,
			Float rmsMean, Float mfccVar, Float stftVar, Float zcrVar, Float spcVar, Float sprVar, Float rmsVar,
			Integer octaveLow, Integer octaveHigh, Singer singer, String title, String numKy, String numTj) {
		super();
		this.songId = songId;
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
		this.octaveLow = octaveLow;
		this.octaveHigh = octaveHigh;
		this.singer = singer;
		this.title = title;
		this.numKy = numKy;
		this.numTj = numTj;
	}



    public void updateOctaveLow(Integer octaveLow) {
        this.octaveLow = octaveLow;
    }

    public void updateOctaveHigh(Integer octaveHigh) {
        this.octaveHigh = octaveHigh;
    }


}
