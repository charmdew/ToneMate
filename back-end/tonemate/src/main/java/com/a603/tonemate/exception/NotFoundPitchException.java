package com.a603.tonemate.exception;

public class NotFoundPitchException extends RuntimeException {
    public NotFoundPitchException(boolean isHigh) {
        super(isHigh ? "높은" : "낮은" + " 음역대를 측정하지 못함");
    }
}
