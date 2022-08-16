"use strict";(self.webpackChunkrptools_doc=self.webpackChunkrptools_doc||[]).push([[6078],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),u=r,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return i?n.createElement(b,a(a({ref:t},p),{},{components:i})):n.createElement(b,a({ref:t},p))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},10820:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={slug:"add-on-libraries-old",title:"MapTool Add-On Libraries (Old)",authors:["craigw"],tags:["MapTool","MapTool 1.11","Libraries"]},a=void 0,l={permalink:"/blog/add-on-libraries-old",source:"@site/blog/2021-10-19-add-on-libraries-old/index.mdx",title:"MapTool Add-On Libraries (Old)",description:"Note: This post describes a work in progress so details may change due to feedback. This is also",date:"2021-10-19T00:00:00.000Z",formattedDate:"October 19, 2021",tags:[{label:"MapTool",permalink:"/blog/tags/map-tool"},{label:"MapTool 1.11",permalink:"/blog/tags/map-tool-1-11"},{label:"Libraries",permalink:"/blog/tags/libraries"}],readingTime:4.825,hasTruncateMarker:!1,authors:[{name:"Craig Wisniewski",title:"MapTool Architect / Lead Developer",url:"https://github.com/cwisniew",key:"craigw"}],frontMatter:{slug:"add-on-libraries-old",title:"MapTool Add-On Libraries (Old)",authors:["craigw"],tags:["MapTool","MapTool 1.11","Libraries"]},prevItem:{title:"MapTool Add-On Libraries",permalink:"/blog/add-on-libraries"},nextItem:{title:"Lib:Tokens URI access",permalink:"/blog/lib-token-uri"}},s={authorsImageUrls:[void 0]},c=[{value:"Format of add-on library files",id:"format-of-add-on-library-files",level:2},{value:"format of the configuration file",id:"format-of-the-configuration-file",level:2},{value:"MTScript macros",id:"mtscript-macros",level:2},{value:"mts_properties.json file",id:"mts_propertiesjson-file",level:3},{value:"public/ directory",id:"public-directory",level:2},{value:"New MTScript functions",id:"new-mtscript-functions",level:2},{value:"Things not yet implemented but will be (so dont create issues for these or I will just close them)",id:"things-not-yet-implemented-but-will-be-so-dont-create-issues-for-these-or-i-will-just-close-them",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This post describes a work in progress so details may change due to feedback. This is also\nthe reason that the documentation is a bit sparse. Before creating any issues check the bottom of the\npost for things still to be implemented. Also the current code doesn't do much checking for the format\nof the config/property files this will be improved."),(0,r.kt)("h1",{id:"add-on-libraries"},"Add-On Libraries"),(0,r.kt)("p",null,"MapTool 1.11 introduces add-on libraries which are intended to be an easier\nto work with replacement for Lib:Tokens while also offering a lot more functionality.\nLib:Tokens will still function the way that they currently do in MapTool 1.11 and future\nversions, but will not be getting a lot of the new features that add-on libraries will have,\nso it is recommended that framework developers transition to add-on libraries if supporting\nMapTool 1.11 and above."),(0,r.kt)("p",null,"I have a very sparse and contrived add-on library I have been using for testing available at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cwisniew/test-maptool-add-on-lib"},"test-maptool-add-on-lib")),(0,r.kt)("h2",{id:"format-of-add-on-library-files"},"Format of add-on library files"),(0,r.kt)("p",null,"Add-On libraries can be shared in a .mtlib file. This file is a zip file with a specific\nstructure and content. You can import these libraries with the File -> Import Add-On Library menu option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"library.json            <-- Configuration information for the add-on library\nmts_properties.json     <-- Properties for macro script functions in library\nlibrary/                <-- Content of the library\nlibrary/public          <-- Content of the library acessable via `lib:// URI`\nlibrary/mtscript        <-- MTSCript files\nlibrary/mtscript/public <-- MTSCript files that can be called via `[macro(): ]` outside of the library.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"library/public is only exposed via lib:// URI if ",(0,r.kt)("inlineCode",{parentName:"li"},"allowsUriAccess")," is set (see configuration file)"),(0,r.kt)("li",{parentName:"ul"},"MTScript macros must all end with the file extension .mts to be recognised."),(0,r.kt)("li",{parentName:"ul"},"Only MTScript files in ",(0,r.kt)("inlineCode",{parentName:"li"},"content/mtscript/public")," can be called using ",(0,r.kt)("inlineCode",{parentName:"li"},"[macro():]")," from outside of the add-on")),(0,r.kt)("h2",{id:"format-of-the-configuration-file"},"format of the configuration file"),(0,r.kt)("p",null,"The library.json configuration file is a json file with the following structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "test-library",\n  "version": "1.0.0",\n  "website": "www.rptools.net",\n  "gitUrl": "github.com/RPTools/test-library",\n  "authors": [ "RPTools Team" ],\n  "license": "GPL 3.0",\n  "namespace": "net.rptools.maptool.test-library",\n  "description": "My new test library for stuff",\n  "shortDescription": "test library",\n  "allowsUriAccess": true\n}\n')),(0,r.kt)("h2",{id:"mtscript-macros"},"MTScript macros"),(0,r.kt)("p",null,"The name of the file becomes that macroname for ",(0,r.kt)("inlineCode",{parentName:"p"},"[macro(): ]")," the namespace of the add-on library\nis used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," portion.  For example:"),(0,r.kt)("p",null,"Add-On libraries support both public and private macro functions. Public macro functions must\nreside in the mtscript/public and can be called from anywhere (chat, other add-ons, lib:tokens, macro buttons).\nYou can call them using the following syntax\n",(0,r.kt)("inlineCode",{parentName:"p"},'[macro("mtscript1@net.rptools.maptool.test-library")]')," executes MTScript macro in the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"content/mtscript/public/mtscript1.mts"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The "public/" is ommited from the macro name when calling it.\nYou can also use subdirectories to organise your macros and would call them like\n','[macro("subdir/script@net.rptools.maptool.test-library")]')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@this")," shorthand can also be used for calling a macro from within the same add-on, similar to how it works\nfor lib:Tokens. For example\n",(0,r.kt)("inlineCode",{parentName:"p"},'[macro("mtscript2@this")]')),(0,r.kt)("p",null,'Macro script files that are not in the "public/" directory can only be called from within the add-on itself.\nGiven a library with the namespace ',(0,r.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," with the following files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mtsscript/func1.mts\nmtsscript/public/func2.mts\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[macro("func1@net.mylib.addon")]')," can be called from anywhere, but ",(0,r.kt)("inlineCode",{parentName:"p"},'[macro("func2@net.mylib.addon")]'),"\ncan only be called from a macro that is on the ",(0,r.kt)("inlineCode",{parentName:"p"},"net.mylib.addon")," add-on."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Since the "public/" is not required, if you have to files with the same name excluding the "public/" part, for example\nmtscript/public/funct1.mts\nmtscript/funct1.mts'),(0,r.kt)("p",{parentName:"admonition"},"Then only the one in public/ will be able to be executed, you will not be able to call the other macro")),(0,r.kt)("p",null,"The above works not just with `",(0,r.kt)("inlineCode",{parentName:"p"},"[macro():]"),"  but the other places you would expect it to as well such as\ndefineFunction() for user defined functions and macro links."),(0,r.kt)("h3",{id:"mts_propertiesjson-file"},"mts_properties.json file"),(0,r.kt)("p",null,"The mts_properties.json file contains property information about macro scripts, it is not required and currrently\nonly allows you to set properties used in macro links."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "properties": [ \n    {\n      "filename": "public/auto_exec.mts",\n      "autoExecute": true,\n      "description": "Auto executable macro link"\n    },\n    {\n      "filename": "public/myUDF.mts",\n      "description": "My Test UDF in a drop in lib."\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Where"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"filename is the path of the file for the MacroScript function (excluding mtscript/)."),(0,r.kt)("li",{parentName:"ul"},"autoExecute determines if a macro link created for this macro will be auto executable or not."),(0,r.kt)("li",{parentName:"ul"},"description is the description that will appear in the UDF listing, unlike Lib:Token this is just a plain string and not evaluated if it contains ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"))),(0,r.kt)("h2",{id:"public-directory"},"public/ directory"),(0,r.kt)("p",null,"The contents of this directory are exposed as a lib:// URI  as long as the allowsUriAccess is set to true in the configuration file.\nThe public directory part of the filename is discared, for example\npublic/myhttml.html -> lib://net.myaddons.addon1/myhtml.html"),(0,r.kt)("p",null,'You an add images to this directory and use src="lib://" in image tags in HTML.\nIt will eventually work with audio (probably aleady does but I haven\'t tested it yet so not claining it will yet :) )'),(0,r.kt)("h2",{id:"new-mtscript-functions"},"New MTScript functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"library.listAddOnLibraries()            Lists the add on libraries"),(0,r.kt)("li",{parentName:"ul"},"library.getInfo(namespace)              Gets information about a library (either add on or lib:token)"),(0,r.kt)("li",{parentName:"ul"},"library.listTokenLibraries(namespace)   Lists the Lib:tokens in the campaign"),(0,r.kt)("li",{parentName:"ul"},"library.getContents(namespace)          Lists the contents of a library (trusted)"),(0,r.kt)("li",{parentName:"ul"},"library.removeAddOn(namepsace)          Removes an add-on (trusted) (used for testing only, probably wont make it into release)"),(0,r.kt)("li",{parentName:"ul"},"library.removeAllAddOns()               Removes all add-ons (trusted) (used for testing only, probably wont make it into release)")),(0,r.kt)("h2",{id:"things-not-yet-implemented-but-will-be-so-dont-create-issues-for-these-or-i-will-just-close-them"},"Things not yet implemented but will be (so dont create issues for these or I will just close them)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libProperty acces, including listing, setting, gettting"),(0,r.kt)("li",{parentName:"ul"},"No UI yet "),(0,r.kt)("li",{parentName:"ul"},"No onCampaignLoad etc events yet."),(0,r.kt)("li",{parentName:"ul"},"There is currenlty no way to access files not in public/ or mtscript/"),(0,r.kt)("li",{parentName:"ul"},"Many file types like text/markdown etc are allowed in the library but the functions to use them dont yet exist"),(0,r.kt)("li",{parentName:"ul"},"Expanding of JavaScript API which will make this much more useful will be part of another change.")))}d.isMDXComponent=!0}}]);