"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"4. Read with EF Core",id:"read_with_ef_core",slug:"read_with_ef_core",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/1d_ef_core_with_an_existing_database.md"},r=void 0,s={unversionedId:"c_and_net_classic/database-basics/read_with_ef_core",id:"c_and_net_classic/database-basics/read_with_ef_core",title:"4. Read with EF Core",description:"In this lesson, we'll begin refactoring our existing To Do List models and controllers, learning how to retrieve and display information from a database using EF Core in the process. We'll also start using the Microsoft LINQ library, which gives us access to a simple syntax for querying lists or databases.",source:"@site/docs/c_and_net_classic/8_database-basics/1d_ef_core_with_an_existing_database.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/read_with_ef_core",permalink:"/lhtp/c_and_net_classic/database-basics/read_with_ef_core",draft:!1,tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"4. Read with EF Core",id:"read_with_ef_core",slug:"read_with_ef_core",hide_table_of_contents:!0,sidebar_position:24,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_database-basics/1d_ef_core_with_an_existing_database.md"},sidebar:"c_and_net_classic",previous:{title:"3. Configuration for Entity Framework Core",permalink:"/lhtp/c_and_net_classic/database-basics/configuration_for_entity_framework_core"},next:{title:"5. Create with EF Core",permalink:"/lhtp/c_and_net_classic/database-basics/create_with_ef_core"}},l={},d=[{value:"READ",id:"read",level:2},{value:"Updating the Item Model",id:"updating-the-item-model",level:3},{value:"Updating the Controllers",id:"updating-the-controllers",level:3},{value:"Language-Integrated Queries (LINQ)",id:"language-integrated-queries-linq",level:3},{value:"Updating Views",id:"updating-views",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll begin refactoring our existing To Do List models and controllers, learning how to retrieve and display information from a database using EF Core in the process. We'll also start using the Microsoft ",(0,o.kt)("strong",{parentName:"p"},"LINQ")," library, which gives us access to a simple syntax for querying lists or databases."),(0,o.kt)("h2",{id:"read"},"READ"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updating-the-item-model"},"Updating the Item Model"),(0,o.kt)("p",null,"With EF Core, we no longer need to write verbose custom methods to query a database, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Find()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Save()"),". Instead, we use simple built-in methods, which we'll call from the controller. That means our first step is to delete all of the custom methods in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," class. When we've done that, our ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," class should look like this:"),(0,o.kt)("div",{class:"filename"},"Models/Item.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n  public class Item\n  {\n    public int ItemId { get; set; }\n    public string Description { get; set; }\n  }\n}\n")),(0,o.kt)("h3",{id:"updating-the-controllers"},"Updating the Controllers"),(0,o.kt)("p",null,"Next, we need to update our controllers to manage our To Do List entries. Let's comment out all of the content of our ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoriesController.cs")," and begin refactoring ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController"),"."),(0,o.kt)("p",null,"Let's replace all of the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," with the following:"),(0,o.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System.Linq;\n\nnamespace ToDoList.Controllers\n{\n  public class ItemsController : Controller\n  {\n    private readonly ToDoListContext _db;\n\n    public ItemsController(ToDoListContext db)\n    {\n      _db = db;\n    }\n\n    public ActionResult Index()\n    {\n      List<Item> model = _db.Items.ToList();\n      return View(model);\n    }\n  }\n}\n")),(0,o.kt)("p",null,"We've added some new code here, including a property, a constructor, and an ",(0,o.kt)("inlineCode",{parentName:"p"},"Index")," route."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," directive for ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Linq"),". This will allow us to use ",(0,o.kt)("strong",{parentName:"p"},"LINQ"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"ToList()")," method, which we'll cover in a moment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The line ",(0,o.kt)("inlineCode",{parentName:"p"},"private readonly ToDoListContext _db;")," declares a ",(0,o.kt)("inlineCode",{parentName:"p"},"private")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly")," field of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext"),". This property will hold our database connection as a ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," type.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the constructor, we set the value of our new ",(0,o.kt)("inlineCode",{parentName:"p"},"_db")," property to our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext db"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext db")," parameter is passed an argument through dependency injection when our web application host is built. The argument that gets passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," constructor is the exact ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," that we set up as a service in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"))),(0,o.kt)("div",{class:"filename"},"Program.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'... // omitted code\n\nbuilder.Services.AddDbContext<ToDoListContext>(\n                  dbContextOptions => dbContextOptions\n                    .UseMySql(\n                      builder.Configuration["ConnectionStrings:DefaultConnection"], ServerVersion.AutoDetect(builder.Configuration["ConnectionStrings:DefaultConnection"]\n                    )\n                  )\n                );\n\n... // more code omitted\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finally, instead of using a verbose ",(0,o.kt)("inlineCode",{parentName:"li"},"GetAll()")," method with raw SQL, we can instead access all our ",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),"s in ",(0,o.kt)("inlineCode",{parentName:"li"},"List")," form by doing the following: ",(0,o.kt)("inlineCode",{parentName:"li"},"_db.Items.ToList()"),". That's exactly what we do in our ",(0,o.kt)("inlineCode",{parentName:"li"},"Index()")," action method. ")),(0,o.kt)("p",null,"Next, let's understand exactly what we're doing with  ",(0,o.kt)("inlineCode",{parentName:"p"},"_db.Items.ToList()"),", which uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"LINQ")," method to query our database."),(0,o.kt)("h3",{id:"language-integrated-queries-linq"},"Language-Integrated Queries (LINQ)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LINQ")," is short for ",(0,o.kt)("strong",{parentName:"p"},"Language-Integrated Query"),". It's a form of standard data interpretation. We'll use LINQ to grab values from our dataset and display them in our views."),(0,o.kt)("p",null,"In the above example, our dataset is ",(0,o.kt)("inlineCode",{parentName:"p"},"_db.Items"),". However, we can't actually use a dataset as our model for our view. To get around this, we run the LINQ method ",(0,o.kt)("inlineCode",{parentName:"p"},"ToList()")," on our data set. This generates a list with elements of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," data type. In other words, LINQ translates the dataset into C# types: a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s that we can use in the view."),(0,o.kt)("p",null,"Let's walk through how this works by breaking down the line ",(0,o.kt)("inlineCode",{parentName:"p"},"_db.Items.ToList()")," further:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"db")," is an instance of our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," class. It's holding a reference to our database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once there, it looks for an object named ",(0,o.kt)("inlineCode",{parentName:"p"},"Items"),". This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"DbSet")," we declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LINQ turns this ",(0,o.kt)("inlineCode",{parentName:"p"},"DbSet")," into a list using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToList()")," method, which comes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Linq")," namespace.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The whole expression ",(0,o.kt)("inlineCode",{parentName:"p"},"_db.Items.ToList()")," is what creates the model we'll use for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index")," view."))),(0,o.kt)("p",null,"There's a lot to learn about LINQ and how EF Core uses it to query our database. To learn more, visit ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/querying/"},"this article on querying with EF Core"),"."),(0,o.kt)("p",null,"To learn about other method we can use to query our database, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-6.0#methods"},"MS Docs on the ",(0,o.kt)("inlineCode",{parentName:"a"},"System.Linq.Enumerable")," class methods"),". We'll learn about other LINQ methods as we continue to refactor our To Do List app to use EF Core."),(0,o.kt)("h3",{id:"updating-views"},"Updating Views"),(0,o.kt)("p",null,"Since we will be restructuring our models to account for our database, let's go ahead and remove all of the views in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Items")," directory and remove the ",(0,o.kt)("strong",{parentName:"p"},"entire")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Categories")," directory."),(0,o.kt)("p",null,"Let's create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," view in our now empty ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Items")," directory to see if our database query is properly working:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models;\n\n<h1>Items</h1>\n\n@if (@Model.Count == 0)\n{\n  <h3>No items have been added yet!</h3>\n} \n\n@foreach (Item item in Model)\n{\n  <li>@item.Description</li>\n}\n')),(0,o.kt)("p",null,"We can now start the server. Ignore the links in the homepage and instead navigate to ",(0,o.kt)("em",{parentName:"p"},"localhost:5000/Items")," by explicitly typing in the URL in the address bar. Since our database is newly created, we shouldn't have any items in it, and we should see the \"No items have been added yet!\" notice. We'll introduce functionality to add entries to our database in the next lesson."))}u.isMDXComponent=!0}}]);