"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[88021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),c=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,u=p["".concat(r,".").concat(h)]||p[h]||m[h]||s;return n?o.createElement(u,i(i({ref:t},d),{},{components:n})):o.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const s={title:"5. More Built-In C# Classes and Tips for Using the MS Docs",id:"more_built_in_c_classes_and_tips_for_using_the_ms_docs",slug:"more_built_in_c_classes_and_tips_for_using_the_ms_docs",hide_table_of_contents:!0,sidebar_position:9,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/1e_other_csharp_classes_to_explore.md"},i=void 0,l={unversionedId:"c_and_net_classic/test-driven-development-with-c/more_built_in_c_classes_and_tips_for_using_the_ms_docs",id:"c_and_net_classic/test-driven-development-with-c/more_built_in_c_classes_and_tips_for_using_the_ms_docs",title:"5. More Built-In C# Classes and Tips for Using the MS Docs",description:"So far we've learned about a handful of common C# types, as well as the classes that underpin them. We've also learned how to call on instance and static methods and properties. In this lesson, we'll highlight a few additional built-in classes, methods, and fields/properties that have helpful functionality that you may want to implement in the projects you create in this course section. Let's get into it!",source:"@site/docs/c_and_net_classic/6_test-driven-development-with-c/1e_other_csharp_classes_to_explore.md",sourceDirName:"c_and_net_classic/6_test-driven-development-with-c",slug:"/c_and_net_classic/test-driven-development-with-c/more_built_in_c_classes_and_tips_for_using_the_ms_docs",permalink:"/lhtp/c_and_net_classic/test-driven-development-with-c/more_built_in_c_classes_and_tips_for_using_the_ms_docs",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"5. More Built-In C# Classes and Tips for Using the MS Docs",id:"more_built_in_c_classes_and_tips_for_using_the_ms_docs",slug:"more_built_in_c_classes_and_tips_for_using_the_ms_docs",hide_table_of_contents:!0,sidebar_position:9,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/6_test-driven-development-with-c/1e_other_csharp_classes_to_explore.md"},sidebar:"c_and_net_classic",previous:{title:"4. Try/Catch Blocks",permalink:"/lhtp/c_and_net_classic/test-driven-development-with-c/trycatch_blocks"},next:{title:"6. APIE: Abstraction",permalink:"/lhtp/c_and_net_classic/test-driven-development-with-c/apie_abstraction"}},r={},c=[{value:"More Built-In C# Tools to Explore",id:"more-built-in-c-tools-to-explore",level:2},{value:"<code>Console</code> and <code>ConsoleColor</code>",id:"console-and-consolecolor",level:3},{value:"<code>DateTime</code> and <code>DateOnly</code>",id:"datetime-and-dateonly",level:3},{value:"<code>TimeOnly</code> and <code>TimeZoneInfo</code>",id:"timeonly-and-timezoneinfo",level:3},{value:"<code>Math</code> and <code>MathF</code>",id:"math-and-mathf",level:3},{value:"<code>Random</code>",id:"random",level:3},{value:"Decorating Console Apps!",id:"decorating-console-apps",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So far we've learned about a handful of common C# types, as well as the classes that underpin them. We've also learned how to call on instance and static methods and properties. In this lesson, we'll highlight a few additional built-in classes, methods, and fields/properties that have helpful functionality that you may want to implement in the projects you create in this course section. Let's get into it!"),(0,a.kt)("h2",{id:"more-built-in-c-tools-to-explore"},"More Built-In C# Tools to Explore"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"While we recommend using the Microsoft (MS) docs to learn how to use new classes, you may not understand everything within them, and that's completely normal. For example, some of the code examples may use tools that you are unfamiliar with. Because of this, we also recommend searching for guides or tutorials outside of the MS docs to supplement your learning."),(0,a.kt)("p",null,"Otherwise, note that all of the following classes are located within the root ",(0,a.kt)("inlineCode",{parentName:"p"},"System")," namespace. If you want to use these classes in your project, you need to be sure to include a using directive for the ",(0,a.kt)("inlineCode",{parentName:"p"},"System")," namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\n")),(0,a.kt)("h3",{id:"console-and-consolecolor"},(0,a.kt)("inlineCode",{parentName:"h3"},"Console")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"ConsoleColor")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.console?view=net-6.0"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"Console")," class")," has other cool tools that we can use to manage the console. For example, we can clear the console with ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.Clear()"),". We can make a beep noise happen with ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.Beep()"),". "),(0,a.kt)("p",null,"We can also use properties from ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor?view=net-6.0"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"ConsoleColor")," class")," to set our Console's foreground and background colors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"> Console.BackgroundColor = ConsoleColor.White\n> Console.ForegroundColor = ConsoleColor.Black\n")),(0,a.kt)("h3",{id:"datetime-and-dateonly"},(0,a.kt)("inlineCode",{parentName:"h3"},"DateTime")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"DateOnly")),(0,a.kt)("p",null,"These two classes let us create objects to represent date and time, or just a date, and have many methods and properties that help us manage date and time in our apps. Check out these classes on the MS docs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.dateonly?view=net-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},"DateOnly")))),(0,a.kt)("h3",{id:"timeonly-and-timezoneinfo"},(0,a.kt)("inlineCode",{parentName:"h3"},"TimeOnly")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"TimeZoneInfo")),(0,a.kt)("p",null,"These two classes let us create objects that represent time and time zones. We may not have a lot of use cases for these classes in our projects in class, but it's helpful to know these exist and that they could make our lives a lot easier if and when we're working with time data. Check out these classes on the MS docs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.datetime?view=net-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.dateonly?view=net-6.0"},(0,a.kt)("inlineCode",{parentName:"a"},"DateOnly")))),(0,a.kt)("h3",{id:"math-and-mathf"},(0,a.kt)("inlineCode",{parentName:"h3"},"Math")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"MathF")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Math")," class is for math operations that return the ",(0,a.kt)("inlineCode",{parentName:"p"},"double")," type, a large decimal, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"MathF")," class is for math operations that return the ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," type, a smaller decimal. If you need mathematics in your app, start by reviewing the helpful methods and properties in these classes!"),(0,a.kt)("h3",{id:"random"},(0,a.kt)("inlineCode",{parentName:"h3"},"Random")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.random?view=net-6.0"},"The ",(0,a.kt)("inlineCode",{parentName:"a"},"Random")," class")," has methods that generate random numbers for us in a variety of number types (like ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),").  "),(0,a.kt)("h2",{id:"decorating-console-apps"},"Decorating Console Apps!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,'There\'s quite a few guides out there on ways to make our console apps look cool. "Cool" meaning animations, big ASCII titles, colors, and slowing terminal output. '),(0,a.kt)("p",null,"For example, take a look at this article from Michal Bialecki on ",(0,a.kt)("a",{parentName:"p",href:"https://www.michalbialecki.com/en/2018/05/25/how-to-make-you-console-app-look-cool/"},"How to Make your Console App Look Cool"),". Note that some of the classes used in the article live in other namespaces than ",(0,a.kt)("inlineCode",{parentName:"p"},"System"),". If you ever get an error message like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The type or namespace name 'Thread' could not be found (are you missing a using directive or an assembly reference?)\n")),(0,a.kt)("p",null,"It means the class name ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread")," is missing a using directive. We'd solve this by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"using System.Threading;")," at the top of our file. We'll get this message for any class that's missing a using directive."),(0,a.kt)("p",null,"Happy coding!"))}m.isMDXComponent=!0}}]);