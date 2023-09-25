"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={title:"2. MVC Client: GetAll()",id:"mvc_client_getall",slug:"mvc_client_getall",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/16_building-an-api/2a_client_get_all.md"},o=void 0,r={unversionedId:"c_and_net_part_time_evening/building-an-api/mvc_client_getall",id:"c_and_net_part_time_evening/building-an-api/mvc_client_getall",title:"2. MVC Client: GetAll()",description:"Over the weekend, you learned how to create an API. In the last course section you learned how to make a simple API call from a client (a console app and an MVC app). Over the next several lessons, we're going to put these concepts together and build an MVC client with full CRUD functionality that will interact with our API.",source:"@site/docs/c_and_net_part_time_evening/16_building-an-api/2a_client_get_all.md",sourceDirName:"c_and_net_part_time_evening/16_building-an-api",slug:"/c_and_net_part_time_evening/building-an-api/mvc_client_getall",permalink:"/lhtp/c_and_net_part_time_evening/building-an-api/mvc_client_getall",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"2. MVC Client: GetAll()",id:"mvc_client_getall",slug:"mvc_client_getall",hide_table_of_contents:!0,sidebar_position:19,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/16_building-an-api/2a_client_get_all.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"1. Building an API - Part 2 (day 2)",permalink:"/lhtp/c_and_net_part_time_evening/building-an-api/building_an_api___part_2_day_2"},next:{title:"1. Building an API - Part 3 (day 3)",permalink:"/lhtp/c_and_net_part_time_evening/building-an-api/building_an_api___part_3_day_3"}},s={},p=[{value:"Cretaceous Park Client Project Structure",id:"cretaceous-park-client-project-structure",level:2},{value:"Project Setup",id:"project-setup",level:3},{value:"Create the <code>Animal</code> and <code>ApiHelper</code> Models",id:"create-the-animal-and-apihelper-models",level:2},{value:"Adding a Controller and View",id:"adding-a-controller-and-view",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Over the weekend, you learned how to create an API. In the last course section you learned how to make a simple API call from a client (a console app and an MVC app). Over the next several lessons, we're going to put these concepts together and build an MVC client with full CRUD functionality that will interact with our API."),(0,l.kt)("h2",{id:"cretaceous-park-client-project-structure"},"Cretaceous Park Client Project Structure"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"First, let's discuss the structure of this project. We ",(0,l.kt)("em",{parentName:"p"},"could")," put the API and the client (the application consuming the API data) in the same repository. However, the point of creating an APIs is that it is modular and can be accessed from ",(0,l.kt)("em",{parentName:"p"},"any")," frontend client that can make API calls \u2014 a JavaScript web app, a Ruby and Rails web app, a React Native phone app, or something else entirely! With that in mind, it makes more sense to keep our backend API and frontend MVC projects in separate repositories, running on different ports."),(0,l.kt)("p",null,"The process of building out our client will be very similar to previous lessons where we learned how to use RestSharp and Newtonsoft.Json, so these steps will not be laid out in as much detail as the initial lessons where we built an MVC application that made calls to the New York Times API. The few important differences will be highlighted."),(0,l.kt)("p",null,"We'll also scaffold an ASP.NET Core MVC app with the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet new")," templating tool. Instead of deleting the boilerplate models and controllers like we did in our API, we'll leave them intact. Because of this, our application will be an odd mix of boilerplate and Cretaceous Park. However, it will give us the opportunity to explore the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet new")," MVC template a bit more than we have in the past."),(0,l.kt)("h3",{id:"project-setup"},"Project Setup"),(0,l.kt)("p",null,"Outside of ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousApi.Solution"),", create a new directory called ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousClient.Solution"),", containing a ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," file and a README. Your ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," should contain ",(0,l.kt)("inlineCode",{parentName:"p"},"obj"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"appsettings.*.json")," if you will be adding sensitive data to it."),(0,l.kt)("p",null,"Next, initialize Git and commit your ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," to your Git history. "),(0,l.kt)("p",null,"Next, run the following command within the ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousClient.Solution/")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ dotnet new mvc -o CretaceousClient --framework net6.0\n")),(0,l.kt)("p",null,"Next, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"RestSharp")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"NewtonSoft.Json")," packages as shown in ",(0,l.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/authentication-with-identity/making-an-api-call-with-restsharp"},"Making an API Call with RestSharp")," and ",(0,l.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/authentication-with-identity/deserializing-api-responses-with-newtonsoft-json"},"Deserializing API Responses with Newtonsoft.Json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ dotnet add package RestSharp --version 108.0.3\n$ dotnet add package Newtonsoft.Json --version 13.0.2\n")),(0,l.kt)("p",null,"The next thing we'll want to do is disable a nullable context for the entire project. Comment out the line ",(0,l.kt)("inlineCode",{parentName:"p"},"<Nullable>enable</Nullable>")," within ",(0,l.kt)("inlineCode",{parentName:"p"},"CreatceousClient.csproj"),"."),(0,l.kt)("div",{class:"filename"},"CretaceousClient.csproj"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'<Project Sdk="Microsoft.NET.Sdk.Web">\n\n  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    \x3c!-- <Nullable>enable</Nullable> --\x3e\n    <ImplicitUsings>enable</ImplicitUsings>\n  </PropertyGroup>\n\n</Project>\n')),(0,l.kt)("p",null,"We'll leave implicit using directives enabled in our ",(0,l.kt)("inlineCode",{parentName:"p"},".csproj")," file, however you are welcome to comment it out if you prefer."),(0,l.kt)("p",null,"Because we're disabling a project-wide nullable context, we'll also have to update the boilerplate ",(0,l.kt)("inlineCode",{parentName:"p"},"Models/ErrorViewModel.cs")," to create a nullable context, because it uses a nullable type. Add the following to the top of the file:"),(0,l.kt)("div",{class:"filename"},"Models/ErrorViewModel.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"#nullable enable\n...\n")),(0,l.kt)("p",null,"Just as we can see in ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorViewModel.cs"),", we can still use nullable types in any file throughout our project, we just need to create ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references#nullable-contexts"},"a nullable context")," using a directive like ",(0,l.kt)("inlineCode",{parentName:"p"},"#nullable enable"),". To review more information about nullable types, start with the LearnHowToProgram.com lesson on ",(0,l.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/c-and-net/test-driven-development-with-c/nullable-types"},"Nullable Types"),". "),(0,l.kt)("h2",{id:"create-the-animal-and-apihelper-models"},"Create the ",(0,l.kt)("inlineCode",{parentName:"h2"},"Animal")," and ",(0,l.kt)("inlineCode",{parentName:"h2"},"ApiHelper")," Models"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Next, we'll create an ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," class in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Models")," folder, utilizing the properties we defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousApi")," along with a ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAnimals()")," method. This requires very little new code and is very similar to code we built in the lessons on building an MVC app that queries the New York Times API."),(0,l.kt)("div",{class:"filename"},"Models/Animal.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\nusing System;\nusing Newtonsoft.Json;\nusing Newtonsoft.Json.Linq;\n\nnamespace CretaceousClient.Models\n{\n  public class Animal\n  {\n    public int AnimalId { get; set; }\n    public string Name { get; set; }\n    public string Species { get; set; }\n    public int Age { get; set; }\n\n    public static List<Animal> GetAnimals()\n    {\n      var apiCallTask = ApiHelper.GetAll();\n      var result = apiCallTask.Result;\n\n      JArray jsonResponse = JsonConvert.DeserializeObject<JArray>(result);\n      List<Animal> animalList = JsonConvert.DeserializeObject<List<Animal>>(jsonResponse.ToString());\n\n      return animalList;\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Let's take a closer look at the ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal.GetAnimals()")," method. This method handles calling a method that queries our API for all ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," objects and deserializing the API's response."),(0,l.kt)("p",null,"Within this method we call on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.GetAll()")," method; we have yet to create that class and method. However, one thing to note now is that we'll need a different ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," class and ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper")," class method for each type of API call (GET, POST, PUT, DELETE) we want to make, because each returns a different format of data. "),(0,l.kt)("p",null,"Notice that we don't pass an API key as an argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.GetAll();"),". Your personal API will not require a key unless you add Token-Based Authentication through your further exploration."),(0,l.kt)("p",null,"Next, take note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"jsonResponse")," variable is of the type ",(0,l.kt)("inlineCode",{parentName:"p"},"JArray")," as opposed to ",(0,l.kt)("inlineCode",{parentName:"p"},"JObject"),". Since we're getting a ",(0,l.kt)("em",{parentName:"p"},"collection")," of results, we need to expect an array of objects. Remember that these types are from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," library."),(0,l.kt)("p",null,"Next, let's actually create the ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper")," class. This class will contain the definition for our ",(0,l.kt)("inlineCode",{parentName:"p"},"ApiHelper.GetAll()")," method which actually handles making a call to our Cretaceous Park API."),(0,l.kt)("div",{class:"filename"},"Models/ApiHelper.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing RestSharp;\n\nnamespace CretaceousClient.Models\n{\n  public class ApiHelper\n  {\n    public static async Task<string> GetAll()\n    {\n      RestClient client = new RestClient("http://localhost:5000/");\n      RestRequest request = new RestRequest($"api/animals", Method.Get);\n      RestResponse response = await client.GetAsync(request);\n      return response.Content;\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Your API call should include the port that ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousApi")," is set to listen to. For the purposes of this project, we assume it listens on port ",(0,l.kt)("inlineCode",{parentName:"p"},"5000")," using HTTP, as it does in the example repo. If you choose to deploy an API at some point, you'll need to update the URL to include the domain of the deployed site instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),". The endpoint itself for this particular call will be ",(0,l.kt)("inlineCode",{parentName:"p"},"api/animals"),". Also note that when you are done developing, you should revert back to using HTTPS with your API, and make a corresponding update to the domain in your MVC client requests."),(0,l.kt)("p",null,"Notice that we're not using the ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecuteAsync()")," RestSharp method as we did in the New York Times API call example project. Now we're using ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAsync()"),". There's actually ",(0,l.kt)("a",{parentName:"p",href:"https://restsharp.dev/usage.html#making-a-call"},"a variety of methods")," we can use to make an API call with RestSharp. The advantage of using ",(0,l.kt)("inlineCode",{parentName:"p"},"GetAsync()")," is that it will throw an error if the server returns an error to us. This is vital if we want to create a robust frontend application. We'll use similar methods for other requests:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PostAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PutAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DeleteAsync()"))),(0,l.kt)("p",null,"Take note that we won't be including additional error handling or model validation as we put together a basic MVC frontend to communicate with our Cretaceous Park API. If you want to learn more about error handling with RestSharp, ",(0,l.kt)("a",{parentName:"p",href:"https://restsharp.dev/error-handling.html"},"visit the docs"),"."),(0,l.kt)("h2",{id:"adding-a-controller-and-view"},"Adding a Controller and View"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"In order to view our list of animals in our MVC client, we still need to do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a controller route"),(0,l.kt)("li",{parentName:"ul"},"Create the corresponding views")),(0,l.kt)("p",null,"Let's start by creating the ",(0,l.kt)("inlineCode",{parentName:"p"},"AnimalsController.cs"),":"),(0,l.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing CretaceousClient.Models;\n\nnamespace CretaceousClient.Controllers;\n\npublic class AnimalsController : Controller\n{\n  public IActionResult Index()\n  {\n    List<Animal> animals = Animal.GetAnimals();\n    return View(animals);\n  }\n}\n")),(0,l.kt)("p",null,"Notice that we're using a ",(0,l.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#file-scoped-namespaces"},"file-scoped namespace")," for the ",(0,l.kt)("inlineCode",{parentName:"p"},"CretaceousClient.Controllers")," namespace."),(0,l.kt)("p",null,"Next, we'll create the view:"),(0,l.kt)("div",{class:"filename"},"Views/Animals/Index.cshtml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'@{\n    ViewData["Title"] = "Animals";\n}\n\n<h1>All Cretaceous Animals:</h1>\n\n<ol>\n@foreach (Animal animal in Model)\n{\n  <li><strong>@animal.Name</strong> the @animal.Species | <a href="/Animals/Details/@(animal.AnimalId)">View Details</a></li>\n}\n</ol>\n')),(0,l.kt)("p",null,"We've set a value for ",(0,l.kt)("inlineCode",{parentName:"p"},'ViewData["Title"]')," so that we set the title of our ",(0,l.kt)("inlineCode",{parentName:"p"},"index.cshtml")," webpage. The other boilerplate views specify the title for each webpage, so we will do the same in our views. If we don't, there will be no title. To learn more about ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewData")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewBag")," to set a webpage title, ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-6.0#using-viewdata-and-viewbag-simultaneously"},"visit the docs"),"."),(0,l.kt)("p",null,"Otherwise, notice that there's no layout specified. That's because the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotnet new")," MVC template includes a ",(0,l.kt)("inlineCode",{parentName:"p"},"_ViewStart.cshtml")," file that specifies what all views should start with: the layout file!"),(0,l.kt)("div",{class:"filename"},"Views/_ViewStart.cshtml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'@{\n    Layout = "_Layout";\n}\n')),(0,l.kt)("p",null,"More specifically, the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"_ViewStart.cshtml")," is run before the code in any view is run. To learn more, ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/layout?view=aspnetcore-6.0#running-code-before-each-view"},"check out the MS Docs"),"."),(0,l.kt)("p",null,"Next, let's add a link to ",(0,l.kt)("inlineCode",{parentName:"p"},"Animals/Index.cshtml")," to our project's navbar. Add the following navbar item to the ",(0,l.kt)("inlineCode",{parentName:"p"},"<nav>")," element in ",(0,l.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<li class="nav-item">\n    <a class="nav-link text-dark" asp-area="" asp-controller="Animals" asp-action="Index">See Animals</a>\n</li>\n')),(0,l.kt)("p",null,"And here's what the ",(0,l.kt)("inlineCode",{parentName:"p"},"<nav>")," element should now look like:"),(0,l.kt)("div",{class:"filename"},"Views/Shared/_Layout.cshtml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">\n    <div class="container-fluid">\n        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">CretaceousClient</a>\n        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"\n                aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">\n            <ul class="navbar-nav flex-grow-1">\n                <li class="nav-item">\n                    <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link text-dark" asp-area="" asp-controller="Animals" asp-action="Index">See Animals</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n...\n')),(0,l.kt)("p",null,"Curious where the navbar and styling comes from? Well ",(0,l.kt)("strong",{parentName:"p"},"Bootstrap"),", of course! "),(0,l.kt)("p",null,"Also note that the boilerplate ",(0,l.kt)("inlineCode",{parentName:"p"},".cshtml")," files makes use of ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0"},"tag helpers")," like ",(0,l.kt)("inlineCode",{parentName:"p"},"asp-area")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"asp-controller"),", which we haven't worked with a lot. To learn more about tag helpers, ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-6.0"},"visit the MS docs"),"."),(0,l.kt)("p",null,"Finally, let's update the welcome message in ",(0,l.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml")," so it is about our Cretaceous Park website:"),(0,l.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'@{\n    ViewData["Title"] = "Home Page";\n}\n\n<div class="text-center">\n  <h1 class="display-4">Welcome to the Cretaceous Park!</h1>\n  <p>Get to know a few of <a href="/animals">our animals</a> from the Cretaceous period!</p>\n</div>\n')),(0,l.kt)("p",null,"And that's it! If you want to test out this functionality so far, make sure that you have both the API and client servers running."),(0,l.kt)("p",null,"In the next lesson in this series, we'll discuss making an API call for a single animal's details."))}u.isMDXComponent=!0}}]);