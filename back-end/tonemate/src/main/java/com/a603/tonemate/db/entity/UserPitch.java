package com.a603.tonemate.db.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserPitch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String lowPitch;
    private String highPitch;

    public UserPitch(Long userId, String lowPitch, String highPitch) {
        this.userId = userId;
        this.lowPitch = lowPitch;
        this.highPitch = highPitch;
    }
}
