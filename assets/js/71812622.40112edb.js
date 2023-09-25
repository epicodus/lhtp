"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={title:"Deserializing API Responses with Newtonsoft.Json",id:"deserializing_api_responses_with_newtonsoftjson",slug:"deserializing_api_responses_with_newtonsoftjson",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_deserializing_responses.md"},o=void 0,r={unversionedId:"c_and_net_classic/authentication-with-identity/deserializing_api_responses_with_newtonsoftjson",id:"c_and_net_classic/authentication-with-identity/deserializing_api_responses_with_newtonsoftjson",title:"Deserializing API Responses with Newtonsoft.Json",description:"If we were making our API console application for users, they wouldn't want to copy and paste the response of an API call into a JSON formatter. It's our job to clean up the data and make it more human-readable. We can do this by deserializing the data. We can think of serialization as the process of turning data into a format that can be streamed while deserialization is the process of returning that data back to its original state. In this case, we're using deserialization to better make sense of JSON data and make it easier for users to read.",source:"@site/docs/c_and_net_classic/10_authentication-with-identity/0j_deserializing_responses.md",sourceDirName:"c_and_net_classic/10_authentication-with-identity",slug:"/c_and_net_classic/authentication-with-identity/deserializing_api_responses_with_newtonsoftjson",permalink:"/c_and_net_classic/authentication-with-identity/deserializing_api_responses_with_newtonsoftjson",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Deserializing API Responses with Newtonsoft.Json",id:"deserializing_api_responses_with_newtonsoftjson",slug:"deserializing_api_responses_with_newtonsoftjson",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0j_deserializing_responses.md"},sidebar:"c_and_net_classic",previous:{title:"Making an API Call with RestSharp",permalink:"/c_and_net_classic/authentication-with-identity/making_an_api_call_with_restsharp"},next:{title:"API Calls in an ASP.NET Core MVC App",permalink:"/c_and_net_classic/authentication-with-identity/api_calls_in_an_aspnet_core_mvc_app"}},l={},c=[{value:"Deserializing API Call Responses with <code>Newtonsoft.Json</code>",id:"deserializing-api-call-responses-with-newtonsoftjson",level:2},{value:"Transforming JSON into C# Objects",id:"transforming-json-into-c-objects",level:2},{value:"Getting Nested Data",id:"getting-nested-data",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If we were making our API console application for users, they wouldn't want to copy and paste the response of an API call into a JSON formatter. It's our job to clean up the data and make it more human-readable. We can do this by ",(0,a.kt)("strong",{parentName:"p"},"deserializing")," the data. We can think of serialization as the process of turning data into a format that can be streamed while deserialization is the process of returning that data back to its original state. In this case, we're using deserialization to better make sense of JSON data and make it easier for users to read. "),(0,a.kt)("p",null,"In the lesson, we'll learn how to deserialize JSON using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," package and then convert the JSON data into C# objects. We'll also take a look at how to deserialize nested JSON data into nested C# objects."),(0,a.kt)("h2",{id:"deserializing-api-call-responses-with-newtonsoftjson"},"Deserializing API Call Responses with ",(0,a.kt)("inlineCode",{parentName:"h2"},"Newtonsoft.Json")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"First, we need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," NuGet package, which is a JSON framework for .NET that can be used for both serialization and deserialization. We'll install it using the CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet add package Newtonsoft.Json --version 13.0.2\n")),(0,a.kt)("p",null,"Add these two ",(0,a.kt)("inlineCode",{parentName:"p"},"using")," directives to ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs"),":"),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\nusing Newtonsoft.Json;\nusing Newtonsoft.Json.Linq;\n...\n")),(0,a.kt)("p",null,"Now we can turn our API response into a JSON object to deal with the messages directly. Replace the last line of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Main()")," method with the following code:"),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  class Program\n  {\n    static void Main(string[] args)\n    {\n      Task<string> apiCallTask = ApiHelper.ApiCall(EnvironmentVariables.ApiKey);\n      string result = apiCallTask.Result;\n      // This line should be deleted: Console.WriteLine(result);\n      \n      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);\n      Console.WriteLine(jsonResponse["results"]);\n    }\n  }\n...\n')),(0,a.kt)("p",null,"Here, we turn the giant string stored as ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," into JSON data."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JsonConvert.DeserializeObject()<JObject>(result)")," converts the JSON-formatted string ",(0,a.kt)("inlineCode",{parentName:"li"},"result")," into a ",(0,a.kt)("inlineCode",{parentName:"li"},"JObject"),"."),(0,a.kt)("li",{parentName:"ul"},"The type ",(0,a.kt)("inlineCode",{parentName:"li"},"JObject")," comes from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Newtonsoft.Json.Linq")," library and is a .NET object we can treat as JSON.")),(0,a.kt)("p",null,"Now we have access to the data stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"results"')," key. All we have to do is call ",(0,a.kt)("inlineCode",{parentName:"p"},'jsonResponse["results"]'),". If we run the program again, the response will be nicely formatted and will include everything stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"results"')," key."),(0,a.kt)("p",null,"Notice that each key in the JSON response is in lower snake_case, not the PascalCase commonly used in C#. When retrieving data from a JSON response, always make sure to use the name of the JSON key with the exact casing it appears in the response object."),(0,a.kt)("h2",{id:"transforming-json-into-c-objects"},"Transforming JSON into C# Objects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that we have all this data about the messages we've sent, we might want to transform it into C# objects that can be used in more complex programs. The ",(0,a.kt)("inlineCode",{parentName:"p"},"DeserializeObject()")," method will do this for us."),(0,a.kt)("p",null,"Let's start by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," class that includes all the properties of the news we might want to use in an application. Note that we won't use all of the keys that the NYTimes provides \u2014 instead, we'll use just enough to demonstrate the process of transforming the JSON data into C# objects."),(0,a.kt)("p",null,"We'll add the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," class to a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"Article.cs")," within a ",(0,a.kt)("inlineCode",{parentName:"p"},"Models/")," directory:"),(0,a.kt)("div",{class:"filename"},"Models/Article.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ApiTest\n{\n  public class Article\n  {\n    public string Section { get; set; }\n    public string Title { get; set; }\n    public string Abstract { get; set; }\n    public string Url { get; set; }\n    public string Byline { get; set; }\n    public string Item_Type { get; set; }\n  }\n}\n")),(0,a.kt)("p",null,"Now we can turn the JSON data about our messages into ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," objects. Notice that any lower snake_case JSON properties are turned into upper snake_case C# property names."),(0,a.kt)("p",null,"Note that we need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," since we will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"List"),"s. "),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing System.Collections.Generic;\n...\n\n  class Program \n  {\n    static void Main()\n    {\n      Task<string> apiCallTask = ApiHelper.ApiCall(EnvironmentVariables.ApiKey);\n      string result = apiCallTask.Result;\n\n      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);\n      List<Article> articleList = JsonConvert.DeserializeObject<List<Article>>(jsonResponse["results"].ToString());\n\n      foreach (Article article in articleList)\n      {\n        Console.WriteLine($"Section: {article.Section}");\n        Console.WriteLine($"Title: {article.Title}");\n        Console.WriteLine($"Abstract: {article.Abstract}");\n        Console.WriteLine($"Url: {article.Url}");\n        Console.WriteLine($"Byline: {article.Byline}");\n        Console.WriteLine($"Item_Type: {article.Item_Type}");\n        Console.WriteLine("------------------------");\n      }\n    }\n  }\n\n...\n')),(0,a.kt)("p",null,"If we run our program, we'll see that the response is nicely formatted and includes only the properties listed above."),(0,a.kt)("p",null,"Now let's take a closer look at the code. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeserializeObject()")," method to create a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Article"),"s. The method will automatically grab any JSON keys in our response that match the names of the properties in our class. In order for this to work, the property name has to match the JSON key. This means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Section")," property for our message class needs to be named ",(0,a.kt)("inlineCode",{parentName:"p"},"Section"),". We could not rename it to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," because the information is named ",(0,a.kt)("inlineCode",{parentName:"p"},'"section"')," in the JSON data."),(0,a.kt)("h3",{id:"getting-nested-data"},"Getting Nested Data"),(0,a.kt)("p",null,"Because the JSON keys must match the object property names, we'll sometimes need to go deeper than depicted in the example above before turning API response data into a C# object. "),(0,a.kt)("p",null,"For instance, if the response information we'd like to deserialize is contained in an object that's part of an array which is nested under a specific JSON key, we'd need to programmatically isolate that specific data whose keys match our object properties before converting it into an object. We can't just pass in the whole big response. Fortunately, we can always use Postman to take a closer look at how JSON key-value pairs are nested."),(0,a.kt)("p",null,"Since this can be confusing, let's take a look at what this might look like. We'll update our console app to display data from the multimedia array that's a part of every article object. The multimedia key is set to an array of objects. We'll display data from each object in the multimedia array. "),(0,a.kt)("p",null,"If you're not sure what multimedia array I am talking about, take a moment to an API call via Postman to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=[YOUR-API-KEY]")," and locate the multimedia key in an article object."),(0,a.kt)("p",null,"We'll make a ",(0,a.kt)("inlineCode",{parentName:"p"},"Multimedia")," class to represent individual multimedia objects in the array. We won't include all multimedia properties, just a few for this example. Then, we'll update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," class to contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"Multimedia")," property with the type ",(0,a.kt)("inlineCode",{parentName:"p"},"List<Multimedia>"),"."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Multimedia.cs")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Models/")," directory, and add the following code to it:"),(0,a.kt)("div",{class:"filename"},"Models/Multimedia.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ApiTest\n{\n  class Multimedia\n  { \n    public string Type { get; set; }\n    public string SubType { get; set; }\n    public string Caption { get; set; }\n  }\n}\n")),(0,a.kt)("p",null,"Next, we'll update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," class:"),(0,a.kt)("div",{class:"filename"},"Models/Article.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ApiTest\n{\n  class Article\n  {\n    public string Section { get; set; }\n    public string Title { get; set; }\n    public string Abstract { get; set; }\n    public string Url { get; set; }\n    public string Byline { get; set; }\n    public string Item_Type { get; set; }\n    public List<Multimedia> Multimedia { get; set; }\n  }\n}\n")),(0,a.kt)("p",null,"Now each ",(0,a.kt)("inlineCode",{parentName:"p"},"Article")," object contains a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Multimedia")," objects. "),(0,a.kt)("p",null,"Finally, let's update ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.Main()")," within ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," to display the data of the multimedia array:"),(0,a.kt)("div",{class:"filename"},"Program.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\nusing System.Collections.Generic;\n...\n\n  public class Program \n  {\n    static void Main()\n    {\n      Task<string> apiCallTask = ApiHelper.ApiCall(EnvironmentVariables.ApiKey);\n      string result = apiCallTask.Result;\n      JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(result);\n      \n      List<Article> articleList = JsonConvert.DeserializeObject<List<Article>>(jsonResponse["results"].ToString());\n\n      foreach (Article article in articleList)\n      {\n        Console.WriteLine($"Section: {article.Section}");\n        Console.WriteLine($"Title: {article.Title}");\n        Console.WriteLine($"Abstract: {article.Abstract}");\n        Console.WriteLine($"Url: {article.Url}");\n        Console.WriteLine($"Byline: {article.Byline}");\n        Console.WriteLine($"Item_Type: {article.Item_Type}");\n        if (article.Multimedia != null)\n        {\n          foreach (Multimedia media in article.Multimedia)\n          {\n              Console.WriteLine("---------");\n              Console.WriteLine($"MULTIMEDIA");\n              Console.WriteLine($"Type: {media.Type}");\n              Console.WriteLine($"SubType: {media.SubType}");\n              Console.WriteLine($"Caption: {media.Caption}");\n          }\n        }\n        Console.WriteLine("__________________________________");\n      }\n    }\n  }\n\n...\n')),(0,a.kt)("p",null,"As we can see with this example of getting multimedia data for each article, the C# models we create need to mirror the API data that we want to access and display to our users. We can make the process of coming up with C# models for an API response much easier by using an online tool like ",(0,a.kt)("a",{parentName:"p",href:"https://json2csharp.com/"},"https://json2csharp.com/"),". This tool takes JSON and turns it into C# classes. If you use this tool, take note that there are options to configure settings for the conversion lower on the page."),(0,a.kt)("p",null,"Finally, take note that we've included an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement to check if our multimedia list is not ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". We include this check because we'll get an error if we try to loop through a list that doesn't exist!"),(0,a.kt)("p",null,"In this lesson, we've learned how to make an API call and then parse and deserialize the results. There's a lot of new information here, including new ways to use tasks and async code. It may take some time to absorb this material, but for now the important thing is putting the pieces together to successfully make API calls. In the next lesson, we'll learn how to incorporate our new tools into an MVC application."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/c-sharp-newyorktimes-api-call/tree/2_deserializing_responses_in_console_app"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for Sample New York Times API Call: ",(0,a.kt)("inlineCode",{parentName:"a"},"2_deserializing_responses_in_console_app")))))}u.isMDXComponent=!0}}]);