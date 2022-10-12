---
sidebar_position: 4
---

# Repeat Mode

All RepeatMode types are made available through the named export `RepeatMode`:

```ts
import { RepeatMode }, TrackPlayer from 'react-native-track-player';

TrackPlayer.setRepeatMode(RepeatMode.Queue)
```

| Name | Description |
|------|-------------|
| `Off` | Normal playback without repetition. `TrackPlayer.previous()` and `TrackPlayer.next()` methods move to the previous and next track respectively, and do nothing when there is no previous or next track to move to. |
| `Track` | When the current track plays until the end, the current track starts playing again from the start. `TrackPlayer.next()` and `TrackPlayer.previous()` methods behave as they do with `RepeatMode.Off`, moving to the previous and next track respectively, and doing nothing when there is no previous or next track to move to. |
| `Queue` | When the last track in the queue plays until the end, the queue starts playing again from the first track. `TrackPlayer.next()` and `TrackPlayer.previous()` methods behave as they do with `RepeatMode.Off`, moving to the previous and next track respectively, but with looping at the ends so that `TrackPlayer.previous()` when playing the first track will move to the last track, and `TrackPlayer.next()` when playing the last track will move to the first track in the queue. |
