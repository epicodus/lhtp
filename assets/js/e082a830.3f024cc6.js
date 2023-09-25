"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[40765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Creating and Using Views",id:"creating_and_using_views",slug:"creating_and_using_views",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_creating_and_using_views.md"},o=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/creating_and_using_views",id:"c_and_net_part_time/basic-web-applications/creating_and_using_views",title:"Creating and Using Views",description:"We've set up a few routes that return strings. However, that's not very helpful for building a functional site. Let's add HTML to our site by using views \u2014 the \"V\" in MVC.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0l_creating_and_using_views.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/creating_and_using_views",permalink:"/c_and_net_part_time/basic-web-applications/creating_and_using_views",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Creating and Using Views",id:"creating_and_using_views",slug:"creating_and_using_views",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_creating_and_using_views.md"},sidebar:"c_and_net_part_time",previous:{title:"Custom URL Paths",permalink:"/c_and_net_part_time/basic-web-applications/custom_url_paths"},next:{title:"Creating a Basic Model",permalink:"/c_and_net_part_time/basic-web-applications/creating_a_basic_model"}},s={},p=[{value:"View File Structure",id:"view-file-structure",level:2},{value:"Writing a View",id:"writing-a-view",level:2},{value:"Invoking Views",id:"invoking-views",level:2},{value:"Naming Convention Functionality",id:"naming-convention-functionality",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've set up a few routes that return strings. However, that's not very helpful for building a functional site. Let's add HTML to our site by using ",(0,r.kt)("strong",{parentName:"p"},"views"),' \u2014 the "V" in MVC.'),(0,r.kt)("h2",{id:"view-file-structure"},"View File Structure"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In MVC applications, views are ",(0,r.kt)("inlineCode",{parentName:"p"},".cshtml")," files instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".html")," files. ",(0,r.kt)("inlineCode",{parentName:"p"},".cshtml")," files support both plain old HTML and inline C# logic. Views always reside in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," subdirectory of the production project. If you haven't already, go ahead and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," subdirectory in ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter")," now."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," directory is further divided into subdirectories, one for each controller. We only have a ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController")," so we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," subdirectory in ",(0,r.kt)("inlineCode",{parentName:"p"},"Views"),". In ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Home")," we'll create our first view file:  ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter.cshtml"),". This name matches our ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," route exactly."),(0,r.kt)("p",null,"The resulting structure for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," should look like this:"),(0,r.kt)("pre",null,"FriendLetter.Solution \u2514\u2500\u2500 FriendLetter \u2514\u2500\u2500 Views \u2514\u2500\u2500 Home \u2514\u2500\u2500 Letter.cshtml"),(0,r.kt)("h2",{id:"writing-a-view"},"Writing a View"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's add HTML to our view:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Views/Home/Letter.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello Friend!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <meta charset=\'utf-8\'>\n  </head>\n  <body>\n    <h1>Hello From Afar</h1>\n    <p>Dear Friend,</p>\n    <p>How are you? I hope that you are having a nice weekend. I\'m vacationing in Iceland while I learn programming! </p>\n    <p>Friend, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>\n    <p>But I like programming a lot, so I\'ve got that going for me. </p>\n    <p>Looking forward to seeing you soon. I\'ll bring you back a souvenir. </p>\n    <p>Cheers,</p>\n    <p>Travel Enthusiast Jane</p>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Now we need to update our controller code for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," route to render the ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter.cshtml")," view."),(0,r.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/hello")]\n    public string Hello() { return "Hello friend!"; }\n\n    [Route("/goodbye")]\n    public string Goodbye() { return "Goodbye friend."; }\n\n    [Route("/")]\n    // Notice the changes below!\n    public ActionResult Letter() { return View(); }\n\n  }\n}\n')),(0,r.kt)("p",null,"We just made several changes to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," route:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The return type of our ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," method is now an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActionResult"),", not a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". This is a built-in MVC class that handles rendering views.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our method returns another method called ",(0,r.kt)("inlineCode",{parentName:"p"},"View()"),". This is a built-in method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Mvc")," namespace. When our route is invoked, it will return a view. "))),(0,r.kt)("h2",{id:"invoking-views"},"Invoking Views"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If we save, build and run our application, we'll see our HTML-formatted letter appear at ",(0,r.kt)("em",{parentName:"p"},"localhost:5000"),". But how does ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," know ",(0,r.kt)("em",{parentName:"p"},"which")," view in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," directory to render?"),(0,r.kt)("h3",{id:"naming-convention-functionality"},"Naming Convention Functionality"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method has built-in functionality to locate views by name. Here's how it works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because views should ",(0,r.kt)("strong",{parentName:"p"},"always")," reside in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," first locates the ",(0,r.kt)("inlineCode",{parentName:"p"},"Views")," directory in the production project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then the method looks for a subdirectory with a name that matches the controller name. Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," route is in a ",(0,r.kt)("inlineCode",{parentName:"p"},"HomeController")," so it looks for the subdirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"Home"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," directory, the method looks for a file that corresponds with the route itself. In this case, it's looking for ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()"),". Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter.cshtml")," file name matches the name of this route so the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method returns the HTML in this file."))),(0,r.kt)("p",null,"Following correct naming convention is essential here. If any of our directories or files are incorrectly named, the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method won't be able to render the right HTML."),(0,r.kt)("p",null,"Before we move on, let's discuss an important clarification in these naming conventions: ",(0,r.kt)("strong",{parentName:"p"},"the ",(0,r.kt)("inlineCode",{parentName:"strong"},"View()")," method only cares about the name of the method that invokes it.")," In the example above, the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter()")," invokes ",(0,r.kt)("inlineCode",{parentName:"p"},"View()"),", so ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," looks for ",(0,r.kt)("inlineCode",{parentName:"p"},"Letter.cshtml"),"."),(0,r.kt)("p",null,"In other words, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"View()")," does not care about the route decorator.")," The route decorator is simply a convenience so users can more easily access a route. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},".cshtml")," files should never be named based on route decorators. If they are, ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," won't be able to find them."),(0,r.kt)("p",null,"In the next lesson, we'll create our first model. Then, we'll use a markup syntax called Razor to dynamically render information from our model."))}d.isMDXComponent=!0}}]);