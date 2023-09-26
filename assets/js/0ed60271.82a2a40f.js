"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[49609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={title:"Model Validation with Validation Attributes",id:"model-validation-with-validation-attributes",slug:"model-validation-with-validation-attributes",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1b_using_validation_attributes_to_validate_model.md"},r=void 0,l={unversionedId:"c-and-net-part-time/many-to-many-relationships/model-validation-with-validation-attributes",id:"c-and-net-part-time/many-to-many-relationships/model-validation-with-validation-attributes",title:"Model Validation with Validation Attributes",description:"In the last course section, we created instructions and used simple condition to avoid creating a database error if a user tries to create an Item without there being a Category to associate it with. In the Items/Create.cshtml view we added this message:",source:"@site/docs/c-and-net-part-time/12_many-to-many-relationships/1b-using-validation-attributes-to-validate-model.md",sourceDirName:"c-and-net-part-time/12_many-to-many-relationships",slug:"/c-and-net-part-time/many-to-many-relationships/model-validation-with-validation-attributes",permalink:"/c-and-net-part-time/many-to-many-relationships/model-validation-with-validation-attributes",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Model Validation with Validation Attributes",id:"model-validation-with-validation-attributes",slug:"model-validation-with-validation-attributes",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1b_using_validation_attributes_to_validate_model.md"},sidebar:"c-and-net-part-time",previous:{title:"University Registrar, Doctor's Office (Week-Long Project) - Part 1",permalink:"/c-and-net-part-time/many-to-many-relationships/university-registrar-doctor's-office-week-long-project---part-1"},next:{title:"Customizing Entity Properties with Data Annotations",permalink:"/c-and-net-part-time/many-to-many-relationships/customizing-entity-properties-with-data-annotations"}},s={},d=[{value:"Adding Validation Attributes to <code>Item.cs</code>",id:"adding-validation-attributes-to-itemcs",level:2},{value:"Updating <code>Item/Create.cshtml</code>",id:"updating-itemcreatecshtml",level:3},{value:"Checking the Model State",id:"checking-the-model-state",level:3},{value:"Adding a Second Validation",id:"adding-a-second-validation",level:3},{value:"More to Explore",id:"more-to-explore",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last course section, we created instructions and used simple condition to avoid creating a database error if a user tries to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," without there being a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," to associate it with. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items/Create.cshtml")," view we added this message:"),(0,i.kt)("div",{class:"filename"},"Views/Item/Create.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<h4>Add a new item</h4>\n\n<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>\n<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>\n\n...\n')),(0,i.kt)("p",null,"Then, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," POST action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),", we verified whether there was a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object selected by checking if the ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryId")," parameter has a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If so, we simply directed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items/Create.cshtml")," page. Otherwise, we went ahead and saved the new ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," to our database."),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost]\n    public ActionResult Create(Item item)\n    {\n      if (item.CategoryId == 0)\n      {\n        return RedirectToAction("Create");\n      }\n      _db.Items.Add(item);\n      _db.SaveChanges();\n      return RedirectToAction("Index");\n    }\n\n...\n')),(0,i.kt)("p",null,"In this lesson, we're going to try out a new tool to handle this same issue: model validation with validation attributes. With ",(0,i.kt)("strong",{parentName:"p"},"model validation")," we configure .NET to validate user input based on rules that we set in our models; we set these rules using ",(0,i.kt)("strong",{parentName:"p"},"validation attributes"),'. As we\'ll learn a bit later on, "validation attributes" are also commonly called "data annotations". Let\'s get into this refactor and then revisit these concepts. '),(0,i.kt)("h2",{id:"adding-validation-attributes-to-itemcs"},"Adding Validation Attributes to ",(0,i.kt)("inlineCode",{parentName:"h2"},"Item.cs")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First, we'll start by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"[Range]")," validation attribute to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," property of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," model:"),(0,i.kt)("div",{class:"filename"},"Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace ToDoList.Models\n{\n  public class Item\n  {\n    public int ItemId { get; set; }\n    public string Description { get; set; }\n    [Range(1, int.MaxValue)]\n    public int CategoryId { get; set; }\n    public Category Category { get; set; }\n    public List<ItemTag> JoinEntities { get;}\n  }\n}\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"validation attribute")," lets us specify the rules to use when validating a model's property. The validation attribute that we added is ",(0,i.kt)("inlineCode",{parentName:"p"},"[Range(1, int.MaxValue)]"),". In order to attach a validation attribute to a property, we need to list it directly above the property, which in our case is ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId"),". "),(0,i.kt)("p",null,"In order to use validation attributes at all, we need to include the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"using System.ComponentModel.DataAnnotations;")," at the top of the file, which allows us to use the tools within the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.ComponentModel.DataAnnotations")," namespace. Note that the terms ",(0,i.kt)("strong",{parentName:"p"},"data annotations")," and ",(0,i.kt)("strong",{parentName:"p"},"validation attributes")," are used interchangeably."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"[Range(1, int.MaxValue)]"),", we are specifying the rule that the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," must be a number between  ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"int.MaxValue"),", which is the maximum possible integer value in C#. What this validation rule does for us is ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," value is never ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If it is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", then we can deliver an error message to the user. "),(0,i.kt)("p",null,"Let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"[Range()]")," validation attribute to include an ",(0,i.kt)("strong",{parentName:"p"},"error message"),". To do this, we'll add another argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"[Range()]"),". Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class as follows:"),(0,i.kt)("div",{class:"filename"},"Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace ToDoList.Models\n{\n  public class Item\n  {\n    public int ItemId { get; set; }\n    public string Description { get; set; }\n    [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]\n    public int CategoryId { get; set; }\n    public Category Category { get; set; }\n    public List<ItemTag> JoinEntities { get;}\n  }\n}\n')),(0,i.kt)("p",null,"Notice that we've added a third argument: ",(0,i.kt)("inlineCode",{parentName:"p"},'ErrorMessage = "You must add your item to a category. Have you created a category yet?"'),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorMessage")," property can be applied to any validation attribute. "),(0,i.kt)("p",null,"The error message ",(0,i.kt)("inlineCode",{parentName:"p"},'"You must add your item to a category. Have you created a category yet?"')," will be delivered to the user if they try to create an item without specifying a category (which happens when the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," has a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"). However, we have a few more steps to complete before this will actually work! We need to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item/Create.cshtml")," view to display the error message, and we need to update our item's ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," POST controller action to check if our model's state is valid. "),(0,i.kt)("h3",{id:"updating-itemcreatecshtml"},"Updating ",(0,i.kt)("inlineCode",{parentName:"h3"},"Item/Create.cshtml")),(0,i.kt)("p",null,"We'll first update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item/Create.cshtml")," view. We'll first remove our hard coded message:"),(0,i.kt)("div",{class:"filename"},"Views/Item/Create.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<p><strong>NOTE:</strong> You need to have at least one category before you can add an item!</p>\n<p>Go to @Html.ActionLink("this page", "Create", "Categories") to create a category.</p>\n...\n')),(0,i.kt)("p",null,"And then we'll add a new line of code in its place (right below ",(0,i.kt)("inlineCode",{parentName:"p"},"<h4>Add a new item</h4>"),"):"),(0,i.kt)("div",{class:"filename"},"Views/Item/Create.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ValidationMessageFor(model => model.CategoryId, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>\n...\n')),(0,i.kt)("p",null,"We're making use of a new strongly typed HTML helper called ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessageFor()")," that returns the HTML markup for a validation-error message for the specified model property, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessageFor()")," method takes two arguments, plus a third optional argument:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first argument specifies the model property ",(0,i.kt)("inlineCode",{parentName:"li"},"CategoryId")," that this validation message is for."),(0,i.kt)("li",{parentName:"ul"},"The second argument is an empty string acting as a placeholder for the ",(0,i.kt)("inlineCode",{parentName:"li"},"ErrorMessage")," we set in the ",(0,i.kt)("inlineCode",{parentName:"li"},"[Range()]")," validation attribute. If the model is valid, ",(0,i.kt)("inlineCode",{parentName:"li"},"ValidationMessageFor()")," will display nothing on the page (per the empty string). If the model is not valid, then ",(0,i.kt)("inlineCode",{parentName:"li"},"ValidationMessageFor()")," will display our error message replacing the empty string placeholders with ",(0,i.kt)("inlineCode",{parentName:"li"},'"You must add your item to a category. Have you created a category yet?"'),"."),(0,i.kt)("li",{parentName:"ul"},"The third argument is optional and it contains an object with options that we want to specify for our HTML element. In this case, we're adding a new class set to Bootstrap's ",(0,i.kt)("inlineCode",{parentName:"li"},'"text-danger"')," which will make our text red, and a new inline style that will make our text bold.")),(0,i.kt)("p",null,"The last step we have to complete is to actually direct our controller to check the state of our model."),(0,i.kt)("h3",{id:"checking-the-model-state"},"Checking the Model State"),(0,i.kt)("p",null,"In our controllers, we can check the validity of our model's state by accessing the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," property. ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid")," is a bool, so we can check if the model state is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"/valid or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"/invalid. Let's see how this works by updating our ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),"."),(0,i.kt)("p",null,"Replace the item's ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," POST action with the following code:"),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n    [HttpPost]\n    public ActionResult Create(Item item)\n    {\n      if (!ModelState.IsValid)\n      {\n          ViewBag.CategoryId = new SelectList(_db.Categories, "CategoryId", "Name");\n          return View(item);\n      }\n      else\n      {\n        _db.Items.Add(item);\n        _db.SaveChanges();\n        return RedirectToAction("Index");\n      }\n    }\n\n...\n')),(0,i.kt)("p",null,"When we check ",(0,i.kt)("inlineCode",{parentName:"p"},"if (!ModelState.IsValid)"),", we're checking if ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelState.IsValid == false"),", which means that the model's state is not valid. "),(0,i.kt)("p",null,"Take note that ",(0,i.kt)("strong",{parentName:"p"},"model validation happens automatically"),", but we still need to determine what to do when the model's state is valid or invalid. In our case, if our ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," is not valid, then we create a new select list of category objects and ",(0,i.kt)("inlineCode",{parentName:"p"},"return View(item);"),". This will display ",(0,i.kt)("inlineCode",{parentName:"p"},"Items/Create.cshtml")," once again, both with a select list of category objects and the invalid ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," object from which the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateMessageFor")," accesses the validation error message that we set on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.CategoryId")," property."),(0,i.kt)("p",null,"And with that, we have model validation set up for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.CategoryId")," property. Run your To Do List app now and try adding an item without a category to see the error message displayed."),(0,i.kt)("h3",{id:"adding-a-second-validation"},"Adding a Second Validation"),(0,i.kt)("p",null,"Each property of a model can have one or more validation attributes. Let's get more practice by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Required]")," validation attribute to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Description")," property. When we require a property, it means that a form input for that property can't be empty. Doing this for our items will ensure that no description input is left empty when a user creates a new item."),(0,i.kt)("p",null,"First, we'll update the model:"),(0,i.kt)("div",{class:"filename"},"Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace ToDoList.Models\n{\n    public class Item\n    {\n        public int ItemId { get; set; }\n        [Required(ErrorMessage = "The item\'s description can\'t be empty!")]\n        public string Description { get; set; }\n        [Range(1, int.MaxValue, ErrorMessage = "You must add your item to a category. Have you created a category yet?")]\n        public int CategoryId { get; set; }\n        public Category Category { get; set; }\n        public List<ItemTag> JoinEntities { get;}\n    }\n}\n')),(0,i.kt)("p",null,"Note that we could simply list ",(0,i.kt)("inlineCode",{parentName:"p"},"[Required]")," without specifying an ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorMessage"),". "),(0,i.kt)("p",null,"Next, let's update our view to display the error message if our item's ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," is empty. Right below our ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessageFor()")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.CategoryId"),", we'll add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessageFor()")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Description"),":"),(0,i.kt)("div",{class:"filename"},"Views/Item/Create.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ValidationMessageFor(model => model.CategoryId, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>\n<p>@Html.ValidationMessageFor(model => model.Description, "", new { @class = "text-danger", @style = "font-weight: 600;" })</p>\n...\n')),(0,i.kt)("p",null,"At this point we can run our application and see that we'll get an error message if we leave the description input blank when we create new items. Note that we don't need to make any updates to the item's ",(0,i.kt)("inlineCode",{parentName:"p"},"Create()")," POST action, because if the model state is invalid we return the entire invalid ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," object from which the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," properties can be accessed. "),(0,i.kt)("h3",{id:"more-to-explore"},"More to Explore"),(0,i.kt)("p",null,"There are many more built-in validation attributes to explore, as well as the possibility of creating custom validation attributes. There's also more to learn about model state, including how to manually re-run model validation. To optionally learn more, visit the MS Docs article on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-6.0"},"Model validation in ASP.NET Core MVC and Razor Pages"),". For a complete list of available data annotations, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0"},"System.ComponentModel.DataAnnotations namespace")),(0,i.kt)("p",null,"Up next, we're going to learn about how we can use data annotations to configure our entity (like ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),") properties (like ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Description"),")."))}c.isMDXComponent=!0}}]);