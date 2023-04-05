package com.a603.tonemate.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class KaraokeTop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long karaokeTopId;
    @OneToOne
    @JoinColumn(name = "karaoke_id")
    private Karaoke karaoke;
}
