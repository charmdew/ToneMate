package com.a603.tonemate.db.repository.custom;

import com.a603.tonemate.dto.common.KaraokeDto;
import com.a603.tonemate.dto.request.SearchSongReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface KaraokeCustomRepository {
    Page<KaraokeDto> search(SearchSongReq param, Long userId, Pageable pageable);

    Page<KaraokeDto> findAll(Long userId, Pageable pageable);
}
