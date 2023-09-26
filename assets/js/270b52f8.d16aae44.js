"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"Using Static Content",id:"using-static-content",slug:"using-static-content",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3f_using_static_content.md"},r=void 0,s={unversionedId:"c-and-net-part-time-evening/basic-web-applications-part-2/using-static-content",id:"c-and-net-part-time-evening/basic-web-applications-part-2/using-static-content",title:"Using Static Content",description:"Up to this point, our applications have been pretty plain. In this lesson, we'll cover how to add CSS, images, and JavaScript scripts to our ASP.NET Core MVC web apps.",source:"@site/docs/c-and-net-part-time-evening/9_basic-web-applications-part-2/3f-using-static-content.md",sourceDirName:"c-and-net-part-time-evening/9_basic-web-applications-part-2",slug:"/c-and-net-part-time-evening/basic-web-applications-part-2/using-static-content",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/using-static-content",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Using Static Content",id:"using-static-content",slug:"using-static-content",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3f_using_static_content.md"},sidebar:"c-and-net-part-time-evening",previous:{title:"Objects Within Objects Interface Part 2",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/objects-within-objects-interface-part-2"},next:{title:"Layouts and Partials",permalink:"/c-and-net-part-time-evening/basic-web-applications-part-2/layouts-and-partials"}},l={},p=[{value:"Structure",id:"structure",level:2},{value:"Adding Static Content",id:"adding-static-content",level:2},{value:"Configurations for Using Static Content",id:"configurations-for-using-static-content",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Up to this point, our applications have been pretty plain. In this lesson, we'll cover how to add CSS, images, and JavaScript scripts to our ASP.NET Core MVC web apps."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When MVC apps run on a server, they use a ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder as their web root. That means only files in this special folder can be accessed with requests. If we want to include images, CSS, and other content to spruce our pages up, they must also reside in this folder. Otherwise, the GET requests our application uses won't be able to access them."),(0,i.kt)("p",null,"If we want to add a stylesheet to our project, we need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," directory at the top-level of our ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList")," production project, like this:"),(0,i.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 ToDoList \u2502   \u251c\u2500\u2500 Controllers \u2502   \u251c\u2500\u2500 Models \u2502   \u251c\u2500\u2500 Program.cs \u2502   \u251c\u2500\u2500 ToDoList.csproj \u2502   \u251c\u2500\u2500 Views \u2502   \u2514\u2500\u2500 wwwroot \u2514\u2500\u2500 ToDoList.Tests \u251c\u2500\u2500 ModelTests \u2514\u2500\u2500 ToDoList.Tests.csproj"),(0,i.kt)("p",null,"In that directory, we add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CSS")," subdirectory with a ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," file inside it. This folder will store any non-C# related files required to run your application, such as images, videos, music, stylesheets, scripts, etc."),(0,i.kt)("pre",null,"ToDoList.Solution \u251c\u2500\u2500 ToDoList \u2502   \u251c\u2500\u2500 Controllers \u2502   \u251c\u2500\u2500 Models \u2502   \u251c\u2500\u2500 Program.cs \u2502   \u251c\u2500\u2500 ToDoList.csproj \u2502   \u251c\u2500\u2500 Views \u2502   \u2514\u2500\u2500 wwwroot \u2502       \u2514\u2500\u2500 css \u2502           \u2514\u2500\u2500 styles.css \u2514\u2500\u2500 ToDoList.Tests \u251c\u2500\u2500 ModelTests \u2514\u2500\u2500 ToDoList.Tests.csproj"),(0,i.kt)("p",null,"Then we link this stylesheet with a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"<link>")," element on any views that we want to style. To reference the root folder in our ",(0,i.kt)("inlineCode",{parentName:"p"},"<link>"),", we use the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"~/"),"."),(0,i.kt)("p",null,"For example, our ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/wwwroot/CSS")," folder depicted above could be linked in a view like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" type="text/css" href="~/css/styles.css" />\n')),(0,i.kt)("h2",{id:"adding-static-content"},"Adding Static Content"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In order to see this in action, let's go over one more example of creating static pages in an MVC app. We're going to make a few new folders so we can display images on our website. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder, create an ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," folder. All images will be stored here."),(0,i.kt)("p",null,"Choose a photo from ",(0,i.kt)("a",{parentName:"p",href:"https://unsplash.com/"},"unsplash.com")," or elsewhere. Be sure to keep track of photo file names."),(0,i.kt)("p",null,"Now let\u2019s create a new route in ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeController.cs"),"."),(0,i.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [Route("/favorite_photos")]\n  public ActionResult FavoritePhotos()\n  {\n    return View();\n  }\n\n...\n')),(0,i.kt)("p",null,"Add a view named ",(0,i.kt)("inlineCode",{parentName:"p"},"FavoritePhotos"),"."),(0,i.kt)("div",{class:"filename"},"ToDoList/Views/Home/FavoritePhotos.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>My To-Do List!</title>\n      <link \n        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n        rel="stylesheet" \n        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n        crossorigin="anonymous">\n    </head>\n    <body>\n      <h1>Favorite Traveling Photos</h1>\n      <ul>\n        <li><img src=\'~/img/photo1.jpg\'/></li>\n        <li><img src=\'~/img/photo2.jpg\'/></li>\n        <li><img src=\'~/img/photo3.jpg\'/></li>\n      </ul>\n    </body>\n  </html>\n')),(0,i.kt)("p",null,"Unfortunately, if we navigate to ",(0,i.kt)("em",{parentName:"p"},"http://localhost:5000/favorite","_","photos"),", the images aren't showing. This is because our application isn't configured to use static files like images or CSS stylesheets."),(0,i.kt)("h2",{id:"configurations-for-using-static-content"},"Configurations for Using Static Content"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's update our web app host configuration to serve static files. To do this, we'll need to add a new line of code ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseStaticFiles();")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". "),(0,i.kt)("p",null,"Here's the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," of the To Do List project."),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace ToDoList\n{\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      WebApplicationBuilder builder = WebApplication.CreateBuilder(args);\n\n      builder.Services.AddControllersWithViews();\n\n      WebApplication app = builder.Build();\n\n      app.UseHttpsRedirection();\n      app.UseStaticFiles();\n      app.UseRouting();\n\n      app.MapControllerRoute(\n        name: "default",\n        pattern: "{controller=Home}/{action=Index}/{id?}"\n      );\n\n      app.Run();\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Note that the order of code matters here. ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseStaticFiles();")," needs to be before ",(0,i.kt)("inlineCode",{parentName:"p"},"app.Run();")," or the files will not load."),(0,i.kt)("p",null,"Now we can run ",(0,i.kt)("inlineCode",{parentName:"p"},"$ dotnet watch run")," to see images on our page."),(0,i.kt)("p",null,"This image route is not strictly relevant to our To Do List, so it will be removed for the purpose of the example repo. However, as long as ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," contains ",(0,i.kt)("inlineCode",{parentName:"p"},"app.UseStaticFiles();"),", you will be able to add and customize many different types of static content into your projects."),(0,i.kt)("p",null,"To learn more about serving static files and additional configurations, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-6.0"},"Microsoft Docs on Static Files")))}d.isMDXComponent=!0}}]);