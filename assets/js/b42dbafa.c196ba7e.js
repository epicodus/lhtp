"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[36793],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"A Common Data Type Error and Data Type Coercion",id:"a-common-data-type-error-and-data-type-coercion",slug:"a-common-data-type-error-and-data-type-coercion",hide_table_of_contents:!0,sidebar_position:34,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1j_a_common_data_type_error.md"},i=void 0,p={unversionedId:"introduction-to-programming/javascript-and-web-browsers/a-common-data-type-error-and-data-type-coercion",id:"introduction-to-programming/javascript-and-web-browsers/a-common-data-type-error-and-data-type-coercion",title:"A Common Data Type Error and Data Type Coercion",description:"The most common error beginning JavaScript students experience is attempting to call methods or functions meant for numbers on strings. This happens especially frequently because all values returned from window.prompt() are saved as strings. Even if the user enters a number into a prompt without quotation marks! This may be confusing, but this is simply how JavaScript works.",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/1j-a-common-data-type-error.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/a-common-data-type-error-and-data-type-coercion",permalink:"/introduction-to-programming/javascript-and-web-browsers/a-common-data-type-error-and-data-type-coercion",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"A Common Data Type Error and Data Type Coercion",id:"a-common-data-type-error-and-data-type-coercion",slug:"a-common-data-type-error-and-data-type-coercion",hide_table_of_contents:!0,sidebar_position:34,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1j_a_common_data_type_error.md"},sidebar:"introduction-to-programming",previous:{title:"Interactivity with Window Methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/interactivity-with-window-methods"},next:{title:"Practice: Interactivity with Window Methods",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-interactivity-with-window-methods"}},s={},l=[{value:"A Common Data Type Error",id:"a-common-data-type-error",level:2},{value:"Using parseInt() to Avoid Data Type Errors",id:"using-parseint-to-avoid-data-type-errors",level:2},{value:"Use <code>parseFloat()</code> for Decimals",id:"use-parsefloat-for-decimals",level:2},{value:"Data Type Coercion",id:"data-type-coercion",level:2},{value:"Examples of Data Type Coercion",id:"examples-of-data-type-coercion",level:3}],c={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The most common error beginning JavaScript students experience is attempting to call methods or functions meant for numbers on strings. This happens especially frequently because ",(0,r.kt)("strong",{parentName:"p"},"all values returned from ",(0,r.kt)("inlineCode",{parentName:"strong"},"window.prompt()")," are saved as strings"),". Even if the user enters a number into a prompt without quotation marks! This may be confusing, but this is simply how JavaScript works. "),(0,r.kt)("p",null,"If we want to collect a value from a user with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()"),", and perform arithmetic with this value, we will need to convert it into a number with JavaScript's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt"},(0,r.kt)("inlineCode",{parentName:"a"},"parseInt()")," function"),". If not, we will receive some very unexpected output. "),(0,r.kt)("p",null,"In this lesson, we'll review this common data type error, and then we'll learn about the ",(0,r.kt)("strong",{parentName:"p"},"data type coercion")," that JavaScript automatically performs in certain situations. "),(0,r.kt)("h2",{id:"a-common-data-type-error"},"A Common Data Type Error"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here's what can happen if you ",(0,r.kt)("em",{parentName:"p"},"don't")," parse integers (whole numbers) correctly. In the example below, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," to ask the user how old they are. The user enters 35. We then attempt to perform some arithmetic on ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const age = window.prompt("Enter your age: ");\n> age + age;\n"3535"\n')),(0,r.kt)("p",null,"Remember, ",(0,r.kt)("strong",{parentName:"p"},"all values returned from ",(0,r.kt)("inlineCode",{parentName:"strong"},"window.prompt()")," are strings!")," So, even though the user entered a ",(0,r.kt)("em",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," is actually equal to the ",(0,r.kt)("em",{parentName:"p"},"string")," ",(0,r.kt)("inlineCode",{parentName:"p"},'"35"'),".  Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator can be used to concatenate strings  ",(0,r.kt)("inlineCode",{parentName:"p"},"age + age")," actually returns",(0,r.kt)("inlineCode",{parentName:"p"},'"3535"'),", instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"70"),"."),(0,r.kt)("h2",{id:"using-parseint-to-avoid-data-type-errors"},"Using parseInt() to Avoid Data Type Errors"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To convert a string into a number, we parse it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," function like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const number = parseInt("5");\n> number;\n5\n')),(0,r.kt)("p",null,"So, to change our ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," from the example above into an integer, we do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const inputtedAge = window.prompt("Enter your age: ");\n> const age = parseInt(inputtedAge);\n> age + age;\n70\n')),(0,r.kt)("p",null,"Alternatively, we can write our code on on a single line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const age = parseInt(window.prompt("Enter your age: "));\n> age + age;\n70\n')),(0,r.kt)("p",null,"Here we're immediately passing the string returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.prompt()")," method as the argument to the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," function."),(0,r.kt)("h2",{id:"use-parsefloat-for-decimals"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"parseFloat()")," for Decimals"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Int")," part of ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()")," is short for integer, which means \"whole number\". If we wanted to convert a string into a number with a decimal, we'd use JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'> const pi = "3.14";\n> parseFloat(pi);\n3.14\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Floating point")," numbers are simply numbers with decimals. If you're parsing a whole number, use ",(0,r.kt)("inlineCode",{parentName:"p"},"parseInt()"),", if you're parsing a number containing a decimal point, use ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat()"),"."),(0,r.kt)("p",null,"Visit the MDN documentation to learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"parseFloat()"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("span",{class:"glyphicon glyphicon-link"})," ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat"},(0,r.kt)("inlineCode",{parentName:"a"},"parseFloat")))," ")),(0,r.kt)("h2",{id:"data-type-coercion"},"Data Type Coercion"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"So far, we've discussed data type conversion with handy JS functions and methods: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseInt()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number.prototype.toString()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean.prototype.toString()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseFloat()"))),(0,r.kt)("p",null,"When we use these methods we are ",(0,r.kt)("strong",{parentName:"p"},"explicitly")," converting the data type we have. This process is also called ",(0,r.kt)("strong",{parentName:"p"},"typecasting"),". At this point, we should be familiar with when and why we convert from one data type to another."),(0,r.kt)("p",null,"However, JavaScript also performs ",(0,r.kt)("strong",{parentName:"p"},"implicit")," data type conversion. This is usually called ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"},(0,r.kt)("strong",{parentName:"a"},"coercion")),", which is when JavaScript automatically decides on its own to force a piece of data to change into another type. Let's see what this looks like (try this in the DevTools console if you like):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> 54 + 3 + "45";\n"5745"\n')),(0,r.kt)("p",null,"When JavaScript reads this code from left to right, it first performs the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"54")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),", and then it turns the result ",(0,r.kt)("inlineCode",{parentName:"p"},"57")," into a string that it then concatenates with ",(0,r.kt)("inlineCode",{parentName:"p"},'"45"'),", returning the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"5745"'),". Yikes! That's unexpected!"),(0,r.kt)("p",null,'So why doesn\'t JavaScript return an error instead? Well, JavaScript is just not set up that way. Indeed, implicit data type coercion can lead to weird bugs and frustration. This is why some developers prefer "strongly typed" languages (like Typescript, a strongly typed version of JavaScript), where all variables need to be labeled with their data type, and any data type conversion only happens explicitly by the choice of the developer writing the code.'),(0,r.kt)("p",null,"However, JavaScript's data type coercion can also be harnessed to write less code that's (arguably) more readable. We'll see more cases of this as we move through this section's material and get to branching. As a developer, your job is simply to be aware that JavaScript performs implicit data type coercion and of some of the cases in which it can pop up and cause issues. "),(0,r.kt)("h3",{id:"examples-of-data-type-coercion"},"Examples of Data Type Coercion"),(0,r.kt)("p",null,"We see data type coercion come up when we use JavaScript arithmetic, comparison, and equality operators on incompatible data types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"==")," (the loose equality operator, which we don't use)")),(0,r.kt)("p",null,"Let's see how this works with booleans:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> true + true;\n2;\n> true + false;\n1;\n> false - false;\n0;\n> true * false;\n0\n> true * 6;\n6\n> true + " or false: do you like data type coercion?"; \n"true or false: do you like data type coercion?"\n> true * "false";\nNaN\n')),(0,r.kt)("p",null,"With arithmetic operators applied to booleans, ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," is converted to the number ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," is converted to the number ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". In that way, we can use any arithmetic operator between a boolean and a number, and JavaScript will implicitly convert the boolean into the number. "),(0,r.kt)("p",null,"When we use the addition ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator between a boolean and a string, JavaScript implicitly converts the boolean into a string. If we use any other arithmetic operator between a boolean and a string, we'll get ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," returned to us, which is ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description"},"one of the 5 different types of operations that return ",(0,r.kt)("inlineCode",{parentName:"a"},"NaN")),"."),(0,r.kt)("p",null,"Let's see how numbers and strings interact:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'> "I am " + 54 + " years old.";\n"I am 54 years old."\n> 54 + " years old am I.";\n"54 years old am I."\n> 6 + 2 + 1 + 1 + "45";\n"1045"\n> "45" + 54 + 3;\n"45543"\n> "45" - 54 + 3;\n-6\n> "55" * 2;\n110\n> 10 / "2";\n5\n')),(0,r.kt)("p",null,"Because the addition ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator is used for concatenation of strings, no matter how many numbers are added together, once JavaScript hits a string, it implicitly converts the resulting value or subsequent operations into a string. However, the operators ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," are never used with strings, so any string with a number in it is implicitly converted to a number."),(0,r.kt)("p",null,"We also see data type coercion come up when we mix up data types when working with (some) methods and properties. Let's see some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> window.alert(window.innerHeight);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert()")," method takes a string as an argument, but we're passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"window.innerHeight"),", which is a number! What do you think happens when we input the above code? Well, it works! This is a case where we can harness JavaScript's data type coercion to our benefit, because it allows us to write less code. It's debatable whether this code is easier to read than the longer form ",(0,r.kt)("inlineCode",{parentName:"p"},"window.alert(window.innerHeight.toString());"),"."),(0,r.kt)("p",null,"We'll see more examples of when data type coercion can be helpful throughout this section and beyond. Remember, as a developer, your job is simply to be aware that JavaScript performs implicit data type coercion and of some of the cases in which it can pop up and cause issues. Don't feel like you need to remember all of the examples that we've covered in this lesson. If you are ever unsure about what data type you are working with, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof")," operator to check."))}d.isMDXComponent=!0}}]);