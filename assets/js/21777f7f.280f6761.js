"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[67603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"Setting up a Firebase Project, Firestore Database, and Web App",id:"setting_up_a_firebase_project_firestore_database_and_web_app",slug:"setting_up_a_firebase_project_firestore_database_and_web_app",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_setting_up_a_firebase_project.md"},i=void 0,s={unversionedId:"react_part_time/react-with-nosql/setting_up_a_firebase_project_firestore_database_and_web_app",id:"react_part_time/react-with-nosql/setting_up_a_firebase_project_firestore_database_and_web_app",title:"Setting up a Firebase Project, Firestore Database, and Web App",description:"In this lesson, we will go through the steps to setting up a Firebase account, and setting up project with a web app and Firestore database. In the next lesson, we will integrate our new Firebase project with our Help Queue application.",source:"@site/docs/react_part_time/8_react-with-nosql/0i_setting_up_a_firebase_project.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/setting_up_a_firebase_project_firestore_database_and_web_app",permalink:"/react_part_time/react-with-nosql/setting_up_a_firebase_project_firestore_database_and_web_app",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Setting up a Firebase Project, Firestore Database, and Web App",id:"setting_up_a_firebase_project_firestore_database_and_web_app",slug:"setting_up_a_firebase_project_firestore_database_and_web_app",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0i_setting_up_a_firebase_project.md"},sidebar:"react_part_time",previous:{title:"The CAP Theorem and BASE",permalink:"/react_part_time/react-with-nosql/the_cap_theorem_and_base"},next:{title:"Firebase Documentation",permalink:"/react_part_time/react-with-nosql/firebase_documentation"}},l={},p=[{value:"Step 1: Set Up A Firebase Account",id:"step-1-set-up-a-firebase-account",level:2},{value:"Step 2: Create a Firebase Project",id:"step-2-create-a-firebase-project",level:2},{value:"Navigating the Help Queue Project Homepage",id:"navigating-the-help-queue-project-homepage",level:3},{value:"Step 3: Set Up Firestore",id:"step-3-set-up-firestore",level:2},{value:"Step 4: Add Firebase to Our Web App",id:"step-4-add-firebase-to-our-web-app",level:2},{value:"Adjusting Firestore Read/Write Rules",id:"adjusting-firestore-readwrite-rules",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we will go through the steps to setting up a Firebase account, and setting up project with a web app and Firestore database. In the next lesson, we will integrate our new Firebase project with our Help Queue application."),(0,o.kt)("h2",{id:"step-1-set-up-a-firebase-account"},"Step 1: Set Up A Firebase Account"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Firebase is cloud-based so all of our data will be stored in the cloud. We'll start by setting up a Firebase account. Note that in order to set up a Firebase account, you do need to set up a Google account if you don't have one already. "),(0,o.kt)("p",null,"Firebase is free for smaller projects, which gives us the opportunity to explore and integrate projects with Firebase. If we were to build a larger application, however, we'd eventually need to start paying for the service."),(0,o.kt)("p",null,"Start by navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"https://firebase.google.com/")," in the browser."),(0,o.kt)("p",null,"Then, click on ",(0,o.kt)("em",{parentName:"p"},"Get Started"),". This will take you to a sign in page where you can log into a Google account (or create one if needed)."),(0,o.kt)("h2",{id:"step-2-create-a-firebase-project"},"Step 2: Create a Firebase Project"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Once you've signed into your Google account, you'll be taken to the Firebase console, which is the homepage for all of your Firebase projects. You can always access the Firebase console later by going to ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/"),". Also, once you are logged into your Google account, there will be a ",(0,o.kt)("em",{parentName:"p"},"Go to console")," button on ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"the Firebase homepage")," that you can click to get back to the console."),(0,o.kt)("p",null,"In the console, we will have the option to ",(0,o.kt)("em",{parentName:"p"},"Create a Project"),". ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/projects/learn-more#projects-apps-products"},"According to the docs"),", ",(0,o.kt)("strong",{parentName:"p"},"a Firebase project")," is the top-level entity for Firebase. Within one project we can set up databases and different types of apps. For example, one project could have a web app and an Android app that both share the same Firestore database. In our Firebase project, we will create a web app with a Firestore database."),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Create a Project"),". When we do this, we'll be taken to a page where we can name our project. We'll call our project ",(0,o.kt)("inlineCode",{parentName:"p"},"help-queue"),", and we'll select the checkbox that confirms that we'll use our project appropriately."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-project-step-1-name.png",alt:"Firebase screen for naming a project"})),(0,o.kt)("p",null,"The next step will ask us if we want to use Google Analytics in our project. There's a toggle button ",(0,o.kt)("em",{parentName:"p"},"Enable Google Analytics for this project")," that is on. We will click the toggle button to disable Google Analytics, unless you'd like to add it to your own project. It won't affect our project development. If you are planning to build out your project long term, you may want to add this feature."),(0,o.kt)("p",null,"Clicking continue on the Google Analytics page will prompt Firebase to create your project. Once complete, click continue again to be taken to the homepage of our newly created Help Queue project."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-project-is-ready.png",alt:"Success message for creating a Firebase project."})),(0,o.kt)("h3",{id:"navigating-the-help-queue-project-homepage"},"Navigating the Help Queue Project Homepage"),(0,o.kt)("p",null,"There are quite a few options from the Help Queue project homepage, and we'll review those now. As we work through the different links and locations, reference the image below. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first thing to note is that we can navigate back to the Firebase console homepage by clicking the drop-down menu called ",(0,o.kt)("em",{parentName:"li"},"help-queue")," at the top of the page (circled in black), and selecting the option ",(0,o.kt)("em",{parentName:"li"},"see all projects"),"."),(0,o.kt)("li",{parentName:"ul"},"Next, there's a link to the Firebase docs (circled in black) at the far right of the screen. "),(0,o.kt)("li",{parentName:"ul"},"In the vertical menu to the left of the screen, there's options to set up different Firebase products. The ",(0,o.kt)("em",{parentName:"li"},"Build")," tab is highlighted by a green rectangle, and it will have the options for ",(0,o.kt)("em",{parentName:"li"},"Firestore Database")," and ",(0,o.kt)("em",{parentName:"li"},"Authentication"),", which we'll set up later."),(0,o.kt)("li",{parentName:"ul"},"Anytime we navigate away from our Help Queue's homepage, we can always get back to it by clicking on the ",(0,o.kt)("em",{parentName:"li"},"Project Overview")," button (circled in green)."),(0,o.kt)("li",{parentName:"ul"},"Now, notice the cog symbol to the right of the ",(0,o.kt)("em",{parentName:"li"},"Project Overview")," button (circled in red). This is where we'll find our project settings. We'll revisit our project settings as needed to get information about our project's configuration."),(0,o.kt)("li",{parentName:"ul"},"In the middle of the homepage we'll see the message \"Get started by adding Firebase to your app\". This area gives us options to configure our firebase to connect to a web app, an Android app, or an iOS app. This is something we'll do later in this lesson. The ",(0,o.kt)("inlineCode",{parentName:"li"},"</>")," icon with the black circle represents web apps. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-project-homepage-navigation.png",alt:"The Help Queue project homepage on Firebase, and the various navigation options."})),(0,o.kt)("h2",{id:"step-3-set-up-firestore"},"Step 3: Set Up Firestore"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, we will set up our Firestore database. For more information on Firestore, check the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/data-model"},"Firebase docs on Firestore"),". We will be covering Firestore in more depth in future lessons."),(0,o.kt)("p",null,"One the homepage of our Help Queue project, click on the ",(0,o.kt)("em",{parentName:"p"},"Build")," tab in the left-hand  menu, and then select ",(0,o.kt)("em",{parentName:"p"},"Firestore Database"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-click-on-firestore-database.png",alt:'Click on "Firestore Database" in the "Build" drop-down menu.'})),(0,o.kt)("p",null,"You'll be taken to the following page:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/cloud-firestore-click-create-database.png",alt:"This image shows the screen for adding Firebase to an application. The button for adding Firebase to a web application is circled."})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("em",{parentName:"p"},"Create database")," button. "),(0,o.kt)("p",null,"A popup will appear:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/start-in-production-mode.png",alt:"Click on _Start in Test Mode_."})),(0,o.kt)("p",null,"Within this popup, do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("em",{parentName:"li"},"Start in Test Mode"),", and then click ",(0,o.kt)("em",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ul"},"On the next page, leave the default form values and click ",(0,o.kt)("em",{parentName:"li"},"Enable")," to proceed."),(0,o.kt)("li",{parentName:"ul"},"Then, wait as Firebase creates the database.")),(0,o.kt)("p",null,"When the Firestore database is created, we'll be taken to the Firestore database homepage."),(0,o.kt)("h2",{id:"step-4-add-firebase-to-our-web-app"},"Step 4: Add Firebase to Our Web App"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, we need to add Firebase to our Help Queue application. First, head back to the Help Queue homepage by clicking the ",(0,o.kt)("em",{parentName:"p"},"Project Overview")," button at the top-left of the page. "),(0,o.kt)("p",null,"Then, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"</>"),' icon from underneath the message "Get started by adding Firebase to your app". In the image below, this icon is circled in black.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-step-4.png",alt:"This image shows the screen for adding Firebase to an application. The icon for adding Firebase to a web application is circled."})),(0,o.kt)("p",null,"When we click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"</>")," button, we'll be taken to a page that reads ",(0,o.kt)("em",{parentName:"p"},"Add Firebase to your web app"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/register-app-web.png",alt:"This image shows the screen for giving our Firebase project a nickname."})),(0,o.kt)("p",null,"We'll need to enter an app nickname. We'll call ours ",(0,o.kt)("inlineCode",{parentName:"p"},"help-queue-web"),". The nickname we choose should be something that we can differentiate from other apps that we add to our Help Queue Firebase project. We don't have other apps right now, but this could be a mobile app, or yet another web app. "),(0,o.kt)("p",null,"We also have an option to set up Firebase hosting. This is a nice thing about Firebase \u2014 we can also use it to easily deploy our application! We'll be able to set that up later so we won't do it right now. Go ahead and click on the ",(0,o.kt)("em",{parentName:"p"},"Register app")," button."),(0,o.kt)("p",null,"Finally, we'll be given a script that we will include in our source code to configure and initialize firebase in our application. We're not ready to use this script just yet (we will in the next lesson), but we also don't need to worry about copying down this information. We can access it later via our Help Queue project settings. "),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Continue to console"),", which will take us back to the Help Queue project homepage."),(0,o.kt)("p",null,"Anytime we need to access the firebase configuration script, we can do so by clicking on the gear icon to the right of ",(0,o.kt)("em",{parentName:"p"},"Project Overview")," in the upper-left corner of the screen. Then, click on ",(0,o.kt)("em",{parentName:"p"},"Project settings"),", which will take you to a page which includes the script (make sure to scroll down on that page). See the image below for the location of ",(0,o.kt)("em",{parentName:"p"},"Project settings"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-project-settings.png",alt:"You can access _Project settings_ in the upper left-hand corner of the Firebase console."})),(0,o.kt)("p",null,"At this point, we've finished all the steps for setting up our Firebase project. In the next lesson, we'll integrate Firebase with our Help Queue application. "),(0,o.kt)("p",null,"Before we move on, let's briefly talk about the read/write rules for our Firestore database."),(0,o.kt)("h2",{id:"adjusting-firestore-readwrite-rules"},"Adjusting Firestore Read/Write Rules"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's revisit our database by clicking on the ",(0,o.kt)("em",{parentName:"p"},"Firestore Database"),", from the ",(0,o.kt)("em",{parentName:"p"},"Build")," drop-down menu. We'll see a UI for our database. Here, we'll be able to see our data once we wire up our database to our Help Queue application and start creating tickets."),(0,o.kt)("p",null,"We can update our database's read/write rules by clicking the ",(0,o.kt)("em",{parentName:"p"},"Rules")," tab as pictured in the image below: "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firestore-database-rules.png",alt:"Image shows tabs for database. The rules tab is circled."})),(0,o.kt)("p",null,"These are the current rules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /{document=**} {\n      allow read, write: if\n        request.time < timestamp.date(2021, 11, 19);\n    }\n  }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp.date")," will contain a different date than in the example above. That's because the default rules are configured to expire after 30 days from the time that we initialize our Firestore database. In this example, the database was created on October 20th, 2021. Up until November 19th, 2021, anyone on the internet can view, edit, and delete all data in our Firestore database. After that date, all requests will be denied. "),(0,o.kt)("p",null,"These are great rules for getting started with Firestore, but we will need to reconfigure them before the 30 days have ended."),(0,o.kt)("p",null,"We could update our rules to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Note that these rules are not secure and should NEVER be used in production!\nrules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /{document=**} {\n      allow read, write: if true;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"However, this would be insecure. We would be updating access so that ",(0,o.kt)("em",{parentName:"p"},"anyone")," can modify our database. What's more, there's no expiration for this rule. This is something we should ",(0,o.kt)("em",{parentName:"p"},"never")," do in production. "),(0,o.kt)("p",null,"For development purposes allowing all access may not be as big of a deal \u2014 as long as you don't share your database URL. Ultimately, it depends on the security practices of your team and the organization you are working for. "),(0,o.kt)("p",null,"However, if you end up deploying your Firebase project, you'll want to write rules that protect your data. Here are two great resources to help you learn how to protect your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/firestore/docs/security/insecure-rules"},"Fixing insecure rules"),": for information on fixing insecure rules. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/firestore/security/get-started"},"Get started with Cloud Firestore Security Rules"),": for more general information on writing security rules for Firestore.")))}h.isMDXComponent=!0}}]);