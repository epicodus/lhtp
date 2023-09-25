"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[29432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Currying",id:"currying",slug:"currying",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0g_currying.md"},o=void 0,l={unversionedId:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/currying",id:"react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/currying",title:"Currying",description:"Currying is an essential functional programming concept named after the mathematician Haskell Curry.",source:"@site/docs/react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/0g_currying.md",sourceDirName:"react_part_time/2_functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78",slug:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/currying",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/currying",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Currying",id:"currying",slug:"currying",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0g_currying.md"},sidebar:"react_part_time",previous:{title:"Closures",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/closures"},next:{title:"Map, Reduce and Filter",permalink:"/react_part_time/functional-programming-with-javascript-1e75b6d0-055f-43e6-9f66-7a959ffc3f78/map_reduce_and_filter"}},u={},c=[],s={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Currying")," is an essential functional programming concept named after the mathematician Haskell Curry."),(0,a.kt)("p",null,"When we ",(0,a.kt)("strong",{parentName:"p"},"curry")," a function, we take a function with multiple arguments and then rewrite it as a series of functions, each with one argument. A function with only one argument is also known as an ",(0,a.kt)("strong",{parentName:"p"},"unary function"),"."),(0,a.kt)("p",null,"Let's use currying to write a function to display our favorite (and not-so-favorite) things."),(0,a.kt)("p",null,"Here's how the uncurried function might look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt, thing, reason) {\n  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n}\n")),(0,a.kt)("p",null,"We could then call it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'aThingIMaybeLike("really like", "functional programming", "it\'s cool");\n')),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},'"I really like functional programming because it\'s cool."')),(0,a.kt)("p",null,"We can curry this function by creating a series of nested anonymous functions inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"aThingIMaybeLike()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt) {\n  return function(thing) {\n    return function(reason) {\n      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Each of these functions now take a single argument. In order to use this code, we need to do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'aThingIMaybeLike("really like")("functional programming") ("it\'s cool")\n')),(0,a.kt)("p",null,"In the snippet above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our outer function ",(0,a.kt)("inlineCode",{parentName:"p"},"aThingIMaybeLike(howMuchILikeIt)")," takes ",(0,a.kt)("inlineCode",{parentName:"p"},'"really like"')," as an argument. When the function is invoked, it calls the first inner function ",(0,a.kt)("inlineCode",{parentName:"p"},"function(thing)"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Our first inner function ",(0,a.kt)("inlineCode",{parentName:"p"},"function(thing)")," is then invoked with the second argument ",(0,a.kt)("inlineCode",{parentName:"p"},'"functional programming"'),". It, too, returns a function: the innermost anonymous ",(0,a.kt)("inlineCode",{parentName:"p"},"function(reason)"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, our innermost function returns the string ",(0,a.kt)("inlineCode",{parentName:"p"},'"I really like functional programming because it\'s cool."')))),(0,a.kt)("p",null,"However, what's the point? Didn't we just write additional code to essentially do the same thing?"),(0,a.kt)("p",null,"In the short term, yes. However, our curried function has additional powers: it's both more reusable and more flexible."),(0,a.kt)("p",null,"For instance, we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const thingsThatBugMe = aThingIMaybeLike("do not like");\n')),(0,a.kt)("p",null,"Now we can call this with the inner two arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'thingsThatBugMe("global variables")("they are a code smell");\n> \'I do not like global variables because they are a code smell.\'\nthingsThatBugMe("functions with side effects")("they break code");\n> \'I do not like functions with side effects because they break code.\'\n')),(0,a.kt)("p",null,"We have additional flexibility to do this with multiple arguments as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const reasonILoveCoding = aThingIMaybeLike("love")("coding");\n')),(0,a.kt)("p",null,"If we try this out in the REPL, we'll see we can call our new function with just a single argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> reasonILoveCoding(\"it is fun\");\n'I love coding because it is fun.'\n> reasonILoveCoding(\"I enjoy problem-solving\");\n'I love coding because I enjoy problem-solving.'\n")),(0,a.kt)("p",null,"Let's briefly return to our original function that takes three arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function aThingIMaybeLike(howMuchILikeIt, thing, reason) {\n  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;\n}\n")),(0,a.kt)("p",null,"This method may be fewer lines but it doesn't have nearly as much flexibility as our curried version. It has no reusability while we were able to use our curried function to create new functions that use 1, 2 or 3 arguments."),(0,a.kt)("p",null,"Over the next few class sessions, try writing unary functions. Because each function should take only one argument, you will need to curry functions that would otherwise take multiple arguments. Note that you won't always be able to create an unary function. However, if a function takes too many arguments, that may also be a sign that it's trying to do too much."),(0,a.kt)("p",null,"Currying is another complex concept that often takes some time to absorb. Don't worry \u2014 you will get more practice and we will cover more use cases in upcoming lessons."))}f.isMDXComponent=!0}}]);