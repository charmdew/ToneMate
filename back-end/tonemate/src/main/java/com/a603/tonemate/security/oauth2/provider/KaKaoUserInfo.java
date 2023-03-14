package com.a603.tonemate.security.oauth2.provider;

import java.util.Map;

public class KaKaoUserInfo implements OAuth2UserInfo {

    private final Map<String, Object> attributes;
    private final Map<String, String> properties;
    private final Map<String, String> account;

    public KaKaoUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
        properties = (Map<String, String>) attributes.get("properties");
        account = (Map<String, String>) attributes.get("kakao_account");
    }

    @Override
    public String getProviderId() {
        return attributes.get("id").toString();
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getProfile() {
        System.out.println("카카오 프로필: " + properties.get("profile_image"));
        return properties.get("profile_image");
    }
}
