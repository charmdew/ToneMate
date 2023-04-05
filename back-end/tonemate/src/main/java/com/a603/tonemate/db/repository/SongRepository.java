package com.a603.tonemate.db.repository;

import com.a603.tonemate.db.entity.Song;
import com.a603.tonemate.db.repository.custom.SongCustomRepository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SongRepository extends JpaRepository<Song, Long>,SongCustomRepository {
    Optional<Song> findBySongId(Long i);

    @Query("SELECT s FROM Song s JOIN Singer si ON s.singer.singerId = si.singerId WHERE si.gender = :gender AND s.octaveLow >= :octaveLow AND s.octaveHigh <= :octaveHigh ORDER BY ABS(((s.octaveLow + s.octaveHigh) / 2) - ((:octaveLow + :octaveHigh) / 2))")
    List<Song> findByGenderAndOctaveInRange(@Param("octaveLow") int octaveLow, @Param("octaveHigh") int octaveHigh, @Param("gender") boolean gender,Pageable pageable);

    @Query("SELECT s FROM Song s JOIN Singer si ON s.singer.singerId = si.singerId WHERE si.gender = :gender AND s.octaveLow <= :octaveHigh AND s.octaveHigh >= :octaveLow ORDER BY ABS(((s.octaveLow + s.octaveHigh) / 2) - ((:octaveLow + :octaveHigh) / 2))")
    List<Song> findByGenderAndOctaveOverlap(@Param("octaveLow") int octaveLow, @Param("octaveHigh") int octaveHigh, @Param("gender") boolean gender, Pageable pageable);

    List<Song> findBySongIdIn(List<Long> idList);
}
