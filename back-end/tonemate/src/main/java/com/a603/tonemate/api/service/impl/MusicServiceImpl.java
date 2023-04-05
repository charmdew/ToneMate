package com.a603.tonemate.api.service.impl;

import com.a603.tonemate.api.service.MusicService;
import com.a603.tonemate.db.entity.PitchAnalysis;
import com.a603.tonemate.db.entity.Song;
import com.a603.tonemate.db.entity.TimbreAnalysis;
import com.a603.tonemate.db.repository.PitchAnalysisRepository;
import com.a603.tonemate.db.repository.SingerRepository;
import com.a603.tonemate.db.repository.SongRepository;
import com.a603.tonemate.db.repository.TimbreAnalysisRepository;
import com.a603.tonemate.dto.common.PitchResult;
import com.a603.tonemate.dto.common.SingerDetail;
import com.a603.tonemate.dto.common.SingerSimilarity;
import com.a603.tonemate.dto.request.PitchAnalysisReq;
import com.a603.tonemate.dto.response.PitchAnalysisResp;
import com.a603.tonemate.dto.response.ResultResp;
import com.a603.tonemate.dto.response.TimbreAnalysisResp;
import com.a603.tonemate.enumpack.Genre;
import com.a603.tonemate.util.FlaskUtil;
import com.a603.tonemate.util.PitchUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class MusicServiceImpl implements MusicService {
    private final FlaskUtil flaskUtil;
    private final PitchUtil pitchUtil;
    private final TimbreAnalysisRepository timbreAnalysisRepository;
    private final PitchAnalysisRepository pitchAnalysisRepository;
    private final SongRepository songRepository;
    private final SingerRepository singerRepository;

    @Transactional
    @Override
    public TimbreAnalysisResp saveTimbreAnalysis(Long userId, MultipartFile file) throws Exception {

        // 플라스크 서버에 분석 처리 요청 후 결과값 받아오기
        Map<String, Object> result = flaskUtil.requestTimbre(file);

        // 분석 결과 데이터 가공하여 응답
        if (result != null) {

            // 유사도 높은 순으로 정렬 (내림차순)
            TreeSet<SingerSimilarity> set = new TreeSet<>();

            List<String> singers = (ArrayList<String>) result.get("singer");
            List<Double> similarityPercents = (ArrayList<Double>) result.get("similaritypercent");
            System.out.println("가수: " + singers);
            System.out.println("유사도: " + similarityPercents.get(0).floatValue());

            for (int i = 0; i < singers.size(); i++) {
                String singerName = singers.get(i);
                float similarityPercent = similarityPercents.get(i).floatValue();
                set.add(new SingerSimilarity(singerName, similarityPercent));
            }

            // 상위 5개의 객체 가져오기
            int top = 5;
            List<SingerDetail> topSingerDetails = new ArrayList<>();
            for (SingerSimilarity detail : set) {
                topSingerDetails.add(new SingerDetail(singerRepository.findByName(detail.getName()).get(), detail.getSimilarityPercent()));
                if (topSingerDetails.size() == top) {
                    break;
                }
            }
            System.out.println("정렬된 결과: " + set);
            System.out.println("상위 " + top + "개: " + topSingerDetails);

            TimbreAnalysis newTimbreAnalysis = TimbreAnalysis.builder()
                    .userId(userId)
                    .mfccMean(((Double) result.get("mfcc_mean")).floatValue())
                    .stftMean(((Double) result.get("stft_mean")).floatValue())
                    .zcrMean(((Double) result.get("zcr_mean")).floatValue())
                    .spcMean(((Double) result.get("spc_mean")).floatValue())
                    .sprMean(((Double) result.get("spr_mean")).floatValue())
                    .rmsMean(((Double) result.get("rms_mean")).floatValue())
                    .mfccVar(((Double) result.get("mfcc_var")).floatValue())
                    .stftVar(((Double) result.get("stft_var")).floatValue())
                    .zcrVar(((Double) result.get("zcr_var")).floatValue())
                    .spcVar(((Double) result.get("spc_var")).floatValue())
                    .sprVar(((Double) result.get("spr_var")).floatValue())
                    .rmsVar(((Double) result.get("rms_var")).floatValue())
                    .singer1(topSingerDetails.get(0).getSingerId())
                    .singer2(topSingerDetails.get(1).getSingerId())
                    .singer3(topSingerDetails.get(2).getSingerId())
                    .singer4(topSingerDetails.get(3).getSingerId())
                    .singer5(topSingerDetails.get(4).getSingerId())
                    .similarity1(topSingerDetails.get(0).getSimilarityPercent())
                    .similarity2(topSingerDetails.get(1).getSimilarityPercent())
                    .similarity3(topSingerDetails.get(2).getSimilarityPercent())
                    .similarity4(topSingerDetails.get(3).getSimilarityPercent())
                    .similarity5(topSingerDetails.get(4).getSimilarityPercent())
                    .time(LocalDateTime.now()).build();

            // 분석 결과 데이터베이스에 저장
            TimbreAnalysis saveTimbreAnalysis = timbreAnalysisRepository.save(newTimbreAnalysis);

            List<Long> singerIdList = topSingerDetails.stream().map(SingerDetail::getSingerId).collect(Collectors.toList());
            // 분석 결과 응답 데이터 생성
            TimbreAnalysisResp timbreAnalysisResp = TimbreAnalysisResp.builder()
                    .mfccMean(saveTimbreAnalysis.getMfccMean())
                    .stftMean(saveTimbreAnalysis.getStftMean())
                    .zcrMean(saveTimbreAnalysis.getZcrMean())
                    .spcMean(saveTimbreAnalysis.getSpcMean())
                    .sprMean(saveTimbreAnalysis.getSprMean())
                    .rmsMean(saveTimbreAnalysis.getRmsMean())
                    .mfccVar(saveTimbreAnalysis.getMfccVar())
                    .stftVar(saveTimbreAnalysis.getStftVar())
                    .zcrVar(saveTimbreAnalysis.getZcrVar())
                    .spcVar(saveTimbreAnalysis.getSpcVar())
                    .sprVar(saveTimbreAnalysis.getSprVar())
                    .rmsVar(saveTimbreAnalysis.getRmsVar())
                    .timbreId(saveTimbreAnalysis.getTimbreId())
                    .time(saveTimbreAnalysis.getTime())
                    .singerDetails(topSingerDetails)
                    .build();
            return timbreAnalysisResp;
        }

        return null;
    }

    @Override
    public PitchAnalysisResp savePitchAnalysis(PitchAnalysis pitchAnalysis) {

        PitchAnalysis newPitchAnalysis = PitchAnalysis.builder().pitchId(pitchAnalysis.getPitchId())
                .userId(pitchAnalysis.getUserId()).time(LocalDateTime.now()).build();

        PitchAnalysis savePitchAnalysis = pitchAnalysisRepository.save(newPitchAnalysis);

        PitchAnalysisResp pitchAnalysisResp = PitchAnalysisResp.builder().pitchId(savePitchAnalysis.getPitchId())
                .time(savePitchAnalysis.getTime()).build();

        return pitchAnalysisResp;

    }

    @Override
    public List<ResultResp> getResultList(Long userId) {

        List<PitchAnalysis> pitchAnalysisList = pitchAnalysisRepository.findAllByUserId(userId);
        List<TimbreAnalysis> timbreAnalysisList = timbreAnalysisRepository.findAllByUserId(userId);

        List<ResultResp> resultRespList = Stream
                .concat(timbreAnalysisList
                                .stream()
                                .map(x -> ResultResp.builder().resultId(x.getTimbreId()).type("timbre").time(x.getTime())
                                        .build()),
                        pitchAnalysisList.stream().map(x -> ResultResp.builder().resultId(x.getPitchId()).type("pitch")
                                .time(x.getTime()).build()))
                .collect(Collectors.toList());

        Collections.sort(resultRespList);

        return resultRespList;
    }

    @Transactional
    @Override
    public TimbreAnalysisResp selectOneTimbreAnalysis(Long timbreId) {

        TimbreAnalysis timbreAnalysis = timbreAnalysisRepository.findByTimbreId(timbreId).orElseThrow();

        List<SingerDetail> topFive = new ArrayList<>();
        topFive.add(new SingerDetail(singerRepository.findBySingerId(timbreAnalysis.getSinger1()).get(), timbreAnalysis.getSimilarity1()));
        topFive.add(new SingerDetail(singerRepository.findBySingerId(timbreAnalysis.getSinger2()).get(), timbreAnalysis.getSimilarity2()));
        topFive.add(new SingerDetail(singerRepository.findBySingerId(timbreAnalysis.getSinger3()).get(), timbreAnalysis.getSimilarity3()));
        topFive.add(new SingerDetail(singerRepository.findBySingerId(timbreAnalysis.getSinger4()).get(), timbreAnalysis.getSimilarity4()));
        topFive.add(new SingerDetail(singerRepository.findBySingerId(timbreAnalysis.getSinger5()).get(), timbreAnalysis.getSimilarity5()));

        TimbreAnalysisResp timbreAnalysisResp = TimbreAnalysisResp.builder().timbreId(timbreAnalysis.getTimbreId())
                .mfccMean(timbreAnalysis.getMfccMean()).stftMean(timbreAnalysis.getStftMean())
                .zcrMean(timbreAnalysis.getZcrMean()).spcMean(timbreAnalysis.getSpcMean())
                .sprMean(timbreAnalysis.getSprMean()).rmsMean(timbreAnalysis.getRmsMean())
                .mfccVar(timbreAnalysis.getMfccVar()).stftVar(timbreAnalysis.getStftVar())
                .zcrVar(timbreAnalysis.getZcrVar()).spcVar(timbreAnalysis.getSpcVar())
                .sprVar(timbreAnalysis.getSprVar()).rmsVar(timbreAnalysis.getRmsVar()).time(timbreAnalysis.getTime())
                .singerDetails(topFive).build();

        return timbreAnalysisResp;
    }

    @Override
    public PitchAnalysisResp selectOnePitchAnalysis(Long userId, Long pitchId) {
		PitchAnalysis pitchAnalysis = pitchAnalysisRepository.findByPitchIdAndUserId(pitchId, userId).orElseThrow();

        List<Long> possibleList = convertStringToLongList(pitchAnalysis.getPossibleList());
        List<Long> normalList = convertStringToLongList(pitchAnalysis.getNormalList());
        List<Long> impossibleList = convertStringToLongList(pitchAnalysis.getImpossibleList());

        List<Song> possibleSong = songRepository.findBySongIdIn(possibleList);
        List<Song> normalSong = songRepository.findBySongIdIn(normalList);
        List<Song> impossibleSong = songRepository.findBySongIdIn(impossibleList);

        return PitchAnalysisResp.builder()
        		.lowOctave(pitchUtil.getOctaveName(pitchAnalysis.getOctaveLow()))
        		.highOctave(pitchUtil.getOctaveName(pitchAnalysis.getOctaveHigh()))
                .possibleSong(possibleSong)
                .normalSong(normalSong)
                .impossibleSong(impossibleSong)
                .pitchId(pitchAnalysis.getPitchId()).time(pitchAnalysis.getTime()).build();
    }

    @Override
    public void deleteResult(String type, Long resultId) {
        // 음색 검사 결과 삭제
        if (type.equals("timbre")) {
            timbreAnalysisRepository.deleteById(resultId);
        } else if (type.equals("pitch")) {
            pitchAnalysisRepository.deleteById(resultId);
        }
    }

    @Override
    public PitchAnalysisResp analysisPitch(Long userId, MultipartFile highOctave, MultipartFile lowOctave) {
    	System.out.println(highOctave+" " + lowOctave);
        PitchResult lowPitch = pitchUtil.getPitch(lowOctave, false);
        PitchResult highPitch = pitchUtil.getPitch(highOctave, true);
        System.out.println(lowPitch + " " + highPitch);
        // 복구전까지 임시처리
        int randLow = new Random().nextInt(28);
        int randHigh = new Random().nextInt(27) + 32;

        List<Song> possibleNormalSong = songRepository.findByOctaveInRange(lowPitch.getPitch(), highPitch.getPitch(), PageRequest.of(0, 6));
        
        int size = possibleNormalSong.size();
        List<Song> possibleSong = possibleNormalSong.subList(0, Math.min(3, size));
        
        List<Song> normalSong = new ArrayList<>();
        if(size>3) {
        	normalSong = possibleNormalSong.subList(3, Math.min(6, size));
        }
        
        List<Song> impossibleSong = songRepository.findByOctaveOverlap(lowPitch.getPitch(), highPitch.getPitch(), PageRequest.of(0, 3));
        
        List<Long> possibleSongId = new ArrayList<>();
        List<Long> normalSongId = new ArrayList<>();
        List<Long> impossibleSongId = new ArrayList<>();

        //50 이하의 데이터에서 for문과 큰 성능 차이가 없다. forEach가 더 유연한 대처가능
        int possibleNormalSongLen = Math.min(3, possibleNormalSong.size());
        
        possibleNormalSong.subList(0, possibleNormalSongLen).forEach(song -> possibleSongId.add(song.getSongId()));
        possibleNormalSong.subList(possibleNormalSongLen,Math.min(possibleNormalSongLen+3, possibleNormalSong.size())).forEach(song -> normalSongId.add(song.getSongId()));
        impossibleSong.forEach(song -> impossibleSongId.add(song.getSongId()));

        PitchAnalysis pitchAnalysis = pitchAnalysisRepository.save(PitchAnalysis.builder().octaveLow(randLow)
                .octaveHigh(randHigh).userId(userId).possibleList(possibleSongId.toString())
                .normalList(normalSongId.toString()).impossibleList(impossibleSongId.toString()).build());

        return PitchAnalysisResp.builder().lowOctave(pitchUtil.getOctaveName(lowPitch.getPitch())).highOctave(pitchUtil.getOctaveName(highPitch.getPitch()))
                .possibleSong(possibleSong)
                .normalSong(normalSong)
                .impossibleSong(impossibleSong)
                .pitchId(pitchAnalysis.getPitchId())
                .time(pitchAnalysis.getTime()).build();
    }

    
    @Override
    public PitchAnalysisResp analysisPitchByGenre(Long userId, String genre, Long pitchId) {
        Genre genreEnum = Genre.fromCode(genre);
   
        PitchAnalysis pitchAnalysis = pitchAnalysisRepository.findByPitchIdAndUserId(pitchId, userId).orElseThrow();

        List<Long> possibleList = convertStringToLongList(pitchAnalysis.getPossibleList());
        List<Long> normalList = convertStringToLongList(pitchAnalysis.getNormalList());
        List<Long> impossibleList = convertStringToLongList(pitchAnalysis.getImpossibleList());

        List<Song> possibleSongs = songRepository.findSingerByIdAndGenre(possibleList, genreEnum);
        List<Song> normalSongs = songRepository.findSingerByIdAndGenre(normalList, genreEnum);
        List<Song> impossibleSongs = songRepository.findSingerByIdAndGenre(impossibleList, genreEnum);

        return PitchAnalysisResp.builder()
                .possibleSong(possibleSongs)
                .normalSong(normalSongs)
                .impossibleSong(impossibleSongs)
                .build();
    }

    // 문자열 배열을 실제 리스트로 생성 str ="[1, 2, 3, 4]"
    private List<Long> convertStringToLongList(String str) {
        List<Long> convertList = new ArrayList<>();
        if ("[]".equals(str)) return convertList;
        
        String[] stringArray = str.substring(1, str.length() - 1).split(",");
        for (String s : stringArray) {
            String trimmed = s.trim();
            Long converted = Long.valueOf(trimmed);
            convertList.add(converted);
        }
        return convertList;
    }

}
