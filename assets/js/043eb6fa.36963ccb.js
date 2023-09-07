"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[39782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"8. Practice: Styling Text",id:"practice_styling_text",slug:"practice_styling_text",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2d_classwork_practice_styling_text.md"},l=void 0,o={unversionedId:"introduction_to_programming/git-html-and-css/practice_styling_text",id:"introduction_to_programming/git-html-and-css/practice_styling_text",title:"8. Practice: Styling Text",description:"Goal:",source:"@site/docs/introduction_to_programming/1_git-html-and-css/2d_classwork_practice_styling_text.md",sourceDirName:"introduction_to_programming/1_git-html-and-css",slug:"/introduction_to_programming/git-html-and-css/practice_styling_text",permalink:"/lhtp/introduction_to_programming/git-html-and-css/practice_styling_text",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"8. Practice: Styling Text",id:"practice_styling_text",slug:"practice_styling_text",hide_table_of_contents:!0,sidebar_position:23,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_git-html-and-css/2d_classwork_practice_styling_text.md"},sidebar:"introduction_to_programming",previous:{title:"7. Debugging HTML and CSS",permalink:"/lhtp/introduction_to_programming/git-html-and-css/debugging_html_and_css"},next:{title:"9. Git Branching",permalink:"/lhtp/introduction_to_programming/git-html-and-css/git_branching"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Styling Practice",id:"styling-practice",level:3},{value:"Styling <code>my-first-webpage</code>",id:"styling-my-first-webpage",level:4},{value:"Adding <code>favorite-places</code>",id:"adding-favorite-places",level:4},{value:"Optional Practice: Add Styles to Pet Website",id:"optional-practice-add-styles-to-pet-website",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Goal:"),"\nIn the Styling text and debugging lessons, we learned:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to set up a ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.css")," file and link to it in our HTML page"),(0,a.kt)("li",{parentName:"ul"},"CSS rules, selectors and properties"),(0,a.kt)("li",{parentName:"ul"},"Hexadecimal codes"),(0,a.kt)("li",{parentName:"ul"},"Basic debugging techniques")),(0,a.kt)("p",null,"Begin taking your HTML to the next level by implementing CSS. Practice targeting elements for CSS rules, and trying out different CSS properties."),(0,a.kt)("h2",{id:"warm-up"},"Warm Up"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What are inline styles and how do they differ from using an external stylesheet to set styles?"),(0,a.kt)("li",{parentName:"ul"},"What are the benefits of using an external stylesheet?"),(0,a.kt)("li",{parentName:"ul"},"How do we select a specific element of our webpage to style with CSS?"),(0,a.kt)("li",{parentName:"ul"},"Name four CSS properties."),(0,a.kt)("li",{parentName:"ul"},"Where should a CSS stylesheet reside?"),(0,a.kt)("li",{parentName:"ul"},"How do we apply the styles created in our ",(0,a.kt)("inlineCode",{parentName:"li"},".css")," stylesheet to our ",(0,a.kt)("inlineCode",{parentName:"li"},".html")," web page?")),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"styling-practice"},"Styling Practice"),(0,a.kt)("p",null,"Now it's your turn! To access the JavaScript Console from a Chrome browser just type ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+ Shift + J")," (on a Windows keyboard, like those in the Epicodus classroom), or ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Option + J")," on a Mac keyboard. Don't forget to make commits and push those changes to the respective remote repositories on GitHub."),(0,a.kt)("h4",{id:"styling-my-first-webpage"},"Styling ",(0,a.kt)("inlineCode",{parentName:"h4"},"my-first-webpage")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you haven't already done so, follow along with the ",(0,a.kt)("em",{parentName:"li"},"Styling Text")," lesson to add styles to your ",(0,a.kt)("inlineCode",{parentName:"li"},"my-first-webpage")," project. Make sure that the CSS stylesheet is in a sub-folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," and that you correctly link the HTML document to the stylesheet (make sure the path to the file is correct!)."),(0,a.kt)("li",{parentName:"ul"},"Add a single CSS rule that makes the main heading (",(0,a.kt)("inlineCode",{parentName:"li"},"<h1>"),") red. Refresh the page in the browser to verify that the stylesheet is linked correctly. If it doesn't change the page, make sure that you've put the CSS file in the correct folder, and specified the right path to the CSS file. Open the JavaScript console to debug if necessary."),(0,a.kt)("li",{parentName:"ul"},"Now, use the following properties in your CSS: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"color"),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text-align"),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"font-style"),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"font-weight"),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"font-family"),", "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"font-size"),", and "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"line-height"),".")))),(0,a.kt)("h4",{id:"adding-favorite-places"},"Adding ",(0,a.kt)("inlineCode",{parentName:"h4"},"favorite-places")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next, make a new webpage called ",(0,a.kt)("inlineCode",{parentName:"li"},"favorite-places.html")," in the same project folder of ",(0,a.kt)("inlineCode",{parentName:"li"},"my-first-webpage")," and make it about your favorite places to visit. Add images, links and inline styling."),(0,a.kt)("li",{parentName:"ul"},"Switch to your ",(0,a.kt)("inlineCode",{parentName:"li"},"favorite-places.html")," page. Make another stylesheet (make sure to name it differently than the ",(0,a.kt)("inlineCode",{parentName:"li"},"my-first-webpage.html")," stylesheet!) and apply CSS rules."),(0,a.kt)("li",{parentName:"ul"},"Make a new stylesheet for ",(0,a.kt)("em",{parentName:"li"},"both")," your ",(0,a.kt)("inlineCode",{parentName:"li"},"my-first-webpage.html")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"favorite-places.html"),". Remove the other stylesheets and link to the single stylesheet from both pages. You should have a consistent style between the two documents.")),(0,a.kt)("h3",{id:"optional-practice-add-styles-to-pet-website"},"Optional Practice: Add Styles to Pet Website"),(0,a.kt)("p",null,"Update your cat's homepage or dog's blog to have some styles. If you haven't created a pet website yet, go ahead and do that."),(0,a.kt)("p",null,"Be sure to make commits and push those commits to GitHub as you are working on your pages."))}u.isMDXComponent=!0}}]);