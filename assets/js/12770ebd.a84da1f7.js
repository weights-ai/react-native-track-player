"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9629],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Offline Playback",s={unversionedId:"guides/offline-playback",id:"version-4.0/guides/offline-playback",title:"Offline Playback",description:"There are two general use-cases for offline playback:",source:"@site/versioned_docs/version-4.0/guides/offline-playback.md",sourceDirName:"guides",slug:"/guides/offline-playback",permalink:"/docs/4.0/guides/offline-playback",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.0/guides/offline-playback.md",tags:[],version:"4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"app",previous:{title:"UpdateOptions",permalink:"/docs/4.0/api/objects/update-options"},next:{title:"Saving Progress",permalink:"/docs/4.0/guides/saving-progress"}},p={},u=[{value:"Offline Only",id:"offline-only",level:2},{value:"Hybrid Offline/Network",id:"hybrid-offlinenetwork",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"offline-playback"},"Offline Playback"),(0,a.kt)("p",null,"There are two general use-cases for offline playback:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'An "Offline Only" case where all the audio is bundled with your App itself.'),(0,a.kt)("li",{parentName:"ol"},"A \"Hybrid Offline/Network\" case where some of the time you're playing from a\nnetwork and sometime you're playing offline.")),(0,a.kt)("p",null,"Both of these can be achieved by with this project. The only practical\ndifference between the two is in the 2nd you'll need another package to\ndownload your audio while your App is running instead of loading into the App's\nsource at build time."),(0,a.kt)("p",null,"After that, you simply send a ",(0,a.kt)("inlineCode",{parentName:"p"},"Track")," object to the player with a ",(0,a.kt)("strong",{parentName:"p"},"local file\npath")," to your audio."),(0,a.kt)("h2",{id:"offline-only"},"Offline Only"),(0,a.kt)("p",null,"This case is simple, just stick your audio files in your repository with your\nsource code and use the file paths to them when adding Tracks."),(0,a.kt)("p",null,"\u26a0\ufe0f Please take into consideration that this approach will increase\nthe size of your App based on how much audio you want the user to be able to\nplay. If you're doing anything substantial, it's recommended that you use\nthe ",(0,a.kt)("a",{parentName:"p",href:"#hybrid-offline-network"},"Hybrid Offline/Network")," approach."),(0,a.kt)("h2",{id:"hybrid-offlinenetwork"},"Hybrid Offline/Network"),(0,a.kt)("p",null,"To do this you'll first need to install a package like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/itinance/react-native-fs/"},"react-native-fs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/joltup/rn-fetch-blob"},"rn-fetch-blob")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/expo-file-system"},"expo-file-system"))),(0,a.kt)("p",null,"The typical approach is to then create a download button in your app, which,\nonce clicked, uses one of the above packages to download your audio to a local\nfile. Then voila! Simply play the local file after download."))}d.isMDXComponent=!0}}]);