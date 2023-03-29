package com.a603.tonemate.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PitchResp {
    private String lowPitch;
    private String highPitch;
}
