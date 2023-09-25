"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[74177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,d=p["".concat(c,".").concat(h)]||p[h]||g[h]||n;return r?i.createElement(d,o(o({ref:t},l),{},{components:r})):i.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},98717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));const n={title:"Practice: GitHub Pages",id:"practice_github_pages",slug:"practice_github_pages",hide_table_of_contents:!0,sidebar_position:31,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2f_classwork_practice_github_pages.md"},o=void 0,s={unversionedId:"introduction_to_programming_classic/git-html-and-css/practice_github_pages",id:"introduction_to_programming_classic/git-html-and-css/practice_github_pages",title:"Practice: GitHub Pages",description:"Goal:  Walk through the process of creating and publishing to a GitHub pages page by publishing one of our previous projects.",source:"@site/docs/introduction_to_programming_classic/1_git-html-and-css/2f_classwork_practice_github_pages.md",sourceDirName:"introduction_to_programming_classic/1_git-html-and-css",slug:"/introduction_to_programming_classic/git-html-and-css/practice_github_pages",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/practice_github_pages",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Practice: GitHub Pages",id:"practice_github_pages",slug:"practice_github_pages",hide_table_of_contents:!0,sidebar_position:31,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2f_classwork_practice_github_pages.md"},sidebar:"introduction_to_programming_classic",previous:{title:"GitHub Pages",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/github_pages"},next:{title:"Homework: Journaling at Epicodus",permalink:"/lhtp/introduction_to_programming_classic/git-html-and-css/homework_journaling_at_epicodus"}},c={},u=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Publish to GitHub Pages",id:"publish-to-github-pages",level:3}],l={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),":  Walk through the process of creating and publishing to a GitHub pages page by publishing one of our previous projects."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We need to create something called a branch to publish our content on Github pages. We'll learn more about branches later, but for now, what is the specific name we must call the branch in order for Github pages to work correctly?"),(0,a.kt)("li",{parentName:"ul"},"What is the easiest way to add new changes to a Github pages site after it's already been published?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publish-to-github-pages"},"Publish to GitHub Pages"),(0,a.kt)("p",null,"Now that you have learned how to host your web pages on GitHub Pages, go ahead and make your pet website display on GitHub Pages as well. ",(0,a.kt)("strong",{parentName:"p"},"Everyone in the pair or group of three should take a turn to publish one site on their GitHub account to GitHub Pages.")," Make sure that each project properly displays for you and your partner. If it isn\u2019t working, make sure you have confirmed your email address with GitHub."))}g.isMDXComponent=!0}}]);