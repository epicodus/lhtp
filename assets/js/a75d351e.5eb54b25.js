"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},42900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"4. PRACTICE: Cascading",id:"practice_cascading",slug:"practice_cascading",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/1_git_html_and_css/3j_classwork_practice_cascading.md"},l=void 0,o={unversionedId:"test_intro_2/git_html_and_css/practice_cascading",id:"test_intro_2/git_html_and_css/practice_cascading",title:"4. PRACTICE: Cascading",description:"Goal",source:"@site/docs/test_intro_2/1_git_html_and_css/3j_classwork_practice_cascading.md",sourceDirName:"test_intro_2/1_git_html_and_css",slug:"/test_intro_2/git_html_and_css/practice_cascading",permalink:"/lhtp/test_intro_2/git_html_and_css/practice_cascading",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{title:"4. PRACTICE: Cascading",id:"practice_cascading",slug:"practice_cascading",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"exercise",url:"https://github.com/epicodus-classroom/test-intro-2/blob/main/1_git_html_and_css/3j_classwork_practice_cascading.md"},sidebar:"test_intro_2",previous:{title:"3. Cascading",permalink:"/lhtp/test_intro_2/git_html_and_css/cascading"},next:{title:"5. Video Recap: Core CSS Concepts and Debugging",permalink:"/lhtp/test_intro_2/git_html_and_css/video_recap_core_css_concepts_and_debugging"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Animal Shelter Website",id:"animal-shelter-website",level:3},{value:"Further Exploration",id:"further-exploration",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:"),"   In the Cascading lesson, we learned:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Styles can be inherited by elements nested within other elements"),(0,r.kt)("li",{parentName:"ul"},"In the CSS stylesheet, ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," can be used to style the entire page"),(0,r.kt)("li",{parentName:"ul"},"Elements within other elements are known as ",(0,r.kt)("strong",{parentName:"li"},"child")," elements"),(0,r.kt)("li",{parentName:"ul"},"The most specific CSS rule takes precedence"),(0,r.kt)("li",{parentName:"ul"},"Avoid inline styling because it invalidates the power of CSS")),(0,r.kt)("p",null,"Now, let's put these concepts to practice. In this exercise we will continue to practice everything we've learned thus far while simultaneously exploring cascading."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are the rules of specificity? How do they affect CSS selectors?"),(0,r.kt)("li",{parentName:"ul"},"Why is inline CSS less preferable than CSS stylesheets?"),(0,r.kt)("li",{parentName:"ul"},"How does CSS inheritance work?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"animal-shelter-website"},"Animal Shelter Website"),(0,r.kt)("p",null,"Now is your turn to practice with inheritance and cascading styles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new web page for an animal shelter. List out the animals available to be adopted, including pictures and descriptions of each animal. Have at least 3-5 animals listed. Don't forget to set up a git repository, make frequent commits and push to a remote repository on GitHub."),(0,r.kt)("li",{parentName:"ul"},'Display each animal\'s "profile" in a column.'),(0,r.kt)("li",{parentName:"ul"},"Change the styles of elements nested within the columns using the idea of cascading."),(0,r.kt)("li",{parentName:"ul"},"Find other places in your web pages where you can change elements on the page according to cascading precedence."),(0,r.kt)("li",{parentName:"ul"},"Center some elements on the page.")),(0,r.kt)("h3",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"},"CSS reference")," on the Mozilla Developer Network for ideas about what selectors and properties you can change with CSS."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"While there are several more activities for today, this is the project we will peer code review at the end of class today.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is a custom-made stylesheet that uses cascading, the box model, and floats included?"),(0,r.kt)("li",{parentName:"ul"},"Is the indentation and spacing of HTML and CSS accurate?"),(0,r.kt)("li",{parentName:"ul"},'Are commits made regularly with clear messages that finish the phrase "It will..."?'),(0,r.kt)("li",{parentName:"ul"},"What was done particularly well? And/or what advice do you have for the other pair?")))}u.isMDXComponent=!0}}]);