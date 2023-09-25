"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=c(n),m=s,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const o={title:"7. Namespaces and Checking the Type of an Object",id:"namespaces_and_checking_the_type_of_an_object",slug:"namespaces_and_checking_the_type_of_an_object",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0g_checking_the_type_of_an_object.md"},i=void 0,r={unversionedId:"c_and_net_classic/data-types-variables-branching-and-looping/namespaces_and_checking_the_type_of_an_object",id:"c_and_net_classic/data-types-variables-branching-and-looping/namespaces_and_checking_the_type_of_an_object",title:"7. Namespaces and Checking the Type of an Object",description:"In this lesson, we'll learn how .NET organizes its classes into namespaces. We'll also learn how to check the exact type (or class) of a data type you are working with. This information will better prepare us to access and use the docs, so that we can learn about more built-in methods that we can use in our projects!",source:"@site/docs/c_and_net_classic/3_data-types-variables-branching-and-looping/0g_checking_the_type_of_an_object.md",sourceDirName:"c_and_net_classic/3_data-types-variables-branching-and-looping",slug:"/c_and_net_classic/data-types-variables-branching-and-looping/namespaces_and_checking_the_type_of_an_object",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/namespaces_and_checking_the_type_of_an_object",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Namespaces and Checking the Type of an Object",id:"namespaces_and_checking_the_type_of_an_object",slug:"namespaces_and_checking_the_type_of_an_object",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0g_checking_the_type_of_an_object.md"},sidebar:"c_and_net_classic",previous:{title:"6. Classes and Instance Methods",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/classes_and_instance_methods"},next:{title:"8. Using Static Methods to Write and Read from the Console",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/using_static_methods_to_write_and_read_from_the_console"}},l={},c=[{value:"Namespaces",id:"namespaces",level:2},{value:"Checking the Type or Class of an Object",id:"checking-the-type-or-class-of-an-object",level:2},{value:"<code>GetTypeCode()</code>",id:"gettypecode",level:3},{value:"Finding More Information about Built-in Classes",id:"finding-more-information-about-built-in-classes",level:3}],p={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this lesson, we'll learn how .NET organizes its classes into namespaces. We'll also learn how to check the exact type (or class) of a data type you are working with. This information will better prepare us to access and use the docs, so that we can learn about ",(0,s.kt)("em",{parentName:"p"},"more")," built-in methods that we can use in our projects! "),(0,s.kt)("h2",{id:"namespaces"},"Namespaces"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Classes and namespaces in C# are used to organize related code. We should already know what a class is, but let's refresh our memories. A ",(0,s.kt)("strong",{parentName:"p"},"class")," is used as a blueprint or template for creating objects. Each class describes the functionality that objects of that type have."),(0,s.kt)("p",null,"So what is a namespace? A ",(0,s.kt)("strong",{parentName:"p"},"namespace")," is a grouping of related classes. In .NET there are a LOT of built-in classes. In order to keep these classes organized, .NET uses many namespaces to group classes based on their importance and function."),(0,s.kt)("p",null,"For example, .NET has a single ",(0,s.kt)("strong",{parentName:"p"},"root namespace")," called ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," and it contains all of the fundamental classes that all projects need, like the ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," class to create C# strings. "),(0,s.kt)("p",null,"All other namespaces are nested inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace, and these each contain a set of classes that serve a more specialized purpose. For example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Threading")," namespace contains classes that we can use to write asynchronous code. Then, the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks")," namespace contains classes that simplify the work of writing asynchronous code. The ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Threading.Tasks")," namespace is nested within the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Threading")," namespace, which itself is nested within the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace."),(0,s.kt)("p",null,"In this way, a namespace is kind of like a JavaScript library, in that it is a unit of related functionality that we can import into our applications when we need to use the functionality within it. "),(0,s.kt)("p",null,"Later on, we'll create our own custom namespaces to group related custom classes in the projects we create. For now it's enough to get a general sense of how .NET groups functionality into classes, and related classes into namespaces. "),(0,s.kt)("p",null,"Next, let's learn how to check the type of an object and how to use that information to learn about more built-in C# classes."),(0,s.kt)("h2",{id:"checking-the-type-or-class-of-an-object"},"Checking the Type or Class of an Object"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"We can check the type of any object by calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"GetType()")," method on it. When we talk about an object's ",(0,s.kt)("strong",{parentName:"p"},"type"),", we're referring to its ",(0,s.kt)("strong",{parentName:"p"},"class")," name. Let's work through some examples!"),(0,s.kt)("p",null,"First, we'll check the type of a string:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'> "hello".GetType()\n[System.String]\n')),(0,s.kt)("p",null,"The return value is ",(0,s.kt)("inlineCode",{parentName:"p"},"[System.String]")," and it lets us know two things: ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," is the name of the class, and it lives in the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace. "),(0,s.kt)("p",null,"We can also call ",(0,s.kt)("inlineCode",{parentName:"p"},"GetType()")," on variables. Let's check the type of an integer. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"> int testNumber = 33;\n> testNumber.GetType()\n[System.Int32]\n")),(0,s.kt)("p",null,"Here, we can see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"int")," type is described in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Int32")," class, which lives in the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace. "),(0,s.kt)("p",null,"If you are wondering, ",(0,s.kt)("inlineCode",{parentName:"p"},"32")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"Int32")," means that this integer data type can hold 32 bits of information. If we check the ",(0,s.kt)("inlineCode",{parentName:"p"},"long")," type, we'll see that it is described in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Int64")," class, which can hold 64 bits of information. ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bit"},"A ",(0,s.kt)("strong",{parentName:"a"},"bit"))," is the smallest unit of information that a computer can store. Note that this information is supplementary and you will never be tested on it!"),(0,s.kt)("p",null,"Next, let's check the type of a ",(0,s.kt)("inlineCode",{parentName:"p"},"double")," and a ",(0,s.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"> 3.14.GetType()\n[System.Double]\n> 3.14F.GetType()\n[System.Single]\n")),(0,s.kt)("p",null,"For the double ",(0,s.kt)("inlineCode",{parentName:"p"},"3.14"),", we can see that it is described in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Double")," class, which lives in the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace. "),(0,s.kt)("p",null,"For the float ",(0,s.kt)("inlineCode",{parentName:"p"},"3.14F"),", we can see that it is described in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Single")," class, which also lives in the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," namespace. "),(0,s.kt)("h3",{id:"gettypecode"},(0,s.kt)("inlineCode",{parentName:"h3"},"GetTypeCode()")),(0,s.kt)("p",null,"Most built-in classes also have access to a method called ",(0,s.kt)("inlineCode",{parentName:"p"},"GetTypeCode()")," which will return only the name of the class. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'> "hello".GetTypeCode()\nString\n')),(0,s.kt)("p",null,"It's totally your decision whether it's best to use ",(0,s.kt)("inlineCode",{parentName:"p"},"GetType")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"GetTypeCode()")," in your coding projects."),(0,s.kt)("h3",{id:"finding-more-information-about-built-in-classes"},"Finding More Information about Built-in Classes"),(0,s.kt)("p",null,"We can do a browser search of an object's type/class to access documentation to learn more about that type/class. "),(0,s.kt)("p",null,'For example, we can learn more about string methods by looking up "system.string C#", just like in the image below.'),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/browser-search-csharp-system-string.png",alt:'A view of the Google search engine results for "system.string C#".'})),(0,s.kt)("p",null,"The first answer that pops up is the .NET reference for the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.String")," class: ",(0,s.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0"},"https://learn.microsoft.com/en-us/dotnet/api/system.string?view=net-6.0"),". Be careful, though! You may be taken to the most recent version of .NET rather than the one you are using, so ",(0,s.kt)("strong",{parentName:"p"},"double check that you are looking at documentation for .NET 6.")),(0,s.kt)("p",null,"Within the reference page for the ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," class, we'll find a lot of information about other string methods and properties. Since you are just starting out with C#, it's completely normal that not everything will make sense. "),(0,s.kt)("p",null,"As a starting point, we recommend checking out the docs on a data type you are working with in any of the projects you create in this first course section to see if there's a handy property or method that could streamline your code."))}d.isMDXComponent=!0}}]);