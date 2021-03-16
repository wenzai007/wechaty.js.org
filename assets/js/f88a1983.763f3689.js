(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{227:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return p})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return o})),a.d(e,"default",(function(){return u}));var n=a(3),r=a(8),l=(a(0),a(237)),b=a(241),c=a(242),p={title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},i={unversionedId:"puppet-providers/padlocal",id:"puppet-providers/padlocal",isDocsHomePage:!1,title:"Puppet Provider: PadLocal",description:"Wechaty Puppet PadLocal",source:"@site/docs/puppet-providers/padlocal.md",slug:"/puppet-providers/padlocal",permalink:"/docs/puppet-providers/padlocal",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/padlocal.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615888438,formattedLastUpdatedAt:"3/16/2021",sidebar_label:"PadLocal",sidebar:"docs",previous:{title:"Puppet Provider: Lark",permalink:"/docs/puppet-providers/lark"},next:{title:"Puppet Provider: WeChat4U",permalink:"/docs/puppet-providers/wechat4u"}},o=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:o};function u(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"padlocal"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-PadLocal-blueviolet",alt:"Wechaty Puppet PadLocal"}))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2020/padlocal/logo.png",alt:"Wechaty Puppet PadLocal"})),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-padlocal"},Object(l.b)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-padlocal.svg",alt:"NPM Version"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padlocal?activeTab=versions"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-padlocal/next.svg",alt:"npm (tag)"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/padlocal/padlocal-client-ts"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-padlocal--client--ts-brightgreen",alt:"Powered by padlocal-client-ts"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Repo: ",Object(l.b)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"https://github.com/padlocal/wechaty-puppet-padlocal")),Object(l.b)("li",{parentName:"ul"},"Support & Feedback: ",Object(l.b)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/issues"},"https://github.com/padlocal/wechaty-puppet-padlocal/issues"))),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("p",null,"PadLocal is a full-featured Wechaty Puppet Provider."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u529f\u80fd"),Object(l.b)("th",{parentName:"tr",align:null},"padlocal"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"<\u6d88\u606f>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6536\u53d1\u6587\u672c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6536\u53d1\u4e2a\u4eba\u540d\u7247"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6536\u53d1\u56fe\u6587\u94fe\u63a5"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u56fe\u7247\u3001\u6587\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u6536\u56fe\u7247\u3001\u6587\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u89c6\u9891"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u6536\u89c6\u9891"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5c0f\u7a0b\u5e8f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u6536\u52a8\u56fe"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u52a8\u56fe"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8bed\u97f3\u6d88\u606f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bed\u97f3\u6d88\u606f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u672c"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u7247"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u6587\u94fe\u63a5"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u97f3\u9891"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u89c6\u9891"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u52a8\u56fe"),Object(l.b)("td",{parentName:"tr",align:null},"\u274c")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5c0f\u7a0b\u5e8f"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"<\u7fa4\u7ec4>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7fa4\u804a"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7fa4\u516c\u544a"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7fa4\u516c\u544a"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7fa4\u4e8c\u7ef4\u7801"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u62c9\u4eba\u8fdb\u7fa4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u8e22\u4eba\u51fa\u7fa4"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u7fa4\u804a"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6539\u7fa4\u540d\u79f0"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u5165\u7fa4\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u79bb\u7fa4\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0\u53d8\u66f4\u4e8b\u4ef6"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"@\u7fa4\u6210\u5458"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7fa4\u5217\u8868"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u5217\u8868"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7fa4\u8be6\u60c5"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"<\u8054\u7cfb\u4eba>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5907\u6ce8"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u901a\u8fc7\u597d\u53cb"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u597d\u53cb\u5217\u8868"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u597d\u53cb\u8be6\u60c5"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"<\u5176\u4ed6>")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5fae\u4fe1"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u626b\u7801\u72b6\u6001"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5fae\u4fe1"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u534f\u8bae"),Object(l.b)("td",{parentName:"tr",align:null},"iPad")))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TOKEN required")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"PadLocal is a Wechaty Puppet Provider which consumes Wechaty Puppet Service."),Object(l.b)("p",{parentName:"div"},"Learn about ",Object(l.b)("a",{parentName:"p",href:"/docs/puppet-services/padlocal"},"how to get a PadLocal TOKEN")))),Object(l.b)(b.a,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),Object(l.b)(c.a,{value:"mac",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nset WECHATY_PUPPET=wechaty-puppet-padlocal\nset WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n")))),Object(l.b)("h2",{id:"roadmap"},"Roadmap"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"to be added")),Object(l.b)("h2",{id:"history"},"History"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020"))),Object(l.b)("h2",{id:"maintainers"},"Maintainers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/padlocal"},"@padlocal"))))}u.isMDXComponent=!0},237:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),o=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=o(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,b=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),d=o(a),m=n,O=d["".concat(b,".").concat(m)]||d[m]||u[m]||l;return a?r.a.createElement(O,c(c({ref:e},i),{},{components:a})):r.a.createElement(O,c({ref:e},i))}));function O(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,b=new Array(l);b[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},238:function(t,e,a){"use strict";function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}e.a=function(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}},239:function(t,e,a){"use strict";var n=a(0),r=a(240);e.a=function(){var t=Object(n.useContext)(r.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},240:function(t,e,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);e.a=r},241:function(t,e,a){"use strict";var n=a(0),r=a.n(n),l=a(239),b=a(238),c=a(62),p=a.n(c);var i=37,o=39;e.a=function(t){var e=t.lazy,a=t.block,c=t.defaultValue,d=t.values,u=t.groupId,m=t.className,O=Object(l.a)(),s=O.tabGroupChoices,j=O.setTabGroupChoices,N=Object(n.useState)(c),g=N[0],y=N[1],h=n.Children.toArray(t.children),v=[];if(null!=u){var f=s[u];null!=f&&f!==g&&d.some((function(t){return t.value===f}))&&y(f)}var P=function(t){var e=t.target,a=v.indexOf(e),n=h[a].props.value;y(n),null!=u&&(j(u,n),setTimeout((function(){var t,a,n,r,l,b,c,i;(t=e.getBoundingClientRect(),a=t.top,n=t.left,r=t.bottom,l=t.right,b=window,c=b.innerHeight,i=b.innerWidth,a>=0&&l<=i&&r<=c&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(p.a.tabItemActive),setTimeout((function(){return e.classList.remove(p.a.tabItemActive)}),2e3))}),150))},w=function(t){var e,a;switch(t.keyCode){case o:var n=v.indexOf(t.target)+1;a=v[n]||v[0];break;case i:var r=v.indexOf(t.target)-1;a=v[r]||v[v.length-1]}null===(e=a)||void 0===e||e.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},m)},d.map((function(t){var e=t.value,a=t.label;return r.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(b.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:w,onFocus:P,onClick:P},a)}))),e?Object(n.cloneElement)(h.filter((function(t){return t.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return Object(n.cloneElement)(t,{key:e,hidden:t.props.value!==g})}))))}},242:function(t,e,a){"use strict";var n=a(0),r=a.n(n);e.a=function(t){var e=t.children,a=t.hidden,n=t.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}}}]);