package com.a603.tonemate.dto.request;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ApiModel(value = "노래 검색 시 사용할 param", description = "가수, 제목, 번호로 검색이 가능")
public class SearchSongReq {
    private String singer;
    private String title;
    private Integer tjNum;
}
