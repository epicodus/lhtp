"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"Using JSX Expressions with Arguments",id:"using-jsx-expressions-with-arguments",slug:"using-jsx-expressions-with-arguments",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3c_using_jsx_expressions_with_arguments.md"},r=void 0,s={unversionedId:"react/react-fundamentals/using-jsx-expressions-with-arguments",id:"react/react-fundamentals/using-jsx-expressions-with-arguments",title:"Using JSX Expressions with Arguments",description:"Before we continue, let's discuss an important gotcha related to evaluating JavaScript functions in JSX curly braces.",source:"@site/docs/react/3_react-fundamentals/3c-using-jsx-expressions-with-arguments.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/using-jsx-expressions-with-arguments",permalink:"/react/react-fundamentals/using-jsx-expressions-with-arguments",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Using JSX Expressions with Arguments",id:"using-jsx-expressions-with-arguments",slug:"using-jsx-expressions-with-arguments",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3c_using_jsx_expressions_with_arguments.md"},sidebar:"react",previous:{title:"Planning Our Application: Part 3",permalink:"/react/react-fundamentals/planning-our-application-part-3"},next:{title:"Showing Ticket Detail",permalink:"/react/react-fundamentals/showing-ticket-detail"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we continue, let's discuss an important gotcha related to evaluating JavaScript functions in JSX curly braces."),(0,i.kt)("p",null,"Let's look at an example. If we were to attach an ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," handler to a JSX div, it might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div onClick={ doAThing }>Click This Button To Do A Thing</div>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"doAThing")," is a callback so it doesn't have parens. Let's say we were to add parens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div onClick={ doAThing() }>Click This Button To Do A Thing</div>\n")),(0,i.kt)("p",null,"This will not have the intended effect. Now ",(0,i.kt)("inlineCode",{parentName:"p"},"doAThing")," will be invoked immediately when the DOM is updated \u2014 instead of waiting for a click event as it should."),(0,i.kt)("p",null,"We've seen this kind of behavior before. Here's an example of a function where we might want to pass another function in as a callback:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function thisTakesACallbackAsAnArgument(thisIsAFunction) {\n  const argumentToFunction = // some computed value\n  return thisIsAFunction(argumentToFunction);\n}\n")),(0,i.kt)("p",null,"In the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"thisIsAFunction")," should take an argument \u2014 but we don't know what that argument should be until we calculate the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"argumentToFunction"),". We can't pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"thisIsAFunction()")," as an argument to the outer function because it will be invoked immediately. Instead, because ",(0,i.kt)("inlineCode",{parentName:"p"},"thisIsAFunction")," is a first-class citizen, we can pass it around like a variable until we are ready to invoke it by adding parens (in this case, parens that include the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"argumentToFunction"),")."),(0,i.kt)("p",null,"The example above is contrived \u2014 but it's similar to what's going on when we evaluate functions and methods inside JSX curly braces. Since these functions are usually connected to an event handler, we don't want them to be invoked immediately. We want them to wait until a user does something."),(0,i.kt)("p",null,"However, what if we need to pass an argument to a JavaScript function in curly braces? Let's say that ",(0,i.kt)("inlineCode",{parentName:"p"},"doAThing")," needs to take ",(0,i.kt)("inlineCode",{parentName:"p"},"someOtherThing")," as an argument. We can't do the following because it will be invoked immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div onClick={ doAThing(someOtherThing) }>Click This Button To Do A Thing</div>\n")),(0,i.kt)("p",null,"We only want this function to be invoked on a click event so we need to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<div onClick={ () => doAThing(someOtherThing) }>Click This Button To Do A Thing</div>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"() => ")," is an anonymous arrow function with no parameters. You may wonder how in the world this will solve our problem. Well, let's take a look at a simpler example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const hey = () => "Hey there!"\n')),(0,i.kt)("p",null,"If we check the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"hey")," in the console, it's ",(0,i.kt)("inlineCode",{parentName:"p"},'() => "hey there"'),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"hey")," variable is storing our anonymous function."),(0,i.kt)("p",null,"To invoke it, we need to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'hey()\n"Hey there!"\n')),(0,i.kt)("p",null,"In other words, the ",(0,i.kt)("inlineCode",{parentName:"p"},"() =>")," syntax is just another way of creating a function literal."),(0,i.kt)("p",null,"Let's look at another example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function heyThere(name) {\n  return `Hey ${name}!`\n}\n\nconst dontInvokeYet = () => heyThere("Jasmine")\nconst invokeNow = heyThere("Jasmine")\n')),(0,i.kt)("p",null,"Try this out in the console. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"heyThere")," function needs to take a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," as an argument now \u2014 so we have to add parens to the function."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dontInvokeYet")," stores the function (because we use ",(0,i.kt)("inlineCode",{parentName:"p"},"() => "),"). We can invoke it later by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"dontInvokeYet()"),". The value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dontInvokeYet")," variable is ",(0,i.kt)("inlineCode",{parentName:"p"},'() => heyThere("Jasmine")')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"invokeNow")," will call the function immediately and store it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"invokeNow")," variable. The value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"invokeNow")," variable is ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hey Jasmine!"')),(0,i.kt)("p",null,"Applying this to our JSX example, we want the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," to be set to a function that should be evoked later, not now."),(0,i.kt)("p",null,"So while the syntax may look a little strange at first, remember that it's just JavaScript, not React. We always need to make sure that any event handlers being evaluated with JSX are invoked later (when an event is triggered), not immediately (when the component is rendered). React can only do this because JavaScript functions are first-class citizens. It's another way in which React leverages the functional programming power of JavaScript."))}d.isMDXComponent=!0}}]);