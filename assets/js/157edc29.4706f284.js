"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"8. Protecting API Keys",id:"protecting_api_keys",slug:"protecting_api_keys",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0h_managing_api_keys.md"},o=void 0,s={unversionedId:"intermediate_javascript_classic/asynchrony-and-apis/protecting_api_keys",id:"intermediate_javascript_classic/asynchrony-and-apis/protecting_api_keys",title:"8. Protecting API Keys",description:"In the real world, API keys shouldn't be stored in client-side JavaScript files. This simply isn't secure, especially if the API has a rate limit, charges for use, or provides access to sensitive information. If your API key is accessible directly in the source code, anyone can access it, including bots!",source:"@site/docs/intermediate_javascript_classic/5_asynchrony-and-apis/0h_managing_api_keys.md",sourceDirName:"intermediate_javascript_classic/5_asynchrony-and-apis",slug:"/intermediate_javascript_classic/asynchrony-and-apis/protecting_api_keys",permalink:"/lhtp/intermediate_javascript_classic/asynchrony-and-apis/protecting_api_keys",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"8. Protecting API Keys",id:"protecting_api_keys",slug:"protecting_api_keys",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_asynchrony-and-apis/0h_managing_api_keys.md"},sidebar:"intermediate_javascript_classic",previous:{title:"7. Making API Calls with JavaScript",permalink:"/lhtp/intermediate_javascript_classic/asynchrony-and-apis/making_api_calls_with_javascript"},next:{title:"9. Exception Handling for API Calls",permalink:"/lhtp/intermediate_javascript_classic/asynchrony-and-apis/exception_handling_for_api_calls"}},l={},p=[{value:"Protecting API Keys",id:"protecting-api-keys",level:2},{value:"Adding <code>.env</code> to <code>.gitignore</code>",id:"adding-env-to-gitignore",level:3},{value:"Creating a <code>.env</code> File",id:"creating-a-env-file",level:3},{value:"Configuring webpack",id:"configuring-webpack",level:3},{value:"Accessing Environmental Variables",id:"accessing-environmental-variables",level:3},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the real world, API keys shouldn't be stored in client-side JavaScript files. This simply isn't secure, especially if the API has a rate limit, charges for use, or provides access to sensitive information. If your API key is accessible directly in the source code, anyone can access it, including bots!"),(0,i.kt)("p",null,"Thankfully, we can easily conceal API keys in our applications, and that's just what we'll learn how to do in this lesson. "),(0,i.kt)("p",null,"It's worth noting that we'll be learning a method of protecting and managing API keys for development. In production, your JavaScript application would typically make a request to your own web server, which safely stores your API key; then your web server would make the appropriate request to the API, and then handle delivering the response to your application. "),(0,i.kt)("h2",{id:"protecting-api-keys"},"Protecting API Keys"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"When we write code in development, we can store our API key in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file stored on our local machines. ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," is a place where we can store any ",(0,i.kt)("strong",{parentName:"p"},"environmental variables")," we want to keep secret (such as an API key). These are variables that are specific to your environment and shouldn't be shared with others. ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," is a common file extension for a configuration file used to set variables containing sensitive information. In fact, the file is a convention used across many frameworks including Node and Rails."),(0,i.kt)("p",null,"Once we have a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, we need to add it to our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),". This way, we don't accidentally push sensitive information to GitHub."),(0,i.kt)("p",null,"Anyone who wants to clone and use our application can simply create their own local ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file with their own API key. Because of this, ",(0,i.kt)("strong",{parentName:"p"},"you are required to include instructions for getting and setting up an API key in your README for this section's independent project.")," A README should have all instructions for setting up a project, so the reason for this requirement should be clear. "),(0,i.kt)("h3",{id:"adding-env-to-gitignore"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,i.kt)("p",null,"Before using an API key in our application or creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, we need to make we're ignoring it. This should always be your first step. "),(0,i.kt)("p",null,"Let's add ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file now. At this point, your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file should look something like this:"),(0,i.kt)("div",{class:"filename"},".gitignore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"node_modules/\ndist/\ncoverage/\n.env\n")),(0,i.kt)("h3",{id:"creating-a-env-file"},"Creating a ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")," File"),(0,i.kt)("p",null,"Next, let's create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of our project where we can store our sensitive variables:"),(0,i.kt)("div",{class:"filename"},".env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"API_KEY=3d68a17ddd5ea407ab91f2d278342017\n")),(0,i.kt)("p",null,"Note that the API key above is a fake one \u2014 you will need to replace it with your own. It's ",(0,i.kt)("em",{parentName:"p"},"not")," a string \u2014 so don't use quotes or backticks!"),(0,i.kt)("p",null,"The variable that we're storing the key in is ",(0,i.kt)("inlineCode",{parentName:"p"},"API_KEY"),". Note that the naming convention here for variables is all uppercase with underscores between each words."),(0,i.kt)("p",null,"We can add as many variables as we want (such as if we are working on a project that uses multiple APIs and keys). While we are only protecting API keys, there are many other sensitive variables not related to APIs we might potentially want to store in the future. "),(0,i.kt)("h3",{id:"configuring-webpack"},"Configuring webpack"),(0,i.kt)("p",null,"Next, we'll use a webpack plugin called ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv-webpack")," to make our environmental variables available inside our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install dotenv-webpack@2.0.0 --save-dev\n")),(0,i.kt)("p",null,"Because it's a plugin, we need to first ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," it and then add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," array in ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,i.kt)("div",{class:"filename"},"webpack.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst Dotenv = require('dotenv-webpack');\n\nmodule.exports = {\n  ...\n  plugins: [\n    ...\n    new Dotenv()\n  ],\n  ...\n  }\n};\n")),(0,i.kt)("h3",{id:"accessing-environmental-variables"},"Accessing Environmental Variables"),(0,i.kt)("p",null,"To access environmental variables in our application, we need to preface the environmental variable with ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env"),". Here's an example using our API_KEY from above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"process.env.API_KEY\n")),(0,i.kt)("p",null,"Note that it's necessary to use a template literal so the key is expressed as a string within our API call. (Remember, it's not a string in our ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file.) For that reason, it's added to our code like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"${process.env.API_KEY}"),". Here's how it should look if we add it to our API call from the last lesson:"),(0,i.kt)("div",{class:"filename"},"src/index.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function getWeather () {\n  ...\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`\n  ...\n}\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You should ",(0,i.kt)("em",{parentName:"p"},"always")," be careful storing any sensitive information in your application. Even if it's just the key for an API that's free for public use, you should always be in the habit of keeping this information private. This means storing all keys in a local ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file that's ",(0,i.kt)("em",{parentName:"p"},"never")," pushed to GitHub. "),(0,i.kt)("p",null,"If you create GitHub templates for projects that use webpack, make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv-webpack")," is added to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," is added to your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),". "),(0,i.kt)("p",null,"Once again, when you push projects to GitHub that require API keys, make sure to include instructions in the README so that other users can clone your project and use their own API keys to see what you've built. That means including ",(0,i.kt)("em",{parentName:"p"},"all")," steps for getting a key \u2014 from the link to sign up for an account to any steps to getting an API key to the name of the API key variables that should be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. Including accurate instructions for getting and setting up an API key is a requirement for this section's independent project."),(0,i.kt)("p",null,"Up next, we'll add error handling to our OpenWeather API app."))}u.isMDXComponent=!0}}]);