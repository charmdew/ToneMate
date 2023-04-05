package com.a603.tonemate.api.controller;


import com.a603.tonemate.api.service.MusicService;
import com.a603.tonemate.dto.response.PitchAnalysisResp;
import com.a603.tonemate.exception.AnalysisPitchByGenreException;
import com.a603.tonemate.exception.AnalysisPitchException;
import com.a603.tonemate.security.auth.JwtProperties;
import com.a603.tonemate.security.auth.JwtTokenProvider;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequiredArgsConstructor
@Api(tags = {"음성 처리 API"})
@RequestMapping("/music")
public class MusicController {

    private final JwtTokenProvider jwtTokenProvider;
    private final MusicService musicService;


    @GetMapping("")
    public ResponseEntity<String> checkAlive() {
        return new ResponseEntity<String>("Alive", HttpStatus.OK);
    }


    @ApiOperation(value = "음색 분석", notes = "음색 검사를 위한 녹음 wav파일을 분석 및 저장")
    @PostMapping("/timbre")
    public ResponseEntity<?> analysisTimbre(@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token, @RequestParam("fileWav") MultipartFile file) throws Exception {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token
        Long userId = jwtTokenProvider.getId(token);
        return new ResponseEntity<>(musicService.saveTimbreAnalysis(userId, file), HttpStatus.OK);
    }


    @ApiOperation(value = "음역대 분석", notes = "음역대 검사를 위한 녹음 wav파일을 분석 및 저장")
    @PostMapping("/pitch")
    public ResponseEntity<?> analysisPitch(@CookieValue(name = JwtProperties.ACCESS_TOKEN) String token, @RequestPart("lowOctave") MultipartFile lowOctave, @RequestPart("highOctave") MultipartFile highOctave) {
        Long userId = jwtTokenProvider.getId(token);

        PitchAnalysisResp result;
        try {
            result = musicService.analysisPitch(userId, lowOctave, highOctave);
        } catch (Exception e) {//NoFileException | UnsupportedPitchFileException e
            throw AnalysisPitchException.fromException(e);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation(value = "음역대 분석 장르 요청", notes = "음역대 검사에서 장르에 따른 결과 제공")
    @GetMapping("/pitch/{pitchId}/{genre}")
    public ResponseEntity<?> analysisPitchByGenre(@CookieValue(name = JwtProperties.ACCESS_TOKEN) String token, @PathVariable("genre") String genre, @PathVariable("pitchId") Long pitchId) {
        Long userId = jwtTokenProvider.getId(token);
        PitchAnalysisResp result;
        try {
            result = musicService.analysisPitchByGenre(userId, genre, pitchId);
        } catch (Exception e) {
            throw AnalysisPitchByGenreException.fromException(e);
        }
        return new ResponseEntity<PitchAnalysisResp>(result, HttpStatus.OK);
    }


    @ApiOperation(value = "검사 결과 목록", notes = "사용자가 진행했던 분석결과를 리스트로 제공")
    @GetMapping("/result")
    public ResponseEntity<?> resultList(@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token) {
        Long userId = jwtTokenProvider.getId(token);
        musicService.getResultList(userId);
        return new ResponseEntity<>(musicService.getResultList(userId), HttpStatus.OK);
    }

    @ApiOperation(value = "검사 결과 삭제", notes = "사용자가 선택한 검사 결과를 삭제한다.")
    @ApiImplicitParams({@ApiImplicitParam(name = "type", value = "검사 유형 (timbre/pitch)"),
            @ApiImplicitParam(name = "id", value = "검사 아이디", example = "1")})
    @DeleteMapping("/result/{type}/{id}")
    public ResponseEntity<?> deleteResult(@PathVariable("type") String type, @PathVariable("id") Long id) {

        musicService.deleteResult(type, id);

        return new ResponseEntity<>("검사 결과 삭제", HttpStatus.OK);
    }

    @ApiOperation(value = "검사 결과 조회", notes = "사용자가 선택한 검사 결과의 상세 정보를 조회한다.")
    @ApiImplicitParams({@ApiImplicitParam(name = "type", value = "검사 유형 (timbre/pitch)"),
            @ApiImplicitParam(name = "id", value = "검사 아이디", example = "1")})
    @GetMapping("/result/{type}/{id}")
    public ResponseEntity<?> selectOneResult(@PathVariable("type") String type, @PathVariable("id") Long id) {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token


        if (type.equals("timbre")) {
            return new ResponseEntity<>(musicService.selectOneTimbreAnalysis(id), HttpStatus.OK);
        } else if (type.equals("pitch")) {
            return new ResponseEntity<>(musicService.selectOnePitchAnalysis(id), HttpStatus.OK);
        }

        return new ResponseEntity<>("검사 결과 조회", HttpStatus.OK);
    }

}