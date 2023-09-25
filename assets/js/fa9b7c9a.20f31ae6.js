"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"API: Adding Parameters to a Get Request to Support Query Strings",id:"api_adding_parameters_to_a_get_request_to_support_query_strings",slug:"api_adding_parameters_to_a_get_request_to_support_query_strings",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0g_adding_parameters_to_get_request.md"},s=void 0,l={unversionedId:"c_and_net/building-an-api/api_adding_parameters_to_a_get_request_to_support_query_strings",id:"c_and_net/building-an-api/api_adding_parameters_to_a_get_request_to_support_query_strings",title:"API: Adding Parameters to a Get Request to Support Query Strings",description:"In the last lesson, we completed CRUD functionality in our Cretaceous Park API. In this lesson, we'll learn how to add search parameters to our Get() controller action so that we can request and retrieve filtered data.",source:"@site/docs/c_and_net/11_building-an-api/0g_adding_parameters_to_get_request.md",sourceDirName:"c_and_net/11_building-an-api",slug:"/c_and_net/building-an-api/api_adding_parameters_to_a_get_request_to_support_query_strings",permalink:"/lhtp/c_and_net/building-an-api/api_adding_parameters_to_a_get_request_to_support_query_strings",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"API: Adding Parameters to a Get Request to Support Query Strings",id:"api_adding_parameters_to_a_get_request_to_support_query_strings",slug:"api_adding_parameters_to_a_get_request_to_support_query_strings",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/11_building-an-api/0g_adding_parameters_to_get_request.md"},sidebar:"c_and_net",previous:{title:"API: Update and Delete",permalink:"/lhtp/c_and_net/building-an-api/api_update_and_delete"},next:{title:"Adding API Model Validation",permalink:"/lhtp/c_and_net/building-an-api/adding_api_model_validation"}},o={},p=[{value:"Query Strings",id:"query-strings",level:2},{value:"Handling Search Parameters",id:"handling-search-parameters",level:2},{value:"Test it Out!",id:"test-it-out",level:3},{value:"Handling Multiple Parameters",id:"handling-multiple-parameters",level:2},{value:"Non-string Parameters",id:"non-string-parameters",level:3},{value:"Test it Out!",id:"test-it-out-1",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the last lesson, we completed CRUD functionality in our Cretaceous Park API. In this lesson, we'll learn how to add search parameters to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Get()")," controller action so that we can request and retrieve filtered data."),(0,r.kt)("h2",{id:"query-strings"},"Query Strings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Right now, when a GET request is sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals"),", all animals in the database are returned in JSON format. Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Get")," method currently looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// GET: api/Animals\n[HttpGet]\npublic async Task<ActionResult<IEnumerable<Animal>>> Get()\n{\n  return await _db.Animals.ToListAsync();\n}\n")),(0,r.kt)("p",null,"What if we wanted the animals endpoint of our API to have the ability to return results that are filtered by certain search criteria? For example, say a user wanted to get all animals that are dinosaurs? The API GET request in those cases would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:5000/api/animals?species=dinosaur\n")),(0,r.kt)("p",null,"We've seen this syntax for API calls before. As a reminder, the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," here represents the beginning of a ",(0,r.kt)("strong",{parentName:"p"},"query string"),". What follows are key value pairs that represent the search parameter (like ",(0,r.kt)("inlineCode",{parentName:"p"},"species"),") and its value (like ",(0,r.kt)("inlineCode",{parentName:"p"},"dinosaur"),"). "),(0,r.kt)("h2",{id:"handling-search-parameters"},"Handling Search Parameters"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's change the logic in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Get()")," action to handle query strings so that we can return a filtered set of results based on species. "),(0,r.kt)("p",null,"Here's how we'll update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Get()")," method in our controller:"),(0,r.kt)("div",{class:"filename"},"Controllers/AnimalsController.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    // GET: api/Animals\n    [HttpGet]\n    public async Task<ActionResult<IEnumerable<Animal>>> Get(string species)\n    {\n      IQueryable<Animal> query = _db.Animals.AsQueryable();\n\n      if (species != null)\n      {\n        query = query.Where(entry => entry.Species == species);\n      }\n\n      return await query.ToListAsync();\n    }\n...\n")),(0,r.kt)("p",null,"Let's work through all of the changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We've added a parameter to the method of type ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," that we've called ",(0,r.kt)("inlineCode",{parentName:"li"},"species"),". The naming here is important as .NET will automatically bind parameter values based on the query string. A call to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:5000/api/animals?species=dinosaur")," will now trigger our ",(0,r.kt)("inlineCode",{parentName:"li"},"Get()"),' method and automatically bind the value "dinosaur" to the variable ',(0,r.kt)("inlineCode",{parentName:"li"},"species"),". The framework does this by utilizing ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference"},"parameter source binding"),", where it infers the source of the parameter's value. To be more explicit, we could optionally include the attribute ",(0,r.kt)("inlineCode",{parentName:"li"},"[FromQuery]")," to specify that the ",(0,r.kt)("inlineCode",{parentName:"li"},"species")," parameter comes from the query string in the request URL:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public async Task<ActionResult<IEnumerable<Animal>>> Get([FromQuery] string species)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the body of the method we create a variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and then collect the list of all animals from our database and return it as ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.iqueryable-1?view=net-6.0"},"a ",(0,r.kt)("inlineCode",{parentName:"a"},"IQueryable")," LINQ object"),". When we use an ",(0,r.kt)("inlineCode",{parentName:"p"},"IQueryable")," object, we can use LINQ methods to build on to a database query before actually executing it. In this case, we're going to determine which query strings in our request, if any, we need to include in our database query.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The next thing we do is check to see if there is a value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"species")," parameter, and if there is, we build on to our database query by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Where()")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Where")," method accepts ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},"a lambda expression")," that will check whether each animal entry passes the condition and filters out those that do not meet the condition. In our case, we pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"entry => entry.Species == species")," to specify that we only want a database entry if its species property value matches the query parameter value from our route.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"ToListAsync()")," on the final query to turn our new results into a list."))),(0,r.kt)("h3",{id:"test-it-out"},"Test it Out!"),(0,r.kt)("p",null,"Let's test out our new species search functionality in Postman. Notice the query string ",(0,r.kt)("inlineCode",{parentName:"p"},"?species=dinosaur"),' in the request URL (highlighted by the red box). We can also see the query string listed as a key-value pair within the "Params" tab.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/Week+6+API/0g_adding_parameters_to_get_request.png",alt:"Result of API call with search parameter in Postman"})),(0,r.kt)("h2",{id:"handling-multiple-parameters"},"Handling Multiple Parameters"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can now retrieve entries from the database that match a given species, but what if we wanted to drill down further and find dinosaurs by their name? In order to do this, we can build on the query we created and add new parameters, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    // GET api/animals\n    [HttpGet]\n    public async Task<ActionResult<IEnumerable<Animal>>> Get(string species, string name)\n    {\n      IQueryable<Animal> query = _db.Animals.AsQueryable();\n\n      if (species != null)\n      {\n        query = query.Where(entry => entry.Species == species);\n      }\n\n      if (name != null)\n      {\n        query = query.Where(entry => entry.Name == name);\n      }\n\n      return await query.ToListAsync();\n    }\n...\n")),(0,r.kt)("p",null,"Now we are able to search for a dinosaur named Matilda and our API will successfully return that specific entry:"),(0,r.kt)("p",null,"Requesting ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals?species=dinosaur&name=matilda")," will yield:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "animalId": 3,\n    "name": "Matilda",\n    "species": "Dinosaur",\n    "age": 2\n  }\n]\n')),(0,r.kt)("p",null,"Notice that we chain new parameters to our query by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," symbol between each key-value pair."),(0,r.kt)("p",null,"We've successfully filtered the results with multiple parameters, but we can add as many parameters as we want with this pattern. Furthermore, this method allows for any combination of parameters to be used in the request."),(0,r.kt)("h3",{id:"non-string-parameters"},"Non-string Parameters"),(0,r.kt)("p",null,"We don't always have to filter content based on whether it matches the value in the search parameter directly. For example, if we wanted to get all dinosaurs that were older than 5 years old, it would be necessary for us to update this API endpoint to allow a request with a parameter that specifies a minimum age."),(0,r.kt)("p",null,"Because ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#binding-source-parameter-inference"},"parameter source binding inference")," in our web API works for any primitive, we can then add another parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," type called ",(0,r.kt)("inlineCode",{parentName:"p"},"minimumAge")," and handle the logic in a similar fashion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    // GET api/animals\n    [HttpGet]\n    public async Task<List<Animal>> Get(string species, string name, int minimumAge)\n    {\n      IQueryable<Animal> query = _db.Animals.AsQueryable();\n\n      if (species != null)\n      {\n        query = query.Where(entry => entry.Species == species);\n      }\n\n      if (name != null)\n      {\n        query = query.Where(entry => entry.Name == name);\n      }\n\n      if (minimumAge > 0)\n      {\n        query = query.Where(entry => entry.Age >= minimumAge);\n      }\n\n      return await query.ToListAsync();\n    }\n...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The default value for an integer parameter will be ",(0,r.kt)("inlineCode",{parentName:"strong"},"0")," when no value for the ",(0,r.kt)("inlineCode",{parentName:"strong"},"minimumAge")," parameter is received.")," Because of this we check ",(0,r.kt)("inlineCode",{parentName:"p"},"minimumAge > 0")," in our if statement to check whether there's been a value submitted for the ",(0,r.kt)("inlineCode",{parentName:"p"},"minimumAge")," parameter. "),(0,r.kt)("p",null,"Here's another example. If we simply wanted to create a query so that users can query animals by their age, an integer, we would check to see if a value for our age parameter has been added by checking if ",(0,r.kt)("inlineCode",{parentName:"p"},"age != 0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"if (age != 0)\n{\n  query = query.Where(entry => entry.Age == age);\n}\n")),(0,r.kt)("h3",{id:"test-it-out-1"},"Test it Out!"),(0,r.kt)("p",null,"Now if we request ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/animals?minimumAge=5")," in postman we should get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "animalId": 1,\n    "name": "Matilda",\n    "species": "Woolly Mammoth",\n    "age": 7\n  },\n  {\n    "animalId": 2,\n    "name": "Rexie",\n    "species": "Dinosaur",\n    "age": 10\n  },\n  {\n    "animalId": 5,\n    "name": "Bartholomew",\n    "species": "Dinosaur",\n    "age": 22\n  }\n]\n')),(0,r.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,r.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-6-cretaceous-park-api-csharp-net6/tree/3_query_strings"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Cretaceous Park API: ",(0,r.kt)("inlineCode",{parentName:"a"},"3_query_strings")))))}m.isMDXComponent=!0}}]);