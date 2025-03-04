"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7502],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(a),s=r,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1969:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:1},o="Events",d={unversionedId:"api/events",id:"version-3.2/api/events",title:"Events",description:"All event types are made available through the named export Event:",source:"@site/versioned_docs/version-3.2/api/events.md",sourceDirName:"api",slug:"/api/events",permalink:"/docs/3.2/api/events",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.2/api/events.md",tags:[],version:"3.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"app",previous:{title:"Platform Support",permalink:"/docs/3.2/basics/platform-support"},next:{title:"Lifecycle",permalink:"/docs/3.2/api/functions/lifecycle"}},m={},k=[{value:"Player",id:"player",level:2},{value:"<code>PlaybackState</code>",id:"playbackstate",level:3},{value:"<code>PlaybackTrackChanged</code>",id:"playbacktrackchanged",level:3},{value:"<code>PlaybackQueueEnded</code>",id:"playbackqueueended",level:3},{value:"<code>PlaybackMetadataReceived</code>",id:"playbackmetadatareceived",level:3},{value:"<code>PlaybackProgressUpdated</code>",id:"playbackprogressupdated",level:3},{value:"<code>PlaybackError</code>",id:"playbackerror",level:3},{value:"Media Controls",id:"media-controls",level:2},{value:"<code>RemotePlay</code>",id:"remoteplay",level:3},{value:"<code>RemotePlayId</code>",id:"remoteplayid",level:3},{value:"<code>RemotePlaySearch</code>",id:"remoteplaysearch",level:3},{value:"<code>RemotePause</code>",id:"remotepause",level:3},{value:"<code>RemoteStop</code>",id:"remotestop",level:3},{value:"<code>RemoteSkip</code>",id:"remoteskip",level:3},{value:"<code>RemoteNext</code>",id:"remotenext",level:3},{value:"<code>RemotePrevious</code>",id:"remoteprevious",level:3},{value:"<code>RemoteSeek</code>",id:"remoteseek",level:3},{value:"<code>RemoteSetRating</code>",id:"remotesetrating",level:3},{value:"<code>RemoteJumpForward</code>",id:"remotejumpforward",level:3},{value:"<code>RemoteJumpBackward</code>",id:"remotejumpbackward",level:3},{value:"<code>RemoteLike</code> (iOS only)",id:"remotelike-ios-only",level:3},{value:"<code>RemoteDislike</code> (iOS only)",id:"remotedislike-ios-only",level:3},{value:"<code>RemoteBookmark</code> (iOS only)",id:"remotebookmark-ios-only",level:3},{value:"<code>RemoteDuck</code>",id:"remoteduck",level:3}],u={toc:k};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"All event types are made available through the named export ",(0,l.kt)("inlineCode",{parentName:"p"},"Event"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Event } from 'react-native-track-player';\n")),(0,l.kt)("h2",{id:"player"},"Player"),(0,l.kt)("h3",{id:"playbackstate"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackState")),(0,l.kt)("p",null,"Fired when the state of the player changes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/3.2/api/constants/state"},"State")),(0,l.kt)("td",{parentName:"tr",align:null},"The new state")))),(0,l.kt)("h3",{id:"playbacktrackchanged"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackTrackChanged")),(0,l.kt)("p",null,"Fired when a track is changed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"track"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The previous track index. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The previous track position in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nextTrack"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The next track index. Might be null")))),(0,l.kt)("h3",{id:"playbackqueueended"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackQueueEnded")),(0,l.kt)("p",null,"Fired when the queue reaches the end."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"track"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The previous track index. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The previous track position in seconds")))),(0,l.kt)("h3",{id:"playbackmetadatareceived"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackMetadataReceived")),(0,l.kt)("p",null,"Fired when the current track receives metadata encoded in. (e.g. ID3 tags, Icy Metadata, Vorbis Comments or QuickTime metadata)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The metadata source (",(0,l.kt)("inlineCode",{parentName:"td"},"id3"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"icy"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"icy-headers"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"vorbis-comment"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"quicktime"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track title. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track url. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"artist"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track artist. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"album"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track album. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track date. Might be null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"genre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track genre. Might be null")))),(0,l.kt)("h3",{id:"playbackprogressupdated"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackProgressUpdated")),(0,l.kt)("p",null,"\u26a0\ufe0f Note: This event is only emitted if you specify a non-zero ",(0,l.kt)("inlineCode",{parentName:"p"},"progressUpdateEventInterval")," value in your player options."),(0,l.kt)("p",null,"Fired at the ",(0,l.kt)("inlineCode",{parentName:"p"},"progressUpdateEventInterval")," if the player is playing ",(0,l.kt)("em",{parentName:"p"},"and")," if a ",(0,l.kt)("inlineCode",{parentName:"p"},"progressUpdateEventInterval")," has been specified."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/3.2/api/functions/player#getposition"},(0,l.kt)("inlineCode",{parentName:"a"},"getPosition")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/3.2/api/functions/player#getduration"},(0,l.kt)("inlineCode",{parentName:"a"},"getDuration")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/3.2/api/functions/player#getbufferedpostion"},(0,l.kt)("inlineCode",{parentName:"a"},"getBufferedPosition")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"track"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The current index in the queue of the track.")))),(0,l.kt)("h3",{id:"playbackerror"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlaybackError")),(0,l.kt)("p",null,"Fired when an error occurs."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The error code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The error message")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"media-controls"},"Media Controls"),(0,l.kt)("h3",{id:"remoteplay"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemotePlay")),(0,l.kt)("p",null,"Fired when the user presses the play button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.Play"))," is allowed."),(0,l.kt)("h3",{id:"remoteplayid"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemotePlayId")),(0,l.kt)("p",null,"Fired when the user selects a track from an external device. Required for Android Auto support. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.PlayFromId"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track id")))),(0,l.kt)("h3",{id:"remoteplaysearch"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemotePlaySearch")),(0,l.kt)("p",null,"Fired when the user searches for a track (usually voice search). Required for Android Auto support. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.PlayFromSearch"))," is allowed."),(0,l.kt)("p",null,"Every parameter except ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," is optional and may not be provided.\nIn the case where ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," is empty, feel free to select any track to play."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The search query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The focus of the search. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"artist"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"album"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"playlist")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"genre"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"artist"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track artist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"album"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track album")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"genre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track genre")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"playlist"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The track playlist")))),(0,l.kt)("h3",{id:"remotepause"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemotePause")),(0,l.kt)("p",null,"Fired when the user presses the pause button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.Pause"))," is allowed or if there's a change in outputs (e.g.: headphone disconnected)."),(0,l.kt)("h3",{id:"remotestop"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteStop")),(0,l.kt)("p",null,"Fired when the user presses the stop button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.Stop"))," is allowed."),(0,l.kt)("h3",{id:"remoteskip"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteSkip")),(0,l.kt)("p",null,"Fired when the user skips to a track in the queue. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.Skip"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The track index")))),(0,l.kt)("h3",{id:"remotenext"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteNext")),(0,l.kt)("p",null,"Fired when the user presses the next track button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.SkipToNext"))," is allowed."),(0,l.kt)("h3",{id:"remoteprevious"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemotePrevious")),(0,l.kt)("p",null,"Fired when the user presses the previous track button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.SkipToPrevious"))," is allowed."),(0,l.kt)("h3",{id:"remoteseek"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteSeek")),(0,l.kt)("p",null,"Fired when the user changes the position of the timeline. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.SeekTo"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The position to seek to in seconds")))),(0,l.kt)("h3",{id:"remotesetrating"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteSetRating")),(0,l.kt)("p",null,"Fired when the user changes the rating for the track. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.SetRating"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rating"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on the ",(0,l.kt)("a",{parentName:"td",href:"/docs/3.2/api/constants/rating"},"Rating Type")),(0,l.kt)("td",{parentName:"tr",align:null},"The rating that was set")))),(0,l.kt)("h3",{id:"remotejumpforward"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteJumpForward")),(0,l.kt)("p",null,"Fired when the user presses the jump forward button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.JumpForward"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of seconds to jump forward. It's usually the ",(0,l.kt)("inlineCode",{parentName:"td"},"forwardJumpInterval")," set in the options.")))),(0,l.kt)("h3",{id:"remotejumpbackward"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteJumpBackward")),(0,l.kt)("p",null,"Fired when the user presses the jump backward button. Only fired if the ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/api/constants/capability"},(0,l.kt)("inlineCode",{parentName:"a"},"Capability.JumpBackward"))," is allowed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of seconds to jump backward. It's usually the ",(0,l.kt)("inlineCode",{parentName:"td"},"backwardJumpInterval")," set in the options.")))),(0,l.kt)("h3",{id:"remotelike-ios-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteLike")," (iOS only)"),(0,l.kt)("p",null,"Fired when the user presses the like button in the now playing center. Only fired if the ",(0,l.kt)("inlineCode",{parentName:"p"},"likeOptions")," is set in ",(0,l.kt)("inlineCode",{parentName:"p"},"updateOptions"),"."),(0,l.kt)("h3",{id:"remotedislike-ios-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteDislike")," (iOS only)"),(0,l.kt)("p",null,"Fired when the user presses the dislike button in the now playing center. Only fired if the ",(0,l.kt)("inlineCode",{parentName:"p"},"dislikeOptions")," is set in ",(0,l.kt)("inlineCode",{parentName:"p"},"updateOptions"),"."),(0,l.kt)("h3",{id:"remotebookmark-ios-only"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteBookmark")," (iOS only)"),(0,l.kt)("p",null,"Fired when the user presses the bookmark button in the now playing center. Only fired if the ",(0,l.kt)("inlineCode",{parentName:"p"},"bookmarkOptions")," is set in ",(0,l.kt)("inlineCode",{parentName:"p"},"updateOptions"),"."),(0,l.kt)("h3",{id:"remoteduck"},(0,l.kt)("inlineCode",{parentName:"h3"},"RemoteDuck")),(0,l.kt)("p",null,"Subscribing to this event to handle interruptions ensures that your app\u2019s audio continues behaving gracefully when a phone call arrives, a clock or calendar alarm sounds, or another app plays audio."),(0,l.kt)("p",null,"On Android, this event is fired when the device needs the player to pause or stop for an interruption and again when the interruption has passed and playback may resume. On iOS this event is fired after playback was already interrupted (meaning pausing playback is unnecessary) and again when playback may resume or to notify that the interruption was permanent."),(0,l.kt)("p",null,"On Android, the volume may also be lowered on an transient interruption without triggering this event. If you want to receive those interruptions, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"alwaysPauseOnInterruption")," option to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the event is triggered with ",(0,l.kt)("inlineCode",{parentName:"li"},"paused")," set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", on Android the player should pause playback. When ",(0,l.kt)("inlineCode",{parentName:"li"},"permanent")," is also set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", on Android the player should stop playback."),(0,l.kt)("li",{parentName:"ul"},"When the event is triggered and ",(0,l.kt)("inlineCode",{parentName:"li"},"paused")," is not set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", the player may resume playback.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paused"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"On Android when ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the player should pause playback, when ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," the player may resume playback. On iOS when ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the playback was paused and when ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," the player may resume playback.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permanent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the interruption is permanent. On Android the player should stop playback.")))),(0,l.kt)("p",null,"Implementation examples can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/doublesymmetry/react-native-track-player/blob/main/example/src/services/PlaybackService.ts"},"example project"),"."))}s.isMDXComponent=!0}}]);