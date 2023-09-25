"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[30150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Practice: Adding and Removing HTML Elements",id:"practice_adding_and_removing_html_elements",slug:"practice_adding_and_removing_html_elements",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1a_classwork_practice_adding_and_removing_html_elements.md"},o=void 0,l={unversionedId:"introduction_to_programming_classic/arrays-and-looping/practice_adding_and_removing_html_elements",id:"introduction_to_programming_classic/arrays-and-looping/practice_adding_and_removing_html_elements",title:"Practice: Adding and Removing HTML Elements",description:"Goal",source:"@site/docs/introduction_to_programming_classic/3_arrays-and-looping/1a_classwork_practice_adding_and_removing_html_elements.md",sourceDirName:"introduction_to_programming_classic/3_arrays-and-looping",slug:"/introduction_to_programming_classic/arrays-and-looping/practice_adding_and_removing_html_elements",permalink:"/introduction_to_programming_classic/arrays-and-looping/practice_adding_and_removing_html_elements",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Practice: Adding and Removing HTML Elements",id:"practice_adding_and_removing_html_elements",slug:"practice_adding_and_removing_html_elements",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1a_classwork_practice_adding_and_removing_html_elements.md"},sidebar:"introduction_to_programming_classic",previous:{title:"Journal #3",permalink:"/introduction_to_programming_classic/arrays-and-looping/journal_3"},next:{title:"Practice: JavaScript Arrays",permalink:"/introduction_to_programming_classic/arrays-and-looping/practice_javascript_arrays"}},s={},d=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Website Recreation",id:"website-recreation",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:")," In the lessons on adding and removing HTML elements, we learned how to use 6 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"document.createElement()")," to create new HTML elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Element.append()")," to add text to an HTML element, or to add an element inside and at the end of another element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Element.prepend()")," to add an HTML element to the beginning and inside of an element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Element.after()")," to add an element after an HTML element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Element.before()")," to add an element before an HTML element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Element.remove()")," to remove the HTML element that the method is called on.")),(0,r.kt)("p",null,"Familiarize yourself with these methods by completing the exercise below."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we want to populate an ordered list element in the DOM, which methods could we use? "),(0,r.kt)("li",{parentName:"ul"},"If we wanted to add three paragraph elements with the same text to the DOM (meaning they are identical-looking elements), do we need to create three separate paragraph elements, or can we reuse the same elements three times? ")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"website-recreation"},"Website Recreation"),(0,r.kt)("p",null,"Recreate the following HTML using only JavaScript and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),' methods we learned about in the "Adding and Removing HTML elements" lesson. (Keep reading for further instructions.)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Webpage Recreation Practice</title>\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <h1>Webpage Recreation Practice</h1>\n  <p>The HTML of this webpage was created with JavaScript.</p>\n  <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org" style={{width:\'50%%\'}} />\n  <h1>Facts about the Multicolored Tanager</h1>\n  <ul>\n    <li>It is endemic to the mountains of Colombia.</li>\n    <li>It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.</li>\n  </ul>\n  <h2>Source</h2>\n  <a href="https://en.wikipedia.org/wiki/Multicoloured_tanager">Wikipedia</a>\n</body>\n</html>\n')),(0,r.kt)("p",null,"Start by creating a project with the following file and folder structure. You can name your project whatever you prefer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"website-recreation-practice\n|_ js\n  |_ scripts.js\n|_ index.html\n|_ README.md\n")),(0,r.kt)("p",null,"Here's what you should have in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," to start:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Webpage Recreation Practice</title>\n  <script src="js/scripts.js"><\/script>\n</head>\n<body>\n  <h1>Favorite Things!</h1>\n</body>\n</html>\n')),(0,r.kt)("p",null,"When you are ready to begin writing JavaScript, start by setting up a ",(0,r.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler in ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),". Remember: all code that accesses or manipulates the DOM needs to be called inside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),' "load" event handler. Why? That\'s because we need to ',(0,r.kt)("strong",{parentName:"p"},"wait")," to run our DOM manipulating code until ",(0,r.kt)("strong",{parentName:"p"},"after")," our webpage has loaded all of its HTML (and other resources). "),(0,r.kt)("p",null,'Next, start by removing the H1 tag "Favorite Things!" from the DOM \u2014 that\'s not what this website is about. '),(0,r.kt)("p",null,"Then, in any order that you prefer, recreate the webpage's HTML in ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts.js"),' so that it contains all of the HTML listed in the first example. Use the DevTools console to try out code, and reference the "Adding and Removing HTML Elements" lesson as needed.'))}p.isMDXComponent=!0}}]);