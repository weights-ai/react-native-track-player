"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4454],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:98},l="Developing with Expo",s={unversionedId:"guides/with-expo",id:"guides/with-expo",title:"Developing with Expo",description:"Expo is a popular development platform in the react-native ecosystem.",source:"@site/docs/guides/with-expo.md",sourceDirName:"guides",slug:"/guides/with-expo",permalink:"/docs/next/guides/with-expo",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/guides/with-expo.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{sidebar_position:98},sidebar:"app",previous:{title:"Play Buttons",permalink:"/docs/next/guides/play-button"},next:{title:"Amazon FireOS Support",permalink:"/docs/next/guides/amazon-fire-support"}},u={},d=[{value:"Development Build",id:"development-build",level:2},{value:"Custom Entry Point",id:"custom-entry-point",level:2},{value:"Streaming HTTP",id:"streaming-http",level:2},{value:"Background Audio",id:"background-audio",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developing-with-expo"},"Developing with Expo"),(0,i.kt)("p",null,"Expo is a popular development platform in the react-native ecosystem."),(0,i.kt)("p",null,"Please be aware that while many people are using React Native Track Player with Expo successfully, the current maintainers of this project do not use Expo and their ability to resolve issues involving Expo is limited."),(0,i.kt)("h2",{id:"development-build"},"Development Build"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/more/glossary-of-terms/#dev-clients"},"Dev Client")," is required in order to use this package (Expo Go is not supported)."),(0,i.kt)("p",null,"To get started, create a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/clients/getting-started/"},"development build")," for your Expo app and then install React Native Track Player."),(0,i.kt)("h2",{id:"custom-entry-point"},"Custom Entry Point"),(0,i.kt)("p",null,"In order to configure the Playback Service within the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/more/glossary-of-terms/#entry-point"},"entry point"),", you will need to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/guides/monorepos/#change-default-entrypoint"},"create a custom entry point")," and adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," configuration."),(0,i.kt)("p",null,"By default, Expo points to an entry point in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder. The path for this is configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"main"')," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". To create a new entry point:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the default one")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cp node_modules/expo/AppEntry.js AppEntry.js\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},'"main"')," field of ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," to reference the new file e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"AppEntry.js"')),(0,i.kt)("li",{parentName:"ol"},"Edit the new file to have it import your app code, and configure the Playback Service.")),(0,i.kt)("h2",{id:"streaming-http"},"Streaming HTTP"),(0,i.kt)("p",null,"On newer versions of Android, HTTP streaming is disallowed by default (HTTPS is OK). However, it is only disallowed in production builds which can make this issue hard to diagnose."),(0,i.kt)("p",null,"To allow HTTP, you must first install the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/sdk/build-properties"},(0,i.kt)("inlineCode",{parentName:"a"},"expo-build-properties")," package"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"expo install expo-build-properties\n")),(0,i.kt)("p",null,"Then add this configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "plugins": [\n      [\n        "expo-build-properties",\n        {\n          "android": {\n            "usesCleartextTraffic": true\n          }\n        }\n      ]\n    ]\n...\n')),(0,i.kt)("h2",{id:"background-audio"},"Background Audio"),(0,i.kt)("p",null,"Here is the configuration required for audio playback in background:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.expo.dev/versions/latest/sdk/audio/#playing-or-recording-audio-in-background"},"iOS: Enable audio playback in background via your app.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/basics/background-mode/#android"},"Android: Stop playback when the app is closed"))))}m.isMDXComponent=!0}}]);