"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"Document Query Methods that Return Collections",id:"document_query_methods_that_return_collections",slug:"document_query_methods_that_return_collections",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/0i_document_query_methods_that_return_collections.md"},r=void 0,i={unversionedId:"introduction_to_programming_part_time_evening/arrays-and-looping/document_query_methods_that_return_collections",id:"introduction_to_programming_part_time_evening/arrays-and-looping/document_query_methods_that_return_collections",title:"Document Query Methods that Return Collections",description:"Since we're now familiar with arrays, let's review document query methods that return collections. An array is a type of collection, but in this case we're using the term collection to describe two array-like objects: NodeList and HTMLCollection. Both of these objects are Web APIs that make up the functionality of the Document Object Model (DOM). As we'll learn later, objects can be structured so they look and act like arrays, though they are not arrays!",source:"@site/docs/introduction_to_programming_part_time_evening/5_arrays-and-looping/0i_document_query_methods_that_return_collections.md",sourceDirName:"introduction_to_programming_part_time_evening/5_arrays-and-looping",slug:"/introduction_to_programming_part_time_evening/arrays-and-looping/document_query_methods_that_return_collections",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/document_query_methods_that_return_collections",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Document Query Methods that Return Collections",id:"document_query_methods_that_return_collections",slug:"document_query_methods_that_return_collections",hide_table_of_contents:!0,sidebar_position:13,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/5_arrays-and-looping/0i_document_query_methods_that_return_collections.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Journal #3",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/journal_3"},next:{title:"Adding and Removing HTML Elements",permalink:"/lhtp/introduction_to_programming_part_time_evening/arrays-and-looping/adding_and_removing_html_elements"}},s={},p=[{value:"<code>document</code> Query Methods",id:"document-query-methods",level:2},{value:"<code>document.querySelectorAll()</code>",id:"documentqueryselectorall",level:3},{value:"<code>document.getElementsByClassName()</code>",id:"documentgetelementsbyclassname",level:3},{value:"<code>document.getElementsByTagName()</code>",id:"documentgetelementsbytagname",level:3},{value:"<code>document.getElementsByName()</code>",id:"documentgetelementsbyname",level:3},{value:"Objects that Look and Act like Arrays",id:"objects-that-look-and-act-like-arrays",level:2},{value:"Turning <code>NodeList</code> and <code>HTMLCollection</code> Objects into Arrays",id:"turning-nodelist-and-htmlcollection-objects-into-arrays",level:3},{value:"MDN Documentation Links",id:"mdn-documentation-links",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since we're now familiar with arrays, let's review ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," query methods that return collections. An array is a type of collection, but in this case we're using the term collection to describe two array-like objects: ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection"),". Both of these objects are Web APIs that make up the functionality of the Document Object Model (DOM). As we'll learn later, objects can be structured so they look and act like arrays, though they are not arrays!"),(0,o.kt)("p",null,"In this lesson, we'll briefly cover all of these methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"document.querySelectorAll()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"document.getElementsByClassName()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"document.getElementsByTagName()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"document.getElementsByName()")," ")),(0,o.kt)("p",null,"And at the end of the lesson, we'll learn how to turn these collections into arrays so we can call array methods on them."),(0,o.kt)("p",null,"You are welcome to code along with this lesson, or simply read through it. We recommend using this lesson as a reference when building projects in the coming weeks."),(0,o.kt)("h2",{id:"document-query-methods"},(0,o.kt)("inlineCode",{parentName:"h2"},"document")," Query Methods"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For demonstration purposes we'll use the HTML from the Mad Libs project. We last updated that project in the lesson \"Removing Event Listeners\", and it contains both an advertisement (solely created in our scripts) and a reset button (which is in our HTML). Here's the HTML from that project:"),(0,o.kt)("div",{class:"filename"},"mad-libs.html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <script src="js/scripts.js"><\/script>\n  <title>A fantastical adventure</title>\n</head>\n<body>\n  <h1>Fill in the blanks to write your story!</h1>\n  <form>\n    <label for="person1Input">A name</label>\n    <input id="person1Input" type="text" name="person1Input">\n    <label for="person2Input">Another name</label>\n    <input id="person2Input" type="text" name="person2Input">\n    <label for="animalInput">An animal</label>\n    <input id="animalInput" type="text" name="animalInput">\n    <label for="exclamationInput">An exclamation</label>\n    <input id="exclamationInput" type="text" name="exclamationInput">\n    <label for="verbInput">A past tense verb</label>\n    <input id="verbInput" type="text" name="verbInput">\n    <label for="nounInput">A noun</label>\n    <input id="nounInput" type="text" name="nounInput">\n    <button type="submit">Show me the story!</button>\n  </form>\n  <button type="button" id="reset">Reset Form</button>  \n  <div id="story">\n    <h1>A fantastical adventure</h1>\n    <p>\n      One day, <span id="person1a">_________</span> and <span id="person2a">_________</span> were walking through the woods, when suddenly a giant <span id="animal">_________</span> appeared. "<span id="exclamation">_________</span>", <span id="person1b">_________</span> cried. The two of them <span id="verb">_________</span> as quickly possible, and when they were safe, <span id="person1c">_________</span> and <span id="person2b">_________</span> gave each other a giant <span id="noun">_________</span>.\n    </p>\n  </div>\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"documentqueryselectorall"},(0,o.kt)("inlineCode",{parentName:"h3"},"document.querySelectorAll()")),(0,o.kt)("p",null,"Just like ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()"),", we can input any valid CSS selector into ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"},(0,o.kt)("inlineCode",{parentName:"a"},"document.querySelectorAll()"))," to get HTML element objects returned to us. The only difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll()")," always returns a collection of elements, even if there is only one or no element that matches the query. The collection that's returned is actually an object (a Web API) that's set up to look and act like an array, but we'll discuss that after we learn how to use the new methods."),(0,o.kt)("p",null,"In this first example, we're passing in the argument ",(0,o.kt)("inlineCode",{parentName:"p"},'"span"'),". This should be familiar, since we've done this a lot with ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()"),". We can pass in the name of any HTML tag in quotes as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span");\nNodeList(9)\xa0[span#person1a, span#person2a, span#animal, span#exclamation, span#person1b, span#verb, span#person1c, span#person2b, span#noun]\n')),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object is returned to us with every element that matches the query. We'll revisit the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object later in this lesson."),(0,o.kt)("p",null,"In this second example, we're using a more interesting CSS selector: ",(0,o.kt)("inlineCode",{parentName:"p"},"nth-child"),". This is a pseudo class in CSS and it is really helpful in getting the nth element in a list or a series of elements. As we can see below, when we pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"span:nth-child(4)"),", we're getting the 4th span element in the document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(4)");\nNodeList\xa0[span#exclamation]\n')),(0,o.kt)("p",null,"We can also include an ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," to get every nth element. With the argument ",(0,o.kt)("inlineCode",{parentName:"p"},'"span:nth-child(4n)"'),", we're getting every 4th span element in the document."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(4n)");\nNodeList(2)\xa0[span#exclamation, span#person2b]\n')),(0,o.kt)("p",null,"We can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"even")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"odd")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"nth-child")," CSS pseudo class. As you might expect, using ",(0,o.kt)("inlineCode",{parentName:"p"},"even")," returns every even element and using ",(0,o.kt)("inlineCode",{parentName:"p"},"odd")," returns every odd element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(odd)");\nNodeList(5)\xa0[span#person1a, span#animal, span#person1b, span#person1c, span#noun]\n')),(0,o.kt)("p",null,"If we want to get one item from the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," collection, we'll use bracket notation, passing in the index of the element we want (starting from 0). Just like with arrays, if we pass in 0, we'll get the first element returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(odd)")[0];\n<span id="person1a">\u200b_________\u200b</span>\u200b\n')),(0,o.kt)("p",null,"If I pass the returned span element into my handy method that checks exact types, I'll find that I get a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLSpanElement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const personSpan = document.querySelectorAll("span:nth-child(odd)")[0];\n> personSpan;\n<span id="person1a">\u200b_________\u200b</span>\u200b\n> Object.prototype.toString.call(personSpan);\n"[object HTMLSpanElement]"\n')),(0,o.kt)("p",null,"Why is this important? It shows us that even though a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object is holding all of the span elements in one collection, each span element is of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLSpanElement"),", and we've worked with that category of Web API objects before!"),(0,o.kt)("p",null,"By the way, we definitely recommend revisiting CSS Selectors when you have the time! There is ",(0,o.kt)("em",{parentName:"p"},"a lot")," to explore! ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"Check out this great reference on CSS Selectors on MDN.")),(0,o.kt)("h3",{id:"documentgetelementsbyclassname"},(0,o.kt)("inlineCode",{parentName:"h3"},"document.getElementsByClassName()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName"},(0,o.kt)("inlineCode",{parentName:"a"},"document.getElementsByClassName()"))," method gets all elements that have the same value for their ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute. Since the Mad Libs project doesn't use any classes, the return is an empty collection. However, we can see the return type: ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection"),", another Web API object that is array-like. Don't worry, we'll demystify this array-like behavior down below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> document.getElementsByClassName('x');\nHTMLCollection\xa0[]length: 0[[Prototype]]: HTMLCollection\n")),(0,o.kt)("p",null,"If we want to get an element from the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection"),", we'll also use bracket notation and pass in the index (starting at 0) of the element that we want to get."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> document.getElementsByClassName('x')[0];\nundefined\n")),(0,o.kt)("p",null,"Since our collection is empty, we get ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," returned to us."),(0,o.kt)("h3",{id:"documentgetelementsbytagname"},(0,o.kt)("inlineCode",{parentName:"h3"},"document.getElementsByTagName()")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName"},(0,o.kt)("inlineCode",{parentName:"a"},"document.getElementsByTagName()"))," method gets all elements by their tag name. The same tag name that's returned from the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"},(0,o.kt)("inlineCode",{parentName:"a"},"Element.tagName"))," property. "),(0,o.kt)("p",null,"For example, we could check the tag name of our heading. In fact, we've done this before! "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const h1 = document.querySelector("h1");\n> h1;\n<h1>Fill in the blanks to write your story!</h1>\n> h1.tagName;\n"H1"\n')),(0,o.kt)("p",null,"Remember if there are two H1 elements, which there are in the Mad Libs HTML, ",(0,o.kt)("inlineCode",{parentName:"p"},'document.querySelector("h1")')," will only return the first one it finds."),(0,o.kt)("p",null,"When we use ",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementsByTagName()"),", we don't have to capitalize the tag name, even though that's how tag names are returned to us from accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element.tagName")," property. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.getElementsByTagName("h1");\nHTMLCollection(2)\xa0[h1, h1]\n')),(0,o.kt)("p",null,"This makes the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementsByTagName()")," very similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," method, only we can't use other CSS selectors in it, like ",(0,o.kt)("inlineCode",{parentName:"p"},'"h1:nth-child(2n)"'),"."),(0,o.kt)("p",null,"To get a single element from the collection, we also use bracket notation. Here, we're getting the second element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> const secondH1 = document.getElementsByTagName("h1")[1];\n> secondH1;\n<h1>\u200bA fantastical adventure\u200b</h1>\u200b\n> Object.prototype.toString.call(secondH1);\n"[object HTMLHeadingElement]"\n')),(0,o.kt)("p",null,"As we see in the above code snippet, when we check the type of the individual H1 element, it's the familiar ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," that we worked with in the last course section. "),(0,o.kt)("h3",{id:"documentgetelementsbyname"},(0,o.kt)("inlineCode",{parentName:"h3"},"document.getElementsByName()")),(0,o.kt)("p",null,"This last method ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName"},(0,o.kt)("inlineCode",{parentName:"a"},"document.getElementsByName()"))," will get all elements that have the same value for their ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.getElementsByName("person1Input");\nNodeList\xa0[input#person1Input]\n')),(0,o.kt)("p",null,"This method would likely be more useful for radio buttons or checkboxes (as we'll learn), since all inputs of those types must share the same ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," attribute for them to function properly."),(0,o.kt)("p",null,"Just like in previous examples, if we want to get a single element from the list, we'll use bracket notation. And if we check the exact type of the returned element, we'll see we're working with ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLInputElement"),", a category of Web API objects that we're familiar with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.getElementsByName("person1Input")[0];\n<input id="person1Input" type="text" name="person1Input">\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> Object.prototype.toString.call(document.getElementsByName("person1Input")[0]);\n"[object HTMLInputElement]"\n')),(0,o.kt)("h2",{id:"objects-that-look-and-act-like-arrays"},"Objects that Look and Act like Arrays"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"So what is this funny business of an object that looks and acts like an array? Well, objects can be structured to look and act like an array. An array-like object will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," property and properties indexed from zero, but they do not have access to JavaScript Array methods. Also, since these are objects, they can be given a name. As we've learned, we're working with two array-like objects called ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection"),", both of which are Web APIs. Their job is to hold multiple HTML elements."),(0,o.kt)("p",null,"Let's look at an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(4n)");\nNodeList(2)\xa0[span#exclamation, span#person2b]\n')),(0,o.kt)("p",null,"And then let's expand it to look inside:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"NodeList(2) [span#exclamation, span#person2b]\n  0: span#exclamation\n  1: span#person2b\n  length: 2\n  [[Prototype]]: NodeList\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object has three properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"length"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," properties are both set to two different ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLSpanElement")," object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," property is set to a number that corresponds to how many ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLSpanElement")," objects are inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object. Right now, there's two, so ",(0,o.kt)("inlineCode",{parentName:"p"},"length")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"The properties ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," may seem odd since so far we've only seen object property names use strings and not numbers. However, we can in fact use numbers as property names! However, if we wanted to access an object property that's set to a number, we need to use ",(0,o.kt)("strong",{parentName:"p"},"bracket notation")," instead of dot notation. That's right, just like with arrays, we can use bracket notation to access object properties. They are most commonly used with properties that are not typical strings. So, if we want to get an element from our object, we use bracket notation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'> document.querySelectorAll("span:nth-child(4n)")[0];\n<span id="exclamation">\u200b_________\u200b</span>\u200b\n')),(0,o.kt)("p",null,"And since this ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," object sets numbers as its property names and starts them at 0, this object looks and acts very much like an array. Hopefully this discussion is helpful in demystifying array-like objects. These exist in Web APIs as well as JS proper, and we'll encounter more of these. At this time, we don't need to understand why these exist, or anything deeper about how they are set up. We just need to know how to use them! "),(0,o.kt)("h3",{id:"turning-nodelist-and-htmlcollection-objects-into-arrays"},"Turning ",(0,o.kt)("inlineCode",{parentName:"h3"},"NodeList")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"HTMLCollection")," Objects into Arrays"),(0,o.kt)("p",null,"The biggest deal with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection")," objects is that we can't call array methods on them. Sometimes we also can't iterate over them (we'll revisit this once we learn about looping). Well, we have a solution for that, and that's turning these into arrays with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.from()")," method. Let's look at an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> const headingCollection = document.getElementsByTagName(\"h1\");\n> headingCollection;\nHTMLCollection(2)\xa0[h1, h1]\n> const headingArray = Array.from(headingCollection);\n> headingArray;\n(2)\xa0[h1, h1]\n> Object.prototype.toString.call(headingArray);\n'[object Array]'\n")),(0,o.kt)("p",null,"Notably the ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.from()")," method is called on the array object type. We know it's the array object type, because ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," is capitalized and we don't use ",(0,o.kt)("inlineCode",{parentName:"p"},"prototype")," in the method's name. We'll revisit this type of method in an upcoming lesson. "),(0,o.kt)("p",null,"Take note that there are some limitations for using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.from()")," in older browsers, but that's true for a lot of JavaScript! As always, if you run into any issues, visit documentation like MDN. "),(0,o.kt)("h3",{id:"mdn-documentation-links"},"MDN Documentation Links"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeList")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLCollection")," object belong to the many objects that make up the DOM. We won't explore them in depth like we did in the last course section with ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", and other objects that also are a part of the DOM."),(0,o.kt)("p",null,"Here are direct links to the objects and methods we learned about in this lesson:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/NodeList"},(0,o.kt)("inlineCode",{parentName:"a"},"NodeList"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection"},(0,o.kt)("inlineCode",{parentName:"a"},"HTMLCollection"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/document"},(0,o.kt)("inlineCode",{parentName:"a"},"document")," object methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.from()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"Reference for CSS Selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_element_interfaces_2"},"A complete list of all HTML element objects"),".")))}d.isMDXComponent=!0}}]);