"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[44570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||a;return r?o.createElement(u,i(i({ref:t},c),{},{components:r})):o.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Red Green Refactor Workflow",id:"red-green-refactor-workflow",slug:"red-green-refactor-workflow",hide_table_of_contents:!0,sidebar_position:26,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_red_green_refactor_workflow.md"},i=void 0,l={unversionedId:"intermediate-javascript-part-time/test-driven-development/red-green-refactor-workflow",id:"intermediate-javascript-part-time/test-driven-development/red-green-refactor-workflow",title:"Red Green Refactor Workflow",description:"Before we start writing automated tests, let's cover the Red, Green, Refactor workflow. We've actually been applying some of the principles of this workflow already. However, we need automated testing in place to really apply it.",source:"@site/docs/intermediate-javascript-part-time/5_test-driven-development/1c-red-green-refactor-workflow.md",sourceDirName:"intermediate-javascript-part-time/5_test-driven-development",slug:"/intermediate-javascript-part-time/test-driven-development/red-green-refactor-workflow",permalink:"/intermediate-javascript-part-time/test-driven-development/red-green-refactor-workflow",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Red Green Refactor Workflow",id:"red-green-refactor-workflow",slug:"red-green-refactor-workflow",hide_table_of_contents:!0,sidebar_position:26,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1c_red_green_refactor_workflow.md"},sidebar:"intermediate-javascript-part-time",previous:{title:"TDD Review",permalink:"/intermediate-javascript-part-time/test-driven-development/tdd-review"},next:{title:"Setting Up Jest",permalink:"/intermediate-javascript-part-time/test-driven-development/setting-up-jest"}},s={},p=[{value:"The Red-Green-Refactor WorkFlow",id:"the-red-green-refactor-workflow",level:2}],c={toc:p},f="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Before we start writing automated tests, let's cover the ",(0,n.kt)("strong",{parentName:"p"},"Red, Green, Refactor")," workflow. We've actually been applying some of the principles of this workflow already. However, we need automated testing in place to really apply it. "),(0,n.kt)("h2",{id:"the-red-green-refactor-workflow"},"The Red-Green-Refactor WorkFlow"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Let's take a look at how it works. We've already been applying most of these steps. However, the steps in ",(0,n.kt)("strong",{parentName:"p"},"bold")," are new."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Identify the simplest possible functionality our program must exhibit."),(0,n.kt)("li",{parentName:"ol"},"Write a coded test."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{color:"red"},"Before coding, make sure the test fails."))," "),(0,n.kt)("li",{parentName:"ol"},"Implement the functionality with the least amount of code possible. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"green"},"Run the automated test to confirm it passes. (If it doesn't pass, revisit step 4.)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{color:"green"},"Make sure all previous tests still pass."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("font",{color:"blue"},"Check if code can be refactored. If so, refactor and repeat step 6.")),(0,n.kt)("li",{parentName:"ol"},"Commit your code! You should always commit after each passing test."),(0,n.kt)("li",{parentName:"ol"},"Repeat this entire process with the next simplest piece of functionality.")),(0,n.kt)("p",null,'There are two new steps in the list above. In step 3, we need to confirm that the test fails before we write the code to get it passing. We haven\'t covered this yet. It\'s a little more involved than it sounds \u2014 there are "good" fails and "bad" fails. We\'ll cover both soon.'),(0,n.kt)("p",null,"We covered step 6 briefly in Introduction to Programming. However, running all previous tests manually is time-consuming so it wasn't part of our workflow. With automated testing, we'll be able to run all of our tests with a single terminal command. If ",(0,n.kt)("em",{parentName:"p"},"any")," of our tests don't work (whether it's our most recent test or an older one), we need to isolate the issue and fix it before moving on."),(0,n.kt)("p",null,"It should be clear why this is called the Red, Green, Refactor workflow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{color:"red"},"Red")),' means we need to write a test that fails at first. This needs to be a "good" fail before we move on. We\'ll learn more about "good" fails soon.'),(0,n.kt)("li",{parentName:"ul"},'"',(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{color:"green"},"Green")),'" means that all of our tests need to be passing before we move on.'),(0,n.kt)("li",{parentName:"ul"},'"',(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{color:"blue"},"Refactor")),'" means that we should always look for opportunities to refactor after each passing test.')),(0,n.kt)("p",null,"In the next lesson, we'll learn how to set up Jest. Then we'll be ready to apply the Red, Green, Refactor workflow and start writing tests."))}d.isMDXComponent=!0}}]);