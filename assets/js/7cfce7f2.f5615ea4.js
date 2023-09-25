"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[21002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Iterators: Foreach and For Loops",id:"iterators_foreach_and_for_loops",slug:"iterators_foreach_and_for_loops",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_for_each_loops.md"},o=void 0,l={unversionedId:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/iterators_foreach_and_for_loops",id:"c_and_net_part_time_evening/data-types-variables-branching-and-looping/iterators_foreach_and_for_loops",title:"Iterators: Foreach and For Loops",description:"In Intro, we typically used two types of JavaScript loops: for and forEach(). forEach() loops iterate through each item in an array whereas for loops are more manual where we have to define how and when the loop starts and stops.",source:"@site/docs/c_and_net_part_time_evening/3_data-types-variables-branching-and-looping/0l_for_each_loops.md",sourceDirName:"c_and_net_part_time_evening/3_data-types-variables-branching-and-looping",slug:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/iterators_foreach_and_for_loops",permalink:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/iterators_foreach_and_for_loops",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Iterators: Foreach and For Loops",id:"iterators_foreach_and_for_loops",slug:"iterators_foreach_and_for_loops",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0l_for_each_loops.md"},sidebar:"c_and_net_part_time_evening",previous:{title:"Dictionaries",permalink:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/dictionaries"},next:{title:"Type Casting",permalink:"/c_and_net_part_time_evening/data-types-variables-branching-and-looping/type_casting"}},p={},s=[{value:"Foreach Loops",id:"foreach-loops",level:2},{value:"Arrays",id:"arrays",level:3},{value:"Lists",id:"lists",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Using For Loops",id:"using-for-loops",level:2},{value:"Arrays",id:"arrays-1",level:3},{value:"Lists",id:"lists-1",level:3},{value:"Dictionaries",id:"dictionaries-1",level:3}],c={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Intro, we typically used two types of JavaScript loops: ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach()"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach()")," loops iterate through each item in an array whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loops are more manual where we have to define how and when the loop starts and stops."),(0,r.kt)("p",null,"C# also features both ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," loops, although the syntax ",(0,r.kt)("em",{parentName:"p"},"does")," differ. This lesson will walk through both types of iterators."),(0,r.kt)("h2",{id:"foreach-loops"},"Foreach Loops"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Foreach loops cycle through an array and pinpoint each item. In JavaScript, we used foreach loops like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const theEntireArray = ["zero index", "first index", "second index"];\ntheEntireArray.forEach(function(individualEntry){\n  console.log(individualEntry);\n});\n')),(0,r.kt)("p",null,"However, doing the same thing in C# looks markedly different. We'll start with arrays, and then look at lists and dictionaries. "),(0,r.kt)("h3",{id:"arrays"},"Arrays"),(0,r.kt)("p",null,"First, defining a similar array in the REPL looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string[] theEntireArray = {"zero index", "first index", "second index"};\n')),(0,r.kt)("p",null,"To loop through this array and print each entry to the console, we'd use the following code. Go ahead and copy/paste it into the REPL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"foreach (string individualEntry in theEntireArray)\n{\n  Console.WriteLine(individualEntry);\n}\n")),(0,r.kt)("p",null,"The line ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach (string individualEntry in theEntireArray)"),' can be read as "for each element in ',(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray"),", name it ",(0,r.kt)("inlineCode",{parentName:"p"},"individualEntry"),", then run the line of code between the curly braces.\" In this case, we're printing each item in ",(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray")," to the console."),(0,r.kt)("p",null,"Note that we also need to include the data type for the new variable we're creating in the loop: ",(0,r.kt)("inlineCode",{parentName:"p"},"string individualEntry"),"."),(0,r.kt)("p",null,"When we run this loop in the REPL, it prints each individual string entry in the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"zero index\nfirst index\nsecond index\n")),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("p",null,"Looping through a list with foreach is almost the exact same as with an array. The only difference is that we're using a List. Copy/paste the following code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'List<string> groceryList = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };\nforeach (string item in groceryList)\n{\n  Console.WriteLine(item);\n}\n')),(0,r.kt)("p",null,"We should see this printed in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spaghetti\ntomatoes\nbasil\nmeatballs\n")),(0,r.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.kt)("p",null,"We can also loop through a dictionary with foreach, though we need to incorporate a new class called ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValuePair<TKey,TValue>")," to represent each key-value pair within the dictionary."),(0,r.kt)("p",null,"Copy/paste the following code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };\nforeach (KeyValuePair<string, int> cupcake in cupcakeOrder)\n{\n  Console.WriteLine($"{cupcake.Key}: {cupcake.Value}");\n}\n')),(0,r.kt)("p",null,"We should see this printed in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vanilla: 12\nchocolate: 24\nraspberry: 6\ncaramel apple: 36\n")),(0,r.kt)("p",null,"Similar to dictionaries, ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValuePair<TKey,TValue>")," requires that we specify a data type for the key and the value. "),(0,r.kt)("p",null,"Within the loop, notice that we access the key and value of each ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValuePair<TKey,TValue>")," through two properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value"),". Also notice that we're using string interpolation to put our variables directly into a string: ",(0,r.kt)("inlineCode",{parentName:"p"},'$"{cupcake.Key}: {cupcake.Value}"'),"."),(0,r.kt)("p",null,"Visit the docs to learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2?view=net-6.0"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"KeyValuePair<TKey,TValue>")," class"),"."),(0,r.kt)("h2",{id:"using-for-loops"},"Using For Loops"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For each loops are great when we want to do something to each element of a collection. But sometimes we only want to do something until a condition is met. For that, we can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,r.kt)("p",null,"Let's refactor each of our previous examples to use a for loop."),(0,r.kt)("h3",{id:"arrays-1"},"Arrays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string[] theEntireArray = {"zero index", "first index", "second index"};\nfor (int index = 0; index < theEntireArray.Length; index++)\n{\n  Console.WriteLine($"{index}: {theEntireArray[index]}");\n}\n')),(0,r.kt)("p",null,"Here's how the ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," statement here takes three parameters: ",(0,r.kt)("strong",{parentName:"p"},"initialization"),", ",(0,r.kt)("strong",{parentName:"p"},"condition"),", and ",(0,r.kt)("strong",{parentName:"p"},"final expression"),". Each is separated by a semicolon ",(0,r.kt)("inlineCode",{parentName:"p"},";"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"initialization")," parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"int index = 0"),") creates an ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," that starts at zero. This states that the first time the loop runs is actually the 0th time. Initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loops at 0 is a common practice, but they can theoretically be initialized at any number.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"condition")," parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"index < theEntireArray.Length"),") tells the loop when it should stop running. To determine this we're making use of our array's ",(0,r.kt)("inlineCode",{parentName:"p"},"Length")," property, which returns the number of elements in the array. For the condition parameter, we've instructed our loop to halt when ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," is no longer less than ",(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray.Length"),". Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray.Length")," evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", but the last ",(0,r.kt)("em",{parentName:"p"},"index")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", because indexes begin at ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"final expression")," parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"index++ "),") manipulates the variable that keeps track of where we are in the loop. Here we use the increment operator ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," to add ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," each time we go through the loop.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Within the loop, we include the line ",(0,r.kt)("inlineCode",{parentName:"p"},'Console.WriteLine($"{index}: {theEntireArray[index]}");'),". On each loop through, we print the current ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," as well as the element in ",(0,r.kt)("inlineCode",{parentName:"p"},"theEntireArray")," at the current ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"."))),(0,r.kt)("p",null,"We should see the following output in the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0: zero index\n1: first index\n2: second index\n")),(0,r.kt)("h3",{id:"lists-1"},"Lists"),(0,r.kt)("p",null,"Looping through a list with a for loop is almost the exact same as with an array. The two differences are that we're using a list (instead of an array) and lists have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," property that returns the number of elements within it (as opposed to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Length")," property). Copy/paste the following code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'List<string> groceryList = new List<string> { "spaghetti", "tomatoes", "basil", "meatballs" };\nfor (int index = 0; index < groceryList.Count; index++)\n{\n  Console.WriteLine($"{index}: {groceryList[index]}");\n}\n')),(0,r.kt)("p",null,"We should see this printed in our console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0: spaghetti\n1: tomatoes\n2: basil\n3: meatballs\n")),(0,r.kt)("h3",{id:"dictionaries-1"},"Dictionaries"),(0,r.kt)("p",null,"If we want too loop through a dictionary with a for loop, we'll need to use the dictionary instance method ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementAt()")," to locate the key-value pair by an index value. Let's take a look at the code first. Copy/paste the following code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL to see how it works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Dictionary<string, int> cupcakeOrder = new Dictionary<string, int>() { {"vanilla", 12}, {"chocolate", 24}, {"raspberry", 6}, {"caramel apple", 36} };\nfor (int index = 0; index < cupcakeOrder.Count; index++)\n{\n  KeyValuePair<string, int> cupcake = cupcakeOrder.ElementAt(index);\n  Console.WriteLine($"{index}: {cupcake.Value} {cupcake.Key} cupcakes");\n}\n')),(0,r.kt)("p",null,"In each iteration of the loop, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," variable in order to locate a key-value pair within the dictionary using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementAt()")," instance method. The key-value pair is then saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cupcake")," variable as an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValuePair<TKey,TValue>")," class. "),(0,r.kt)("p",null,"Then, we access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," properties (of the ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValuePair<TKey,TValue>")," class) to display each cupcake's flavor and the amount that we want to order. We should see this printed in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0: 12 vanilla cupcakes\n1: 24 chocolate cupcakes\n2: 6 raspberry cupcakes\n3: 36 caramel apple cupcakes\n")),(0,r.kt)("p",null,"And with that, we've covered the basics of looping with for and foreach loops for arrays, lists, and dictionaries."))}h.isMDXComponent=!0}}]);