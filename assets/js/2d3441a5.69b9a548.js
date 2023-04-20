"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[6506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"4. PRACTICE: Calculator and More",id:"practice_calculator_and_more",slug:"practice_calculator_and_more",hide_table_of_contents:!0,sidebar_position:70,day:"thursday",type:"exercise"},l=void 0,i={unversionedId:"javascript_and_web_browsers/practice_calculator_and_more",id:"javascript_and_web_browsers/practice_calculator_and_more",title:"4. PRACTICE: Calculator and More",description:"Goal: Explore using a variety of form input types, branching, and event listeners by completing the exercises listed below.",source:"@site/docs/2_javascript_and_web_browsers/4d_classwork_practice_more_branching_form_input_types.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/practice_calculator_and_more",permalink:"/lhtp/javascript_and_web_browsers/practice_calculator_and_more",draft:!1,tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"4. PRACTICE: Calculator and More",id:"practice_calculator_and_more",slug:"practice_calculator_and_more",hide_table_of_contents:!0,sidebar_position:70,day:"thursday",type:"exercise"},sidebar:"docs",previous:{title:"3. Calculator with Forms and Branching",permalink:"/lhtp/javascript_and_web_browsers/calculator_with_forms_and_branching"},next:{title:"5. Function Scope Versus Block Scope",permalink:"/lhtp/javascript_and_web_browsers/function_scope_versus_block_scope"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Calculator From Scratch",id:"calculator-from-scratch",level:3},{value:"Character Builder",id:"character-builder",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:")," Explore using a variety of form input types, branching, and event listeners by completing the exercises listed below."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How do we gather form input from a select (i.e.: dropdown) box? How does this differ from a basic input (i.e.: text) field?"),(0,a.kt)("li",{parentName:"ul"},"What does ",(0,a.kt)("inlineCode",{parentName:"li"},":checked")," refer to when gathering input from radio buttons?"),(0,a.kt)("li",{parentName:"ul"},"If we include ",(0,a.kt)("inlineCode",{parentName:"li"},'type="number"')," in an HTML form field, do we still need to use ",(0,a.kt)("inlineCode",{parentName:"li"},"parseInt()")," when retrieving the value (assuming we need a number)?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Meet the goal by completing one of the practice prompts below. Your project must use: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event listeners"),(0,a.kt)("li",{parentName:"ul"},"function declarations"),(0,a.kt)("li",{parentName:"ul"},"new form input types"),(0,a.kt)("li",{parentName:"ul"},"branching")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'If you are feeling less comfortable with these topics, you should choose the "calculator from scratch" project. If you are feeling more comfortable with these topics or want to stretch your comfort zone, build the "character builder" project.')),(0,a.kt)("p",null,"Make sure to budget time for any remaining lessons or practice prompts listed for this class session."),(0,a.kt)("h3",{id:"calculator-from-scratch"},"Calculator From Scratch"),(0,a.kt)("p",null,"Rebuild the calculator project from scratch ",(0,a.kt)("strong",{parentName:"p"},"without"),' referencing the previous lesson "Calculator with Forms and Branching". You may reference the lessons on branching, event listening, and form input types as needed. This prompt is meant to be a safe option to practice the new topics from today. '),(0,a.kt)("p",null,'If you really get stuck, you still should not reference the "Calculator with Forms and Branching" lesson. Instead, make use of the debugging tools you\'ve learned about so far: reading console errors and using ',(0,a.kt)("inlineCode",{parentName:"p"},"console.log()"),". Or, review previous lessons, research online, and ask for help from a peer or instructor. "),(0,a.kt)("h3",{id:"character-builder"},"Character Builder"),(0,a.kt)("p",null,"Create a webpage that helps users create a character for a game \u2014 any game! Ask the user to fill in a form with their character's name, and any information you feel like is relevant to the game. Use branching to determine some aspect of the character, like their personality or their strength."),(0,a.kt)("p",null,"Make sure to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Include all form input types we've covered so far (except checkboxes)"),(0,a.kt)("li",{parentName:"ul"},"Use event listeners with function declarations"),(0,a.kt)("li",{parentName:"ul"},"Use branching \u2014 note that your branching logic to determine the result does not need to be complicated.")),(0,a.kt)("p",null,"When you run into an bug, review your console for any errors and use ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log()")," to log any values. If you are still stuck after that, consider reviewing lessons, researching online, or asking for help from another pair or your instructor."))}d.isMDXComponent=!0}}]);