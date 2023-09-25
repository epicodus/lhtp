"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Strings, String Concatenation and Interpolation, and Chars",id:"strings_string_concatenation_and_interpolation_and_chars",slug:"strings_string_concatenation_and_interpolation_and_chars",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_strings_and_concatenation.md"},o=void 0,s={unversionedId:"c_and_net_classic/data-types-variables-branching-and-looping/strings_string_concatenation_and_interpolation_and_chars",id:"c_and_net_classic/data-types-variables-branching-and-looping/strings_string_concatenation_and_interpolation_and_chars",title:"Strings, String Concatenation and Interpolation, and Chars",description:"Most of the information we worked with in Introduction to Programming, such as strings, integers, variables, methods, and objects function similarly in C#. There are a few differences but you'll catch on quickly!",source:"@site/docs/c_and_net_classic/3_data-types-variables-branching-and-looping/0b_strings_and_concatenation.md",sourceDirName:"c_and_net_classic/3_data-types-variables-branching-and-looping",slug:"/c_and_net_classic/data-types-variables-branching-and-looping/strings_string_concatenation_and_interpolation_and_chars",permalink:"/c_and_net_classic/data-types-variables-branching-and-looping/strings_string_concatenation_and_interpolation_and_chars",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Strings, String Concatenation and Interpolation, and Chars",id:"strings_string_concatenation_and_interpolation_and_chars",slug:"strings_string_concatenation_and_interpolation_and_chars",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_strings_and_concatenation.md"},sidebar:"c_and_net_classic",previous:{title:"Using a C# REPL",permalink:"/c_and_net_classic/data-types-variables-branching-and-looping/using_a_c_repl"},next:{title:"Integers, Decimals, and Arithmetic",permalink:"/c_and_net_classic/data-types-variables-branching-and-looping/integers_decimals_and_arithmetic"}},l={},c=[{value:"Strings",id:"strings",level:2},{value:"String Concatenation",id:"string-concatenation",level:3},{value:"String Interpolation",id:"string-interpolation",level:3},{value:"Chars",id:"chars",level:2}],p={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Most of the information we worked with in Introduction to Programming, such as strings, integers, variables, methods, and objects function similarly in C#. There are a few differences but you'll catch on quickly! "),(0,r.kt)("p",null,"In this lesson we'll learn about one of the most common data types, the ",(0,r.kt)("strong",{parentName:"p"},"string"),". We'll then learn about string concatenation and interpolation. We'll wrap up by learning about the ",(0,r.kt)("strong",{parentName:"p"},"char")," data type."),(0,r.kt)("h2",{id:"strings"},"Strings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"C# strings are very similar to JavaScript strings. They're simply a sequence of characters between two quotation marks. ",(0,r.kt)("strong",{parentName:"p"},"Note that strings require quotation marks ",(0,r.kt)("inlineCode",{parentName:"strong"},'"')," specifically \u2014 apostrophes (",(0,r.kt)("inlineCode",{parentName:"strong"},"'"),') are used to define a single character for a data type called "char".')," We'll learn about chars later in this lesson."),(0,r.kt)("p",null,"We can open our REPL with the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ dotnet-script")," command in the Terminal (for Mac) or GitBash (for Windows) to try them out."),(0,r.kt)("p",null,"Once in the REPL we'll type a basic string and hit ",(0,r.kt)("em",{parentName:"p"},"Enter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Hello World"\n')),(0,r.kt)("p",null,"Here is the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'"Hello World"\n')),(0,r.kt)("p",null,"Now let's try it with a semicolon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Hello World";\n')),(0,r.kt)("p",null,"Adding a semicolon produces an error:"),(0,r.kt)("code",{style:{color:"red"}},"(1,1): error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement"),(0,r.kt)("p",null,"Remember that C# is a strongly typed language. According to this error, we've already broken one of C#'s strict rules about typing. In this case, the semicolon indicates that C# is expecting a command. In other words, you need to ",(0,r.kt)("em",{parentName:"p"},"do")," something with this string. Let's take the error's advice and make an assignment, which means we'll assign our string to a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string greeting = "Hello";\n')),(0,r.kt)("p",null,"We're no longer using JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),". Instead, we're being more specific and declaring that ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". We'll need to do this for all variables that we create \u2014 that is, declare its specific data type. "),(0,r.kt)("p",null,"Next, let's call the variable in the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> greeting\n"Hello"\n')),(0,r.kt)("p",null,"Without the semicolon, our REPL can still return the value of the variable. A quick word of warning: don't get used to solving problems in C# by dropping semicolons. This convention helps us evaluate code in the REPL, nothing more."),(0,r.kt)("h3",{id:"string-concatenation"},"String Concatenation"),(0,r.kt)("p",null,"We can also ",(0,r.kt)("strong",{parentName:"p"},"concatenate")," strings together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator. As you'll recall, concatenation is the act of making a new string out of multiple smaller strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Hello" + " " + "World"\n"Hello World"\n')),(0,r.kt)("p",null,"Notice the return value is different from what we originally typed. This is the ",(0,r.kt)("strong",{parentName:"p"},"evaluation")," part of the REPL (Read, Evaluate, Print, Loop) acronym; C# has evaluated the code and returned a result."),(0,r.kt)("p",null,"Here's another example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Programming" + " " + "is" + " " "awesome!"\n\n(1,34): error CS1002: ; expected\n')),(0,r.kt)("p",null,"Oops, we got an error this time! The error says a semicolon was expected. Something is wrong with our syntax and the REPL doesn't understand the command."),(0,r.kt)("p",null,"The issue isn't a missing semicolon, however! This error points us to a missing ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," between the space after ",(0,r.kt)("inlineCode",{parentName:"p"},'"is"')," and the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"awesome"'),". Let's fix this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Programming" + " " + "is" + " " + "awesome!"\n"Programming is awesome!"\n')),(0,r.kt)("h3",{id:"string-interpolation"},"String Interpolation"),(0,r.kt)("p",null,"String interpolation in C# is the same as template literals in JavaScript, where we can include a variable within a string that we create. Here's an example of what this looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'> string greeting1 = "Hello";\n> $"{greeting1} World!"\n"Hello World!"\n')),(0,r.kt)("p",null,"Here's a few rules for using string interpolation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We indicate that we are going to use string interpolation by include the ",(0,r.kt)("inlineCode",{parentName:"li"},"$")," sign before the opening quotes of the string, with no space in between."),(0,r.kt)("li",{parentName:"ul"},"We surround the variable we want evaluated and added to our string in curly brackets: ",(0,r.kt)("inlineCode",{parentName:"li"},"{ }"),".")),(0,r.kt)("p",null,"For contrast, here's this same code in JavaScript using a template literal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const greeting1 = "Hello";\n> `${greeting1} World!`;\n"Hello World!"\n')),(0,r.kt)("h2",{id:"chars"},"Chars"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"char")," is the C# data type that represents a single symbol or alphanumeric character, in upper or lower case. Here's how we can create chars in the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> 'H'\n'H'\n> '9'\n'9'\n> '/'\n'/'\n")),(0,r.kt)("p",null,"Notice that we declare a char with apostrophes and not quotation marks \u2014 quotation marks ",(0,r.kt)("inlineCode",{parentName:"p"},'" "')," are reserved for creating strings, while apostrophes ",(0,r.kt)("inlineCode",{parentName:"p"},"' '")," are reserved for creating chars."),(0,r.kt)("p",null,"And here's how we can store a char in a variable by declaring it of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"; this is also called ",(0,r.kt)("strong",{parentName:"p"},"assignment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"> char myGrade = 'B';\n> myGrade\n'B'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that we cannot perform concatenation or interpolation with chars!")," "),(0,r.kt)("p",null,"There we go! Play around with strings and chars a bit more in the REPL before advancing to the next lesson."))}g.isMDXComponent=!0}}]);