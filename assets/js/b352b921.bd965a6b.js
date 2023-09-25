"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[54673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=a,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={title:"Updating and Deleting Tickets in Firestore",id:"updating_and_deleting_tickets_in_firestore",slug:"updating_and_deleting_tickets_in_firestore",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0n_updating_and_deleting_tickets_with_firestore.md"},o=void 0,l={unversionedId:"react_part_time/react-with-nosql/updating_and_deleting_tickets_in_firestore",id:"react_part_time/react-with-nosql/updating_and_deleting_tickets_in_firestore",title:"Updating and Deleting Tickets in Firestore",description:"We're ready to get our edit and delete functionality working again. We will continue to refactor code in TicketControl.js to update the edit and delete functionality to alter tickets directly in Firestore. We'll also make use of three Firestore functions:",source:"@site/docs/react_part_time/8_react-with-nosql/0n_updating_and_deleting_tickets_with_firestore.md",sourceDirName:"react_part_time/8_react-with-nosql",slug:"/react_part_time/react-with-nosql/updating_and_deleting_tickets_in_firestore",permalink:"/lhtp/react_part_time/react-with-nosql/updating_and_deleting_tickets_in_firestore",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Updating and Deleting Tickets in Firestore",id:"updating_and_deleting_tickets_in_firestore",slug:"updating_and_deleting_tickets_in_firestore",hide_table_of_contents:!0,sidebar_position:14,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/8_react-with-nosql/0n_updating_and_deleting_tickets_with_firestore.md"},sidebar:"react_part_time",previous:{title:"Viewing Tickets from Firestore",permalink:"/lhtp/react_part_time/react-with-nosql/viewing_tickets_from_firestore"},next:{title:"Structuring Data in Firestore",permalink:"/lhtp/react_part_time/react-with-nosql/structuring_data_in_firestore"}},c={},s=[{value:"Updating Tickets",id:"updating-tickets",level:2},{value:"Deleting Tickets",id:"deleting-tickets",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're ready to get our edit and delete functionality working again. We will continue to refactor code in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," to update the edit and delete functionality to alter tickets directly in Firestore. We'll also make use of three Firestore functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateDoc()")," will allow us to update a document in Firestore."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deleteDoc()")," will allow us to delete documents in Firestore. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," will allow us to reference a document in the firestore database. With ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()"),", we can specify the location of a new document or the location of an existing document.")),(0,a.kt)("h2",{id:"updating-tickets"},"Updating Tickets"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To update tickets in Firestore, we'll refactor the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditingTicketInList()")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. "),(0,a.kt)("p",null,"First, we need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"updateDoc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"doc")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase/firestore"),":"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";\n')),(0,a.kt)("p",null,"Next, we need to refactor the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEditingTicketInList()")," function. Here's the new code:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";\nimport db from \'./../firebase.js\'\n\nfunction TicketControl() {\n  ...\n\n  const handleEditingTicketInList = async (ticketToEdit) => {\n    const ticketRef = doc(db, "tickets", ticketToEdit.id);\n    await updateDoc(ticketRef, ticketToEdit);\n    setEditing(false);\n    setSelectedTicket(null);\n  }\n\n  ...\n\n  return (\n    ...\n  );\n}\n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"While this code is new, it's rather similar to the process we followed when adding a ticket to Firestore:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, we create a document reference with the ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function for the ticket that we want to update:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function takes 3 arguments: the database instance, the collection name, and the unique document identifier."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"doc()")," function returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"DocumentReference")," object, which as its name suggests, is an object that acts as a reference to a document within our Firestore database. "))),(0,a.kt)("li",{parentName:"ul"},"Next, we call the ",(0,a.kt)("inlineCode",{parentName:"li"},"updateDoc()")," function. The first argument we pass into this function is the document reference for the ticket we want to update, and the second argument is the new data that the ticket should be updated with."),(0,a.kt)("li",{parentName:"ul"},"Finally, take note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"updateDoc()")," function is asynchronous, so we need to make our ",(0,a.kt)("inlineCode",{parentName:"li"},"handleEditingTicketInList()")," function ",(0,a.kt)("inlineCode",{parentName:"li"},"async")," and and apply the ",(0,a.kt)("inlineCode",{parentName:"li"},"await")," keyword before the ",(0,a.kt)("inlineCode",{parentName:"li"},"updateDoc()")," function call.")),(0,a.kt)("p",null,"Note that we can optionally rewrite the above function like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const handleEditingTicketInList = async (ticketToEdit) => {\n  await updateDoc(doc(db, "tickets", ticketToEdit.id), ticketToEdit);\n  setEditing(false);\n  setSelectedTicket(null);\n}\n')),(0,a.kt)("p",null,"Since we've set up the listener in the last lesson, this means that anytime we update a ticket with the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateDoc()")," function, our listener will be triggered and the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component will be updated."),(0,a.kt)("h2",{id:"deleting-tickets"},"Deleting Tickets"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To delete documents in Firestore, we'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket()")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. We'll also need the Firestore function ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteDoc()"),", so let's start by updating our import statement from ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase/firestore"),":"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";\n')),(0,a.kt)("p",null,"Next, let's update ",(0,a.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket()"),". Here's the new code:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";\nimport db from \'./../firebase.js\'\n\nfunction TicketControl() {\n  ...\n\n  const handleDeletingTicket = async (id) => {\n    await deleteDoc(doc(db, "tickets", id));\n    setSelectedTicket(null);\n  } \n\n  ...\n\n  return (\n    ...\n  );\n}\n\nexport default TicketControl;\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteDoc()")," function is nearly identical to the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateDoc()")," function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's asynchronous and uses ",(0,a.kt)("inlineCode",{parentName:"li"},"async")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"await")," to manage the asynchrony."),(0,a.kt)("li",{parentName:"ul"},"It takes a document reference as an argument that specifies which document in the Firestore database should be deleted. ")),(0,a.kt)("p",null,"The only difference from the ",(0,a.kt)("inlineCode",{parentName:"p"},"updateDoc()")," function is that ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteDoc()")," does not take a second argument for data."),(0,a.kt)("p",null,"And with that, we've completed CRUD functionality for our Help Queue application! "),(0,a.kt)("h2",{id:"whats-next"},"What's Next"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In the next lesson, we'll wrap up our introduction to Firestore by reviewing how to structure data in Firestore."),(0,a.kt)("p",null,"In upcoming coursework, we'll expand the functionality of our Help Queue: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We'll add authentication and basic authorization."),(0,a.kt)("li",{parentName:"ul"},"We'll use the react-router library to create routes."),(0,a.kt)("li",{parentName:"ul"},"We'll host our project with Firebase."),(0,a.kt)("li",{parentName:"ul"},"We'll learn about Firestore Queries, styled components, and other further exploration opportunities."),(0,a.kt)("li",{parentName:"ul"},"Finally, we'll incorporate a wait time into our Help Queue.")))}u.isMDXComponent=!0}}]);