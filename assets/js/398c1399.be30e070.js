"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(r,".").concat(u)]||c[u]||d[u]||i;return n?o.createElement(m,l(l({ref:t},h),{},{components:n})):o.createElement(m,l({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"24. Debugging HTML and CSS",id:"debugging_html_and_css",slug:"debugging_html_and_css",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"lesson"},l=void 0,s={unversionedId:"git_html_and_css/debugging_html_and_css",id:"git_html_and_css/debugging_html_and_css",title:"24. Debugging HTML and CSS",description:"Learning to debug is an essential skill to pick up early on. There are many debugging techniques. Here are a few tools that are very helpful for debugging HTML & CSS.",source:"@site/docs/1_git_html_and_css/2c_debugging_html_and_css.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/debugging_html_and_css",permalink:"/lhtp/git_html_and_css/debugging_html_and_css",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"24. Debugging HTML and CSS",id:"debugging_html_and_css",slug:"debugging_html_and_css",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"23. CSS: Styling Text and Best Practices",permalink:"/lhtp/git_html_and_css/css_styling_text_and_best_practices"},next:{title:"25. PRACTICE: Styling Text",permalink:"/lhtp/git_html_and_css/practice_styling_text"}},r={},p=[{value:"JavaScript Console",id:"javascript-console",level:2},{value:"The Elements Tab",id:"the-elements-tab",level:2},{value:"Editing CSS in the Browser",id:"editing-css-in-the-browser",level:3},{value:"Inspecting Elements",id:"inspecting-elements",level:3}],h={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Learning to debug is an essential skill to pick up early on. There are many debugging techniques. Here are a few tools that are very helpful for debugging HTML & CSS."),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/"},"Google Chrome")," at Epicodus so we will focus on Chrome's Developer Tools, also known as ",(0,a.kt)("strong",{parentName:"p"},"DevTools"),". Other browsers like Firefox also have developer tools. Feel free to look into these on your own if you are interested."),(0,a.kt)("h2",{id:"javascript-console"},"JavaScript Console"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In Chrome, click on the menu button. It's on the right side of the address bar and looks like \u2630 in older versions of Chrome or three vertical dots in newer versions. Click ",(0,a.kt)("em",{parentName:"p"},"More Tools")," and then click ",(0,a.kt)("em",{parentName:"p"},"Developer Tools"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/0l83gdisvi9o39z/open-dev-tools-2.gif?raw=1",alt:"GIF shows opening menu and clicking on Developer Tools."})),(0,a.kt)("p",null,"As a shortcut, you can also press ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Option + J")," ( ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows + Alt + J")," on Epicodus keyboards) to open DevTools."),(0,a.kt)("p",null,"Next, let's take a look at the DevTools window."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/r5zwzfjz1uv05y2/dev-tools-tab.png?raw=1",alt:"This image shows the DevTools tab."})),(0,a.kt)("p",null,"As the image above shows, there are a number of different tabs in the DevTools window. We will regularly use the Elements and Console tabs throughout the program. While the other tabs (such as Sources and Network) also contain useful information and can be helpful for debugging, we won't use them as much."),(0,a.kt)("p",null,"The Console tab is selected in the image above. This is the JavaScript console where all errors in our web page are logged. We aren't using JavaScript yet but the console will also show us descriptive errors that can be helpful now. For instance, if your CSS file isn't properly linked, you'll see an error message that looks like this one: "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/bod57ld8aw7lqqm/file-not-found-error.png?raw=1",alt:'Image shows a "Failed to load resource" error'})),(0,a.kt)("p",null,"The error reads ",(0,a.kt)("inlineCode",{parentName:"p"},"Failed to load resource: net::ERR_FILE_NOT_FOUND"),". Then, on the right side of the error message, it reads ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css:1"),". "),(0,a.kt)("p",null,"This is a very common error, especially for beginners. It simply states that a file can't be found. The name of the file is on the right side of the error message: ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css"),". There is also a line number to the right of the file name (",(0,a.kt)("inlineCode",{parentName:"p"},"1")," in this case). Sometimes this is helpful and correctly points to a line number in a file where an error can be found. Sometimes, it's not accurate because of the way Chrome compiles JavaScript. In this case, Chrome can't find a ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css")," file so the line number isn't relevant."),(0,a.kt)("p",null,"The error above can mean one of several things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file doesn't exist."),(0,a.kt)("li",{parentName:"ul"},"The file exists but there's a typo in either the file name or in the code referencing the file (for instance, if we'd accidentally named the file ",(0,a.kt)("inlineCode",{parentName:"li"},"style.css")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.css"),")."),(0,a.kt)("li",{parentName:"ul"},"The file exists but it's in a different directory than the one specified.")),(0,a.kt)("p",null,"You will likely see this error many times \u2014 not just as a student but even as an experienced developer. The exact same error will come up with other file types, too, not just CSS files. You can follow the steps above to fix the issue."),(0,a.kt)("h2",{id:"the-elements-tab"},"The Elements Tab"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can also see the elements on an individual page. Click on the Elements tab in DevTools and we'll see a list of all the elements ranging from ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," tags to ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),"s and so on."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/uzbaotp7646uomm/elements-tab.png?raw=1",alt:"Image shows the elements tab of a page."})),(0,a.kt)("p",null,"In the image above, the Elements tab is open. We've clicked on an unordered list element with a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumb"),". Clicking on this element highlights the actual element on the page."),(0,a.kt)("p",null,"We can see that this unordered list is a child of a ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),". We could also expand this class to see all of its children. In fact, another ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," class on the page has already been expanded to show its children \u2014 a group of ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," tags."),(0,a.kt)("p",null,"Finally, below the elements pane, there is another pane in the bottom right corner that show us exactly which CSS styles apply. These are applied from highest specificity to lowest. In the image above, the most specific CSS rule is ",(0,a.kt)("inlineCode",{parentName:"p"},"ul.breadcrumb"),", which has a property of ",(0,a.kt)("inlineCode",{parentName:"p"},"padding-left: 0;"),"."),(0,a.kt)("p",null,"The least specific rule is ",(0,a.kt)("inlineCode",{parentName:"p"},"ul, ol"),". Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-bottom")," property here is crossed out. This is because the rule has been overridden by the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-bottom")," property in the more specific CSS rule just above ",(0,a.kt)("inlineCode",{parentName:"p"},"ul, ol")," called ",(0,a.kt)("inlineCode",{parentName:"p"},".breadcrumb"),"."),(0,a.kt)("p",null,"As you can imagine, this is a great tool to debug CSS styles. If a style isn't showing up, it's possible that another rule is overriding it. The Styles pane will show this. It's also possible that a CSS property isn't being applied even though you think it is. The Styles pane is a great place to find out."),(0,a.kt)("h3",{id:"editing-css-in-the-browser"},"Editing CSS in the Browser"),(0,a.kt)("p",null,"Here's another really cool thing we can do \u2014 we can actively edit our CSS in the browser without changing it in our code. This allows us to experiment with changing styles. Check out the GIF below."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/jlhnhy40g1rz4kw/changing-styles-dev-tools.gif?raw=1",alt:"We alter the color of the title in the image."})),(0,a.kt)("p",null,"We've already highlighted the element that holds the tile \"Introduction to Programming / Getting Started at Epicodus / Learn How to Program.\" Let's say we want to see how this heading looks with a different color."),(0,a.kt)("p",null,"We can click the checkbox to the left of the property in the Styles pane. When the checkbox is clicked, the property is applied. When it's unclicked, the property is removed."),(0,a.kt)("p",null,"We can also update a property. In this case, we click on the color and change it to green."),(0,a.kt)("p",null,"We could even add a new property if we like \u2014 just start a new line in the CSS rule and add the property! (This isn't shown in the GIF above.)"),(0,a.kt)("p",null,"These changes aren't permanent \u2014 they are just revisions to the DOM we see. If we refresh the page, we'll see any changes we make are undone."),(0,a.kt)("p",null,"We can do this to ",(0,a.kt)("em",{parentName:"p"},"any")," webpage. Pick out a site you really like (or just do this lesson) and try changing some rules on your own. It's a great way to experiment!"),(0,a.kt)("h3",{id:"inspecting-elements"},"Inspecting Elements"),(0,a.kt)("p",null,"We can also inspect individual elements on a page. This trick is especially useful for debugging HTML and CSS. Let's take a look at the DevTools menu again. Start by clicking on the Elements tab (if you're not already on it)."),(0,a.kt)("p",null,"On the far left, we'll see a square with an arrow icon on it. The icon will generally be gray, but we can click on it to activate the inspect element tool. (It will turn blue when it's activated.) The GIF below shows the inspect element tool in action."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/mlk2vswtptpah8b/inspecting-element.gif?raw=1",alt:"Using the inspect element tool"})),(0,a.kt)("p",null,"Once we activate the tool, we can hover over any element on the page to see the CSS rules that apply to it. If you look at the graphic above, you'll see how the information changes as we hover over different elements. We see the new CSS rules on the left and we see the specific element on the right (in the Elements panel)."),(0,a.kt)("p",null,"As we can see, we can target specific elements either by clicking them in the Elements pane ",(0,a.kt)("em",{parentName:"p"},"or")," by clicking the inspect tool and then clicking on them in the DOM."))}d.isMDXComponent=!0}}]);