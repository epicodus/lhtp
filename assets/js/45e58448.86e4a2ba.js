"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Creating a Splash Page with Data from Multiple Database Tables",id:"creating_a_splash_page_with_data_from_multiple_database_tables",slug:"creating_a_splash_page_with_data_from_multiple_database_tables",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/2a_displaying_data_from_multiple_db_tables.md"},r=void 0,l={unversionedId:"c_and_net/many-to-many-relationships/creating_a_splash_page_with_data_from_multiple_database_tables",id:"c_and_net/many-to-many-relationships/creating_a_splash_page_with_data_from_multiple_database_tables",title:"Creating a Splash Page with Data from Multiple Database Tables",description:"In this lesson we're going to learn how to create a splash page that lists all of the objects saved in multiple database tables. A splash page is the first page that a user sees when they visit your site. They might contain promotions, offers, a beautiful image, or just be the homepage of your site.",source:"@site/docs/c_and_net/9_many-to-many-relationships/2a_displaying_data_from_multiple_db_tables.md",sourceDirName:"c_and_net/9_many-to-many-relationships",slug:"/c_and_net/many-to-many-relationships/creating_a_splash_page_with_data_from_multiple_database_tables",permalink:"/lhtp/c_and_net/many-to-many-relationships/creating_a_splash_page_with_data_from_multiple_database_tables",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Creating a Splash Page with Data from Multiple Database Tables",id:"creating_a_splash_page_with_data_from_multiple_database_tables",slug:"creating_a_splash_page_with_data_from_multiple_database_tables",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/9_many-to-many-relationships/2a_displaying_data_from_multiple_db_tables.md"},sidebar:"c_and_net",previous:{title:"University Registrar, Doctor's Office (Two-Day Project) - Part 2 (day 2)",permalink:"/lhtp/c_and_net/many-to-many-relationships/university_registrar_doctor's_office_two_day_project___part_2_day_2"},next:{title:"Refactoring with Many-To-Many (Two-Day Project) - Part 1",permalink:"/lhtp/c_and_net/many-to-many-relationships/refactoring_with_many_to_many_two_day_project___part_1"}},s={},p=[{value:"Updating the <code>HomeController</code>",id:"updating-the-homecontroller",level:2},{value:"Updating the <code>Home/Index.cshtml</code> View",id:"updating-the-homeindexcshtml-view",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson we're going to learn how to create a splash page that lists all of the objects saved in multiple database tables. A ",(0,o.kt)("strong",{parentName:"p"},"splash page")," is the first page that a user sees when they visit your site. They might contain promotions, offers, a beautiful image, or just be the homepage of your site. "),(0,o.kt)("p",null,"In our To Do List app, our splash page won't be that special \u2014 it'll just be our homepage as it is with two new lists, one of all categories and the other of all items. Making this update will give us the opportunity to review concepts we've already covered and to practice displaying data from multiple database tables on one page."),(0,o.kt)("p",null,"Let's get into it!"),(0,o.kt)("h2",{id:"updating-the-homecontroller"},"Updating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"HomeController")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start with updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," to connect to our database context. "),(0,o.kt)("p",null,"Here's the first update we'll make:"),(0,o.kt)("div",{class:"filename"},"Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n    public class HomeController : Controller\n    {\n      private readonly ToDoListContext _db;\n\n      public HomeController(ToDoListContext db)\n      {\n        _db = db;\n      }\n\n      ...\n\n    }\n}\n")),(0,o.kt)("p",null,"We've added a new ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," class variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"_db")," to hold our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," object, which is our connection to our MySQL database. Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," class is located within our ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList.Models")," namespace, we also add a new using directive at the top of the file: ",(0,o.kt)("inlineCode",{parentName:"p"},"using ToDoList.Models;"),"."),(0,o.kt)("p",null,"Then we create a constructor for the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," class with a ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," parameter. The argument for the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," parameter will be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," constructor via dependency injection when we run our app. This happens implicitly, which can feel like magic and make it harder to understand. The value of the argument for the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," parameter will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoListContext")," database service that we set up in ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs"),"."),(0,o.kt)("p",null,"Keep in mind that you are not expected to develop a deep understanding of dependency injection during the program. To optionally learn more about dependency injection, visit the MS Documentation article titled ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"Dependency injection in ASP.NET Core"),"."),(0,o.kt)("p",null,"Next, we'll update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," action to gather all category and item objects from the database, and pass them into the view. "),(0,o.kt)("div",{class:"filename"},"Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System.Linq;\n\nnamespace ToDoList.Controllers\n{\n  public class HomeController : Controller\n  {\n    private readonly ToDoListContext _db;\n\n    public HomeController(ToDoListContext db)\n    {\n      _db = db;\n    }\n\n    [HttpGet("/")]\n    public ActionResult Index()\n    {\n      Category[] cats = _db.Categories.ToArray();\n      Item[] items = _db.Items.ToArray();\n      Dictionary<string,object[]> model = new Dictionary<string, object[]>();\n      model.Add("categories", cats);\n      model.Add("items", items);\n      return View(model);\n    }\n  }\n}\n')),(0,o.kt)("p",null,"First take note that we add two new using directives at the top of our file: one for ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic;")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dictionary<T,T>")," class, and the other for ",(0,o.kt)("inlineCode",{parentName:"p"},"System.Linq;")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ToArray()")," method."),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," action we first access the categories table and turn it into an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," objects. Then we access the items table and turn it into an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," objects. We create an empty dictionary called ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," and add each array to the dictionary. Finally, we pass the dictionary ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," into the view with ",(0,o.kt)("inlineCode",{parentName:"p"},"return View(model);"),"."),(0,o.kt)("p",null,"Note that we could choose to create an entirely different data structure to pass the categories and items into the view. For example, we could use lists and ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewBag")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'      [HttpGet("/")]\n      public ActionResult Index()\n      {\n        List<Category> cats = _db.Categories.ToList();\n        List<Item> items = _db.Items.ToList();\n        ViewBag.categories = cats;\n        ViewBag.items = items;\n        return View();\n      }\n')),(0,o.kt)("p",null,"But we'll stick with our first method of using arrays and dictionaries!"),(0,o.kt)("p",null,"Next, let's update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml")," view to display both categories and items. "),(0,o.kt)("h2",{id:"updating-the-homeindexcshtml-view"},"Updating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Home/Index.cshtml")," View"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Here's the updated code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml")," view:"),(0,o.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models;\n\n<h1>Welcome to the To Do List!</h1>\n\n<hr />\n\n<h4>Categories</h4>\n@if (Model["categories"].Length == 0)\n{\n  <p>No categories have been added yet!</p>\n} \n<ul>\n  @foreach (Category cat in Model["categories"])\n  {\n    <li>@Html.ActionLink(@cat.Name, "Details", "Categories", new { id = @cat.CategoryId})</li>\n  }\n</ul>\n\n<h4>Items</h4>\n@if (Model["items"].Length == 0)\n{\n  <p>No items have been added yet!</p>\n} \n<ul>\n  @foreach (Item item in Model["items"])\n  {\n    <li>@Html.ActionLink(@item.Description, "Details", "Items", new { id = @item.ItemId})</li>\n  }\n</ul>\n\n<hr />\n\n<p>@Html.ActionLink("Manage items", "Index", "Items")</p> \n<p>@Html.ActionLink("Manage categories", "Index", "Categories")</p>\n<p>@Html.ActionLink("Manage tags", "Index", "Tags")</p>\n')),(0,o.kt)("p",null,"Let's work through the changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We include ",(0,o.kt)("inlineCode",{parentName:"li"},"@using ToDoList.Models;")," so we can reference the ",(0,o.kt)("inlineCode",{parentName:"li"},"Item")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Category")," types in our foreach loops."),(0,o.kt)("li",{parentName:"ul"},"For both items and categories, we include a conditional that checks if there are any of those objects, and if not, informs the user of this. This is nothing new to us! Notice that arrays don't have a ",(0,o.kt)("inlineCode",{parentName:"li"},"Count")," property, but instead a ",(0,o.kt)("inlineCode",{parentName:"li"},"Length")," property that contains the number of elements within the array.  "),(0,o.kt)("li",{parentName:"ul"},"For both items and categories, we loop through each array and make an unordered list of the objects. Each object is a direct link to the details page for that object. "),(0,o.kt)("li",{parentName:"ul"},"We've wrapped the list of categories and items with ",(0,o.kt)("inlineCode",{parentName:"li"},"<hr />")," tags to create a basic visual distinction on the page."),(0,o.kt)("li",{parentName:"ul"},"Finally, the last update we make is updating the links at the bottom of the view to display ",(0,o.kt)("inlineCode",{parentName:"li"},'"Manage..."')," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},'"View all..."'),". This change isn't strictly necessary, but I think it's a more descriptive name. As always, it's up to you to decide what makes the most sense.")),(0,o.kt)("p",null,"And with that, we're done with this mini update to our homepage! Run your app and check out the new homepage. "),(0,o.kt)("p",null,"What do you think of the update we made? Do you like it or do you think it's unnecessary? Perhaps it's too boring for a splash page? There's no one right answer, however, we always encourage you to put yourself in the shoes of your user, and to make layout and navigation decisions that improve the user's experience. "),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-4-to-do-list-with-many-to-many-csharp-net6/tree/6_data_from_multiple_db_tables"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  GitHub Repo for To Do List with EF Core Migrations and a Many-to-Many Relationship: 6","_","data","_","from","_","multiple","_","db","_","tables"))))}m.isMDXComponent=!0}}]);