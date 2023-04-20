"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>_});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,_=c["".concat(o,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(_,l(l({ref:t},d),{},{components:n})):i.createElement(_,l({ref:t},d))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"6. PRACTICE: HTML Divs and Spans, and CSS Sizing Units",id:"practice_html_divs_and_spans_and_css_sizing_units",slug:"practice_html_divs_and_spans_and_css_sizing_units",hide_table_of_contents:!0,sidebar_position:42,day:"wednesday",type:"exercise"},l=void 0,s={unversionedId:"git_html_and_css/practice_html_divs_and_spans_and_css_sizing_units",id:"git_html_and_css/practice_html_divs_and_spans_and_css_sizing_units",title:"6. PRACTICE: HTML Divs and Spans, and CSS Sizing Units",description:"Goal",source:"@site/docs/1_git_html_and_css/3d_classwork_practice_divs_and_spans.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/practice_html_divs_and_spans_and_css_sizing_units",permalink:"/lhtp/git_html_and_css/practice_html_divs_and_spans_and_css_sizing_units",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"6. PRACTICE: HTML Divs and Spans, and CSS Sizing Units",id:"practice_html_divs_and_spans_and_css_sizing_units",slug:"practice_html_divs_and_spans_and_css_sizing_units",hide_table_of_contents:!0,sidebar_position:42,day:"wednesday",type:"exercise"},sidebar:"docs",previous:{title:"5. HTML Divs and Spans, and CSS Sizing Units",permalink:"/lhtp/git_html_and_css/html_divs_and_spans_and_css_sizing_units"},next:{title:"7. Using Floats",permalink:"/lhtp/git_html_and_css/using_floats"}},o={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Boring Lecture",id:"boring-lecture",level:3},{value:"Blogging Site",id:"blogging-site",level:3},{value:"Resume Site",id:"resume-site",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal"),": Practice using the the tags we learned in the previous lesson:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<div>")," tags \u2014 places to add classes to large parts of our page and separate out content"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<span>")," tags \u2014 places to add classes to content within block elements")),(0,a.kt)("p",null,"And practice using the CSS sizing units we learned in the previous lesson:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"px")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vh")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"vw"))),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What is the difference between a ",(0,a.kt)("inlineCode",{parentName:"li"},"div")," and a ",(0,a.kt)("inlineCode",{parentName:"li"},"span"),"?"),(0,a.kt)("li",{parentName:"ul"},"When would you use a ",(0,a.kt)("inlineCode",{parentName:"li"},"span")," but ",(0,a.kt)("em",{parentName:"li"},"not")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"div"),"?"),(0,a.kt)("li",{parentName:"ul"},"When would you use a ",(0,a.kt)("inlineCode",{parentName:"li"},"div")," but ",(0,a.kt)("em",{parentName:"li"},"not")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"span"),"?"),(0,a.kt)("li",{parentName:"ul"},"Between ",(0,a.kt)("inlineCode",{parentName:"li"},"px")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"%"),", which sizing unit will cause an element to change size in relation to its parent element? ")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Meet the goal by completing one of these projects. Make sure to make commits regularly and push to the project's remote repository on GitHub."),(0,a.kt)("h3",{id:"boring-lecture"},"Boring Lecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rewrite the ",(0,a.kt)("inlineCode",{parentName:"li"},"boring-lecture")," page and remove the ",(0,a.kt)("inlineCode",{parentName:"li"},"intro")," class from the elements themselves, and create a ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>")," with the ",(0,a.kt)("inlineCode",{parentName:"li"},"intro")," class to hold the elements."),(0,a.kt)("li",{parentName:"ul"},"Use two sizing units of your choice to size two or more HTML elements.")),(0,a.kt)("h3",{id:"blogging-site"},"Blogging Site"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new blogging website about whatever you want and use ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>"),"s to group together and style each blog post."),(0,a.kt)("li",{parentName:"ul"},'On the blogging website, create an "about me" section that\'s styled differently from the rest of the page.'),(0,a.kt)("li",{parentName:"ul"},"Use two sizing units of your choice to size two or more HTML elements.")),(0,a.kt)("h3",{id:"resume-site"},"Resume Site"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a new webpage to house your resume. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>"),"s and ",(0,a.kt)("inlineCode",{parentName:"li"},"<span>"),"s to style sections for your education, work experience, skills, etc."),(0,a.kt)("li",{parentName:"ul"},"Use two sizing units of your choice to size two or more HTML elements.")))}u.isMDXComponent=!0}}]);