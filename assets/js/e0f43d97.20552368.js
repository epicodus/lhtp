"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20373],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(o),u=i,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||a;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},96403:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(87462),i=(o(67294),o(3905));const a={title:"Optional: VS Code with HTML",id:"optional-vs-code-with-html",slug:"optional-vs-code-with-html",hide_table_of_contents:!0,sidebar_position:34,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4m_html_with_vscode.md"},r=void 0,s={unversionedId:"introduction-to-programming-part-time/git-html-and-css-part-2/optional-vs-code-with-html",id:"introduction-to-programming-part-time/git-html-and-css-part-2/optional-vs-code-with-html",title:"Optional: VS Code with HTML",description:"Before we move on, let's cover a few basic tips and tricks for working with HTML in VS Code. This lesson is optional but the content here is highly recommended. The VS Code features mentioned below make it easier to work with HTML and other coding languages.",source:"@site/docs/introduction-to-programming-part-time/2_git-html-and-css-part-2/4m-html-with-vscode.md",sourceDirName:"introduction-to-programming-part-time/2_git-html-and-css-part-2",slug:"/introduction-to-programming-part-time/git-html-and-css-part-2/optional-vs-code-with-html",permalink:"/introduction-to-programming-part-time/git-html-and-css-part-2/optional-vs-code-with-html",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Optional: VS Code with HTML",id:"optional-vs-code-with-html",slug:"optional-vs-code-with-html",hide_table_of_contents:!0,sidebar_position:34,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4m_html_with_vscode.md"},sidebar:"introduction-to-programming-part-time",previous:{title:"Optional Practice: Recreate a Site with Bootstrap",permalink:"/introduction-to-programming-part-time/git-html-and-css-part-2/optional-practice-recreate-a-site-with-bootstrap"},next:{title:"Git, HTML, and CSS Independent Project",permalink:"/introduction-to-programming-part-time/git-html-and-css-part-2/git-html-and-css-independent-project"}},l={},d=[{value:"Folding Code",id:"folding-code",level:3},{value:"Highlighting Divs",id:"highlighting-divs",level:3},{value:"Intellisense",id:"intellisense",level:3}],h={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we move on, let's cover a few basic tips and tricks for working with HTML in VS Code. This lesson is optional but the content here is highly recommended. The VS Code features mentioned below make it easier to work with HTML and other coding languages."),(0,i.kt)("p",null,"If we look at the HTML in our ",(0,i.kt)("inlineCode",{parentName:"p"},"section-in-review")," project, it's starting to get a bit overwhelming. It's often frustrating to add rows and columns to HTML that already exists, and it can also be challenging to get our indentation lined up and make sure we have the correct number of tags and closing tags \u2014 and that all of those tags are in the right places."),(0,i.kt)("p",null,"VS Code is designed to make our lives easier as developers. Here are a few things we can do to make HTML easier to work with."),(0,i.kt)("h3",{id:"folding-code"},"Folding Code"),(0,i.kt)("p",null,"When we are working with longer sections of code, it's helpful to be able to hide code we don't need at the moment. This can make the code less overwhelming to look at and work with."),(0,i.kt)("p",null,'We can "fold" sections of code in VS Code, as this GIF shows.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/folding-code.gif",alt:"Fold code by clicking on the arrow between the line number and the code."})),(0,i.kt)("p",null,"In the GIF above, we fold sections of code (code enclosed in tags). To do this, we hover over the gutter between the line numbers and the code. This will show arrows for each section of code."),(0,i.kt)("p",null,"If the arrow is pointing down, that means the section of code is fully expanded and showing. If the arrow is pointing to the right, that means the code is hidden, though the first line of the hidden section will be showing. This line will be highlighted in blue and there will also be ellipses to the right of the line to show that the section is hidden. This can be helpful when we accidentally hide our code and wonder where it went."),(0,i.kt)("p",null,"We can click on the arrows to either expand or hide our code. As the GIF above shows, it's probably not very helpful to hide larger sections of code like the code for our ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>"),", but it can be helpful to hide our ",(0,i.kt)("inlineCode",{parentName:"p"},'"head"')," code."),(0,i.kt)("p",null,"If we take a look at the image below, we can see another use case, which is to hide code that we're done with so that we can focus on the new code we want to write: "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/folded-code.png",alt:"Previous code is folded so that we can focus on new code."})),(0,i.kt)("p",null,"It's totally up to you to fold code in a way that helps your coding process."),(0,i.kt)("p",null,"Note that code folding isn't limited to HTML. We can fold code for other languages in VS Code, too."),(0,i.kt)("h3",{id:"highlighting-divs"},"Highlighting Divs"),(0,i.kt)("p",null,"Sometimes we'll want to see exactly where a div begins and ends. While folding code can help a bit, it might not be as helpful if we need to see all the code \u2014 either for reasons of context or because we are hunting down an error (such as a missing closing tag or a typo). There are two subtle but very useful things VS Code does to help us."),(0,i.kt)("p",null,"Well, we can click on a div to highlight it. When we do, the closing div will also automatically be highlighted. Take a look at the GIF below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/line-guides.gif",alt:"In this GIF, we can click on a div to highlight its closing div. It also emphasizes the line guide."})),(0,i.kt)("p",null,"As we can see in the GIF above, when we click on a tag, this also highlights the corresponding closing tag. This can be particularly useful \u2014 and sometimes is necessary \u2014 when trying to figure out where a closing tag is missing (or when we have one too many closing tags). Of course, to fully use this functionality, we need to have clear, consistent indentation."),(0,i.kt)("h3",{id:"intellisense"},"Intellisense"),(0,i.kt)("p",null,"Like other powerful code editors, VS Code has a built-in ability to \"sense\" what you might be typing in. You've probably noticed this before \u2014 VS Code will provide a dropdown of items as you're typing. It might seem annoying at first, at least until you know how to harness the power of what's called Intellisense. Let's take a look at a basic example. In the process, we'll demonstrate another piece of cool VS Code functionality as well."),(0,i.kt)("img",{alt:"We can use VS Code's Intellisense to autofill code for us. And we can use Emmet snippets to autofill even more",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/intellisense.gif",style:{width:"75%%"}}),(0,i.kt)("p",null,'In the example above, when we type in the letter "d", VS Code knows that we might mean ',(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),". It will provide a dropdown that includes ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," as the first option. If we hit ",(0,i.kt)("em",{parentName:"p"},"Tab"),', VS Code will automatically create a div and its closing tag for us \u2014 all we had to do is type in "d" and then hit ',(0,i.kt)("em",{parentName:"p"},"Tab"),". That can save us a lot of typing in the long run."),(0,i.kt)("p",null,"Note that if VS Code isn't automatically showing a dropdown when we are typing, we can always prompt it to do so by hitting ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"Space"),"."),(0,i.kt)("p",null,"Next, we can do the same thing with an ordered list. And finally, here's another cool piece of functionality. We can type ",(0,i.kt)("inlineCode",{parentName:"p"},"li*3")," to specify that we want three ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>")," tags. As we'll learn in the next course section, the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," represents multiplication in coding."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"li*3")," is known as an Emmet snippet. Emmet is a toolkit for web developers that makes writing code more efficient. You are not required to know about Emmet snippets in this course, but they can make your coding life easier in the long run. For more information about using Emmet snippets with VS Code, see the ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/emmet"},"documentation"),"."),(0,i.kt)("p",null,"There's another very helpful thing to know about Intellisense. It doesn't just help us type code more efficiently \u2014 it makes code ",(0,i.kt)("strong",{parentName:"p"},"discoverable"),". For instance, let's say we want to add an HTML tag and we can't remember what it is. All we know is the letter it begins with. We can type in that letter and then Intellisense can help jog our memory. Intellisense can sometimes even suggest something we don't know about at all, saving us the time we'd need to hunt through documentation. This quality of discoverability becomes more apparent when we start working with other coding languages like JavaScript. However, by working with and becoming more comfortable with Intellisense now, we'll be better prepared to take advantage of this feature going forward."),(0,i.kt)("p",null,"For more information on how VS Code can help us work with HTML, see ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/html"},"HTML in Visual Studio Code"),". You are not required to know or use any of these features for Epicodus. However, we recommend using the VS Code features above because they make it easier to write and debug HTML."))}p.isMDXComponent=!0}}]);