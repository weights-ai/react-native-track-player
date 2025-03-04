"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4807],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6183:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={sidebar_position:4},l="Multitrack Progress",p={unversionedId:"guides/multitrack-progress",id:"version-4.1/guides/multitrack-progress",title:"Multitrack Progress",description:"If you're building an app that allows the playback of more than one Track you'll",source:"@site/versioned_docs/version-4.1/guides/multitrack-progress.md",sourceDirName:"guides",slug:"/guides/multitrack-progress",permalink:"/docs/guides/multitrack-progress",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.1/guides/multitrack-progress.md",tags:[],version:"4.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"app",previous:{title:"Sleeptimers",permalink:"/docs/guides/sleeptimers"},next:{title:"Play Buttons",permalink:"/docs/guides/play-button"}},u={},c=[{value:"The Wrong Way",id:"the-wrong-way",level:2},{value:"The Right Way",id:"the-right-way",level:2},{value:"1. Setup Zustand",id:"1-setup-zustand",level:4},{value:"2. Listen To Progress Updates",id:"2-listen-to-progress-updates",level:4},{value:"3. Reactively Update Progress",id:"3-reactively-update-progress",level:4}],d={toc:c};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"multitrack-progress"},"Multitrack Progress"),(0,s.kt)("p",null,"If you're building an app that allows the playback of more than one Track you'll\nprobably also want to keep track of and display the users progress for each of\nthose tracks. ",(0,s.kt)("strong",{parentName:"p"},"RNTP does not handle this for you"),", but offers everything you\nneed in order to build it yourself."),(0,s.kt)("h2",{id:"the-wrong-way"},"The Wrong Way"),(0,s.kt)("p",null,"The most common misconception is that one could simply create a list of tracks\nand then simply call ",(0,s.kt)("inlineCode",{parentName:"p"},"useProgress")," in each of them to get their progress.\nHowever, this doesn't work, as ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"useProgress")," is ",(0,s.kt)("em",{parentName:"strong"},"only")," concerned with the\nprogress of the currently playing track!")," If you attempt to do it this way\nyou'll quickly realize that all of your tracks are showing the exact same\nprogress, which given the understanding of ",(0,s.kt)("inlineCode",{parentName:"p"},"useProgress")," above, should make\nperfect sense."),(0,s.kt)("p",null,"The other problem with this approach is that when a user listens headlessly (\nor when the player is in the background), you won't get any progress updates."),(0,s.kt)("h2",{id:"the-right-way"},"The Right Way"),(0,s.kt)("p",null,"You're responsible for storing your progress on each track outside of RNTP, and\nthen using that progress when displaying things to your users. At a high-level,\nwhat you need to do is store a record somewhere that associates a progress with\na unique track. Let's say we want to store a record that has a ",(0,s.kt)("inlineCode",{parentName:"p"},"track.id")," and a\n",(0,s.kt)("inlineCode",{parentName:"p"},"track.progress"),". Then what we want to do is ",(0,s.kt)("em",{parentName:"p"},"periodically")," update this record\nwhile a given track is playing. Finally, when you want to display or otherwise\nuse your progress you should ",(0,s.kt)("em",{parentName:"p"},"read")," from the stored record (not from RNTP). See\nthe example below where we're going to use\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zustand"},"zustand"),". Zustand will allow us to store\n(and with some additional configuration, persist) our track progress AND it\ngives us a nice way to dynamically update our progress displays in\nrealtime/reactively."),(0,s.kt)("p",null,"Please note, that the below solution assumes that you're adding an ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," property\nto your ",(0,s.kt)("inlineCode",{parentName:"p"},"Track")," object before you add it to RNTP, as RNTP does not add ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),"'s\nto your tracks by default, nor does it require them."),(0,s.kt)("h4",{id:"1-setup-zustand"},"1. Setup Zustand"),(0,s.kt)("p",null,"First let's create a basic zustand store to store our progress in:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// src/store.ts\nimport create from 'zustand';\nimport type { SetState } from 'zustand/vanilla';\n\ntype ProgressStateStore = {\n  map: Record<string, number>;\n  setProgress: (id: string, progress: number) => void;\n};\n\nexport const useProgressStateStore = create<ProgressStateStore>(\n  (set: SetState<ProgressStateStore>) => ({\n    map: {},\n    setProgress: (id: string, progress: number) =>\n      set((state) => {\n        state.map[id] = progress;\n      }),\n  })\n);\n")),(0,s.kt)("p",null,"Let's also set up a little helper hook to make it easier to read progress (we'll\nuse this later on):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// src/hooks/useTrackProgress.ts\nimport { useCallback } from 'react';\nimport { useProgressStateStore } from '../store';\n\nexport const useTrackProgress = (id: string | number): number => {\n  return useProgressStateStore(\n    useCallback(\n      (state) => {\n        return state.map[id.toString()] || 0;\n      },\n      [id]\n    )\n  );\n};\n")),(0,s.kt)("h4",{id:"2-listen-to-progress-updates"},"2. Listen To Progress Updates"),(0,s.kt)("p",null,"Next we need to set up a listener for progress updates in our\n",(0,s.kt)("a",{parentName:"p",href:"/docs/basics/playback-service"},"playback service")," and update our zustand store:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// src/services/PlaybackService.ts\nimport TrackPlayer, { Event } from 'react-native-track-player';\nimport { useProgressStateStore } from '../store';\n\n// create a local reference for the `setProgress` function\nconst setProgress = useProgressStateStore.getState().setProgress;\n\nexport const PlaybackService = async function () {\n  TrackPlayer.addEventListener(\n    Event.PlaybackProgressUpdated,\n    async ({ position, track }) => {\n      // get the track to fetch your unique ID property (if applicable)\n      const track = await TrackPlayer.getTrack(track);\n      // write progress to the zustand store\n      setProgress(track.id, position);\n    }\n  );\n};\n")),(0,s.kt)("p",null,"\u26a0\ufe0f make sure you've configured your ",(0,s.kt)("inlineCode",{parentName:"p"},"progressUpdateEventInterval"),"\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"TrackPlayer.updateOptions")," call."),(0,s.kt)("h4",{id:"3-reactively-update-progress"},"3. Reactively Update Progress"),(0,s.kt)("p",null,"Finally, we just need to read from the store whenever we display our track list\nitem:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// src/components/TrackListItem.tsx\nimport type { Track } from 'react-native-track-player';\nimport { useTrackProgress } from '../hooks/useTrackProgress';\n\nexport interface TrackListItemProps {}\n\nexport const TrackListItem: React.FC<TrackListItemProps> = (track: Track) => {\n  const progress = useTrackProgress(track.id);\n  return <Text>Progress: {progress}</Text>;\n};\n")),(0,s.kt)("p",null,"\ud83c\udf8a voil\xe0"))}g.isMDXComponent=!0}}]);