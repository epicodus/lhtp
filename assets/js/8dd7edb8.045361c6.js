"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[24286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={title:"Adding API Model Validation",id:"adding_api_model_validation",slug:"adding_api_model_validation",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_adding_validations.md"},r=void 0,l={unversionedId:"c_and_net_classic/building-an-api/adding_api_model_validation",id:"c_and_net_classic/building-an-api/adding_api_model_validation",title:"Adding API Model Validation",description:"In this lesson, we'll learn how to add validation to our models. Some of this information will be a review, since we're already familiar with adding validation attributes to our models in MVC apps, and this process is no different with APIs. However, we'll review some new information on how model validation is actually performed in API controllers.",source:"@site/docs/c_and_net_classic/11_building-an-api/0h_adding_validations.md",sourceDirName:"c_and_net_classic/11_building-an-api",slug:"/c_and_net_classic/building-an-api/adding_api_model_validation",permalink:"/c_and_net_classic/building-an-api/adding_api_model_validation",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Adding API Model Validation",id:"adding_api_model_validation",slug:"adding_api_model_validation",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_adding_validations.md"},sidebar:"c_and_net_classic",previous:{title:"API: Adding Parameters to a Get Request to Support Query Strings",permalink:"/c_and_net_classic/building-an-api/api_adding_parameters_to_a_get_request_to_support_query_strings"},next:{title:"Scaffolding API Controllers",permalink:"/c_and_net_classic/building-an-api/scaffolding_api_controllers"}},s={},d=[{value:"Adding Model Validation",id:"adding-model-validation",level:2},{value:"Error Messages",id:"error-messages",level:3},{value:"Updating Controllers to Handle Model Validation",id:"updating-controllers-to-handle-model-validation",level:3},{value:"EF Core Code-First Data Annotations",id:"ef-core-code-first-data-annotations",level:3},{value:"More Resources and External Validation Libraries",id:"more-resources-and-external-validation-libraries",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll learn how to add validation to our models. Some of this information will be a review, since we're already familiar with adding validation attributes to our models in MVC apps, and this process is no different with APIs. However, we'll review some new information on how model validation is actually performed in API controllers."),(0,i.kt)("p",null,"We won't update the Cretaceous Park API to include model validation. Instead this will be further exploration for you to do in your projects in class."),(0,i.kt)("h2",{id:"adding-model-validation"},"Adding Model Validation"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can easily add a few basic validations to either an MVC web application or an API. The .NET MVC framework provides several built-in data annotations that we can add to a model. Specifically, we can add one of the following validations to a model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Required]"),": Makes a field required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[StringLength]"),": Determines a maximum length for a string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Range]"),": Determines a maximum and minimum for a numeric field.")),(0,i.kt)("p",null,"Here's how we might incorporate them into our ",(0,i.kt)("inlineCode",{parentName:"p"},"Animal")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.ComponentModel.DataAnnotations;\n\nnamespace CretaceousPark.Models\n{\n  public class Animal\n  {\n    public int AnimalId { get; set; }\n    [Required]\n    [StringLength(20)]\n    public string Name { get; set; }\n    [Required]\n    public string Species { get; set; }\n    [Required]\n    [Range(0, 200, ErrorMessage = "Age must be between 0 and 200.")]\n    public int Age { get; set; }\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We add ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0"},(0,i.kt)("inlineCode",{parentName:"a"},"using System.ComponentModel.DataAnnotations;"))," in order to access data annotations like validation attributes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We add the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Required]")," annotation for any fields that should be required in our application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We specify that a ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," can't be longer than twenty characters with ",(0,i.kt)("inlineCode",{parentName:"p"},"[StringLength(20)]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"Range")," between 0 and 200 for ",(0,i.kt)("inlineCode",{parentName:"p"},"Age"),". Note that we can also add a custom error message with ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorMessage"),". "))),(0,i.kt)("h3",{id:"error-messages"},"Error Messages"),(0,i.kt)("p",null,"If we don't provide a custom message, our API will provide its own error message. For instance, if we make a POST call where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," property is more than twenty characters, we'll get the following response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": {\n        "Name": [\n            "The field Name must be a string with a maximum length of 20."\n        ]\n    },\n    "title": "One or more validation errors occurred.",\n    "status": 400,\n    "traceId": "0HLOLVJT60FKC:00000001"\n}\n')),(0,i.kt)("h3",{id:"updating-controllers-to-handle-model-validation"},"Updating Controllers to Handle Model Validation"),(0,i.kt)("p",null,"With API controllers that are marked with the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]")," attribute, we ",(0,i.kt)("strong",{parentName:"p"},"do not")," need to update our controllers to check ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelState")," like we did in our MVC apps, something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"      if (!ModelState.IsValid)\n      {\n        return View();\n      }\n      else\n      {\n        ...\n      }\n")),(0,i.kt)("p",null,"This is because all controllers that have the ",(0,i.kt)("inlineCode",{parentName:"p"},"[ApiController]")," attribute perform automatic model validation checking, and automatically handle returning a 400 Bad Request status code along with an error message as the API's response."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0#automatic-http-400-responses"},"To learn more about this, visit the official documentation.")),(0,i.kt)("h3",{id:"ef-core-code-first-data-annotations"},"EF Core Code-First Data Annotations"),(0,i.kt)("p",null,"Finally, keep in mind that some data annotations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.ComponentModel.DataAnnotations")," namespace overlap with ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/ef6/modeling/code-first/data-annotations"},"data annotations that we can use on our EF Core models in code-first development"),". A good example is the ",(0,i.kt)("inlineCode",{parentName:"p"},"[required]")," attribute, which will make a model property required in our .NET app (MVC or API), as well as, update our database field to be non-nullable (required)."),(0,i.kt)("p",null,"So as a precaution after you add validation attributes to your model properties, you should create a new migration and see if any changes are made to the database entities, and if so, determine whether or not you want those changes applied to your database. (Remember that you can always reverse the last migration with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet ef migrations remove"),".) "),(0,i.kt)("p",null,"Typically the requirements that we add to our project models, we'll also want applied to our database. However, if you don't want the changes applied to your database, use a ViewModel to separate the database entity model from the ViewModel that you use to handle incoming requests and validate them. "),(0,i.kt)("p",null,"Use a ViewModel for an API? Yes, and no. The concept is similar to a ViewModel \u2014 we're creating a model to use for something other than describing our database entity models. But for APIs, this would be for validating a request instead of being used to shape and validate data used in a view. Because of this, it's best to use a different name than ViewModel; perhaps we could call it a RequestModel instead. To learn more about this topic, check out this interesting discussion in ",(0,i.kt)("a",{parentName:"p",href:"https://softwareengineering.stackexchange.com/questions/399508/is-creating-viewmodels-in-web-api-a-bad-practice"},"this Stack Exchange thread"),"."),(0,i.kt)("h3",{id:"more-resources-and-external-validation-libraries"},"More Resources and External Validation Libraries"),(0,i.kt)("p",null,"While these basic validations are helpful, there are many other validations we might want to use that .NET doesn't provide. In that situation, we can consider custom validations or use an external library."),(0,i.kt)("p",null,"For more information on both custom validations and validations in general, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-6.0"},"official documentation"),"."),(0,i.kt)("p",null,"If you are interested in exploring an external library, check out ",(0,i.kt)("a",{parentName:"p",href:"https://fluentvalidation.net/aspnet"},"FluentValidation"),"."))}u.isMDXComponent=!0}}]);