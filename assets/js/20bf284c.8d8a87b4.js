"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"To Do List with MVC Forms",id:"to_do_list_with_mvc_forms",slug:"to_do_list_with_mvc_forms",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1c_to_do_list_with_mvc_forms.md"},a=void 0,s={unversionedId:"c_and_net/basic-web-applications/to_do_list_with_mvc_forms",id:"c_and_net/basic-web-applications/to_do_list_with_mvc_forms",title:"To Do List with MVC Forms",description:"In the last lesson, we successfully set up an ASP.NET Core MVC framework into a new To Do List application, and we added a basic home page. In this lesson, we'll update our application so users can create their own custom items through a form. In the next lesson, we'll explore what's happening in the HTTP request-response cycle when we use forms in our MVC applications.",source:"@site/docs/c_and_net/7_basic-web-applications/1c_to_do_list_with_mvc_forms.md",sourceDirName:"c_and_net/7_basic-web-applications",slug:"/c_and_net/basic-web-applications/to_do_list_with_mvc_forms",permalink:"/c_and_net/basic-web-applications/to_do_list_with_mvc_forms",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"To Do List with MVC Forms",id:"to_do_list_with_mvc_forms",slug:"to_do_list_with_mvc_forms",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1c_to_do_list_with_mvc_forms.md"},sidebar:"c_and_net",previous:{title:"To Do List MVC Setup",permalink:"/c_and_net/basic-web-applications/to_do_list_mvc_setup"},next:{title:"Request-Response Loop and HTTP Methods with ASP.NET Core MVC",permalink:"/c_and_net/basic-web-applications/request_response_loop_and_http_methods_with_aspnet_core_mvc"}},l={},p=[{value:"Creating New <code>Item</code>s",id:"creating-new-items",level:2},{value:"New Item Form",id:"new-item-form",level:3},{value:"New Item Route",id:"new-item-route",level:3},{value:"Create New <code>Item</code> Route",id:"create-new-item-route",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we successfully set up an ASP.NET Core MVC framework into a new To Do List application, and we added a basic home page. In this lesson, we'll update our application so users can create their own custom items through a form. In the next lesson, we'll explore what's happening in the HTTP request-response cycle when we use forms in our MVC applications."),(0,r.kt)("h2",{id:"creating-new-items"},"Creating New ",(0,r.kt)("inlineCode",{parentName:"h2"},"Item"),"s"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, we'll offer users an option to create new list ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s. We'll add a link to the bottom of our existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," homepage:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Views/Home/Index.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'...\n<a href="/items/new">Add a new item.</a>\n')),(0,r.kt)("p",null,"This link will navigate to a ",(0,r.kt)("inlineCode",{parentName:"p"},"/items/new")," route where users can create new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s using a form."),(0,r.kt)("h3",{id:"new-item-form"},"New Item Form"),(0,r.kt)("p",null,"Next, we'll create a view for our form. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm.cshtml")," file in the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Views/Home")," directory."),(0,r.kt)("div",{class:"filename"},"Views/Home/CreateForm.cshtml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n  </head>\n  <body>\n    <form action="/items" method="post">\n      <label for="description">Add a new item</label>\n      <input id="description" name="description" type="text">\n      <button type="submit">Submit</button>\n    </form>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"A few important things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," tag includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"action='/items'")," attribute. This means our form will route to ",(0,r.kt)("inlineCode",{parentName:"p"},"'/items'")," in our controller.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The form also includes a ",(0,r.kt)("inlineCode",{parentName:"p"},'method="post"')," attribute. ",(0,r.kt)("strong",{parentName:"p"},"When a form is being used to create a new object, it must have a post method"),". This creates a special type of HTTP request called a ",(0,r.kt)("strong",{parentName:"p"},"POST request"),". We'll discuss this more in the next lesson.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We also have a field of type ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," so users can add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". Remember that ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"name")," is required")," and should accurately describe the input we're retrieving from users. Here we set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remember that the ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," element's ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," attribute must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"'submit'"),". If it isn't, the form won't trigger the correct route in the controller."))),(0,r.kt)("h3",{id:"new-item-route"},"New Item Route"),(0,r.kt)("p",null,"Next, let's create the corresponding route to render our new form:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/")]\n    public ActionResult Index()\n    {\n      Item starterItem = new Item("Add first item to To Do List");\n      return View(starterItem);\n    }\n\n    [Route("/items/new")]\n    public ActionResult CreateForm()\n    {\n      return View();\n    }\n\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We create a new route at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/items/new"),". Users clicking on the link from ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," will invoke this route.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The route simply returns ",(0,r.kt)("inlineCode",{parentName:"p"},"View()"),". Because our form resides in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm.cshtml"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateForm()")," route method will automatically render this view."))),(0,r.kt)("h3",{id:"create-new-item-route"},"Create New ",(0,r.kt)("inlineCode",{parentName:"h3"},"Item")," Route"),(0,r.kt)("p",null,"Now we must tell our controller what to do when the user submits our form. Let's create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()"),"route method and use a route decorator to set its path to ",(0,r.kt)("inlineCode",{parentName:"p"},"/items"),":"),(0,r.kt)("div",{class:"filename"},"ToDoList/Controllers/HomeController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    [Route("/")]\n    public ActionResult Index()\n    {\n      Item starterItem = new Item("Add first item to To Do List");\n      return View(starterItem);\n    }\n\n    [Route("/items/new")]\n    public ActionResult CreateForm()\n    {\n      return View();\n    }\n\n    [Route("/items")]\n    public ActionResult Create(string description)\n    {\n      Item myItem = new Item(description);\n      return View("Index", myItem);\n    }\n\n  }\n}\n')),(0,r.kt)("p",null,"The route decorator ",(0,r.kt)("inlineCode",{parentName:"p"},'"/items"')," matches our form's action. When a form is submitted, this route will be invoked. The route method takes a single ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),". This matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute of our form's single field."),(0,r.kt)("p",null,"Next, we create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," from the form. And finally, we specify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method should take two arguments. This is a bit different from how we've used the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method before. The ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method is using overloaded constructors under the hood, which means we can pass in varying numbers of arguments depending on the needs of our application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first argument specifies the view that should be returned. This is new functionality we haven't covered before. In this case, we tell the ",(0,r.kt)("inlineCode",{parentName:"p"},"View()")," method to return the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Index"')," view. We have to do this because we are no longer routing to a view with the same exact name as our route method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The second argument specifies what the ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," property on the view should be."))),(0,r.kt)("p",null,"We don't need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Create.cshtml")," view to correspond with our ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," route because we are reusing ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.cshtml"),". This helps keep our code DRY and allows us to be very specific when we build our routes. This route is only concerned with creating new items. There's no need to have another route as well."),(0,r.kt)("p",null,"If we build and run our application, we can now add a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," to our To Do List."))}u.isMDXComponent=!0}}]);