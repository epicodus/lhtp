"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[97620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"4. Practice: Cascading",id:"practice_cascading",slug:"practice_cascading",hide_table_of_contents:!0,sidebar_position:51,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/3j_classwork_practice_cascading.md"},o=void 0,l={unversionedId:"introduction_to_programming/git-html-and-css/practice_cascading",id:"introduction_to_programming/git-html-and-css/practice_cascading",title:"4. Practice: Cascading",description:"Goal",source:"@site/docs/introduction_to_programming/1_git-html-and-css/3j_classwork_practice_cascading.md",sourceDirName:"introduction_to_programming/1_git-html-and-css",slug:"/introduction_to_programming/git-html-and-css/practice_cascading",permalink:"/lhtp/introduction_to_programming/git-html-and-css/practice_cascading",draft:!1,tags:[],version:"current",sidebarPosition:51,frontMatter:{title:"4. Practice: Cascading",id:"practice_cascading",slug:"practice_cascading",hide_table_of_contents:!0,sidebar_position:51,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/3j_classwork_practice_cascading.md"},sidebar:"introduction_to_programming",previous:{title:"3. Cascading",permalink:"/lhtp/introduction_to_programming/git-html-and-css/cascading"},next:{title:"5. Video Recap: Core CSS Concepts and Debugging",permalink:"/lhtp/introduction_to_programming/git-html-and-css/video_recap_core_css_concepts_and_debugging"}},c={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Animal Shelter Website",id:"animal-shelter-website",level:3},{value:"Further Exploration",id:"further-exploration",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goal:"),"   In the Cascading lesson, we learned:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Styles can be inherited by elements nested within other elements"),(0,r.kt)("li",{parentName:"ul"},"In the CSS stylesheet, ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," can be used to style the entire page"),(0,r.kt)("li",{parentName:"ul"},"Elements within other elements are known as ",(0,r.kt)("strong",{parentName:"li"},"child")," elements"),(0,r.kt)("li",{parentName:"ul"},"The most specific CSS rule takes precedence"),(0,r.kt)("li",{parentName:"ul"},"Avoid inline styling because it invalidates the power of CSS")),(0,r.kt)("p",null,"Now, let's put these concepts to practice. In this exercise we will continue to practice everything we've learned thus far while simultaneously exploring cascading."),(0,r.kt)("h2",{id:"warm-up"},"Warm Up"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are the rules of specificity? How do they affect CSS selectors?"),(0,r.kt)("li",{parentName:"ul"},"Why is inline CSS less preferable than CSS stylesheets?"),(0,r.kt)("li",{parentName:"ul"},"How does CSS inheritance work?")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"animal-shelter-website"},"Animal Shelter Website"),(0,r.kt)("p",null,"Now is your turn to practice with inheritance and cascading styles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new web page for an animal shelter. List out the animals available to be adopted, including pictures and descriptions of each animal. Have at least 3-5 animals listed. Don't forget to set up a git repository, make frequent commits and push to a remote repository on GitHub."),(0,r.kt)("li",{parentName:"ul"},'Display each animal\'s "profile" in a column.'),(0,r.kt)("li",{parentName:"ul"},"Change the styles of elements nested within the columns using the idea of cascading."),(0,r.kt)("li",{parentName:"ul"},"Find other places in your web pages where you can change elements on the page according to cascading precedence."),(0,r.kt)("li",{parentName:"ul"},"Center some elements on the page.")),(0,r.kt)("h3",{id:"further-exploration"},"Further Exploration"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"},"CSS reference")," on the Mozilla Developer Network for ideas about what selectors and properties you can change with CSS."),(0,r.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"While there are several more activities for today, this is the project we will peer code review at the end of class today.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is a custom-made stylesheet that uses cascading, the box model, and floats included?"),(0,r.kt)("li",{parentName:"ul"},"Is the indentation and spacing of HTML and CSS accurate?"),(0,r.kt)("li",{parentName:"ul"},'Are commits made regularly with clear messages that finish the phrase "It will..."?'),(0,r.kt)("li",{parentName:"ul"},"What was done particularly well? And/or what advice do you have for the other pair?")))}d.isMDXComponent=!0}}]);