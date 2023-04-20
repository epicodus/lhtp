"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"41. Variable Scope",id:"variable_scope",slug:"variable_scope",hide_table_of_contents:!0,sidebar_position:41,day:"tuesday",type:"lesson"},l=void 0,r={unversionedId:"javascript_and_web_browsers/variable_scope",id:"javascript_and_web_browsers/variable_scope",title:"41. Variable Scope",description:"In this lesson, we'll discuss scope, one of the most important concepts in computer programming. The scope of our code determines where in our computer program code is available, and whether we can access or modify it. All of our variables and functions have scope in our code. As we'll soon learn, scope is divided into two main categories: global and local. There are other types of scope that we'll learn about in future sections.",source:"@site/docs/2_javascript_and_web_browsers/2a_homework_variable_scope.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/variable_scope",permalink:"/lhtp/javascript_and_web_browsers/variable_scope",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{title:"41. Variable Scope",id:"variable_scope",slug:"variable_scope",hide_table_of_contents:!0,sidebar_position:41,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"40. Homework: Identifying and Preventing Microaggressions",permalink:"/lhtp/javascript_and_web_browsers/homework_identifying_and_preventing_microaggressions"},next:{title:"42. PRACTICE: More Function Writing",permalink:"/lhtp/javascript_and_web_browsers/practice_more_function_writing"}},s={},c=[{value:"Local scope",id:"local-scope",level:2},{value:"Global scope",id:"global-scope",level:2},{value:"Why Scoping Variables is Important",id:"why-scoping-variables-is-important",level:2},{value:"Test Your Understanding",id:"test-your-understanding",level:2},{value:"Code Snippet #1",id:"code-snippet-1",level:3},{value:"Code Snippet #2",id:"code-snippet-2",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll discuss ",(0,o.kt)("strong",{parentName:"p"},"scope"),", one of the most important concepts in computer programming. The scope of our code determines where in our computer program code is available, and whether we can access or modify it. All of our variables and functions have scope in our code. As we'll soon learn, scope is divided into two main categories: ",(0,o.kt)("strong",{parentName:"p"},"global")," and ",(0,o.kt)("strong",{parentName:"p"},"local"),". There are other types of scope that we'll learn about in future sections."),(0,o.kt)("p",null,"Let's start by learning about local scope."),(0,o.kt)("h2",{id:"local-scope"},"Local scope"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Variables declared inside of functions have ",(0,o.kt)("strong",{parentName:"p"},"local scope"),". This means they are only locally available during the execution of the function. When we look at a variable that is defined within a function, we find that its scope ends when the function is finished processing. In fact, the variable is created and destroyed each time the function runs."),(0,o.kt)("p",null,"Let's look at an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function sampleFunction() {\n  let localString = "This is a local variable";\n  window.alert(localString);\n  localString = "This is a local variable update!!";\n  window.alert(localString);\n}\n\nsampleFunction(); \nwindow.alert(localString);\n')),(0,o.kt)("p",null,"If we run this code in the DevTools console (you can copy and paste the above code), the first two alerts inside the function will run as expected when the function is called."),(0,o.kt)("p",null,"However, the third alert, which is outside of the function, will not run. Instead, we'll get the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Uncaught ReferenceError: localString is not defined\n")),(0,o.kt)("p",null,"This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"localString")," variable is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sampleFunction()")," function, and is locally scoped to that function. If we wanted to access the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"localString")," outside of the function, we'd need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function sampleFunction() {\n  let localString = "This is a local variable";\n  window.alert(localString);\n  localString = "This is a local variable update!!";\n  window.alert(localString);\n  return localString; // new line of code!\n}\n\nconst globalString = sampleFunction();  // updated code!\nwindow.alert("The value of \'localString\' at the global scope: " + globalString); // updated code!\n')),(0,o.kt)("p",null,"Notice that we've updated the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"localString")," variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"globalString")," when we save the value returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"sampleFunction()")," call. This is because we're at the global scope: all variables declared at the top level of a ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," file, outside of functions, have ",(0,o.kt)("strong",{parentName:"p"},"global scope"),". Let's discuss global scope now."),(0,o.kt)("h2",{id:"global-scope"},"Global scope"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As noted above, variables declared outside of functions have ",(0,o.kt)("strong",{parentName:"p"},"global scope"),'. These variables are at the "top level" of a ',(0,o.kt)("inlineCode",{parentName:"p"},".js")," file, which means that all code can access and modify them. "),(0,o.kt)("p",null,"Let's look at an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let globalString = "This is a global variable";\n\nfunction sampleFunction() {\n  window.alert(globalString);\n  globalString = "This is a global variable update!!";\n  window.alert(globalString);\n}\n\nwindow.alert(globalString);\nsampleFunction();\nwindow.alert(globalString);\n')),(0,o.kt)("p",null,"In the code snippet, we're defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalString")," variable at the global scope. We then alert the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"globalString")," variable outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sampleFunction()"),' function and inside of that function. When we run this code in the DevTools console, we\'ll get "This is a global variable" twice followed by "This is a global variable update!!" twice. Notably, we can modify the value of the ',(0,o.kt)("inlineCode",{parentName:"p"},"globalString")," variable from inside of the function, because it is initially defined at the global scope, which makes it available everywhere in our code."),(0,o.kt)("h2",{id:"why-scoping-variables-is-important"},"Why Scoping Variables is Important"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In computer programming, it's always the developer's goal to create code that is organized, easy to test, and bug-free. We haven't got to testing, but we can still understand what buggy or organized code looks like. Along with separating code that handles user interface logic and business logic, scope is another tool that lets us separate code into organized and distinct blocks. For example, when we create a variable that is local to a function, we're saying that we don't want any code to be able to access or modify that variable except for code in that function. "),(0,o.kt)("p",null,"Let's take one more look at our local variable example from earlier in this lesson. We will make one small change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function sampleFunction() {\n  localString = "This is a local variable";\n  window.alert(localString);\n  localString = "This is a local variable update!!";\n  window.alert(localString);\n}\n\nsampleFunction();\nwindow.alert(localString);\n')),(0,o.kt)("p",null,"In this example, we assign a new variable ",(0,o.kt)("inlineCode",{parentName:"p"},"localString")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"sampleFunction()")," ",(0,o.kt)("em",{parentName:"p"},"without")," adding ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,o.kt)("p",null,"What happens when we run the code? Do you think it will work correctly? Try it out in the console."),(0,o.kt)("p",null,"Everything runs correctly, including the alert outside of the function at the end of the code snippet. However, this is ",(0,o.kt)("em",{parentName:"p"},"not")," what we want to happen. The variable has been declared inside the function, so shouldn't it be scoped there, too?"),(0,o.kt)("p",null,"This is a bad thing that JavaScript does that's a holdover from the early days of JavaScript. If a variable is declared without ",(0,o.kt)("inlineCode",{parentName:"p"},"let"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),", it's automatically global ",(0,o.kt)("em",{parentName:"p"},"no matter where it is defined"),"."),(0,o.kt)("p",null,"You will run into errors and bad bugs if you let variables run amok like this, so it's important to always declare a variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,o.kt)("p",null,"This code is very small, so you may not see the problem with using a global variable. But imagine a code base that's thousands or tens of thousands of lines long. For instance, let's say you were working with a huge codebase that had a function like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function(event) {\n  window.alert(whatToSay);\n}\n")),(0,o.kt)("p",null,"It might be incredibly difficult to figure out where ",(0,o.kt)("inlineCode",{parentName:"p"},"whatToSay")," was defined. And if ",(0,o.kt)("inlineCode",{parentName:"p"},"whatToSay")," was used and changed in multiple places, it would be next to impossible to figure out where its value was last set."),(0,o.kt)("p",null,"Let's take a look at an analogy to solidify the concept. Let's say we have a fun but overly feisty golden retriever named Max. Max isn't allowed into most rooms of the house because he will chew everything up and make a mess. However, it's okay if he hangs out in the den because the den has been Max-proofed. If we wanted to ensure this in our code, we need to scope Max to just the den like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function den() {\n  let dog = "Max";\n}\n\nfunction livingRoom() {\n\n}\n\nfunction kitchen() {\n\n}\n')),(0,o.kt)("p",null,"In the code above, Max is locally scoped to the den. He can't be called or redefined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"livingRoom()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kitchen()")," function."),(0,o.kt)("p",null,"However, he will certainly run amok if we do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let dog = "Max";\n\nfunction den() {\n\n}\n\nfunction livingRoom() {\n\n}\n\nfunction kitchen() {\n\n}\n')),(0,o.kt)("p",null,"Now he is global in scope and he has access to ",(0,o.kt)("em",{parentName:"p"},"all")," the rooms. He could chew up a couch in the ",(0,o.kt)("inlineCode",{parentName:"p"},"livingRoom()")," function and eat all the food lying out in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kitchen()")," function. As you can imagine, this is not at all good! Even if you don't yet see how global variables can cause harm to our code (because our code samples are small), just trust the analogy above. Global variables can truly wreak havoc."),(0,o.kt)("p",null,"For that reason, ",(0,o.kt)("strong",{parentName:"p"},"avoid using global variables, including in your independent projects"),". There will be rare occasions when we will use global variables in lessons (or when you might see a reason to use them in your own code). Global variables exist for a reason \u2014 and they can be needed sometimes. However, they are too often used as a crutch for people new to coding. In the coming weeks, ",(0,o.kt)("strong",{parentName:"p"},"if the lessons don't specify using a global variable, you almost certainly don't need one.")," So stick with using locally scoped variables!"),(0,o.kt)("h2",{id:"test-your-understanding"},"Test Your Understanding"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Below are two code snippets that each have two alerts that display the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"bunnyName"),", one when the function runs and one at the end of the code. What value do you expect for each alert? Use the DevTools console to test your theories."),(0,o.kt)("h3",{id:"code-snippet-1"},"Code Snippet #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let bunnyName = "Flopsy";\n\nfunction hippityHoppity() {\n  window.alert(bunnyName);\n  bunnyName = "Cottontail";\n}\n\nhippityHoppity();\nwindow.alert(bunnyName);\n')),(0,o.kt)("h3",{id:"code-snippet-2"},"Code Snippet #2"),(0,o.kt)("p",null,"What values do you expect for these alerts?  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let bunnyName = "Flopsy";\n\nfunction hippityHoppity() {\n  let bunnyName = "Mopsy";\n  window.alert(bunnyName);\n  bunnyName = "Cottontail";\n}\n\nhippityHoppity();\nwindow.alert(bunnyName);\n')))}u.isMDXComponent=!0}}]);