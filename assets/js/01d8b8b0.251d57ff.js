"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"18. Configuration Quick Reference",id:"configuration_quick_reference",slug:"configuration_quick_reference",hide_table_of_contents:!0,sidebar_position:18,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/0q_configuration_quick_reference.md"},i=void 0,c={unversionedId:"c_and_net/basic-web-applications/configuration_quick_reference",id:"c_and_net/basic-web-applications/configuration_quick_reference",title:"18. Configuration Quick Reference",description:"Use this lesson as a quick reference for setting up project files, folders, and configuring a host for an ASP.NET Core MVC web application.",source:"@site/docs/c_and_net/7_basic-web-applications/0q_configuration_quick_reference.md",sourceDirName:"c_and_net/7_basic-web-applications",slug:"/c_and_net/basic-web-applications/configuration_quick_reference",permalink:"/lhtp/c_and_net/basic-web-applications/configuration_quick_reference",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"18. Configuration Quick Reference",id:"configuration_quick_reference",slug:"configuration_quick_reference",hide_table_of_contents:!0,sidebar_position:18,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/0q_configuration_quick_reference.md"},sidebar:"c_and_net",previous:{title:"17. Redirecting to HTTPS and Issuing a Security Certificate",permalink:"/lhtp/c_and_net/basic-web-applications/redirecting_to_https_and_issuing_a_security_certificate"},next:{title:"19. Journal #9 Prompt",permalink:"/lhtp/c_and_net/basic-web-applications/journal_9_prompt"}},l={},s=[{value:"Sample File/Folder Structure",id:"sample-filefolder-structure",level:3},{value:"Sample <code>ProjectName.csproj</code> File",id:"sample-projectnamecsproj-file",level:3},{value:"Sample <code>Program.cs</code> File",id:"sample-programcs-file",level:3},{value:"<code>launchSettings.json</code> and Starting a Server in Development Mode with a Watcher",id:"launchsettingsjson-and-starting-a-server-in-development-mode-with-a-watcher",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this lesson as a quick reference for setting up project files, folders, and configuring a host for an ASP.NET Core MVC web application."),(0,o.kt)("h3",{id:"sample-filefolder-structure"},"Sample File/Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ProjectName.Solution/\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 ProjectName/\n\u2502   \u251c\u2500\u2500 Controllers\n\u2502   \u2502   \u2514\u2500\u2500 NameController.cs\n\u2502   \u251c\u2500\u2500 Models\n\u2502   \u2502   \u2514\u2500\u2500 ClassName.cs\n\u2502   \u251c\u2500\u2500 Program.cs\n\u2502   \u251c\u2500\u2500 Properties\n\u2502   \u2502   \u2514\u2500\u2500 launchSettings.json\n\u2502   \u251c\u2500\u2500 ProjectName.csproj\n\u2502   \u2514\u2500\u2500 Views\n\u2502       \u2514\u2500\u2500 ControllerName\n\u2502           \u2514\u2500\u2500 RouteMethodName.cshtml\n\u2514\u2500\u2500 ProjectName.Tests/\n    \u251c\u2500\u2500 ModelTests\n    \u2502   \u2514\u2500\u2500 ClassNameTests.cs\n    \u2514\u2500\u2500 ProjectName.Tests.csproj\n")),(0,o.kt)("h3",{id:"sample-projectnamecsproj-file"},"Sample ",(0,o.kt)("inlineCode",{parentName:"h3"},"ProjectName.csproj")," File"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/ProjectName.csproj"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n  </PropertyGroup>\n\n</Project>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," in our .NET projects should include the following:"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/.gitignore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"obj\nbin\n")),(0,o.kt)("h3",{id:"sample-programcs-file"},"Sample ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")," File"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace ProjectName\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      // app.UseDeveloperExceptionPage();\n      app.UseHttpsRedirection();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"launchsettingsjson-and-starting-a-server-in-development-mode-with-a-watcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchSettings.json")," and Starting a Server in Development Mode with a Watcher"),(0,o.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Properties/launchSettings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "profiles": {\n    "development": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "production": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Production"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"With the above ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json")," file in place, we can run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ dotnet watch run\n")),(0,o.kt)("p",null,"And our project will automatically be run with the configurations that we've set in the first profile ",(0,o.kt)("inlineCode",{parentName:"p"},'"development"'),", which will run our project in development mode. Note that the default launch profile that is used when we run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet watch run")," is always the first profile listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," file."),(0,o.kt)("p",null,"If we want to run our project in production mode with a watcher, we can use a command line flag to specify that we want to run the ",(0,o.kt)("inlineCode",{parentName:"p"},'"production"')," profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ dotnet watch run --launch-profile "production"\n')))}d.isMDXComponent=!0}}]);