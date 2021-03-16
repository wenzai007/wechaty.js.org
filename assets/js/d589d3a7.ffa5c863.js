(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(237)),l={title:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"With just a few lines of code, your application can send and receive messages with WeChat using the Wechaty Puppets for WeChat.",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/getting-started.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615888438,formattedLastUpdatedAt:"3/16/2021",sidebar:"docs",previous:{title:"Alternatives",permalink:"/docs/introduction/alternatives"},next:{title:"Wechaty Tutorials",permalink:"/docs/tutorials/"}},s=[{value:"Getting Started",id:"getting-started",children:[{value:"1. Gitpod \u2764\ufe0f  Wechaty",id:"1-gitpod-\ufe0f--wechaty",children:[]},{value:"2. Google Cloud Shell",id:"2-google-cloud-shell",children:[]}]},{value:"World&#39;s shortest chatbot code",id:"worlds-shortest-chatbot-code",children:[]},{value:"Local Install",id:"local-install",children:[{value:"Requirements",id:"requirements",children:[]},{value:"0. Install Node.js (&gt;=10)",id:"0-install-nodejs-10",children:[]},{value:"1. Clone wechaty-getting-started Repository",id:"1-clone-wechaty-getting-started-repository",children:[]},{value:"2. Install Dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the Bot",id:"3-run-the-bot",children:[]}]},{value:"Demo",id:"demo",children:[]}],i={toc:s};function d(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"With just a few lines of code, your application can send and receive messages with WeChat using the Wechaty Puppets for WeChat."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"Template Repo: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"https://github.com/wechaty/wechaty-getting-started")),Object(r.b)("h3",{id:"1-gitpod-\ufe0f--wechaty"},"1. Gitpod \u2764\ufe0f  Wechaty"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod",alt:"GitPod Ready-to-Code"}))),Object(r.b)("p",null,"Use Gitpod to run our ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"Wechaty Getting Started ding-dong BOT")," instantly inside your browser!"),Object(r.b)("p",null,"Learn more from blog post: ",Object(r.b)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/06/wechaty-getting-started-without-leave-your-browser/"},"Getting Started Without Leave Your Browser: Wechaty \u2764\ufe0f Gitpod")),Object(r.b)("h3",{id:"2-google-cloud-shell"},"2. Google Cloud Shell"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},Object(r.b)("img",{parentName:"a",src:"https://gstatic.com/cloudssh/images/open-btn.svg",alt:"Open in Cloud Shell"}))),Object(r.b)("p",null,"The Google Cloud Shell should open our tutorial in the right panel for you to follow and finish the tutorials easily."),Object(r.b)("p",null,"Learn more from blog post: ",Object(r.b)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/"},"Google Cloud Shell Tutorials for Wechaty")),Object(r.b)("h2",{id:"worlds-shortest-chatbot-code"},"World's shortest chatbot code"),Object(r.b)("p",null,"6 lines of JavaScript/TypeScript:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nWechaty.instance()\n  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n  .on('login',            user => console.log(`User ${user} logged in`))\n  .on('message',       message => console.log(`Message: ${message}`))\n  bot.start()\n")),Object(r.b)("h2",{id:"local-install"},"Local Install"),Object(r.b)("p",null,"This Quickstart will teach you how to do this using the Wechaty SDK for WeChat, wechaty-puppet-mock, TypeScript.\nIn this Quickstart, you will learn how to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Node.js"),Object(r.b)("li",{parentName:"ol"},"Install Wechaty"),Object(r.b)("li",{parentName:"ol"},"Start running your first chatbot")),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Node.js v12 or above"),Object(r.b)("li",{parentName:"ol"},"Build Tools for your Platform")),Object(r.b)("h3",{id:"0-install-nodejs-10"},"0. Install Node.js ","(",">","=10",")"),Object(r.b)("p",null,"If you have not installed Node.js","(","or version is below 10",")",",You need to install the latest version of Node.js first by following the links below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Instal Node.js for other platforms can be found at ",Object(r.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"https://nodejs.org/en/download/package-manager/"))),Object(r.b)("h3",{id:"1-clone-wechaty-getting-started-repository"},"1. Clone wechaty-getting-started Repository"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started\ncd wechaty-getting-started\n")),Object(r.b)("h3",{id:"2-install-dependencies"},"2. Install Dependencies"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(r.b)("h3",{id:"3-run-the-bot"},"3. Run the Bot"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Notice: Wechaty requires Node.js version ",">","= 10"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"npm start\n# or make bot\n")),Object(r.b)("p",null,"You are all set!"),Object(r.b)("p",null,"You can see the following result after running:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"demo",src:n(337).default})),Object(r.b)("p",null,"This demo will show all message on the bot."),Object(r.b)("h2",{id:"demo"},"Demo"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Wechaty Developers&#39; Home",src:n(264).default})),Object(r.b)("p",null,"Scan the following QR Code in WeChat with secret code ",Object(r.b)("em",{parentName:"p"},"wechaty"),", join our ",Object(r.b)("strong",{parentName:"p"},"Wechaty Developers' Home"),". This group is only for developers."))}d.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||b[p]||r;return n?a.a.createElement(h,c(c({ref:t},i),{},{components:n})):a.a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},264:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/friday-qrcode-5cc2eb406423df2d76ccc0b3543f94b7.svg"},337:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/getting-started-qrcode-c178853175d38f44e44b0a6f9b36532d.png"}}]);