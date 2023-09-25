"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23110],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),p=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(h,i(i({ref:a},c),{},{components:t})):r.createElement(h,i({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13212:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const s={title:"9. Arrays",id:"arrays",slug:"arrays",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0i_arrays.md"},i=void 0,l={unversionedId:"c_and_net_classic/data-types-variables-branching-and-looping/arrays",id:"c_and_net_classic/data-types-variables-branching-and-looping/arrays",title:"9. Arrays",description:"As we learned in Intro, collections like arrays are an important part of programming. We can group things together, loop through them, and manipulate large amounts of data with arrays.",source:"@site/docs/c_and_net_classic/3_data-types-variables-branching-and-looping/0i_arrays.md",sourceDirName:"c_and_net_classic/3_data-types-variables-branching-and-looping",slug:"/c_and_net_classic/data-types-variables-branching-and-looping/arrays",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/arrays",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"9. Arrays",id:"arrays",slug:"arrays",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0i_arrays.md"},sidebar:"c_and_net_classic",previous:{title:"8. Using Static Methods to Write and Read from the Console",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/using_static_methods_to_write_and_read_from_the_console"},next:{title:"10. Lists",permalink:"/lhtp/c_and_net_classic/data-types-variables-branching-and-looping/lists"}},o={},p=[{value:"Array versus List",id:"array-versus-list",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Accessing Array Data",id:"accessing-array-data",level:3},{value:"Altering Array Data",id:"altering-array-data",level:3},{value:"The <code>Array</code> Class",id:"the-array-class",level:3}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As we learned in Intro, collections like arrays are an important part of programming. We can group things together, loop through them, and manipulate large amounts of data with arrays."),(0,n.kt)("p",null,"C# arrays work ",(0,n.kt)("em",{parentName:"p"},"very")," differently than the JavaScript arrays we've used. Let's explore how they're different."),(0,n.kt)("h2",{id:"array-versus-list"},"Array versus List"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"JavaScript arrays are flexible. They can contain a variety of different things and their size automatically fluctuates when items are added or removed."),(0,n.kt)("p",null,"On the other hand, C# includes both ",(0,n.kt)("strong",{parentName:"p"},"arrays")," and ",(0,n.kt)("strong",{parentName:"p"},"lists"),". They're each collections of multiple items, but are ",(0,n.kt)("em",{parentName:"p"},"very")," different:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A ",(0,n.kt)("strong",{parentName:"p"},"list")," is similar to arrays in JavaScript. However, they generally only hold one type of data (like ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"int"),"). They fluctuate in size as items are added or removed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An ",(0,n.kt)("strong",{parentName:"p"},"array")," is stricter and has a set length. After an array is created, we cannot add or remove objects to make it larger or smaller. All items stored in an array ",(0,n.kt)("em",{parentName:"p"},"must")," be the same data type (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"int"),")."))),(0,n.kt)("p",null,"This lesson will focus solely on C# arrays. We'll explore lists more closely in the next lesson."),(0,n.kt)("h2",{id:"arrays"},"Arrays"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We can create an array containing strings in our REPL like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> string[] fruits = { "apples", "bananas", "oranges", "grapes" };\n\n> fruits\n{"apples", "bananas", "oranges", "grapes"}\n')),(0,n.kt)("p",null,"We can create an array of integers like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"> int[] primeNumbers = { 2, 3, 5, 7, 11 };\n> primeNumbers\n{2, 3, 5, 7, 11}\n")),(0,n.kt)("p",null,"There are several steps to creating a C# array:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Determine what type of data the array contains"),". Data in C# arrays ",(0,n.kt)("em",{parentName:"p"},"must")," be the same type. To define an array, we must first determine what data type it will hold. In the examples above, we state ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," when creating an array of fruits and ",(0,n.kt)("inlineCode",{parentName:"p"},"int")," when creating an array of numbers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Append square brackets ",(0,n.kt)("inlineCode",{parentName:"strong"},"[]")," to the data type"),". These allow us to declare that the object we're about to create will be an array. In the example above, ",(0,n.kt)("inlineCode",{parentName:"p"},"int[]")," means an array of integers. ",(0,n.kt)("inlineCode",{parentName:"p"},"string[]")," represents an array of strings. There should be no spaces between the data type and square brackets.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Include a variable name."),"  After declaring the array and type of data it holds, include a name. In the examples above, we used ",(0,n.kt)("inlineCode",{parentName:"p"},"string[] fruits")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"int[] primeNumbers"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Assign data to the array."),"  We use the assignment operator ",(0,n.kt)("inlineCode",{parentName:"p"},"=")," to assign the array variable a list of information. Note this is inside ",(0,n.kt)("inlineCode",{parentName:"p"},"{}"),", or ",(0,n.kt)("strong",{parentName:"p"},"curly brackets"),", ",(0,n.kt)("em",{parentName:"p"},"not")," the square brackets we used for JavaScript arrays. Remember that the length of the array ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"may not change"))," after you assign it."))),(0,n.kt)("h3",{id:"accessing-array-data"},"Accessing Array Data"),(0,n.kt)("p",null,"We can access an array by calling the array's variable name. For instance, in the example below, calling ",(0,n.kt)("inlineCode",{parentName:"p"},"fruits")," returns the full array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> string[] fruits = { "apples", "bananas", "oranges", "grapes" };\n> fruits\n{"apples", "bananas", "oranges", "grapes"}\n')),(0,n.kt)("p",null,"To access a specific entry in the array, we append square brackets ",(0,n.kt)("inlineCode",{parentName:"p"},"[]")," to the array's variable name. Inside the brackets we provide the ",(0,n.kt)("strong",{parentName:"p"},"index")," of the item we want:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> fruits[1]\n"bananas"\n> fruits[3]\n"grapes"\n> string favoriteFruit = fruits[0];\n> favoriteFruit\n"apples"\n')),(0,n.kt)("p",null,"Remember that items in a list or array should always start at 0. The first item in an array is actually at index 0, the second is at index 1, and the one hundredth is at index 99."),(0,n.kt)("h3",{id:"altering-array-data"},"Altering Array Data"),(0,n.kt)("p",null,"We cannot change an array's length but we ",(0,n.kt)("em",{parentName:"p"},"can")," change values inside it. For instance, we know the item in the 2nd index of our array is ",(0,n.kt)("inlineCode",{parentName:"p"},'"oranges"'),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> fruits[2]\n"oranges"\n')),(0,n.kt)("p",null,"Let's say we want to be more specific and change this value to ",(0,n.kt)("inlineCode",{parentName:"p"},'"blood oranges"'),". We can redefine the item at that index like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> fruits[2] = "blood oranges";\n> fruits\n{"apples", "bananas", "blood oranges", "grapes"}\n')),(0,n.kt)("p",null,"We already know we can call ",(0,n.kt)("inlineCode",{parentName:"p"},"fruits[2]")," to access the second index of our ",(0,n.kt)("inlineCode",{parentName:"p"},"fruits")," array. This time we just include the ",(0,n.kt)("inlineCode",{parentName:"p"},"=")," operator to assign a new value."),(0,n.kt)("p",null,"This can be done for any index of the array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> fruits[3] = "concord grapes";\n> fruits\n{"apples", "bananas", "blood oranges", "concord grapes"}\n')),(0,n.kt)("h3",{id:"the-array-class"},"The ",(0,n.kt)("inlineCode",{parentName:"h3"},"Array")," Class"),(0,n.kt)("p",null,"We can learn more about arrays by reviewing the information in ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.array?view=net-6.0"},"the ",(0,n.kt)("inlineCode",{parentName:"a"},"Array")," class"),". There are many helpful methods and properties! For example, check out this static method called ",(0,n.kt)("inlineCode",{parentName:"p"},"IndexOf()")," that returns the index of an element based on its value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'> string[] fruits2 = { "apples", "bananas", "oranges", "grapes" };\n> Array.IndexOf(fruits2, "bananas")\n1\n')),(0,n.kt)("p",null,"In the next lesson, we'll learn more about C# lists."))}u.isMDXComponent=!0}}]);