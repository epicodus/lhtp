"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Interactivity with Window Methods",id:"interactivity_with_window_methods",slug:"interactivity_with_window_methods",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/1i_interactivity_with_window_methods.md"},i=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers/interactivity_with_window_methods",id:"introduction_to_programming_part_time/javascript-and-web-browsers/interactivity_with_window_methods",title:"Interactivity with Window Methods",description:"So far, none of what we've learned lets us interact with users. Let's try out window methods that let us do just that!",source:"@site/docs/introduction_to_programming_part_time/3_javascript-and-web-browsers/1i_interactivity_with_window_methods.md",sourceDirName:"introduction_to_programming_part_time/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers/interactivity_with_window_methods",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/interactivity_with_window_methods",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Interactivity with Window Methods",id:"interactivity_with_window_methods",slug:"interactivity_with_window_methods",hide_table_of_contents:!0,sidebar_position:34,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/1i_interactivity_with_window_methods.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Debugging in JavaScript: Reading Console Errors",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/debugging_in_javascript_reading_console_errors"},next:{title:"A Common Data Type Error and Data Type Coercion",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers/a_common_data_type_error_and_data_type_coercion"}},l={},p=[{value:"Interactivity with <code>window</code> Methods",id:"interactivity-with-window-methods",level:2},{value:"<code>window.alert()</code>",id:"windowalert",level:3},{value:"<code>window.prompt()</code>",id:"windowprompt",level:3},{value:"<code>window.confirm()</code>",id:"windowconfirm",level:3},{value:"Pay Attention to the Data Type that Methods Return",id:"pay-attention-to-the-data-type-that-methods-return",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far, none of what we've learned lets us interact with users. Let's try out ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," methods that let us do just that!"),(0,r.kt)("h2",{id:"interactivity-with-window-methods"},"Interactivity with ",(0,r.kt)("inlineCode",{parentName:"h2"},"window")," Methods"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll continue to use our DevTools console to practice the following ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," methods."),(0,r.kt)("h3",{id:"windowalert"},(0,r.kt)("inlineCode",{parentName:"h3"},"window.alert()")),(0,r.kt)("p",null,"Try running the following code in the DevTools console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> window.alert("Hello world!");\n')),(0,r.kt)("p",null,'When we press enter, the page pops open a dialog box that says "Hello world!"'),(0,r.kt)("p",null,"We should be able to tell that ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," is a ",(0,r.kt)("strong",{parentName:"p"},"method"),". A method is a function that belongs to an object, and a function is something that performs an action. As we know, methods can take arguments. The ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," method pops up a dialog box with the string that you pass in as an argument."),(0,r.kt)("h3",{id:"windowprompt"},(0,r.kt)("inlineCode",{parentName:"h3"},"window.prompt()")),(0,r.kt)("p",null,"Here's another ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," method that takes a string as an argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> window.prompt("What is the air-speed velocity of an unladen swallow?");  // I\'m going to type "African or European?"\n"African or European?"\n')),(0,r.kt)("p",null,"Remember, in JavaScript everything after the double forward slash ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," is a ",(0,r.kt)("strong",{parentName:"p"},"comment"),". When JavaScript interprets our code, it will ignore these comments. Comments are a convenient way to leave notes in your code for yourself or other programmers. Note, by the way, that the comment comes ",(0,r.kt)("em",{parentName:"p"},"after")," the semicolon."),(0,r.kt)("p",null,"This dialog box lets you type in a response, and then that response is ",(0,r.kt)("strong",{parentName:"p"},"returned")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," method as a string. One cool thing we can do here is set a variable equal to the response, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const favoriteColor = prompt("What is your favorite color?"); // I\'m going to type "green"\n> favoriteColor;\n"green"\n')),(0,r.kt)("p",null,"Here we created a variable named ",(0,r.kt)("inlineCode",{parentName:"p"},"favoriteColor")," and assigned it to hold the string inputted by the user."),(0,r.kt)("p",null,"Just like we can chain methods to each other in JavaScript, we can also chain JavaScript methods to ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> window.prompt("Type something in lowercase:").toUpperCase(); // I\'m going to type "cat"\n"CAT"\n')),(0,r.kt)("p",null,"Remember that browser Web APIs like the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object are created to work with JavaScript, so we can perform any JavaScript on these methods. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," returns a string, we can chain string methods to ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," method calls."),(0,r.kt)("h3",{id:"windowconfirm"},(0,r.kt)("inlineCode",{parentName:"h3"},"window.confirm()")),(0,r.kt)("p",null,"Another ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," method that allows us to interact with the webpage user is the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.confirm()")," method. This too takes a string as an argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> confirm("Are you sure?"); // I\'m going to press the OK button\ntrue\n')),(0,r.kt)("p",null,"Try it out for yourself in the DevTools console. You should note that ",(0,r.kt)("inlineCode",{parentName:"p"},"window.confirm()")," returns one of two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Notice that there are no quotes around these values. That is because these are ",(0,r.kt)("strong",{parentName:"p"},"booleans"),", not strings. They simply represent being true or false. You initially learned about booleans when you worked with comparison and equality operators."),(0,r.kt)("h3",{id:"pay-attention-to-the-data-type-that-methods-return"},"Pay Attention to the Data Type that Methods Return"),(0,r.kt)("p",null,"You might have noticed that ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," returned ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", also without quotes. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> window.alert("Hello world!");\nundefined\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," simply represents that nothing has been returned from the method (or function), or as you learned previously, that a variable hasn't been assigned a value."),(0,r.kt)("p",null,"It is good to be conscious of what arguments a method or function takes, and what data type it returns. Here is a table showing that information for the three ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," methods introduced in this lesson:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week2-js-jquery/window-methods-arguments-returns.png",alt:"window methods arguments and return values table"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," method does not return anything useful, which is fine because we'd only use it to display some information to the user. It's a way to output information, not collect it. "),(0,r.kt)("p",null,"On the other hand, we'd want to collect the user's response to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"window.confirm()")," methods by assigning the returned value to a variable as demonstrated above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> const favoriteColor = window.prompt("What is your favorite color?");\n')),(0,r.kt)("p",null,"That way we can do something with the inputted information rather than just ignoring it."))}m.isMDXComponent=!0}}]);