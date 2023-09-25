"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Further Exploration: Regular Expressions with Text Analyzer",id:"further_exploration_regular_expressions_with_text_analyzer",slug:"further_exploration_regular_expressions_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:41,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3i_regex_with_text_analyzer.md"},i=void 0,s={unversionedId:"introduction_to_programming_classic/arrays-and-looping/further_exploration_regular_expressions_with_text_analyzer",id:"introduction_to_programming_classic/arrays-and-looping/further_exploration_regular_expressions_with_text_analyzer",title:"Further Exploration: Regular Expressions with Text Analyzer",description:"In the last lesson, we covered regular expressions in general. Now let's apply them to the text analyzer application we've built. By doing so, we can see just how powerful regular expressions are.",source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/3i_regex_with_text_analyzer.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_regular_expressions_with_text_analyzer",permalink:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_regular_expressions_with_text_analyzer",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{title:"Further Exploration: Regular Expressions with Text Analyzer",id:"further_exploration_regular_expressions_with_text_analyzer",slug:"further_exploration_regular_expressions_with_text_analyzer",hide_table_of_contents:!0,sidebar_position:41,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3i_regex_with_text_analyzer.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Further Exploration: Introduction to Regular Expressions",permalink:"/introduction_to_programming_classic/arrays-and-looping/further_exploration_introduction_to_regular_expressions"},next:{title:"Array Mapping",permalink:"/introduction_to_programming_classic/arrays-and-looping/array_mapping"}},l={},p=[{value:"Updating Text Analyzer to Use Regular Expressions",id:"updating-text-analyzer-to-use-regular-expressions",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last lesson, we covered regular expressions in general. Now let's apply them to the text analyzer application we've built. By doing so, we can see just how powerful regular expressions are."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Remember, this is lesson is a ",(0,o.kt)("em",{parentName:"strong"},"further exploration")," and you are not required to go through it.")," "),(0,o.kt)("h2",{id:"updating-text-analyzer-to-use-regular-expressions"},"Updating Text Analyzer to Use Regular Expressions"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We are going to be exploring some new syntax in this lesson. This is a preview of the next section when we'll learn about JavaScript objects. We can create a new regular expression object like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const word = "red";\nconst regex = new RegExp(word, "gi");\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," keyword creates a new regular expression object. We are not going to discuss this syntax further until the next section. For now, just be aware that this is the best way to pass a variable into a regular expression."),(0,o.kt)("p",null,"When we create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," object, it takes two arguments. The first is the regular expression itself. This can be a variable but it could also be a string as well. The second argument is any flags we want to pass into the regular expression. ",(0,o.kt)("inlineCode",{parentName:"p"},'"gi"')," means that we want the regular expression to be applied to the entire string ",(0,o.kt)("em",{parentName:"p"},"and")," that we want it to be case-insensitive."),(0,o.kt)("p",null,"This means we can do the following in the DevTools console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const text = "RED red red! Green GREEN green.";\n> const word = "red";\n> const regex = new RegExp(word, "gi");\n> text.match(regex);\n["RED", "red", "red"]\n')),(0,o.kt)("p",null,"Can you see where this is going? We can make some of our Text Analyzer functions much more concise with regular expressions."),(0,o.kt)("p",null,"Let's take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfOccurrencesInText()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Without regex\nfunction numberOfOccurrencesInText(word, text) {\n  if (isEmpty(word)) {\n    return 0;\n  }\n  const textArray = text.split(" ");\n  let wordCount = 0;\n  textArray.forEach(function(element) {\n    if (element.toLowerCase().includes(word.toLowerCase())) {\n      wordCount++;\n    }\n  });\n  return wordCount;\n}\n\n// With regex\nfunction numberOfOccurrencesInText(word, text) {\n  if (isEmpty(word)) {\n    return 0;\n  }\n  const regex = new RegExp(word, "gi");\n  return text.match(regex).length;\n}\n')),(0,o.kt)("p",null,"With a regular expression, our function is half as many lines. There is no need to loop at all. We create a regular expression object and store it in ",(0,o.kt)("inlineCode",{parentName:"p"},"regex"),". Then we simply need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"String.prototype.match()")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"regex")," and return the length of the resulting array. Try it out in the DevTools console!"),(0,o.kt)("p",null,"To sum up, regular expressions can be fun but they can also be hard to figure out and easy to mess up. Regardless, they are a very powerful tool to have in your developer toolbox."))}g.isMDXComponent=!0}}]);