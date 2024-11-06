package com.lovegaoshi.kotlinaudio.player.components

import androidx.annotation.OptIn
import androidx.media3.common.util.UnstableApi
import androidx.media3.exoplayer.DefaultLoadControl
import androidx.media3.exoplayer.DefaultLoadControl.Builder
import androidx.media3.exoplayer.DefaultLoadControl.DEFAULT_BACK_BUFFER_DURATION_MS
import androidx.media3.exoplayer.DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS
import androidx.media3.exoplayer.DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS
import androidx.media3.exoplayer.DefaultLoadControl.DEFAULT_MAX_BUFFER_MS
import androidx.media3.exoplayer.DefaultLoadControl.DEFAULT_MIN_BUFFER_MS
import com.lovegaoshi.kotlinaudio.models.BufferOptions


@OptIn(UnstableApi::class) fun setupBuffer(bufferConfig: BufferOptions): DefaultLoadControl {
    bufferConfig.apply {
        val multiplier =
            DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS / DEFAULT_BUFFER_FOR_PLAYBACK_MS
        val minBuffer =
            if (minBuffer != null && minBuffer != 0) minBuffer else DEFAULT_MIN_BUFFER_MS
        val maxBuffer =
            if (maxBuffer != null && maxBuffer != 0) maxBuffer else DEFAULT_MAX_BUFFER_MS
        val playBuffer =
            if (playBuffer != null && playBuffer != 0) playBuffer else DEFAULT_BUFFER_FOR_PLAYBACK_MS
        val backBuffer =
            if (backBuffer != null && backBuffer != 0) backBuffer else DEFAULT_BACK_BUFFER_DURATION_MS

        return Builder()
            .setBufferDurationsMs(minBuffer, maxBuffer, playBuffer, playBuffer * multiplier)
            .setBackBuffer(backBuffer, false)
            .build()
    }
}

