"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"2. The Previous Hosting Model versus the New Minimal Hosting Model",id:"the_previous_hosting_model_versus_the_new_minimal_hosting_model",slug:"the_previous_hosting_model_versus_the_new_minimal_hosting_model",hide_table_of_contents:!0,sidebar_position:11,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_basic-web-applications-part-2/4d_the_old_hosting_model.md"},r=void 0,s={unversionedId:"c_and_net_part_time_evening/basic-web-applications-part-2/the_previous_hosting_model_versus_the_new_minimal_hosting_model",id:"c_and_net_part_time_evening/basic-web-applications-part-2/the_previous_hosting_model_versus_the_new_minimal_hosting_model",title:"2. The Previous Hosting Model versus the New Minimal Hosting Model",description:"With the release of .NET 6, a new Minimal Hosting Model was introduced to create, configure, and run a host for our ASP.NET Core web apps. A hosting model is the way we create the host for our web apps, and a host includes all of the application's resources and configurations needed to run as a web app in a browser. We create our web app host in Program.cs, and whether or not you knew it, we've been using the Minimal Hosting Model this whole time.",source:"@site/docs/c_and_net_part_time_evening/9_basic-web-applications-part-2/4d_the_old_hosting_model.md",sourceDirName:"c_and_net_part_time_evening/9_basic-web-applications-part-2",slug:"/c_and_net_part_time_evening/basic-web-applications-part-2/the_previous_hosting_model_versus_the_new_minimal_hosting_model",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications-part-2/the_previous_hosting_model_versus_the_new_minimal_hosting_model",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"2. The Previous Hosting Model versus the New Minimal Hosting Model",id:"the_previous_hosting_model_versus_the_new_minimal_hosting_model",slug:"the_previous_hosting_model_versus_the_new_minimal_hosting_model",hide_table_of_contents:!0,sidebar_position:11,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_basic-web-applications-part-2/4d_the_old_hosting_model.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"1. To Do List, CD Organizer, Go Fish, Word Puzzle - Part 2 (day 2)",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications-part-2/to_do_list_cd_organizer_go_fish_word_puzzle___part_2_day_2"},next:{title:"1. To Do List, CD Organizer, Go Fish, Word Puzzle - Part 3 (day 3)",permalink:"/lhtp/c_and_net_part_time_evening/basic-web-applications-part-2/to_do_list_cd_organizer_go_fish_word_puzzle___part_3_day_3"}},l={},p=[{value:"Two Files to Build a Host: <code>Program.cs</code> and <code>Startup.cs</code>",id:"two-files-to-build-a-host-programcs-and-startupcs",level:2},{value:"Why Make the Change?",id:"why-make-the-change",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With the release of .NET 6, a new ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60?view=aspnetcore-6.0&tabs=visual-studio-code#nhm"},"Minimal Hosting Model")," was introduced to create, configure, and run a host for our ASP.NET Core web apps. A ",(0,i.kt)("strong",{parentName:"p"},"hosting model")," is the way we create the host for our web apps, and a ",(0,i.kt)("strong",{parentName:"p"},"host")," includes all of the application's resources and configurations needed to run as a web app in a browser. We create our web app host in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),", and whether or not you knew it, we've been using the Minimal Hosting Model this whole time. "),(0,i.kt)("p",null,"While Microsoft recommends that ASP.NET Core developers use the Minimal Hosting Model, it's not required, and there are many resources and websites that continue to use the previous hosting model (used with .NET 5 and earlier versions). In fact, when new technology comes out, adoption is usually very slow because it is costly and time-intensive for companies to upgrade. All of this is to say that you will likely work with the previous hosting model if you pursue a career in development with C# and ASP.NET Core. "),(0,i.kt)("p",null,"For all of these reasons, it's important for us to become familiar with how web hosts were built prior to the Minimal Hosting Model, and that's exactly what we'll do in this lesson!"),(0,i.kt)("h2",{id:"two-files-to-build-a-host-programcs-and-startupcs"},"Two Files to Build a Host: ",(0,i.kt)("inlineCode",{parentName:"h2"},"Program.cs")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"Startup.cs")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"There's a lot of highly technical details about the differences between the previous hosting model and the Minimal Hosting model, which we won't get into. We'll just focus on the core concepts. And since we're already familiar with the Minimal Hosting Model, we'll just focus on what the previous hosting model looks like. "),(0,i.kt)("p",null,"A core concept to cover is that building and configuring a host happens across two files in the previous hosting model: ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," handles building the host, while ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," handles configuring the host. "),(0,i.kt)("p",null,"First, let's take a look at what ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," looks like with the previous hosting model. We'll use the ToDoList's ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," as an example."),(0,i.kt)("div",{class:"filename"},"ToDoList/Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using System.IO;\nusing Microsoft.AspNetCore.Hosting;\n\nnamespace ToDoList\n{\n  public class Program\n  {\n    public static void Main(string[] args)\n    {\n      var host = new WebHostBuilder()\n        .UseKestrel()\n        .UseContentRoot(Directory.GetCurrentDirectory())\n        .UseIISIntegration()\n        .UseStartup<Startup>()\n        .Build();\n\n      host.Run();\n    }\n  }\n}\n")),(0,i.kt)("p",null,"In the above code, we build a web host: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We define that we want to use the Kestrel and IIS web servers."),(0,i.kt)("li",{parentName:"ul"},"We locate the root of the directory."),(0,i.kt)("li",{parentName:"ul"},"We specify that we want to further configure our application with a ",(0,i.kt)("inlineCode",{parentName:"li"},"Startup.cs")," file.")),(0,i.kt)("p",null,"The above code is considered boilerplate that doesn't get changed, and if so, rarely. Because of this, in the new Minimal Hosting Model, the ASP.NET Core team decided to do almost all of the above steps implicitly with one line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"//  This is from the Minimal Hosting Model\nWebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n")),(0,i.kt)("p",null,"The process of creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"builder")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication.CreateBuilder(args);")," sets up the Kestrel and IIS web servers, locates the root of the directory, and sets up some additional basic default configurations that we won't get into. "),(0,i.kt)("p",null,"The only thing ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplication.CreateBuilder(args);")," does not do is to configure our application's services and request handling. That's something that developers should always define for their application. In the previous hosting model, ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," is used to further configure the host and services, so let's look at ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," next. Some of the code will be familiar!"),(0,i.kt)("div",{class:"filename"},"ToDoList/Startup.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace ToDoList\n{\n  public class Startup\n  {\n    public Startup(IWebHostEnvironment env)\n    {\n      var builder = new ConfigurationBuilder()\n          .SetBasePath(env.ContentRootPath)\n          .AddEnvironmentVariables();\n      Configuration = builder.Build();\n    }\n\n    public IConfigurationRoot Configuration { get; }\n\n    public void ConfigureServices(IServiceCollection services)\n    {\n      services.AddControllersWithViews();\n    }\n\n    public void Configure(IApplicationBuilder app)\n    {\n      app.UseDeveloperExceptionPage();\n      app.UseHttpsRedirection();\n      app.UseRouting();\n\n      app.UseEndpoints(routes =>\n      {\n        routes.MapControllerRoute("default", "{controller=Home}/{action=Index}/{id?}");\n      });\n\n      app.UseStaticFiles();\n      \n      app.Run(async (context) =>\n      {\n        await context.Response.WriteAsync("Hello World!");\n      });\n    }\n  }\n}\n')),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs"),", we do a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We define a constructor and a property ",(0,i.kt)("inlineCode",{parentName:"li"},"Configuration"),". The constructor creates a configuration object for our web app host, which handles loading environment variables and the likes. For example, we might load a ",(0,i.kt)("inlineCode",{parentName:"li"},".json")," file that contains a username and password to access a database."),(0,i.kt)("li",{parentName:"ul"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," method that allows us to add services to the web app host. In the Minimal Hosting Model, if we want to add services, we would access the ",(0,i.kt)("inlineCode",{parentName:"li"},"WebApplicationBuilder")," object's ",(0,i.kt)("inlineCode",{parentName:"li"},"Services")," property, like ",(0,i.kt)("inlineCode",{parentName:"li"},"builder.Services.AddControllersWithViews();"),"."),(0,i.kt)("li",{parentName:"ul"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"Configure")," method that allows us to configure how requests (from the user to view a webpage) are handled. We do the same thing in the Minimal Hosting Model, except we call these methods on the ",(0,i.kt)("inlineCode",{parentName:"li"},"WebApplication")," host that we call ",(0,i.kt)("inlineCode",{parentName:"li"},"app"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't worry about remembering the details of the above information.")," If you ever find yourself working on a project that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file, there's a host of online information (including this lesson) that will get you oriented as far as how these files work in tandem and how your web app host is getting built and configured."),(0,i.kt)("p",null,"The main ",(0,i.kt)("strong",{parentName:"p"},"learning goal")," for this lesson is for you to understand that ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," is a web app host configuration file that some projects still use along with ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),', and that there\'s a new hosting model called the "Minimal Hosting Model" that only uses one configuration file, ',(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". We use the Minimal Hosting Model in the LearnHowToProgram.com curriculum."),(0,i.kt)("p",null,"To read more about the Minimal Hosting Model, visit ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/migration/50-to-60?view=aspnetcore-6.0&tabs=visual-studio-code#new-hosting-model"},"the Microsoft Documentation on the Minimal Hosting Model")),(0,i.kt)("h2",{id:"why-make-the-change"},"Why Make the Change?"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"So, why bother removing ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup.cs")," in the new Minimal Hosting Model? The developer team for ASP.NET Core decided to move to the new Minimal Hosting Model to abstract boilerplate code and make the process of setting up a web host more intuitive to new developers. A core part of achieving that goal was to streamline setup into one file. "),(0,i.kt)("p",null,"However, there's plenty of developers who do not like the new Minimal Hosting Model and don't think it is intuitive. It's unclear if Microsoft will make the Minimal Hosting Model required to use in future versions of ASP.NET Core, but it is possible. For now, everyone gets to decide whether or not to use the new Minimal Hosting Model, including you! That said, in the coursework in LearnHowToProgram.com, we'll continue to use the Minimal Hosting Model."))}u.isMDXComponent=!0}}]);