"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"1. Expectations and Game Plan for Building a C# Console App",id:"expectations_and_game_plan_for_building_a_c_console_app",slug:"expectations_and_game_plan_for_building_a_c_console_app",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0a_basic_console_apps.md",paginationPrev:null},i=void 0,l={unversionedId:"c_and_net_classic/basic-console-apps/expectations_and_game_plan_for_building_a_c_console_app",id:"c_and_net_classic/basic-console-apps/expectations_and_game_plan_for_building_a_c_console_app",title:"1. Expectations and Game Plan for Building a C# Console App",description:"So far we've experimented with C# by typing basic code into the REPL. If we want to write entire programs, we'll need to save our code in files. Well, in this next section of the C# .NET pre-work, we're going to learn how to do exactly that by creating C# console applications. A console application is a program that is run within our terminal, or command line interface.",source:"@site/docs/c_and_net_classic/4_basic-console-apps/0a_basic_console_apps.md",sourceDirName:"c_and_net_classic/4_basic-console-apps",slug:"/c_and_net_classic/basic-console-apps/expectations_and_game_plan_for_building_a_c_console_app",permalink:"/lhtp/c_and_net_classic/basic-console-apps/expectations_and_game_plan_for_building_a_c_console_app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Expectations and Game Plan for Building a C# Console App",id:"expectations_and_game_plan_for_building_a_c_console_app",slug:"expectations_and_game_plan_for_building_a_c_console_app",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4_basic-console-apps/0a_basic_console_apps.md",paginationPrev:null},sidebar:"c_and_net_classic",previous:{title:"13. Type Casting",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/type_casting"},next:{title:"2. Hello World! Compiling and Executing C# Programs",permalink:"/lhtp/c_and_net_classic/basic-console-apps/hello_world!_compiling_and_executing_c_programs"}},s={},c=[{value:"Commonalities Between JavaScript and C#",id:"commonalities-between-javascript-and-c",level:2},{value:"The Process of Building the C# Shape Tracker",id:"the-process-of-building-the-c-shape-tracker",level:2},{value:"Testing and Debugging in the Next Pre-Work Section",id:"testing-and-debugging-in-the-next-pre-work-section",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far we've experimented with C# by typing basic code into the REPL. If we want to write entire programs, we'll need to save our code in files. Well, in this next section of the C# .NET pre-work, we're going to learn how to do exactly that by creating C# console applications. A ",(0,o.kt)("strong",{parentName:"p"},"console application")," is a program that is run within our terminal, or command line interface. "),(0,o.kt)("p",null,"For this pre-work, we're going to recreate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/section-5-shape-tracker/tree/3_multiple_business_logic_files"},"the Shape Tracker application")," that we created in the Intermediate JavaScript course as a C# console application. If you don't remember, the Shape Tracker app has a Triangle class that calculates the type of triangle given three sides, as well as a Rectangle class that calculates the area of a rectangle given two sides."),(0,o.kt)("p",null,"As we'll see, there are a lot of concepts and best practices in common between writing clean, maintainable code in JavaScript and C#. Let's review those now."),(0,o.kt)("h2",{id:"commonalities-between-javascript-and-c"},"Commonalities Between JavaScript and C#"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Separation of UI and Business Logic.")," We'll continue to separate code that deals with our business logic and code that handles our user interface logic."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Separation of Concerns.")," We'll continue to separate our code into multiple methods (and classes) that focus on one purpose, instead of doing multiple things."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Test-Driven Development.")," We'll continue to use Test-Driven Development (TDD) and the Red-Green-Refactor workflow to test our C# code. In this case, we'll use a testing framework called MSTest for C#. With JavaScript, we used Jest. This pre-work section will focus on creating console apps, and the next pre-work section will focus on TDD."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We'll use a package manager and download packages from a shared registry.")," We used node package manager (",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),") in JavaScript and downloaded libraries from ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"the npm registry"),". With C#, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," project manager and install packages from ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"the NuGet package registry"),". There are some differences between the tooling, but the basic concepts are the same."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We use a ",(0,o.kt)("inlineCode",{parentName:"strong"},".gitignore")," to manage which files are saved to our remote repos.")," We'll continue to have files that we want to ignore. These files are auto-generated project dependencies, similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/")," directory that contain all of our JavaScript project's dependencies that ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," installs for us."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We use a ",(0,o.kt)("inlineCode",{parentName:"strong"},"README.md")," to describe our applications.")," This is a standby, and crucial to get other developers to run your app and give yourself credit for the work that you've done. "),(0,o.kt)("p",null,"We'll also notice other similarities between the two languages. For example, ",(0,o.kt)("strong",{parentName:"p"},"classes and constructors")," are much the same. "),(0,o.kt)("h2",{id:"the-process-of-building-the-c-shape-tracker"},"The Process of Building the C# Shape Tracker"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When we're done creating our C# Shape Tracker, our project directory will look like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ShapeTracker.Solution/\n|_ Models/\n|   |_ Triangle.cs\n|_ Program.cs\n|_ ShapeTracker.csproj\n|_ README.md\n|_ .gitignore\n")),(0,o.kt)("p",null,"But how will we get there? We'll start with our business logic, and then move onto our user interface logic:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'We\'ll start by creating a simple "Hello World" application that has nothing to do with our Shape Tracker app. This will give us the opportunity to understand how C# compiles and executes programs.'),(0,o.kt)("li",{parentName:"ol"},"Then we'll start creating our Shape Tracker project. We'll first create the structure and learn about the namespaces in our project."),(0,o.kt)("li",{parentName:"ol"},"Then, we'll create our business logic model. We'll learn how to create custom classes, constructors, methods, properties, and more by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"Triangle")," class. In the process, we'll learn about new C# concepts."),(0,o.kt)("li",{parentName:"ol"},"Finally, we'll build out our user interface. This will handle asking the user for three lengths and tell the user what type of triangle they have.")),(0,o.kt)("p",null,"We'll end this pre-work section with a review of C# conventions, a more in depth look at compilation, and taking a look at debugging tools."),(0,o.kt)("h3",{id:"testing-and-debugging-in-the-next-pre-work-section"},"Testing and Debugging in the Next Pre-Work Section"),(0,o.kt)("p",null,"In the next pre-work section we'll learn about some debugging tools as well as how to use MSTest to write and run tests. We'll recreate our Triangle business logic following the Red-Green-Refactor workflow. This will be a combination of a refresher of Test-Driven Development concepts and learning new tools with MSTest."))}d.isMDXComponent=!0}}]);