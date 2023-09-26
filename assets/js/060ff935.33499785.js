"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[66438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const s={title:"Firebase Authentication",id:"firebase-authentication",slug:"firebase-authentication",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1d_firebase_authentication.md"},r=void 0,o={unversionedId:"react/react-with-nosql/firebase-authentication",id:"react/react-with-nosql/firebase-authentication",title:"Firebase Authentication",description:"Let's imagine that we want to expand our Help Queue's functionality for online Epicodus students. We don't want people that aren't students to access the queue \u2014 so we'll make the queue accessible only if a user is signed in. Over the next couple of lessons, we'll add this functionality. In this lesson, we'll add Firebase authentication to our SignIn component. Then, in the next lesson, we'll add basic authorization so that only signed-in users can add tickets.",source:"@site/docs/react/5_react-with-nosql/1d-firebase-authentication.md",sourceDirName:"react/5_react-with-nosql",slug:"/react/react-with-nosql/firebase-authentication",permalink:"/react/react-with-nosql/firebase-authentication",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Firebase Authentication",id:"firebase-authentication",slug:"firebase-authentication",hide_table_of_contents:!0,sidebar_position:22,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1d_firebase_authentication.md"},sidebar:"react",previous:{title:"React Router",permalink:"/react/react-with-nosql/react-router"},next:{title:"Firebase Authorization",permalink:"/react/react-with-nosql/firebase-authorization"}},l={},u=[{value:"Adding Firebase Authentication",id:"adding-firebase-authentication",level:2},{value:"Accessing Authentication in our Source Code",id:"accessing-authentication-in-our-source-code",level:3},{value:"Signing Up",id:"signing-up",level:3},{value:"Signing In",id:"signing-in",level:3},{value:"Signing Out",id:"signing-out",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's imagine that we want to expand our Help Queue's functionality for online Epicodus students. We don't want people that aren't students to access the queue \u2014 so we'll make the queue accessible only if a user is signed in. Over the next couple of lessons, we'll add this functionality. In this lesson, we'll add Firebase authentication to our ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," component. Then, in the next lesson, we'll add basic authorization so that only signed-in users can add tickets."),(0,i.kt)("p",null,"There are many, many ways to add Firebase authentication and authorization \u2014 ranging from doing everything from scratch (including creating custom hooks for authentication) to using small open-source libraries. In the world of React, the options can be a bit overwhelming."),(0,i.kt)("p",null,"The solution we'll use combines the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the simplest implementation that the Firebase documentation offers;"),(0,i.kt)("li",{parentName:"ul"},"Avoiding adding additional libraries if they aren't needed (we won't add any).")),(0,i.kt)("h2",{id:"adding-firebase-authentication"},"Adding Firebase Authentication"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Regardless of how we choose to incorporate Firebase authentication, we need to activate it in the Firebase console before we start adding it to our application."),(0,i.kt)("p",null,"Navigate to your Help Queue project in the Firebase console, expand the ",(0,i.kt)("em",{parentName:"p"},"Build")," menu in the left-hand menu, and then click ",(0,i.kt)("em",{parentName:"p"},"Authentication"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-authentication.png",alt:"The _Authentication_ menu item from the _Build_ menu."})),(0,i.kt)("p",null,"By default, authentication isn't enabled. So to get started, we'll click the ",(0,i.kt)("em",{parentName:"p"},"Get started")," button. This will open to the ",(0,i.kt)("em",{parentName:"p"},"Sign-in method")," tab within the authentication console. "),(0,i.kt)("p",null,"We'll see quite a few different ways Firebase can authenticate users ranging from an email and password to sign in with Google, Facebook or GitHub. We'll use an email and password to have users sign in."),(0,i.kt)("p",null,"So, within the ",(0,i.kt)("em",{parentName:"p"},"Sign-in providers")," section, select ",(0,i.kt)("em",{parentName:"p"},"Email/Password"),". In the image below this is circled in red:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-auth-email-password-option.png",alt:"Select _Email/Password_ from the many listed options for _Sign-in providers_."})),(0,i.kt)("p",null,"On the next screen make sure to enable the first option ",(0,i.kt)("em",{parentName:"p"},"Email/Password"),". We're not going to work with an email link (a passwordless sign in), though you are welcome to explore that on your own time. Finally, click the ",(0,i.kt)("em",{parentName:"p"},"Save")," button to save your selection and complete the setup process. "),(0,i.kt)("p",null,"We'll now see ",(0,i.kt)("em",{parentName:"p"},"Email/Password")," listed under a ",(0,i.kt)("em",{parentName:"p"},"Sign-in providers")," section."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/React/Week-4-React-2020/firebase-auth-users-tab-option.png",alt:"_Email/Password_ is not listed as an active authentication provider in the _Authentication_ section of the Firebase console. Also, the _Users_ tab is highlighted in a red circle."})),(0,i.kt)("p",null,"Note that there is a ",(0,i.kt)("em",{parentName:"p"},"Users")," tab at the upper left corner of the screen. This is circled in red in the above image. If we click on this tab, we'll see there are no users yet. This is a great place to add admins manually for a smaller site so other users can't access that functionality via the browser. We won't add users manually right now but keep this in mind if you just want admins to access the UI of a site."),(0,i.kt)("h3",{id:"accessing-authentication-in-our-source-code"},"Accessing Authentication in our Source Code"),(0,i.kt)("p",null,"Now that we've set up Firebase authentication in the Firebase console, we need to update our Firebase configuration to configure authentication locally. We'll do this with ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.md#getauth"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"getAuth()")," function"),". "),(0,i.kt)("p",null,"Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"src/firebase.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { initializeApp } from "firebase/app";\nimport { getFirestore } from \'firebase/firestore\';\nimport { getAuth } from "firebase/auth";\n\nconst firebaseConfig = {\n  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,\n  appId: process.env.REACT_APP_FIREBASE_APP_ID \n};\n\nconst app = initializeApp(firebaseConfig);\nconst auth = getAuth(app);\nconst db = getFirestore(app);\n\nexport { db, auth };\n')),(0,i.kt)("p",null,"First we import our ",(0,i.kt)("inlineCode",{parentName:"p"},"getAuth()")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},'"firebase/auth"'),"."),(0,i.kt)("p",null,"Similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirestore()")," function, ",(0,i.kt)("inlineCode",{parentName:"p"},"getAuth()")," returns ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.auth.md#auth_interface"},"an ",(0,i.kt)("inlineCode",{parentName:"a"},"Auth")," instance")," that's associated with our firebase app. In the code above, we save our ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," instance in a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"auth"),". Later when we need to access authentication functions, we'll use this variable to reference the authentication that's associated with our Help Queue web app, and to get valuable information like the currently signed in user."),(0,i.kt)("p",null,"Since we'll be using this variable in other parts of our code, we'll need to export it, so take note of the updated export statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export { db, auth };\n")),(0,i.kt)("p",null,"Now, we're exporting an object with two variables inside of it. With this change, the ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," variable is no longer a ",(0,i.kt)("strong",{parentName:"p"},"default")," export. Instead, both ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," are now called ",(0,i.kt)("strong",{parentName:"p"},"named")," exports. This means that when we import these variables in other files, the names of the imports need to exactly match the names of the exported variables. So, our very next step needs to be updating the import statement for ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," to destructure the ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," variable from the object we exported from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.js"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { db } from './../firebase.js'\n")),(0,i.kt)("p",null,"Now we're ready to create sign up, sign in, and sign out forms. In the interest of keeping things simple, we'll add all of this functionality to the same component, ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn"),"."),(0,i.kt)("h3",{id:"signing-up"},"Signing Up"),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn")," component, we'll start by creating a sign up form. "),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from \"react\";\n\nfunction SignIn(){  \n\n  return (\n    <React.Fragment>\n      <h1>Sign up</h1>\n      <form onSubmit={doSignUp}>\n        <input\n          type='text'\n          name='email'\n          placeholder='email' />\n        <input\n          type='password'\n          name='password'\n          placeholder='Password' />\n        <button type='submit'>Sign up</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\nexport default SignIn\n")),(0,i.kt)("p",null,"We create a simple form that will trigger a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"doSignUp()")," on submission. This will have two fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),". (A password confirmation field would be nice but we are keeping this simple.) Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," field has a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute set to ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," so the characters won't be visible."),(0,i.kt)("p",null,"Now let's write the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"doSignUp()")," function. Here's the new code:"),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { auth } from "./../firebase.js";\nimport { createUserWithEmailAndPassword } from "firebase/auth";\n\nfunction SignIn(){  \n  function doSignUp(event) {\n    event.preventDefault();\n    const email = event.target.email.value;\n    const password = event.target.password.value;\n    createUserWithEmailAndPassword(auth, email, password)\n      .then((userCredential) => {\n        // User successfully signed up \n      })\n      .catch((error) => {\n        // There was an error with sign up\n      });\n  }\n\n  return (\n    ...\n  );\n}\n\nexport default SignIn\n')),(0,i.kt)("p",null,"To sign up a new user, we need to import our ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," instance from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase.js")," and a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"createUserWithEmailAndPassword")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase/auth"),", so we have two new import statements at the top of the file."),(0,i.kt)("p",null,"Then we have our ",(0,i.kt)("inlineCode",{parentName:"p"},"doSignUp()")," function. In this function, we create an ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," parameter and call ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to prevent the default behavior of submitting a form (a page reload). Then, we grab the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," from the form."),(0,i.kt)("p",null,"Next, Firebase authentication comes into play. Let's take a closer look at that code:"),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"createUserWithEmailAndPassword(auth, email, password)\n  .then((userCredential) => {\n    // User successfully signed up \n  })\n  .catch((error) => {\n    // There was an error with sign up\n  });\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createUserWithEmailAndPassword()")," function takes three arguments: the auth instance, an email, and a password. It returns a promise, which means we can attach ",(0,i.kt)("inlineCode",{parentName:"p"},".then()")," to it to handle a successful response. We can also attach a ",(0,i.kt)("inlineCode",{parentName:"p"},".catch()")," to catch any errors. In either case, we'll want to let the user know whether or not their sign up was successful, so let's use our ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook to do just that. "),(0,i.kt)("p",null,"Here's the new code:"),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// New import below!\nimport React, { useState } from \"react\";\n\nfunction SignIn(){  \n  // New code below!\n  const [signUpSuccess, setSignUpSuccess] = useState(null);\n\n  function doSignUp(event) {\n    event.preventDefault();\n    const email = event.target.email.value;\n    const password = event.target.password.value;\n    createUserWithEmailAndPassword(auth, email, password)\n      .then((userCredential) => {\n        // New code below!\n        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)\n      })\n      .catch((error) => {\n        // New code below!\n        setSignUpSuccess(`There was an error signing up: ${error.message}!`)\n      });\n  }\n\n  return (\n    <React.Fragment>\n      <h1>Sign up</h1>\n      {/* New code below! */}\n      {signUpSuccess}\n      <form onSubmit={doSignUp}>\n        <input\n          type='text'\n          name='email'\n          placeholder='email' />\n        <input\n          type='password'\n          name='password'\n          placeholder='Password' />\n        <button type='submit'>Sign up</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\nexport default SignIn\n")),(0,i.kt)("p",null,"With these updates we create a state variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"signUpSuccess")," that will deliver a message to the user when they sign up: a success message, or an error message. Its initial value is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," so that it won't display unless a sign up event happens and there's a response (successful or not)."),(0,i.kt)("p",null,"We've also made use of some helpful information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"userCredential")," parameter that's passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},".then()")," on a successful sign up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"`You've successfully signed up, ${userCredential.user.email}!`\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"userCredential")," parameter represents a Firebase ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.usercredential.md#usercredential_interface"},(0,i.kt)("inlineCode",{parentName:"a"},"UserCredential"))," object. This object has a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),", which represents the newly created user. In terms of Firebase object types this user is a ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.user.md#user_interface"},(0,i.kt)("inlineCode",{parentName:"a"},"User")," object")," that also extends functionality from the ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.userinfo.md#userinfo_interface"},(0,i.kt)("inlineCode",{parentName:"a"},"UserInfo")," class"),". That's why we can access information about the new user like their email! "),(0,i.kt)("p",null,"At this point, we can run our application and sign up a new user. Take note that your password will need to be at least 6 characters long. Try it out \u2014 and check out the ",(0,i.kt)("em",{parentName:"p"},"Users")," tab in the ",(0,i.kt)("em",{parentName:"p"},"Authentication")," area within the Firebase console. You'll see that a new user has been added!"),(0,i.kt)("h3",{id:"signing-in"},"Signing In"),(0,i.kt)("p",null,"The process looks very similar for signing in. To keep things simple, we'll place this functionality in the same component we've been using for auth. Here's the form:"),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction SignIn(){  \n  ...\n\n  return (\n    <React.Fragment>\n      {/* Signup form lives here */}\n\n      <h1>Sign In</h1>\n      <form onSubmit={doSignIn}>\n        <input\n          type='text'\n          name='signinEmail'\n          placeholder='email' />\n        <input\n          type='password'\n          name='signinPassword'\n          placeholder='Password' />\n        <button type='submit'>Sign in</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\nexport default SignIn\n")),(0,i.kt)("p",null,"It's almost exactly the same as our sign in form, just with different variable names."),(0,i.kt)("p",null,"Next, let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"doSignIn()")," function. We'll need to make use of a new function from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase/auth"),", and we'll also create a new state variable to hold a success or error message for the sign in process. "),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n// new import below!\nimport { createUserWithEmailAndPassword, signInWithEmailAndPassword } from \"firebase/auth\";\n\nfunction SignIn(){  \n  const [signUpSuccess, setSignUpSuccess] = useState(null);\n  // new state variable\n  const [signInSuccess, setSignInSuccess] = useState(null);\n\n  function doSignUp(event) {\n    ...\n  }\n\n  // new sign in function\n  function doSignIn(event) {\n    event.preventDefault();\n    const email = event.target.signinEmail.value;\n    const password = event.target.signinPassword.value;\n    signInWithEmailAndPassword(auth, email, password)\n      .then((userCredential) => {\n        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)\n      })\n      .catch((error) => {\n        setSignInSuccess(`There was an error signing in: ${error.message}!`)\n      });\n  }\n\n  return (\n    <React.Fragment>\n      ...\n\n      <h1>Sign In</h1>\n      {/* New sign in success message*/}\n      {signInSuccess}\n      <form onSubmit={doSignIn}>\n        <input\n          type='text'\n          name='signinEmail'\n          placeholder='email' />\n        <input\n          type='password'\n          name='signinPassword'\n          placeholder='Password' />\n        <button type='submit'>Sign in</button>\n      </form>\n    </React.Fragment>\n  );\n}\n\nexport default SignIn\n")),(0,i.kt)("p",null,"The new ",(0,i.kt)("inlineCode",{parentName:"p"},"doSignIn()")," function looks very similar to the function we just created for signing up. The main difference here is that we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"signInWithEmailAndPassword()")," method, and the variable names are for signing ",(0,i.kt)("em",{parentName:"p"},"in"),". "),(0,i.kt)("h3",{id:"signing-out"},"Signing Out"),(0,i.kt)("p",null,"Signing out doesn't even require a form. We just need a sign-out button in our jsx that triggers the ",(0,i.kt)("inlineCode",{parentName:"p"},"signOut()")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase/auth"),". "),(0,i.kt)("p",null,"Here's the new code:"),(0,i.kt)("div",{class:"filename"},"src/components/SignIn.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react";\nimport { auth } from "./../firebase.js";\n// new import below!\nimport { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";\n\nfunction SignIn(){  \n  const [signUpSuccess, setSignUpSuccess] = useState(null);\n  const [signInSuccess, setSignInSuccess] = useState(null);\n  // new state variable\n  const [signOutSuccess, setSignOutSuccess] = useState(null);\n\n  function doSignUp(event) {\n    ...\n  }\n\n  function doSignIn(event) {\n    ...\n  }\n\n  // new function\n  function doSignOut() {\n    signOut(auth)\n      .then(function() {\n        setSignOutSuccess("You have successfully signed out!");\n      }).catch(function(error) {\n        setSignOutSuccess(`There was an error signing out: ${error.message}!`);\n      });\n  }\n\n  return (\n    <React.Fragment>\n      ...\n\n      {/* New sign out button*/}\n      <h1>Sign Out</h1>\n      {signOutSuccess}\n      <br />\n      <button onClick={doSignOut}>Sign out</button>\n    </React.Fragment>\n  );\n}\n\nexport default SignIn\n')),(0,i.kt)("p",null,"In the new code we do a few things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We import the ",(0,i.kt)("inlineCode",{parentName:"li"},"signOut")," function from ",(0,i.kt)("inlineCode",{parentName:"li"},"firebase/auth"),"."),(0,i.kt)("li",{parentName:"ul"},"We create a state variable called ",(0,i.kt)("inlineCode",{parentName:"li"},"signOutSuccess")," that will hold the sign out success or failure message."),(0,i.kt)("li",{parentName:"ul"},"We create a ",(0,i.kt)("inlineCode",{parentName:"li"},"doSignOut()")," function that calls the Firebase ",(0,i.kt)("inlineCode",{parentName:"li"},"signOut()")," function. ",(0,i.kt)("inlineCode",{parentName:"li"},"signOut()")," takes one argument: our ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"auth"),", which contains all of the information of the currently signed in user that Firebase needs to sign that user out. "),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"return"),' statement, we add a new "Sign Out" area that shows a button and the ',(0,i.kt)("inlineCode",{parentName:"li"},"SignOutSuccess")," message.")),(0,i.kt)("p",null,"At this point, we can sign up, sign in, and sign out \u2014 but none of this is very helpful without authorization. We'll cover that in the next lesson."))}d.isMDXComponent=!0}}]);