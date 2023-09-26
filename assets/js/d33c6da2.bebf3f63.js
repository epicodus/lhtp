"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||i;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"Using Static Methods to Write and Read from the Console",id:"using-static-methods-to-write-and-read-from-the-console",slug:"using-static-methods-to-write-and-read-from-the-console",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_reading_from_and_writing_to_the_console.md"},r=void 0,s={unversionedId:"c-and-net-classic/data-types-variables-branching-and-looping/using-static-methods-to-write-and-read-from-the-console",id:"c-and-net-classic/data-types-variables-branching-and-looping/using-static-methods-to-write-and-read-from-the-console",title:"Using Static Methods to Write and Read from the Console",description:"In this lesson, we'll learn how to use two methods that will allow us to write something to the terminal, as well as how to read something that we write into the terminal:",source:"@site/docs/c-and-net-classic/3_data-types-variables-branching-and-looping/0h-reading-from-and-writing-to-the-console.md",sourceDirName:"c-and-net-classic/3_data-types-variables-branching-and-looping",slug:"/c-and-net-classic/data-types-variables-branching-and-looping/using-static-methods-to-write-and-read-from-the-console",permalink:"/c-and-net-classic/data-types-variables-branching-and-looping/using-static-methods-to-write-and-read-from-the-console",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Using Static Methods to Write and Read from the Console",id:"using-static-methods-to-write-and-read-from-the-console",slug:"using-static-methods-to-write-and-read-from-the-console",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0h_reading_from_and_writing_to_the_console.md"},sidebar:"c-and-net-classic",previous:{title:"Namespaces and Checking the Type of an Object",permalink:"/c-and-net-classic/data-types-variables-branching-and-looping/namespaces-and-checking-the-type-of-an-object"},next:{title:"Arrays",permalink:"/c-and-net-classic/data-types-variables-branching-and-looping/arrays"}},l={},c=[{value:"C# Consoles and the <code>Console</code> Class",id:"c-consoles-and-the-console-class",level:2},{value:"<code>Console.Writeline()</code>",id:"consolewriteline",level:2},{value:"<code>Console.ReadLine()</code>",id:"consolereadline",level:2},{value:"Static Methods",id:"static-methods",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll learn how to use two methods that will allow us to write something to the terminal, as well as how to read something that we write into the terminal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Console.WriteLine()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Console.ReadLine()"))),(0,a.kt)("p",null,"We'll primarily use these methods later on when we create an application that runs in our terminals! We call these ",(0,a.kt)("strong",{parentName:"p"},"console applications"),". However, we can use these methods for debugging similar to how we used JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," method."),(0,a.kt)("p",null,"So why learn about these now? It will give us the opportunity to learn about ",(0,a.kt)("strong",{parentName:"p"},"static methods")," that are called on a class, and not an instance of a class. Other than that, these two methods are used a lot in online code examples, so it's important to get to know them."),(0,a.kt)("h2",{id:"c-consoles-and-the-console-class"},"C# Consoles and the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Console")," Class"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At its most basic, a ",(0,a.kt)("strong",{parentName:"p"},"console")," is another word for a terminal, an application that we can use to interact with our operating system through text-based commands (like the applications GitBash or Terminal). "),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"C# console")," is a program that runs C# code in our terminal. Like other consoles, C# consoles are text-based, displaying text and accepting text commands. Given that definition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-script")," REPL we've been using to write C# is a console. The JavaScript console in the browser's Dev Tools may also come to mind \u2014 that is also a console, only for JavaScript."),(0,a.kt)("p",null,"Well, ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.console?view=net-6.0"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"Console")," class")," contains methods and properties that allow us to read information from or write information to a console. As noted earlier, we'll primarily use two static methods from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," class to write and read information to/from the console!"),(0,a.kt)("h2",{id:"consolewriteline"},(0,a.kt)("inlineCode",{parentName:"h2"},"Console.Writeline()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The static method ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," takes a string argument for text that you want printed in the C# console. Here's how we can use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'> Console.WriteLine("Hello!")\nHello!\n')),(0,a.kt)("p",null,"When we use this method, ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello!")," is printed to the console without quotes, and not simply regurgitated as happens with strings. For example, if we input a string ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hello!"')," into the REPL, we'll get ",(0,a.kt)("inlineCode",{parentName:"p"},'"Hello!"')," back:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'> "Hello!"\n"Hello!"\n')),(0,a.kt)("p",null,"The difference is subtle and not too meaningful right now. Later when we create C# console applications, we'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.WriteLine()")," all the time to print text to the console."),(0,a.kt)("h2",{id:"consolereadline"},(0,a.kt)("inlineCode",{parentName:"h2"},"Console.ReadLine()")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The static method ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()")," does not take any argument, but instead expects user input after it is invoked. Let's see how it works:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"> string userInput = Console.ReadLine();\nwe'll type something in and hit enter.\n> userInput\n\"we'll type something in and hit enter.\"\n")),(0,a.kt)("p",null,"When we call ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()"),", it returns the user input as a string, so we need to be sure to initialize a variable to hold the user input. That's what we do in the first line of code in the above example."),(0,a.kt)("p",null,"After invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()"),", our console is going to expect that we type something into it and hit enter. We've typed ",(0,a.kt)("inlineCode",{parentName:"p"},"we'll type something in and hit enter."),'. After we hit the "enter" key on our keyboard, we\'ll see the prompt ',(0,a.kt)("inlineCode",{parentName:"p"},">")," reappear. "),(0,a.kt)("p",null,"The last thing we can see in the code example above is that we check the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"userInput")," variable. As expected, it is set to a string with the text that we entered into the console. Pretty neat! Later when we create C# console applications, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Console.ReadLine()")," method to gather user input.  "),(0,a.kt)("h2",{id:"static-methods"},"Static Methods"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's review what a static method is. "),(0,a.kt)("p",null,"Static methods are methods that are called on the class and not an instance of a class. To properly call a method on a class, we need to reference the class name in Pascal case (also called upper camel case). We see this in our previous examples where we reference the class name ",(0,a.kt)("inlineCode",{parentName:"p"},"Console")," in Pascal case. "),(0,a.kt)("p",null,"Everything else about calling the method remains the same: we include a period after the class name, followed by the name of the method, followed by parens to invoke the method."),(0,a.kt)("p",null,"Built-in C# classes may have some, none, or be made up entirely of static methods. To learn whether a method is static, we can experiment in the REPL, or review the documentation for that method to determine if it is static. We'll revisit how to use documentation later on, after we're more familiar with C# and have created at least one console application."))}h.isMDXComponent=!0}}]);