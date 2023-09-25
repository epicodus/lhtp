"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[53380],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>g});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=i.createContext({}),s=function(t){var e=i.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},m="mdxType",_={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=s(r),u=n,g=m["".concat(p,".").concat(u)]||m[u]||_[u]||o;return r?i.createElement(g,a(a({ref:e},l),{},{components:r})):i.createElement(g,a({ref:e},l))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[m]="string"==typeof t?t:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43750:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>_,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const o={title:"Practice: Rewriting Git History with Rebase",id:"practice_rewriting_git_history_with_rebase",slug:"practice_rewriting_git_history_with_rebase",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/3b_classwork_practice_git_rebase.md"},a=void 0,c={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_rewriting_git_history_with_rebase",id:"introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_rewriting_git_history_with_rebase",title:"Practice: Rewriting Git History with Rebase",description:"Goal:  Now that we've learned about how to change previous commits, let's put this new information into practice!",source:"@site/docs/introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2/3b_classwork_practice_git_rebase.md",sourceDirName:"introduction_to_programming_part_time_evening/6_arrays-and-looping-part-2",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_rewriting_git_history_with_rebase",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/practice_rewriting_git_history_with_rebase",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Practice: Rewriting Git History with Rebase",id:"practice_rewriting_git_history_with_rebase",slug:"practice_rewriting_git_history_with_rebase",hide_table_of_contents:!0,sidebar_position:3,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/6_arrays-and-looping-part-2/3b_classwork_practice_git_rebase.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Rewriting Git History with Rebase",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/rewriting_git_history_with_rebase"},next:{title:"Printing an Array to a Webpage",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping-part-2/printing_an_array_to_a_webpage"}},p={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Rewriting Git History",id:"rewriting-git-history",level:3}],l={toc:s},m="wrapper";function _(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,i.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal"),":  Now that we've learned about how to change previous commits, let's put this new information into practice!"),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When can you use the ",(0,n.kt)("inlineCode",{parentName:"li"},"git commit --amend")," command to change a commit message?"),(0,n.kt)("li",{parentName:"ul"},"What are the two things that the ",(0,n.kt)("inlineCode",{parentName:"li"},"git rebase -i")," command can do?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete the following exercise."),(0,n.kt)("h3",{id:"rewriting-git-history"},"Rewriting Git History"),(0,n.kt)("p",null,'Using the process outlined in the "Git: Rewriting History with Rebase" lesson, go back and alter two of the commits from a previous project: '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--amend")," flag to change the most recent commit."),(0,n.kt)("li",{parentName:"ul"},"The rebase command to change any commit other than the most recent. Choose to either reword a commit message or squash and combine two commits. ")),(0,n.kt)("p",null,"Everyone in your pair or group should alter two commits."))}_.isMDXComponent=!0}}]);