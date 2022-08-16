"use strict";(self.webpackChunkrptools_doc=self.webpackChunkrptools_doc||[]).push([[8815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49895:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(2592);const l={},c=void 0,i={type:"mdx",permalink:"/road-map/MapTool-1.13",source:"@site/src/pages/road-map/MapTool-1.13.mdx",description:"MapTool 1.12",frontMatter:{}},s=[{value:"MapTool 1.12",id:"maptool-112",level:2},{value:"New Features / Enhancements",id:"new-features--enhancements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"maptool-112"},"MapTool 1.12"),(0,a.kt)("p",null,"Changes that are planned for MapTool 1.12"),(0,a.kt)("h3",{id:"new-features--enhancements"},"New Features / Enhancements"),(0,a.kt)(o.S,{summary:"Add-Ons",github:{username:"RPTools",repositoryName:"maptool",issueNumbers:[3522,3523]},mdxType:"RoadMapEntry"},"Add the ability for add-ons to specify which other add-ons they depend on Add The ability for Add-On to specify what JavaScript it exports"),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"))}u.isMDXComponent=!0},2592:(e,t,r)=>{r.d(t,{S:()=>c});var n=r(67294);const a=e=>{let{name:t,linkName:r}=e;return n.createElement("div",{className:"blog-post-link"},"More Information: ",n.createElement("a",{href:"../../blog/"+r},t))},o=e=>{let{name:t,linkName:r}=e;return n.createElement("div",{className:"doc-page-link"},"More Information: ",n.createElement("a",{href:"../../docs/"+r},t))},l=e=>{let{username:t,repositoryName:r,issueNumbers:a}=e;return n.createElement("div",{className:"github-issue-link"},n.createElement("ul",null,1===a.length?"GitHub Issue: ":"GitHub Issues: ",a.map((e=>n.createElement("li",{key:e},n.createElement("a",{href:"https://github.com/"+t+"/"+r+"/issues/"+e,target:"_blank"},"#",e," "))))))},c=e=>{let{summary:t,blogPost:r,docPage:c,github:i,children:s,completed:p}=e;return n.createElement("div",{className:"road-map-entry"},n.createElement("details",null,n.createElement("summary",null,t," ",p&&"\u2705"),n.createElement(l,i),n.createElement("div",{className:"road-map-entry-description"},s),r&&n.createElement(a,r),c&&n.createElement(o,c)))}}}]);