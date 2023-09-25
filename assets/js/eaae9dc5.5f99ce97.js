"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[28086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,u=d["".concat(s,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"HTML Helper Methods, Lambda Expressions, and String Interpolation",id:"html_helper_methods_lambda_expressions_and_string_interpolation",slug:"html_helper_methods_lambda_expressions_and_string_interpolation",hide_table_of_contents:!0,sidebar_position:26,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1f_html_helpers.md"},r=void 0,l={unversionedId:"c_and_net_classic/database-basics/html_helper_methods_lambda_expressions_and_string_interpolation",id:"c_and_net_classic/database-basics/html_helper_methods_lambda_expressions_and_string_interpolation",title:"HTML Helper Methods, Lambda Expressions, and String Interpolation",description:"In the last lesson, we added code to our ItemsController to create Items. In this lesson, we'll add the necessary views to allow users to create Items through a form. In the process, we'll cover several HTML helper methods. A helper method is exactly what it sounds like \u2014 a method that helps make our lives as developers a little easier. In this case, our helper methods will specifically make it easier to render HTML in a .cshtml file.",source:"@site/docs/c_and_net_classic/8_database-basics/1f_html_helpers.md",sourceDirName:"c_and_net_classic/8_database-basics",slug:"/c_and_net_classic/database-basics/html_helper_methods_lambda_expressions_and_string_interpolation",permalink:"/c_and_net_classic/database-basics/html_helper_methods_lambda_expressions_and_string_interpolation",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"HTML Helper Methods, Lambda Expressions, and String Interpolation",id:"html_helper_methods_lambda_expressions_and_string_interpolation",slug:"html_helper_methods_lambda_expressions_and_string_interpolation",hide_table_of_contents:!0,sidebar_position:26,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/1f_html_helpers.md"},sidebar:"c_and_net_classic",previous:{title:"Create with EF Core",permalink:"/c_and_net_classic/database-basics/create_with_ef_core"},next:{title:"Showing Item Details with EF Core",permalink:"/c_and_net_classic/database-basics/showing_item_details_with_ef_core"}},s={},p=[{value:"HTML Helper Methods: Links",id:"html-helper-methods-links",level:2},{value:"Updating the Items Views",id:"updating-the-items-views",level:3},{value:"Strongly Typed HTML Helper Methods with Forms",id:"strongly-typed-html-helper-methods-with-forms",level:2},{value:"Model Directives",id:"model-directives",level:3},{value:"HTML Helper Methods for Forms",id:"html-helper-methods-for-forms",level:3},{value:"Strongly Typed HTML Helpers",id:"strongly-typed-html-helpers",level:3},{value:"The Benefits of Strongly Typed HTML Helpers",id:"the-benefits-of-strongly-typed-html-helpers",level:3},{value:"HTML Helpers for Other Form Elements",id:"html-helpers-for-other-form-elements",level:3},{value:"Adding HTML Helper Methods to the Index View",id:"adding-html-helper-methods-to-the-index-view",level:2},{value:"Practice with String Interpolation",id:"practice-with-string-interpolation",level:3},{value:"Default Routing for <code>ActionLink()</code> and Adding an Optional Argument",id:"default-routing-for-actionlink-and-adding-an-optional-argument",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we added code to our ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," to create ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s. In this lesson, we'll add the necessary views to allow users to create ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s through a form. In the process, we'll cover several HTML ",(0,o.kt)("strong",{parentName:"p"},"helper methods"),". A helper method is exactly what it sounds like \u2014 a method that helps make our lives as developers a little easier. In this case, our helper methods will specifically make it easier to render HTML in a ",(0,o.kt)("inlineCode",{parentName:"p"},".cshtml")," file."),(0,o.kt)("h2",{id:"html-helper-methods-links"},"HTML Helper Methods: Links"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"First, let's update the contents of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Home/Index.cshtml"),". Let's remove the links to the categories and add a link to see our items instead. In the past, we created a standard HTML link like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<a href="/items">See all items</a>\n')),(0,o.kt)("p",null,"Let's use an HTML helper method to render our link instead. Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," to look like this:"),(0,o.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n<h1>Welcome to the To Do List!</h1>\n<p>@Html.ActionLink("See all items", "Index", "Items")</p> \n')),(0,o.kt)("p",null," The ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method is called on ",(0,o.kt)("inlineCode",{parentName:"p"},"@Html"),". It takes two required parameters as well as an optional third parameter."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first parameter ",(0,o.kt)("inlineCode",{parentName:"p"},'"See all items"'),' is the display text for the link. In other words, a user will see a link that says "See all items".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second parameter ",(0,o.kt)("inlineCode",{parentName:"p"},'"Index"')," is the target action in the controller. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The third parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," is optional, and it specifies the controller that we want to route to. More specifically, our third parameter is the name of the controller without ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," appended to it. Since we've included this third parameter, this ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink")," will take us to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," route method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController"),". "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Take note.")," If we don't include the optional third parameter, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<p>@Html.ActionLink("See all items", "Index")</p> \n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink")," method will default to the controller that corresponds to the view that the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink")," method executes from. Since we're in a View belonging to ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", we would be routed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," route method (also known as an action)."),(0,o.kt)("p",null,"Let's run the server to confirm that our new link works."),(0,o.kt)("h3",{id:"updating-the-items-views"},"Updating the Items Views"),(0,o.kt)("p",null,"Before we create our form, let's use a shiny new HTML helper method to add a link to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Items/Index.cshtml")," view that will link to the form page."),(0,o.kt)("div",{class:"filename"},"Views/Items/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n<p>@Html.ActionLink("Add new item", "Create")</p>\n')),(0,o.kt)("p",null,"This time around, we omit the third parameter as we are going to a route in the Items controller."),(0,o.kt)("h2",{id:"strongly-typed-html-helper-methods-with-forms"},"Strongly Typed HTML Helper Methods with Forms"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We now have a link to a view for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," method but we haven't created a view yet. In past projects, we used standard HTML to create forms. Let's use some new HTML helper syntax to make this easier:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Item\n\n<h4>Add a new item</h4>\n@using (Html.BeginForm())\n{\n  @Html.LabelFor(model => model.Description)\n  @Html.TextBoxFor(model => model.Description)\n  <input type="submit" value="Add new item" />\n}\n<p>@Html.ActionLink("Show all items", "Index")</p>\n')),(0,o.kt)("p",null,"Our form makes use of several HTML helper methods, including another ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," to link to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Index()")," route method. Let's take a closer look at the new helper methods included above."),(0,o.kt)("h3",{id:"model-directives"},"Model Directives"),(0,o.kt)("p",null,"We'll start with the first line, which is called a ",(0,o.kt)("strong",{parentName:"p"},"model directive"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"@model ToDoList.Models.Item\n")),(0,o.kt)("p",null,"A model directive tells our view what type of data will be passed into the view from the controller route. In this case, we're telling the view that it will receive a model that is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),". These directives provide a simple way for our application to reference strongly-typed models (like ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Category"),") and is required when we use strongly typed HTML helpers, which we'll cover more shortly."),(0,o.kt)("p",null,"Note that we must be very specific in defining the type, including both the namespace and the class in that order: ",(0,o.kt)("inlineCode",{parentName:"p"},"ToDoList.Models.Item"),". This forces the compiler to look in the right place for the type. Now we can use the model we specify in our view."),(0,o.kt)("p",null,"Finally, note that we can only include one ",(0,o.kt)("inlineCode",{parentName:"p"},"@model")," directive in each view, just like we can only pass in one model to each ",(0,o.kt)("inlineCode",{parentName:"p"},"View()")," method in our controllers."),(0,o.kt)("p",null,"We will be using model directives regularly in our views when we use strongly typed HTML helpers, not just with forms, and we'll cover a few more examples soon."),(0,o.kt)("h3",{id:"html-helper-methods-for-forms"},"HTML Helper Methods for Forms"),(0,o.kt)("p",null,"Next, let's take a closer look at our new form:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n@using (Html.BeginForm())\n{\n  @Html.LabelFor(model => model.Description)\n  @Html.TextBoxFor(model => model.Description)\n  <input type="submit" value="Add new item" />\n}\n\n...\n')),(0,o.kt)("p",null,"Instead of adding a form using plain HTML, we use the helper method ",(0,o.kt)("inlineCode",{parentName:"p"},"Html.BeginForm()"),". First, notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Html.BeginForm()")," method is called within a ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," statement: ",(0,o.kt)("inlineCode",{parentName:"p"},"@using (Html.BeginForm())"),". What this ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," statement does is add a closing HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"</form>")," tag to the form. "),(0,o.kt)("p",null,"Next, it's important to note that ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginForm()")," sends an HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request by default to the current URL. In other words, this form will send a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create()")," route. In HTML, the opening form tag would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/Items/Create" method="post">\n')),(0,o.kt)("p",null,"If we were to load this page in the browser, we can inspect the form and see the above ",(0,o.kt)("inlineCode",{parentName:"p"},"form action")," in the DOM's elements. ",(0,o.kt)("strong",{parentName:"p"},"This is the reason we no longer use RESTful routing.")," The default HTML helper method for a form will create a post request to the route matching the filename it was called in. Since we used the helper method in ",(0,o.kt)("inlineCode",{parentName:"p"},"/Items/Create.cshtml"),", it will make a post request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/Items/Create"),"."),(0,o.kt)("p",null,"In this way, we will be updating our routes to match what is in the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0"},"Microsoft documentation for proper routing in ASP.NET Core projects"),", such as using ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and using ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"New"),". You can look in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.web.mvc.html"},"the documentation for HTML helper methods")," to see how to add additional arguments, to modify the action, method, and arguments of forms, inputs, and links created with HTML helper methods, but for the sake of simplicity we will continue forward using this format."),(0,o.kt)("h3",{id:"strongly-typed-html-helpers"},"Strongly Typed HTML Helpers"),(0,o.kt)("p",null,"In the form itself, we use two new HTML helper methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"LabelFor()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBoxFor()"),". Here's another look at our form:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n@using (Html.BeginForm())\n{\n  @Html.LabelFor(model => model.Description)\n  @Html.TextBoxFor(model => model.Description)\n  <input type="submit" value="Add new item" />\n}\n\n...\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LabelFor()")," generates a label for a form field."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TextBoxFor()")," generates a text box form field. ")),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"LabelFor()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBoxFor()")," are ",(0,o.kt)("strong",{parentName:"p"},"strongly typed HTML helpers"),' that take use a project\'s class to define what should be displayed. When an HTML helper method contains "For" in its name, that means it is a strongly typed HTML helper. Just the same, when an HTML helper method does not contain "For" in its name, then it is a ',(0,o.kt)("strong",{parentName:"p"},"standard HTML helper"),"."),(0,o.kt)("p",null,"Notice that both strongly typed HTML helpers have the same argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"model => model.Description\n")),(0,o.kt)("p",null,"This is called a C# ",(0,o.kt)("strong",{parentName:"p"},"lambda expression"),". In short, a lambda expression is just a way to write an anonymous function in a condensed fashion. Lambda expressions are used in a variety of languages and are similar to arrow functions in JavaScript. There are a handful of ways we can structure and use lambda expressions and we recommend checking out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions"},"Microsoft documentation on lambda expressions")," to learn more. "),(0,o.kt)("p",null,"We use lambda expressions in HTML helper methods in order to specify what part of our model we want to use or associate with different elements on the page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("inlineCode",{parentName:"li"},"@Html.LabelFor(model => model.Description)"),' we specify that we want to use the property name "description" for the form label.'),(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("inlineCode",{parentName:"li"},"@Html.TextBoxFor(model => model.Description)")," we specify that we want to use the value put into the text box as the value for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Item"),"'s description property. ")),(0,o.kt)("h3",{id:"the-benefits-of-strongly-typed-html-helpers"},"The Benefits of Strongly Typed HTML Helpers"),(0,o.kt)("p",null,"You may be wondering, why bother using strongly typed HTML helper methods? Well, they provide error checking at compile time. For example if we changed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," class ",(0,o.kt)("inlineCode",{parentName:"p"},"Description")," property to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," instead and ran our project after that change, our compiler would let us know that these ",(0,o.kt)("inlineCode",{parentName:"p"},"LabelFor()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TextBoxFor()")," HTML helpers need to be updated to reference the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," property. This would not happen with the standard versions of these HTML helpers, which only use strings as arguments and cannot be checked for errors at compile time. For reference, ",(0,o.kt)("strong",{parentName:"p"},"here is what our form would look like only using standard HTML helpers:")),(0,o.kt)("div",{class:"filename"},"Views/Items/Create.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n@using (Html.BeginForm())\n{\n  @Html.Label("Description")\n  @Html.TextBox("Description")\n  <input type="submit" value="Add new item" />\n}\n\n...\n')),(0,o.kt)("p",null,"The above code snippet is for demonstration only \u2014 don't add it to your code."),(0,o.kt)("p",null,"In the end, it's fine to use a mix of strongly typed and standard HTML helpers. If you use a strongly typed HTML helper, make sure to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"@model")," directive for every the class that you are using with the strongly typed HTML helper."),(0,o.kt)("h3",{id:"html-helpers-for-other-form-elements"},"HTML Helpers for Other Form Elements"),(0,o.kt)("p",null,"We can also use HTML helper methods to generate many other form elements as well. To learn more, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.rendering.ihtmlhelper?view=aspnetcore-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"IHtmlHelper Interface")," documentation"),". The number of methods listed can be overwhelming but we recommend taking a look at the options."),(0,o.kt)("h2",{id:"adding-html-helper-methods-to-the-index-view"},"Adding HTML Helper Methods to the Index View"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we've added a form, we can run our application and create new ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),"s. Let's return to ",(0,o.kt)("inlineCode",{parentName:"p"},"Views/Items/Index.cshtml")," to make a few more updates and get more practice with HTML helper methods. Here's how we'll update our view:"),(0,o.kt)("div",{class:"filename"},"Views/Items/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models;\n\n<h1>Items</h1>\n\n<ul>\n  @foreach(Item item in Model)\n  {\n    <li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>\n  }\n</ul>\n\n<p>@Html.ActionLink("Add new item", "Create")</p>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We start with a using directive for ",(0,o.kt)("inlineCode",{parentName:"p"},"@using ToDoList.Models;")," so that we don't have to explicitly list that namespace when we reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," class in our loop.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"@foreach")," loop that includes an HTML helper method to link to a specific item's detail:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>\n')),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method incorporates a technique called ",(0,o.kt)("strong",{parentName:"p"},"string interpolation"),". This is similar to using a template literal in JavaScript. When we use string interpolation, C# will evaluate an expression inside a string."),(0,o.kt)("h3",{id:"practice-with-string-interpolation"},"Practice with String Interpolation"),(0,o.kt)("p",null,"We can test this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"$ dotnet-script")," into the command line to access the REPL, and then try this out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> string name = "Bob";\n> string newGreeting = $"How are you, {name}?";\n> newGreeting\n"How are you, Bob?"\n')),(0,o.kt)("p",null,"In the example above, we pass the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," into a string using string interpolation: ",(0,o.kt)("inlineCode",{parentName:"p"},'$"How are you, {name}"'),". Because we are using string interpolation, the expression is evaluated and passed into the string."),(0,o.kt)("h3",{id:"default-routing-for-actionlink-and-adding-an-optional-argument"},"Default Routing for ",(0,o.kt)("inlineCode",{parentName:"h3"},"ActionLink()")," and Adding an Optional Argument"),(0,o.kt)("p",null,"Let's take another look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method we use in ",(0,o.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId })</li>\n')),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," method will route to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," action in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," that we haven't created yet (we will in the next lesson). Notice that we don't need to include the argument ",(0,o.kt)("inlineCode",{parentName:"p"},'"Items"')," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," in order to route to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details")," view within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml")," view. That's because if no controller is specified, an ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()")," will route by default to the controller that matches the view it is in; since we're in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," views, we'll route by default to the  matching action (",(0,o.kt)("inlineCode",{parentName:"p"},"Details()"),") within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemsController"),"."),(0,o.kt)("p",null,"Notice as well, that we're passing a different kind of variable as an optional extra argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink()"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"new { id = item.ItemId }"),". Well, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionLink")," method can take an object containing data that will be passed as arguments to the controller action it routes to. "),(0,o.kt)("p",null,"The code ",(0,o.kt)("inlineCode",{parentName:"p"},"new { id = item.ItemId }")," creates an anonymous object with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"; this is how .NET knows which ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to use in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Details()")," action. However, for .NET to route us to the details page for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),", ",(0,o.kt)("strong",{parentName:"p"},"the property names of the object we pass in ",(0,o.kt)("em",{parentName:"strong"},"must")," match parameter names used by the target method"),". In this case, the property of the anonymous object ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," must match the parameter name in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Details()")," route, like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"Details(int id)"),". We'll make this change in the next lesson."),(0,o.kt)("p",null,"If we run the server, we'll see that all of the items on our list are now clickable. However, we don't have a corresponding route in our controller yet. In the next lesson, we'll create this route along with a view."),(0,o.kt)("p",null,"In this lesson, we covered a number of different HTML helper methods, including model directives, link helper methods and form helper methods. While the new syntax may feel a little strange at first, these helper methods can make our lives much easier as developers."))}h.isMDXComponent=!0}}]);