"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"11. Dictionaries",id:"dictionaries",slug:"dictionaries",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0k_dictionaries.md"},o=void 0,l={unversionedId:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/dictionaries",id:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/dictionaries",title:"11. Dictionaries",description:"The lists and arrays we just explored are called numerically indexed arrays because we can access their elements by referencing their index. For example, we can call myArray[1].",source:"@site/docs/c_and_net_part_time_evening/3_data-types-variables-branching-and-looping/0k_dictionaries.md",sourceDirName:"c_and_net_part_time_evening/3_data-types-variables-branching-and-looping",slug:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/dictionaries",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/dictionaries",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Dictionaries",id:"dictionaries",slug:"dictionaries",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3_data-types-variables-branching-and-looping/0k_dictionaries.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"10. Lists",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/lists"},next:{title:"12. Iterators: Foreach and For Loops",permalink:"/lhtp/c_and_net_part_time_evening/data-types-variables-branching-and-looping/iterators_foreach_and_for_loops"}},s={},c=[{value:"Dictionaries",id:"dictionaries",level:2},{value:"Creating Dictionaries",id:"creating-dictionaries",level:3},{value:"Retrieving Content from a <code>Dictionary</code>",id:"retrieving-content-from-a-dictionary",level:3},{value:"Adding Content to a Dictionary",id:"adding-content-to-a-dictionary",level:3},{value:"The <code>Dictionary&lt;TKey,TValue&gt;</code> Class",id:"the-dictionarytkeytvalue-class",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The lists and arrays we just explored are called ",(0,i.kt)("strong",{parentName:"p"},"numerically indexed arrays")," because we can access their elements by referencing their index. For example, we can call ",(0,i.kt)("inlineCode",{parentName:"p"},"myArray[1]"),"."),(0,i.kt)("p",null,"We can use lists and arrays to make things like shopping lists or a guest list of people to invite to a party, but what if we don't just want a list of strings? What if we wanted to associate pieces of data with other pieces of data? For instance, we might want a list of names associated with phone numbers or a list of words with associated definitions."),(0,i.kt)("p",null,"For these types of situations, we'll use a data type called a ",(0,i.kt)("strong",{parentName:"p"},"dictionary"),"."),(0,i.kt)("h2",{id:"dictionaries"},"Dictionaries"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dictionaries")," are a bit like phone books. Just as a phonebook stores pairs of names and phone numbers, a dictionary holds ",(0,i.kt)("strong",{parentName:"p"},"key-value pairs"),". With a phone book, we look up a number (value) by its key (a person's name)."),(0,i.kt)("p",null,"Type this into the REPL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> Dictionary<string, string> myDictionary = new Dictionary<string, string>() { {"A", "apple"}, {"B", "bear"} };\n')),(0,i.kt)("p",null,"We create a dictionary similar to the way we create a list, but after the parentheses we use curly brackets to associate letters with their matched words. Notice how we nest individual pairs of data within curly brackets to connect pieces of data. These are then nested within the curly brackets that define the contents of the entire dictionary."),(0,i.kt)("p",null,"We can then access this dictionary and its individual contents like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> myDictionary\n{ {"A", "apple"}, {"B", "bear"} }\n> myDictionary["A"]\n"apple"\n> myDictionary["B"]\n"bear"\n')),(0,i.kt)("h3",{id:"creating-dictionaries"},"Creating Dictionaries"),(0,i.kt)("p",null,"The basic format for creating a dictionary looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Dictionary<string, string> myDictionary = new Dictionary<string, string>() {};\n")),(0,i.kt)("p",null,"Here are all the steps to creating our dictionary:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Declare a ",(0,i.kt)("inlineCode",{parentName:"strong"},"Dictionary")),". We start with the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," to inform C# we're creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," object. ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," should be capitalized, not lowercased like ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Determine what the ",(0,i.kt)("inlineCode",{parentName:"strong"},"Dictionary")," will contain"),". We then declare the type of data the dictionary will contain in angle brackets: ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary<string, string>"),". Because ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary"),"s contain key-value pairs, we declare ",(0,i.kt)("em",{parentName:"p"},"two")," data types here. The first is the data type keys will be. The second is the data type for values.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Give it a variable name"),". We'll save our ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," in a variable so we can store it and access it later. In the example above, we gave our ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary")," the variable name ",(0,i.kt)("inlineCode",{parentName:"p"},"myDictionary"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"strong"},"Dictionary")," instance with its constructor"),". Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"s from the last lesson, we use its constructor with the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," keyword: ",(0,i.kt)("inlineCode",{parentName:"p"},"new Dictionary<string, string>()"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add data"),". The curly brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," at the end are required. They contain the information we'd like to put in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary"),". This information is formatted in key-value pairs that are ",(0,i.kt)("em",{parentName:"p"},"also")," in curly brackets. If we're creating an empty dictionary, we leave these empty."))),(0,i.kt)("h3",{id:"retrieving-content-from-a-dictionary"},"Retrieving Content from a ",(0,i.kt)("inlineCode",{parentName:"h3"},"Dictionary")),(0,i.kt)("p",null,"Let's look at another example. Let's say we're ordering cupcakes for a party. We'll use a dictionary to track how many of each flavor we need to order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'>  Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };\n')),(0,i.kt)("p",null,"In this case, our value is an ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". Each number is stored with its associated flavor of cupcake. When we get to the bakery, we can easily check how many of each type we need:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> cupcakeOrder["vanilla"] // How many vanilla cupcakes do we want?\n12\n> cupcakeOrder["chocolate"] // How many chocolate cupcakes?\n24\n> cupcakeOrder["raspberry"]\n6\n> cupcakeOrder["caramel apple"]\n36\n')),(0,i.kt)("h3",{id:"adding-content-to-a-dictionary"},"Adding Content to a Dictionary"),(0,i.kt)("p",null,"Let's go back to our first dictionary and add more words to it. First we'll recreate this dictionary in the REPL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> Dictionary<string, string> myDictionary = new Dictionary<string, string>() { {"A", "apple"}, {"B", "bear"} };\n')),(0,i.kt)("p",null,"Then we'll add another entry. We can use the square bracket notation for this, too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> myDictionary["C"] = "cat";\n')),(0,i.kt)("p",null,"We can see ",(0,i.kt)("inlineCode",{parentName:"p"},"myDictionary")," contains a new entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'> myDictionary\n{{ "A", "apple" }, { "B", "bear" }, { "C", "cat" }}\n')),(0,i.kt)("h3",{id:"the-dictionarytkeytvalue-class"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Dictionary<TKey,TValue>")," Class"),(0,i.kt)("p",null,"We can learn more about lists by reviewing the information in ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-6.0"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary<TKey,TValue>")," class"),". There are many helpful instance methods we can use to manage our dictionaries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Add()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Remove()")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Clear()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ContainsKey()"))))}m.isMDXComponent=!0}}]);