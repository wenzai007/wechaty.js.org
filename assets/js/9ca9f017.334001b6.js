(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),c=(n(0),n(237)),a={title:"Architecture"},i={unversionedId:"introduction/architecture",id:"introduction/architecture",isDocsHomePage:!1,title:"Architecture",description:"The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: Wechaty (Polyglot).",source:"@site/docs/introduction/architecture.md",slug:"/introduction/architecture",permalink:"/docs/introduction/architecture",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/architecture.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615888438,formattedLastUpdatedAt:"3/16/2021",sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/introduction/concepts"},next:{title:"Life Cycle",permalink:"/docs/introduction/lifecycle"}},p=[],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: ",Object(c.b)("inlineCode",{parentName:"p"},"Wechaty (Polyglot)"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ascii"},"  +--------------------------+ +--------------------------+\n  |                          | |                          |\n  |   Wechaty (TypeScript)   | |    Wechaty(Polyglot)     |\n  |                          | |  Python, Go, Java, etc.  |\n  +--------------------------+ +--------------------------+\n\n  +-------------------------------------------------------+\n  |                 Wechaty Puppet Servuce                |\n  |                                                       |\n  |                (wechaty-puppet-service)               |\n  +-------------------------------------------------------+\n\n+---------------------  wechaty_grpc  ----------------------+\n\n  +-------------------------------------------------------+\n  |                Wechaty Puppet Abstract                |\n  |                                                       |\n  |                   (wechaty-puppet)                    |\n  +-------------------------------------------------------+\n\n  +--------------------------+ +--------------------------+\n  |      Pad Protocol        | |      Web Protocol        |\n  |                          | |                          |\n  | wechaty-puppet-padlocal  | |  (wechaty-puppet-wechat) |\n  +--------------------------+ +--------------------------+\n  +--------------------------+ +--------------------------+\n  |     Friday Protocol      | |       Mac Protocol       |\n  |                          | |                          |\n  |  (wechaty-puppet-frida)  | |   (wechaty-puppet-mac)   |\n  +--------------------------+ +--------------------------+\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Chart made by ",Object(c.b)("a",{parentName:"p",href:"http://asciiflow.com/"},"AsciiFlow"))))}l.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),y=r,f=s["".concat(a,".").concat(y)]||s[y]||d[y]||c;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);