"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||l;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const l={title:"10. Adding and Removing HTML Elements",id:"adding_and_removing_html_elements",slug:"adding_and_removing_html_elements",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/0j_adding_and_removing_HTML_elements.md"},r=void 0,i={unversionedId:"test_intro/new_arrays_and_looping/adding_and_removing_html_elements",id:"test_intro/new_arrays_and_looping/adding_and_removing_html_elements",title:"10. Adding and Removing HTML Elements",description:"In the last course section we learned two ways to add and remove content from our webpages:",source:"@site/docs/test_intro/3_new_arrays_and_looping/0j_adding_and_removing_HTML_elements.md",sourceDirName:"test_intro/3_new_arrays_and_looping",slug:"/test_intro/new_arrays_and_looping/adding_and_removing_html_elements",permalink:"/lhtp/test_intro/new_arrays_and_looping/adding_and_removing_html_elements",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"10. Adding and Removing HTML Elements",id:"adding_and_removing_html_elements",slug:"adding_and_removing_html_elements",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/3_new_arrays_and_looping/0j_adding_and_removing_HTML_elements.md"},sidebar:"test_intro",previous:{title:"9. Document Query Methods that Return Collections",permalink:"/lhtp/test_intro/new_arrays_and_looping/document_query_methods_that_return_collections"},next:{title:"11. Debugging in JavaScript: Using a linter",permalink:"/lhtp/test_intro/new_arrays_and_looping/debugging_in_javascript_using_a_linter"}},s={},d=[{value:"Creating New Elements",id:"creating-new-elements",level:2},{value:"A Review of Inheritance and Browser Structures",id:"a-review-of-inheritance-and-browser-structures",level:3},{value:"Adding Attributes",id:"adding-attributes",level:3},{value:"Adding Text",id:"adding-text",level:3},{value:"Adding and Removing Elements to/from the DOM",id:"adding-and-removing-elements-tofrom-the-dom",level:2},{value:"<code>Element.append()</code>",id:"elementappend",level:3},{value:"Review: Using the DevTools Elements Tab to Inspect Elements",id:"review-using-the-devtools-elements-tab-to-inspect-elements",level:3},{value:"<code>Element.prepend()</code>",id:"elementprepend",level:3},{value:"<code>Element.before()</code> and <code>Element.after()</code>",id:"elementbefore-and-elementafter",level:3},{value:"Removing an Element",id:"removing-an-element",level:3},{value:"Adding Multiple Elements to the DOM at Once",id:"adding-multiple-elements-to-the-dom-at-once",level:3},{value:"More to Explore on MDN",id:"more-to-explore-on-mdn",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last course section we learned two ways to add and remove content from our webpages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use inline styles to show and hide HTML elements. With this method we update the ",(0,o.kt)("inlineCode",{parentName:"li"},"style")," attribute of an HTML element."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"innerText")," property to change the text of elements like paragraphs, headings, and others.")),(0,o.kt)("p",null,"However, both of these ways are limited \u2014 we have to have the HTML element created in our HTML before we can show, hide, or otherwise change it. Let's increase our toolkit and learn how to actually add and remove HTML elements from our scripts! We'll do this by using methods from the ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," objects (Web APIs). At the end of this lesson, we'll also list links to additional methods and properties that can also be used to add HTML elements and text content."),(0,o.kt)("p",null,"You can optionally open your DevTools and try out the code that we cover in this lesson."),(0,o.kt)("h2",{id:"creating-new-elements"},"Creating New Elements"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To create new HTML elements, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createElement()"))," method. This method has one required parameter for an HTML tag name in a string, like ",(0,o.kt)("inlineCode",{parentName:"p"},'"p"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"form"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"img"')," and so on. (There's also an optional parameter, but we won't cover it because it's not useful to us right now.) Let's look at some examples! We'll put these into the DevTools console. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const pElement = document.createElement("p");\n> pElement;\n<p></p>\n> Object.prototype.toString.call(pElement);\n"[object HTMLParagraphElement]"\n')),(0,o.kt)("p",null,"There's a couple things to notice in the above code snippet. First, the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.createElement()")," method creates HTML element objects, the same category of objects that we've been working with thus far. In our example, since we're creating a paragraph element, that means we're working with an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement")," object. To see a complete list of all HTML element objects, visit ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_element_interfaces_2"},"the MDN documentation on the HTML DOM API"),"."),(0,o.kt)("p",null,"Also notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.createElement()")," method returns an empty paragraph element. If we want to add text or an attribute, we need to do that as a separate step. "),(0,o.kt)("h3",{id:"a-review-of-inheritance-and-browser-structures"},"A Review of Inheritance and Browser Structures"),(0,o.kt)("p",null,"Keep in mind that HTML element objects, like ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLParagraphElement")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLImageElement"),", inherit functionality from multiple other objects. MDN offers a helpful graphic on the reference page for each HTML element object to show us this chain of inherited functionality. For example, if we look at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"HTMLInputElement")," reference page"),", we'll see this image in the initial description:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/htmlinputelement-object-inheritance.png",alt:"This image shows all of the objects that `HTMLInputElement` inherits functionality from."})),(0,o.kt)("p",null,"This tells us that some properties and methods are inherited from these objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EventTarget"))),(0,o.kt)("p",null,"We've worked with properties and methods from all of the objects in this list, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object, and we'll learn about that one soon."),(0,o.kt)("p",null,"All of these objects (and many others) combine to make up the functionality of the DOM/HTML DOM, and all of these collectively are categorized as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web APIs"),", the tools and standards that describe how web browsers function. "),(0,o.kt)("p",null,"Web APIs are divided into two categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API#interfaces"},"Interfaces"),", which are simply object types, like ",(0,o.kt)("inlineCode",{parentName:"li"},"window"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Element"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLCollection"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeList"),", etc. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API#specifications"},"Specifications"),", like the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"DOM"),", which name the standards and functionality of different web tools. Specifications (like the DOM and others) are always made up of one or more interfaces (object types).  ")),(0,o.kt)("p",null,"Hopefully this is a helpful conceptual review of the web browser structures and tools we are using in our code. When we talk about this information, we're absolutely \"looking under the hood\" of how web browsers function. There's so much to Web APIs! If you look at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API"},"the MDN documentation homepage for Web APIs"),", you'll see a long long list, and it's highly likely you won't work with the majority of Web APIs in your entire career as a developer. However, it's important to know the basic structures of the web so that we can know where to reference the information we may need in the future. "),(0,o.kt)("p",null,"If this information is overwhelming, don't worry, you'll come to understand it in time. For now, just keep your focus on driving: using the objects, methods, properties, and JavaScript that we've learned about so far."),(0,o.kt)("h3",{id:"adding-attributes"},"Adding Attributes"),(0,o.kt)("p",null,"As a quick refresher, if we want to add, remove, or get attributes to any HTML element, we need to use these methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.setAttribute()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.removeAttribute()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.getAttribute()")))),(0,o.kt)("h3",{id:"adding-text"},"Adding Text"),(0,o.kt)("p",null,"We'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/append"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.append()"))," method to add text to an element. We call this method on the element that we want to add text to, and the argument we pass in will be string with the text we want to add. Let's look at the code!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const pElement = document.createElement("p");\n> pElement;\n<p></p>\n> pElement.append("text");\n> pElement;\n<p>\u200btext\u200b</p>\u200b\n> pElement.innerText;\n"text"\n')),(0,o.kt)("h2",{id:"adding-and-removing-elements-tofrom-the-dom"},"Adding and Removing Elements to/from the DOM"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"elementappend"},(0,o.kt)("inlineCode",{parentName:"h3"},"Element.append()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/append"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.append()"))," method also works to add elements to the DOM. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," method will add a new element inside and at the end of the element we're targeting. "),(0,o.kt)("p",null,"The argument that we pass into the element represents the HTML element that we're adding to the DOM. Let's see how this works! You can try the following code in the DevTools on just about any webpage, since just about every webpage uses a div element. In the following code snippet, we're simply grabbing the first div that appears in the DOM and adding a paragraph element after it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const pElement = document.createElement("p");\n> pElement.append("text");\n> const firstDiv = document.querySelector("div");\n> firstDiv.append(pElement);\n')),(0,o.kt)("p",null,"With this first example, since we always nest other elements inside of divs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," method adds the new element to the end of the inside of the div. We'll see the same behavior with ULs and OLs. "),(0,o.kt)("p",null,"For elements that we shouldn't nest other HTML elements inside of, like adding a paragraph tag inside of a heading, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," method will still add the new element inside of that element. This is no good. Say we had a H2 heading element and we appended a paragraph tag inside of it, this is what the H2 element would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const pElement = document.createElement("p");\n> pElement.append("text and more text");\n> const firstH2 = document.querySelector("h2");\n> firstH2;\n<h2>Best Chocolate Chip Cookies</h2>\n> firstH2.append(pElement);\n> firstH2;\n<h2>Best Chocolate Chip Cookies<p>text and more text</p></h2>\n')),(0,o.kt)("p",null,"We do not want that! So be careful about your use cases."),(0,o.kt)("p",null,"This detail about ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," can be hard to remember and may cause some bugs in our code if we forget how to use it properly. However, we shouldn't worry about memorizing the different use cases for ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()"),". Instead, we should develop good habits around referencing information and debugging. A good workflow here would be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference the documentation."),(0,o.kt)("li",{parentName:"ul"},"Try out code in the DevTools console before you add it to your scripts. "),(0,o.kt)("li",{parentName:"ul"},"After you try it out in the DevTools console, inspect the newly added elements in the Elements tab of the DevTools console. ")),(0,o.kt)("p",null,"Since this workflow is so vital, let's review an example of using the Elements tab."),(0,o.kt)("h3",{id:"review-using-the-devtools-elements-tab-to-inspect-elements"},"Review: Using the DevTools Elements Tab to Inspect Elements"),(0,o.kt)("p",null,"In the following image, we've created a new p tag with the text ",(0,o.kt)("inlineCode",{parentName:"p"},'"This is a super cool p tag!"'),". We then appended that p tag to the first div on the homepage of LHTP at learnhowtoprogram.com/tracks. We can see this new paragraph actually on the webpage! "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const p = document.createElement("p");\n> p.append("This is a super cool p tag!");\n> document.querySelector("div").append(p);\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/code-to-add-p-tag-to-LHTP-homepage.png",alt:"This image shows the above code entered into the DevTools console and the newly added p tag on the webpage."})),(0,o.kt)("p",null,"But how do we know where exactly this new paragraph has been added in the DOM? Did we add it inside of the div or after the div? We can use the DevTools Elements tab to inspect our HTML and find the exact location of the newly added paragraph. The following image shows the results of doing just that. "),(0,o.kt)("p",null,"Here's the breakdown of the different highlights in the image:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we enable the tool that allows us to select an element on the webpage to inspect. This button is highlighted by the red circle. When we hover over different elements on the webpage with our mouse cursor, the DevTools inspector will automatically highlight the corresponding element in the HTML inside of the DevTools window."),(0,o.kt)("li",{parentName:"ul"},"We've selected the new paragraph ",(0,o.kt)("inlineCode",{parentName:"li"},'"This is a super cool p tag!"')," on the webpage with our cursor, which is highlighted in the red rectangle."),(0,o.kt)("li",{parentName:"ul"},"The inspector has done its job, by highlighting the HTML for the p tag in the DevTools console. This is circled in the orange rectangle. "),(0,o.kt)("li",{parentName:"ul"},"The green rectangle highlights the first div on the webpage. We have now verified that the code ",(0,o.kt)("inlineCode",{parentName:"li"},'document.querySelector("div").append(p);')," actually adds the p tag to the inside of the div at the end.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week3-branching-looping-arrays/using-elements-tab-finding-newly-added-p-tag.png",alt:"This image shows the process of inspecting the newly added p tag with in the Elements tab of the DevTools console."})),(0,o.kt)("h3",{id:"elementprepend"},(0,o.kt)("inlineCode",{parentName:"h3"},"Element.prepend()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.prepend()"))," method works in the exact same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()"),", only it adds a new element at the beginning and inside of the element we call it on. This is great for ",(0,o.kt)("inlineCode",{parentName:"p"},"divs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ul"),"s, ",(0,o.kt)("inlineCode",{parentName:"p"},"ol"),"s, ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"head"),", and other elements that we nest HTML elements inside of."),(0,o.kt)("p",null,"If I wanted to add a new list item ",(0,o.kt)("inlineCode",{parentName:"p"},"li")," at the beginning of an unordered list, I would use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.prepend()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const liElement = document.createElement("li");\n> liElement.append("list item");\n> const firstUL = document.querySelector("ul");\n> firstUL.prepend(liElement);\n')),(0,o.kt)("p",null,"Note that you can't print one element multiple times with prepend or append. If we do, we'll move the same element around, to the beginning or end of an element, but we won't print multiple copies of the same element. For example, the following code would only leave the list item ",(0,o.kt)("inlineCode",{parentName:"p"},"li")," at the bottom of the unordered list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const liElement = document.createElement("li");\n> liElement.append("text");\n> const firstUl = document.querySelector("ul");\n> firstUl.prepend(liElement);\n> firstUl.append(liElement);\n')),(0,o.kt)("p",null,"If we want a list item added before and after the heading we're targeting, we'll have to create two list item elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const li1 = document.createElement("li");\n> const li2 = document.createElement("li");\n> li1.append("text");\n> li2.append("other text");\n> const firstUl = document.querySelector("ul");\n> firstUl.prepend(li1);\n> firstUl.append(li2);\n')),(0,o.kt)("h3",{id:"elementbefore-and-elementafter"},(0,o.kt)("inlineCode",{parentName:"h3"},"Element.before()")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Element.after()")),(0,o.kt)("p",null,"To add an element before or after an element in the DOM we can use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/before"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.before()"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/after"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.after()"))," methods. These work in much the same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.prepend()"),"."),(0,o.kt)("p",null,"We can add an element before or after another element like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const p1 = document.createElement("p");\n> const p2 = document.createElement("p");\n> p1.append("text");\n> p2.append("other text");\n> const firstH2 = document.querySelector("h2");\n> firstH2.before(p1);\n> firstH2.after(p2);\n')),(0,o.kt)("p",null,"We can only use a newly created element once in the DOM. In the following example the newly created paragraph element will be added after the H2 tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const p1 = document.createElement("p");\n> p1.append("some text");\n> const firstH2 = document.querySelector("h2");\n> firstH2.before(p1);\n> firstH2.after(p1);\n')),(0,o.kt)("h3",{id:"removing-an-element"},"Removing an Element"),(0,o.kt)("p",null,"If we want to remove an element from the DOM, we simply have to get it with a ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," method and call the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.remove()"))," method on it. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const firstDivOnPage = document.querySelector("div");\n> firstDivOnPage.remove();\n')),(0,o.kt)("h3",{id:"adding-multiple-elements-to-the-dom-at-once"},"Adding Multiple Elements to the DOM at Once"),(0,o.kt)("p",null,"We can add multiple elements at once with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.prepend()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.after()"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.before()")," methods by passing in a series of arguments, each one representing an HTML element."),(0,o.kt)("p",null,"Here is an example with ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.append()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const ul = document.createElement("ul");\n> ul.setAttribute("id", "iceCream");\n> document.querySelector("div").append(ul);\n> const liOne = document.createElement("li");\n> const liTwo = document.createElement("li");\n> const liThree = document.createElement("li");\n> liOne.append("Chocolate");\n> liTwo.append("Vanilla");\n> liThree.append("Strawberry");\n> document.getElementById("iceCream").append(liOne, liTwo, liThree);\n')),(0,o.kt)("p",null,"Now we have an unordered list of favorite ice cream flavors randomly added to the end of the inside of the first div of the webpage we're on. "),(0,o.kt)("h3",{id:"more-to-explore-on-mdn"},"More to Explore on MDN"),(0,o.kt)("p",null,"There are more methods and properties to explore that help us add text and HTML to our webpages. We won't cover all of them in the curriculum, but we will review some of them in upcoming lessons. As always, you are welcome to explore them on your own \u2014 and you may just see code examples online that use these tools! "),(0,o.kt)("p",null,"This first set of methods and properties return ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),"-related objects, or belong to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object itself. We'll revisit these in the Intermediate JavaScript course, and the list that follows is just a sampling of many more methods and properties. Remember ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," is an object in the chain of inherited functionality for HTML element objects like ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),"! "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createTextNode()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.appendChild()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.childNodes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.parentElement")))),(0,o.kt)("p",null,"This second set of methods and properties we will not cover in the curriculum:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.insertAdjacentHTML()")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML#security_considerations"},"Important security considerations for using this method.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.innerHTML")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations"},"Important security considerations for using this method, which make it a less favorable approach to adding HTML to the DOM"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're not interested in exploring more, you certainly don't need to! All of the methods to add and remove HTML elements to/from the DOM that we've covered in this lesson will meet our needs for the websites we build.")))}h.isMDXComponent=!0}}]);