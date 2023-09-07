"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[48142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"3. Setting Up Our First Project",id:"setting_up_our_first_project",slug:"setting_up_our_first_project",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/0c_setting_up_our_first_project.md"},i=void 0,l={unversionedId:"react/react-with-redux/setting_up_our_first_project",id:"react/react-with-redux/setting_up_our_first_project",title:"3. Setting Up Our First Project",description:"Over the next several lessons, we will learn about reducers and use them to create all the CRUD functionality we'll need in our Help Queue. In this lesson, we'll start the project set up process. We will:",source:"@site/docs/react/4_react-with-redux/0c_setting_up_our_first_project.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/setting_up_our_first_project",permalink:"/lhtp/react/react-with-redux/setting_up_our_first_project",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Setting Up Our First Project",id:"setting_up_our_first_project",slug:"setting_up_our_first_project",hide_table_of_contents:!0,sidebar_position:3,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/4_react-with-redux/0c_setting_up_our_first_project.md"},sidebar:"react",previous:{title:"2. Introduction to Redux",permalink:"/lhtp/react/react-with-redux/introduction_to_redux"},next:{title:"4. Writing Our First Redux Test",permalink:"/lhtp/react/react-with-redux/writing_our_first_redux_test"}},s={},u=[{value:"Testing in create-react-app",id:"testing-in-create-react-app",level:3},{value:"Setting Up a Folder Structure",id:"setting-up-a-folder-structure",level:3},{value:"Test File Naming Conventions",id:"test-file-naming-conventions",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Over the next several lessons, we will learn about reducers and use them to create all the CRUD functionality we'll need in our Help Queue. In this lesson, we'll start the project set up process. We will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open up our Help Queue project."),(0,a.kt)("li",{parentName:"ul"},"Learn how testing works with ",(0,a.kt)("inlineCode",{parentName:"li"},"create-react-app"),"."),(0,a.kt)("li",{parentName:"ul"},"Create the folder structure for our reducers and reducer tests."),(0,a.kt)("li",{parentName:"ul"},"Learn about naming conventions for testing.")),(0,a.kt)("p",null,"Take note that we don't need to actually install Redux in our project yet \u2014 that's because our reducers and tests are just plain JavaScript. So setup in this lesson is focused on adding folders to our project."),(0,a.kt)("p",null,"Later on, we'll be integrating our reducers with Redux in our Help Queue application, so we'll start building off that project starting now. You may either use your own repo or use the following repo, which contains all the code from the React Fundamentals course section: "),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-starter-project"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Starter Project for Help Queue"))),(0,a.kt)("p",null,"Note that the remainder of this lesson can be applied both to the Help Queue project and to setting up new projects that will use Redux."),(0,a.kt)("h3",{id:"testing-in-create-react-app"},"Testing in create-react-app"),(0,a.kt)("p",null,"Fortunately, ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," is ready for us to start writing tests right out of the box: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"create-react-app")," uses Jest"),"! However, this isn't apparent from the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file that ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," generates, which has the following script for the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"test": "react-scripts test"\n')),(0,a.kt)("p",null,"Remember that ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts")," takes care of our configuration under the hood so we don't have to add any packages like Babel. "),(0,a.kt)("p",null,"Be careful if you do choose to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," script. For instance, the following will not work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// This will not work!\n\n"test": "jest"\n')),(0,a.kt)("p",null,"Even though ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," is using Jest under the hood, it is doing so with a specific configuration (which includes Babel). If we just run the ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," command, it will do so without Babel and everything else we need to run our tests. As you may recall from our JavaScript course, Jest uses Node ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," statements and doesn't recognize ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements without help from Babel. This is just one of many little details that ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," takes care of for us!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," does not come with Redux. This makes sense \u2014 Redux is a separate state management library and smaller React applications won't need it. There's no need to bloat ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," with packages that we might not need."),(0,a.kt)("p",null,"Over the next handful of lessons, we will just be building and testing our first reducer. Since it is just plain JavaScript, we actually don't need to use Redux yet, so we won't add it until we actually plan to incorporate Redux into our Help Queue project."),(0,a.kt)("h3",{id:"setting-up-a-folder-structure"},"Setting Up a Folder Structure"),(0,a.kt)("p",null,"Let's set up a folder structure for our reducers and tests. Open your Help Queue app, and do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a directory called ",(0,a.kt)("inlineCode",{parentName:"li"},"__tests__")," inside ",(0,a.kt)("inlineCode",{parentName:"li"},"src"),". "),(0,a.kt)("li",{parentName:"ul"},"Then add a directory to ",(0,a.kt)("inlineCode",{parentName:"li"},"__tests__")," called ",(0,a.kt)("inlineCode",{parentName:"li"},"reducers"),"."),(0,a.kt)("li",{parentName:"ul"},"Finally, add a directory called ",(0,a.kt)("inlineCode",{parentName:"li"},"reducers")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"src"),". (This is ",(0,a.kt)("strong",{parentName:"li"},"different")," from our other ",(0,a.kt)("inlineCode",{parentName:"li"},"__tests__/reducers")," directory \u2014 one holds our reducer tests while the other holds the actual reducers.)")),(0,a.kt)("p",null,"When you've completed the above steps, your file structure for these directories should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src\n  |__  reducers\n  |__  __tests__\n        |__  reducers\n")),(0,a.kt)("p",null,"We will be using this structure for our tests and reducers for every project we create that uses Redux."),(0,a.kt)("h3",{id:"test-file-naming-conventions"},"Test File Naming Conventions"),(0,a.kt)("p",null,"We will also append ",(0,a.kt)("inlineCode",{parentName:"p"},".test.js")," to the name of all of our test files. This way, Jest will properly be able to find our tests. For example, in the next lesson we'll create our first test file, which will be named ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket-list-reducer.test.js"),". There's two things to note about test file naming conventions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We use hyphens to separate words, not underscores or other special characters. "),(0,a.kt)("li",{parentName:"ul"},"The name of the file should correspond to the name of our reducer. In turn, the reducer file name should clearly communicate what the reducer handles. In the ",(0,a.kt)("inlineCode",{parentName:"li"},"ticket-list-reducer.test.js")," example, we can tell this is a test file for a reducer that handles our ticket list.")),(0,a.kt)("p",null,"Up next, we'll write a test for our first reducer \u2014 and start building the reducer itself."))}d.isMDXComponent=!0}}]);