"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[58874],{30876:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return o?r.createElement(g,i(i({ref:t},s),{},{components:o})):r.createElement(g,i({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},72125:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(7896),n=(o(2784),o(30876));const a={title:"Practice: Looping",id:"practice-looping",slug:"practice-looping",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1e_classwork_practice_looping.md"},i=void 0,l={unversionedId:"introduction-to-programming/arrays-and-looping/practice-looping",id:"introduction-to-programming/arrays-and-looping/practice-looping",title:"Practice: Looping",description:"Goal",source:"@site/docs/introduction-to-programming/5_arrays-and-looping/1e-classwork-practice-looping.md",sourceDirName:"introduction-to-programming/5_arrays-and-looping",slug:"/introduction-to-programming/arrays-and-looping/practice-looping",permalink:"/introduction-to-programming/arrays-and-looping/practice-looping",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Practice: Looping",id:"practice-looping",slug:"practice-looping",hide_table_of_contents:!0,sidebar_position:19,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1e_classwork_practice_looping.md"},sidebar:"introduction-to-programming",previous:{title:"forEach Loops",permalink:"/introduction-to-programming/arrays-and-looping/foreach-loops"},next:{title:"Gathering Data with Checkboxes",permalink:"/introduction-to-programming/arrays-and-looping/gathering-data-with-checkboxes"}},p={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Looping Practice in the DevTools Console",id:"looping-practice-in-the-devtools-console",level:3},{value:"Favorite Ice Cream Flavors",id:"favorite-ice-cream-flavors",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:"),"  In the Looping lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to use an ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," loop."),(0,n.kt)("li",{parentName:"ul"},"Naming conventions for arrays and the parameter in a loop.")),(0,n.kt)("p",null,"As we can see, looping is an incredibly important programming concept. Now it's time to practice. We'll begin with two looping exercises in the console and then move on to creating a small project."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If we used ",(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()"),' to loop through an array called "kittens", what should we call the parameter in the ',(0,n.kt)("inlineCode",{parentName:"li"},"Array.prototype.forEach()")," function? Why?"),(0,n.kt)("li",{parentName:"ul"},"What does the ",(0,n.kt)("inlineCode",{parentName:"li"},"+=")," operator do?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Complete both of the exercises listed below."),(0,n.kt)("h3",{id:"looping-practice-in-the-devtools-console"},"Looping Practice in the DevTools Console"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make an array of your friends' names. Loop through it and ",(0,n.kt)("inlineCode",{parentName:"li"},"console.log()")," a greeting to each friend in the array."),(0,n.kt)("li",{parentName:"ul"},'Write a loop to multiply an arbitrary amount of numbers. This should look similar to the code to sum numbers from the "forEach Looping" lesson.')),(0,n.kt)("h3",{id:"favorite-ice-cream-flavors"},"Favorite Ice Cream Flavors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a web page that lists out your favorite ice cream flavors. Rather than writing the flavors in the HTML, use a JavaScript loop to insert the flavors into the page from an array. Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"document.createElement()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.append()")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Element.prepend()")," methods to create and add elements to your webpage.")))}m.isMDXComponent=!0}}]);