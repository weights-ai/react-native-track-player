"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6345],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5674:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:8},p="Migrating from v3.2 to v4",s={unversionedId:"v4-migration",id:"version-4.0/v4-migration",title:"Migrating from v3.2 to v4",description:"General Additions",source:"@site/versioned_docs/version-4.0/v4-migration.md",sourceDirName:".",slug:"/v4-migration",permalink:"/docs/4.0/v4-migration",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.0/v4-migration.md",tags:[],version:"4.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"app",previous:{title:"Migrating from v3.1.0 to v3.2.0",permalink:"/docs/4.0/v3.1.0-migration"},next:{title:"Troubleshooting",permalink:"/docs/4.0/troubleshooting"}},d={},u=[{value:"General Additions",id:"general-additions",level:3},{value:"General Changes",id:"general-changes",level:3},{value:"Hook Behavior Updates",id:"hook-behavior-updates",level:3},{value:"Player Method Updates",id:"player-method-updates",level:3},{value:"Player State Updates",id:"player-state-updates",level:3},{value:"General Deprecations",id:"general-deprecations",level:3},{value:"Removals",id:"removals",level:3},{value:"Typescript Imports",id:"typescript-imports",level:3}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-from-v32-to-v4"},"Migrating from v3.2 to v4"),(0,i.kt)("h3",{id:"general-additions"},"General Additions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"New Function:")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/queue#getactivetrackindex"},(0,i.kt)("inlineCode",{parentName:"a"},"getActiveTrackIndex()")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: Gets the index of the current track, or ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," if no track loaded.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"New Function:")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: Returns progress, buffer and duration information.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"New Function:")," ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getplaybackstate"},(0,i.kt)("inlineCode",{parentName:"a"},"getPlaybackState")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: Returns the current playback state.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"New Events: ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/events#metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioChapterMetadataReceived"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioTimedMetadataReceived"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioCommonMetadataReceived")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: More detailed metadata events that are emitted when metadata is received from the native player.")),(0,i.kt)("h3",{id:"general-changes"},"General Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The configuration option ",(0,i.kt)("inlineCode",{parentName:"li"},"alwaysPauseOnInterruption")," has been moved to the ",(0,i.kt)("inlineCode",{parentName:"li"},"android")," section of options.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"await TrackPlayer.updateOptions({\n+      android: {\n+        alwaysPauseOnInterruption: true,\n+      },\n-      alwaysPauseOnInterruption: true,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On iOS, the pitch algorithm now defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"timeDomain")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"lowQualityZeroLatency"),". The latter has been deprecated by Apple and has known issues on iOS 17.")),(0,i.kt)("h3",{id:"hook-behavior-updates"},"Hook Behavior Updates"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/api/hooks##useplaybackstate"},(0,i.kt)("inlineCode",{parentName:"a"},"usePlaybackState()"))," hook now initially returns ",(0,i.kt)("inlineCode",{parentName:"p"},"{ state: undefined }")," before it has finished retrieving the current state. It previously returned ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.None")),", indicating no track loaded."),(0,i.kt)("h3",{id:"player-method-updates"},"Player Method Updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/queue#removeracks"},(0,i.kt)("inlineCode",{parentName:"a"},"remove()"))," function now supports removing the current track. If the current track is removed, the next track in the queue will be activated. If the current track was the last track in the queue, the first track will be activated.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.0/api/functions/queue#gettrack"},(0,i.kt)("inlineCode",{parentName:"a"},"getTrack()"))," function now returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("h3",{id:"player-state-updates"},"Player State Updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New player states have been introduced and some updated")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Error")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New.")," Emitted when an error state is encountered.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Ended")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New.")," State indicates playback stopped due to the end of the queue being reached.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Loading")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New.")," State indicating the initial loading phase of a track.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Buffering")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Updated.")," Now emitted no matter whether playback is paused or not.")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Connecting")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Deprecated.")," Please use ",(0,i.kt)("inlineCode",{parentName:"li"},"State.Loading")," instead.")),(0,i.kt)("h3",{id:"general-deprecations"},"General Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The following functions and events have been deprecated:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getState()")," - Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getplaybackstate"},(0,i.kt)("inlineCode",{parentName:"a"},"getPlaybackState()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getDuration()")," - Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"duration")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getPosition()")," - Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getBufferedPosition()")," - Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"buffered")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getCurrentTrack()")," - Please use ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/queue#getactivetrackindex"},(0,i.kt)("inlineCode",{parentName:"a"},"getActiveTrackIndex()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.PlaybackTrackChanged")," - Please use ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/events#playbackactivetrackchanged"},(0,i.kt)("inlineCode",{parentName:"a"},"Event.PlaybackActiveTrackChanged")),". Also note that in 4.0 ",(0,i.kt)("inlineCode",{parentName:"li"},"Event.PlaybackTrackChanged")," is no longer emitted when a track repeats."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.PlaybackMetadataReceived")," - Please use ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/events#metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioChapterMetadataReceived"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioTimedMetadataReceived"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"Event.AudioCommonMetadataReceived")),".")),(0,i.kt)("h3",{id:"removals"},"Removals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The clearMetadata() function has been removed. Instead, use ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.0/api/functions/player#reset"},(0,i.kt)("inlineCode",{parentName:"a"},"reset()")),", which stops playback, clears the queue, and clears the notification.")),(0,i.kt)("h3",{id:"typescript-imports"},"Typescript Imports"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you were using deep imports from RNTP, the ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," has been completely\nreorganized, and so you may need to adjust your imports accordingly. If you've\nbeen importing everything directly (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"import ... from 'react-native-track-player';"),")\nthen you don't need to do anything."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PlaybackStateEvent")," interface has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"PlaybackState"))))}m.isMDXComponent=!0}}]);