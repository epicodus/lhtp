"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"14. Dynamic Views with Razor Markup Syntax",id:"dynamic_views_with_razor_markup_syntax",slug:"dynamic_views_with_razor_markup_syntax",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0n_dynamic_views_with_razor_view_engine.md"},o=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/dynamic_views_with_razor_markup_syntax",id:"c_and_net_part_time/basic-web-applications/dynamic_views_with_razor_markup_syntax",title:"14. Dynamic Views with Razor Markup Syntax",description:"So far, our views have only used basic HTML. In this lesson, we'll explore how to add logic to our views using the model we created in the last lesson with the Razor markup syntax.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0n_dynamic_views_with_razor_view_engine.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/dynamic_views_with_razor_markup_syntax",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/dynamic_views_with_razor_markup_syntax",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"14. Dynamic Views with Razor Markup Syntax",id:"dynamic_views_with_razor_markup_syntax",slug:"dynamic_views_with_razor_markup_syntax",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0n_dynamic_views_with_razor_view_engine.md"},sidebar:"c_and_net_part_time",previous:{title:"13. Creating a Basic Model",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/creating_a_basic_model"},next:{title:"15. Using Forms with MVC",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/using_forms_with_mvc"}},s={},p=[{value:"Dynamic View Data with Razor",id:"dynamic-view-data-with-razor",level:2},{value:"Razor Syntax",id:"razor-syntax",level:3},{value:"Updating a Controller to Use a Model",id:"updating-a-controller-to-use-a-model",level:3},{value:"Adding a Sender",id:"adding-a-sender",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far, our views have only used basic HTML. In this lesson, we'll explore how to add logic to our views using the model we created in the last lesson with the ",(0,i.kt)("strong",{parentName:"p"},"Razor markup syntax"),"."),(0,i.kt)("p",null,"Let's personalize the greeting in our virtual postcard application so that our application renders specific names instead of just ",(0,i.kt)("em",{parentName:"p"},"Dear Friend"),"."),(0,i.kt)("h2",{id:"dynamic-view-data-with-razor"},"Dynamic View Data with Razor"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To do this, we'll use ",(0,i.kt)("strong",{parentName:"p"},"Razor"),", a markup syntax that allows us to add C# logic to views. It's already built into the MVC framework so we don't have to install anything special."),(0,i.kt)("p",null,"We can update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Letter.cshtml")," view to use Razor syntax like this:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Views/Home/Letter.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello Friend!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <meta charset=\'utf-8\'>\n  </head>\n  <body>\n    <h1>Hello From Afar</h1>\n    <p>Dear @Model.Recipient,</p> \n    <p>How are you? I hope that you are having a nice weekend. I\'m vacationing in Iceland while I learn programming! </p>\n    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>\n    <p>But I like programming a lot, so I\'ve got that going for me. </p>\n    <p>Looking forward to seeing you soon. I\'ll bring you back a souvenir. </p>\n    <p>Cheers,</p>\n    <p>Travel Enthusiast Jane</p>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"We've replaced two instances of the term ",(0,i.kt)("em",{parentName:"p"},"friend")," with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"@Model.Recipient\n")),(0,i.kt)("h3",{id:"razor-syntax"},"Razor Syntax"),(0,i.kt)("p",null,"Let's break down this Razor syntax further:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," character indicates the start of Razor code. Razor will evaluate anything following this symbol.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Model")," is a property that Razor provides so we can access the model that's passed into the view. We haven't passed in a model into the view yet, but we will soon. In this case, we'll be passing in an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable")," class that we created in the last lesson. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since we're passing in a ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable")," object into the view as Razor's ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," property, that means we can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipient")," property. This will let us put a unique name in the view instead of the more generic ",(0,i.kt)("em",{parentName:"p"},"friend"),"."))),(0,i.kt)("h3",{id:"updating-a-controller-to-use-a-model"},"Updating a Controller to Use a Model"),(0,i.kt)("p",null,"Next, we need to make our ",(0,i.kt)("inlineCode",{parentName:"p"},"FriendLetter")," model available to our controller:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using FriendLetter.Models;\n\n...\n")),(0,i.kt)("p",null,"We'll update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Letter()")," route to create a new instance of our ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable")," class and provide it to the view:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  public class HomeController : Controller\n  {\n    ...\n\n    [Route("/")]\n    public ActionResult Letter()\n    {\n      LetterVariable myLetterVariable = new LetterVariable();\n      myLetterVariable.Recipient = "Lina";\n      return View(myLetterVariable);\n    }\n  }\n...\n')),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Letter()")," route creates a new instance of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable")," and saves it to the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"myLetterVariable"),". We then access the the ",(0,i.kt)("inlineCode",{parentName:"p"},"myLetterVariable.Recipient")," property and give it a value. Finally, we pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"myLetterVariable")," into the view. This ensures our corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Letter.cshtml")," view now has access to our ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariable")," object."),(0,i.kt)("p",null,"Our application is using what's called ",(0,i.kt)("strong",{parentName:"p"},"model binding")," to pass data from one part of an application to another. Because instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"@Model")," in the view represent the argument we've passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"View()")," method, ",(0,i.kt)("inlineCode",{parentName:"p"},"@Model.Recipient")," is the same as calling ",(0,i.kt)("inlineCode",{parentName:"p"},"myLetterVariable.Recipient"),"."),(0,i.kt)("p",null,"If we restart the server and visit ",(0,i.kt)("em",{parentName:"p"},"http://localhost:5000"),", we'll see the name ",(0,i.kt)("inlineCode",{parentName:"p"},'"Lina"')," is now rendered in our view in two locations."),(0,i.kt)("p",null,"With this code in place, we can easily change the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipient")," again. We just need to update ",(0,i.kt)("inlineCode",{parentName:"p"},'myLetterVariable.Recipient = "Lina";')," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeController"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"Letter()")," method."),(0,i.kt)("h3",{id:"adding-a-sender"},"Adding a Sender"),(0,i.kt)("p",null,"Now let's update our application to allow any ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," to create a letter to their friends. To accommodate this, we'll need to make the sender of the letter dynamic, just like the recipient. We can easily do this by adding another property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"LetterVariables")," model class:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Models/LetterVariable.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace FriendLetter.Models\n{\n  public class LetterVariable\n  {\n    public string Recipient { get; set; }\n    public string Sender { get; set; }\n\n    ...\n...\n")),(0,i.kt)("p",null,"Here we've simply added a ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," property to our existing class."),(0,i.kt)("p",null,"Now we'll make a quick update to our route method:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [Route("/")]\n    public ActionResult Letter()\n    {\n      LetterVariable myLetterVariable = new LetterVariable();\n      myLetterVariable.Recipient = "Lina";\n      myLetterVariable.Sender = "Jasmine";\n      return View(myLetterVariable);\n    }\n\n...\n')),(0,i.kt)("p",null,"Finally, we'll add a dynamic ",(0,i.kt)("inlineCode",{parentName:"p"},"@Model.Sender")," variable to our existing view:"),(0,i.kt)("div",{class:"filename"},"FriendLetter/Views/Home/Letter.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello Friend!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <meta charset=\'utf-8\'>\n  </head>\n  <body>\n    <h1>Hello From Afar</h1>\n    <p>Dear @Model.Recipient,</p>\n    <p>How are you? I hope that you are having a nice weekend. I\'m vacationing in Iceland while I learn programming! </p>\n    <p>@Model.Recipient, you would not believe how cold it is here. I should have gone to Hawaii instead.</p>\n    <p>But I like programming a lot, so I\'ve got that going for me. </p>\n    <p>Looking forward to seeing you soon. I\'ll bring you back a souvenir. </p>\n    <p>Cheers,</p>\n    <p>Travel Enthusiast @Model.Sender</p>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"Now when we restart the server and reload the page, we'll see that both the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," are dynamically added to the HTML."))}m.isMDXComponent=!0}}]);