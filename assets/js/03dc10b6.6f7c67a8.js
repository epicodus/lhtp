"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Viewing Tickets from Firestore",id:"viewing_tickets_from_firestore",slug:"viewing_tickets_from_firestore",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0m_viewing_tickets_from_firestore.md"},i=void 0,s={unversionedId:"react_classic/react-with-nosql/viewing_tickets_from_firestore",id:"react_classic/react-with-nosql/viewing_tickets_from_firestore",title:"Viewing Tickets from Firestore",description:"We now have the ability to add tickets to Firestore in our Help Queue application. However, we can't see the tickets in our application yet. There are two ways we can get data from Firestore:",source:"@site/docs/react_classic/5_react-with-nosql/0m_viewing_tickets_from_firestore.md",sourceDirName:"react_classic/5_react-with-nosql",slug:"/react_classic/react-with-nosql/viewing_tickets_from_firestore",permalink:"/react_classic/react-with-nosql/viewing_tickets_from_firestore",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Viewing Tickets from Firestore",id:"viewing_tickets_from_firestore",slug:"viewing_tickets_from_firestore",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0m_viewing_tickets_from_firestore.md"},sidebar:"react_classic",previous:{title:"Adding Tickets to Firestore",permalink:"/react_classic/react-with-nosql/adding_tickets_to_firestore"},next:{title:"Updating and Deleting Tickets in Firestore",permalink:"/react_classic/react-with-nosql/updating_and_deleting_tickets_in_firestore"}},l={},c=[{value:"Reading Firestore Data",id:"reading-firestore-data",level:2},{value:"Handling a Successful Response",id:"handling-a-successful-response",level:3},{value:"Handling Errors",id:"handling-errors",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We now have the ability to add tickets to Firestore in our Help Queue application. However, we can't see the tickets in our application yet. There are two ways we can get data from Firestore:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We can get all documents in a collection once with the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDocs()")," method. This is very similar to what Rails/.NET coders do with their respective frameworks. When data is needed, we make a request to Firestore.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We can set up a listener that actively listens for realtime changes in Firestore. Whenever Firestore is updated, our application will get a snapshot of the data and update our app accordingly."))),(0,o.kt)("p",null,"If we were to go with the first option, we'd have to set up code in our app that calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"getDocs()")," function anytime a ticket gets added, updated, or deleted so that our app is up-to-date with our database. However, that's the exact out-of-the-box functionality that we would get by setting up a listener to listen for realtime updates to our database. So, we'll go with option #2. "),(0,o.kt)("h2",{id:"reading-firestore-data"},"Reading Firestore Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll add our listener to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component, so that we can update our ",(0,o.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable with the data we retrieve from the Firestore database."),(0,o.kt)("p",null,"To properly set up this listener, we'll need to set up a ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks that does a few things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Runs once after our component first renders, "),(0,o.kt)("li",{parentName:"ul"},"Sets up an ",(0,o.kt)("inlineCode",{parentName:"li"},"onSnapshot")," listener that gets all of the ticket data in the ",(0,o.kt)("inlineCode",{parentName:"li"},"tickets")," collection and adds it to an array,"),(0,o.kt)("li",{parentName:"ul"},"Calls ",(0,o.kt)("inlineCode",{parentName:"li"},"setMainTicketList()")," passing in the array of tickets in order to update our ",(0,o.kt)("inlineCode",{parentName:"li"},"mainTicketList")," state variable. This in turn will trigger a re-render to our ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketControl")," component, and it will display the updated ticket data.")),(0,o.kt)("p",null,"We'll do this in three phases. In the first phase, we'll set up our ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook and learn the basics of the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function. Here's the first round of new code:"),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n// new import!\nimport { collection, addDoc, onSnapshot } from "firebase/firestore";\nimport db from \'./../firebase.js\'\n\nfunction TicketControl() {\n    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n    const [mainTicketList, setMainTicketList] = useState([]);\n    const [selectedTicket, setSelectedTicket] = useState(null);\n    const [editing, setEditing] = useState(false);\n\n  useEffect(() => { \n    const unSubscribe = onSnapshot(\n      collection(db, "tickets"), \n      (collectionSnapshot) => {\n        // do something with ticket data\n      }, \n      (error) => {\n        // do something with error\n      }\n    );\n\n    return () => unSubscribe();\n  }, []);\n\n  ...\n\n} \n\nexport default TicketControl;\n')),(0,o.kt)("p",null,"First, make sure to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"'firebase/firestore'"),"."),(0,o.kt)("p",null,"Let's notice a few things about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We've passed in an empty array as the second argument, which means our effect will run once after our component's first render. Just like with event listeners, we only want to create our Firestore database listener once. "),(0,o.kt)("li",{parentName:"ul"},"We return a cleanup function for the ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook to run. ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect()")," will call this function when the ",(0,o.kt)("inlineCode",{parentName:"li"},"TicketControl"),' component unmounts, and it will unsubscribe our database listener; by "unsubscribe", we mean to stop the listener.'),(0,o.kt)("li",{parentName:"ul"},"The side effect that we run is creating the ",(0,o.kt)("inlineCode",{parentName:"li"},"onSnapshot()")," listener that listens to changes in our database.")),(0,o.kt)("p",null,"Now let's examine the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First note that we can set up a database listener to listen for changes on a document, a set of documents, or an entire collection. In our case, we're listening for changes to the ",(0,o.kt)("inlineCode",{parentName:"li"},"tickets")," collection. "),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"onSnapshot()")," function takes three arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A document or collection reference that we want our listener to listen to."),(0,o.kt)("li",{parentName:"ul"},"A callback function to handle a successful request. This function will be called the first time that we set up our listener, and anytime there's a change to the ",(0,o.kt)("inlineCode",{parentName:"li"},"tickets")," collection. "),(0,o.kt)("li",{parentName:"ul"},"A callback function to handle errors that happen when making a database request."))),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"onSnapshot()")," function returns a function that we can call at any point to stop the listener. We save this returned function in a variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"unSubscribe"),". We could call this variable anything, like ",(0,o.kt)("inlineCode",{parentName:"li"},"stop")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"clearListener"),".")),(0,o.kt)("h3",{id:"handling-a-successful-response"},"Handling a Successful Response"),(0,o.kt)("p",null,"Now that we have a sense of the basics of our new ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook and the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function, let's add code to handle a successful response. "),(0,o.kt)("p",null,"Here's the new code:"),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n\nfunction TicketControl() {\n  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n  const [mainTicketList, setMainTicketList] = useState([]);\n  const [selectedTicket, setSelectedTicket] = useState(null);\n  const [editing, setEditing] = useState(false);\n\n  useEffect(() => { \n    const unSubscribe = onSnapshot(\n      collection(db, "tickets"), \n      (collectionSnapshot) => {\n        const tickets = [];\n        collectionSnapshot.forEach((doc) => {\n            tickets.push({\n              names: doc.data().names, \n              location: doc.data().location, \n              issue: doc.data().issue, \n              id: doc.id\n            });\n        });\n        setMainTicketList(tickets);\n      }, \n      (error) => {\n        // do something with error\n      }\n    );\n\n    return () => unSubscribe();\n  }, []);\n\n  ...\n\n} \n\nexport default TicketControl;\n')),(0,o.kt)("p",null,"Let's summarize what we're doing with this code: we're looping through the collection of returned ticket documents to construct an array of JavaScript ticket objects. When we've finished constructing the array, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"setMainTicketList()")," to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable with the array of tickets."),(0,o.kt)("p",null,"There's a few things to note in this process. "),(0,o.kt)("p",null,"First, it's important to note that how the Firestore database stores our data is not the same as how we structure that same data in JavaScript. That's why we need to manually create a JavaScript array, loop through the returned collection (represented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionSnapshot")," parameter), create a JavaScript object for each ticket, and push it to our array. "),(0,o.kt)("p",null,"Second, it's during this process that we create our ticket object's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property and set it to the auto-generated id from Firestore. We can access the document identifier by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property of each document in the returned collection: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"collectionSnapshot.forEach((doc) => {\n    tickets.push({\n      ...\n      id: doc.id // this code\n    });\n});\n")),(0,o.kt)("p",null,"Third, we need to take a closer look at the Firestore object types that we're accessing here. As previously noted, the ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionSnapshot")," parameter represents the response from our database. We can name this parameter whatever we want, but since we're accessing a collection, we descriptively call our parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionSnapshot"),". In terms of Firestore object types, this parameter is a ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.querysnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"QuerySnapshot"))," object that's made up of one or more ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"DocumentSnapshot"))," objects. Each of these object types have their own properties and methods. This is important to note, because when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionSnapshot.forEach(...)"),", we're actually calling a ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.querysnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"QuerySnapshot"))," method, and not JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," method. "),(0,o.kt)("p",null,"However, ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.querysnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"QuerySnapshot"))," has a handy ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," property that returns an array of the collection's data. That means we can call any JavaScript array method on ",(0,o.kt)("inlineCode",{parentName:"p"},"collectionSnapshot.docs"),". Here's an example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.map()")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.forEach()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const tickets = collectionSnapshot.docs.map((doc) => {\n  return {\n    names: doc.data().names, \n    location: doc.data().location, \n    issue: doc.data().issue, \n    id: doc.id\n  };\n});\n")),(0,o.kt)("p",null,"The lesson here is that you should always check the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_"},"API reference"),' of the tools you are working with when you run into issues doing something you expect you might be able to do. Why the API reference? It lists object types (also called "classes") in detail, including any properties and methods of those objects, as well as the parameter and return types for any functions. '),(0,o.kt)("p",null,"Since each document in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CollectionSnapshot")," that we're looping through is a ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentSnapshot")," object, we need to use the methods available for that object type to access the document's data. In our code, we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentSnapshot.data()")," method, but we could use ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot.md#documentsnapshotget"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"DocumentSnapshot.get()")," method")," instead, but we'll leave that for further exploration."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentSnapshot.data()")," method returns all of a documents data in the form of a JavaScript object, mapping over the Firestore document fields and values to JS object keys and values. So for example, in ",(0,o.kt)("inlineCode",{parentName:"p"},"doc.data().names"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"doc")," accesses the Firestore document, a ",(0,o.kt)("inlineCode",{parentName:"li"},"DocumentSnapshot")," object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".data()")," returns the Firestore document's data into a JavaScript object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".names")," accesses the ",(0,o.kt)("inlineCode",{parentName:"li"},"names")," key to get its value.")),(0,o.kt)("p",null,"Because ",(0,o.kt)("inlineCode",{parentName:"p"},".data()")," transforms all of a document's data into a JS object, we could shorten our code with the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread operator"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const unSubscribe = onSnapshot(\n  collection(db, "tickets"), \n  (collectionSnapshot) => {\n    const tickets = [];\n    collectionSnapshot.forEach((doc) => {\n        tickets.push({\n          ... doc.data(), // Spread operator in use!\n          id: doc.id\n        });\n    });\n    setMainTicketList(tickets);\n  }, \n  (error) => {\n    // do something with error\n  }\n);\n')),(0,o.kt)("p",null,"Updating your code to use the spread operator is entirely optional, and you should only do it if you understand how it works. "),(0,o.kt)("p",null,"As always, there's many ways to structure our code. To learn about other handy methods and properties for ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentSnapshot")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"QuerySnapshot"),", take a look at the Firestore API reference when you have the time:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"DocumentSnapshot"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/reference/js/firestore_.querysnapshot"},(0,o.kt)("inlineCode",{parentName:"a"},"QuerySnapshot")))),(0,o.kt)("p",null,"The last thing to note with the addition of this new code is actually a reminder: all of the code in this first callback function will run every time there's an update in our Firestore database. This is all thanks to the built-in functionality of the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function!"),(0,o.kt)("p",null,"Next, let's handle errors."),(0,o.kt)("h3",{id:"handling-errors"},"Handling Errors"),(0,o.kt)("p",null,"As described on the docs for ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore/query-data/listen"},"handling listener errors"),", these can be caused by issues with security permissions or invalid queries (like listening to a collection or document that doesn't exist). Also, if an error does occur with our listener, it will automatically stop listening. Given these constraints, these issues usually will almost always be sorted out in development before any code gets shipped. "),(0,o.kt)("p",null,"However, we can still set up general error handling to ensure that if errors do come up with our listener, they at least get printed to the DOM. To do this, we'll set up a new state variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," to track any errors that occur."),(0,o.kt)("p",null,"Here's what our updated code looks like (pay attention to the comments as you review the code): "),(0,o.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState } from 'react';\nimport NewTicketForm from './NewTicketForm';\nimport TicketList from './TicketList';\nimport EditTicketForm from './EditTicketForm';\nimport TicketDetail from './TicketDetail';\nimport { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc } from \"firebase/firestore\";\nimport db from './../firebase.js'\n\nfunction TicketControl() {\n  ...\n  // new code!\n  const [error, setError] = useState(null);\n  \n  useEffect(() => { \n    const unSubscribe = onSnapshot(\n      collection(db, \"tickets\"), \n      (collectionSnapshot) => {\n        ...\n      }, \n      (error) => {\n        // new code!\n        setError(error.message);\n      }\n    );\n\n    return () => unSubscribe();\n  }, []);\n\n  ...\n\n  // new code!\n  if (error) {\n    currentlyVisibleState = <p>There was an error: {error}</p>\n  } else if (editing) {      \n    ...\n  } else if (selectedTicket != null) {\n    ...\n  } else if (formVisibleOnPage) {\n    ...\n  } else {\n    ...\n  }\n\n  return (\n    <React.Fragment>\n      {currentlyVisibleState}\n      {/* New code below! */}\n      {error ? null : <button onClick={handleClick}>{buttonText}</button>}\n    </React.Fragment>\n  );\n}\n\nexport default TicketControl;\n")),(0,o.kt)("p",null,"A Firestore error is returned as a ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.firestoreerror"},(0,o.kt)("inlineCode",{parentName:"a"},"FirestoreError"))," object and it has a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," property with a description of the error that occurred. So, if an error does occur with our listener, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"setError(error.message)"),"."),(0,o.kt)("p",null,"Later in our conditional that determines the UI, we first check to see if there's an error, and if so, to display it. Finally, in our return statement, we make sure to only display the button element if there is not an error."),(0,o.kt)("p",null,"Optionally, if you want to check that this code works, we cause a security permissions issue by updating the Firestore database rules to only allow reading and writing data if a user is authenticated. To do this, navigate to your Firestore database, and then select the ",(0,o.kt)("em",{parentName:"p"},"Rules")," tab. Within the input box, comment out the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"allow")," statement. It should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /{document=**} {\n      // allow read, write: if\n      //   request.time < timestamp.date(2021, 12, 12);\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Then, add this new ",(0,o.kt)("inlineCode",{parentName:"p"},"allow")," statement below the commented out rules: ",(0,o.kt)("inlineCode",{parentName:"p"},"allow read, write: if request.auth != null;"),". Your rules should now look similar to this code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /{document=**} {\n      // allow read, write: if\n      //   request.time < timestamp.date(2021, 12, 12);\n      allow read, write: if request.auth != null;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Then, publish your changes. The new rules could take a few moments to take effect. "),(0,o.kt)("p",null,"Finally, test out your app! You should see the following message on screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"There was an error: Missing or insufficient permissions.\n")),(0,o.kt)("p",null,"When you've tested your app to your heart's content, make sure to revert your database rules to what they were previously! We still need to add update and delete functionality."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that we have the listener set up in ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),", anytime we change the database from our app or from the Firestore Database console (via the online Firebase console for the Help Queue project), the listener will automatically call the first callback function (so long as there is not an error) that we set up in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// the first callback function within `onSnapshot()`\n(collectionSnapshot) => {\n  const tickets = [];\n  collectionSnapshot.forEach((doc) => {\n      tickets.push({\n        names: doc.data().names, \n        location: doc.data().location, \n        issue: doc.data().issue, \n        id: doc.id\n      });\n  });\n  setMainTicketList(tickets);\n}\n")),(0,o.kt)("p",null,"As we know, this callback function handles creating an array of tickets. "),(0,o.kt)("p",null,"Since we call ",(0,o.kt)("inlineCode",{parentName:"p"},"setMainTicketList(tickets)")," to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable from within the listener, this will trigger a re-render of our ",(0,o.kt)("inlineCode",{parentName:"p"},"TicketControl")," component so that our application is always showing the most up-to-date data from our database."))}d.isMDXComponent=!0}}]);