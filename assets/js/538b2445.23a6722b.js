"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2285],{9771:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"2.1","label":"2.1","banner":"unmaintained","badge":true,"className":"docs-version-2.1","isLast":false,"docsSidebars":{"app":[{"type":"link","label":"Intro","href":"/docs/2.1/intro","docId":"intro"},{"type":"category","label":"The Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/2.1/basics/installation","docId":"basics/installation"},{"type":"link","label":"Getting Started","href":"/docs/2.1/basics/getting-started","docId":"basics/getting-started"},{"type":"link","label":"Playback Service","href":"/docs/2.1/basics/playback-service","docId":"basics/playback-service"},{"type":"link","label":"Background Mode","href":"/docs/2.1/basics/background-mode","docId":"basics/background-mode"},{"type":"link","label":"Platform Support","href":"/docs/2.1/basics/platform-support","docId":"basics/platform-support"},{"type":"link","label":"Build Preferences","href":"/docs/2.1/basics/build-preferences","docId":"basics/build-preferences"}]},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Events","href":"/docs/2.1/api/events","docId":"api/events"},{"type":"category","label":"Functions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Lifecycle","href":"/docs/2.1/api/functions/lifecycle","docId":"api/functions/lifecycle"},{"type":"link","label":"Player","href":"/docs/2.1/api/functions/player","docId":"api/functions/player"},{"type":"link","label":"Queue","href":"/docs/2.1/api/functions/queue","docId":"api/functions/queue"}]},{"type":"link","label":"Hooks","href":"/docs/2.1/api/hooks","docId":"api/hooks"},{"type":"category","label":"Constants","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"State","href":"/docs/2.1/api/constants/state","docId":"api/constants/state"},{"type":"link","label":"Capability","href":"/docs/2.1/api/constants/capability","docId":"api/constants/capability"},{"type":"link","label":"Rating","href":"/docs/2.1/api/constants/rating","docId":"api/constants/rating"},{"type":"link","label":"Repeat Mode","href":"/docs/2.1/api/constants/repeat-mode","docId":"api/constants/repeat-mode"},{"type":"link","label":"Pitch Algorithm (ios-only)","href":"/docs/2.1/api/constants/pitch-algorithm","docId":"api/constants/pitch-algorithm"}]},{"type":"category","label":"Objects","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Track","href":"/docs/2.1/api/objects/track","docId":"api/objects/track"},{"type":"link","label":"Feedback","href":"/docs/2.1/api/objects/feedback","docId":"api/objects/feedback"},{"type":"link","label":"Resource","href":"/docs/2.1/api/objects/resource","docId":"api/objects/resource"}]}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Offline Playback","href":"/docs/2.1/guides/offline-playback","docId":"guides/offline-playback"},{"type":"link","label":"Amazon FireOS Support","href":"/docs/2.1/guides/amazon-fire-support","docId":"guides/amazon-fire-support"}]},{"type":"link","label":"Migrating from v1 to v2","href":"/docs/2.1/v2-migration","docId":"v2-migration"},{"type":"link","label":"Troubleshooting","href":"/docs/2.1/troubleshooting","docId":"troubleshooting"},{"type":"link","label":"Sponsors \u2764\ufe0f","href":"/docs/2.1/sponsors","docId":"sponsors"},{"type":"link","label":"Core Team \u2728","href":"/docs/2.1/core-team","docId":"core-team"}]},"docs":{"api/constants/capability":{"id":"api/constants/capability","title":"Capability","description":"All Capability types are made available through the named export Capability:","sidebar":"app"},"api/constants/pitch-algorithm":{"id":"api/constants/pitch-algorithm","title":"Pitch Algorithm (ios-only)","description":"All PitchAlgorithm types are made available through the named export PitchAlgorithm:","sidebar":"app"},"api/constants/rating":{"id":"api/constants/rating","title":"Rating","description":"All RatingType types are made available through the named export RatingType:","sidebar":"app"},"api/constants/repeat-mode":{"id":"api/constants/repeat-mode","title":"Repeat Mode","description":"All RepeatMode types are made available through the named export RepeatMode:","sidebar":"app"},"api/constants/state":{"id":"api/constants/state","title":"State","description":"All State types are made available through the named export State:","sidebar":"app"},"api/events":{"id":"api/events","title":"Events","description":"All event types are made available through the named export Event:","sidebar":"app"},"api/functions/lifecycle":{"id":"api/functions/lifecycle","title":"Lifecycle","description":"setupPlayer(options: PlayerOptions)","sidebar":"app"},"api/functions/player":{"id":"api/functions/player","title":"Player","description":"updateOptions(options)","sidebar":"app"},"api/functions/queue":{"id":"api/functions/queue","title":"Queue","description":"add(tracks, insertBeforeIndex)","sidebar":"app"},"api/hooks":{"id":"api/hooks","title":"Hooks","description":"React v16.8 introduced hooks. If you are using a version of React Native that is before v0.59.0, your React Native version does not support hooks.","sidebar":"app"},"api/objects/feedback":{"id":"api/objects/feedback","title":"Feedback","description":"Controls the rendering of the control center item.","sidebar":"app"},"api/objects/resource":{"id":"api/objects/resource","title":"Resource","description":"Resource objects are the result of require/import for files.","sidebar":"app"},"api/objects/track":{"id":"api/objects/track","title":"Track","description":"Tracks in the player queue are plain javascript objects as described below.","sidebar":"app"},"basics/background-mode":{"id":"basics/background-mode","title":"Background Mode","description":"React Native Track Player supports playing audio while your app is in the background on all supported platforms.","sidebar":"app"},"basics/build-preferences":{"id":"basics/build-preferences","title":"Build Preferences","description":"You can optionally configure a few options for how the Track Player module is built in your app. Add a JSON file named track-player.json to the root folder of your app (the same folder where index.android.js and node_modules are stored) and set one or more of the following properties:","sidebar":"app"},"basics/getting-started":{"id":"basics/getting-started","title":"Getting Started","description":"Starting off","sidebar":"app"},"basics/installation":{"id":"basics/installation","title":"Installation","description":"Stable","sidebar":"app"},"basics/platform-support":{"id":"basics/platform-support","title":"Platform Support","description":"Audio Sources","sidebar":"app"},"basics/playback-service":{"id":"basics/playback-service","title":"Playback Service","description":"The playback service keeps running even when the app is in the background. It will start when the player is set up and will only stop when the player is destroyed. It is a good idea to put any code in there that needs to be directly tied to the player state. For example, if you want to be able to track what is being played for analytics purposes, the playback service would be the place to do so.","sidebar":"app"},"core-team":{"id":"core-team","title":"Core Team \u2728","description":"David Chavez","sidebar":"app"},"guides/amazon-fire-support":{"id":"guides/amazon-fire-support","title":"Amazon FireOS Support","description":"Support for Android in react-native-track-player is built on top of the ExoPlayer media player library provided by Google. ExoPlayer does not officially support Amazon\'s FireOS fork of Android, because it does not pass Android CTS. ExoPlayer seems to work decently on FireOS 5, but it hardly works at all on FireOS 4.","sidebar":"app"},"guides/offline-playback":{"id":"guides/offline-playback","title":"Offline Playback","description":"There are two general use-cases for offline playback:","sidebar":"app"},"intro":{"id":"intro","title":"Intro","description":"A fully fledged audio module created for music apps. Provides audio playback, external media controls, background mode and more!","sidebar":"app"},"sponsors":{"id":"sponsors","title":"Sponsors \u2764\ufe0f","description":"Thanks to our backers and sponsors for their generous support!","sidebar":"app"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"iOS: (Enable Swift) library not found for -lswiftCoreAudio for architecture x86_64","sidebar":"app"},"v2-migration":{"id":"v2-migration","title":"Migrating from v1 to v2","description":"All queue methods have been updating to work on indexes instead of id\'s. We want this library to support all kinds of apps -- and moving to be index based will allow us to better support applications who have long/endless queues and in the future to allow us to build a performant API around queue management.","sidebar":"app"}}}')}}]);