"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[87966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"Debugging in JavaScript: Using a linter",id:"debugging_in_javascript_using_a_linter",slug:"debugging_in_javascript_using_a_linter",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/0k_debugging_with_a_linter.md"},a=void 0,l={unversionedId:"introduction_to_programming/arrays-and-looping/debugging_in_javascript_using_a_linter",id:"introduction_to_programming/arrays-and-looping/debugging_in_javascript_using_a_linter",title:"Debugging in JavaScript: Using a linter",description:"Sometimes you won't be able to find a syntax error no matter how hard you look. Or your code may work correctly but still have an error. For instance, maybe you forgot to scope a variable with let or const or maybe you forgot a semicolon.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/0k_debugging_with_a_linter.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/debugging_in_javascript_using_a_linter",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/debugging_in_javascript_using_a_linter",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Debugging in JavaScript: Using a linter",id:"debugging_in_javascript_using_a_linter",slug:"debugging_in_javascript_using_a_linter",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_arrays-and-looping/0k_debugging_with_a_linter.md"},sidebar:"introduction_to_programming",previous:{title:"Adding and Removing HTML Elements",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/adding_and_removing_html_elements"},next:{title:"Mentorship Lunch Talk",permalink:"/lhtp/introduction_to_programming/arrays-and-looping/mentorship_lunch_talk"}},s={},u=[{value:"Debugging with a Linter",id:"debugging-with-a-linter",level:2},{value:"Configuration",id:"configuration",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you won't be able to find a syntax error no matter how hard you look. Or your code may work correctly but still have an error. For instance, maybe you forgot to scope a variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," or maybe you forgot a semicolon."),(0,o.kt)("p",null,"Most developers use a ",(0,o.kt)("strong",{parentName:"p"},"linter")," to check their code for errors. Linters are very helpful both for fixing errors as they arise and for writing clean code."),(0,o.kt)("p",null,"There are advantages and disadvantages to beginning coders using linters. It's important to develop a good eye for code, including finding errors. If you rely on a linter too much early on, you may not develop this skill as fully. On the other hand, many errors are genuinely hard for beginners to find and a linter can save us a lot of frustration by showing us exactly where the error is. Finally, a linter is a bit like an automated mentor \u2014 as you write code, the linter will let us know if something doesn't look right, just like a real-life mentor teaching us how to code."),(0,o.kt)("h2",{id:"debugging-with-a-linter"},"Debugging with a Linter"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There are several approaches to linting. One is to add an extension via VS Code. Another is to bundle a development environment to include a linter that automatically lints our code. We will be doing the latter in Intermediate JavaScript. The tool we'll use is called ESLint. Both of the above approaches involve some configuration that might feel a bit overwhelming this early in the program. Also, we'd rather you try finding problems in your code ",(0,o.kt)("em",{parentName:"p"},"before")," using a linter \u2014 and the above approaches will lint as you go."),(0,o.kt)("p",null,"Fortunately, there is also a browser-based demo of ESLint here: ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/play/#eyJ0ZXh0IjoidmFyIGZvbyA9IGJhcjsiLCJvcHRpb25zIjp7InBhcnNlck9wdGlvbnMiOnsiZWNtYVZlcnNpb24iOjYsInNvdXJjZVR5cGUiOiJzY3JpcHQiLCJlY21hRmVhdHVyZXMiOnt9fSwicnVsZXMiOnsiY29uc3RydWN0b3Itc3VwZXIiOjIsImZvci1kaXJlY3Rpb24iOjIsImdldHRlci1yZXR1cm4iOjIsIm5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3IiOjIsIm5vLWNhc2UtZGVjbGFyYXRpb25zIjoyLCJuby1jbGFzcy1hc3NpZ24iOjIsIm5vLWNvbXBhcmUtbmVnLXplcm8iOjIsIm5vLWNvbmQtYXNzaWduIjoyLCJuby1jb25zdC1hc3NpZ24iOjIsIm5vLWNvbnN0YW50LWNvbmRpdGlvbiI6Miwibm8tY29udHJvbC1yZWdleCI6Miwibm8tZGVidWdnZXIiOjIsIm5vLWRlbGV0ZS12YXIiOjIsIm5vLWR1cGUtYXJncyI6Miwibm8tZHVwZS1jbGFzcy1tZW1iZXJzIjoyLCJuby1kdXBlLWVsc2UtaWYiOjIsIm5vLWR1cGUta2V5cyI6Miwibm8tZHVwbGljYXRlLWNhc2UiOjIsIm5vLWVtcHR5IjoyLCJuby1lbXB0eS1jaGFyYWN0ZXItY2xhc3MiOjIsIm5vLWVtcHR5LXBhdHRlcm4iOjIsIm5vLWV4LWFzc2lnbiI6Miwibm8tZXh0cmEtYm9vbGVhbi1jYXN0IjoyLCJuby1leHRyYS1zZW1pIjoyLCJuby1mYWxsdGhyb3VnaCI6Miwibm8tZnVuYy1hc3NpZ24iOjIsIm5vLWdsb2JhbC1hc3NpZ24iOjIsIm5vLWltcG9ydC1hc3NpZ24iOjIsIm5vLWlubmVyLWRlY2xhcmF0aW9ucyI6Miwibm8taW52YWxpZC1yZWdleHAiOjIsIm5vLWlycmVndWxhci13aGl0ZXNwYWNlIjoyLCJuby1taXNsZWFkaW5nLWNoYXJhY3Rlci1jbGFzcyI6Miwibm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzIjoyLCJuby1uZXctc3ltYm9sIjoyLCJuby1vYmotY2FsbHMiOjIsIm5vLW9jdGFsIjoyLCJuby1wcm90b3R5cGUtYnVpbHRpbnMiOjIsIm5vLXJlZGVjbGFyZSI6Miwibm8tcmVnZXgtc3BhY2VzIjoyLCJuby1zZWxmLWFzc2lnbiI6Miwibm8tc2V0dGVyLXJldHVybiI6Miwibm8tc2hhZG93LXJlc3RyaWN0ZWQtbmFtZXMiOjIsIm5vLXNwYXJzZS1hcnJheXMiOjIsIm5vLXRoaXMtYmVmb3JlLXN1cGVyIjoyLCJuby11bmRlZiI6Miwibm8tdW5leHBlY3RlZC1tdWx0aWxpbmUiOjIsIm5vLXVucmVhY2hhYmxlIjoyLCJuby11bnNhZmUtZmluYWxseSI6Miwibm8tdW5zYWZlLW5lZ2F0aW9uIjoyLCJuby11bnVzZWQtbGFiZWxzIjoyLCJuby11bnVzZWQtdmFycyI6Miwibm8tdXNlbGVzcy1jYXRjaCI6Miwibm8tdXNlbGVzcy1lc2NhcGUiOjIsIm5vLXdpdGgiOjIsInJlcXVpcmUteWllbGQiOjIsInVzZS1pc25hbiI6MiwidmFsaWQtdHlwZW9mIjoyLCJzZW1pIjoyLCJuby12YXIiOjJ9LCJlbnYiOnsianF1ZXJ5Ijp0cnVlLCJicm93c2VyIjp0cnVlfX19"},"ESLint Demo"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure you use this exact link so you are using the configuration we've set.")," We'll discuss the configuration further later in this lesson."),(0,o.kt)("p",null,"If we take a look, we'll see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/debugging-js/eslint-demo.png",alt:"ESLint window with a code snippet on the left and errors on the right."})),(0,o.kt)("p",null,"The window on the left is where we can insert any code we want to lint. The code that's already there (",(0,o.kt)("inlineCode",{parentName:"p"},"var foo = bar;"),") is the default code that ESLint provides. We can replace it by pasting or typing any code we want into the window."),(0,o.kt)("p",null,"The window on the right shows any errors in the code. As we can see, there are several even with the default code provided!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, the example uses ",(0,o.kt)("inlineCode",{parentName:"li"},"var"),". We don't want that! ESLint tells us to use ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," instead. Note the ",(0,o.kt)("inlineCode",{parentName:"li"},"1:1")," at the beginning of the error. That's the exact line and character where the error begins. In this case, it's the first character of line one. That's a really nice thing about ESLint \u2014 it can pinpoint an error when our eyes are too tired to see it."),(0,o.kt)("li",{parentName:"ul"},"Second, we see an ",(0,o.kt)("inlineCode",{parentName:"li"},"assigned a value but never used"),". This just means a variable has been declared but our code doesn't use it. If this were a full code snippet, this would be a bad thing; it would mean the variable is unnecessary and should be removed. However, if you paste in a smaller snippet of code that doesn't include all the variables that you're using, you can ignore the error."),(0,o.kt)("li",{parentName:"ul"},"Third, we get an ",(0,o.kt)("inlineCode",{parentName:"li"},"is not defined")," error. That's because ",(0,o.kt)("inlineCode",{parentName:"li"},"bar")," is never defined. This can be an actual problem in the code (such as if we mistyped the variable name), but once again, if you're pasting in a snippet of code, it's possible you didn't include the snippet where the variable was originally defined.")),(0,o.kt)("p",null,"You can try experimenting with the tool yourself. For instance, if you delete the semicolon at the end, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Missing semicolon")," error will pop up."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can click on the ",(0,o.kt)("em",{parentName:"p"},"Rules Configuration")," tab to see all the potential rules and configurations you can have with ESLint. We recommend not looking too closely at it, though, because there's an overwhelming amount of stuff. Instead, we'll quickly go over the configuration we've set up. ",(0,o.kt)("strong",{parentName:"p"},"Remember, the configuration is set up based on the link we provide above.")," If you go to the page without the customized link, you won't have our custom configuration. "),(0,o.kt)("p",null,"We've added the following custom configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ES2015 (a specific subset of JavaScript that came out in 2015). Technically, we are using ES5 for most of our code in the first four sections of the program (ES5 came out before ES2015). However, ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," came out with ES2015."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"const"),", not ",(0,o.kt)("inlineCode",{parentName:"li"},"var"),"."),(0,o.kt)("li",{parentName:"ul"},"Require semicolons."),(0,o.kt)("li",{parentName:"ul"},"Recognize the browser environment.")),(0,o.kt)("p",null,"While you are welcome to update the configuration if you wish, we don't recommend it. And once again, actually configuring a linter can add an additional layer of confusion for beginners. A linter is a tool to help you fix errors in your code. If you find that you are trying to debug the linter itself, or trying to understand how the linter is working, you are focusing on the wrong thing! Your focus right now should be on learning JavaScript and web browser tools. You are not required to use a linter but it can be a helpful tool. At this point, we recommend trying to write, debug, and fix code without help from this linter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should ideally only check your code with this linter for two reasons:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You're stumped by an error that you can't solve on your own."),(0,o.kt)("li",{parentName:"ul"},"Your code is working fine but you want to make sure it's actually error-free code (for instance, you might not be sure about the placement of semicolons).")),(0,o.kt)("p",null,"If your code is error-free, there will be a ",(0,o.kt)("em",{parentName:"p"},"Lint-free!")," message in the right-hand pane. That doesn't necessarily mean your code works as expected or that it's well-written code. However, it does mean that your code is free of syntax errors and any bad practices that we've configured ESLint to be on the lookout for (such as missing semicolons)."))}p.isMDXComponent=!0}}]);