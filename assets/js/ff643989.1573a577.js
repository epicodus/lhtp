"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[56739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,g=m["".concat(c,".").concat(u)]||m[u]||s[u]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"Practice: Box Model",id:"practice_box_model",slug:"practice_box_model",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/3h_classwork_practice_box_model.md"},i=void 0,l={unversionedId:"introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_box_model",id:"introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_box_model",title:"Practice: Box Model",description:"Goal: Implement the box model in our code.",source:"@site/docs/introduction_to_programming_part_time_evening/2_git-html-and-css-part-2/3h_classwork_practice_box_model.md",sourceDirName:"introduction_to_programming_part_time_evening/2_git-html-and-css-part-2",slug:"/introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_box_model",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/practice_box_model",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Practice: Box Model",id:"practice_box_model",slug:"practice_box_model",hide_table_of_contents:!0,sidebar_position:26,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_git-html-and-css-part-2/3h_classwork_practice_box_model.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Box Model",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/box_model"},next:{title:"Centering Elements and Images",permalink:"/lhtp/introduction_to_programming_part_time_evening/git-html-and-css-part-2/centering_elements_and_images"}},c={},d=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Band Webpage",id:"band-webpage",level:3},{value:"Blogging Website",id:"blogging-website",level:3},{value:"Interior Decorator Website",id:"interior-decorator-website",level:3}],p={toc:d},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),": Implement the box model in our code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The space around each element on our web page is described by the box model"),(0,o.kt)("li",{parentName:"ul"},"The box model can add a margin, border and padding around web page content")),(0,o.kt)("h2",{id:"warm-up"},"Warm Up"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the difference between margin and padding?"),(0,o.kt)("li",{parentName:"ul"},"Why is ",(0,o.kt)("inlineCode",{parentName:"li"},"box-sizing: border-box;")," useful?")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here are some exercises for you to practice using margins, borders, and padding. Meet the goal by completing one of these projects. Don't forget to make commits and push to the project's remote repository on GitHub."),(0,o.kt)("h3",{id:"band-webpage"},"Band Webpage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the sidebar to your band's webpage, add a border and a bit of padding and margin. "),(0,o.kt)("li",{parentName:"ul"},"Give the sidebar a background color, if you haven't already."),(0,o.kt)("li",{parentName:"ul"},"Add some padding around the images on your band's webpage.")),(0,o.kt)("h3",{id:"blogging-website"},"Blogging Website"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Between each entry on your blog project, add a bit of space. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-top")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-bottom")," so that you don't increase the spacing on the sides.")),(0,o.kt)("h3",{id:"interior-decorator-website"},"Interior Decorator Website"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give different background colors to each column of your interior decorator site."),(0,o.kt)("li",{parentName:"ul"},"Add padding or a border to each column.")))}s.isMDXComponent=!0}}]);