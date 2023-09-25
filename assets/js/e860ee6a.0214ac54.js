"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"13. Creating a Basic Model",id:"creating_a_basic_model",slug:"creating_a_basic_model",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0m_creating_a_basic_model.md"},o=void 0,l={unversionedId:"c_and_net_part_time/basic-web-applications/creating_a_basic_model",id:"c_and_net_part_time/basic-web-applications/creating_a_basic_model",title:"13. Creating a Basic Model",description:"We've covered both the V and the C in MVC but we haven't gotten to M yet \u2014 the model. Remember that a model represents data. Currently, the controller in our virtual postcard application just passes along strings and a view. Let's create a class to model what our application's data should look like.",source:"@site/docs/c_and_net_part_time/8_basic-web-applications/0m_creating_a_basic_model.md",sourceDirName:"c_and_net_part_time/8_basic-web-applications",slug:"/c_and_net_part_time/basic-web-applications/creating_a_basic_model",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/creating_a_basic_model",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"13. Creating a Basic Model",id:"creating_a_basic_model",slug:"creating_a_basic_model",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/8_basic-web-applications/0m_creating_a_basic_model.md"},sidebar:"c_and_net_part_time",previous:{title:"12. Creating and Using Views",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/creating_and_using_views"},next:{title:"14. Dynamic Views with Razor Markup Syntax",permalink:"/lhtp/c_and_net_part_time/basic-web-applications/dynamic_views_with_razor_markup_syntax"}},s={},c=[{value:"Model File Structure",id:"model-file-structure",level:2},{value:"Writing a Model",id:"writing-a-model",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've covered both the V and the C in MVC but we haven't gotten to M yet \u2014 the ",(0,r.kt)("strong",{parentName:"p"},"model"),". Remember that a model represents data. Currently, the controller in our virtual postcard application just passes along strings and a view. Let's create a class to ",(0,r.kt)("em",{parentName:"p"},"model")," what our application's data should look like."),(0,r.kt)("h2",{id:"model-file-structure"},"Model File Structure"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Models always reside in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Models")," subdirectory of the production project. This is just like in the last course section when we created console applications. If you haven't already, go ahead and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Models")," subdirectory in ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter"),". Within ",(0,r.kt)("inlineCode",{parentName:"p"},"Models"),", add a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"LetterVariable.cs"),"."),(0,r.kt)("p",null,"The resulting file structure for models looks like this:"),(0,r.kt)("pre",null,"FriendLetter.Solution \u2514\u2500\u2500 FriendLetter \u2514\u2500\u2500 Models \xa0\xa0 \u2514\u2500\u2500 LetterVariable.cs"),(0,r.kt)("h2",{id:"writing-a-model"},"Writing a Model"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's add code to our new model file. We'll first declare a namespace and class:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Models/LetterVariable.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace FriendLetter.Models\n{\n  public class LetterVariable\n  {\n\n  }\n}\n")),(0,r.kt)("p",null,"We place the ",(0,r.kt)("inlineCode",{parentName:"p"},"LetterVariable")," class in a ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter.Models")," namespace. This means that any other files that need access to our model's logic can import it with the statement ",(0,r.kt)("inlineCode",{parentName:"p"},"using FriendLetter.Models;"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter.Models")," is similar to the namespace of our main project, ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter"),". It doesn't actually matter if the ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter")," portion is included in both namespace names, but it's good practice to give namespaces names that clearly denote their relation to the larger app. In our case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter.Models")," name is ideal because this namespace contains all the ",(0,r.kt)("em",{parentName:"p"},"models")," in our ",(0,r.kt)("inlineCode",{parentName:"p"},"FriendLetter")," project. To find out more about naming conventions, check out ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces?redirectedfrom=MSDN"},"the Microsoft documentation"),"."),(0,r.kt)("p",null,"Next, we'll add an auto-implemented property ",(0,r.kt)("inlineCode",{parentName:"p"},"Recipient")," to our new model class:"),(0,r.kt)("div",{class:"filename"},"FriendLetter/Models/LetterVariable.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace FriendLetter.Models\n{\n  public class LetterVariable\n  {\n    public string Recipient { get; set; }\n\n  }\n}\n")),(0,r.kt)("p",null,"Our model is very simple. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Recipient")," property will hold the name of the person who will receive the postcard. That's all we need to explore using the markup syntax \"Razor\" to render C# within our views. In future lessons, we'll develop more complex models."))}m.isMDXComponent=!0}}]);