"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[5927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,u=m["".concat(s,".").concat(c)]||m[c]||h[c]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={title:"14. HTML Block Elements: <p> Tags, Headings, List Elements, and More",id:"html_block_elements_p_tags_headings_list_elements_and_more",slug:"html_block_elements_p_tags_headings_list_elements_and_more",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"lesson"},o=void 0,r={unversionedId:"git_html_and_css/html_block_elements_p_tags_headings_list_elements_and_more",id:"git_html_and_css/html_block_elements_p_tags_headings_list_elements_and_more",title:"14. HTML Block Elements: <p> Tags, Headings, List Elements, and More",description:"We're going to start our HTML writing by working with block elements.  These are HTML elements that when displayed start on a line of their own, in effect making a block on the page.",source:"@site/docs/1_git_html_and_css/1j_html_block_elements.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/html_block_elements_p_tags_headings_list_elements_and_more",permalink:"/lhtp/git_html_and_css/html_block_elements_p_tags_headings_list_elements_and_more",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"14. HTML Block Elements: <p> Tags, Headings, List Elements, and More",id:"html_block_elements_p_tags_headings_list_elements_and_more",slug:"html_block_elements_p_tags_headings_list_elements_and_more",hide_table_of_contents:!0,sidebar_position:16,day:"monday",type:"lesson"},sidebar:"docs",previous:{title:"13. PRACTICE: Indentation and Spacing",permalink:"/lhtp/git_html_and_css/practice_indentation_and_spacing"},next:{title:"15. HTML Block Elements Part 2",permalink:"/lhtp/git_html_and_css/html_block_elements_part_2"}},s={},p=[{value:"HTML Block Elements",id:"html-block-elements",level:2},{value:"Create <code>my-first-webpage</code>",id:"create-my-first-webpage",level:3},{value:"<code>&lt;p&gt;</code> Tags",id:"p-tags",level:3},{value:"HTML Headings",id:"html-headings",level:3},{value:"List Elements: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;li&gt;</code>",id:"list-elements-ul-ol-and-li",level:3},{value:"<code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags",id:"doctype-html-head-and-body-tags",level:3},{value:"Finish Up: Push Your Project to GitHub",id:"finish-up-push-your-project-to-github",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're going to start our HTML writing by working with ",(0,i.kt)("strong",{parentName:"p"},"block elements"),".  These are HTML elements that when displayed start on a line of their own, in effect making a block on the page."),(0,i.kt)("h2",{id:"html-block-elements"},"HTML Block Elements"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's create a project directory and initialize a Git repository for a new project called ",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-webpage"),".  We'll use this project to practice HTML block Elements."),(0,i.kt)("h3",{id:"create-my-first-webpage"},"Create ",(0,i.kt)("inlineCode",{parentName:"h3"},"my-first-webpage")),(0,i.kt)("p",null,"As a review, here are the steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Terminal")),(0,i.kt)("li",{parentName:"ul"},"Make a project directory called ",(0,i.kt)("inlineCode",{parentName:"li"},"my-first-webpage")," in your ",(0,i.kt)("em",{parentName:"li"},"Desktop")," directory. (It is important that when you begin a new project you create a new project folder that is ",(0,i.kt)("em",{parentName:"li"},"not")," nested inside of an existing project folder.)"),(0,i.kt)("li",{parentName:"ul"},"Change into your project directory."),(0,i.kt)("li",{parentName:"ul"},"If you type ",(0,i.kt)("inlineCode",{parentName:"li"},"pwd")," now, you should see that you are in your project directory at ",(0,i.kt)("inlineCode",{parentName:"li"},"/Users/Guest/Desktop/my-first-webpage"),"."),(0,i.kt)("li",{parentName:"ul"},"Within your project directory, initialize your git repository: ",(0,i.kt)("inlineCode",{parentName:"li"},"$ git init")),(0,i.kt)("li",{parentName:"ul"},"Create an empty file: ",(0,i.kt)("inlineCode",{parentName:"li"},"$ touch my-first-webpage.html"),"."),(0,i.kt)("li",{parentName:"ul"},"Open your project directory in Visual Studio Code: ",(0,i.kt)("inlineCode",{parentName:"li"},"$ code .")," (The command ",(0,i.kt)("inlineCode",{parentName:"li"},"code .")," opens the whole directory you are currently in because the ",(0,i.kt)("inlineCode",{parentName:"li"},".")," refers to ",(0,i.kt)("em",{parentName:"li"},"current directory"),". If you only want to open the single file, you could instead type: ",(0,i.kt)("inlineCode",{parentName:"li"},"code my-first-webpage.html"),").")),(0,i.kt)("h3",{id:"p-tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"<p>")," Tags"),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"my-first-webpage.html")," is open in your text editor, type the following code (",(0,i.kt)("strong",{parentName:"p"},"no more copying and pasting!"),"):"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>This is my first web page!</p>\n<p>Isn't it nice?</p>\n")),(0,i.kt)("p",null,"The instructions for formatting around the text are called ",(0,i.kt)("strong",{parentName:"p"},"tags"),".  The ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," is called a ",(0,i.kt)("strong",{parentName:"p"},"p tag"),". It means that everything that follows is a paragraph, until ",(0,i.kt)("inlineCode",{parentName:"p"},"</p>")," is reached. The ",(0,i.kt)("inlineCode",{parentName:"p"},"</p>")," is called a ",(0,i.kt)("strong",{parentName:"p"},"closing tag")," or ",(0,i.kt)("strong",{parentName:"p"},"end tag")," and indicates the paragraph is at its end.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," is a block element because it is written on its own line and creates a block of content on the displayed page."),(0,i.kt)("p",null,"One thing to note before we move on \u2014 with multiple lines of text, we'll sometimes see ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," tags indented like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>\n  This is a lot of text which means it spans multiple lines. When text spans multiple lines like this, it's much easier to read our code if we indent the multiple lines of text within our paragraph tags. In other words, we add a p tag, have a line break and indent, and then add our text. \n</p>\n")),(0,i.kt)("p",null,"Both ways are fine \u2014 ultimately, we want our code to be as readable as possible both for ourselves and other developers looking at our code."),(0,i.kt)("p",null,"Now, if we open the file in a web browser, we have two paragraphs of text. We just wrote our first HTML code!  Let's commit it!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add my-first-webpage.html\n$ git commit -m "add initial paragraph block elements to the page"\n')),(0,i.kt)("p",null,"Verify that you are on the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch and that the commit has been made by running ",(0,i.kt)("inlineCode",{parentName:"p"},"$ git status"),"."),(0,i.kt)("h3",{id:"html-headings"},"HTML Headings"),(0,i.kt)("p",null,"Let's try some more tags:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<h1>My first web page</h1>\n<h2>Written with the guidance of Epicodus</h2>\n\n<p>This is my first web page!</p>\n<p>Isn't it nice?</p>\n")),(0,i.kt)("p",null,"Here, we've added a main ",(0,i.kt)("strong",{parentName:"p"},"heading")," (",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),") and a subheading (",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>"),"). You can actually add up to six different levels of headings using ",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>")," through ",(0,i.kt)("inlineCode",{parentName:"p"},"<h6>"),". Like the paragraph tags, we have an opening tag that indicates where the heading begins (",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>"),")  and a closing tag that indicates where it ends (",(0,i.kt)("inlineCode",{parentName:"p"},"</h1>"),") . Closing tags always match the heading but have a forward slash in front."),(0,i.kt)("p",null,"Notice the blank line between the ",(0,i.kt)("inlineCode",{parentName:"p"},"<h2>")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," tags. HTML ignores empty spaces and blank lines, which is called ",(0,i.kt)("strong",{parentName:"p"},"whitespace"),". That's why the extra line we might add between our headings and paragraphs doesn't do anything when it is displayed. We could take it out, or make it three spaces, and it would look exactly the same in the browser."),(0,i.kt)("p",null,"Let's commit again!  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add my-first-webpage.html\n$ git commit -m "add heading block elements"\n')),(0,i.kt)("h3",{id:"list-elements-ul-ol-and-li"},"List Elements: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<ul>"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"<ol>"),", and ",(0,i.kt)("inlineCode",{parentName:"h3"},"<li>")),(0,i.kt)("p",null,"Let's keep going with some list elements:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h1>My first web page</h1>\n<h2>Written with the guidance of Epicodus</h2>\n\n<p>This is my first web page!</p>\n<p>Isn't it nice?</p>\n\n<p>Here are some things I'm going to learn about coding:</p>\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n  <li>And a lot more!</li>\n</ul>\n")),(0,i.kt)("p",null,"Here we've added an ",(0,i.kt)("strong",{parentName:"p"},"unordered list")," (",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>"),") with four ",(0,i.kt)("strong",{parentName:"p"},"list items")," (",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),"). If we wanted to make an ",(0,i.kt)("strong",{parentName:"p"},"ordered list")," that uses numbers and letters instead of bullets, we would use an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ol>")," tag instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>"),"."),(0,i.kt)("p",null,"Notice how I've indented the ",(0,i.kt)("inlineCode",{parentName:"p"},"<li>"),"s within the ",(0,i.kt)("inlineCode",{parentName:"p"},"<ul>"),"s. This makes it much easier to read which tags are nested, and makes it easy to see where the closing tag goes when it's not on the same line. It's a good practice to indent using two spaces (you can use the tab button on your keyboard, just make sure that it's set to two spaces in your VS Code settings). It's also a good idea to write your closing tag just after you write your opening tag, and then go back and fill in whatever comes in the middle. This way, you won't forget to close a tag after you've opened it."),(0,i.kt)("p",null,"Let's commit again!  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add my-first-webpage.html\n$ git commit -m "add list elements"\n')),(0,i.kt)("h3",{id:"doctype-html-head-and-body-tags"},(0,i.kt)("inlineCode",{parentName:"h3"},"<!DOCTYPE>"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"<html>"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"<head>"),", and ",(0,i.kt)("inlineCode",{parentName:"h3"},"<body>")," tags"),(0,i.kt)("p",null,"We have some final additions to make for this to be a valid HTML web page:"),(0,i.kt)("div",{class:"filename"},"my-first-webpage.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en-US\">\n<head>\n  <title>Web page #1!</title>\n</head>\n<body>\n  <h1>My first web page</h1>\n  <h2>Written with the guidance of Epicodus</h2>\n\n  <p>This is my first web page!</p>\n  <p>Isn't it nice?</p>\n\n  <p>Here are some things I'm going to learn about coding:</p>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n    <li>And a lot more!</li>\n  </ul>\n</body>\n</html>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," tag tells the browser that this document contains HTML, and specifically that it contains the newest version of HTML, HTML5. (An example of a doctype for an older version of HTML is ",(0,i.kt)("inlineCode",{parentName:"p"},'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'),".)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>")," tag wraps all of the content on the entire page. It is sometimes called the root element, because all other tags (excluding the ",(0,i.kt)("inlineCode",{parentName:"p"},"<!DOCTYPE>")," declaration) are nested inside of it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag contains information about the page, which for now is just the ",(0,i.kt)("inlineCode",{parentName:"p"},"<title>")," tag. The ",(0,i.kt)("inlineCode",{parentName:"p"},"<title>")," tag sets the title for the web page \u2014 if you look in your browser, you can see that the title of the browser tab is now ",(0,i.kt)("em",{parentName:"p"},"Web page #1!"),". We'll learn about other tags that live in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag soon. For now, keep in mind that the information in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tags does not get displayed directly on the webpage. "),(0,i.kt)("p",null,"Finally, the actual content of the page is now wrapped in a ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," tag. ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," contains all of the content that will actually be displayed on the page."),(0,i.kt)("p",null,"Now go ahead and commit your final changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add my-first-webpage.html\n$ git commit -m "add final, official HTML elements DOCTYPE, head, title, body"\n')),(0,i.kt)("h3",{id:"finish-up-push-your-project-to-github"},"Finish Up: Push Your Project to GitHub"),(0,i.kt)("p",null,"We're done for the moment. It's a good time to push the project to GitHub.  As a reminder, here are the steps (which should be done by both you and your pair, since you each want a copy of the repository on your GitHub):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"my-first-webpage")," repository on GitHub"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ git remote add [remote nickname] [remote url]")," (replacing ","[remote nickname]"," with your initials or another good nickname and ","[remote url]"," with the URL to the GitHub repository you just created)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ git push [remote nickname] main")," (replacing ","[remote nickname]"," with the same nickname you used when you added the remote link)"),(0,i.kt)("li",{parentName:"ul"},"Check on GitHub that your code uploaded successfully")))}h.isMDXComponent=!0}}]);