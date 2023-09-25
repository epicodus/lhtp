"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[67666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Using Node in the Command Line",id:"using_node_in_the_command_line",slug:"using_node_in_the_command_line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0c_using_node_in_the_command_line.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/using_node_in_the_command_line",id:"react/functional-programming-with-javascript/using_node_in_the_command_line",title:"Using Node in the Command Line",description:"So far, we've used JavaScript to build browser applications. When we want to try out snippets of code, we've used the console in Chrome Developer Tools or an online development environment like Codepen.",source:"@site/docs/react/2_functional-programming-with-javascript/0c_using_node_in_the_command_line.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/using_node_in_the_command_line",permalink:"/lhtp/react/functional-programming-with-javascript/using_node_in_the_command_line",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using Node in the Command Line",id:"using_node_in_the_command_line",slug:"using_node_in_the_command_line",hide_table_of_contents:!0,sidebar_position:4,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2_functional-programming-with-javascript/0c_using_node_in_the_command_line.md"},sidebar:"react",previous:{title:"Testing Functional Code",permalink:"/lhtp/react/functional-programming-with-javascript/testing_functional_code"},next:{title:"Immutability",permalink:"/lhtp/react/functional-programming-with-javascript/immutability"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far, we've used JavaScript to build browser applications. When we want to try out snippets of code, we've used the console in Chrome Developer Tools or an online development environment like Codepen."),(0,r.kt)("p",null,'If you are a full-time student, you have experience using a REPL (Read - Evaluate - Print - Loop) \u2014 either with C# or Ruby. A REPL is a tool we can use to evaluate code in the terminal. With JavaScript, we can use Node to run our code in the terminal. Node is a runtime environment just like the browser. The difference is that the browser is a client-side environment while Node is a server-side environment. To distill this a little further, JavaScript in the browser is "front end" code while JavaScript using Node is "back end" code.'),(0,r.kt)("p",null,"Both Node and Chrome use the V8 JavaScript engine. The V8 JavaScript engine is an open-source project developed by Google and written in C++. It uses just-in-time (JIT) compiling to translate JavaScript into code our machines can understand. This makes the V8 engine extremely fast, which is part of the reason Node is a popular solution for server-side projects."),(0,r.kt)("p",null,"We will not cover Node in depth in this course. However, we can use Node both as a REPL (Read - Evaluate - Print - Loop) and as a tool to run our JavaScript programs. (If Node is not installed on your personal machine yet, see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/setting-up-javascript/installing-node-js"},"installation instructions here"),")."),(0,r.kt)("p",null,"To use Node as a REPL, simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," in the Terminal."),(0,r.kt)("p",null,"This will bring up a command line prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},">\n")),(0,r.kt)("p",null,"Now we can type in JavaScript code and the REPL will evaluate it. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "Node".concat(" is server-side.");\n\'Node is server-side.\'\n')),(0,r.kt)("p",null,"We can type the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab")," key to get a list of Node commands. Some of these commands are JavaScript methods and data types that we've used before. Others are for using server-side Node."),(0,r.kt)("p",null,"Finally, to exit the REPL, hold down the Ctrl and c keys twice."),(0,r.kt)("p",null,"The Node REPL can be helpful for trying out code."),(0,r.kt)("p",null,"We can also run a JavaScript file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," command. Let's move the code above into a file. We will also need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," in order for our code to print to the command line:"),(0,r.kt)("div",{class:"filename"},"js-code.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Node".concat(" is server-side."));\n')),(0,r.kt)("p",null,"Now we can run our script using Node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$ node js-code.js\nNode is server-side.\n")),(0,r.kt)("p",null,"Note that the string characters won't show up in the Terminal."),(0,r.kt)("p",null,"It may seem odd to use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," statements to print commands to the Terminal. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," happens to use a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"process.stdout.write()")," under the hood. ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," is short for ",(0,r.kt)("strong",{parentName:"p"},"standard output"),". Standard input is for data streaming into a program while standard output is for data streaming out of a program. It is not specific to Node or JavaScript."),(0,r.kt)("p",null,"Alternatively, if we already have Node open, we can add a require statement to add a script. (This might be useful if we were experimenting with several scripts at once.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> require('./js-code.js')\n")),(0,r.kt)("p",null,"Note that we must include the relative path ",(0,r.kt)("inlineCode",{parentName:"p"},"./")," for this to work."),(0,r.kt)("p",null,"You may choose to use Node, the Chrome console or an online code editor like Codepen to experiment with functional code. At the very least, we recommend trying out the Node REPL."))}u.isMDXComponent=!0}}]);