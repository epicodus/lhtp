"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(_,o(o({ref:t},p),{},{components:n})):r.createElement(_,o({ref:t},p))}));function _(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Practice: Accessing HTML Element Attributes and Properties in the DOM",id:"practice_accessing_html_element_attributes_and_properties_in_the_dom",slug:"practice_accessing_html_element_attributes_and_properties_in_the_dom",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2i_classwork_accessing_DOM_element_attributes_and_properties.md"},o=void 0,l={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",id:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",title:"Practice: Accessing HTML Element Attributes and Properties in the DOM",description:"Goal: Practice accessing DOM element attributes by using document methods and dot notation to access the properties that we learned about in previous lessons.",source:"@site/docs/introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2/2i_classwork_accessing_DOM_element_attributes_and_properties.md",sourceDirName:"introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Practice: Accessing HTML Element Attributes and Properties in the DOM",id:"practice_accessing_html_element_attributes_and_properties_in_the_dom",slug:"practice_accessing_html_element_attributes_and_properties_in_the_dom",hide_table_of_contents:!0,sidebar_position:6,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2i_classwork_accessing_DOM_element_attributes_and_properties.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"Understanding Web APIs: Interfaces (Object Types) and Inheritance",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/understanding_web_apis_interfaces_object_types_and_inheritance"},next:{title:"Function Expressions",permalink:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/function_expressions"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Cookie Recipe",id:"cookie-recipe",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:")," Practice accessing DOM element attributes by using ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," methods and dot notation to access the properties that we learned about in previous lessons."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When we run our JavaScript in our browser, what is JavaScript's global object set to? "),(0,i.kt)("li",{parentName:"ul"},"Why can we write simply ",(0,i.kt)("inlineCode",{parentName:"li"},"document.querySelector()")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"window.document.querySelector()"),"?"),(0,i.kt)("li",{parentName:"ul"},"What is the data type of HTML elements in the DOM?"),(0,i.kt)("li",{parentName:"ul"},"What are Web APIs?"),(0,i.kt)("li",{parentName:"ul"},"What is an interface?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cookie-recipe"},"Cookie Recipe"),(0,i.kt)("p",null,'Clone down the Cookie Recipe HTML and open it in your web browser. Then, use the DevTools console to practice accessing different DOM elements and their attributes by working through each prompt below. Reference the previous lesson "Accessing HTML Element Attributes in the DOM" as needed. You should be able to complete all of the following prompts with just the information in the lesson. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the text within the ",(0,i.kt)("inlineCode",{parentName:"li"},"<em>")," tag of the paragraph element."),(0,i.kt)("li",{parentName:"ul"},"Get the value for the class attribute of the ordered list. Then, give the class attribute a new value."),(0,i.kt)("li",{parentName:"ul"},"Give the body a new background color."),(0,i.kt)("li",{parentName:"ul"},"Find the exact object type (Web API interface) of the body element using ",(0,i.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString.call();"),"."),(0,i.kt)("li",{parentName:"ul"},"Change the hyperlink to point to a new website other than allrecipes.com."),(0,i.kt)("li",{parentName:"ul"},"Add a class attribute with a random value to the H1 element using a method. ")),(0,i.kt)("p",null,"Switch who's driving and observing, and complete the remaining prompts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the font size of the first list item in the unordered list element."),(0,i.kt)("li",{parentName:"ul"},"Set the text of the H1 element to a new title."),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"alt")," attribute for the image."),(0,i.kt)("li",{parentName:"ul"},"Find the exact object type (Web API interface) of the image element using ",(0,i.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString.call();"),"."),(0,i.kt)("li",{parentName:"ul"},"Use a method to remove the class attribute that was added to the H1 element."),(0,i.kt)("li",{parentName:"ul"},"Update the inline styles for the ",(0,i.kt)("inlineCode",{parentName:"li"},"<body>")," to change the font weight to the value ",(0,i.kt)("inlineCode",{parentName:"li"},'"700"'),". ")),(0,i.kt)("p",null,"Bonus:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Review this documentation from ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/jsref/dom_obj_style.asp"},"W3Schools that lists all ",(0,i.kt)("inlineCode",{parentName:"a"},"style")," object properties")," and apply a new style to any element.")))}u.isMDXComponent=!0}}]);