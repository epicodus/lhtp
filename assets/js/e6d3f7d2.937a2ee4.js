"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[20942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},14192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"11. Adding Firebase to React",id:"adding_firebase_to_react",slug:"adding_firebase_to_react",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0k_adding_firebase_to_react.md"},o=void 0,l={unversionedId:"react_part_time/react-with-nosql/adding_firebase_to_react",id:"react_part_time/react-with-nosql/adding_firebase_to_react",title:"11. Adding Firebase to React",description:"We're ready to connect our Help Queue application to Firebase! To do this, we'll need to complete three steps:",source:"@site/docs/react_part_time/8_react-with-nosql/0k_adding_firebase_to_react.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/adding_firebase_to_react",permalink:"/lhtp/react_part_time/react-with-nosql/adding_firebase_to_react",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. Adding Firebase to React",id:"adding_firebase_to_react",slug:"adding_firebase_to_react",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0k_adding_firebase_to_react.md"},sidebar:"react_part_time",previous:{title:"10. Firebase Documentation",permalink:"/lhtp/react_part_time/react-with-nosql/firebase_documentation"},next:{title:"12. Adding Tickets to Firestore",permalink:"/lhtp/react_part_time/react-with-nosql/adding_tickets_to_firestore"}},s={},p=[{value:"Step 1: Install Firebase",id:"step-1-install-firebase",level:2},{value:"Step 2: Add <code>.env</code> File",id:"step-2-add-env-file",level:3},{value:"Step 3: Create Configuration File and Initialize Firebase",id:"step-3-create-configuration-file-and-initialize-firebase",level:3},{value:"Binding Libraries",id:"binding-libraries",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're ready to connect our Help Queue application to Firebase! To do this, we'll need to complete three steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase"),"."),(0,i.kt)("li",{parentName:"ul"},"Hide sensitive Firebase configuration data in a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ul"},"Create a Firebase configuration file.")),(0,i.kt)("p",null,"And that's it! "),(0,i.kt)("p",null,"At the end of this lesson, we'll briefly talk about the possibility of using a ",(0,i.kt)("strong",{parentName:"p"},"binding library")," that offers tooling specifically for React applications that implement Firebase."),(0,i.kt)("p",null,"Go ahead and get started by opening up your Help Queue repo. Continue with the same repo that we previously refactored to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook. "),(0,i.kt)("h2",{id:"step-1-install-firebase"},"Step 1: Install Firebase"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"First, we'll need to install Firebase in our project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install firebase@9\n")),(0,i.kt)("p",null,"Note that it's important to use the version pinned in this lesson. Because Firebase changes frequently, using a different version may mean different steps to setting up your application's configuration."),(0,i.kt)("h3",{id:"step-2-add-env-file"},"Step 2: Add ",(0,i.kt)("inlineCode",{parentName:"h3"},".env")," File"),(0,i.kt)("p",null,"First, head on over to your Help Queue project settings in Firebase to get the Firebase configuration settings. From the project homepage, select the cog icon at the top-left of the screen, select ",(0,i.kt)("em",{parentName:"p"},"Project settings"),", and scroll down until you find the help-queue-web app that we created in the last lesson. In this section, you'll find a code snippet that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"firebaseConfig")," variable that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var firebaseConfig = {\n  apiKey: "YOUR-UNIQUE-CREDENTIALS",\n  authDomain: "YOUR-PROJECT-NAME.firebaseapp.com",\n  projectId: "YOUR-UNIQUE-PROJECT-NAME",\n  storageBucket: "YOUR-UNIQUE-URL",\n  messagingSenderId: "YOUR-UNIQUE-CREDENTIALS",\n  appId: "YOUR-UNIQUE-APPID"\n};\n')),(0,i.kt)("p",null,"Note that we have replaced all the values of the key-value pairs with generic placeholders. That's because the values for each Firebase application will be different; more importantly, it's sensitive data that we don't want to expose to the internet for anyone to access and use, including potentially malicious users. To conceal this information, we need to set up a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and an environment variable for each unique key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firebaseConfig")," object."),(0,i.kt)("p",null,"Fortunately, ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," automatically comes with ",(0,i.kt)("inlineCode",{parentName:"p"},"dotenv"),", the npm package we used in Intermediate JavaScript to store sensitive API keys in an ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,"First, we need to add ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," to our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file and make a commit. This step needs to come before we make the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file itself. As you may recall from Intermediate JavaScript, if we push an updated ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file at the same time as we push the file that should be ignored, GitHub won't know it's supposed to ignore it \u2014 meaning it will be added to the repo.  "),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," automatically adds a number of these kinds of files to our ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," including ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development.local"),", and so on. ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," does this because in larger projects, it can be helpful to have multiple files for environment variables. They can be split up for testing, production, and development. For more information on different environment variable file types in ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app"),", see ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables/"},"Adding Custom Environment Variables"),". Since our application is small, we will stick to the basic ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. "),(0,i.kt)("p",null,"Next, create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the root directory of the project. Environment variables can only be set up for strings, not objects. For that reason, each key-value pair in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firebaseConfig")," object needs to be broken down into its own constant like this:"),(0,i.kt)("div",{class:"filename"},".env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"\nREACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"\nREACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"\nREACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"\nREACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"\nREACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"\n')),(0,i.kt)("p",null,"Replace the placeholder string values above with the value of each key from your own Firebase application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," It is very important that every environment variable in your application is prefaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"REACT_APP"),". Otherwise, the environment variable ",(0,i.kt)("strong",{parentName:"p"},"won't work"),". This is a safeguard put in place by ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," to ensure that sensitive environment variables aren't accidentally exposed in our applications."),(0,i.kt)("h3",{id:"step-3-create-configuration-file-and-initialize-firebase"},"Step 3: Create Configuration File and Initialize Firebase"),(0,i.kt)("p",null,"Next, we'll create a file in our ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.js"),". This is where we'll initialize Firebase in our application and create a database reference. Note that Firebase is not prescriptive about what we name our configuration file or where we located, so it's up to us to pick a name and location that is sensible and intuitive."),(0,i.kt)("p",null,"Add the following code to the file:"),(0,i.kt)("div",{class:"filename"},"src/firebase.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { initializeApp } from \"firebase/app\";\nimport { getFirestore } from 'firebase/firestore';\n\nconst firebaseConfig = {\n  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,\n  appId: process.env.REACT_APP_FIREBASE_APP_ID \n}\n\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app);\n\nexport default db;\n")),(0,i.kt)("p",null,"The scripts in this file are the same configuration scripts that we copied from the Help Queue project settings in the Firebase console, except for a two differences: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, all the values in our ",(0,i.kt)("inlineCode",{parentName:"li"},"firebaseConfig")," are environment variables. We aren't exposing our sensitive data."),(0,i.kt)("li",{parentName:"ul"},"Second, we import the ",(0,i.kt)("inlineCode",{parentName:"li"},"getFirestore")," function from ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase/firestore")," to use at the bottom of the file to get access to our Firestore database. ")),(0,i.kt)("p",null,"Now, let's work through ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.js")," from top to bottom:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We start by importing ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase/app")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase/firestore"),"."),(0,i.kt)("li",{parentName:"ol"},"Then we define our firebase config in ",(0,i.kt)("inlineCode",{parentName:"li"},"firebaseConfig"),". This information points to the exact web application that we created within the Firebase Help Queue project."),(0,i.kt)("li",{parentName:"ol"},"Next, we call the ",(0,i.kt)("inlineCode",{parentName:"li"},"initializeApp")," function, passing in our ",(0,i.kt)("inlineCode",{parentName:"li"},"firebaseConfig")," as the argument. The ",(0,i.kt)("inlineCode",{parentName:"li"},"initializeApp")," function creates and initializes an instance of our Firebase web app, which we save in the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"app"),". We can then use ",(0,i.kt)("inlineCode",{parentName:"li"},"app")," to access a variety of services that are connected to our web app, like our Firestore database."),(0,i.kt)("li",{parentName:"ol"},"Next, we call the ",(0,i.kt)("inlineCode",{parentName:"li"},"getFirestore")," function, passing in ",(0,i.kt)("inlineCode",{parentName:"li"},"app"),". This function returns the Firestore database instance that's associated with our ",(0,i.kt)("inlineCode",{parentName:"li"},"app"),". We store our firestore database instance in the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"db"),". "),(0,i.kt)("li",{parentName:"ol"},"Finally, we export the ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," variable, as our only and default export. We'll use this variable when we make requests to our database to read and update data.")),(0,i.kt)("p",null,"At this point, we've successfully added Firebase and Firestore to our application. Woo-hoo! "),(0,i.kt)("h2",{id:"binding-libraries"},"Binding Libraries"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Our next step is to actually start communicating with our database. For this, we actually have two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Firebase's built-in functions and tools to communicate with our database."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://firebaseopensource.com/platform/web/"},"an external library")," that provides tools for using Firebase that are meant to work specifically with React. These libraries are often called ",(0,i.kt)("strong",{parentName:"li"},"binding libraries"),", as they help two separate libraries work together.")),(0,i.kt)("p",null,"Binding libraries can provide some abstractions that can be confusing to folks who are new to React. Some of these abstractions are based on using React context, which we won't work with until the next course section. What's more, binding libraries can cause confusion about what tooling or helper function comes from where."),(0,i.kt)("p",null,"For all of these reasons, we're going to stick to learning how to use Firebase's built-in functions and tools. We'll also learn how to reference the firebase docs and we'll get continued practice using React's built-in tools, like the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," hook."),(0,i.kt)("p",null,"However, if you plan on using React and Firebase in your capstone project, we recommend exploring the available binding libraries for React and Firebase to see if they can improve your development experience, or move you past any issues that you run into when implementing a feature from Firebase."))}u.isMDXComponent=!0}}]);