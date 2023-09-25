"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[50435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?l.createElement(h,o(o({ref:t},p),{},{components:n})):l.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=n(87462),a=(n(67294),n(3905));const i={title:"MVC Client: POST, PUT, and DELETE",id:"mvc_client_post_put_and_delete",slug:"mvc_client_post_put_and_delete",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/2c_client_post_put_delete.md"},o=void 0,r={unversionedId:"c_and_net/building-an-api/mvc_client_post_put_and_delete",id:"c_and_net/building-an-api/mvc_client_post_put_and_delete",title:"MVC Client: POST, PUT, and DELETE",description:"Over the last two lessons, we've written methods to GET data from our API. Now we're ready to add methods to POST, PUT, and DELETE data.",source:"@site/docs/c_and_net/11_building-an-api/2c_client_post_put_delete.md",sourceDirName:"c_and_net/11_building-an-api",slug:"/c_and_net/building-an-api/mvc_client_post_put_and_delete",permalink:"/lhtp/c_and_net/building-an-api/mvc_client_post_put_and_delete",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"MVC Client: POST, PUT, and DELETE",id:"mvc_client_post_put_and_delete",slug:"mvc_client_post_put_and_delete",hide_table_of_contents:!0,sidebar_position:22,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/2c_client_post_put_delete.md"},sidebar:"c_and_net",previous:{title:"MVC Client: GetDetails()",permalink:"/lhtp/c_and_net/building-an-api/mvc_client_getdetails"},next:{title:"Communicating With An API - Part 1",permalink:"/lhtp/c_and_net/building-an-api/communicating_with_an_api___part_1"}},s={},d=[{value:"POST",id:"post",level:2},{value:"Adding Controller Actions and Views",id:"adding-controller-actions-and-views",level:3},{value:"PUT",id:"put",level:2},{value:"Adding Controller Actions and Views",id:"adding-controller-actions-and-views-1",level:3},{value:"DELETE",id:"delete",level:2},{value:"Adding Controller Actions and Views",id:"adding-controller-actions-and-views-2",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the last two lessons, we've written methods to GET data from our API. Now we're ready to add methods to POST, PUT, and DELETE data. "),(0,a.kt)("h2",{id:"post"},"POST"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start by adding functionality to CREATE animals. Here's the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Post()")," method that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"Models/ApiHelper.cs"),":"),(0,a.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nnamespace CretaceousClient.Models\n{\n  public class ApiHelper\n  {\n    ...\n\n    public static async void Post(string newAnimal)\n    {\n      RestClient client = new RestClient("http://localhost:5000/");\n      RestRequest request = new RestRequest($"api/animals", Method.Post);\n      request.AddHeader("Content-Type", "application/json");\n      request.AddJsonBody(newAnimal);\n      await client.PostAsync(request);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"First, notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"newAnimal")," is a string. We will convert our objects into JSON before passing them to our ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiHelper")," class."),(0,a.kt)("p",null,"The arguments passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"RestRequest()")," method specify the route and method that should be passed into the API controller. "),(0,a.kt)("p",null,"When making a POST request to our API (or any request that will be modifying our database), we need to add a header and a body. This way, our API can recognize the data types it receives and pass in the right argument for the controller route parameter(s). "),(0,a.kt)("p",null,"We're also using the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostAsync()")," method, which will throw on a server error, just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAsync()")," method we used in the last two lessons. To learn about the details of how error handling with RestSharp works, ",(0,a.kt)("a",{parentName:"p",href:"https://restsharp.dev/error-handling.html"},"visit the docs"),". "),(0,a.kt)("p",null,"The corresponding method in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal")," model should look like this:"),(0,a.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nnamespace CretaceousClient.Models\n{\n  public class Animal\n  {\n    ...\n\n    public static void Post(Animal animal)\n    {\n      string jsonAnimal = JsonConvert.SerializeObject(animal);\n      ApiHelper.Post(jsonAnimal);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"We only need to convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal")," object into JSON and then call our helper method."),(0,a.kt)("p",null,"Let's see how we'll call on ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal.Post()")," from our ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController")," next."),(0,a.kt)("h3",{id:"adding-controller-actions-and-views"},"Adding Controller Actions and Views"),(0,a.kt)("p",null,"Here are the two new controller actions that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController"),":"),(0,a.kt)("div",{class:"filename"},"Controller/AnimalsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  public ActionResult Create()\n  {\n    return View();\n  }\n\n  [HttpPost]\n  public ActionResult Create(Animal animal)\n  {\n    Animal.Post(animal);\n    return RedirectToAction("Index");\n  }\n...\n')),(0,a.kt)("p",null,"Next, we'll start by adding a link to a create page from ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Index.cshtml"),'. We\'ll update our view to include a new section called "Actions" where users can click a link to create new animals. '),(0,a.kt)("p",null,"Here how we'll update this view:"),(0,a.kt)("div",{class:"filename"},"Views/Animals/Index.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n    ViewData["Title"] = "Animals";\n}\n\n<h1>All Cretaceous Animals</h1>\n\n<h3>Actions:</h3>\n\n<p>@Html.ActionLink("Add a new animal to the park", "Create")</p>\n\n<h3>Animals:</h3>\n<ol>\n@foreach (Animal animal in Model)\n{\n  <li><strong>@animal.Name</strong> the @animal.Species | <a href="/Animals/Details/@(animal.AnimalId)">View Details</a></li>\n}\n</ol>\n')),(0,a.kt)("p",null,"Next, let's make the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Create.cshtml")," view. This view will look similar to all of the CREATE forms we've put together in the past. "),(0,a.kt)("div",{class:"filename"},"Views/Animals/Create.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = "Create Animal";\n}\n\n@model CretaceousClient.Models.Animal\n\n<h4>Add a new animal to Cretaceous Park</h4>\n\n@using (Html.BeginForm())\n{\n  @Html.LabelFor(model => model.Name)\n  @Html.TextBoxFor(model => model.Name)\n  <br />\n  @Html.LabelFor(model => model.Species)\n  @Html.TextBoxFor(model => model.Species)\n  <br />\n  @Html.LabelFor(model => model.Age)\n  @Html.TextBoxFor(model => model.Age)\n  <br />\n  <br />\n  <input type="submit" value="Add new animal" class="btn btn-primary"/>\n}\n\n<br />\n<p>@Html.ActionLink("Back to all animals", "Index")</p>\n')),(0,a.kt)("h2",{id:"put"},"PUT"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, we'll add functionality to UPDATE animals. Here's the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Put()")," method that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"Models/ApiHelper.cs"),":"),(0,a.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nnamespace CretaceousClient.Models\n{\n  public class ApiHelper\n  {\n    ...\n\n    public static async void Put(int id, string newAnimal)\n    {\n      RestClient client = new RestClient("http://localhost:5000/");\n      RestRequest request = new RestRequest($"api/animals/{id}", Method.Put);\n      request.AddHeader("Content-Type", "application/json");\n      request.AddJsonBody(newAnimal);\n      await client.PutAsync(request);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Our PUT functionality is very similar to our POST functionality. The key difference is that we need to include an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," for our PUT functionality. Unlike with a POST request, where we are simply adding a record to the database, we are actually modifying an existing record \u2014 and we need that record's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to correctly modify it."),(0,a.kt)("p",null,"Here's the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal.Put()")," method: "),(0,a.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nnamespace CretaceousClient.Models\n{\n  public class Animal\n  {\n    ...\n\n    public static void Put(Animal animal)\n    {\n      string jsonAnimal = JsonConvert.SerializeObject(animal);\n      ApiHelper.Put(animal.AnimalId, jsonAnimal);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"The only difference between POST and PUT in our model is the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiHelper")," method we call, and the inclusion of the animal's ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalId")," property."),(0,a.kt)("p",null,"Let's see how we'll call on ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal.Put()")," from our ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController")," next."),(0,a.kt)("h3",{id:"adding-controller-actions-and-views-1"},"Adding Controller Actions and Views"),(0,a.kt)("p",null,"Here are the two new controller actions that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController"),":"),(0,a.kt)("div",{class:"filename"},"Controller/AnimalsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  public ActionResult Edit(int id)\n  {\n    Animal animal = Animal.GetDetails(id);\n    return View(animal);\n  }\n\n  [HttpPost]\n  public ActionResult Edit(Animal animal)\n  {\n    Animal.Put(animal);\n    return RedirectToAction("Details", new { id = animal.AnimalId});\n  }\n...\n')),(0,a.kt)("p",null,"Next, we'll start by adding a link to the edit page from ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Details.cshtml"),". We'll simply add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Html.ActionLink()")," above the existing one that routes us back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Index.cshtml"),"."),(0,a.kt)("p",null,"Here how we'll update this view:"),(0,a.kt)("div",{class:"filename"},"Views/Animals/Details.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = $"Details for {@Model.Name}";\n}\n\n<h1>All About @Model.Name</h1>\n\n<p>Species: @Model.Species</p>\n<p>Age: @Model.Age</p>\n\n<p>@Html.ActionLink("Edit details", "Edit", new { id = @Model.AnimalId })</p>\n<p>@Html.ActionLink("Return to all animals", "Index")</p>\n')),(0,a.kt)("p",null,"Next, we'll create the actual ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Edit.cshtml")," view. Here our form will closely match the edit forms we've created in the past:"),(0,a.kt)("div",{class:"filename"},"Views/Animals/Edit.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = $"Edit {Model.Name}";\n}\n\n@model CretaceousClient.Models.Animal\n\n<h4>Edit @Model.Name</h4>\n\n@using (Html.BeginForm())\n{\n  @Html.HiddenFor(model => model.AnimalId)\n  @Html.LabelFor(model => model.Name)\n  @Html.TextBoxFor(model => model.Name, new { @Value = Model.Name})\n  <br />\n  @Html.LabelFor(model => model.Species)\n  @Html.TextBoxFor(model => model.Species, new { @Value = Model.Species})\n  <br />\n  @Html.LabelFor(model => model.Age)\n  @Html.TextBoxFor(model => model.Age, new { Value = Model.Age})\n  <br />\n  <br />\n  <input type="submit" value="Edit animal" class="btn btn-primary"/>\n}\n\n<br />\n<p>@Html.ActionLink("Back to details", "Details", new {id = @Model.AnimalId})</p>\n')),(0,a.kt)("h2",{id:"delete"},"DELETE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The last functionality we need to add is the ability to DELETE animals. Here's the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete()")," method that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"Models/ApiHelper.cs"),":"),(0,a.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nnamespace CretaceousClient.Models\n{\n  public class ApiHelper\n  {\n    ...\n\n    public static async void Delete(int id)\n    {\n      RestClient client = new RestClient("http://localhost:5000/");\n      RestRequest request = new RestRequest($"api/animals/{id}", Method.Delete);\n      request.AddHeader("Content-Type", "application/json");\n      await client.DeleteAsync(request);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Our DELETE method won't require a body \u2014 only the id of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal")," we're going to delete."),(0,a.kt)("p",null,"Next, we'll add a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal.Delete()")," method. This will be the simplest we've written so far:"),(0,a.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nnamespace CretaceousClient.Models\n{\n  public class Animal\n  {\n    ...\n\n    public static void Delete(int id)\n    {\n      ApiHelper.Delete(id);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Let's see how we'll call on ",(0,a.kt)("inlineCode",{parentName:"p"},"Animal.Delete()")," from our ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController")," next."),(0,a.kt)("h3",{id:"adding-controller-actions-and-views-2"},"Adding Controller Actions and Views"),(0,a.kt)("p",null,"Here are the two new controller actions that we'll add to ",(0,a.kt)("inlineCode",{parentName:"p"},"AnimalsController"),":"),(0,a.kt)("div",{class:"filename"},"Controller/AnimalsController.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  public ActionResult Delete(int id)\n  {\n    Animal animal = Animal.GetDetails(id);\n    return View(animal);\n  }\n\n  [HttpPost, ActionName("Delete")]\n  public ActionResult DeleteConfirmed(int id)\n  {\n    Animal.Delete(id);\n    return RedirectToAction("Index");\n  }\n...\n')),(0,a.kt)("p",null,"Remember that we name the second action POST ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed()")," because if we named it POST ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete()"),", we'd have a conflict caused by two methods having the same signature: name and parameters. That's why it's called ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed()"),". We add the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},'ActionName("Delete")')," so that our ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteConfirmed()")," POST action can still be found by the name ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete()"),". This ensures that our form made with HTML helper methods in ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Delete.cshtml")," works as expected. "),(0,a.kt)("p",null,"Next, we'll add a link to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Delete.cshtml")," view in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Details.cshtml")," view. We'll add one new ",(0,a.kt)("inlineCode",{parentName:"p"},"Html.ActionLink()"),":"),(0,a.kt)("div",{class:"filename"},"Views/Animals/Details.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = $"Details for {@Model.Name}";\n}\n\n<h1>All About @Model.Name</h1>\n\n<p>Species: @Model.Species</p>\n<p>Age: @Model.Age</p>\n\n<p>@Html.ActionLink("Edit details", "Edit", new { id = @Model.AnimalId })</p>\n<p>@Html.ActionLink("Delete animal", "Delete", new { id = @Model.AnimalId })</p>\n<p>@Html.ActionLink("Return to all animals", "Index")</p>\n')),(0,a.kt)("p",null,"Next, we'll add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Animals/Delete.cshtml")," view:"),(0,a.kt)("div",{class:"filename"},"Views/Animals/Delete.cshtml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  ViewData["Title"] = $"Delete {Model.Name}";\n}\n\n@model CretaceousClient.Models.Animal\n\n<h4>Are you sure you want to delete @Model.Name?</h4>\n\n@using (Html.BeginForm())\n{\n  <input type="submit" value="Delete" class="btn btn-primary"/>\n}\n\n@Html.ActionLink("Back to details", "Details", new { id = @Model.AnimalId})\n')),(0,a.kt)("p",null,"We're done! Now our MVC application has full CRUD capability! "),(0,a.kt)("p",null,"To test out the functionality of our Cretaceous Park MVC client, make sure of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Both the MVC and API projects should be running."),(0,a.kt)("li",{parentName:"ul"},"Make sure the MVC and API projects are running on different port numbers."),(0,a.kt)("li",{parentName:"ul"},"Make sure that the request URLs in the MVC ",(0,a.kt)("inlineCode",{parentName:"li"},"ApiHelper")," class are pointing to the right port number for the API."),(0,a.kt)("li",{parentName:"ul"},"Using HTTPS should be fine once development is finished. If you need to continue development or use Postman to test out your API, make sure to use HTTP to avoid issues related to security certificates.")),(0,a.kt)("p",null,"You can follow the above steps for the basic troubleshooting of issues with getting the API and MVC client communicating as expected.  "),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We've just scratched the surface of what we should do to make a robust frontend. What's left? We could..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create search or filter functionality in our MVC so that we can make use of the support for query strings that we added to our API's ",(0,a.kt)("inlineCode",{parentName:"li"},"Get()")," route. To learn how to add parameters to an MVC, check out ",(0,a.kt)("a",{parentName:"li",href:"https://restsharp.dev/usage.html#query-string"},"this RestSharp documentation on query strings"),"."),(0,a.kt)("li",{parentName:"ul"},"Add model validation in our MVC so that our forms catch errors before sending anything to our database."),(0,a.kt)("li",{parentName:"ul"},"Add model validation in our API so that our API can deliver quality error messages to any client. Note that even though we covered how to do this, model validation was not actually implemented in the Cretaceous Park API example project."),(0,a.kt)("li",{parentName:"ul"},"Add error handling in our MVC for API calls that do not return as expected (200, 201, 204 HTTP status codes)."),(0,a.kt)("li",{parentName:"ul"},"Learn how to optimize our API calls and de/serialization by learning how to use other ",(0,a.kt)("a",{parentName:"li",href:"https://restsharp.dev/"},"RestSharp")," methods."),(0,a.kt)("li",{parentName:"ul"},"Update our MVC frontend to work with any further exploration implemented in the API: pagination, authentication, versioning, or CORS."),(0,a.kt)("li",{parentName:"ul"},"Explore the boilerplate MVC template and update its content or styles to make the Cretaceous Park Client look as professional as possible.")),(0,a.kt)("p",null,"Happy coding!"),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-cretaceous-park-client-csharp-net6/"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Cretaceous Park MVC Client"))))}c.isMDXComponent=!0}}]);