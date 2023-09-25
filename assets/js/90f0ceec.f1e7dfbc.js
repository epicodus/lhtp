"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"NaN. Firebase Authorization",id:"firebase_authorization",slug:"firebase_authorization",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1e_firebase_authorization.md"},o=void 0,s={unversionedId:"react_part_time/react-with-nosql/firebase_authorization",id:"react_part_time/react-with-nosql/firebase_authorization",title:"NaN. Firebase Authorization",description:"In the last lesson, we added Firebase authentication to our SignIn component. However at this point, it really doesn't make a difference because our application doesn't care whether a user is signed in or not. In this lesson, we'll add some basic authorization to lock down the queue if a user isn't signed in.",source:"@site/docs/react_part_time/8_react-with-nosql/1e_firebase_authorization.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/firebase_authorization",permalink:"/lhtp/react_part_time/react-with-nosql/firebase_authorization",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"NaN. Firebase Authorization",id:"firebase_authorization",slug:"firebase_authorization",hide_table_of_contents:!0,sidebar_position:23,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/1e_firebase_authorization.md"},sidebar:"react_part_time",previous:{title:"NaN. Firebase Authentication",permalink:"/lhtp/react_part_time/react-with-nosql/firebase_authentication"},next:{title:"NaN. Journal #16 Discussion",permalink:"/lhtp/react_part_time/react-with-nosql/journal_16_discussion"}},l={},c=[{value:"Adding Basic Authorization to Help Queue",id:"adding-basic-authorization-to-help-queue",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we added Firebase authentication to our ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," component. However at this point, it really doesn't make a difference because our application doesn't care whether a user is signed in or not. In this lesson, we'll add some basic authorization to lock down the queue if a user isn't signed in."),(0,a.kt)("p",null,"In order to do this, we'll make some changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),"."),(0,a.kt)("h2",{id:"adding-basic-authorization-to-help-queue"},"Adding Basic Authorization to Help Queue"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start by importing our ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth")," instance from ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.js")," so we can access user data, like the currently signed in user."),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { db, auth } from './../firebase.js';\n")),(0,a.kt)("p",null,"Next, we'll add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement, and we'll add all of our ticket UI logic within the new ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement. We'll look at the new code as integrated with the existing ticket UI logic, and then we'll look at the new code on its own.  "),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'...\nimport { db, auth } from \'./../firebase.js\'\n\nfunction TicketControl() {\n  ...\n\n  ...\n  \n\n  if (auth.currentUser == null) {\n    return (\n      <React.Fragment>\n        <h1>You must be signed in to access the queue.</h1>\n      </React.Fragment>\n    )\n  } else if (auth.currentUser != null) {\n\n    let currentlyVisibleState = null;\n    let buttonText = null; \n\n    if (error) {\n      currentlyVisibleState = <p>There was an error: {error}</p>\n    } else if (editing) {      \n      currentlyVisibleState = <EditTicketForm \n      ticket = {selectedTicket} \n      onEditTicket = {handleEditingTicketInList} />\n      buttonText = "Return to Ticket List";\n    } else if (selectedTicket != null) {\n      currentlyVisibleState = <TicketDetail \n      ticket={selectedTicket} \n      onClickingDelete={handleDeletingTicket}\n      onClickingEdit = {handleEditClick} />\n      buttonText = "Return to Ticket List";\n    } else if (formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm \n      onNewTicketCreation={handleAddingNewTicketToList}/>;\n      buttonText = "Return to Ticket List"; \n    } else {\n      currentlyVisibleState = <TicketList \n      onTicketSelection={handleChangingSelectedTicket} \n      ticketList={mainTicketList} />;\n      buttonText = "Add Ticket"; \n    }\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n        {error ? null : <button onClick={handleClick}>{buttonText}</button>} \n      </React.Fragment>\n    );\n  }\n}\n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"For additional clarity, here's the new code we added, on its own:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport { db, auth } from './../firebase.js'\n\nfunction TicketControl() {\n  ...\n\n  if (auth.currentUser == null) {\n    return (\n      <React.Fragment>\n        <h1>You must be signed in to access the queue.</h1>\n      </React.Fragment>\n    )\n  } else if (auth.currentUser != null) {\n    ... \n    \n    return (\n      ...\n    );\n  }  // Don't forget the closing curly bracket!\n}\n\nexport default TicketControl;\n")),(0,a.kt)("p",null,"We set up our conditional UI logic by checking the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.currentUser"),". You may readily guess what this represents, but let's get a little bit into the weeds. "),(0,a.kt)("p",null,"We previously learned that the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," variable represents the authentication instance that's connected to our Help Queue web app that we created with Firebase. Well the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," is a Firebase ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.auth.md#auth_interface"},(0,a.kt)("inlineCode",{parentName:"a"},"Auth")," object type"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth")," has a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser"),", which logs the currently signed in user. Notably, if there is no user signed in, then ",(0,a.kt)("inlineCode",{parentName:"p"},"currentUser")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,a.kt)("p",null,"So, when ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.currentUser == null")," is true, then we display a message stating that the user needs to sign in to see the list of tickets. When ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.currentUser != null"),", that means a user is signed in, and we show them the list of tickets. "),(0,a.kt)("p",null,"If you are wondering where the ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," variable is coming from, we originally created a state variable for ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," to hold any errors generated in the process of querying our database. For a review, check out the lesson ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/lessons/viewing-tickets-from-firestore"},"Viewing Tickets from Firestore"),"."),(0,a.kt)("p",null,"Take note that when ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.currentUser")," is set to a signed in user, that user is a ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.user.md#user_interface"},(0,a.kt)("inlineCode",{parentName:"a"},"User")," object")," that extends functionality from the ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/auth.userinfo.md#userinfo_interface"},(0,a.kt)("inlineCode",{parentName:"a"},"UserInfo")," class"),". These classes contain properties that store the user's personal information, like their email, display name, phone number, and photo URL. That's the making of a user profile right there! Currently, we only gather an email and password, so if you want to add functionality for a user profile, you'll have to explore that in a project you create for this course section, or on your own. "),(0,a.kt)("p",null,"At this point, we're ready to try out the authentication we created. Go ahead and do so now!"),(0,a.kt)("p",null,"In this lesson, we've demonstrated how we can use authorization to determine what a component should render. The use case we provided in this lesson is simple \u2014 and larger applications will need more robust authentication and authorization. To learn more information on different ways a user can be authenticated, visit the Firebase ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth/web/start"},"documentation for authentication"),"."))}d.isMDXComponent=!0}}]);