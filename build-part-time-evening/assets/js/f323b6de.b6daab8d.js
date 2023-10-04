"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2255],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"Using a C# REPL",id:"using-a-c-repl",slug:"using-a-c-repl",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_c_repl.md",paginationPrev:null},o=void 0,l={unversionedId:"c-and-net/data-types-variables-branching-and-looping/using-a-c-repl",id:"c-and-net/data-types-variables-branching-and-looping/using-a-c-repl",title:"Using a C# REPL",description:"We're finally ready to craft our first C# code!",source:"@site/docs/c-and-net/3_data-types-variables-branching-and-looping/0a-c-repl.md",sourceDirName:"c-and-net/3_data-types-variables-branching-and-looping",slug:"/c-and-net/data-types-variables-branching-and-looping/using-a-c-repl",permalink:"/c-and-net/data-types-variables-branching-and-looping/using-a-c-repl",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using a C# REPL",id:"using-a-c-repl",slug:"using-a-c-repl",hide_table_of_contents:!0,sidebar_position:1,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0a_c_repl.md",paginationPrev:null},sidebar:"c-and-net",previous:{title:"Documentation and Resources",permalink:"/c-and-net/getting-started-with-c/documentation-and-resources"},next:{title:"Strings, String Concatenation and Interpolation, and Chars",permalink:"/c-and-net/data-types-variables-branching-and-looping/strings-string-concatenation-and-interpolation-and-chars"}},s={},p=[{value:"The REPL",id:"the-repl",level:2},{value:"Accessing the REPL",id:"accessing-the-repl",level:3},{value:"Command Notation",id:"command-notation",level:3},{value:"Exiting the REPL",id:"exiting-the-repl",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're finally ready to craft our first C# code! "),(0,r.kt)("p",null,"This lesson will explore a tool called a ",(0,r.kt)("strong",{parentName:"p"},"REPL")," that will allow us to run C# code directly in the command line. This is similar to how we ran JavaScript code using the browser DevTools console in the Intro to Programming and Intermediate JS courses."),(0,r.kt)("p",null,"The rest of this pre-work section will focus on learning and practice C# basics: data types, variables, methods, classes, type checking, branching, operators, looping, and more! As we'll see, a lot of the concepts we learned in JavaScript will also exist in C#, just with slightly different syntax."),(0,r.kt)("h2",{id:"the-repl"},"The REPL"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The next few lessons will use a command line tool called a ",(0,r.kt)("strong",{parentName:"p"},"REPL"),". This stands for ",(0,r.kt)("strong",{parentName:"p"},"READ - EVALUATE - PRINT - LOOP"),". It works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We type in a line of code and hit enter. The REPL ",(0,r.kt)("strong",{parentName:"li"},"reads")," this code."),(0,r.kt)("li",{parentName:"ol"},"The REPL then ",(0,r.kt)("strong",{parentName:"li"},"evaluates")," the code, figuring out what it does."),(0,r.kt)("li",{parentName:"ol"},"Next it ",(0,r.kt)("strong",{parentName:"li"},"prints")," the result of running this code."),(0,r.kt)("li",{parentName:"ol"},"Finally, it ",(0,r.kt)("strong",{parentName:"li"},"loops")," back to step 1 so we can enter more code.")),(0,r.kt)("p",null,"Since we've installed ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script"),", we have a C# REPL available right in the terminal!"),(0,r.kt)("h3",{id:"accessing-the-repl"},"Accessing the REPL"),(0,r.kt)("p",null,"We can launch the REPL by opening our Terminal application (on a Mac machine) or our GitBash application (on Windows), entering the following command, then hitting ",(0,r.kt)("em",{parentName:"p"},"Enter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet-script\n")),(0,r.kt)("p",null,"Regardless of operating system, we should be met with the following:"),(0,r.kt)("pre",null,">"),(0,r.kt)("p",null,"We're now in the REPL! The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," symbol is the command prompt for ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script"),", and this is where we'll enter in all of our commands."),(0,r.kt)("h3",{id:"command-notation"},"Command Notation"),(0,r.kt)("p",null,"Before we run code, notice how the command prompt for ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," starts with the ",(0,r.kt)("inlineCode",{parentName:"p"},">")," symbol. A ",(0,r.kt)("strong",{parentName:"p"},"command prompt")," is just that, a symbol that denotes where we can enter in commands. The ",(0,r.kt)("inlineCode",{parentName:"p"},">")," is different from the standard terminal command prompt, which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Guest-User@Desktop epicodus_student $\n")),(0,r.kt)("p",null,"Yours will differ slightly, depending on what OS you are on, what your computer's user name is:"),(0,r.kt)("p",null,"Again, notice the REPL precedes the command prompt with ",(0,r.kt)("inlineCode",{parentName:"p"},">")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),", like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},">\n")),(0,r.kt)("p",null,"When our curriculum depicts commands meant to be run in the REPL, we'll precede them with ",(0,r.kt)("inlineCode",{parentName:"p"},">")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),". When you see this, you are not required to type a ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". You will only type the command listed after the ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("p",null,"If you see a command preceded with a ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),", like you did in Intro and Intermediate JS, that means the command is meant for the standard terminal."),(0,r.kt)("h3",{id:"exiting-the-repl"},"Exiting the REPL"),(0,r.kt)("p",null,"We can exit at any point by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),"."),(0,r.kt)("p",null,"Now that we understand the basics of the C# REPL, let's practice. In the next few lessons, we'll cover how to use strings, variables, numbers and methods with C#."))}u.isMDXComponent=!0}}]);