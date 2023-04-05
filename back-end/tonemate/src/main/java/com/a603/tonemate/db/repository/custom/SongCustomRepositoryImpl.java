package com.a603.tonemate.db.repository.custom;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.a603.tonemate.db.entity.Song;
import com.a603.tonemate.enumpack.Genre;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;


import static com.a603.tonemate.db.entity.QSong.song;
import static com.a603.tonemate.db.entity.QSinger.singer;

@Repository
@RequiredArgsConstructor
public class SongCustomRepositoryImpl implements SongCustomRepository{
	private final JPAQueryFactory query;

	@Override
	public List<Song> findSingerByIdAndGenre(List<Long> ids, Genre genre) {
        return query
                .select(song) //song 테이블의 속성들 전부
                .from(song) //song을 기준으로
                .join(song.singer, singer) // singer와 join
                .where(song.songId.in(ids), singer.genre.eq(genre)) //id, genre
                .limit(3)
                .fetch();
	}
}
