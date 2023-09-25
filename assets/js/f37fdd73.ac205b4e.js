"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[85582],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(o),m=a,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return o?n.createElement(d,i(i({ref:t},c),{},{components:o})):n.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},56030:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"5. Practical Tips for Researching Web APIs",id:"practical_tips_for_researching_web_apis",slug:"practical_tips_for_researching_web_apis",hide_table_of_contents:!0,sidebar_position:58,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/3d_practical_tips_for_researching.md"},i=void 0,l={unversionedId:"introduction_to_programming_classic/javascript-and-web-browsers/practical_tips_for_researching_web_apis",id:"introduction_to_programming_classic/javascript-and-web-browsers/practical_tips_for_researching_web_apis",title:"5. Practical Tips for Researching Web APIs",description:"The lessons in LearnHowToProgram.com don't cover every tools that's out there. First of all, that would be an overwhelming amount of information. But it would also just be impossible because there's too much out there! Fundamentally, LearnHowToProgram.com is not meant to be a complete reference \u2014 that's the job of sites like MDN and W3Schools. What we do provide are guides on computer programming concepts, tools, and best practices, as well as a few (incomplete) references of certain tools. That means it's always up to you to do research online to expand your toolset and figure out how to code the extended functionality that you dream up for your projects.",source:"@site/docs/introduction_to_programming_classic/2_javascript-and-web-browsers/3d_practical_tips_for_researching.md",sourceDirName:"introduction_to_programming_classic/2_javascript-and-web-browsers",slug:"/introduction_to_programming_classic/javascript-and-web-browsers/practical_tips_for_researching_web_apis",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practical_tips_for_researching_web_apis",draft:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{title:"5. Practical Tips for Researching Web APIs",id:"practical_tips_for_researching_web_apis",slug:"practical_tips_for_researching_web_apis",hide_table_of_contents:!0,sidebar_position:58,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_javascript-and-web-browsers/3d_practical_tips_for_researching.md"},sidebar:"introduction_to_programming_classic",previous:{title:"4. Practice: Forms",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/practice_forms"},next:{title:"6. Branching",permalink:"/lhtp/introduction_to_programming_classic/javascript-and-web-browsers/branching"}},s={},p=[{value:"Possible Points of Confusion",id:"possible-points-of-confusion",level:2},{value:"Tool #1: Researching Based on your Goal",id:"tool-1-researching-based-on-your-goal",level:2},{value:"Tips for Great Search Queries",id:"tips-for-great-search-queries",level:3},{value:"Tool #2: Using the DevTools Console to Explore Objects",id:"tool-2-using-the-devtools-console-to-explore-objects",level:2},{value:"Tool #3: Using Reference Pages Effectively",id:"tool-3-using-reference-pages-effectively",level:2},{value:"Adding Styles to DOM Elements",id:"adding-styles-to-dom-elements",level:3},{value:"Adding Attributes to DOM Elements",id:"adding-attributes-to-dom-elements",level:3},{value:"Exploring Events to Handle",id:"exploring-events-to-handle",level:3},{value:"Exploring HTML Element Object Types",id:"exploring-html-element-object-types",level:3},{value:"Features of MDN Documentation for Web APIs",id:"features-of-mdn-documentation-for-web-apis",level:3},{value:"HTMLElement Reference",id:"htmlelement-reference",level:4},{value:"HTMLElement.innerText Reference",id:"htmlelementinnertext-reference",level:4}],c={toc:p},h="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The lessons in LearnHowToProgram.com don't cover every tools that's out there. First of all, that would be an overwhelming amount of information. But it would also just be impossible because there's too much out there! Fundamentally, LearnHowToProgram.com is not meant to be a complete reference \u2014 that's the job of sites like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/"},"MDN")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/"},"W3Schools"),". What we do provide are guides on computer programming concepts, tools, and best practices, as well as a few (incomplete) references of certain tools. That means it's always up to you to do research online to expand your toolset and figure out how to code the extended functionality that you dream up for your projects."),(0,a.kt)("p",null,"So, let's continue to build our research and reference skills! In this lesson, we'll build on what we learned in previous lessons on understanding Web APIs and navigating Mozilla Developer Network (MDN) documentation. This time our focus will be on practical tools and tips for general research and referencing MDN docs. Specifically, we'll cover these topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Possible points of confusion about Web APIs."),(0,a.kt)("li",{parentName:"ul"},"Researching based on your goal, referencing the target element or event that you want to learn more about. "),(0,a.kt)("li",{parentName:"ul"},"Tips for search engine queries."),(0,a.kt)("li",{parentName:"ul"},"How to use the DevTools console to explore object properties."),(0,a.kt)("li",{parentName:"ul"},"Links to helpful reference pages."),(0,a.kt)("li",{parentName:"ul"},"Certain features on MDN documentation to be aware of.")),(0,a.kt)("p",null,"Please revisit this lesson as necessary."),(0,a.kt)("h2",{id:"possible-points-of-confusion"},"Possible Points of Confusion"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When researching for information online about Web APIs, we need to remember a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Web API interfaces (the object types) share functionality with each other through inheritance. Inheritance is the mechanism by which one object type, like ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLInputElement"),", has access to properties that are defined in another object type, like ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement"),". That means that the documentation for a property may be associated with a different object type that you may initially expect.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to review the discussion on inheritance, ",(0,a.kt)("a",{parentName:"li",href:"https://www.learnhowtoprogram.com/introduction-to-programming/javascript-and-web-browsers/understanding-web-apis-interfaces-object-types-and-inheritance"},"visit this lesson"),"."))),(0,a.kt)("li",{parentName:"ul"},"Events are always tied to specific object types (Web API interfaces), like ",(0,a.kt)("inlineCode",{parentName:"li"},"Window"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Document"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"Element"),". This means that an event is categorized as belonging to the browser window, like when a user prints a page, or as belonging to the DOM, like when a user copies text on a webpage."),(0,a.kt)("li",{parentName:"ul"},"Sometimes multiple Web APIs can respond to the same event type:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'For the "keyup" keyboard event, there\'s an ',(0,a.kt)("inlineCode",{parentName:"li"},"onkeyup")," event handler property for ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events"},(0,a.kt)("inlineCode",{parentName:"a"},"Element"))," and ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document#keyboard_events"},(0,a.kt)("inlineCode",{parentName:"a"},"Document")),". "),(0,a.kt)("li",{parentName:"ul"},'For the "copy" clipboard event, there\'s an ',(0,a.kt)("inlineCode",{parentName:"li"},"oncopy")," event handler property for ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element#clipboard_events"},(0,a.kt)("inlineCode",{parentName:"a"},"Element")),", ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window#clipboard_events"},(0,a.kt)("inlineCode",{parentName:"a"},"Window")),", and ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document#clipboard_events"},(0,a.kt)("inlineCode",{parentName:"a"},"Document")),".")))),(0,a.kt)("p",null,"While the above points about Web APIs are not inherently confusing, they can make finding the right documentation confusing because the DOM element we may want to manipulate or set up  event handling for could have tools that are described in various places in the documentation. "),(0,a.kt)("p",null,"We won't be able to completely avoid confusion, but we can mitigate it by using practical research tips, so continue reading! "),(0,a.kt)("p",null,"Also, always remember to share and discuss your confusions with your peers and your teacher. If you have a question, it's very likely that a fellow student has the same one.  "),(0,a.kt)("h2",{id:"tool-1-researching-based-on-your-goal"},"Tool #1: Researching Based on your Goal"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Probably the quickest way to find information on something new that you would like to do is by developing a search engine query that focuses on what you want to do. For example, if we wanted to manipulate an HTML link with our JavaScript, we might go through this series of researching steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If we've forgotten what tag we need to make an HTML link, research \"how to make a link in HTML\", and we'll learn that we need to use an ",(0,a.kt)("inlineCode",{parentName:"li"},"<a>")," tag."),(0,a.kt)("li",{parentName:"ul"},'If we already know we\'re working with an anchor element, but we\'ve forgotten the name of the attribute for setting the destination of the hyperlink, we would research "HTML a tag attributes" or "HTML anchor attributes" to learn that we want to access the ',(0,a.kt)("inlineCode",{parentName:"li"},"href")," attribute."),(0,a.kt)("li",{parentName:"ul"},"To learn how to set the ",(0,a.kt)("inlineCode",{parentName:"li"},"href"),' attribute of a DOM element, we would research something like "DOM anchor href attribute" or "set DOM a tag href property". This will help us find a reference page on the HTML DOM anchor element or the href property belonging to the anchor element.')),(0,a.kt)("p",null,"The same process should be true for applying an inline CSS style, or targeting an event on a specific HTML element. For example, we might use the following search queries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"how to hide DOM element"'),(0,a.kt)("li",{parentName:"ul"},'"change background color of element with JS"'),(0,a.kt)("li",{parentName:"ul"},'"event handler for change in html input"'),(0,a.kt)("li",{parentName:"ul"},'"event handler for copy on html element"'),(0,a.kt)("li",{parentName:"ul"},'"onevent for scroll"'),(0,a.kt)("li",{parentName:"ul"},'"onevent for resizing window"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," when researching events and event handling, you will likely see solutions that use ",(0,a.kt)("strong",{parentName:"p"},"event listeners")," with methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener()"),". Don't worry about those for now \u2014 we'll be covering event listening later in this course section."),(0,a.kt)("h3",{id:"tips-for-great-search-queries"},"Tips for Great Search Queries"),(0,a.kt)("p",null,'If you aren\'t getting the information you need from your search, try reformulating your query to use more specific terminology. For example, we could differentiate between an "HTML element" that might go in our ',(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),' file, and a "DOM element" that we would access with our JS.'),(0,a.kt)("p",null,"If you want to use a search engine like Google to search a specific webpage, you can always add ",(0,a.kt)("inlineCode",{parentName:"p"},"site:www.website.com")," to your query, where ",(0,a.kt)("inlineCode",{parentName:"p"},"www.website.com"),' is the name of the website you want to search. Alternatively, you could also just add the name of the site to your search query. For example, if you specifically want a resource from MDN, simply add "MDN" to your search query.'),(0,a.kt)("p",null,'If you want to make sure that the search results include the exact text (word or phrase) of your search query, add quotes around it. For example if we use the following search query, any returned results must contain the word "DOM":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'change background color of "DOM" element with JS\n')),(0,a.kt)("p",null,"The more you practice writing search queries, the better you will become at formulating them!"),(0,a.kt)("h2",{id:"tool-2-using-the-devtools-console-to-explore-objects"},"Tool #2: Using the DevTools Console to Explore Objects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you have autocompletion turned on in your DevTools, this will give you a wealth of information in your DevTools console."),(0,a.kt)("p",null,"To check on or change your DevTools settings for autocompletion, follow these instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Click the "Settings" cog icon in the upper-right hand corner of the DevTools window.'),(0,a.kt)("li",{parentName:"ul"},'This should open the "Preferences" page, but if not, select the "Preferences" menu option.'),(0,a.kt)("li",{parentName:"ul"},'Scroll down to the "Sources" section of the page, and find the checkbox titled "Autocompletion" and uncheck/check the box to set your preference.')),(0,a.kt)("p",null,"Check out the image below that demonstrates the power of the autocompletion feature."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/autocompletion-document-dot.png",alt:"This image shows the result of entering `let h1 = document.` into the DevTools console: a pop-up box with autocompletion suggestions."})),(0,a.kt)("p",null,"In the image above, we've typed in ",(0,a.kt)("inlineCode",{parentName:"p"},"let h1 = document.")," and a box appears with autocompletion suggestions. Here, suggestions are listed alphabetically, and we can scroll through and look at all of the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," properties. Take note \u2014 there's a limit to the number of properties that the autocompletion box can list, so oftentimes the list in the box won't be complete."),(0,a.kt)("p",null,"We can type in a letter to narrow down the list of autocompleted suggestions. In the image below, we've typed in ",(0,a.kt)("inlineCode",{parentName:"p"},"let h1 = document.q"),", and we can see that there's grayed out letters offering a suggestion of ",(0,a.kt)("inlineCode",{parentName:"p"},"let h1 = document.queryCommandEnabled"),", and the box of autocompletion suggestions have narrowed down to only ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," properties that start with ",(0,a.kt)("inlineCode",{parentName:"p"},"q"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/autocompletion-document-dot-q.png",alt:"This image shows the autocompletion suggestions from entering `let h1 = document.q` into the DevTools console."})),(0,a.kt)("p",null,"Also notice in the image above the suggestion in the autocompletion pop-up box of ",(0,a.kt)("inlineCode",{parentName:"p"},'> let h1 = document.querySelector("h1");')," \u2014 this is a suggestion that matches one of my previously inputted commands to the console."),(0,a.kt)("p",null,"Everything that we've just done with the autocompletion feature and the ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," object can also be applied to other objects. Take the image below of the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," object as another example. Here, we've entered ",(0,a.kt)("inlineCode",{parentName:"p"},"h1.style.")," and we've received an alphabetical list of all properties belonging to the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," object (pictured on the left). Pretty cool!"),(0,a.kt)("p",null,"However, keep in mind that the autocompletion suggestion box has a limit to what it can list. If we scroll down to the bottom of the box (pictured on the right), we can see that the list ends in the ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"s and there's a bar with ",(0,a.kt)("inlineCode",{parentName:"p"},". . ."),". This simply means that it's not a complete list of all ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," properties. In this case, try typing in another letter, like ",(0,a.kt)("inlineCode",{parentName:"p"},"h1.style.b"),", to get a list of all ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," properties beginning with a ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/autocompletion-element-dot-style.png",alt:"This image shows two views of entering `h1.style.` into the DevTools console: on the left, the beginning of the list of autocompletion suggestions, and on the right, the end of the list that shows that the list of `style` properties is cut off and incomplete."})),(0,a.kt)("p",null,"There's also a limit to how helpful this information is \u2014 we can see all of the property names associated with an object, but we don't know what they do. One option is to simply access the property and see what you get. In the image below, I've done just that \u2014 I tried out ",(0,a.kt)("inlineCode",{parentName:"p"},"document.all")," and I got back a large object. However, when I researched ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/all"},"the property on MDN"),", I learned that it's a deprecated property that I shouldn't use. The important lesson here is that you always need to research any property that you find via autocompletion to make sure that it is relevant to your code."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/autocompletion-document-dot-all.png",alt:"This image shows the results of entering `document.all` into the console."})),(0,a.kt)("h2",{id:"tool-3-using-reference-pages-effectively"},"Tool #3: Using Reference Pages Effectively"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The last tip is to locate references for topics within HTML, CSS, or Events. This is especially helpful for broad exploration. Let's work through a few examples of helpful reference pages."),(0,a.kt)("h3",{id:"adding-styles-to-dom-elements"},"Adding Styles to DOM Elements"),(0,a.kt)("p",null,"If you want to explore new styles to add to an HTML DOM element, you could find a resource that lists all ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," object properties. Check out these two resources that do just that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/jsref/dom_obj_style.asp"},"W3Schools' ",(0,a.kt)("inlineCode",{parentName:"a"},"style")," object properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference"},"CSS Properties Reference listing CSS and JS equivalents"),".")),(0,a.kt)("h3",{id:"adding-attributes-to-dom-elements"},"Adding Attributes to DOM Elements"),(0,a.kt)("p",null,"You could peruse a list of global attributes that can be applied to any HTML element to get an idea of what's out there. Check out the following two resources as an example: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/tags/ref_standardattributes.asp"},"W3School's reference on global attributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes"},"MDN's reference on global attributes"))),(0,a.kt)("h3",{id:"exploring-events-to-handle"},"Exploring Events to Handle"),(0,a.kt)("p",null,"There are also lists of the most common events to handle in our webpages. MDN has a great reference page for this here: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Events"},"Events"))),(0,a.kt)("h3",{id:"exploring-html-element-object-types"},"Exploring HTML Element Object Types"),(0,a.kt)("p",null,"For finding new properties, methods, and events to use/handle with HTML DOM elements, these references will be the most informative:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},(0,a.kt)("inlineCode",{parentName:"a"},"Element"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},(0,a.kt)("inlineCode",{parentName:"a"},"HTMLElement")))),(0,a.kt)("p",null,"To see a list of all DOM Element objects that represent specific HTML elements, like ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement"),", visit this link:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_element_interfaces_2"},"HTML Element Interfaces"))),(0,a.kt)("h3",{id:"features-of-mdn-documentation-for-web-apis"},"Features of MDN Documentation for Web APIs"),(0,a.kt)("p",null,"Generally speaking, researching the reference pages for the objects you are working with will be the most informative. However, it's not always the most helpful because there usually is information that you won't be able to understand immediately (at least without further research). That said, the only way to get better at using official documentation is by using it! While you won't understand some things, you will be able to understand others. The trick is to be comfortable with not always getting full comprehension."),(0,a.kt)("p",null,"Let's cover a few features of MDN documentation for Web APIs. Many of these features will be true for all documentation on MDN. We'll look at an example of features for a reference on an Web API interface (an object type), and another for a reference on an Web API interface's property."),(0,a.kt)("h4",{id:"htmlelement-reference"},(0,a.kt)("a",{parentName:"h4",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"HTMLElement Reference")),(0,a.kt)("p",null,"This section covers helpful features of the reference pages for Web API interfaces."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/mdn-docs-explanation-HTMLElement.png",alt:"This is an image of the top of the reference page for HTMLElement."})),(0,a.kt)("p",null,"The start of every reference page includes a short description of the object type. You should always start here. What follows are various sections that detail the object's properties, events, and more. Take not of a few features about these reference pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The orange box in the image highlights the topics that are covered within the "article", the reference page for the ',(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement")," object. You should always scan this section to get a sense of what's in the page:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"instance properties")," and ",(0,a.kt)("strong",{parentName:"li"},"instance methods")," will always list the methods and properties that belong to this object type that we may want to use in our code. For example, we'd find ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement.innerText"),' listed within the "instance properties" section.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"events")," will list the events that fire on DOM elements of this object type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"see also")," lists additional and related resource pages to learn more. "))),(0,a.kt)("li",{parentName:"ul"},"The green box in the image highlights topics related to the object type we're viewing, as well as links to other reference pages. Perusing this list is a quick way to get an overview of what this object contains. This section may include the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Web API specification that this object type belongs to. In this case, we see HTML DOM API listed, which is the specification that the ",(0,a.kt)("inlineCode",{parentName:"li"},"HTMLElement")," interface belongs to."),(0,a.kt)("li",{parentName:"ul"},"A list of all properties and methods belonging to the object types."),(0,a.kt)("li",{parentName:"ul"},"A list of events associated with this object."),(0,a.kt)("li",{parentName:"ul"},"A list of other object types that this object inherits from."),(0,a.kt)("li",{parentName:"ul"},"A list of related topics."))),(0,a.kt)("li",{parentName:"ul"},"The purple box highlights a diagram that shows the chain of inheritance for the object type we're viewing. Note that this diagram is clickable! Just click the name of an object type in the diagram to be taken to its reference page.")),(0,a.kt)("h4",{id:"htmlelementinnertext-reference"},(0,a.kt)("a",{parentName:"h4",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText"},"HTMLElement.innerText Reference")),(0,a.kt)("p",null,"This section covers helpful features of the reference pages for a Web API interface's property."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/mdn-docs-explanation-HTMLElement-innerText.png",alt:"This is an image of the top of the reference page for HTMLElement.innerText."})),(0,a.kt)("p",null,"There are many similarities between reference pages for objects and a property of an object, so we'll just highlight the important differences. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The orange box in the image highlights the topics that are covered in this reference page:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"value")," section describes the return value and data type of the property and other helpful details. Always check out this section!"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"examples")," section covers usage examples. Often there are multiple ways to use a property or method. It's okay not to understand everything in this section."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"see also")," section can include links to additional resources.  "))),(0,a.kt)("li",{parentName:"ul"},"The green box in the image highlights related topics with links to reference pages. In this case, the related topics are the object type the property belongs to and other details about the object type in general. It's helpful to peruse this section to get an overview look at related topics. "),(0,a.kt)("li",{parentName:"ul"},'Finally notice the "Note" section in a blue box on the reference page. MDN will highlight important notes in boxes like these and you should always take a moment to read these. MDN also has red boxes for warnings.')))}u.isMDXComponent=!0}}]);