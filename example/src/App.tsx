import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TrackPlayer, {
  AndroidAutoContentStyle,
  useActiveTrack,
} from 'react-native-track-player';

import { PlayerControls, Progress, Spacer, TrackInfo } from './components';
import { SponsorCard } from './components/SponsorCard';
import { QueueInitialTracksService, SetupService } from './services';
import DemoAndroidAutoHierarchy from './services/AndroidAutoHierarchy';
const useHook = (interval = 1000) => {
  const [myNum, setMyNum] = React.useState(0);
  const update = () => setMyNum((v) => v + 1);
  React.useEffect(() => {
    let mounted = true;
    const awaitUpdate = async () => {
      if (!mounted) {
        return;
      }
      console.log('hook update', myNum);
      update();
      await new Promise<void>((resolve) => setTimeout(resolve, interval));
      if (!mounted) {
        return;
      }
      awaitUpdate();
    };
    awaitUpdate();
    return () => {
      mounted = false;
    };
  }, [interval]);
  return myNum;
};
export default function App() {
  return <Inner />;
}

const Inner: React.FC = () => {
  const track = useActiveTrack();
  const isPlayerReady = useSetupPlayer();
  const num = useHook();
  console.log({ num })
  useEffect(() => {
    function deepLinkHandler(data: { url: string }) {
      console.log('deepLinkHandler', data.url);
    }

    // This event will be fired when the app is already open and the notification is clicked
    const subscription = Linking.addEventListener('url', deepLinkHandler);

    // When you launch the closed app from the notification or any other link
    Linking.getInitialURL().then((url) => console.log('getInitialURL', url));

    return () => {
      subscription.remove();
    };
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      <Text style={{color: 'white'}}>{num}</Text>
      <View style={styles.contentContainer}>
        <TrackInfo track={track} />
        <Progress live={track?.isLiveStream} />
        <Spacer />
        <PlayerControls />
        <Spacer mode={'expand'} />
        <SponsorCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sheetBackgroundContainer: {
    backgroundColor: '#181818',
  },
  sheetHandle: {
    backgroundColor: 'white',
  },
});

function useSetupPlayer() {
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      await SetupService();
      TrackPlayer.setBrowseTree(DemoAndroidAutoHierarchy);
      TrackPlayer.setBrowseTreeStyle(
        AndroidAutoContentStyle.CategoryList,
        AndroidAutoContentStyle.Grid
      );
      if (unmounted) return;
      setPlayerReady(true);
      const queue = await TrackPlayer.getQueue();
      if (unmounted) return;
      if (queue.length <= 0) {
        await QueueInitialTracksService();
      }
    })();
    return () => {
      unmounted = true;
    };
  }, []);
  return playerReady;
}
