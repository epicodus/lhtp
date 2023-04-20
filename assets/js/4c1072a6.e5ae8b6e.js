"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,_=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(_,o(o({ref:t},c),{},{components:n})):a.createElement(_,o({ref:t},c))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"19. PRACTICE: Assignment, Comparison, and Equality Operators",id:"practice_assignment_comparison_and_equality_operators",slug:"practice_assignment_comparison_and_equality_operators",hide_table_of_contents:!0,sidebar_position:19,day:"weekend",type:"exercise"},o=void 0,l={unversionedId:"javascript_and_web_browsers/practice_assignment_comparison_and_equality_operators",id:"javascript_and_web_browsers/practice_assignment_comparison_and_equality_operators",title:"19. PRACTICE: Assignment, Comparison, and Equality Operators",description:"Goal",source:"@site/docs/2_javascript_and_web_browsers/0s_classwork_practice_assignment_comparison_and_equality_operators.md",sourceDirName:"2_javascript_and_web_browsers",slug:"/javascript_and_web_browsers/practice_assignment_comparison_and_equality_operators",permalink:"/lhtp/javascript_and_web_browsers/practice_assignment_comparison_and_equality_operators",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"19. PRACTICE: Assignment, Comparison, and Equality Operators",id:"practice_assignment_comparison_and_equality_operators",slug:"practice_assignment_comparison_and_equality_operators",hide_table_of_contents:!0,sidebar_position:19,day:"weekend",type:"exercise"},sidebar:"docs",previous:{title:"18. Assignment, Comparison, and Equality Operators",permalink:"/lhtp/javascript_and_web_browsers/assignment_comparison_and_equality_operators"},next:{title:"20. Data Types: Detection, Conversion, and Review",permalink:"/lhtp/javascript_and_web_browsers/data_types_detection_conversion_and_review"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Assignment &amp; Comparison Practice",id:"assignment--comparison-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:"),"  In the Assignment, Comparison, and Equality Operators lesson, we learned:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The difference between ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"===")),(0,r.kt)("li",{parentName:"ul"},"The assignment operators for each of the mathematical functions: ",(0,r.kt)("inlineCode",{parentName:"li"},"+="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/=")),(0,r.kt)("li",{parentName:"ul"},"Comparison operators, including ",(0,r.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"li"},">"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<="),", and ",(0,r.kt)("inlineCode",{parentName:"li"},">=")),(0,r.kt)("li",{parentName:"ul"},"Equality operators, including ",(0,r.kt)("inlineCode",{parentName:"li"},"===")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"!=="))),(0,r.kt)("p",null,"Take time to practice using these operators by completing the exercises listed below."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the difference between a comparison operator and an assignment operator?"),(0,r.kt)("li",{parentName:"ul"},"What is a boolean? What does it represent?"),(0,r.kt)("li",{parentName:"ul"},"How is the ",(0,r.kt)("inlineCode",{parentName:"li"},"+=")," operator different from the ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," operator?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"assignment--comparison-practice"},"Assignment & Comparison Practice"),(0,r.kt)("p",null,"Practice assigning and comparing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set two variables equal to two different numbers. Use a comparison operator to compare these two variables. "),(0,r.kt)("li",{parentName:"ul"},"Change one of their values by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"+="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*="),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"/=")," operator. "),(0,r.kt)("li",{parentName:"ul"},"Then, compare their values again.")),(0,r.kt)("p",null,"If you are working with a pair, switch who's driving and observing and continue with this practice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try out the ",(0,r.kt)("inlineCode",{parentName:"li"},"<=")," and ",(0,r.kt)("inlineCode",{parentName:"li"},">=")," operators by comparing two numbers."),(0,r.kt)("li",{parentName:"ul"},"Try out using ",(0,r.kt)("inlineCode",{parentName:"li"},"===")," equality operator by comparing two strings."),(0,r.kt)("li",{parentName:"ul"},"Next, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"!==")," equality operator on two strings or numbers to get a ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," return value.")))}u.isMDXComponent=!0}}]);