"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[55549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"12. Documenting Your API",id:"documenting_your_api",slug:"documenting_your_api",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0j_documenting_an_api.md"},i=void 0,l={unversionedId:"c_and_net/building-an-api/documenting_your_api",id:"c_and_net/building-an-api/documenting_your_api",title:"12. Documenting Your API",description:"In this lesson we'll learn the details that you should include in a README to document your API.",source:"@site/docs/c_and_net/11_building-an-api/0j_documenting_an_api.md",sourceDirName:"c_and_net/11_building-an-api",slug:"/c_and_net/building-an-api/documenting_your_api",permalink:"/lhtp/c_and_net/building-an-api/documenting_your_api",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"12. Documenting Your API",id:"documenting_your_api",slug:"documenting_your_api",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0j_documenting_an_api.md"},sidebar:"c_and_net",previous:{title:"11. Further Exploration with APIs",permalink:"/lhtp/c_and_net/building-an-api/further_exploration_with_apis"},next:{title:"13. Team Week: Project Pitch",permalink:"/lhtp/c_and_net/building-an-api/team_week_project_pitch"}},u={},s=[{value:"How to Document API Endpoints",id:"how-to-document-api-endpoints",level:2},{value:"Endpoints",id:"endpoints",level:3},{value:"Optional Query String Parameters for GET Request",id:"optional-query-string-parameters-for-get-request",level:3},{value:"Additional Requirements for POST Request",id:"additional-requirements-for-post-request",level:3},{value:"Additional Requirements for PUT Request",id:"additional-requirements-for-put-request",level:3},{value:"Documentation on Further Exploration Objectives",id:"documentation-on-further-exploration-objectives",level:3},{value:"Reminder: Make your READMEs Engaging by Using a Variety of Markdown",id:"reminder-make-your-readmes-engaging-by-using-a-variety-of-markdown",level:3},{value:"Should Swagger Documentation Be Made Public?",id:"should-swagger-documentation-be-made-public",level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson we'll learn the details that you should include in a README to document your API. "),(0,o.kt)("p",null,"We'll also revisit the topic of including public access to Swagger documentation and learn how to hide API routes from Swagger. In the end, we want other developers to run our projects and explore the source code, so we won't have a big reason to prevent access to Swagger documentation. "),(0,o.kt)("h2",{id:"how-to-document-api-endpoints"},"How to Document API Endpoints"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When we consider how we want to document our API's endpoints, we need to make sure that we consider what all is in our API. For example, in our API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have multiple endpoints, all of which we want to include in our documentation."),(0,o.kt)("li",{parentName:"ul"},"Some endpoints include optional query strings that we'll want to document."),(0,o.kt)("li",{parentName:"ul"},"Some endpoints require a body to be included along with the request.")),(0,o.kt)("p",null,"With that we have a solid list of information we need to include in our README. And other than including the right information, we'll also want to include examples! Let's get into each topic and what sufficient documentation looks like."),(0,o.kt)("h3",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"To document out projects endpoints, a code block or markdown table will work well to list the endpoints and the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP request method")," for the endpoint. Here's what this should look like for our AnimalsController:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals/\nGET http://localhost:5000/api/animals/{id}\nPOST http://localhost:5000/api/animals/\nPUT http://localhost:5000/api/animals/{id}\nDELETE http://localhost:5000/api/animals/{id}\n")),(0,o.kt)("p",null,"It's helpful to specify that ",(0,o.kt)("inlineCode",{parentName:"p"},"{id}")," in the URL is a variable and it should be replaced with the id number of the animal the user wants to GET, PUT, or DELETE."),(0,o.kt)("h3",{id:"optional-query-string-parameters-for-get-request"},"Optional Query String Parameters for GET Request"),(0,o.kt)("p",null,"To explain the optional query strings we can include in GET requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/"),", we can use a markdown table, including the parameter name, the data type, whether it's required, and a short description:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"species"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"not required"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns animals with a matching species value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"not required"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns animals with a matching name value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"minimumAge"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"not required"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns animals that have an age value that is greater than or equal to the specified minimumAge value")))),(0,o.kt)("p",null,"It's helpful to explain that these query strings provide a way to filter the animals."),(0,o.kt)("p",null,'Next, make sure to include example queries. The following query will return all animals with a species value of "Dinosaur":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals?species=dinosaur\n")),(0,o.kt)("p",null,'The following query will return all animals with the name "Matilda":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals?name=matilda\n")),(0,o.kt)("p",null,"The following query will return all animals with an age of 10 or older:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals?minimumAge=10\n")),(0,o.kt)("p",null,"It's possible to include multiple query strings by separating them with an ",(0,o.kt)("inlineCode",{parentName:"p"},"&"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET http://localhost:5000/api/animals?species=dinosaur&minimumAge=10\n")),(0,o.kt)("h3",{id:"additional-requirements-for-post-request"},"Additional Requirements for POST Request"),(0,o.kt)("p",null,"Make sure to explain that a body is required for POST request. For example, we could explain:"),(0,o.kt)("p",null,"When making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/"),", you need to include a ",(0,o.kt)("strong",{parentName:"p"},"body"),". Here's an example body in JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "species": "Tyrannosaurus Rex",\n  "name": "Elizabeth",\n  "age": 8\n}\n')),(0,o.kt)("h3",{id:"additional-requirements-for-put-request"},"Additional Requirements for PUT Request"),(0,o.kt)("p",null,"We need to explain the body required for PUT requests, too. For example, we could explain:"),(0,o.kt)("p",null,"When making a PUT request to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals/{id}"),", you need to include a ",(0,o.kt)("strong",{parentName:"p"},"body")," that includes the animal's ",(0,o.kt)("inlineCode",{parentName:"p"},"animalId")," property. Here's an example body in JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "animalId": 1,\n  "species": "Tyrannosaurus Rex",\n  "name": "Lizzy",\n  "age": 9\n}\n')),(0,o.kt)("p",null,"And here's the PUT request we would send the previous body to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals/1\n")),(0,o.kt)("p",null,"Notice that the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"animalId")," needs to match the id number in the URL. In this example, they are both 1."),(0,o.kt)("h3",{id:"documentation-on-further-exploration-objectives"},"Documentation on Further Exploration Objectives"),(0,o.kt)("p",null,"Remember that the inclusion of a further exploration objective like authentication, pagination, versioning, or CORS all of these will affect the documentation we include on our APIs endpoints. Make sure that your documentation includes the necessary information so that a user can know what the further exploration objective is, what it does, and how to interact with it."),(0,o.kt)("h3",{id:"reminder-make-your-readmes-engaging-by-using-a-variety-of-markdown"},"Reminder: Make your READMEs Engaging by Using a Variety of Markdown"),(0,o.kt)("p",null,"This is a reminder that we can make our READMEs more engaging by using a variety of markdown features. For example, GitHub has its very ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"own flavor of markdown"),' that has different features from other markdown "flavors". '),(0,o.kt)("p",null,"Also note that you can include emojis, images, and gifs, as well as formatting to align content in a variety of ways."),(0,o.kt)("p",null,"When our README is engaging and informative, then we're sure to have more people visiting our project to run it and check out the source code. We're also giving ourselves credit for the skills and knowledge that our project demonstrates."),(0,o.kt)("h2",{id:"should-swagger-documentation-be-made-public"},"Should Swagger Documentation Be Made Public?"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the template used by ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet new")," to scaffold an ASP.NET Core Web API, Swagger UI is only set to be accessible during development. As we've seen, we can use Swagger UI to send actual requests to our API. If we make that publicly available, a malicious user could access key information about our API or change our API in ways that we don't want. What's more, Swagger UI can slow up the normal functioning of our API."),(0,o.kt)("p",null,"So, Swagger is usually used for developers in development, and public-facing documentation is created elsewhere. "),(0,o.kt)("p",null,"That said, Swagger can be used for public documentation. However, this should only be done with careful consideration of what endpoints we want visible. We can change which controllers or actions are visible through using the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.apiexplorersettingsattribute?view=aspnetcore-6.0"},(0,o.kt)("inlineCode",{parentName:"a"},"ApiExplorerSeetingsAttribute")),". This is what it looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[ApiExplorerSettings(IgnoreApi = true)]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreApi = true")," argument tells our app not to expose the controller or action to the API explorer, which helps Swagger UI get information about our API's routes."),(0,o.kt)("p",null,"We can add it to a controller like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [ApiExplorerSettings(IgnoreApi = true)]\n  [Route("api/[controller]")]\n  [ApiController]\n  public class AnimalsController : ControllerBase\n  {\n    ...\n  }\n\n...\n')),(0,o.kt)("p",null,"Or we can add it to a controller action like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    [ApiExplorerSettings(IgnoreApi = true)]\n    [HttpPost]\n    public async Task<ActionResult<Animal>> Post([FromBody] Animal animal)\n    {\n      _db.Animals.Add(animal);\n      await _db.SaveChangesAsync();\n      return CreatedAtAction(nameof(GetAnimal), new { id = animal.AnimalId }, animal);\n    }\n...\n")),(0,o.kt)("p",null,"However, really securing our APIs also involves topics that are further exploration in this course section: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementing authentication and authorization in our API. "),(0,o.kt)("li",{parentName:"ul"},"Making our GitHub repo with the API's source code private."),(0,o.kt)("li",{parentName:"ul"},"Hosting both the database and our API.")),(0,o.kt)("p",null,"For the projects we build in this course section, we want other developers to access the source code and try running our projects. Also, none of the data in our application really needs protection since the project and database we create will be run locally on each developer's machine. "),(0,o.kt)("p",null,"In short, we're still learning about ASP.NET Core Web APIs, and we want to share the projects we create with the world. So, there's no need to hide access to Swagger in your projects, unless you really want to!"))}c.isMDXComponent=!0}}]);