"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return n?o.createElement(u,i(i({ref:t},p),{},{components:n})):o.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"44. Box Model",id:"box_model",slug:"box_model",hide_table_of_contents:!0,sidebar_position:45,day:"wednesday",type:"lesson"},i=void 0,l={unversionedId:"git_html_and_css/box_model",id:"git_html_and_css/box_model",title:"44. Box Model",description:"There's one last major piece of HTML and CSS we need to cover",source:"@site/docs/1_git_html_and_css/3g_box_model.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/box_model",permalink:"/lhtp/git_html_and_css/box_model",draft:!1,tags:[],version:"current",sidebarPosition:45,frontMatter:{title:"44. Box Model",id:"box_model",slug:"box_model",hide_table_of_contents:!0,sidebar_position:45,day:"wednesday",type:"lesson"},sidebar:"docs",previous:{title:"43. PRACTICE: Using Floats",permalink:"/lhtp/git_html_and_css/practice_using_floats"},next:{title:"45. PRACTICE: Box Model",permalink:"/lhtp/git_html_and_css/practice_box_model"}},s={},d=[{value:"The <code>box-sizing</code> Property",id:"the-box-sizing-property",level:2},{value:"A Visual Review of the Box Model",id:"a-visual-review-of-the-box-model",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There's one last major piece of HTML and CSS we need to cover: the ",(0,a.kt)("strong",{parentName:"p"},"box model"),". Each element on a web page takes up space, and the box model describes the space around the element. Let's start with some unstyled HTML and then add CSS as we go to illustrate the box model:"),(0,a.kt)("div",{class:"filename"},"box-model.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Box model</title>\n</head>\n<body>\n  <div class="my-class">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"Now, let's add a border around this text:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  border:' 2px%' solid green;\n}\n")),(0,a.kt)("p",null,"Here's how to increase the space between the text in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," and the border around it:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  border:' 2px%' solid green;\n  padding:' 4px%';\n}\n")),(0,a.kt)("p",null,"Finally, we might want to make some room between the margin and the elements around it (which are, in this simple case, just the edges of the page):"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  margin:' 12px%';\n  border:' 2px%' solid green;\n  padding:' 4px%';\n}\n")),(0,a.kt)("p",null,"Now, let's apply a background color to this part of the page:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".my-class {\n  margin:' 12px%';\n  border:' 2px%' solid green;\n  padding:' 4px%';\n  background-color:'orange';\n}\n")),(0,a.kt)("p",null,"It just colors the content itself and the padding around it."),(0,a.kt)("p",null,"The box model is perhaps easiest to understand with a picture:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/rylfgrjtwwwr5yi/intro-box-model-diagram.png?raw=1",alt:"A diagram of the CSS box model."})),(0,a.kt)("p",null,"You'll run into the box model a ",(0,a.kt)("em",{parentName:"p"},"lot")," when building web pages, so it's a good idea to get familiar with it."),(0,a.kt)("h2",{id:"the-box-sizing-property"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"box-sizing")," Property"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If we try to size a box with padding and margins, we'll run into a potential problem. Let's say we want a box that is ",(0,a.kt)("inlineCode",{parentName:"p"},"200px")," wide (200 pixels wide) with a ",(0,a.kt)("inlineCode",{parentName:"p"},"10px")," border and ",(0,a.kt)("inlineCode",{parentName:"p"},"10px")," of padding. You might think that the width of the box ",(0,a.kt)("em",{parentName:"p"},"with")," border and padding will be ",(0,a.kt)("inlineCode",{parentName:"p"},"200px")," ",(0,a.kt)("em",{parentName:"p"},"total"),", but that's not the case. The border and padding will be ",(0,a.kt)("em",{parentName:"p"},"added")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"200px")," \u2014 so the final box width will be ",(0,a.kt)("inlineCode",{parentName:"p"},"220px"),"."),(0,a.kt)("p",null,"This issue also applies when the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," property is set to a percentage as well, which we'll demonstrate here. Let's start with some new HTML:"),(0,a.kt)("div",{class:"filename"},"box-model.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Boxes</title>\n</head>\n<body>\n  <div class="box1"><p>I\'m box #1.</p></div>\n  <div class="box2"><p>I\'m box #2.</p></div>\n  <div class="box3"><p>I\'m box #3.</p></div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"As we can see, this HTML example has three boxes. Here are the styles:"),(0,a.kt)("div",{class:"filename"},"css/styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".box1 {\n  width:' 50%%';\n  border: solid black;\n  border-width:' 1px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n}\n\n.box2 {\n  width:' 50%%';\n  padding:' 20px%';\n  border: solid black;\n  border-width:' 20px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n}\n\n.box3 {\n  width:' 50%%';\n  padding:' 50px%';\n  border: solid black;\n  border-width:' 30px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n}\n")),(0,a.kt)("p",null,"As we can see, all of the boxes are set to a ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"50%"),". Each box has different ",(0,a.kt)("inlineCode",{parentName:"p"},"padding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"border-width")," properties."),(0,a.kt)("p",null,"Here's how this HTML looks in the browser:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/6i7054ieu4tzqr0/different-width-boxes.png?raw=1",alt:"Each box has a different width despite being set to 50% width."})),(0,a.kt)("p",null,"This is frustrating, especially when we are working with widths in percentages. They ",(0,a.kt)("em",{parentName:"p"},"all")," have different widths \u2014 despite the fact that we specified that we want them all to be 50% of the width of the window. This is even more painful when the boxes are side by side \u2014 any border or padding can cause them to overlap with each other."),(0,a.kt)("p",null,"Fortunately, CSS now has a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"box-sizing")," which we can use to address this issue. The following property is the default behavior of CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"box-sizing: content-box;\n")),(0,a.kt)("p",null,"This is what we are already doing, though, so generally it's not very useful to add this property."),(0,a.kt)("p",null,"Alternatively, and much more usefully, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"border-box")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"box-sizing: border-box;\n")),(0,a.kt)("p",null,"This property will ",(0,a.kt)("em",{parentName:"p"},"include")," the padding and border width in the width we specify. Let's update each of our boxes to have this property:"),(0,a.kt)("div",{class:"filename"},"css/styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".box1 {\n  width:' 50%%';\n  border: solid black;\n  border-width:' 1px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n  box-sizing: border-box;\n}\n\n.box2 {\n  width:' 50%%';\n  padding:' 20px%';\n  border: solid black;\n  border-width:' 20px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n  box-sizing: border-box;\n}\n\n.box3 {\n  width:' 50%%';\n  padding:' 50px%';\n  border: solid black;\n  border-width:' 30px%';\n  background-color:'orange';\n  margin-bottom:' 10px%';\n  box-sizing: border-box;\n}\n")),(0,a.kt)("p",null,"Now if we take a look, we'll see that all the boxes are the same width:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.dropbox.com/s/m65ncfpgbp05ufo/even-width-boxes.png?raw=1",alt:"With border-box property, boxes are the same size."})),(0,a.kt)("p",null,"Note, however, that this only affects width, not height."),(0,a.kt)("p",null,"In general, when we want to add padding or borders to a box, we recommend using the ",(0,a.kt)("inlineCode",{parentName:"p"},"border-box")," property to simplify sizing."),(0,a.kt)("h2",{id:"a-visual-review-of-the-box-model"},"A Visual Review of the Box Model"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"It's time to pause and take a moment to review the concepts we learned in this lesson by watching a video. The following video uses a simple HTML document with some CSS styling to practice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the browser's developer tools to inspect the box model for individual HTML elements. "),(0,a.kt)("li",{parentName:"ul"},"Updating the CSS for these elements to change their padding, border, and margin. ")),(0,a.kt)("p",{align:"center"},(0,a.kt)("iframe",{title:"vimeo-player",src:"https://player.vimeo.com/video/778165943?h=2d25b2daaf",width:"640",height:"360",frameborder:"0",allowfullscreen:!0})))}m.isMDXComponent=!0}}]);