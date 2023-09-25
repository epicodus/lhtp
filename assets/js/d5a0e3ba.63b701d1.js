"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:o,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"1. Introduction to the Node Object",id:"introduction_to_the_node_object",slug:"introduction_to_the_node_object",hide_table_of_contents:!0,sidebar_position:25,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2b_introduction_to_the_node_object.md",paginationNext:null},l=void 0,r={unversionedId:"intermediate_javascript_part_time_evening/object-oriented-javascript/introduction_to_the_node_object",id:"intermediate_javascript_part_time_evening/object-oriented-javascript/introduction_to_the_node_object",title:"1. Introduction to the Node Object",description:"In this lesson, we'll learn a bit more about the Node object. We've previously encountered the Node object when we discussed the series of objects that HTML element objects inherit from. Remember this graphic for the HTMLHeadingElement object?",source:"@site/docs/intermediate_javascript_part_time_evening/3_object-oriented-javascript/2b_introduction_to_the_node_object.md",sourceDirName:"intermediate_javascript_part_time_evening/3_object-oriented-javascript",slug:"/intermediate_javascript_part_time_evening/object-oriented-javascript/introduction_to_the_node_object",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/introduction_to_the_node_object",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"1. Introduction to the Node Object",id:"introduction_to_the_node_object",slug:"introduction_to_the_node_object",hide_table_of_contents:!0,sidebar_position:25,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/2b_introduction_to_the_node_object.md",paginationNext:null},sidebar:"intermediate_javascript_part_time_evening",previous:{title:"3. Address Book: Delete Functionality and Polish",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/address_book_delete_functionality_and_polish"},next:{title:"2. LinkedIn",permalink:"/lhtp/intermediate_javascript_part_time_evening/object-oriented-javascript/linkedin"}},s={},d=[{value:"An Introduction to <code>Node</code> and a Review of the DOM",id:"an-introduction-to-node-and-a-review-of-the-dom",level:2},{value:"Visualization of an HTML DOM Tree",id:"visualization-of-an-html-dom-tree",level:3},{value:"Visualization of Node Types",id:"visualization-of-node-types",level:3},{value:"Visualization of Node Relationships",id:"visualization-of-node-relationships",level:3},{value:"<code>Node</code> Properties and Methods",id:"node-properties-and-methods",level:2},{value:"Creating Nodes",id:"creating-nodes",level:3},{value:"Adding New Nodes",id:"adding-new-nodes",level:3},{value:"DOM Traversal",id:"dom-traversal",level:3},{value:"Summary",id:"summary",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn a bit more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object. We've previously encountered the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object when we discussed the series of objects that HTML element objects inherit from. Remember this graphic for the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," object?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/HTMLHeadingElement-inheritance-on-MDN.png",alt:"This image shows the objects that the `HTMLHeadingElement` object inherits from"})),(0,o.kt)("p",null,"In the image we can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement")," object (and all other HTML element objects like ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLLIElement"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLAnchorElement"),", and so on) inherits from 4 other objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EventTarget"))),(0,o.kt)("p",null,"We've talked about every object listed above, except for ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),", so in this lesson we'll take the time to understand what it is and what it does. However, we won't work with ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," properties and methods much. Why? The ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object offers the same functionality, and it's more conceptually intuitive."),(0,o.kt)("p",null,"That said, it's still important to have a basic understanding of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object, and that's what this lesson is all about: developing a basic understanding of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object. Doing this will also give us an opportunity to review the DOM and other concepts related to the Web APIs we've learned about so far."),(0,o.kt)("h2",{id:"an-introduction-to-node-and-a-review-of-the-dom"},"An Introduction to ",(0,o.kt)("inlineCode",{parentName:"h2"},"Node")," and a Review of the DOM"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's revisit the object's that we've worked with so far:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement")," represents any HTML element in the HTML DOM. This is a generic object type for more specific objects like ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLLIElement"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLImageElement"),", and so on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Element")," represents any element in a DOM. This is even more generic than ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement"),", because this can include HTML elements in the HTML DOM, or ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/SVG"},"SVG")," elements in an SVG DOM. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EventTarget")," represents any object that can be the target of events and that we can attach an event listener to. ")),(0,o.kt)("p",null,"So, how does ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," fit into this?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")," represents a point within a DOM; this could be an element, text, a comment, and more. ")),(0,o.kt)("p",null,"We could describe ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," as an even more generic representation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," object, but to get to the heart of it, we need to understand what a node in a tree is. Not a maple or pine tree, but the 'tree' data structure. "),(0,o.kt)("p",null,"A tree is a collection of nodes that are organized hierarchically. There's always a root node, branches off of that node that lead to other nodes. A node is just a point along the tree that contains a value, any value. "),(0,o.kt)("p",null,"The following image is an example of a tree from ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"},"Wikipedia's entry on the tree data structure"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/tree-data-structure-from-wikipedia.png",alt:"This is an images of a tree data structure with a single root node at the top, and a series of child nodes."})),(0,o.kt)("p",null,"There are many types of trees (with specific names), but we don't need to concern ourselves with the details. We care about trees because the Document Object Model is a tree. In technical terms, the DOM is a hierarchical collection of nodes, and each node in the DOM is an object that represents some aspect of the document, like text, a comment, an element, or the document itself! "),(0,o.kt)("p",null,"So, for our browser Web APIs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object represents a node in the DOM tree \u2014 not just any tree, but specifically the DOM! Because of this, ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," contains properties and methods for adding and removing nodes, and traversing the DOM. ",(0,o.kt)("strong",{parentName:"p"},"Traversing the DOM")," simply means to move to different elements within the DOM. "),(0,o.kt)("p",null,"Keep in mind that ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," is a generic object type that represents a generic node in the DOM tree. There are specific object types that represent specific types of nodes. To learn more about these other object types, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node"},"visit the MDN documentation on ",(0,o.kt)("inlineCode",{parentName:"a"},"Node")),", which lists them all in the second paragraph."),(0,o.kt)("h3",{id:"visualization-of-an-html-dom-tree"},"Visualization of an HTML DOM Tree"),(0,o.kt)("p",null,"Let's look at a previous example that compares HTML source code with a corresponding HTML DOM tree. As we can see the image on the right has a root node (",(0,o.kt)("inlineCode",{parentName:"p"},"document"),") and a series of branches that go on the child nodes. "),(0,o.kt)("p",null,'In fact the terms "parent", "child or "children", and "siblings" are how we describe the hierarchical relationships in the DOM tree. In the image below, we can list out a few relationships:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<body>")," is the child of ",(0,o.kt)("inlineCode",{parentName:"li"},"<html>"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"<html>")," is the parent of ",(0,o.kt)("inlineCode",{parentName:"li"},"<body>")),(0,o.kt)("li",{parentName:"ul"},"The three ",(0,o.kt)("inlineCode",{parentName:"li"},"<li>")," elements are all siblings, as well as children of the ",(0,o.kt)("inlineCode",{parentName:"li"},"<ul>")," element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<body>")," is the parent of ",(0,o.kt)("inlineCode",{parentName:"li"},"<h1>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"<ul>"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/html-source-simple-with-tree.png",alt:"This image shows one HTML document as source code (on the left) and as a DOM (on the right)."})),(0,o.kt)("p",null,"Take note that the above image is a bit deceiving. It only describes some of the nodes present in the HTML \u2014 the elements. Text and commentary, among others, are also nodes. Let's look at another example to better understand different types of nodes in the DOM tree. "),(0,o.kt)("h3",{id:"visualization-of-node-types"},"Visualization of Node Types"),(0,o.kt)("p",null,"The following image breaks down the different node types of the P tag with a nested anchor. A ",(0,o.kt)("strong",{parentName:"p"},"node type")," is just like an object type, having a name and representing a specific type of node in the DOM tree. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p id="test">Visit us <a href="www.example.com">here</a>!</p>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/OOP-JS/node+types.png",alt:'This image highlights that the P and A tags are both node elements, and the "Visit us ", "here", and "!" are all text nodes.'})),(0,o.kt)("p",null,"To see a full list of node types, visit the following documentation on MDN:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.nodeType")))),(0,o.kt)("p",null,"Take note that attributes are not counted as separate nodes in the DOM, though they do have a dedicated node type. Instead, they are counted as part of the element node they are attached to. This is an odd and specific detail that is due to the discrepancy between how JavaScript was originally written and structured, and how it's since evolved. Don't worry about retaining this information, this is just a technical side-note for those who may be wondering about attributes."),(0,o.kt)("h3",{id:"visualization-of-node-relationships"},"Visualization of Node Relationships"),(0,o.kt)("p",null,'Next, let\'s look at one more example that demonstrates the relationships between nodes and how we describe them with "parent", "child", and "siblings". Understanding this will help us understand the names of the properties and methods that the ',(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object (and others) offer us.  "),(0,o.kt)("p",null,"In the following image, we'll see the same paragraph element as in the previous example, still broken into a hierarchy of nodes, but this time with the relationships between each node labeled."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/OOP-JS/node-relationships.png",alt:'This image shows the `<p id="test">Visit us <a href="www.example.com">here</a>!</p>` html as a hierarchical tree of nodes with the relationships between each node labeled.'})),(0,o.kt)("p",null,"Here are a few relationships between the nodes in the above image:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>")," element node is the parent of the text node ",(0,o.kt)("inlineCode",{parentName:"li"},'"Visit us "'),", the element node ",(0,o.kt)("inlineCode",{parentName:"li"},"<a>"),", and the text node ",(0,o.kt)("inlineCode",{parentName:"li"},'"!"'),"."),(0,o.kt)("li",{parentName:"ul"},"The text node ",(0,o.kt)("inlineCode",{parentName:"li"},'"Visit us "'),", the element node ",(0,o.kt)("inlineCode",{parentName:"li"},"<a>"),", and the text node ",(0,o.kt)("inlineCode",{parentName:"li"},'"!"')," are all siblings."),(0,o.kt)("li",{parentName:"ul"},"The text node ",(0,o.kt)("inlineCode",{parentName:"li"},'"here"')," is the child of the element node ",(0,o.kt)("inlineCode",{parentName:"li"},"<a>"),".")),(0,o.kt)("h2",{id:"node-properties-and-methods"},(0,o.kt)("inlineCode",{parentName:"h2"},"Node")," Properties and Methods"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"At this point a few things should be relatively clear:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The data structure of the DOM is a tree, which is a hierarchical collection of nodes."),(0,o.kt)("li",{parentName:"ul"},"Each node in the DOM is an object. Generally speaking, a node in a tree can be any value, but for the DOM they are all objects."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," object type represents a node within the DOM. "),(0,o.kt)("li",{parentName:"ul"},"There are many node types, each of which serves to distinguish the nodes in a tree. Common ones are element nodes, text nodes, and comment nodes. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")," is the most generic object type that represents node in the DOM tree, and there are other objects that represent specific node types.")),(0,o.kt)("p",null,"So what's next? Let's look at a few ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," properties and methods with the goal of exposing ourselves to what's out there. Actually implementing any ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," methods or properties is further exploration. All of the DOM manipulation and traversal that we need to do, we can do with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Document"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement")," objects. "),(0,o.kt)("p",null,"However, we can call the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," properties and methods on the HTML element objects (",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLHeadingElement"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLImageElement"),", and so on) that we work with. We'll also see some of these methods and properties used in code examples online. So, it's important to develop a basic familiarity with ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," properties and methods, as well as know where to reference information about them."),(0,o.kt)("h3",{id:"creating-nodes"},"Creating Nodes"),(0,o.kt)("p",null,"There's a couple ways to create nodes, each of which belongs to the ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," object:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createComment()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createTextNode()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createAttribute()")))),(0,o.kt)("p",null,"Notably ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"},(0,o.kt)("inlineCode",{parentName:"a"},"document.createElement()"))," does not return a node object."),(0,o.kt)("p",null,"If we wanted to create an attribute or text, we'd use these methods instead:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"HTMLElement.innerText")," to change the value of the text for an element."),(0,o.kt)("li",{parentName:"ul"},"Accessing attribute properties or calling ",(0,o.kt)("inlineCode",{parentName:"li"},"Element.setAttribute()")," method.")),(0,o.kt)("h3",{id:"adding-new-nodes"},"Adding New Nodes"),(0,o.kt)("p",null,"A few ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," methods to add new nodes to the DOM are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.appendChild()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.insertBefore()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.removeChild()")))),(0,o.kt)("p",null,"If we wanted to do the above with ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," methods, we might choose from the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.before()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/before"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/before"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.after()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/after"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/after"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.append()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/append"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/append"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.prepend()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.remove()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/remove"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.insertAdjacentHTML()"),"](",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML"),")")),(0,o.kt)("h3",{id:"dom-traversal"},"DOM Traversal"),(0,o.kt)("p",null,"To move along the DOM, accessing parent, child, sibling elements, we might use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," properties. Note that this is not an exhaustive list!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.childNodes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.firstChild"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.nextSibling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.previousSibling"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.parentNode"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.textContent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName"},(0,o.kt)("inlineCode",{parentName:"a"},"Node.nodeName")))),(0,o.kt)("p",null,'Notice how these property names reference "parent", "child", and "sibling". This makes guessing what information each property contains easy. '),(0,o.kt)("p",null,"To access the same information via ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", we might use some of the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.children"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/children"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/children"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.firstElementChild"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.lastElementChild"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.nextElementSibling"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.previousElementSibling"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Element.tagName"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"},"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[HTMLElement.innerText"),"]`(",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText"},"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText"),")")),(0,o.kt)("p",null,"To review an explanation of the differences between ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.textContent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement.innerText"),", check out this article on MDN:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext"},"Differences between ",(0,o.kt)("inlineCode",{parentName:"a"},"Node.textContent")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"HTMLElement.innerText")))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"All in all, everything that we can do with ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),", we can also do via ",(0,o.kt)("inlineCode",{parentName:"p"},"Element")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object may give us finer grained control over the DOM tree, but we don't particularly need that fine grained control. It's up to you whether you want to explore the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object and use its properties and methods in your code. "),(0,o.kt)("p",null,"Here is a summary of key concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The data structure of the DOM is a tree, which is a hierarchical collection of nodes."),(0,o.kt)("li",{parentName:"ul"},"Each node in the DOM is an object. Generally speaking, a node in a tree can be any value, but for the DOM they are all objects."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," object type represents a node within the DOM. "),(0,o.kt)("li",{parentName:"ul"},"There are many node types, each of which serves to distinguish the nodes in a tree. Common ones are element nodes, text nodes, and comment nodes. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")," is the most generic object type that represents node in the DOM tree, and there are other objects that represent specific node types.")))}h.isMDXComponent=!0}}]);