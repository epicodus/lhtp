"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[45380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"More About Data Types: Value Types, Reference Types, Generic Types, and More",id:"more-about-data-types-value-types-reference-types-generic-types-and-more",slug:"more-about-data-types-value-types-reference-types-generic-types-and-more",hide_table_of_contents:!0,sidebar_position:7,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_more_about_data_types_value_reference_generic.md"},l=void 0,o={unversionedId:"c-and-net-part-time/test-driven-development-with-c-part-2/more-about-data-types-value-types-reference-types-generic-types-and-more",id:"c-and-net-part-time/test-driven-development-with-c-part-2/more-about-data-types-value-types-reference-types-generic-types-and-more",title:"More About Data Types: Value Types, Reference Types, Generic Types, and More",description:"So far, we've learned about the following C# types:",source:"@site/docs/c-and-net-part-time/7_test-driven-development-with-c-part-2/2e-more-about-data-types-value-reference-generic.md",sourceDirName:"c-and-net-part-time/7_test-driven-development-with-c-part-2",slug:"/c-and-net-part-time/test-driven-development-with-c-part-2/more-about-data-types-value-types-reference-types-generic-types-and-more",permalink:"/c-and-net-part-time/test-driven-development-with-c-part-2/more-about-data-types-value-types-reference-types-generic-types-and-more",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"More About Data Types: Value Types, Reference Types, Generic Types, and More",id:"more-about-data-types-value-types-reference-types-generic-types-and-more",slug:"more-about-data-types-value-types-reference-types-generic-types-and-more",hide_table_of_contents:!0,sidebar_position:7,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2e_more_about_data_types_value_reference_generic.md"},sidebar:"c-and-net-part-time",previous:{title:"APIE: Polymorphism",permalink:"/c-and-net-part-time/test-driven-development-with-c-part-2/apie-polymorphism"},next:{title:"Recognizing Privilege",permalink:"/c-and-net-part-time/test-driven-development-with-c-part-2/recognizing-privilege"}},s={},p=[{value:"Value Types and Reference Types",id:"value-types-and-reference-types",level:2},{value:"Value Types",id:"value-types",level:3},{value:"Reference Types",id:"reference-types",level:3},{value:"Summary",id:"summary",level:3},{value:"Generics",id:"generics",level:2},{value:"Other Data Types in C#",id:"other-data-types-in-c",level:2},{value:"Value Types",id:"value-types-1",level:3},{value:"Reference Types",id:"reference-types-1",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far, we've learned about the following C# types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"long")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"double")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<T>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dictionary<TKey,TValue>"))),(0,r.kt)("p",null,"However, there's quite a few more types out there than what we've covered. Some of these other types don't exist in JavaScript, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," types. There's also special ways that C# distinguishes its types: ",(0,r.kt)("strong",{parentName:"p"},"value types"),", ",(0,r.kt)("strong",{parentName:"p"},"reference types"),", and ",(0,r.kt)("strong",{parentName:"p"},"generics"),". In this lesson, we'll get into all of this new information."),(0,r.kt)("p",null,"Take note, however, that we won't go into depth into all of the new types we learn about. The goal is exposure: to understand that there's more out there to eventually get to know. What we don't want is to get overwhelmed. So, exploring these types in more depth will be further exploration that you can get into on your own time. "),(0,r.kt)("h2",{id:"value-types-and-reference-types"},"Value Types and Reference Types"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# divides its types into two main categories: value types and reference types. The difference between the two has to do with how each is saved in memory, and how that affects the behavior of the type. Let's look at examples and definitions to understand these two categories. "),(0,r.kt)("h3",{id:"value-types"},"Value Types"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"value type")," is a type that stores its actual value. Consider the following example in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> int a = 1;\n> int b = a;\n> a = 2;\n> a\n2\n> b\n1\n")),(0,r.kt)("p",null,"The variables ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," each store an ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", a ",(0,r.kt)("strong",{parentName:"p"},"value type"),". As a value type, each variable stores the actual value. That means each variable is independent of the other: when we update the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", only the ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," variable is changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," continues to have the same value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"Okay... So? Big deal. Why should this matter? Let's look at reference types next to see the contrast in behavior."),(0,r.kt)("h3",{id:"reference-types"},"Reference Types"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"reference type")," is a type that stores a reference to a value, which is stored elsewhere in memory. Consider the following example in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> List<int> c = new List<int> { 1, 2 };\n> List<int> d = c;\n> c.Add(3);\n> c\nList<int>(3) { 1, 2, 3 }\n> d\nList<int>(3) { 1, 2, 3 }\n")),(0,r.kt)("p",null,"The variables ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," each store a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<T>"),", a ",(0,r.kt)("strong",{parentName:"p"},"reference type"),". As a reference type, each variable stores a reference to another location in memory, and the other location in memory contains the actual value. This means that when we set ",(0,r.kt)("inlineCode",{parentName:"p"},"List<int> d = c;"),", we're assigning ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," a reference, not a value. That's also why when we update ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," to add a new integer to its list, ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," is also updated. In other words, ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," contain references to the same list in memory and they are not holding separate values."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"To summarize, value types store a value directly, while reference types store a reference to a value saved elsewhere. A big implication that this has is carefully considering what happens when we copy reference types versus value types. As we've seen a reference type doesn't copy an independent and new value; instead, just the reference. To copy a reference type, you'll need to learn how to do a deep clone. There are a lot of solutions for this online, and ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/78536/deep-cloning-objects"},"this Stack Overflow article is a good place to start"),"."),(0,r.kt)("p",null,"Let's revisit all of the types we've learned about so far, and learn which category they belong to."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value Types:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"long")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"double")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference Types:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<T>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dictionary<TKey,TValue>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interface"))),(0,r.kt)("p",null,"Take note that ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," is a bit more special: while it is in fact a reference type, it sometimes acts like a value type. That means we can copy a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," like we can any value type."),(0,r.kt)("p",null,"Want to learn more? Check out the following MS documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types"},"Value Types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types"},"Reference Types"))),(0,r.kt)("h2",{id:"generics"},"Generics"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The next concept within C# types that we'll cover is generics. We can create ",(0,r.kt)("strong",{parentName:"p"},"generic")," classes and methods which are types that include typed parameters. We're actually already familiar with two generic classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List<T>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dictionary<TKey,TValue>"))),(0,r.kt)("p",null,"The syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"<T>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<TKey, TValue>")," are the typed parameters. When we use these generic classes, we need to specify the parameter types, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'List<int> myNumberList = new List<int> { 3, 4, 5, 6 };\nDictionary<int, string> employees = new Dictionary<int, string> { {1, "Alejandra"}, {2, "Marcus"} };\n')),(0,r.kt)("p",null,"Generics exist in order to increase reusability, type safety, and efficiency. ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Type_safety"},"By ",(0,r.kt)("strong",{parentName:"a"},"type safety")),", we mean how much a programming language like C# reduces the chance of type errors. When we include typed parameters with generics, we're declaring exactly what type a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary<TKey,TValue>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"List<T>")," should contain and helping avoid any type errors that could be generated from not doing so. In contrast, non-generic collections could hold any data type, which is more prone to generating type errors. "),(0,r.kt)("p",null,"So, anytime you see angle brackets and a parameter name (like ",(0,r.kt)("inlineCode",{parentName:"p"},"<T>"),") next to a class name (like ",(0,r.kt)("inlineCode",{parentName:"p"},"List<T>"),"), you are using a generic class."),(0,r.kt)("p",null,"While we can create custom generic types, we'll stick to using built-in generics in this course. And of the generics we'll use, most will be from the from the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," namespace. To learn more about generics, visit the MS Docs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics"},"Generics"))),(0,r.kt)("h2",{id:"other-data-types-in-c"},"Other Data Types in C#"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's now look into additional C# data types that we aren't yet familiar with. We're not going to go into depth into any single type, but instead get an overview of them, with the goal of exposure. There will be links provided to learn more about each type."),(0,r.kt)("h3",{id:"value-types-1"},"Value Types"),(0,r.kt)("p",null,"Other common ",(0,r.kt)("strong",{parentName:"p"},"value types")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"struct")),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"struct")," is like a class that has ",(0,r.kt)("strong",{parentName:"li"},"value semantics"),", that is, it acts like a value type instead of a reference type like classes are. ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct"},"The MS Docs on ",(0,r.kt)("inlineCode",{parentName:"a"},"struct")),' explain "Typically, you use structure types to design small data-centric types that provide little or no behavior."'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"tuple")),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"tuple")," is concise syntax that groups multiple data elements into one structure. Check out the examples and use cases on ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples"},"the MS Docs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"enum")),". An ",(0,r.kt)("inlineCode",{parentName:"li"},"enum")," is a named set of constants. Just like in JavaScript, ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants"},"a ",(0,r.kt)("strong",{parentName:"a"},"constant"))," is an immutable value. To learn more about ",(0,r.kt)("inlineCode",{parentName:"li"},"enum"),", visit the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum"},"MS Docs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"decimal")),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"decimal")," holds even larger decimal values than a ",(0,r.kt)("inlineCode",{parentName:"li"},"double")," does. Note that ",(0,r.kt)("inlineCode",{parentName:"li"},"float")," is the only other floating point numeric type."),(0,r.kt)("li",{parentName:"ul"},"There are ",(0,r.kt)("em",{parentName:"li"},"many")," additional integral numeric types than what we've covered; to see a full list, ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types"},"check out the MS Docs"),". ")),(0,r.kt)("h3",{id:"reference-types-1"},"Reference Types"),(0,r.kt)("p",null,"Other common ",(0,r.kt)("strong",{parentName:"p"},"reference types")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"object")),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," type is an alias for ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.object?view=net-6.0"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"System.Object")," type"),", from which all other objects inherit basic functionality, like the ",(0,r.kt)("inlineCode",{parentName:"li"},"GetType()")," method! We declare any variable with the type ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),". To learn more, ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type"},"visit the MS Docs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"record")),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"record")," is a reference type similar to a class that's meant to hold data, but not functionality (so no methods). To learn more about ",(0,r.kt)("inlineCode",{parentName:"li"},"record"),", ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record"},"visit the MS docs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"delegate")),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"delegate")," is used to encapsulate a method so that it can be passed as a parameter. As such, it is often used to create callback methods. To learn more, visit ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-delegate-type"},"this article")," as well as ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/"},"this article")," on the MS Docs. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dynamic")),". We can use the type ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic")," when we want an object's type to be determined at run time, instead of compile time. Learn more about ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic")," on ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-dynamic-type"},"the MS Docs."))))}u.isMDXComponent=!0}}]);