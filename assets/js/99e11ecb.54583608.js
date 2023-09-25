"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14279],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,_=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?i.createElement(_,o(o({ref:n},p),{},{components:t})):i.createElement(_,o({ref:n},p))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={title:"9. Building and Running an ASP.NET Core MVC Web App",id:"building_and_running_an_aspnet_core_mvc_web_app",slug:"building_and_running_an_aspnet_core_mvc_web_app",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0i_building_and_running_a_asp_net_core_mvc_web_application.md"},o=void 0,l={unversionedId:"c_and_net_part_time_evening/basic-web-applications/building_and_running_an_aspnet_core_mvc_web_app",id:"c_and_net_part_time_evening/basic-web-applications/building_and_running_an_aspnet_core_mvc_web_app",title:"9. Building and Running an ASP.NET Core MVC Web App",description:'This lesson will cover building, compiling, and launching ASP.NET Core MVC projects so we can run our "Friend Letter" application in the browser.',source:"@site/docs/c_and_net_part_time_evening/8_basic-web-applications/0i_building_and_running_a_asp_net_core_mvc_web_application.md",sourceDirName:"c_and_net_part_time_evening/8_basic-web-applications",slug:"/c_and_net_part_time_evening/basic-web-applications/building_and_running_an_aspnet_core_mvc_web_app",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/building_and_running_an_aspnet_core_mvc_web_app",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"9. Building and Running an ASP.NET Core MVC Web App",id:"building_and_running_an_aspnet_core_mvc_web_app",slug:"building_and_running_an_aspnet_core_mvc_web_app",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0i_building_and_running_a_asp_net_core_mvc_web_application.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"8. Constructing and Configuring an ASP.NET Core MVC Web App",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/constructing_and_configuring_an_aspnet_core_mvc_web_app"},next:{title:"10. Introduction to Controllers, Routes and URLs",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications/introduction_to_controllers_routes_and_urls"}},s={},c=[{value:"Building and Running ASP.NET Core MVC Applications",id:"building-and-running-aspnet-core-mvc-applications",level:2},{value:"MSBuild",id:"msbuild",level:3},{value:"Building",id:"building",level:3},{value:"Running",id:"running",level:3},{value:"Using a Watcher",id:"using-a-watcher",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'This lesson will cover building, compiling, and launching ASP.NET Core MVC projects so we can run our "Friend Letter" application in the browser.'),(0,r.kt)("h2",{id:"building-and-running-aspnet-core-mvc-applications"},"Building and Running ASP.NET Core MVC Applications"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Our ASP.NET Core MVC projects are a combination of pre-existing code and custom code we write ourselves. This is the point of a framework:  it provides pre-made reusable functionality for commonly-used tasks like rendering webpages in a browser that developers can utilize to more quickly scaffold projects."),(0,r.kt)("p",null,"So far, we've only added framework code. Next, we'll use part of the .NET framework called ",(0,r.kt)("strong",{parentName:"p"},"MSBuild")," to compile and build our own custom code, as well as the framework's code."),(0,r.kt)("h3",{id:"msbuild"},"MSBuild"),(0,r.kt)("p",null,"MSBuild is also known as ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Build Engine")," or ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Build Tools"),'. It turns code in a project directory into a cohesive application by toggling settings, customizing how packages are introduced into the rest of the codebase, and more. We call this process "building" the project.'),(0,r.kt)("p",null,"If the code or project is the combination of raw ingredients, MSBuild is the oven where our ingredients become a fully-fledged meal. There's no need to worry about the technical specifics of MSBuild quite yet, but if you're curious, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild?view=vs-2017"},(0,r.kt)("em",{parentName:"a"},"MSBuild")," section of the Microsoft documentation"),"."),(0,r.kt)("h3",{id:"building"},"Building"),(0,r.kt)("p",null,"Let's use MSBuild to build our project. We'll start by running ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet restore")," in our ",(0,r.kt)("em",{parentName:"p"},"FriendLetter.Solution/FriendLetter")," directory to invoke NuGet to install project dependencies."),(0,r.kt)("p",null,"To run MSBuild, we'll run this command from the same directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet build\n")),(0,r.kt)("h3",{id:"running"},"Running"),(0,r.kt)("p",null,"Now let's try running our project in the browser. We'll run the following command in our ",(0,r.kt)("em",{parentName:"p"},"FriendLetter.Solution/FriendLetter")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet run\n")),(0,r.kt)("p",null,"After running this command, we'll see a response like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet run\ninfo: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[63]\n      User profile is available. Using 'C:\\Users\\staff\\AppData\\Local\\ASP.NET\\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.\ninfo: Microsoft.Hosting.Lifetime[14]\n      Now listening on: http://localhost:5000\ninfo: Microsoft.Hosting.Lifetime[14]\n      Now listening on: https://localhost:5001\ninfo: Microsoft.Hosting.Lifetime[0]\n      Application started. Press Ctrl+C to shut down.\ninfo: Microsoft.Hosting.Lifetime[0]\n      Hosting environment: Production\ninfo: Microsoft.Hosting.Lifetime[0]\n      Content root path: C:\\Users\\staff\\Desktop\\net6\\csharp-friend-letter-dotnet-5\\FriendLetter\\\n")),(0,r.kt)("p",null,"Note the line ",(0,r.kt)("inlineCode",{parentName:"p"},"Now listening on: http://localhost:5000"),". Let's type ",(0,r.kt)("em",{parentName:"p"},"localhost:5000")," into our browser's URL bar. Well, we just get an error message. That's because we don't actually have any webpages built yet!"),(0,r.kt)("p",null,"And while it may not seem like much, but we've still successfully configured, built, and launched our first ASP.NET Core MVC application. Up next, we'll"),(0,r.kt)("h2",{id:"using-a-watcher"},"Using a Watcher"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When we make changes to a .NET application, these changes won't immediately be apparent in the browser. In order to show our updated application in the browser, we need to cycle the server."),(0,r.kt)("p",null,"There are two ways to do this. This is the more painful way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure updated code is saved in your code editor."),(0,r.kt)("li",{parentName:"ul"},"Navigate to the server window in the terminal and type in ",(0,r.kt)("em",{parentName:"li"},"Ctrl + C"),". This quits the server."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"dotnet run")," and navigate back to ",(0,r.kt)("em",{parentName:"li"},"localhost:5000"),".")),(0,r.kt)("p",null,"While this process works, it becomes very tedious to restart the server every time we make a change to our code."),(0,r.kt)("p",null,"Instead, it makes more sense to use a file watcher. A ",(0,r.kt)("strong",{parentName:"p"},"file watcher")," watches for changes and then automatically updates the server for us. There's no need to restart the server at all. To use a watcher we use the following command when we want to run the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet watch run\n")),(0,r.kt)("p",null,"Now every time we make a change, our server will automatically update. "),(0,r.kt)("p",null,"Note, however, a few cases in which you'll need to restart the server manually:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When add or delete files or change the directory structure in any way."),(0,r.kt)("li",{parentName:"ul"},"When you change the contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},".csproj")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," files.")),(0,r.kt)("p",null,"To learn more about watchers and the types of files we can watch, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch?view=aspnetcore-6.0"},"documentation"),"."))}d.isMDXComponent=!0}}]);