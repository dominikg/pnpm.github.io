(window.webpackJsonp=window.webpackJsonp||[]).push([[2264],{2336:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(3),o=t(7),r=(t(0),t(3064)),i={id:"pnpm-vs-npm",title:"pnpm vs npm",original_id:"pnpm-vs-npm"},p={unversionedId:"pnpm-vs-npm",id:"version-5.18/pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/versioned_docs/version-5.18/pnpm-vs-npm.md",slug:"/pnpm-vs-npm",permalink:"/pnpm-vs-npm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.18/pnpm-vs-npm.md",version:"5.18",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406},s=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"npms-flat-tree"},"npm's flat tree"),Object(r.b)("p",null,"npm maintains a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less\ndisk space bloat, with a messy ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),Object(r.b)("p",null,"On the other hand, pnpm manages ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and\nsymbolic linking to a global on-disk content-addressable store. This nets you\nthe benefits of far less disk space usage, while also keeping your\n",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",Object(r.b)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish\nto learn more."),Object(r.b)("p",null,"The good thing about pnpm's proper ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it\n"',Object(r.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not\nspecified in the project's ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"pnpm does not allow installation of packages without saving them to\n",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as\nregular dependencies. Like with npm, ",Object(r.b)("inlineCode",{parentName:"p"},"--save-dev")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--save-optional")," can be\nused to install packages as dev or optional dependencies."),Object(r.b)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages\nwhen they use pnpm unless they remove a dependency and leave it orphaned. That's\nwhy pnpm's implementation of the ",Object(r.b)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify\npackages to prune - it ALWAYS removes all extraneous and orphaned packages."),Object(r.b)("h2",{id:"directory-dependencies"},"Directory dependencies"),Object(r.b)("p",null,"Directory dependencies start with the ",Object(r.b)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in\nthe filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm\ndoes not perform installation for the file dependencies."),Object(r.b)("p",null,"This means that if you have a package called ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," (",Object(r.b)("inlineCode",{parentName:"p"},"<root>/foo"),") that has\n",Object(r.b)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for\n",Object(r.b)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," on ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),"."),Object(r.b)("p",null,"If you need to run installations in several packages at the same time, for\ninstance in the case of a monorepo, you should look at the documentation for\n",Object(r.b)("a",{parentName:"p",href:"cli/recursive"},Object(r.b)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}l.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return t?o.a.createElement(b,p(p({ref:n},c),{},{components:t})):o.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);