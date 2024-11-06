package com.example.kotlinaudio

import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.content.res.Configuration
import android.os.Bundle
import android.os.IBinder
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.media3.common.util.UnstableApi
import androidx.media3.session.MediaBrowser
import androidx.media3.session.SessionCommand
import androidx.media3.session.SessionToken
import com.example.kotlinaudio.ui.component.ActionBottomSheet
import com.example.kotlinaudio.ui.component.PlayerControls
import com.example.kotlinaudio.ui.component.TrackDisplay
import com.example.kotlinaudio.ui.theme.KotlinAudioTheme
import com.google.common.util.concurrent.MoreExecutors
import com.doublesymmetry.kotlinaudio.player.ForwardingPlayer
import com.doublesymmetry.kotlinaudio.service.CROSSFADE_NEXT
import com.doublesymmetry.kotlinaudio.service.CROSSFADE_NEXT_PREPARE
import com.doublesymmetry.kotlinaudio.service.MusicService
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.guava.await
import kotlinx.coroutines.launch
import kotlin.time.Duration.Companion.seconds

@UnstableApi class MainActivity : ComponentActivity() {
    private lateinit var browser: MediaBrowser
    private lateinit var musicService: MusicService
    private var mBound: Boolean = false
    private lateinit var player: ForwardingPlayer
    @androidx.annotation.OptIn(UnstableApi::class) @OptIn(ExperimentalMaterial3Api::class)
    override fun onStart() {
        super.onStart()
        val intent = Intent(this, MusicService::class.java)
        bindService(intent, connection, Context.BIND_AUTO_CREATE)
        val sessionToken =
            SessionToken(this, ComponentName(this, MusicService::class.java))
        val mediaItems = Playlist().playlist
        val browserFuture = MediaBrowser.Builder(this, sessionToken).buildAsync()
        browserFuture.addListener({
            // MediaController is available here with controllerFuture.get()
            browserFuture.get().setMediaItems(mediaItems)
            browserFuture.get().prepare()
            browserFuture.get().play()
        }, MoreExecutors.directExecutor())

        val scope = CoroutineScope(Dispatchers.Main)
        scope.launch {
            browser = browserFuture.await()
            player = musicService.player.player

            setContent {
                var title by remember { mutableStateOf("") }
                var artist by remember { mutableStateOf("") }
                var artwork by remember { mutableStateOf("") }
                var position by remember { mutableStateOf(0L) }
                var duration by remember { mutableStateOf(0L) }
                var isLive by remember { mutableStateOf(false) }

                var showSheet by remember { mutableStateOf(false) }

                if (showSheet) {
                    ActionBottomSheet(
                        onDismiss = { showSheet = false },
                        onRandomMetadata = {
                        }
                    )
                }

                KotlinAudioTheme {
                    MainScreen(
                        title = title,
                        artist = artist,
                        artwork = artwork,
                        position = position,
                        duration = duration,
                        isLive = isLive,
                        onPrevious = { browser.seekToPreviousMediaItem() },
                        onNext = { browser.seekToNextMediaItem() },
                        isPaused = browser.isPlaying,
                        onTopBarAction = { showSheet = true },
                        onPlayPause = {
                                      if (browser.isPlaying) {
                                          browser.pause()
                                      } else {
                                          browser.play()
                                      }
                        },
                        onSeek = {  browser.seekTo(it) },
                        onCustomAction1 = { },
                        onCustomAction2 = { browser.sendCustomCommand(SessionCommand(
                            CROSSFADE_NEXT_PREPARE, Bundle.EMPTY), Bundle.EMPTY)},
                        onCustomAction3 = { browser.sendCustomCommand(SessionCommand(
                            CROSSFADE_NEXT, Bundle.EMPTY), Bundle.EMPTY)},
                    )
                }
                player.addListener(object : androidx.media3.common.Player.Listener {
                    override fun onEvents(player: androidx.media3.common.Player, events: androidx.media3.common.Player.Events){
                        if (events.containsAny(
                                androidx.media3.common.Player.EVENT_MEDIA_METADATA_CHANGED)) {
                            title = (player.currentMediaItem?.mediaMetadata?.title ?: "").toString()
                            artist = (player.currentMediaItem?.mediaMetadata?.artist ?: "").toString()
                            artwork = (player.currentMediaItem?.mediaMetadata?.artworkUri ?: "").toString()
                            duration = player.duration
                    }
                }})

                LaunchedEffect(Unit) {
                    while(true) {
                        position = player.currentPosition
                        duration = player.duration
                        isLive = player.isCurrentMediaItemLive

                        delay(1.seconds / 30)
                    }
                }
            }

        }

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    override fun onStop() {
        super.onStop()
        browser.release()
    }

    private val connection = object : ServiceConnection {

        override fun onServiceConnected(className: ComponentName, service: IBinder) {
            // when the service is connected, get its instance
            val binder = service as MusicService.MusicBinder
            musicService = binder.service
            mBound = true
        }

        override fun onServiceDisconnected(arg0: ComponentName) {
            // service disconnected
            mBound = false
        }
    }
}


@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MainScreen(
    title: String,
    artist: String,
    artwork: String,
    position: Long,
    duration: Long,
    isLive: Boolean,
    onPrevious: () -> Unit = {},
    onNext: () -> Unit = {},
    isPaused: Boolean,
    onTopBarAction: () -> Unit = {},
    onPlayPause: () -> Unit = {},
    onCustomAction1: () -> Unit = {},
    onCustomAction2: () -> Unit = {},
    onCustomAction3: () -> Unit = {},
    onSeek: (Long) -> Unit = {},
) {
    Surface(
        modifier = Modifier.fillMaxSize(),
        color = MaterialTheme.colorScheme.background
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            TopAppBar(
                title = {
                    Text(
                        text = "Kotlin Audio Example",
                        color = MaterialTheme.colorScheme.onPrimary
                    )
                },
                actions = {
                    IconButton(onClick = onTopBarAction) {
                        Icon(
                            Icons.Default.MoreVert,
                            contentDescription = "Settings",
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = MaterialTheme.colorScheme.primary)
            )
            TrackDisplay(
                title = title,
                artist = artist,
                artwork = artwork,
                position = position,
                duration = duration,
                isLive = isLive,
                onSeek = onSeek,
                modifier = Modifier.padding(top = 46.dp)
            )
            Spacer(modifier = Modifier.weight(1f))
            PlayerControls(
                onPrevious = onPrevious,
                onNext = onNext,
                isPaused = isPaused,
                onPlayPause = onPlayPause,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 60.dp)
            )
            PlayerControls(
                onPrevious = onCustomAction1,
                onNext = onCustomAction3,
                isPaused = isPaused,
                onPlayPause = onCustomAction2,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 60.dp)
            )
        }
    }
}
@Preview(showBackground = true, uiMode = Configuration.UI_MODE_NIGHT_YES)
@Composable
fun ContentPreview() {
    KotlinAudioTheme {
        MainScreen(
            title = "Title",
            artist = "Artist",
            artwork = "",
            position = 1000,
            duration = 6000,
            isLive = false,
            isPaused = true
        )
    }
}
