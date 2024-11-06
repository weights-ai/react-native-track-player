import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  type PlayerOptions,
  RepeatMode,
} from 'react-native-track-player';

export const DefaultRepeatMode = RepeatMode.Queue;
export const DefaultAudioServiceBehaviour =
  AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification;

const setupPlayer = async (
  options: PlayerOptions,
  background = false
) => {
  const setup = async () => {
    try {
      await TrackPlayer.setupPlayer(options, background);
    } catch (error) {
      return (error as Error & { code?: string }).code;
    }
  };
  while ((await setup()) === 'android_cannot_setup_player_in_background') {
    // A timeout will mostly only execute when the app is in the foreground,
    // and even if we were in the background still, it will reject the promise
    // and we'll try again:
    await new Promise<void>((resolve) => setTimeout(resolve, 1));
  }
};
let arr = false;
export const SetupService = async (background = false) => {
  if (arr) return;
  arr = true;
  await setupPlayer(
    {
      autoHandleInterruptions: true,
    },
    background
  );
  await TrackPlayer.updateOptions({
    android: {
      appKilledPlaybackBehavior: DefaultAudioServiceBehaviour,
      stopForegroundGracePeriod: 999999999,
    },
    // This flag is now deprecated. Please use the above to define playback mode.
    // stoppingAppPausesPlayback: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.SeekTo,
      Capability.JumpBackward,
    ],
    compactCapabilities: [
      Capability.Play,
      Capability.Pause,
      // Capability.SkipToNext,
    ],
    notificationCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SeekTo,
      Capability.JumpBackward,
    ],
    progressUpdateEventInterval: 2,
  });
  await TrackPlayer.setRepeatMode(DefaultRepeatMode);
};
