"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"42. Further Exploration: Regular Expressions with Text Analyzer",id:"further_exploration_regular_expressions_with_text_analyzer",slug:"further_exploration_regular_expressions_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:42,day:"wednesday",type:"lesson"},s=void 0,i={unversionedId:"new_arrays_and_looping/further_exploration_regular_expressions_with_text_analyzer",id:"new_arrays_and_looping/further_exploration_regular_expressions_with_text_analyzer",title:"42. Further Exploration: Regular Expressions with Text Analyzer",description:"In the last lesson, we covered regular expressions in general. Now let's apply them to the text analyzer application we've built. By doing so, we can see just how powerful regular expressions are.",source:"@site/docs/3_new_arrays_and_looping/3i_regex_with_text_analyzer.md",sourceDirName:"3_new_arrays_and_looping",slug:"/new_arrays_and_looping/further_exploration_regular_expressions_with_text_analyzer",permalink:"/lhtp/new_arrays_and_looping/further_exploration_regular_expressions_with_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{title:"42. Further Exploration: Regular Expressions with Text Analyzer",id:"further_exploration_regular_expressions_with_text_analyzer",slug:"further_exploration_regular_expressions_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:42,day:"wednesday",type:"lesson"},sidebar:"docs",previous:{title:"41. Further Exploration: Introduction to Regular Expressions",permalink:"/lhtp/new_arrays_and_looping/further_exploration_introduction_to_regular_expressions"},next:{title:"43. Array Mapping",permalink:"/lhtp/new_arrays_and_looping/array_mapping"}},l={},p=[{value:"Updating Text Analyzer to Use Regular Expressions",id:"updating-text-analyzer-to-use-regular-expressions",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we covered regular expressions in general. Now let's apply them to the text analyzer application we've built. By doing so, we can see just how powerful regular expressions are."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remember, this is lesson is a ",(0,a.kt)("em",{parentName:"strong"},"further exploration")," and you are not required to go through it.")," "),(0,a.kt)("h2",{id:"updating-text-analyzer-to-use-regular-expressions"},"Updating Text Analyzer to Use Regular Expressions"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We are going to be exploring some new syntax in this lesson. This is a preview of the next section when we'll learn about JavaScript objects. We can create a new regular expression object like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const word = "red";\nconst regex = new RegExp(word, "gi");\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," keyword creates a new regular expression object. We are not going to discuss this syntax further until the next section. For now, just be aware that this is the best way to pass a variable into a regular expression."),(0,a.kt)("p",null,"When we create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp")," object, it takes two arguments. The first is the regular expression itself. This can be a variable but it could also be a string as well. The second argument is any flags we want to pass into the regular expression. ",(0,a.kt)("inlineCode",{parentName:"p"},'"gi"')," means that we want the regular expression to be applied to the entire string ",(0,a.kt)("em",{parentName:"p"},"and")," that we want it to be case-insensitive."),(0,a.kt)("p",null,"This means we can do the following in the DevTools console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'> const text = "RED red red! Green GREEN green.";\n> const word = "red";\n> const regex = new RegExp(word, "gi");\n> text.match(regex);\n["RED", "red", "red"]\n')),(0,a.kt)("p",null,"Can you see where this is going? We can make some of our Text Analyzer functions much more concise with regular expressions."),(0,a.kt)("p",null,"Let's take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Without regex\nfunction numberOfOccurrencesInText(word, text) {\n  if (isEmpty(word)) {\n    return 0;\n  }\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n\n// With regex\nfunction numberOfOccurrencesInText(word, text) {\n  if (isEmpty(word)) {\n    return 0;\n  }\n  const regex = new RegExp(word, "gi");\n  return text.match(regex).length;\n}\n')),(0,a.kt)("p",null,"With a regular expression, our function is half as many lines. There is no need to loop at all. We create a regular expression object and store it in ",(0,a.kt)("inlineCode",{parentName:"p"},"regex"),". Then we simply need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"String.prototype.match()")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"regex")," and return the length of the resulting array. Try it out in the DevTools console!"),(0,a.kt)("p",null,"To sum up, regular expressions can be fun but they can also be hard to figure out and easy to mess up. Regardless, they are a very powerful tool to have in your developer toolbox."))}g.isMDXComponent=!0}}]);