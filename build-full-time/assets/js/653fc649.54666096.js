"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51529],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(7896),i=(r(2784),r(30876));const s={title:"Practice: CSS Media Queries and Responsive Design",id:"practice-css-media-queries-and-responsive-design",slug:"practice-css-media-queries-and-responsive-design",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3m_classwork_practice_media_queries_and_responsive_design.md"},a=void 0,o={unversionedId:"introduction-to-programming/git-html-and-css/practice-css-media-queries-and-responsive-design",id:"introduction-to-programming/git-html-and-css/practice-css-media-queries-and-responsive-design",title:"Practice: CSS Media Queries and Responsive Design",description:"Goal: Practice implementing media queries into your own sites to ensure your content is polished and easily-readable on all screen sizes.",source:"@site/docs/introduction-to-programming/1_git-html-and-css/3m-classwork-practice-media-queries-and-responsive-design.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/practice-css-media-queries-and-responsive-design",permalink:"/introduction-to-programming/git-html-and-css/practice-css-media-queries-and-responsive-design",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{title:"Practice: CSS Media Queries and Responsive Design",id:"practice-css-media-queries-and-responsive-design",slug:"practice-css-media-queries-and-responsive-design",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3m_classwork_practice_media_queries_and_responsive_design.md"},sidebar:"introduction-to-programming",previous:{title:"CSS Media Queries and Responsive Design",permalink:"/introduction-to-programming/git-html-and-css/css-media-queries-and-responsive-design"},next:{title:"Introduction to Bootstrap and Front-End Frameworks",permalink:"/introduction-to-programming/git-html-and-css/introduction-to-bootstrap-and-front-end-frameworks"}},c={},d=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Implementing Media Queries",id:"implementing-media-queries",level:3}],l={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal"),": Practice implementing media queries into your own sites to ensure your content is polished and easily-readable on all screen sizes."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the difference between a media feature and media type?"),(0,i.kt)("li",{parentName:"ul"},"What does the term viewport mean?"),(0,i.kt)("li",{parentName:"ul"},"With your partner, discuss some of the benefits of media queries and responsive design. Why is it important?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"implementing-media-queries"},"Implementing Media Queries"),(0,i.kt)("p",null,"Go back and add in media queries on any site you built today. You should include media queries that restyle your site for the following screen sizes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mobile screens (roughly 300 \u2013 480 pixels wide)"),(0,i.kt)("li",{parentName:"ul"},"Medium and tablet screens (roughly 700 \u2013 1000 pixels wide)")))}p.isMDXComponent=!0}}]);