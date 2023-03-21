package com.a603.tonemate.security.handler;

import com.a603.tonemate.security.auth.JwtProperties;
import com.a603.tonemate.security.auth.JwtTokenProvider;
import com.a603.tonemate.security.auth.TokenInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.concurrent.TimeUnit;

@Component
@RequiredArgsConstructor
public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;
    private final RedisTemplate<String, Object> redisTemplate;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        System.out.println("AuthenticationSuccessHandler의 토큰 만들기~");
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication); // tokenInfo 만들어서

        redisTemplate.opsForValue()
                .set(tokenInfo.getUserId().toString(), tokenInfo.getRefreshToken(), JwtProperties.REFRESH_TOKEN_TIME, TimeUnit.MILLISECONDS);
//        response.addHeader(, tokenInfo.generateAccessToken().toString());
//        response.addHeader("Set-Cookie", tokenInfo.generateRefreshToken().toString());
        System.out.println("Cookie: " + tokenInfo.generateRefreshToken());
        response.addHeader(HttpHeaders.SET_COOKIE, tokenInfo.generateRefreshToken().toString());
        response.addHeader("resp", tokenInfo.generateRefreshToken().toString());
    }
}
