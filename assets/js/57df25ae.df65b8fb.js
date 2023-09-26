"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51105],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,s(s({ref:t},u),{},{components:o})):n.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93573:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Documentation and Resources",id:"documentation-and-resources",slug:"documentation-and-resources",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_documentation_and_resources.md",paginationNext:null},s=void 0,i={unversionedId:"c-and-net-classic/getting-started-with-c/documentation-and-resources",id:"c-and-net-classic/getting-started-with-c/documentation-and-resources",title:"Documentation and Resources",description:"Now that we have the necessary tools for C# programming, let's discuss the resources we'll consult throughout the course. We recommend bookmarking these to refer back to later.",source:"@site/docs/c-and-net-classic/2_getting-started-with-c/0f-documentation-and-resources.md",sourceDirName:"c-and-net-classic/2_getting-started-with-c",slug:"/c-and-net-classic/getting-started-with-c/documentation-and-resources",permalink:"/c-and-net-classic/getting-started-with-c/documentation-and-resources",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Documentation and Resources",id:"documentation-and-resources",slug:"documentation-and-resources",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0f_documentation_and_resources.md",paginationNext:null},sidebar:"c-and-net-classic",previous:{title:"Installing and Configuring MySQL",permalink:"/c-and-net-classic/getting-started-with-c/installing-and-configuring-mysql"},next:{title:"Using a C# REPL",permalink:"/c-and-net-classic/data-types-variables-branching-and-looping/using-a-c-repl"}},c={},l=[{value:"Official Documentation",id:"official-documentation",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"StackOverflow",id:"stackoverflow",level:3},{value:"Google",id:"google",level:3},{value:"C# Basics",id:"c-basics",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we have the necessary tools for C# programming, let's discuss the resources we'll consult throughout the course. We recommend bookmarking these to refer back to later."),(0,r.kt)("h2",{id:"official-documentation"},"Official Documentation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Microsoft maintains the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/"},"official documentation for C#"),". This includes a C# programming guide, reference materials, samples, walkthroughs and more."),(0,r.kt)("p",null,"This documentation can be cumbersome, even for seasoned professionals. We recommend using Google to efficiently navigate documentation. For example, if we wanted to look at documentation for strings, we could Google ",(0,r.kt)("em",{parentName:"p"},'"string C#"'),". To search ",(0,r.kt)("em",{parentName:"p"},"only")," this documentation website, we could use the following format in Google's search bar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"site: docs.microsoft.com/en-us/dotnet/csharp/ search term(s) here\n")),(0,r.kt)("h2",{id:"other-resources"},"Other Resources"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Outside of official documentation, there are many other online resources. Here are some of our favorites:"),(0,r.kt)("h3",{id:"stackoverflow"},(0,r.kt)("a",{parentName:"h3",href:"https://www.stackoverflow.com"},"StackOverflow")),(0,r.kt)("p",null,"Stack Overflow is a great resource that you probably used while in Introduction to Programming. Most of the time a question has already been asked, but if it hasn't, create an account and check out Stack Overflow's ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/help/how-to-ask"},"best practices"))," for asking a question."),(0,r.kt)("h3",{id:"google"},(0,r.kt)("a",{parentName:"h3",href:"https://www.google.com"},"Google")),(0,r.kt)("p",null,"Paste your error message into Google with a little context. For example, ",(0,r.kt)("em",{parentName:"p"},'"receiving error CS1061: when trying to access a method."')," This will often point you towards potential solutions, whether on Stack Overflow, GitHub, or elsewhere."),(0,r.kt)("p",null,"It's also a good idea to have a document dedicated to keeping track of errors you run into. This will save you time later when you run into similar errors."),(0,r.kt)("h3",{id:"c-basics"},"C# Basics"),(0,r.kt)("p",null,"In addition, here are some resources available online on basics of the C# language for further exploration to build a strong foundation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/learn/"},"Microsoft Learn"))),(0,r.kt)("p",null,"Microsoft is rolling out a new learning platform starting in 2019 and will continue to include new resources."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://www.tutorialspoint.com/csharp/"},"C# Tutorials at tutorialspoint.com"))),(0,r.kt)("p",null,"These tutorials can be useful for learning the basics. We recommend typing everything out into your code editor as you follow along."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://www.albahari.com/nutshell/"},"C# in a Nutshell")," (O'Reilly)")),(0,r.kt)("p",null,"This book is a good reference for concise explanations to terms or concepts that may otherwise lead to long-winded Google searches."))}p.isMDXComponent=!0}}]);