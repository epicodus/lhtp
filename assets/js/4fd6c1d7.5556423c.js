"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,c=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"HTML Elements",id:"html_elements",slug:"html_elements",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/1_2_html_elements.md"},l=void 0,o={unversionedId:"introduction_to_programming_part_time/git-html-and-css/html_elements",id:"introduction_to_programming_part_time/git-html-and-css/html_elements",title:"HTML Elements",description:"Alright, so we learned a bit about HTML and its purpose. How do we write HTML code though? The first thing we need to learn about HTML is elements. HTML elements are the building blocks of HTML. In this lesson we are going to define HTML elements and discuss the anatomy of an element.",source:"@site/docs/introduction_to_programming_part_time/1_git-html-and-css/1_2_html_elements.md",sourceDirName:"introduction_to_programming_part_time/1_git-html-and-css",slug:"/introduction_to_programming_part_time/git-html-and-css/html_elements",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/html_elements",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"HTML Elements",id:"html_elements",slug:"html_elements",hide_table_of_contents:!0,sidebar_position:10,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/1_2_html_elements.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"VS Code Live Server",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/vs_code_live_server"},next:{title:"HTML Indentation and Format Part 1",permalink:"/lhtp/introduction_to_programming_part_time/git-html-and-css/html_indentation_and_format_part_1"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"HTML <strong>elements</strong> you will practice:",id:"html-elements-you-will-practice",level:3},{value:"Important new terminology in this lesson:",id:"important-new-terminology-in-this-lesson",level:3},{value:"Defining an HTML Element",id:"defining-an-html-element",level:2},{value:"Nesting HTML Elements",id:"nesting-html-elements",level:2},{value:"Describing Nested Elements",id:"describing-nested-elements",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Project Setup:",id:"project-setup",level:3},{value:"Goals:",id:"goals",level:3},{value:"Guidelines:",id:"guidelines",level:3},{value:"Optional Challenge",id:"optional-challenge",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alright, so we learned a bit about HTML and its purpose. How do we write HTML code though? The first thing we need to learn about HTML is ",(0,i.kt)("strong",{parentName:"p"},"elements"),". HTML ",(0,i.kt)("strong",{parentName:"p"},"elements")," are the building blocks of HTML. In this lesson we are going to define HTML ",(0,i.kt)("strong",{parentName:"p"},"elements")," and discuss the anatomy of an ",(0,i.kt)("strong",{parentName:"p"},"element"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"There are lots of HTML ",(0,i.kt)("strong",{parentName:"p"},"elements")," available to us when writing HTML code. To get started, we\u2019ll explore a list of common HTML ",(0,i.kt)("strong",{parentName:"p"},"elements"),". By the end of this lesson you should be able to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Describe what ",(0,i.kt)("em",{parentName:"li"},"generally")," defines an HTML element.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"How do you know if a ",(0,i.kt)("strong",{parentName:"li"},"tag")," is a ",(0,i.kt)("strong",{parentName:"li"},"start")," or ",(0,i.kt)("strong",{parentName:"li"},"end tag"),"?"))),(0,i.kt)("li",{parentName:"ol"},"Create an HTML ",(0,i.kt)("strong",{parentName:"li"},"element"),"."),(0,i.kt)("li",{parentName:"ol"},"Correctly ",(0,i.kt)("strong",{parentName:"li"},"nest")," HTML ",(0,i.kt)("strong",{parentName:"li"},"elements"),".")),(0,i.kt)("h3",{id:"html-elements-you-will-practice"},"HTML ",(0,i.kt)("strong",{parentName:"h3"},"elements")," you will practice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"div"),",  \u201cdivision\u201d element, often referred to as a container element "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p"),", \u201cparagraph\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"h1"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"h2")," through ",(0,i.kt)("inlineCode",{parentName:"li"},"h6"),", \u201cheader\u201d elements,  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ul"),", \u201cunordered list\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ol"),", \u201cordered list\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"li"),", \u201clist item\u201d element")),(0,i.kt)("h3",{id:"important-new-terminology-in-this-lesson"},"Important new terminology in this lesson:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"element"),(0,i.kt)("li",{parentName:"ul"},"element content, content of the element"),(0,i.kt)("li",{parentName:"ul"},"tag, tagname"),(0,i.kt)("li",{parentName:"ul"},"start tag, opening tag "),(0,i.kt)("li",{parentName:"ul"},"end tag, closing tag"),(0,i.kt)("li",{parentName:"ul"},"nesting, nested elements"),(0,i.kt)("li",{parentName:"ul"},"parent and child elements"),(0,i.kt)("li",{parentName:"ul"},"wrapping elements")),(0,i.kt)("h2",{id:"defining-an-html-element"},"Defining an HTML Element"),(0,i.kt)("p",null,"What defines an HTML ",(0,i.kt)("strong",{parentName:"p"},"element"),"? ",(0,i.kt)("em",{parentName:"p"},"In general"),", a HTML ",(0,i.kt)("strong",{parentName:"p"},"element")," consists of a ",(0,i.kt)("strong",{parentName:"p"},"start tag"),", ",(0,i.kt)("strong",{parentName:"p"},"element content")," , and an ",(0,i.kt)("strong",{parentName:"p"},"end tag"),". Be prepared that you will encounter some exceptions to this general rule in the future."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Bis02G9.png",alt:"static image table defines html"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"start tag"),", displayed as two angle brackets with the ",(0,i.kt)("strong",{parentName:"p"},"tagname")," in the middle (",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>"),") marks the start of an HTML element."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"end tag"),", displayed as two angle brackets with a slash ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," and tagname in the middle (",(0,i.kt)("inlineCode",{parentName:"p"},"</h1>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"</div>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"</p>"),") marks the end of an HTML element."),(0,i.kt)("p",null,"Anything in between the start and end tags of an HTML element is the ",(0,i.kt)("strong",{parentName:"p"},"content of the element"),". Content is typically text or other HTML elements. Adding HTML elements to the content of other HTML elements is called ",(0,i.kt)("strong",{parentName:"p"},"nesting"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note!",(0,i.kt)("br",{parentName:"p"}),"\n",'Very often the terms element and tag are used interchangeably in casual speech. For example, you will find other sources or hear people say "div tag" when actually referring to the entire div element - not just div opening and closing tag.',(0,i.kt)("br",{parentName:"p"}),"\n","Generally in casual speech that's okay. Nobody is really going to fault you for it and the majority of other HTML writers will understand you.",(0,i.kt)("br",{parentName:"p"}),"\n","In LearnHowToProgram.com we will clearly distinguish between element ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>element content</div>"),"and tag ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"</div>"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'The terms "Opening tag" and "closing tag" are used synonymously to refer to ',(0,i.kt)("strong",{parentName:"p"},"start")," and ",(0,i.kt)("strong",{parentName:"p"},"end tags"),". Technically, the correct term from W3C (the organization that manages HTML) says ",(0,i.kt)("strong",{parentName:"p"},"start")," and ",(0,i.kt)("strong",{parentName:"p"},"end tags"),". However, opening and closing tags are common speech and widely used. Both are right.",(0,i.kt)("br",{parentName:"p"}),"\n","In LearnHowToProgram.com, we'll try to stick with the terminology start and end tags.")),(0,i.kt)("h2",{id:"nesting-html-elements"},"Nesting HTML Elements"),(0,i.kt)("p",null,"HTML elements can be the content of other HTML elements. This is called ",(0,i.kt)("strong",{parentName:"p"},"nesting"),". This example contains nine nested HTML elements (seven nested ",(0,i.kt)("inlineCode",{parentName:"p"},"li")," elements and two nested ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," elements):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<h1>My favorite Cookie Recipe</h1>\n\n<div>\n    <p>This is my favorite cookie recipe.<p>\n    <p>I am going to share this recipe with you!<p>\n</div>\n\n<h2>Ingredients</h2>\n\n<ul>\n    <li>Flour</li>\n    <li>Milk</li>\n    <li>Chocolate Chips</li>\n    <li>Oil</li>\n</ul>\n\n<h2>Cooking Steps:</h2>\n\n<ol>\n    <li>Mix all the ingredients together.</li>\n    <li>Spread on a baking sheet.</li>\n    <li>Bake at 350 degrees for 20 minutes.</li>\n</ol>\n\n")),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("strong",{parentName:"p"},"start tag")," of ",(0,i.kt)("strong",{parentName:"p"},"nested elements")," starts further to the right. This is called ",(0,i.kt)("strong",{parentName:"p"},"indentation")," which we will talk more about in depth very soon. For now, just know that indentation is ",(0,i.kt)("em",{parentName:"p"},"often (but not always)")," used to denote nested elements which makes HTML code easier to read."),(0,i.kt)("h3",{id:"describing-nested-elements"},"Describing Nested Elements"),(0,i.kt)("p",null,"Nested elements are typically described by their relationship to other elements using the terms ",(0,i.kt)("strong",{parentName:"p"},"parent element")," and ",(0,i.kt)("strong",{parentName:"p"},"child element")," (or just ",(0,i.kt)("strong",{parentName:"p"},"parent")," and ",(0,i.kt)("strong",{parentName:"p"},"child")," for short). "),(0,i.kt)("p",null,"For example, in the HTML example above, the two ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," elements are ",(0,i.kt)("strong",{parentName:"p"},"child elements")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element. The ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element that ",(0,i.kt)("strong",{parentName:"p"},"wraps around")," the two ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," elements is a ",(0,i.kt)("strong",{parentName:"p"},"parent")," element."),(0,i.kt)("p",null,"An element that ",(0,i.kt)("strong",{parentName:"p"},"wraps around")," another element is another way of saying that an element has another element in between its opening and closing tags. This is also simply called ",(0,i.kt)("strong",{parentName:"p"},"wrapping"),"."),(0,i.kt)("p",null,"There is no limit to nesting elements. A single element can be both a ",(0,i.kt)("strong",{parentName:"p"},"parent")," and ",(0,i.kt)("strong",{parentName:"p"},"child")," to many other elements at the same time."),(0,i.kt)("h2",{id:"exercise"},"Exercise"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Let's Pair Program!",(0,i.kt)("br",{parentName:"p"}),"\n","Before you begin this exercise, does anyone in the pair group have any questions? Discuss among yourselves what you have learned so far. Be sure to check-in with other pair groups if there are any lingering questions or points of confusion."),(0,i.kt)("p",{parentName:"blockquote"},"As before, one person in the pair group will be the driver. The driver is the only person who should be typing code. The first person to be the driver will start Live Share and Live Server in VS Code."),(0,i.kt)("p",{parentName:"blockquote"},'As a navigator, observe the driver and help them by referencing the lessons. Since writing HTML elements can take several steps, be sure to give the driver a moment before calling out any possible mistakes. As questions such as: "I don\'t understand what you just did there. Can you explain it to me?" Perhaps you do understand what the driver is doing; the question "Can you explain this to me?" is still a great question to ask because it gives the driver an opportunity to explain their thoughts.')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before you begin, read over the directions below. Decide what the theme of the project will be and when you will trade off between driver and navigator. "),(0,i.kt)("p",{parentName:"blockquote"},"By the end of this exercise everyone in the pair group should have had an opportunity to create HTML elements and nest elements.")),(0,i.kt)("h3",{id:"project-setup"},"Project Setup:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new directory with any name you like. Inside that directory create a new ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," file. Revisit the lesson ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line"},"The Terminal and the Command Line")," if you are not sure how to complete this step."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The theme of this practice project is up to you. If you can\u2019t decide then take the cookie recipe from above and improve on it."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," file using VS Live Server. Revisit lesson ",(0,i.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/vs-code-live-server"},"VS Code Live Server")," if needed."))),(0,i.kt)("h3",{id:"goals"},"Goals:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create HTML elements. Use all the elements listed so far in this lesson:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"div"),",  \u201cdivision\u201d element, often referred to as a container element "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p"),", \u201cparagraph\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"h1"),", and any of ",(0,i.kt)("inlineCode",{parentName:"li"},"h2")," through ",(0,i.kt)("inlineCode",{parentName:"li"},"h6"),", \u201cheader\u201d elements,  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ul"),", \u201cunordered list\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ol"),", \u201cordered list\u201d element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"li"),", \u201clist item\u201d element"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Properly nest elements. Right now it is important to understand how an element ",(0,i.kt)("strong",{parentName:"p"},"wraps around")," another element using its ",(0,i.kt)("strong",{parentName:"p"},"opening")," and ",(0,i.kt)("strong",{parentName:"p"},"closing tags"),"."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note!",(0,i.kt)("br",{parentName:"p"}),"\n","Save any questions that come up about indentation and formatting HTML as you practice. We will talk about it more in depth soon.",(0,i.kt)("br",{parentName:"p"}),"\n","You can indent your code in VS Code like in the example above using the keyboard ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab")," to indent to the right and ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift + Tab")," to indent to the left. You can also highlight code to indent several lines at once.",(0,i.kt)("br",{parentName:"p"}),"\n","Indentation and formatting HTML code is just so people can more easily read the code. So as long as HTML elements have correct start and end tags and elements are correctly nested then any indentation and >formatting won't break your HTML code when it is loaded in the browser.")),(0,i.kt)("h3",{id:"guidelines"},"Guidelines:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As part of accessible web design when using a ",(0,i.kt)("inlineCode",{parentName:"p"},"h1")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"h6")," header elements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Web pages should have only one ",(0,i.kt)("inlineCode",{parentName:"li"},"h1")," element. This means only one ",(0,i.kt)("inlineCode",{parentName:"li"},"h1")," element per ",(0,i.kt)("inlineCode",{parentName:"li"},".html")," file."),(0,i.kt)("li",{parentName:"ul"},"Heading elements should be used ",(0,i.kt)("em",{parentName:"li"},"in descending order"),". Do not skip heading levels. This means start with ",(0,i.kt)("inlineCode",{parentName:"li"},"h1"),", then use ",(0,i.kt)("inlineCode",{parentName:"li"},"h2"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"h3"),", and so on.",(0,i.kt)("br",{parentName:"li"}),"Example:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"<h1>Title</h1>\n\n<h2>Section 1</h2>\n\n<h3>sub section 1</h3>\n\n<h3>sub section 1</h3>\n\n<h2>Section 2</h2>\n\n<h3>sub section 2</h3>\n\n<h2>Section 3</h2>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Some HTML elements are only expected to be used nested inside other elements. The \u201clist item\u201d ",(0,i.kt)("inlineCode",{parentName:"p"},"li")," element is one such example. In this exercise, only use ",(0,i.kt)("inlineCode",{parentName:"p"},"li")," elements nested in ",(0,i.kt)("inlineCode",{parentName:"p"},"ol")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ul")," elements."))),(0,i.kt)("h3",{id:"optional-challenge"},"Optional Challenge"),(0,i.kt)("p",null,"Add an image to your web page! Visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"},"this resource from MDN web docs")," on using an ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," element. "),(0,i.kt)("p",null,"We include this optional challenge now because often people are really eager to add images to their web pages. However, there is more we need to learn about HTML elements before we can do that."),(0,i.kt)("p",null,"At the same time, a lot about being a developer is teaching yourself by researching and trying things out. Can you infer how to add an image based on what we have learned so far and using the MDN resource?"),(0,i.kt)("p",null,"Don\u2019t worry if you want to skip this challenge or it's not working. We\u2019ll talk more about ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," elements later."))}h.isMDXComponent=!0}}]);