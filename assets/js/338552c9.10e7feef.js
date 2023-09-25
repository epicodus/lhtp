"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[99282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(h,r(r({ref:n},c),{},{components:t})):o.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const a={title:"Debugging Views and Configuring a Development Environment with launchSettings.json",id:"debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",slug:"debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",hide_table_of_contents:!0,sidebar_position:16,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0p_debugging_views.md"},r=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",id:"c_and_net_part_time/basic-web-applications/debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",title:"Debugging Views and Configuring a Development Environment with launchSettings.json",description:"Sometimes we have written a good program that compiles nicely. We build the project, run the server, and navigate to our app. At some point while navigating through our pages, we get an error and a page isn't returned. This generally results in a 500 server error message in the browser. (We'll cover server messages later.) Unfortunately, this vague message isn't helpful for debugging our code.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0p_debugging_views.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Debugging Views and Configuring a Development Environment with launchSettings.json",id:"debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",slug:"debugging_views_and_configuring_a_development_environment_with_launchsettingsjson",hide_table_of_contents:!0,sidebar_position:16,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0p_debugging_views.md"},sidebar:"c_and_net_part_time",previous:{title:"Using Forms with MVC",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/using_forms_with_mvc"},next:{title:"Redirecting to HTTPS and Issuing a Security Certificate",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/redirecting_to_https_and_issuing_a_security_certificate"}},s={},p=[{value:"Manually Configure <code>Program.cs</code>",id:"manually-configure-programcs",level:2},{value:"Run App in Development Mode",id:"run-app-in-development-mode",level:2},{value:"Configure a <code>launchSettings.json</code> File",id:"configure-a-launchsettingsjson-file",level:3},{value:"<code>launchSettings.json</code> and Starting a Server in Development Mode with a Watcher",id:"launchsettingsjson-and-starting-a-server-in-development-mode-with-a-watcher",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes we have written a good program that compiles nicely. We build the project, run the server, and navigate to our app. At some point while navigating through our pages, we get an error and a page isn't returned. This generally results in a 500 server error message in the browser. (We'll cover server messages later.) Unfortunately, this vague message isn't helpful for debugging our code."),(0,i.kt)("p",null,"Well, we can configure our ASP.NET Core app to run a service called ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/error-handling?view=aspnetcore-6.0#developer-exception-page"},"Developer Exception Page")," that provides a more detailed error message when a webpage fails to load due to a server error. To get a sense of what these exception pages look like, check out the image below which shows an error in the Friend Letter project. On the left is the generic message from the browser, and on the right is the developer exception page that highlights the exact line of code that's throwing an error. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Week+two/error-messages-aspnetcore.png",alt:"A generic error message is pictured on the left and an error message via Developer Exception Pages is pictured on the right."})),(0,i.kt)("p",null,"As the image shows, having access to the detailed error messages in Developer Exception Pages is clearly an important tool for debugging. "),(0,i.kt)("p",null,'Note that there are a few ways to enable Developer Exception Pages. We\'ll cover three in this lesson to get a sense of how ASP.NET Core apps can be configured. In the process, we\'ll learn how ASP.NET Core apps come with built-in configurations for different environments, like "development" or "production". However, we\'ll stick with one tool in the end, which is using a ',(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," to run our apps in development mode, which automatically enables Developer Exception Pages. "),(0,i.kt)("h2",{id:"manually-configure-programcs"},"Manually Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"Program.cs")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can configure our ASP.NET Core app to use Developer Exception Pages by updating ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," with a new line of code: ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseDeveloperExceptionPage();"),". To see exactly where to place this line of code, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," from the Friend Letter application as an example:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace FriendLetter\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      // new code!\n      app.UseDeveloperExceptionPage();\n\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Notice that we place ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseDeveloperExceptionPage();")," right below the line of code that creates our ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication")," host ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),". You can do the same in any ASP.NET Core application."),(0,i.kt)("p",null,"The issue with this method is that we're enabling Developer Exception Pages all of the time, whether we're still developing our app or ready to deploy it in production. Well, we don't want Developer Exception Pages in production, because they take a fair amount of resources to run and can slow down our app. This means we only want to enable Developer Exception Pages during development, when we're actually writing and debugging code."),(0,i.kt)("p",null,'Because code is optimized in different ways for production versus development, ASP.NET Core provides many tools to manage how our app should run in these two environments (and a third called "staging" that we won\'t get into).'),(0,i.kt)("p",null,"As part of the version 6 release, all ASP.NET Core applications now come with a default configuration for Developer Exception Pages to automatically be enabled in development mode. That means all we need to do is learn how to start our projects in development mode. Let's do that next."),(0,i.kt)("h2",{id:"run-app-in-development-mode"},"Run App in Development Mode"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Without configuration, when we run our applications with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),', they automatically are run in "production" mode, which includes the code, resources, and optimizations for our web apps to be hosted online and available for public use.'),(0,i.kt)("p",null,"To run our application in development mode, we simply need to add a flag to our ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet run --environment Development\n")),(0,i.kt)("p",null,"When we do this, we'll see our environment confirmed in the terminal output. Notice ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hosting environment: Development"')," in the output below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet run --environment Development\ninfo: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[63]\n      User profile is available. Using 'C:\\Users\\staff\\AppData\\Local\\ASP.NET\\DataProtection-Keys' as key repository and Windows DPAPI to encrypt keys at rest.\ninfo: Microsoft.Hosting.Lifetime[14]\n      Now listening on: http://localhost:5000\ninfo: Microsoft.Hosting.Lifetime[14]\n      Now listening on: https://localhost:5001\ninfo: Microsoft.Hosting.Lifetime[0]\n      Application started. Press Ctrl+C to shut down.\ninfo: Microsoft.Hosting.Lifetime[0]\n      Hosting environment: Development\ninfo: Microsoft.Hosting.Lifetime[0]\n      Content root path: C:\\Users\\staff\\Desktop\\net6\\csharp-friend-letter-dotnet-5\\FriendLetter\\\n")),(0,i.kt)("h3",{id:"configure-a-launchsettingsjson-file"},"Configure a ",(0,i.kt)("inlineCode",{parentName:"h3"},"launchSettings.json")," File"),(0,i.kt)("p",null,"However, there's an even better option for us than adding the command line flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--environment Development")," to run our apps in development mode: we can create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," that contains information about what environment we want our project to be run. Let's start by creating this file and adding in the configurations. "),(0,i.kt)("p",null,"Within the project's production directory, add the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new directory called ",(0,i.kt)("inlineCode",{parentName:"li"},"Properties")),(0,i.kt)("li",{parentName:"ul"},"Within ",(0,i.kt)("inlineCode",{parentName:"li"},"Properties")," add a new file called ",(0,i.kt)("inlineCode",{parentName:"li"},"launchSettings.json"))),(0,i.kt)("h3",{id:"launchsettingsjson-and-starting-a-server-in-development-mode-with-a-watcher"},(0,i.kt)("inlineCode",{parentName:"h3"},"launchSettings.json")," and Starting a Server in Development Mode with a Watcher"),(0,i.kt)("div",{class:"filename"},"ProjectName.Solution/ProjectName/Properties/launchSettings.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "profiles": {\n    "development": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development"\n      }\n    },\n    "production": {\n      "commandName": "Project",\n      "dotnetRunMessages": true,\n      "launchBrowser": true,\n      "applicationUrl": "https://localhost:5001;http://localhost:5000",\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Production"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Within ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," we've created two launch ",(0,i.kt)("inlineCode",{parentName:"p"},'"profiles"'),", that is, two different configurations with which we can launch our web app host. "),(0,i.kt)("p",null,"The first profile is called ",(0,i.kt)("inlineCode",{parentName:"p"},'"development"')," and the other is called ",(0,i.kt)("inlineCode",{parentName:"p"},'"production"'),". We can name our profiles whatever we like. "),(0,i.kt)("p",null,"Note that the first profile listed within the ",(0,i.kt)("inlineCode",{parentName:"p"},'"profiles"')," key becomes the default profile that is used when we run ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),". Since the ",(0,i.kt)("inlineCode",{parentName:"p"},'"development"')," profile comes first, our site will be launched in development mode when we run our project with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),". "),(0,i.kt)("p",null,"To run the ",(0,i.kt)("inlineCode",{parentName:"p"},'"production"')," profile (or any other that is not the default), we'll need to specify it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'dotnet watch run --launch-profile "production"\n')),(0,i.kt)("p",null,"Notice that the configurations for both profiles are the same, except for the value of the environment variable: one is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"Development"')," and the other is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"Production"'),". When we run our app in development or production mode, we're primarily making use of the default configurations that ASP.NET Core sets for these two modes; like enabling Developer Exception Pages when our app is run in development mode. "),(0,i.kt)("p",null,"Let's learn what each configuration does:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"commandName": "Project"')," configures our project to use the Kestrel server. We could instead use a different server, but we do not have a reason to do that."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"dotnetRunMessages": true')," configures our host to deliver us informative messages in the console about our project when it is run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"launchBrowser": true')," will not only run the web app host, but open our browser to the default application URL. The default for this settings is false, so if we want to have this feature turned on, we must do so via a ",(0,i.kt)("inlineCode",{parentName:"li"},"launchSettings.json")," profile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"applicationUrl": "https://localhost:5001;http://localhost:5000"')," sets our application's port. We can change ",(0,i.kt)("inlineCode",{parentName:"li"},"5001")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"5000")," to something else, though we may get conflicts. For example, if we change our port to ",(0,i.kt)("inlineCode",{parentName:"li"},"3306"),", the same port number that our MySQL server runs on, we'll get an error when we run our app: ",(0,i.kt)("inlineCode",{parentName:"li"},"Unhandled exception. System.IO.IOException: Failed to bind to address https://localhost:3306.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"environmentVariables"')," sets the environment variables for our project. We only set one variable, which is a value for ",(0,i.kt)("inlineCode",{parentName:"li"},'"ASPNETCORE_ENVIRONMENT"'),' to set which mode or "environment" we want our app to be run in. In our case, ',(0,i.kt)("inlineCode",{parentName:"li"},'"ASPNETCORE_ENVIRONMENT"')," is set to either ",(0,i.kt)("inlineCode",{parentName:"li"},'"Production"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"Development"'),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Going forward, we'll use a ",(0,i.kt)("inlineCode",{parentName:"strong"},"Properties/launchSettings.json")," file in all of our ASP.NET Core projects. Because of this, take note of a few important usage notes:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The contents of the ",(0,i.kt)("inlineCode",{parentName:"li"},"launchSettings.json")," file will be the same in all of our ASP.NET Core projects in LearnHowToProgram.com."),(0,i.kt)("li",{parentName:"ul"},"You are welcome to configure the settings in ",(0,i.kt)("inlineCode",{parentName:"li"},"launchSettings.json")," as you see fit, or just use the default configurations provided above. "),(0,i.kt)("li",{parentName:"ul"},"According to the MS Docs ",(0,i.kt)("inlineCode",{parentName:"li"},"launchSettings.json")," is only used on the local development machine and should not be deployed. In other words, it's for development only.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"ASP.NET Core provides many tools to manage how our apps should run in different environments, like production and development. When we run our application in development mode, Developer Exception Pages are enabled by default such that we do not need to include ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseDeveloperExceptionPage();")," within ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),"."),(0,i.kt)("p",null,"Intentionally running your app in development or production mode is standard practice, and better than enabling Developer Exception Pages as a default within ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". So, we recommend running your application in development mode by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"development"')," profile. We recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSetting.json")," file provided in this lesson, and we'll use it in all example ASP.NET Core projects. With a ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," in place, we can run our application in development mode by running ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet watch run"),"."),(0,i.kt)("p",null,"To optionally learn more about about environments and configuring them through ",(0,i.kt)("inlineCode",{parentName:"p"},"launchSettings.json"),", visit the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-6.0"},"MS Docs on Using Multiple Environments in ASP.NET Core.")))}d.isMDXComponent=!0}}]);