"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[10183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"5. Objects Within Objects Interface Part 2",id:"objects_within_objects_interface_part_2",slug:"objects_within_objects_interface_part_2",hide_table_of_contents:!0,sidebar_position:39,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/3e_objects_within_objects_interface_part_2_advanced_restful_routing.md"},r=void 0,l={unversionedId:"c_and_net/basic-web-applications/objects_within_objects_interface_part_2",id:"c_and_net/basic-web-applications/objects_within_objects_interface_part_2",title:"5. Objects Within Objects Interface Part 2",description:"Items in our To Do List are now associated with Categorys. Our application will prompt users to first create categories and then create Items that belong to them. As such, there will no longer be any Items not associated with a parent Category. This has several ramifications for how we'll organize our front end.",source:"@site/docs/c_and_net/7_basic-web-applications/3e_objects_within_objects_interface_part_2_advanced_restful_routing.md",sourceDirName:"c_and_net/7_basic-web-applications",slug:"/c_and_net/basic-web-applications/objects_within_objects_interface_part_2",permalink:"/lhtp/c_and_net/basic-web-applications/objects_within_objects_interface_part_2",draft:!1,tags:[],version:"current",sidebarPosition:39,frontMatter:{title:"5. Objects Within Objects Interface Part 2",id:"objects_within_objects_interface_part_2",slug:"objects_within_objects_interface_part_2",hide_table_of_contents:!0,sidebar_position:39,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/7_basic-web-applications/3e_objects_within_objects_interface_part_2_advanced_restful_routing.md"},sidebar:"c_and_net",previous:{title:"4. Objects Within Objects Interface Part 1",permalink:"/lhtp/c_and_net/basic-web-applications/objects_within_objects_interface_part_1"},next:{title:"6. Using Static Content",permalink:"/lhtp/c_and_net/basic-web-applications/using_static_content"}},s={},p=[{value:"RESTful Routing with Objects Within Objects",id:"restful-routing-with-objects-within-objects",level:2},{value:"General RESTful Routing with Objects Within Objects",id:"general-restful-routing-with-objects-within-objects",level:3},{value:"To Do List RESTful Routing with Objects Within Objects",id:"to-do-list-restful-routing-with-objects-within-objects",level:3},{value:"RESTful Routing &amp; Objects Within Objects Refactor",id:"restful-routing--objects-within-objects-refactor",level:2},{value:"Item Index Route",id:"item-index-route",level:3},{value:"Item DeleteAll Route",id:"item-deleteall-route",level:3},{value:"Item Show Route (Detail Page)",id:"item-show-route-detail-page",level:3},{value:"New Item Route",id:"new-item-route",level:3},{value:"Item <code>Create()</code> Route",id:"item-create-route",level:3},{value:"Homepage",id:"homepage",level:3},{value:"Visual Reference",id:"visual-reference",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s in our To Do List are now associated with ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"s. Our application will prompt users to first create categories and then create ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s that belong to them. As such, there will ",(0,a.kt)("strong",{parentName:"p"},"no longer be any ",(0,a.kt)("inlineCode",{parentName:"strong"},"Item"),"s not associated with a parent ",(0,a.kt)("inlineCode",{parentName:"strong"},"Category"),".")," This has several ramifications for how we'll organize our front end."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Users will no longer be able to see ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s without first clicking on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s will only be listed on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," detail page, which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," route on ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoriesController"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In order to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),", users first have to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," to which an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," will belong."))),(0,a.kt)("h2",{id:"restful-routing-with-objects-within-objects"},"RESTful Routing with Objects Within Objects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This new setup also affects our RESTful routing. Just to review:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"RESTful routing...maps HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern...routes completing common actions (like creating, updating, or deleting objects) have names and paths that accurately reflect ",(0,a.kt)("em",{parentName:"p"},"what")," they're doing, with ",(0,a.kt)("em",{parentName:"p"},"which")," CRUD and HTTP verbs, upon what ",(0,a.kt)("em",{parentName:"p"},"type")," of object.")),(0,a.kt)("p",null,"Because RESTful routing demands we communicate this information in the names of our routes and their paths, our own routes and paths must now communicate that ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s are nested within ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"s.  "),(0,a.kt)("h3",{id:"general-restful-routing-with-objects-within-objects"},"General RESTful Routing with Objects Within Objects"),(0,a.kt)("p",null,"RESTful routing conventions for applications that use objects within objects look like this:"),(0,a.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/objects-within-objects-screenshot-1.png",width:"100%"}),(0,a.kt)("p",null,"However, ",(0,a.kt)("strong",{parentName:"p"},"not all applications use all routes depicted here"),". Following RESTful routing doesn't require we use all routes. It just requires that the routes we ",(0,a.kt)("em",{parentName:"p"},"do")," need in our applications follow these conventions."),(0,a.kt)("h3",{id:"to-do-list-restful-routing-with-objects-within-objects"},"To Do List RESTful Routing with Objects Within Objects"),(0,a.kt)("p",null,"For our To Do List, we'll use these routes. Notice how they differ from our current setup:"),(0,a.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/objects-within-objects-screenshot-2.png",width:"100%"}),(0,a.kt)("p",null,"URL paths for all ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," routes now include a fragment detailing their parent ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," ",(0,a.kt)("em",{parentName:"p"},"before")," the fragment containing ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," information."),(0,a.kt)("p",null,"For example, the path to display an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," detail page used to be ",(0,a.kt)("inlineCode",{parentName:"p"},"/items/{id}"),". It is now ",(0,a.kt)("inlineCode",{parentName:"p"},"/categories/{categoryId}/items/{itemId}"),". This is to denote that ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s now belong to a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),". It also denotes ",(0,a.kt)("em",{parentName:"p"},"which")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," they belong to by including the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"'s ID right in the URL path."),(0,a.kt)("h2",{id:"restful-routing--objects-within-objects-refactor"},"RESTful Routing & Objects Within Objects Refactor"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's tweak our application to follow objects within objects RESTful standards."),(0,a.kt)("h3",{id:"item-index-route"},"Item Index Route"),(0,a.kt)("p",null,"As discussed, users will no longer see ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s without first clicking on a parent ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s will only be listed on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," detail page (its ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," route). That means we no longer need an ",(0,a.kt)("inlineCode",{parentName:"p"},"Index()")," route on ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController"),". Go ahead and ",(0,a.kt)("strong",{parentName:"p"},"remove the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Index()")," action from ",(0,a.kt)("inlineCode",{parentName:"strong"},"ItemsController.cs")," and delete its corresponding view at ",(0,a.kt)("inlineCode",{parentName:"strong"},"Views/Items/Index.cshtml")," now.")),(0,a.kt)("h3",{id:"item-deleteall-route"},"Item DeleteAll Route"),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item.ClearAll()")," method won't clear all items as expected anymore. That's because we're not just saving each item to the static list ",(0,a.kt)("inlineCode",{parentName:"p"},"Item._instances"),", we're also saving each ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category.Items")," property which is a list of all ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," objects belonging to each ",(0,a.kt)("inlineCode",{parentName:"p"},"Catgeory"),"."),(0,a.kt)("p",null,"There's nothing wrong with our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item.ClearAll()")," method, and we still use it in our tests so we won't update that method. Instead, if we want to add functionality to clear the items from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),", we'll need to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," method that handles clearing out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category.Items")," property. We'll leave that for further exploration. "),(0,a.kt)("p",null,"For now, simply delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteAll()")," action in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," along with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Views/Itesm/DeleteAll.cshtml")," view, as it is no longer functional."),(0,a.kt)("h3",{id:"item-show-route-detail-page"},"Item Show Route (Detail Page)"),(0,a.kt)("p",null,"To view an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s details, we first need to route ourselves to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"'s details: the user will click on a ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Views/Categories/Index.cshtml")," which will route to the category's details page at ",(0,a.kt)("inlineCode",{parentName:"p"},"Views/Categories/Show.cshtml"),". "),(0,a.kt)("p",null,"The category details page lists all ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s that belong to that ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),":"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Categories/Show.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n@foreach (Item item in @Model["items"])\n{\n  <li><a href=\'/categories/@Model["category"].Id/items/@item.Id\'>@item.Description</a></li>\n}\n\n...\n')),(0,a.kt)("p",null,"When the user clicks an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," from this list, they'll navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s detail (show) page. Notice the path in this link is ",(0,a.kt)("inlineCode",{parentName:"p"},'/categories/@Model["category"].Id/items/@item.Id'),", which follows RESTful standards depicted in the tables above."),(0,a.kt)("p",null,"Let's update the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"Show()")," route on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController")," to handle this updated path:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/categories/{categoryId}/items/{itemId}")]\n  public ActionResult Show(int categoryId, int itemId)\n  {\n    Item item = Item.Find(itemId);\n    Category category = Category.Find(categoryId);\n    Dictionary<string, object> model = new Dictionary<string, object>();\n    model.Add("item", item);\n    model.Add("category", category);\n    return View(model);\n  }\n\n...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The path now includes ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," information, which ensures our routes are now RESTfully named.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Because the path includes both ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," IDs, we can locate the correct parent and child objects and pass them to our view in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary"),"."))),(0,a.kt)("p",null,"Let's also update this route's view to account for these changes:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/Show.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<h1>To Do List Item Details: </h1>\n\n<h2>@Model["item"].Description</h2>\n<h3>Category: @Model["category"].Name</h3>\n\n<a href=\'/categories/@Model["category"].Id/items/new\'>Add another item</a>\n<a href=\'/categories\'>View all categories</a>\n\n...\n')),(0,a.kt)("p",null,"Because our model data resides in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),", we use square bracket notation to access the two objects. We also add a line detailing which ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," this ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," belongs to."),(0,a.kt)("p",null,"If we attempt to view this new page in the browser, we'll get an error. That's because we need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," before we can click one and view its details. However, the ",(0,a.kt)("em",{parentName:"p"},"Add a new item")," link on our category detail page is not working. This is because the link looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Categories/Show.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"...\n\n<p><a href='/categories/@Model[\"category\"].Id/items/new'>Add a new item</a></p>\n\n...\n")),(0,a.kt)("p",null,"It links to the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/categories/{categoryId}/items/new"),". If we check our table above, we know this follows RESTful conventions. We just haven't updated our ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"New()")," route to use this path. Let's do this next."),(0,a.kt)("h3",{id:"new-item-route"},"New Item Route"),(0,a.kt)("p",null,"We'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"New()")," route on our ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController")," to look like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [HttpGet("/categories/{categoryId}/items/new")]\n  public ActionResult New(int categoryId)\n  {\n     Category category = Category.Find(categoryId);\n     return View(category);\n  }\n\n...\n')),(0,a.kt)("p",null,"The path now includes the ID of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," we're adding a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," to. Because it's in curly braces, we can grab this in our route's parameter to locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," object and pass it into the corresponding view."),(0,a.kt)("p",null,"Let's update this route's corresponding view so it displays the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," we're adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," to:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Items/New.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<h1>Add a new item to @Model.Name</h1>\n\n<form action="/categories/@Model.Id/items" method="post">\n  <input id="categoryId" name="categoryId" type="hidden" value="@Model.Id">\n  <label for="itemDescription">Item Description</label>\n  <input id="itemDescription" name="itemDescription" type="text">\n  <button type=\'submit\'>Add Item</button>\n</form>\n\n...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We list the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," we're adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," to above the form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We've updated the form's ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"/categories/@Model.Id/items")," so it follows RESTful standards. This means we'll have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route that processes this form's submissions, which we'll do soon.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We've added a new input to our form, too: ",(0,a.kt)("inlineCode",{parentName:"p"},"<input id='categoryId' name='categoryId' type='hidden' value='@Model.Id'>"),". This will pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," ID alongside the user's form input to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route that processes this form's submission. However, since its input ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," is  ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden"),", it won't display anything to the user."))),(0,a.kt)("p",null,"Why do we need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"'s ID like this? This is because we now save all new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s into a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),". When we create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," with this form, we'll need to know which ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," it belongs to. Let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route that processes this form's submissions next."),(0,a.kt)("h3",{id:"item-create-route"},"Item ",(0,a.kt)("inlineCode",{parentName:"h3"},"Create()")," Route"),(0,a.kt)("p",null,"Because new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s all belong to ",(0,a.kt)("inlineCode",{parentName:"p"},"Category"),"s, the act of creating a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," now alters our ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," objects. As such, it's more accurate to say it's related to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," model now."),(0,a.kt)("p",null,"To follow best practices, we'll move the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoriesController"),". This is standard practice in applications that use objects within objects like ours. We'll also update this route to accommodate our new objects within objects relationship:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n    [HttpPost("/categories/{categoryId}/items")]\n    public ActionResult Create(int categoryId, string itemDescription)\n    {\n      Dictionary<string, object> model = new Dictionary<string, object>();\n      Category foundCategory = Category.Find(categoryId);\n      Item newItem = new Item(itemDescription);\n      foundCategory.AddItem(newItem);\n      List<Item> categoryItems = foundCategory.Items;\n      model.Add("items", categoryItems);\n      model.Add("category", foundCategory);\n      return View("Show", model);\n    }\n...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We update this method's path to follow RESTful convention.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The method now takes two arguments: the ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryId")," we passed into a hidden form field and an ",(0,a.kt)("inlineCode",{parentName:"p"},"itemDescription")," that contains the user's form input.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We create a new empty ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryId")," provided as an argument, we locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," object our new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," should belong to and call it ",(0,a.kt)("inlineCode",{parentName:"p"},"foundCategory"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We then create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," object with the user's form input.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We add the ",(0,a.kt)("inlineCode",{parentName:"p"},"newItem")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"foundCategory")," with our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"AddItem()")," method.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We retrieve all other ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s that correspond to this category and add it to our ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),". We do this because the view we'll render at the end of this route requires this information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We also add the ",(0,a.kt)("inlineCode",{parentName:"p"},"foundCategory")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"model"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, we pass in our ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," data to ",(0,a.kt)("inlineCode",{parentName:"p"},"View()"),", instructing it to render the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," detail page, which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Show.cshtml")," view."))),(0,a.kt)("p",null,"Even though ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoriesController")," already has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Create()")," route, they won't get mixed up because they have distinctly different paths. If this is confusing, it's fine to add a comment until it becomes second nature:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n// This one creates new Items within a given Category, not new Categories:\n\n[HttpPost("/categories/{categoryId}/items")]\npublic ActionResult Create(int categoryId, string itemDescription)\n{\n  Dictionary<string, object> model = new Dictionary<string, object>();\n  Category foundCategory = Category.Find(categoryId);\n  Item newItem = new Item(itemDescription);\n  foundCategory.AddItem(newItem);\n  List<Item> categoryItems = foundCategory.Items;\n  model.Add("items", categoryItems);\n  model.Add("category", foundCategory);\n  return View("Show", model);\n}\n\n...\n')),(0,a.kt)("h3",{id:"homepage"},"Homepage"),(0,a.kt)("p",null,"Finally, instead of linking to ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," options from the homepage, let's link to ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," options like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Views/Home/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"...\n\n<h1>Welcome to the To Do List!</h1>\n<h3><a href='/categories'>View categories</a></h3>\n<h3><a href='/categories/new'>Add a new category</a></h3>\n\n...\n")),(0,a.kt)("p",null,"After following all steps in this lesson, our ",(0,a.kt)("inlineCode",{parentName:"p"},"CategoriesController")," will now look like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/CategoriesController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System;\nusing Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\n\nnamespace ToDoList.Controllers\n{\n  public class CategoriesController : Controller\n  {\n\n    [HttpGet("/categories")]\n    public ActionResult Index()\n    {\n      List<Category> allCategories = Category.GetAll();\n      return View(allCategories);\n    }\n\n    [HttpGet("/categories/new")]\n    public ActionResult New()\n    {\n      return View();\n    }\n\n    [HttpPost("/categories")]\n    public ActionResult Create(string categoryName)\n    {\n      Category newCategory = new Category(categoryName);\n      return RedirectToAction("Index");\n    }\n\n    [HttpGet("/categories/{id}")]\n    public ActionResult Show(int id)\n    {\n      Dictionary<string, object> model = new Dictionary<string, object>();\n      Category selectedCategory = Category.Find(id);\n      List<Item> categoryItems = selectedCategory.Items;\n      model.Add("category", selectedCategory);\n      model.Add("items", categoryItems);\n      return View(model);\n    }\n\n    // This one creates new Items within a given Category, not new Categories:\n    [HttpPost("/categories/{categoryId}/items")]\n    public ActionResult Create(int categoryId, string itemDescription)\n    {\n      Dictionary<string, object> model = new Dictionary<string, object>();\n      Category foundCategory = Category.Find(categoryId);\n      Item newItem = new Item(itemDescription);\n      foundCategory.AddItem(newItem);\n      List<Item> categoryItems = foundCategory.Items;\n      model.Add("items", categoryItems);\n      model.Add("category", foundCategory);\n      return View("Show", model);\n    }\n\n  }\n}\n')),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsController")," looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Controllers/ItemsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\n\nnamespace ToDoList.Controllers\n{\n  public class ItemsController : Controller\n  {\n\n    [HttpGet("/categories/{categoryId}/items/new")]\n    public ActionResult New(int categoryId)\n    {\n       Category category = Category.Find(categoryId);\n       return View(category);\n    }\n\n    [HttpGet("/categories/{categoryId}/items/{itemId}")]\n    public ActionResult Show(int categoryId, int itemId)\n    {\n      Item item = Item.Find(itemId);\n      Category category = Category.Find(categoryId);\n      Dictionary<string, object> model = new Dictionary<string, object>();\n      model.Add("item", item);\n      model.Add("category", category);\n      return View(model);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Again, notice how this follows the RESTful conventions depicted in the tables above."),(0,a.kt)("p",null,"We should now be able to build and run our application and navigate through it in the browser. Our front end can successfully manage our new objects within objects setup."),(0,a.kt)("h2",{id:"visual-reference"},"Visual Reference"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you're having a hard time conceptualizing how to plan your routes, controllers, and views, consider creating a diagram like the one below. Route names here don't follow RESTful convention exactly, but this is just a demonstration:"),(0,a.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/ToDoListActions%20.png",style:{width:" 75%%"}}),(0,a.kt)("p",null,"Note: Open the image in a separate tab to see it at full size."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/8_saving_OWO_and_interface_update"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 8","_","saving","_","OWO","_","and","_","interface","_","update"))))}m.isMDXComponent=!0}}]);