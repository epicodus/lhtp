"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15317],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={title:"Optional Features of C# Versions 9 and 10",id:"optional-features-of-c-versions-9-and-10",slug:"optional-features-of-c-versions-9-and-10",hide_table_of_contents:!0,sidebar_position:9,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4d_net_6_and_c_sharp_10_features.md"},i=void 0,s={unversionedId:"c-and-net/basic-web-applications-part-2/optional-features-of-c-versions-9-and-10",id:"c-and-net/basic-web-applications-part-2/optional-features-of-c-versions-9-and-10",title:"Optional Features of C# Versions 9 and 10",description:"With every new version of C# and .NET, new features are released. That's to be expected! What you may not expect is that we don't cover or use the majority of these features in the LearnHowToProgram.com curriculum. That leaves learning about new features for further exploration for your shared or independent projects.",source:"@site/docs/c-and-net/9_basic-web-applications-part-2/4d-net-6-and-c-sharp-10-features.md",sourceDirName:"c-and-net/9_basic-web-applications-part-2",slug:"/c-and-net/basic-web-applications-part-2/optional-features-of-c-versions-9-and-10",permalink:"/c-and-net/basic-web-applications-part-2/optional-features-of-c-versions-9-and-10",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Optional Features of C# Versions 9 and 10",id:"optional-features-of-c-versions-9-and-10",slug:"optional-features-of-c-versions-9-and-10",hide_table_of_contents:!0,sidebar_position:9,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/4d_net_6_and_c_sharp_10_features.md"},sidebar:"c-and-net",previous:{title:"To Do List, CD Organizer, Go Fish, Word Puzzle - Part 1",permalink:"/c-and-net/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-1"},next:{title:"To Do List, CD Organizer, Go Fish, Word Puzzle - Part 2 (day 2)",permalink:"/c-and-net/basic-web-applications-part-2/to-do-list-cd-organizer-go-fish-word-puzzle---part-2-day-2"}},l={},p=[{value:"File Scoped Namespaces",id:"file-scoped-namespaces",level:2},{value:"Implicit Using Directives",id:"implicit-using-directives",level:2},{value:"Top Level Statements, Or Omitting the <code>Main()</code> Method",id:"top-level-statements-or-omitting-the-main-method",level:2},{value:"What Else?",id:"what-else",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With every new version of C# and .NET, new features are released. That's to be expected! What you may not expect is that we don't cover or use the majority of these features in the LearnHowToProgram.com curriculum. That leaves learning about new features for further exploration for your shared or independent projects. "),(0,o.kt)("p",null,"In this lesson, we're going to cover three more noticeable syntax updates with recent versions of C# that allow us to write less code. We'll also share resources that you can use to peruse more tools. "),(0,o.kt)("p",null,"Note that .NET releases a new version every year, and a new long-term support version every two years, so expect new tools to become available regularly. To learn more about the Microsoft product support and lifecycle for .NET, visit ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core"},"this documentation"),". "),(0,o.kt)("h2",{id:"file-scoped-namespaces"},"File Scoped Namespaces"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Starting in C# version 10, we can write namespaces as a statement instead of nesting a code (classes) within a namespace. For example, this means that we can rewrite our ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," to include ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace ToDoList;"),", as a statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace ToDoList;\n\nclass Program\n{\n  static void Main(string[] args)\n  {\n    WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n    builder.Services.AddControllersWithViews();\n\n    WebApplication app = builder.Build();\n\n    app.UseHttpsRedirection();\n\n    app.UseRouting();\n\n    app.MapControllerRoute(\n      name: "default",\n      pattern: "{controller=Home}/{action=Index}/{id?}"\n    );\n\n    app.Run();\n  }\n}\n')),(0,o.kt)("p",null,"Note that if a file has multiple classes in it, the namespace statement will apply to all classes. This means that we cannot use namespace statements when a single file has multiple namespaces in it. "),(0,o.kt)("p",null,"To learn more visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace"},"Microsoft (MS) Documentation on namespaces in C#"),"."),(0,o.kt)("h2",{id:"implicit-using-directives"},"Implicit Using Directives"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Also starting in C# version 10, we can now configure our app to implicitly include using directives. Remember using directives import specific resources or libraries into a file so we can use its types. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," as an example that means we can omit these using directives:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n")),(0,o.kt)("p",null,"From the ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'namespace ToDoList;\n\nclass Program\n{\n  static void Main(string[] args)\n  {\n    WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n    builder.Services.AddControllersWithViews();\n\n    WebApplication app = builder.Build();\n\n    app.UseHttpsRedirection();\n\n    app.UseRouting();\n\n    app.MapControllerRoute(\n      name: "default",\n      pattern: "{controller=Home}/{action=Index}/{id?}"\n    );\n\n    app.Run();\n  }\n}\n')),(0,o.kt)("p",null,"Pretty neat! There's one more step, though: we need to configure our application to use implicit using directives. To do this open up your project's ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"<ImplicitUsings>enable</ImplicitUsings>")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"<PropertyGroup>")," tags. Let's use our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList.csproj")," as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <ImplicitUsings>enable</ImplicitUsings>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,"We won't enable implicit using directives on any example project in LearnHowToProgram.com, because it's good practice to understand how C# and .NET loads resources and organizes types. However, you are welcome to enable implicit using directives in your own projects."),(0,o.kt)("p",null,"Note that it's also possible to list global using directives that are applied to an entire project. To learn more about implicit and global using directives, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/project-sdk/overview#implicit-using-directives"},"MS documentation on implicit using directives")," (which also includes global using directives). "),(0,o.kt)("h2",{id:"top-level-statements-or-omitting-the-main-method"},"Top Level Statements, Or Omitting the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Main()")," Method"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Top Level Statements was introduced with C# version 9, and it makes it so developers can omit declaring the namespace, class, and method for the main program. The main program is always defined by a ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method, and typically resides in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Omitting the explicit declaration of the namespace, class, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method means that we can write statements at the top level of our application. "),(0,o.kt)("p",null,"As an example, let's continue to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),' in our ASP.NET Core MVC app "To Do List", and see how it changes with top level statements:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllersWithViews();\n\nWebApplication app = builder.Build();\n\napp.UseHttpsRedirection();\n\napp.UseRouting();\n\napp.MapControllerRoute(\n  name: "default",\n  pattern: "{controller=Home}/{action=Index}/{id?}"\n);\n\napp.Run();\n')),(0,o.kt)("p",null,"Note that in the above example, we're also using implicit using directives. "),(0,o.kt)("p",null,"As we can see, all of our statements that build, configure, and run our web app host are at the top level of ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Now our code is much more streamlined, and we're avoiding having to write the boilerplate code that we're familiar with (IE: the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()")," method and its class). "),(0,o.kt)("p",null,"Note that we do not have to name our the entry point file of our program ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),". However, for top level statements to work, we can only use it in one file. This includes console applications as well as ASP.NET Core applications."),(0,o.kt)("p",null,"Finally, note that top level statements don't require additional configuration to use as long as you are working with .NET versions 5 and C# versions 9 and up. That said, you should be using currently supported versions, and .NET 5 is no longer supported."),(0,o.kt)("p",null,"To learn more about top level statements visit ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/top-level-statements"},"the MS Documentation on top level statements"),"."),(0,o.kt)("h2",{id:"what-else"},"What Else?"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Note that we won't be implementing any of the aforementioned features from C# versions 9 and 10. However, we highly encourage you to explore them as well as other new features. To learn more about features released with C# version 10 (which was released with .NET 6), check out this blog ",(0,o.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/"},'"Welcome to C# 10"'),". To review an exhaustive resource on new features and breaking changes for multiple versions of C#, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/"},'MS Documentation called "what\'s New in C#"'),". "),(0,o.kt)("p",null,"Happy exploring!"))}d.isMDXComponent=!0}}]);