(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),c=n(8),o=(n(0),n(237)),l=n(241),r=n(242),s={title:"Managing Contacts"},i={unversionedId:"recipes/contact",id:"recipes/contact",isDocsHomePage:!1,title:"Managing Contacts",description:"List all contacts",source:"@site/docs/recipes/contact.md",slug:"/recipes/contact",permalink:"/docs/recipes/contact",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/recipes/contact.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1615888438,formattedLastUpdatedAt:"3/16/2021",sidebar:"docs",previous:{title:"Dealing with Message",permalink:"/docs/recipes/message"},next:{title:"Managing Rooms",permalink:"/docs/recipes/room"}},u=[{value:"List all contacts",id:"list-all-contacts",children:[]},{value:"Search in contacts",id:"search-in-contacts",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"list-all-contacts"},"List all contacts"),Object(o.b)(l.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n\n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(o.b)(r.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { Contact } from 'wechaty'\n\nasync function onReady () {\n  const contactList = await bot.Contact.findAll()\n  console.info('Total number of contacts:', contactList.length)\n\n  for (const contact of contactList) {\n    console.info('Id:',   contact.id)\n    console.info('Name:', contact.name())\n    \n    const type = contact.type()\n    console.info('Type:', Contact.Type[type])\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(o.b)(r.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},"from typing import List\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contacts: List[Contact] = await self.Contact.find_all()\n        for contact in contacts:\n            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')\n"))),Object(o.b)(r.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),Object(o.b)("h2",{id:"search-in-contacts"},"Search in contacts"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Contact.find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Contact.findAll")," supports search by ",Object(o.b)("inlineCode",{parentName:"p"},"id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"alias"),", ",Object(o.b)("inlineCode",{parentName:"p"},"weixin"),"."),Object(o.b)(l.a,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(o.b)(r.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"async function onReady () {\n  // find by id:\n  const filehelper = await bot.Contact.find('filehelper')\n  console.info('filehelper:', filehelper)\n\n  // find by name:\n  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })\n  console.info('Total number of contacts:', nameContainsJList.length)\n\n  for (const contact of nameContainsJList) {\n    console.info('contact:', contact)\n  }\n}\n\nbot.on('ready', onReady)\n"))),Object(o.b)(r.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-py"},"from typing import List, Optional\nfrom wechaty import Wechaty, Contact\nfrom wechaty_puppet.schemas.contact import ContactQueryFilter\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        # find by id\n        filehelper: Optional[Contact] = await self.Contact.find('filehelper')\n        if filehelper:\n            print(f'filehelper<{filehelper}>')\n        \n        # find by name\n        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))\n        print(f'total number of contacts: {len(contacts)}')\n\n        for contact in contacts:\n            print(contact)\n"))),Object(o.b)(r.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"php",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"csharp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),Object(o.b)(r.a,{value:"rust",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}b.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?c.a.createElement(d,r(r({ref:t},i),{},{components:n})):c.a.createElement(d,r({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var i=2;i<o;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},238:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},239:function(e,t,n){"use strict";var a=n(0),c=n(240);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},240:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},241:function(e,t,n){"use strict";var a=n(0),c=n.n(a),o=n(239),l=n(238),r=n(62),s=n.n(r);var i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,y=d.setTabGroupChoices,O=Object(a.useState)(r),v=O[0],j=O[1],g=a.Children.toArray(e.children),h=[];if(null!=b){var T=f[b];null!=T&&T!==v&&p.some((function(e){return e.value===T}))&&j(T)}var w=function(e){var t=e.target,n=h.indexOf(t),a=g[n].props.value;j(a),null!=b&&(y(b,a),setTimeout((function(){var e,n,a,c,o,l,r,i;(e=t.getBoundingClientRect(),n=e.top,a=e.left,c=e.bottom,o=e.right,l=window,r=l.innerHeight,i=l.innerWidth,n>=0&&o<=i&&c<=r&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=h.indexOf(e.target)+1;n=h[a]||h[0];break;case i:var c=h.indexOf(e.target)-1;n=h[c]||h[h.length-1]}null===(t=n)||void 0===t||t.focus()};return c.a.createElement("div",{className:"tabs-container"},c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:N,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},242:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);