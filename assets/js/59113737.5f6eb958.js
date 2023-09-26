"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[84624],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),g=n,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},44933:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={title:"VS Code: Bracket Colorization and Guides",id:"vs-code-bracket-colorization-and-guides",slug:"vs-code-bracket-colorization-and-guides",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0l_vscode_bracket_colorization_and_guides.md"},a=void 0,s={unversionedId:"intermediate-javascript-part-time-evening/object-oriented-javascript/vs-code-bracket-colorization-and-guides",id:"intermediate-javascript-part-time-evening/object-oriented-javascript/vs-code-bracket-colorization-and-guides",title:"VS Code: Bracket Colorization and Guides",description:"As our functions get more complex, it becomes more challenging to keep track of opening and closing brackets such as parentheses and curly braces.",source:"@site/docs/intermediate-javascript-part-time-evening/3_object-oriented-javascript/0l-vscode-bracket-colorization-and-guides.md",sourceDirName:"intermediate-javascript-part-time-evening/3_object-oriented-javascript",slug:"/intermediate-javascript-part-time-evening/object-oriented-javascript/vs-code-bracket-colorization-and-guides",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/vs-code-bracket-colorization-and-guides",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"VS Code: Bracket Colorization and Guides",id:"vs-code-bracket-colorization-and-guides",slug:"vs-code-bracket-colorization-and-guides",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0l_vscode_bracket_colorization_and_guides.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Address Book: Finding and Deleting Contacts",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/address-book-finding-and-deleting-contacts"},next:{title:"Journal #4",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/journal-4"}},c={},l=[{value:"Configuring VS Code Settings",id:"configuring-vs-code-settings",level:2},{value:"Optional: Customizing Colors",id:"optional-customizing-colors",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As our functions get more complex, it becomes more challenging to keep track of opening and closing brackets such as parentheses and curly braces."),(0,n.kt)("p",null,"We can use a VS Code setting called ",(0,n.kt)("em",{parentName:"p"},"bracket pair colorization")," to add color to each set of opening and closing brackets, making it easier to identify each set of brackets. We can also add bracket pair guides that draw a line between the opening and closing brackets. It's up to you to decide whether you'd like to add this feature to VS Code or not. However, it's a popular tool and many developers find it useful."),(0,n.kt)("p",null,"Here's an example of these settings in action."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/bracket-colorizer.png",alt:"Bracket colorizer changes the color of opening and closing brackets."})),(0,n.kt)("p",null,"As we can see in the image above, the opening and closing brackets for this function are now different colors. Each opening bracket has a corresponding color with its closing bracket. Also, when we click on a bracket, there is a line guide that shows exactly where the brackets open and close \u2014 and the line guide will help us see the exact code that's contained inside the brackets."),(0,n.kt)("h2",{id:"configuring-vs-code-settings"},"Configuring VS Code Settings"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"To configure these settings, open ",(0,n.kt)("em",{parentName:"p"},"Settings"),' in VS Code. First search for "bracket pair colorizer" or "bracket pair colorization".'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/bracket-colorizer-vscode-setting.png",alt:'Search for the "bracket pair colorizer" or "bracket pair colorization" setting in VS Code.'})),(0,n.kt)("p",null,"There will be a couple of options returned from the search. The setting we want is called ",(0,n.kt)("em",{parentName:"p"},"Bracket Pair Colorization"),", highlighted by the red square in the image above. To enable bracket pair colorization, select the checkbox for this setting. Also note whether you want to enable this for your workspace or for the user. "),(0,n.kt)("p",null,"Once you make your selection for the bracket pair colorization setting, VS Code will automatically apply the changes. Because of this, it can be helpful to adjust your settings with a ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts.js")," file open so you view and verify the changes you've made."),(0,n.kt)("p",null,'Next search for "bracket pair guides". There will be multiple options returned that we can configure, as shown in the image below. We recommend the following configurations:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bracket Pairs:"),' We select "true" for this setting to enable bracket guides. These guides connect one bracket to another by a line. By default this only adds a vertical line between the two lines with an opening and closing bracket. '),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bracket Pairs Horizontal:"),' We select "active" for this setting to enable a horizontal line to connect the lines with the opening and closing brackets.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Highlight Active Bracket Pair:"),' We select "enabled" for this setting to have VS Code highlight the bracket guides for the bracket that we\'ve selected. The highlighting involves making the color brighter.')),(0,n.kt)("p",null,"As you configure your settings, note whether you want to make changes to your workspace or for the user."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/setting-bracket-guides.png",alt:'Search for the "bracket pair guides" setting in VS Code.'})),(0,n.kt)("h2",{id:"optional-customizing-colors"},"Optional: Customizing Colors"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"You can optionally customize the colors for your colorized brackets and guides. This process is slightly more technical and involves updating VS Code's settings object in ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.json")," to override the colors from the currently selected color theme. "),(0,n.kt)("p",null,'Start by searching for "workbench color customizations". Within the first returned result for ',(0,n.kt)("em",{parentName:"p"},"Workbench: Color Customizations"),", select the link ",(0,n.kt)("em",{parentName:"p"},"Edit in Settings.json"),". This will open up a new file called ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.json"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/edit-bracket-colors.png",alt:"select the option to _Edit in Settings.json_."})),(0,n.kt)("p",null,"Within VS Code's ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.json")," file, there will be a JavaScript object, with a series of key-value pairs and some nested objects. We'll be adding to the value of the key ",(0,n.kt)("inlineCode",{parentName:"p"},'"workbench.colorCustomizations"'),". As the image below demonstrates we can use VS Code's autocompletion suggestions to explore the possible properties we can set. All we have to type in is ",(0,n.kt)("inlineCode",{parentName:"p"},'"editorB')," in order to get a list of suggestions. "),(0,n.kt)("p",null,"The properties that we can set values for to adjust the colors and guides for bracket pairs are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketHighlight"),": for changing the color of the bracket pairs. There are properties for brackets 1 \u2013 6, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketHighlight.forground2"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketMatch"),": for changing the color of the background and border for highlighted brackets. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketPairGuide"),": for changing the color of the highlight for the bracket guides. There are properties to adjust the background and active background for bracket guides 1 \u2013 6, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketPairGuide.background3")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"editorBracketPairGuide.activeBackground3"),". ")),(0,n.kt)("p",null,"All of these properties are set to a color. We must use the following color formats: #RGB, #RGBA, #RRGGBB or #RRGGBBAA."),(0,n.kt)("p",null,"Remember that once you make your selection for the bracket pair colorization setting, VS Code will automatically apply the changes. Because of this, it can be helpful to adjust your settings with a ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts.js")," file open so you explore the results of different color settings."),(0,n.kt)("p",null,"And with that, you have the keys to the color customization kingdom!"))}u.isMDXComponent=!0}}]);