package com.a603.tonemate.api.service.impl;

import com.a603.tonemate.api.service.MusicService;
import com.a603.tonemate.api.util.PitchUtil;
import com.a603.tonemate.db.entity.UserPitch;
import com.a603.tonemate.db.repository.UserPitchRepository;
import com.a603.tonemate.dto.response.PitchResp;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class MusicServiceImpl implements MusicService {

    private final PitchUtil pitchUtil;
    private final UserPitchRepository userPitchRepository;

    @Override
    public PitchResp findPitch(MultipartFile lowOctave, MultipartFile highOctave, Long userId) {
        //받은 파일 로컬에 저장
        File lowFile = pitchUtil.saveFile(lowOctave, false);
        File highFile = pitchUtil.saveFile(highOctave, true);
        String lowPitch = pitchUtil.getPitch(new ArrayList<>(), new ArrayList<>(), highFile, false);
        String highPitch = pitchUtil.getPitch(new ArrayList<>(), new ArrayList<>(), lowFile, true);
        userPitchRepository.save(new UserPitch(userId, lowPitch, highPitch));
        return new PitchResp(lowPitch, highPitch);
    }


}
