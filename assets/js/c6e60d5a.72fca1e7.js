"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create with EF Core",id:"create-with-ef-core",slug:"create-with-ef-core",hide_table_of_contents:!0,sidebar_position:25,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1e_crud_with_ef_core_create_and_read.md"},i=void 0,l={unversionedId:"c-and-net-part-time/database-basics/create-with-ef-core",id:"c-and-net-part-time/database-basics/create-with-ef-core",title:"Create with EF Core",description:"In this lesson, we'll add more CRUD functionality to our To Do List using our new EF Core-powered ORM capabilities. Specifically, we'll focus on the create action here.",source:"@site/docs/c-and-net-part-time/10_database-basics/1e-crud-with-ef-core-create-and-read.md",sourceDirName:"c-and-net-part-time/10_database-basics",slug:"/c-and-net-part-time/database-basics/create-with-ef-core",permalink:"/c-and-net-part-time/database-basics/create-with-ef-core",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Create with EF Core",id:"create-with-ef-core",slug:"create-with-ef-core",hide_table_of_contents:!0,sidebar_position:25,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1e_crud_with_ef_core_create_and_read.md"},sidebar:"c-and-net-part-time",previous:{title:"Read with EF Core",permalink:"/c-and-net-part-time/database-basics/read-with-ef-core"},next:{title:"HTML Helper Methods, Lambda Expressions, and String Interpolation",permalink:"/c-and-net-part-time/database-basics/html-helper-methods-lambda-expressions-and-string-interpolation"}},s={},c=[{value:"Create",id:"create",level:2},{value:"Controller",id:"controller",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll add more CRUD functionality to our To Do List using our new EF Core-powered ORM capabilities. Specifically, we'll focus on the create action here."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creating a new item is a two-step process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We need a form to supply information about the new item."),(0,r.kt)("li",{parentName:"ol"},"We also need functionality to submit that form and save the information it contains to our database.")),(0,r.kt)("p",null,"This means we'll also need two ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," action to display our form to users.  "),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," action to manage form submission.")),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null,"Let's add these actions to our ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemsController")," now:"),(0,r.kt)("div",{class:"filename"},"ItemsController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'...\npublic ActionResult Create()\n{\n    return View();\n}\n\n[HttpPost]\npublic ActionResult Create(Item item)\n{\n    _db.Items.Add(item);\n    _db.SaveChanges();\n    return RedirectToAction("Index");\n}\n...\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Create()")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," route is used exactly the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"New()")," was before we started using Entity. You may notice that this strays from our RESTful routing practices \u2014 previously, we learned that ",(0,r.kt)("inlineCode",{parentName:"p"},"New()")," should be used for this ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request. ",(0,r.kt)("strong",{parentName:"p"},"We are now straying from our RESTful routing practices in order to make use of new tools that streamline our forms: HTML helper methods.")," We will go into depth about HTML helper methods in the next lesson.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second action is our ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request. This route will take an ",(0,r.kt)("inlineCode",{parentName:"p"},"item")," as an argument, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DbSet"),", and then save the changes to our database object. Afterwards, it will redirect users to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Index")," view."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbset-1.add?view=efcore-6.0"},(0,r.kt)("inlineCode",{parentName:"a"},"Add()")," is a ",(0,r.kt)("inlineCode",{parentName:"a"},"DbSet")," method")," we run on our ",(0,r.kt)("inlineCode",{parentName:"p"},"DBSet")," property of our ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoListContext"),", while ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext.savechanges?view=entity-framework-6.2.0"},(0,r.kt)("inlineCode",{parentName:"a"},"SaveChanges()")," is a ",(0,r.kt)("inlineCode",{parentName:"a"},"DbContext")," method")," that we run on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," itself (which extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"DbContext")," class)."),(0,r.kt)("p",null,"Together, they update the ",(0,r.kt)("inlineCode",{parentName:"p"},"DBSet")," and then sync those changes to the database which the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," represents. Once again, EF Core takes care of the work for us."),(0,r.kt)("p",null,"In the next lesson, we'll learn about HTML helper methods, which will make it much easier to create forms and simplify our HTML."))}u.isMDXComponent=!0}}]);