"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[82085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,_=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(_,o(o({ref:t},p),{},{components:r})):n.createElement(_,o({ref:t},p))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"NaN. Practice: Accessing HTML Element Attributes and Properties in the DOM",id:"practice_accessing_html_element_attributes_and_properties_in_the_dom",slug:"practice_accessing_html_element_attributes_and_properties_in_the_dom",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/2i_classwork_accessing_DOM_element_attributes_and_properties.md"},o=void 0,s={unversionedId:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",id:"introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",title:"NaN. Practice: Accessing HTML Element Attributes and Properties in the DOM",description:"Goal: Practice accessing DOM element attributes by using document methods and dot notation to access the properties that we learned about in previous lessons.",source:"@site/docs/introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2/2i_classwork_accessing_DOM_element_attributes_and_properties.md",sourceDirName:"introduction_to_programming_part_time/4_javascript-and-web-browsers-part-2",slug:"/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/practice_accessing_html_element_attributes_and_properties_in_the_dom",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"NaN. Practice: Accessing HTML Element Attributes and Properties in the DOM",id:"practice_accessing_html_element_attributes_and_properties_in_the_dom",slug:"practice_accessing_html_element_attributes_and_properties_in_the_dom",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4_javascript-and-web-browsers-part-2/2i_classwork_accessing_DOM_element_attributes_and_properties.md"},sidebar:"introduction_to_programming_part_time",previous:{title:"NaN. Understanding Web APIs: Interfaces (Object Types) and Inheritance",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/understanding_web_apis_interfaces_object_types_and_inheritance"},next:{title:"NaN. Function Expressions",permalink:"/lhtp/introduction_to_programming_part_time/javascript-and-web-browsers-part-2/function_expressions"}},l={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Cookie Recipe",id:"cookie-recipe",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:")," Practice accessing DOM element attributes by using ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," methods and dot notation to access the properties that we learned about in previous lessons."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When we run our JavaScript in our browser, what is JavaScript's global object set to? "),(0,a.kt)("li",{parentName:"ul"},"Why can we write simply ",(0,a.kt)("inlineCode",{parentName:"li"},"document.querySelector()")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"window.document.querySelector()"),"?"),(0,a.kt)("li",{parentName:"ul"},"What is the data type of HTML elements in the DOM?"),(0,a.kt)("li",{parentName:"ul"},"What are Web APIs?"),(0,a.kt)("li",{parentName:"ul"},"What is an interface?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cookie-recipe"},"Cookie Recipe"),(0,a.kt)("p",null,'Clone down the Cookie Recipe HTML and open it in your web browser. Then, use the DevTools console to practice accessing different DOM elements and their attributes by working through each prompt below. Reference the previous lesson "Accessing HTML Element Attributes in the DOM" as needed. You should be able to complete all of the following prompts with just the information in the lesson. '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get the text within the ",(0,a.kt)("inlineCode",{parentName:"li"},"<em>")," tag of the paragraph element."),(0,a.kt)("li",{parentName:"ul"},"Get the value for the class attribute of the ordered list. Then, give the class attribute a new value."),(0,a.kt)("li",{parentName:"ul"},"Give the body a new background color."),(0,a.kt)("li",{parentName:"ul"},"Find the exact object type (Web API interface) of the body element using ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString.call();"),"."),(0,a.kt)("li",{parentName:"ul"},"Change the hyperlink to point to a new website other than allrecipes.com."),(0,a.kt)("li",{parentName:"ul"},"Add a class attribute with a random value to the H1 element using a method. ")),(0,a.kt)("p",null,"Switch who's driving and observing, and complete the remaining prompts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the font size of the first list item in the unordered list element."),(0,a.kt)("li",{parentName:"ul"},"Set the text of the H1 element to a new title."),(0,a.kt)("li",{parentName:"ul"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"alt")," attribute for the image."),(0,a.kt)("li",{parentName:"ul"},"Find the exact object type (Web API interface) of the image element using ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString.call();"),"."),(0,a.kt)("li",{parentName:"ul"},"Use a method to remove the class attribute that was added to the H1 element."),(0,a.kt)("li",{parentName:"ul"},"Update the inline styles for the ",(0,a.kt)("inlineCode",{parentName:"li"},"<body>")," to change the font weight to the value ",(0,a.kt)("inlineCode",{parentName:"li"},'"700"'),". ")),(0,a.kt)("p",null,"Bonus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Review this documentation from ",(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/jsref/dom_obj_style.asp"},"W3Schools that lists all ",(0,a.kt)("inlineCode",{parentName:"a"},"style")," object properties")," and apply a new style to any element.")))}m.isMDXComponent=!0}}]);