"use strict";(self.webpackChunkrptools_doc=self.webpackChunkrptools_doc||[]).push([[1432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58593:(e,t,a)=>{a.d(t,{Y:()=>o});var n=a(67294);const r=e=>{let{parameters:t,name:a}=e;return n.createElement("div",{className:"mt-script-function-usage"},n.createElement("div",{className:"heading"},"Usage:"),n.createElement("div",null,a,"(",t&&t.map(((e,t)=>((e,t,a)=>n.createElement(n.Fragment,null,n.createElement("div",null,a||","),n.createElement("div",{className:"mt-script-param-name"},t?"[ ":"",e,t?" ]":"")))(e.name,e.optional,0===t))),")"))},i=e=>{let{parameters:t,name:a}=e;return n.createElement("div",{className:"mt-script-function-parameters"},n.createElement("details",null,n.createElement("summary",null,"Parameters"),n.createElement("ul",null,t&&t.map(((e,t)=>n.createElement("li",{key:t},n.createElement("div",{className:"heading"},e.name),n.createElement("div",null,e.description)))))))},o=e=>{let{name:t,description:a,trusted:o,since:l,parameters:s,children:p}=e;return n.createElement("div",{className:"mt-script-function"},n.createElement("div",{className:"mt-script-function-name"},t),n.createElement(r,{name:t,parameters:s}),(null==s?void 0:s.length)>0&&n.createElement(i,{name:t,parameters:s}),n.createElement("hr",null),p)}},55930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(58593);const o={},l="MTScript Data Functions",s={unversionedId:"data/mtscript-data-functions",id:"data/mtscript-data-functions",title:"MTScript Data Functions",description:"The following functions have been added to MapTool Macro Script to work with data.",source:"@site/docs/data/mtscript-data-functions.mdx",sourceDirName:"data",slug:"/data/mtscript-data-functions",permalink:"/docs/data/mtscript-data-functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MapTool Data",permalink:"/docs/data/"}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mtscript-data-functions"},"MTScript Data Functions"),(0,r.kt)("p",null,"The following functions have been added to MapTool Macro Script to work with data.\nCurrently, the only type of data stored is for Add-Ons, but this will be expanded in the future."),(0,r.kt)(i.Y,{name:"data.getStaticData",parameters:[{name:"namespace",description:"the namespace of the Add-On that the data is stored in"},{name:"path",description:"The path to the file in the Add-On"}],mdxType:"MTScriptFunction"},"If called from within code in the add-on then it will be able to access any file, otherwise it will only be able to access the files in the public/ directory. This can be used to access text files, JSON, or even images within the add-on. Images are returned in the asset:// format so they can be used in image tags.",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.getStaticData("com.example.myaddon", "mydir/myfile.txt")]'))),(0,r.kt)(i.Y,{name:"data.listTypes",mdxType:"MTScriptFunction"},(0,r.kt)("p",null,"Lists the type of Data available."),(0,r.kt)("p",null,'Currently the only type is "addon:" but this will change in the future')),(0,r.kt)(i.Y,{name:"data.listNamespaces",parameters:[{name:"type",description:"The type of data to list"}],mdxType:"MTScriptFunction"},"Returns a list of namespaces for the given data type.",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.listNamespaces("addon:")]'))),(0,r.kt)(i.Y,{name:"data.listData",parameters:[{name:"type",description:"The type of data to list"},{name:"namespace",description:"The namespace of the data to set"}],mdxType:"MTScriptFunction"},"Returns a list of the data in the given namespace.",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.listData("addon:", "com.example.myaddon")]'))),(0,r.kt)(i.Y,{name:"data.setData",parameters:[{name:"type",description:"The type of data to set"},{name:"namespace",description:"The namespace of the data to set"},{name:"name",description:"The variable name of the data to set"},{name:"value",description:"The value to set"}],mdxType:"MTScriptFunction"},"Sets the data to the specified value.",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.setData("addon:", "com.example.myaddon", "myVar", 1 )]')),(0,r.kt)("p",null,"  Things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike token properties data variables have a type (number, string, json etc), once set the\ntype cannot be changed."),(0,r.kt)("li",{parentName:"ul"},"No conversion to/from string is required for JSON values so they are a lot faster than token\nand lib:token properties."),(0,r.kt)("li",{parentName:"ul"},"This data is shared between clients and persisted in the campaign just as token and\nlib:token properties are."))),(0,r.kt)(i.Y,{name:"data.getData",parameters:[{name:"type",description:"The type of data to get"},{name:"namespace",description:"The namespace of the data to get"},{name:"name",description:"The variable name of the data to get"}],mdxType:"MTScriptFunction"},"Returns the specified data",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.getData("addon:", "com.example.myaddon", "myVar")]')),(0,r.kt)("p",null,"  Things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike token properties data variables have a type (number, string, json etc), once set the\ntype cannot be changed."),(0,r.kt)("li",{parentName:"ul"},"No conversion to/from string is required for JSON values so they are a lot faster than token\nand lib:token properties."),(0,r.kt)("li",{parentName:"ul"},"This data is shared between clients and persisted in the campaign just as token and\nlib:token properties are."))),(0,r.kt)(i.Y,{name:"data.removeData",parameters:[{name:"type",description:"The type of data to remove"},{name:"namespace",description:"The namespace of the data to remove"},{name:"name",description:"The variable name of the data to remove"}],mdxType:"MTScriptFunction"},"Removes the specified data",(0,r.kt)("br",null),"Example",(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},'[r: data.removeData("addon:", "com.example.myaddon", "myVar")]')),(0,r.kt)("p",null,"  Things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This data is shared between clients and persisted in the campaign just as token and\nlib:token properties are."))))}d.isMDXComponent=!0}}]);