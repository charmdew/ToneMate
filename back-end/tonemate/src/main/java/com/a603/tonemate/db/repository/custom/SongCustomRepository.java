package com.a603.tonemate.db.repository.custom;

import java.util.List;

import com.a603.tonemate.db.entity.Song;
import com.a603.tonemate.enumpack.Genre;

public interface SongCustomRepository {
	List<Song> findSingerByIdAndGenre(List<Long> ids, Genre genre);
}
