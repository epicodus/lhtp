"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[2446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"11. Hypertext Markup Language (HTML)",id:"hypertext_markup_language_html",slug:"hypertext_markup_language_html",hide_table_of_contents:!0,sidebar_position:13,day:"monday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1g_hypertext_markup_language_html.md"},i=void 0,l={unversionedId:"test_intro/git_html_and_css/hypertext_markup_language_html",id:"test_intro/git_html_and_css/hypertext_markup_language_html",title:"11. Hypertext Markup Language (HTML)",description:"We've already had a bit of a taste of a basic HTML file with our Hello World and Goodbye web pages.  Now, we're going to focus on the basics of HyperText Markup Language or HTML that we previously just cut and paste into our pages.",source:"@site/docs/test_intro/1_git_html_and_css/1g_hypertext_markup_language_html.md",sourceDirName:"test_intro/1_git_html_and_css",slug:"/test_intro/git_html_and_css/hypertext_markup_language_html",permalink:"/lhtp/test_intro/git_html_and_css/hypertext_markup_language_html",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"11. Hypertext Markup Language (HTML)",id:"hypertext_markup_language_html",slug:"hypertext_markup_language_html",hide_table_of_contents:!0,sidebar_position:13,day:"monday",type:"lesson",url:"https://github.com/epicodus-classroom/test-intro/blob/main/1_git_html_and_css/1g_hypertext_markup_language_html.md"},sidebar:"test_intro",previous:{title:"10. VS Code Workflow: Pair Programming In-Person or with Live Share",permalink:"/lhtp/test_intro/git_html_and_css/vs_code_workflow_pair_programming_in_person_or_with_live_share"},next:{title:"12. HTML Indentation, Spacing, and Comments",permalink:"/lhtp/test_intro/git_html_and_css/html_indentation_spacing_and_comments"}},s={},p=[],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We've already had a bit of a taste of a basic HTML file with our Hello World and Goodbye web pages.  Now, we're going to focus on the basics of HyperText Markup Language or HTML that we previously just cut and paste into our pages.  "),(0,r.kt)("p",null,"It looked a bit like this in our text editor:"),(0,r.kt)("div",{class:"filename"},"example.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h1>HTML lesson</h1>\n<h2>For Epicodus</h2>\n\n<p>The goal for this lesson is to show how simple HTML is to read and write by displaying a text written in HTML and what it looks like when it is displayed in a browser.</p>\n")),(0,r.kt)("p",null,"And like this in our browser:"),(0,r.kt)("blockquote",null,(0,r.kt)("h1",null,"HTML lesson"),(0,r.kt)("h2",null,"For Epicodus"),(0,r.kt)("p",null,"The goal for this lesson is to show how simple HTML is to read and write by displaying a text written in HTML and what it looks like when it is rendered in a browser.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HyperText"),', the "HT" of HTML is a nerdy word for a link.  The "ML" of HTML stands for ',(0,r.kt)("strong",{parentName:"p"},"markup language"),".  As we can see in the example above, the text in the HTML  file is normal text that is ",(0,r.kt)("em",{parentName:"p"},"marked up")," with instructions written inside of these ",(0,r.kt)("inlineCode",{parentName:"p"},"<>"),", known as ",(0,r.kt)("strong",{parentName:"p"},"angle brackets"),".  The actual language of HTML is all of those instructions that we wrap around the text to format it and as we'll see, many other instructions for things like images, links, videos and more."),(0,r.kt)("p",null,"Before we start writing our first HTML, let's look at the basic structure of an HTML document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <title>Basic template for an HTML page</title>\n  <script src="js/scripts.js"><\/script>\n  <link rel="stylesheet" href="css/styles.css">\n</head>\n<body>\n\n</body>\n</html>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'll always begin with ",(0,r.kt)("inlineCode",{parentName:"li"},"<!DOCTYPE html>"),". This is the Document Type Declaration. This tells the browser (such as Chrome) what kind of document this is so it can easily translate it."),(0,r.kt)("li",{parentName:"ul"},"Next, we'll always have ",(0,r.kt)("inlineCode",{parentName:"li"},"<html>"),", which encloses the document's HTML. We can specify a language type as we do above to make it easier for screen readers (for the vision-impaired) to read and for browsers to translate."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<head>")," contains important information about the document. The title is what shows up in the tab at the top of your browser. This is also where we add tags to link stylesheets and JavaScript code. We won't link to external files just yet \u2014 but we will do so later in this section."),(0,r.kt)("li",{parentName:"ul"},"Finally, the ",(0,r.kt)("inlineCode",{parentName:"li"},"<body>")," is where our HTML code will go \u2014 such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," headings we just discussed.")),(0,r.kt)("p",null,"Before we move on, let's also discuss briefly discuss the difference between ",(0,r.kt)("strong",{parentName:"p"},"tags")," and ",(0,r.kt)("strong",{parentName:"p"},"elements"),". We'll do so by looking at the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<title>Basic template for an HTML page</title>\n")),(0,r.kt)("p",null,"An element is enclosed in tags. In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," is an opening tag while ",(0,r.kt)("inlineCode",{parentName:"p"},"</title>")," is a closing tag. The element is the part inside of the tag: ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic template for an HTML page"),"."),(0,r.kt)("p",null,"Mozilla's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Element"},"Element")," entry summarizes what an element is very nicely."),(0,r.kt)("p",null,"We'll actually cover elements and tags again in just a few lessons."),(0,r.kt)("p",null,"This is just a basic primer, so don't worry if it's not all clear yet. We'll be working with HTML a lot over the coming sections and it will soon be second nature to work with."),(0,r.kt)("p",null,"Now let's start writing our first HTML!"))}m.isMDXComponent=!0}}]);