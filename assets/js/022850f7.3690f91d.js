"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?i.createElement(h,o(o({ref:t},u),{},{components:r})):i.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},25675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={title:"Learning More About Git",id:"learning_more_about_git",slug:"learning_more_about_git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},o=void 0,s={unversionedId:"intermediate_javascript_classic/team-week/learning_more_about_git",id:"intermediate_javascript_classic/team-week/learning_more_about_git",title:"Learning More About Git",description:"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear.",source:"@site/docs/intermediate_javascript_classic/6_team-week/learning_more_about_git.md",sourceDirName:"intermediate_javascript_classic/6_team-week",slug:"/intermediate_javascript_classic/team-week/learning_more_about_git",permalink:"/intermediate_javascript_classic/team-week/learning_more_about_git",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Learning More About Git",id:"learning_more_about_git",slug:"learning_more_about_git",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/learning_more_about_git.md"},sidebar:"intermediate_javascript_classic",previous:{title:"Rewriting History with Git",permalink:"/intermediate_javascript_classic/team-week/rewriting_history_with_git"},next:{title:"Practicing the Git Workflow",permalink:"/intermediate_javascript_classic/team-week/practicing_the_git_workflow"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At this point, you should have a solid grasp of the basics of git. However, it's likely that some concepts remain intimidating. For instance, merging branches and the possibility of merge conflicts or losing code can still feel scary. Also, the basic underpinnings of how git works (it's based on graph theory) probably aren't very clear."),(0,n.kt)("p",null,"Check out the site ",(0,n.kt)("a",{parentName:"p",href:"http://think-like-a-git.net/"},"Think Like (a) Git"),". The site is a comprehensive and fun overview of git by Sam Livingson-Gray, a Ruby developer based in Portland, Oregon."),(0,n.kt)("p",null,"We recommend reading through each of the sections (which are short, quick reads) starting from the beginning. Also, make sure you read the following sections, which may be particularly useful during team week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/testing-out-merges.html"},"Testing Out Merges"),': This section illustrates several patterns for beginners to merge their code before they move on to "Black Belt Merging."'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://think-like-a-git.net/sections/rebase-from-the-ground-up.html"},"Rebase From the Ground Up"),": This section goes into more depth about how ",(0,n.kt)("inlineCode",{parentName:"li"},"git rebase")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"git cherrypick")," work. You may not use these commands much \u2014 yet \u2014 but they will be helpful long-term in your growth as a developer.")))}m.isMDXComponent=!0}}]);