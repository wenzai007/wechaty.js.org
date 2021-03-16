(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(237)),c={title:".NET Wechaty",sidebar_label:".NET"},i={unversionedId:"polyglot/dotnet",id:"polyglot/dotnet",isDocsHomePage:!1,title:".NET Wechaty",description:".NET Wechaty",source:"@site/docs/polyglot/dotnet.md",slug:"/polyglot/dotnet",permalink:"/docs/polyglot/dotnet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615888438,formattedLastUpdatedAt:"3/16/2021",sidebar_label:".NET",sidebar:"docs",previous:{title:"PHP Wechaty",permalink:"/docs/polyglot/php"},next:{title:"Rust Wechaty",permalink:"/docs/polyglot/rust"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],p={toc:l};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/dotnet-wechaty"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-.NET-blueviolet",alt:".NET Wechaty"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GitHub Repo ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/dotnet-wechaty"},"https://github.com/wechaty/dotnet-wechaty")),Object(o.b)("li",{parentName:"ul"},"Getting Started Template Repo ",Object(o.b)("a",{parentName:"li",href:"https://github.com/wechaty/dotnet-wechaty-getting-started"},"https://github.com/wechaty/dotnet-wechaty-getting-started"))),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Template Repo: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wechaty/dotnet-wechaty-getting-started"},"https://github.com/wechaty/dotnet-wechaty-getting-started")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/dotnet-wechaty-getting-started.git\ncd dotnet-wechaty-getting-started\nmake install\nmake bot\n")),Object(o.b)("h2",{id:"blogs"},"Blogs"),Object(o.b)("p",null,"Read blogs with the ",Object(o.b)("inlineCode",{parentName:"p"},"dotnet")," tag at ",Object(o.b)("a",{parentName:"p",href:"https://wechaty.js.org/tags.html#dotnet"},"https://wechaty.js.org/tags.html#dotnet")),Object(o.b)("h2",{id:"history"},"History"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/12/31/dotnet-wechaty-getting-start/"},".NET Wechaty Getting Start, Darren, Dec 31, 2020"))),Object(o.b)("h2",{id:"maintainers"},"Maintainers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/echofool"},"@echofool")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/jesn"},"@jesn"))))}s.isMDXComponent=!0},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),s=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},b=function(t){var e=s(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),b=s(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(h,i(i({ref:e},p),{},{components:n})):a.a.createElement(h,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);