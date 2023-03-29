package com.a603.tonemate.api.controller;


import com.a603.tonemate.api.service.MusicService;
import com.a603.tonemate.api.service.UserService;
import com.a603.tonemate.dto.response.PitchResp;
import com.a603.tonemate.exception.NoFileException;
import com.a603.tonemate.exception.NotFoundPitchException;
import com.a603.tonemate.exception.UnsupportedPitchFileException;
import com.a603.tonemate.security.auth.JwtProperties;
import com.a603.tonemate.security.auth.JwtTokenProvider;
import io.swagger.annotations.Api;
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
    private final UserService userService;
    private final MusicService musicService;

    @GetMapping("")
    public ResponseEntity<String> checkAlive() {
        return new ResponseEntity<>("Alive", HttpStatus.OK);
    }


    @ApiOperation(value = "음색 분석", notes = "음색 검사를 위한 녹음 wav파일을 분석 및 저장")
    @GetMapping("/timbre")
    public ResponseEntity<?> analysisTimbre() {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token
        /*
         * 1. wav파일을 flask에 전달한다. -> 가수 : [가수1,가수2,가수3,가수4,가수5] 유사도 : [유사도 1,유사도 2,유사도 3,유사도 4,유사도 5] 특성 : [..MFCC,STFT,ZCR등등.....]
         * 2. 우리가 받은 유사도는 그냥 가수들 중에서 어떤 가수인지에 대한 확률일 뿐이다. -> 가장 유사도가 높은 가수와 내 목소리의 유사도를 보정한다.
         * 3. 같은 방법으로 다른 가수들과의 유사도를 보정한다.
         * 4. 사용자의 특성을 이용해서 1위 가수의 노래들의 특성들과 비교해서 오차율이 가장 낮은 순서대로 10개의 노래를 나열한다.
         * 5. {가수배열, 유사도배열, 추천노래 10가지를 return한다.}
         * */


        return new ResponseEntity<>("음색 분석", HttpStatus.OK);
    }


    @ApiOperation(value = "음역대 분석", notes = "음색 검사를 위한 녹음 wav파일을 분석 및 저장")
    @PostMapping("/octave")
    public ResponseEntity<?> analysisPitch(@RequestPart(value = "lowOctave") MultipartFile lowOctave, @RequestPart(value = "highOctave") MultipartFile highOctave, @CookieValue(value = JwtProperties.ACCESS_TOKEN) String token) {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token
        /*
         * 1. wav파일을 flask에 전달한다. -> 음역대를 계산한다. -> [최저음, 최고음]
         * 2. 잘부를 수 있는 노래, 힘들게 부를 수 있는 노래, 부를 수 없는 노래 3등분을 해서 그룹3개를 생성한다. (기준 설정해야한다.)
         * 3. 장르필터를 거친 다음 각 그룹마다 상위 10개씩 추출한다. (그룹화 전에 장르 필터하면 안된다.)
         * 4. [최저음, 최고음], [잘부를 수 있는노래 10개], [힘들게 부를 수 있는 노래]
         * */
        Long userId = jwtTokenProvider.getId(token);
        PitchResp pitchResp;
        try {
            pitchResp = musicService.findPitch(lowOctave, highOctave, userId);
        } catch (NoFileException | NotFoundPitchException | UnsupportedPitchFileException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(pitchResp, HttpStatus.OK);
    }

    @ApiOperation(value = "검사 결과 목록", notes = "사용자가 진행했던 분석결과를 리스트로 제공")
    @GetMapping("/result")
    public ResponseEntity<?> resultList() {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token
        /*
         * 음역대 검사, 음색검사 테이블에서 사용자에 해당하는 데이터만 추출하고
         * */
        return new ResponseEntity<>("검사 결과 목록", HttpStatus.OK);
    }


    @ApiOperation(value = "검사 결과 삭제", notes = "사용자가 선택한 검사 결과를 삭제한다.")
    @GetMapping("/result/{type}/{id}")
    public ResponseEntity<?> deleteResult() {//@CookieValue(value = JwtProperties.ACCESS_TOKEN) String token
        /*
         * type에 따라서 음역대인지 음색인지 구분한다. id는 특정 테이블에 속한 결과 데이터의 id를 지정하고 해당 데이터를 삭제한다.
         * */
        return new ResponseEntity<>("검사 결과 삭제", HttpStatus.OK);
    }

}