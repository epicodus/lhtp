"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"2. Scaffolding a .NET Application with dotnet new",id:"scaffolding_a_net_application_with_dotnet_new",slug:"scaffolding_a_net_application_with_dotnet_new",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0b_dotnet_new.md"},l=void 0,r={unversionedId:"c_and_net/building-an-api/scaffolding_a_net_application_with_dotnet_new",id:"c_and_net/building-an-api/scaffolding_a_net_application_with_dotnet_new",title:"2. Scaffolding a .NET Application with dotnet new",description:"In this lesson, we'll learn more about the .NET 6.0 CLI and build an ASP.NET Core API project with the dotnet new command. Later, we'll build an ASP.NET Core MVC project using the dotnet new command.",source:"@site/docs/c_and_net/11_building-an-api/0b_dotnet_new.md",sourceDirName:"c_and_net/11_building-an-api",slug:"/c_and_net/building-an-api/scaffolding_a_net_application_with_dotnet_new",permalink:"/lhtp/c_and_net/building-an-api/scaffolding_a_net_application_with_dotnet_new",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Scaffolding a .NET Application with dotnet new",id:"scaffolding_a_net_application_with_dotnet_new",slug:"scaffolding_a_net_application_with_dotnet_new",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0b_dotnet_new.md"},sidebar:"c_and_net",previous:{title:"1. Building an API Objectives",permalink:"/lhtp/c_and_net/building-an-api/building_an_api_objectives"},next:{title:"3. Exploring the dotnet new Web API Template",permalink:"/lhtp/c_and_net/building-an-api/exploring_the_dotnet_new_web_api_template"}},s={},p=[{value:"The CLI",id:"the-cli",level:2},{value:"The <code>dotnet new</code> Templates Use New C# Features",id:"the-dotnet-new-templates-use-new-c-features",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn more about the ",(0,o.kt)("strong",{parentName:"p"},".NET 6.0 CLI")," and build an ASP.NET Core API project with the ",(0,o.kt)("strong",{parentName:"p"},"dotnet new")," command. Later, we'll build an ASP.NET Core MVC project using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command."),(0,o.kt)("h2",{id:"the-cli"},"The CLI"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A CLI is a command line interface, which means we can use it to execute commands in the terminal. We've already been doing this with commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet build")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run"),". However, we can also use the .NET Core CLI to quickly scaffold code for our projects with the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command. You may have already tried this out for the API console and MVC projects we built in the last course section."),(0,o.kt)("p",null,"We can see what ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," can offer with the following command: ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new --list"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Template Name       Short Name           Language    Tags\n------------------  -------------------  ----------  --------------------------\nTemplate Name                                 Short Name           Language    Tags\n--------------------------------------------  -------------------  ----------  --------------------------\nASP.NET Core Empty                            web                  [C#],F#     Web/Empty\nASP.NET Core gRPC Service                     grpc                 [C#]        Web/gRPC\nASP.NET Core Web API                          webapi               [C#],F#     Web/WebAPI\nASP.NET Core Web App                          webapp,razor         [C#]        Web/MVC/Razor Pages\nASP.NET Core Web App (Model-View-Controller)  mvc                  [C#],F#     Web/MVC\nASP.NET Core with Angular                     angular              [C#]        Web/MVC/SPA\nASP.NET Core with React.js                    react                [C#]        Web/MVC/SPA\nBlazor Server App                             blazorserver         [C#]        Web/Blazor\nBlazor WebAssembly App                        blazorwasm           [C#]        Web/Blazor/WebAssembly/PWA\nClass Library                                 classlib             [C#],F#,VB  Common/Library\nConsole App                                   console              [C#],F#,VB  Common/Console\ndotnet gitignore file                         gitignore                        Config\nDotnet local tool manifest file               tool-manifest                    Config\nEditorConfig file                             editorconfig                     Config\nglobal.json file                              globaljson                       Config\nMSTest Test Project                           mstest               [C#],F#,VB  Test/MSTest\nMVC ViewImports                               viewimports          [C#]        Web/ASP.NET\nMVC ViewStart                                 viewstart            [C#]        Web/ASP.NET\nNuGet Config                                  nugetconfig                      Config\nNUnit 3 Test Item                             nunit-test           [C#],F#,VB  Test/NUnit\nNUnit 3 Test Project                          nunit                [C#],F#,VB  Test/NUnit\nProtocol Buffer File                          proto                            Web/gRPC\nRazor Class Library                           razorclasslib        [C#]        Web/Razor/Library\nRazor Component                               razorcomponent       [C#]        Web/ASP.NET\nRazor Page                                    page                 [C#]        Web/ASP.NET\nSolution File                                 sln,solution                     Solution\nWeb Config                                    webconfig                        Config\nWindows Forms App                             winforms             [C#],VB     Common/WinForms\nWindows Forms Class Library                   winformslib          [C#],VB     Common/WinForms\nWindows Forms Control Library                 winformscontrollib   [C#],VB     Common/WinForms\nWorker Service                                worker               [C#],F#     Common/Worker/Web\nWPF Application                               wpf                  [C#],VB     Common/WPF\nWPF Class Library                             wpflib               [C#],VB     Common/WPF\nWPF Custom Control Library                    wpfcustomcontrollib  [C#],VB     Common/WPF\nWPF User Control Library                      wpfusercontrollib    [C#],VB     Common/WPF\nxUnit Test Project                            xunit                [C#],F#,VB  Test/xUnit\n")),(0,o.kt)("p",null,"All of these templates can be used to build fully scaffolded .NET applications. Here are some examples of using ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dotnet new mvc --auth Individual -o TestMvcApp --framework net6.0")," will create a files for an ASP.NET Core MVC project with authentication using Identity, all compatible with .NET version 6, and put them in a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"TestMvcApp/"),". ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that the templates for authentication with Identity come with different configurations than the projects we built in the last section. For example, Identity is configured to use a SQLite database. To learn how to work with the template for authentication with Identity and all of the default configurations, ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=netcore-cli"},"work through this guide"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dotnet new console -o AddressBook --framework net6.0")," will create files for a .NET 6 console app in a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"AddressBook/"),". ")),(0,o.kt)("p",null,"These commands are great in that they handle a lot of the boilerplate code and necessary packages while still allowing for configuration."),(0,o.kt)("p",null,'We can optionally learn more about different options (also called "flags") that we can include in our ',(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command to configure the projects we scaffold. When we run the following command, we'll learn about different ways we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet new --help\n")),(0,o.kt)("p",null,"When we run the following command, we'll learn about different flags we can include to configure an ASP.NET Core MVC app: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet new mvc --help\n")),(0,o.kt)("p",null,"The same information we get in the command line can also be found in ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new"},"the online docs for ",(0,o.kt)("inlineCode",{parentName:"a"},"dotnet new")),"."),(0,o.kt)("h3",{id:"the-dotnet-new-templates-use-new-c-features"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"dotnet new")," Templates Use New C# Features"),(0,o.kt)("p",null,"It's important for us to be aware that the .NET 6 templates make use of newer features that we haven't spent a lot of time working with so far:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#global-and-implicit-usings"},"Implicit using directives")," adds common using directives globally to our project for the type of project we are building. This lets us omit listing certain namespaces, as they are implicitly added to our project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/top-level-statements"},"Top level statements")," let us avoid including the boilerplate for our project's entry point: a static ",(0,o.kt)("inlineCode",{parentName:"li"},"Main()")," method within a static ",(0,o.kt)("inlineCode",{parentName:"li"},"Program")," class. (Note: the class name can be something other than ",(0,o.kt)("inlineCode",{parentName:"li"},"Program"),".) Instead, we can begin writing code directly at the top level of the entry point file, ",(0,o.kt)("inlineCode",{parentName:"li"},"Program.cs"),". (Note: here, too, the file could be named something other than ",(0,o.kt)("inlineCode",{parentName:"li"},"Program.cs"),".)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#file-scoped-namespaces"},"File-scoped namespaces")," allow us to avoid additional nesting and indentation by listing the namespace for a file as a statement at the top of the file. This only works when there's a single namespace for a single file."),(0,o.kt)("li",{parentName:"ul"},"Nullable types are enabled project-wide via the ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," file and the ",(0,o.kt)("inlineCode",{parentName:"li"},"<Nullable>Enable</Nullable>")," setting. The advantage of enabling nullable types is that we can get warning messages that help us avoid ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.nullreferenceexception?view=net-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"System.NullReferenceError")),", when a type in our project is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," and we are attempting to access a member (property) of that type. To learn how to work with nullable types, visit the following documentation and LearnHowToProgram.com lesson:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start with the LearnHowToProgram.com lesson on ",(0,o.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/c-and-net/test-driven-development-with-c/nullable-types"},"Nullable Types"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.nullreferenceexception?view=net-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"System.NullReferenceError"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types"},"Nullable Value Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types"},"Nullable Reference Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/nullable-migration-strategies"},"How to migrate an application to use nullable types."))))),(0,o.kt)("p",null,"You can opt out of all of the above features, if you want. To opt out of implicit using directives and a globally enabled nullable context, you must update your ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file."),(0,o.kt)("p",null,"In the next lesson, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," command to create an API project. Then we'll modify that project to host an API of our own."))}d.isMDXComponent=!0}}]);