package com.a603.tonemate.db.repository.custom;

import com.a603.tonemate.dto.common.KaraokeDto;
import com.a603.tonemate.dto.request.SearchSongReq;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.a603.tonemate.db.entity.QKaraoke.karaoke;
import static com.a603.tonemate.db.entity.QLikeSong.likeSong;


@Repository
@RequiredArgsConstructor
public class KaraokeCustomRepositoryImpl implements KaraokeCustomRepository {
    private final JPAQueryFactory query;

    @Override
    public Page<KaraokeDto> search(SearchSongReq param, Long userId, Pageable pageable) {
        List<KaraokeDto> songs = query
                .select(Projections.constructor(KaraokeDto.class,
                        karaoke.tjNum,
                        karaoke.singer,
                        karaoke.title,
                        new CaseBuilder()
                                .when(likeSong.userId.eq(userId))
                                .then(true)
                                .otherwise(false)
                ))
                .from(karaoke)
                .leftJoin(likeSong)
                .on(likeSong.userId.eq(userId), likeSong.karaoke.eq(karaoke))
                .where(containsSinger(param.getSinger()), containsTitle(param.getTitle()),
                        containsKyNum(param.getTjNum()))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Long> songSize = query
                .select(karaoke.count())
                .from(karaoke)
                .where(containsSinger(param.getSinger()), containsTitle(param.getTitle()),
                        containsKyNum(param.getTjNum()));

        return PageableExecutionUtils.getPage(songs, pageable, songSize::fetchOne);
    }

    @Override
    public Page<KaraokeDto> findAll(Long userId, Pageable pageable) {
        List<KaraokeDto> songs = query
                .select(Projections.constructor(KaraokeDto.class,
                        karaoke.tjNum,
                        karaoke.singer,
                        karaoke.title,
                        new CaseBuilder()
                                .when(likeSong.userId.eq(userId))
                                .then(true)
                                .otherwise(false)
                ))
                .from(karaoke)
                .leftJoin(likeSong)
                .on(likeSong.userId.eq(userId), likeSong.karaoke.eq(karaoke))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        JPAQuery<Long> songSize = query
                .select(karaoke.count())
                .from(karaoke);

        return PageableExecutionUtils.getPage(songs, pageable, songSize::fetchOne);
    }

    private BooleanExpression containsSinger(String singer) {
        if (StringUtils.hasText(singer)) {
            return karaoke.singerNoSpace.contains(singer.replace(" ", ""));
        }
        return null;
    }

    private BooleanExpression containsTitle(String title) {
        if (StringUtils.hasText(title)) {
            return karaoke.titleNoSpace.contains(title.replace(" ", ""));
        }
        return null;
    }

    private BooleanExpression containsKyNum(Integer num) {
        if (num != null) {
            return karaoke.tjNum.eq(num);
        }
        return null;
    }


}
