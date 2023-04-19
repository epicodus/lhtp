"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),_=i,m=p["".concat(l,".").concat(_)]||p[_]||u[_]||s;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=_;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},3448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const s={title:"7. \u270f\ufe0f Practice: CSS Media Queries and Responsive Design",id:"practice_css_media_queries_and_responsive_design",slug:"practice_css_media_queries_and_responsive_design",hide_table_of_contents:!0,sidebar_position:57,day:"thursday",type:"exercise"},a=void 0,o={unversionedId:"git_html_and_css/practice_css_media_queries_and_responsive_design",id:"git_html_and_css/practice_css_media_queries_and_responsive_design",title:"7. \u270f\ufe0f Practice: CSS Media Queries and Responsive Design",description:"Goal: Practice implementing media queries into your own sites to ensure your content is polished and easily-readable on all screen sizes.",source:"@site/docs/1_git_html_and_css/3m_classwork_practice_media_queries_and_responsive_design.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/practice_css_media_queries_and_responsive_design",permalink:"/lhtp/git_html_and_css/practice_css_media_queries_and_responsive_design",draft:!1,tags:[],version:"current",sidebarPosition:57,frontMatter:{title:"7. \u270f\ufe0f Practice: CSS Media Queries and Responsive Design",id:"practice_css_media_queries_and_responsive_design",slug:"practice_css_media_queries_and_responsive_design",hide_table_of_contents:!0,sidebar_position:57,day:"thursday",type:"exercise"},sidebar:"docs",previous:{title:"6. \ud83d\udcd3 CSS Media Queries and Responsive Design",permalink:"/lhtp/git_html_and_css/css_media_queries_and_responsive_design"},next:{title:"8. \ud83d\udcd3 Introduction to Bootstrap and Front-End Frameworks",permalink:"/lhtp/git_html_and_css/introduction_to_bootstrap_and_front_end_frameworks"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Implementing Media Queries",id:"implementing-media-queries",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal"),": Practice implementing media queries into your own sites to ensure your content is polished and easily-readable on all screen sizes."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the difference between a media feature and media type?"),(0,i.kt)("li",{parentName:"ul"},"What does the term viewport mean?"),(0,i.kt)("li",{parentName:"ul"},"With your partner, discuss some of the benefits of media queries and responsive design. Why is it important?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"implementing-media-queries"},"Implementing Media Queries"),(0,i.kt)("p",null,"Go back and add in media queries on any site you built today. You should include media queries that restyle your site for the following screen sizes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mobile screens (roughly 300 \u2013 480 pixels wide)"),(0,i.kt)("li",{parentName:"ul"},"Medium and tablet screens (roughly 700 \u2013 1000 pixels wide)")))}u.isMDXComponent=!0}}]);