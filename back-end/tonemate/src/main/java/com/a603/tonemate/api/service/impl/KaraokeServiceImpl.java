package com.a603.tonemate.api.service.impl;

import com.a603.tonemate.api.service.KaraokeService;
import com.a603.tonemate.db.repository.KaraokeRepository;
import com.a603.tonemate.db.repository.KaraokeTopRepository;
import com.a603.tonemate.dto.common.KaraokeDto;
import com.a603.tonemate.dto.common.KaraokeTopDto;
import com.a603.tonemate.dto.request.SearchSongReq;
import com.a603.tonemate.dto.response.KaraokeResp;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KaraokeServiceImpl implements KaraokeService {
    private final KaraokeTopRepository karaokeTopRepository;
    private final KaraokeRepository karaokeRepository;

    @Override
    public KaraokeResp selectTopSong(Pageable pageable, Long userId) {
        Page<KaraokeTopDto> topSongs = karaokeTopRepository.findAll(userId, pageable);


        return KaraokeResp.builder()
                .songs(topSongs.getContent())
                .pageSize(topSongs.getPageable().getPageSize())
                .totalPageNumber(topSongs.getTotalPages())
                .totalCount(topSongs.getTotalElements())
                .build();
    }

    @Override
    public KaraokeResp selectAllSong(Pageable pageable, Long userId) {
        Page<KaraokeDto> allSongs = karaokeRepository.findAll(userId, pageable);

        return KaraokeResp.builder()
                .songs(allSongs.getContent())
                .pageSize(allSongs.getPageable().getPageSize())
                .totalPageNumber(allSongs.getTotalPages())
                .totalCount(allSongs.getTotalElements())
                .build();
    }

    @Override
    public KaraokeResp searchSong(SearchSongReq searchSongReq, Pageable pageable, Long userId) {
        Page<KaraokeDto> songs = karaokeRepository.search(searchSongReq, userId, pageable);
        return KaraokeResp.builder()
                .songs(songs.getContent())
                .pageSize(songs.getPageable().getPageSize())
                .totalPageNumber(songs.getTotalPages())
                .totalCount(songs.getTotalElements())
                .build();
    }
}
