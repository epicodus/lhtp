"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[77851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Type Casting",id:"type-casting",slug:"type-casting",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0m_type_casting.md",paginationNext:null},o=void 0,l={unversionedId:"c-and-net/data-types-variables-branching-and-looping/type-casting",id:"c-and-net/data-types-variables-branching-and-looping/type-casting",title:"Type Casting",description:"Type casting is the process of transferring a piece of data between types. We'll look at an example in the dotnet-script REPL using standard data types.",source:"@site/docs/c-and-net/3_data-types-variables-branching-and-looping/0m-type-casting.md",sourceDirName:"c-and-net/3_data-types-variables-branching-and-looping",slug:"/c-and-net/data-types-variables-branching-and-looping/type-casting",permalink:"/c-and-net/data-types-variables-branching-and-looping/type-casting",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Type Casting",id:"type-casting",slug:"type-casting",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0m_type_casting.md",paginationNext:null},sidebar:"c-and-net",previous:{title:"Iterators: Foreach and For Loops",permalink:"/c-and-net/data-types-variables-branching-and-looping/iterators-foreach-and-for-loops"},next:{title:"Expectations and Game Plan for Building a C# Console App",permalink:"/c-and-net/basic-console-apps/expectations-and-game-plan-for-building-a-c-console-app"}},p={},s=[{value:"Type Casting",id:"type-casting",level:2},{value:"Explicit Casting",id:"explicit-casting",level:3},{value:"Casting Does Not Always Go As Expected",id:"casting-does-not-always-go-as-expected",level:3},{value:"Implicit casting",id:"implicit-casting",level:3},{value:"Other Implicit Casting",id:"other-implicit-casting",level:3},{value:"Guidelines and Resources",id:"guidelines-and-resources",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type casting")," is the process of transferring a piece of data between types. We'll look at an example in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL using standard data types. "),(0,i.kt)("h2",{id:"type-casting"},"Type Casting"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's try to multiply a decimal-holding number, which is called a ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),", and store it in an ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"> double myNumber = 12.5;\n> int multipliedNumber = myNumber * 2;\n")),(0,i.kt)("p",null,"We'll quickly get an error:"),(0,i.kt)("code",{style:{color:"red"}},"(1,24): error CS0266: Cannot implicitly convert type 'double' to 'int'. An explicit conversion exists (are you missing a cast?)"),(0,i.kt)("p",null,"When we multiply ",(0,i.kt)("inlineCode",{parentName:"p"},"12.5 * 2")," we get ",(0,i.kt)("inlineCode",{parentName:"p"},"25"),", which should be a valid integer. Well, even though the result of the operation is a whole number, and we're storing that whole number in a variable declared as an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", C# throws an error because ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," is not an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". Moreover, C# does not make any implicit conversions between ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". This is our strongly-typed paradigm at work."),(0,i.kt)("h3",{id:"explicit-casting"},"Explicit Casting"),(0,i.kt)("p",null,"The error hints at a solution: ",(0,i.kt)("inlineCode",{parentName:"p"},"An explicit conversion exists (are you missing a cast?)")," What is an explicit conversion? Let's look at how we can use one to compile this code. We've already entered in ",(0,i.kt)("inlineCode",{parentName:"p"},"double myNumber = 12.5;")," to the REPL, so now we'll just fix the arithmetic by adding a data type conversion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"> int multipliedNumber = (int)myNumber * 2;\n> multipliedNumber\n24\n")),(0,i.kt)("p",null,"The syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"(int)myNumber")," is an example of a ",(0,i.kt)("strong",{parentName:"p"},"cast"),'. Casting, just like in the movies, is the act of turning one thing into another. Just as Audrey Hepburn was cast as Holly Golightly in the movie "Breakfast at Tiffany\'s", we can cast ',(0,i.kt)("inlineCode",{parentName:"p"},"double")," as an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,i.kt)("p",null,"This type of cast is called an ",(0,i.kt)("strong",{parentName:"p"},"explicit cast"),". We're openly telling the compiler to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"myNumber")," into an integer before proceeding.  Since ",(0,i.kt)("inlineCode",{parentName:"p"},"myNumber")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," are both valid integers, their evaluation can be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"multipliedNumber")," variable."),(0,i.kt)("h3",{id:"casting-does-not-always-go-as-expected"},"Casting Does Not Always Go As Expected"),(0,i.kt)("p",null,"But there's still something wrong! We got ",(0,i.kt)("inlineCode",{parentName:"p"},"24")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"25"),", the actual result of ",(0,i.kt)("inlineCode",{parentName:"p"},"12.5 * 2"),". So why doesn't C# return ",(0,i.kt)("inlineCode",{parentName:"p"},"25"),"?"),(0,i.kt)("p",null,"Casting can be an imperfect process. When data types are different, casting can sometimes result in a loss in accuracy. In this case, the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"(int)myNumber")," converts ",(0,i.kt)("inlineCode",{parentName:"p"},"12.5")," into an integer ",(0,i.kt)("em",{parentName:"p"},"before")," performing the multiplication operation. To convert a ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," into an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", our cast drops the decimal and turns ",(0,i.kt)("inlineCode",{parentName:"p"},"myNumber")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"12"),". As we know, ",(0,i.kt)("inlineCode",{parentName:"p"},"12 * 2")," equals ",(0,i.kt)("inlineCode",{parentName:"p"},"24"),"."),(0,i.kt)("p",null,"This is called ",(0,i.kt)("strong",{parentName:"p"},"lossy conversion"),", as there is a loss of data or accuracy that occurs during the conversion."),(0,i.kt)("p",null,"We can mitigate this loss by waiting until the operation completes before performing the conversion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"> double myNumber2 = 12.5;\n> int multipliedNumber2 = (int)(myNumber2 * 2); //CHANGE IS HERE\n> multipliedNumber2\n25\n")),(0,i.kt)("p",null,"We perform our mathematical operation ",(0,i.kt)("em",{parentName:"p"},"before")," making the explicit conversion, which leads to the correct result, ",(0,i.kt)("inlineCode",{parentName:"p"},"25"),"."),(0,i.kt)("h3",{id:"implicit-casting"},"Implicit casting"),(0,i.kt)("p",null,"There is another cast going on here that we might not spot right away. In our expression ",(0,i.kt)("inlineCode",{parentName:"p"},"myNumber * 2"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," is declared without a type. It's just a numeric value."),(0,i.kt)("p",null,"So what type is ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," exactly if we haven't declared it?"),(0,i.kt)("p",null,"Let's change our example slightly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"> int myNumber3 = 12;\n> double multipliedNumber3 = myNumber3 * 2;\n> multipliedNumber3\n24\n")),(0,i.kt)("p",null,"When we run this code, we get the correct value ",(0,i.kt)("inlineCode",{parentName:"p"},"24"),". How does a multiplied ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," become a ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," when a multiplied ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," cannot become an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"?"),(0,i.kt)("p",null,"When we convert ",(0,i.kt)("inlineCode",{parentName:"p"},"12.5")," to an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),", we lose information. It would make sense to think of a double as a data type that contains ",(0,i.kt)("em",{parentName:"p"},"more")," information than an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". This makes a ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," a ",(0,i.kt)("strong",{parentName:"p"},"larger")," data type than an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". When we convert from an ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),", we don't lose any information because we're moving from a ",(0,i.kt)("strong",{parentName:"p"},"smaller")," data type to a larger one. This is called ",(0,i.kt)("strong",{parentName:"p"},"implicit casting"),". No special syntax is required and C# will do this automatically."),(0,i.kt)("p",null,"So what is ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," in the code above then?"),(0,i.kt)("p",null,"It starts as an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". However, because it's a smaller data type than a ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),", C# implicitly casts it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," so it can be evaluated."),(0,i.kt)("h3",{id:"other-implicit-casting"},"Other Implicit Casting"),(0,i.kt)("p",null,"There are other types of implicit conversions that C# performs. For example, if we have an integer and use string interpolation to have the integer evaluated within a string, C# will automatically convert the integer into a string. Here's two examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> $"Hello number {1}"\n"Hello number 1"\n> int num = 2;\n> $"Hello number {num}"\n"Hello number 2"\n')),(0,i.kt)("p",null,"If you want to learn more, or are ever unsure of whether C# is converting data types implicitly, review all of the cases in which ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/conversions#102-implicit-conversions"},"C# performs implicit conversions on the Microsoft (MS) Docs"),"."),(0,i.kt)("h2",{id:"guidelines-and-resources"},"Guidelines and Resources"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here are some guidelines for explicit and implicit casting. In general, we shouldn't be using type casting frequently; regular use of type casting is a sign that the code is inefficient."),(0,i.kt)("p",null,"C# will perform ",(0,i.kt)("strong",{parentName:"p"},"implicit casting")," when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data types are compatible, such as when we are working with two ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"s;"),(0,i.kt)("li",{parentName:"ul"},"When data of a smaller type is assigned to a bigger data type, such as when an ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," is cast as a ",(0,i.kt)("inlineCode",{parentName:"li"},"double"),".")),(0,i.kt)("p",null,"We should use ",(0,i.kt)("strong",{parentName:"p"},"explicit casting")," when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We are working with incompatible data types where automatic conversion cannot be done. We explicitly state the data type to which the value should be converted. However, be careful: explicit casting can potentially result in loss of accuracy.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Would you like to see more examples?")," The Microsoft (MS) Docs has a great article on ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions"},"casting and type conversion"),"."))}m.isMDXComponent=!0}}]);