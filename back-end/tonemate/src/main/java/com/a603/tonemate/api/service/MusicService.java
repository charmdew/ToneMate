package com.a603.tonemate.api.service;

import com.a603.tonemate.dto.response.PitchResp;
import org.springframework.web.multipart.MultipartFile;

public interface MusicService {
    PitchResp findPitch(MultipartFile lowOctave, MultipartFile highOctave, Long userId);
}
