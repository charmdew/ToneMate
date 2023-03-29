package com.a603.tonemate.db.repository;

import com.a603.tonemate.db.entity.UserPitch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPitchRepository extends JpaRepository<UserPitch, Long> {
    List<UserPitch> findByUserId(Long userId);
}
