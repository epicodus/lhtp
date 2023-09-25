"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,w=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(w,a(a({ref:t},l),{},{components:n})):r.createElement(w,a({ref:t},l))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Practice: Accessing Window Properties",id:"practice_accessing_window_properties",slug:"practice_accessing_window_properties",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/1g_practice_classwork_accessing_window_properties.md"},a=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_accessing_window_properties",id:"introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_accessing_window_properties",title:"Practice: Accessing Window Properties",description:"Goal",source:"@site/docs/introduction_to_programming_part_time_evening/3_javascript-and-web-browsers/1g_practice_classwork_accessing_window_properties.md",sourceDirName:"introduction_to_programming_part_time_evening/3_javascript-and-web-browsers",slug:"/introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_accessing_window_properties",permalink:"/lhtp/introduction_to_programming_part_time_evening/javascript-and-web-browsers/practice_accessing_window_properties",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Practice: Accessing Window Properties",id:"practice_accessing_window_properties",slug:"practice_accessing_window_properties",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3_javascript-and-web-browsers/1g_practice_classwork_accessing_window_properties.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Web APIs",permalink:"/lhtp/introduction_to_programming_part_time_evening/javascript-and-web-browsers/web_apis"},next:{title:"Debugging in JavaScript: Reading Console Errors",permalink:"/lhtp/introduction_to_programming_part_time_evening/javascript-and-web-browsers/debugging_in_javascript_reading_console_errors"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Accessing <code>window</code> Properties",id:"accessing-window-properties",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),' In the "Accessing Window Properties" lesson, we learned:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object has properties with different values: primitives, objects, or methods. We can explore these in the DevTools console and we can use JavaScript to manipulate that data."),(0,i.kt)("li",{parentName:"ul"},"We use dot notation to access ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," properties, like ",(0,i.kt)("inlineCode",{parentName:"li"},"window.innerHeight")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"window.open()"),". "),(0,i.kt)("li",{parentName:"ul"},"When a ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," property itself is an object with properties, we can chain dot notation to access the nested object's property. A good example of this is ",(0,i.kt)("inlineCode",{parentName:"li"},"window.location.href"),", where we're accessing the ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object's property called ",(0,i.kt)("inlineCode",{parentName:"li"},"location"),", and then we're accessing the ",(0,i.kt)("inlineCode",{parentName:"li"},"location")," object's property called ",(0,i.kt)("inlineCode",{parentName:"li"},"href"),".")),(0,i.kt)("p",null,"Begin familiarizing yourself with the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object by completing the following exercises in the DevTools console. "),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What does the ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object represent? What sort of information can we get from it?"),(0,i.kt)("li",{parentName:"ul"},"What is a property?"),(0,i.kt)("li",{parentName:"ul"},"What is dot notation and how do we use it?"),(0,i.kt)("li",{parentName:"ul"},"What are Web APIs? What is an API?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"accessing-window-properties"},"Accessing ",(0,i.kt)("inlineCode",{parentName:"h3"},"window")," Properties"),(0,i.kt)("p",null,"Access the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object to find the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"innerHeight")," of the window."),(0,i.kt)("li",{parentName:"ul"},"Find the ",(0,i.kt)("inlineCode",{parentName:"li"},"href")," of the webpage you are currently on."),(0,i.kt)("li",{parentName:"ul"},"Access the ",(0,i.kt)("inlineCode",{parentName:"li"},"window.screen")," property in your console, and expand the object so that you can see the properties. Then, access the ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," property of the ",(0,i.kt)("inlineCode",{parentName:"li"},"screen")," object. Turn the ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," property into a string.")),(0,i.kt)("p",null,"Access the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object to call the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"innerWidth")," of the window."),(0,i.kt)("li",{parentName:"ul"},"Search for the ",(0,i.kt)("inlineCode",{parentName:"li"},"window.scrollTo()")," method on MDN. Read the description and the examples, and try using it in the DevTools console."),(0,i.kt)("li",{parentName:"ul"},"Call on the method in ",(0,i.kt)("inlineCode",{parentName:"li"},"window.location"),' that reloads the page you are on. If you can\'t remember the name of the method, review the lesson "Accessing Window Properties" or try researching on MDN.')))}u.isMDXComponent=!0}}]);