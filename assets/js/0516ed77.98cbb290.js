"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[15249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Adding Wait Time to the Queue",id:"adding_wait_time_to_the_queue",slug:"adding_wait_time_to_the_queue",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2b_adding_wait_time_to_the_queue.md"},o=void 0,s={unversionedId:"react_classic/react-with-nosql/adding_wait_time_to_the_queue",id:"react_classic/react-with-nosql/adding_wait_time_to_the_queue",title:"Adding Wait Time to the Queue",description:"In this lesson we're going to work with the Firestore server timestamp to add a wait time to our Help Queue project. For this refactor, we'll need to complete a few steps:",source:"@site/docs/react_classic/5_react-with-nosql/2b_adding_wait_time_to_the_queue.md",sourceDirName:"react_classic/5_react-with-nosql",slug:"/react_classic/react-with-nosql/adding_wait_time_to_the_queue",permalink:"/react_classic/react-with-nosql/adding_wait_time_to_the_queue",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Adding Wait Time to the Queue",id:"adding_wait_time_to_the_queue",slug:"adding_wait_time_to_the_queue",hide_table_of_contents:!0,sidebar_position:25,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/2b_adding_wait_time_to_the_queue.md"},sidebar:"react_classic",previous:{title:"Firestore Queries",permalink:"/react_classic/react-with-nosql/firestore_queries"},next:{title:"Hosting with Firebase",permalink:"/react_classic/react-with-nosql/hosting_with_firebase"}},l={},p=[{value:"Adding a Server Timestamp at Ticket Creation",id:"adding-a-server-timestamp-at-ticket-creation",level:2},{value:"Adding a Formatted Wait Time",id:"adding-a-formatted-wait-time",level:2},{value:"Adding a Side Effect: Updating <code>formattedWaitTime</code> Every Minute",id:"adding-a-side-effect-updating-formattedwaittime-every-minute",level:3},{value:"Displaying <code>formattedWaitTime</code> in the <code>Ticket</code> Component",id:"displaying-formattedwaittime-in-the-ticket-component",level:3},{value:"Ordering Tickets by Creation Timestamp",id:"ordering-tickets-by-creation-timestamp",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson we're going to work with the Firestore server timestamp to add a wait time to our Help Queue project. For this refactor, we'll need to complete a few steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We'll use a new function called ",(0,i.kt)("inlineCode",{parentName:"li"},"serverTimestamp()")," to generate a timestamp when a ticket is initially created. This will be the exact time when the ticket is added to our database."),(0,i.kt)("li",{parentName:"ol"},"Then, we'll use this timestamp to generate a formatted wait time using the ",(0,i.kt)("inlineCode",{parentName:"li"},"date-fns")," library. "),(0,i.kt)("li",{parentName:"ol"},"Finally, we'll set up a ",(0,i.kt)("inlineCode",{parentName:"li"},"useEffect()")," hook with a ",(0,i.kt)("inlineCode",{parentName:"li"},"setInterval()")," function that updates the formatted wait time for all tickets every minute.")),(0,i.kt)("p",null,"We'll also learn how to use a Firestore timestamp to order our tickets from oldest to newest.\nWhy bother? Well, we're making use of timestamps for another scenario: preserving the creation order for every document in a collection."),(0,i.kt)("p",null,"Previously we learned that the auto-generated IDs from Firestore are always random and they do not include any reference as to the order in which each document was created. However, Firestore still orders the documents in a collection alphabetically by its identifier, with numbers taking precedence over letters. This means that the order in which documents appear in the database and our website is subject to change anytime a new document is added. That's no good. So, we'll solve that issue in this lesson, and we'll do so with the help of server timestamps. "),(0,i.kt)("p",null,"Let's get into this refactor!"),(0,i.kt)("h2",{id:"adding-a-server-timestamp-at-ticket-creation"},"Adding a Server Timestamp at Ticket Creation"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The first thing we'll do in this refactor is create a server timestamp when a ticket is first created. Later on, we'll use this value to calculate a formatted time that shows how long a ticket has been open. "),(0,i.kt)("p",null,"To add a Firestore server timestamp to new tickets, we'll need to update ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js"),". Here's the new code:  "),(0,i.kt)("div",{class:"filename"},"src/components/NewTicketForm.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\n// new import!\nimport { serverTimestamp } from "firebase/firestore";\n\nfunction NewTicketForm(props){\n\n  function handleNewTicketFormSubmission(event) {\n    event.preventDefault();\n    props.onNewTicketCreation({\n      names: event.target.names.value, \n      location: event.target.location.value, \n      issue: event.target.issue.value,\n      // new property!\n      timeOpen: serverTimestamp()\n    });\n  }\n\n  return (\n    ...\n  );\n}\n\nNewTicketForm.propTypes = {\n  onNewTicketCreation: PropTypes.func\n};\n\nexport default NewTicketForm;\n')),(0,i.kt)("p",null,"We've added a new import to get access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverTimestamp()")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase/firestore"),". Then, we've added a new ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property that's set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverTimestamp()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"timeOpen: serverTimestamp()\n")),(0,i.kt)("p",null,"As you may guess, the ",(0,i.kt)("inlineCode",{parentName:"p"},"serverTimestamp()")," function returns a new timestamp corresponding to when the ticket gets added as a document in the database."),(0,i.kt)("h2",{id:"adding-a-formatted-wait-time"},"Adding a Formatted Wait Time"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The next step is to add a formatted wait time that displays how long a ticket has been open. Our next refactor will start in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),", and then move to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js"),". "),(0,i.kt)("p",null,"We'll start by installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"date-fns")," library, a popular JavaScript library for working with dates and time. We can use date-fns to manipulate and parse time, which is exactly what we'll use it for. "),(0,i.kt)("p",null,"In the root directory of your Help Queue project, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm install date-fns@2\n")),(0,i.kt)("p",null,"We'll be using the same ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()"),' helper function as we did in the last course section "React with Redux". The ',(0,i.kt)("a",{parentName:"p",href:"https://date-fns.org/docs/Getting-Started"},"documentation for date-fns")," is extensive, and there are many other helper functions available. We recommend checking it out when you have the time \u2014 there are many use cases where it can add valuable functionality to an application."),(0,i.kt)("p",null,"To start, we'll import ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow")," at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { formatDistanceToNow } from 'date-fns';\n")),(0,i.kt)("p",null,"This is how we'll use ",(0,i.kt)("a",{parentName:"p",href:"https://date-fns.org/v2.29.1/docs/formatDistanceToNow"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"formatDistanceToNow")," helper function"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"formatDistanceToNow(new Date());\n")),(0,i.kt)("p",null,'This time, we\'re not going to include the options object that will add "ago" to the end of the formatted time, like "7 minutes ago". You can add it if you like. This is what the syntax looks like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"formatDistanceToNow(new Date(), {\n  addSuffix: true\n});\n")),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()")," takes a JavaScript date object as its first argument, we'll need to translate the Firestore server timestamp into a JavaScript date. Let's do that next:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { formatDistanceToNow } from 'date-fns';\n\nfunction TicketControl() {\n  ...\n\n  useEffect(() => { \n    const unSubscribe = onSnapshot(\n      collection(db, \"tickets\"), \n      (querySnapshot) => {\n        const tickets = [];\n        querySnapshot.forEach((doc) => {\n          // new code below!\n          const timeOpen = doc.get('timeOpen', {serverTimestamps: \"estimate\"}).toDate();\n          const jsDate = new Date(timeOpen);\n          tickets.push({\n            names: doc.data().names, \n            location: doc.data().location, \n            issue: doc.data().issue, \n            // new code below!\n            timeOpen: jsDate,\n            formattedWaitTime: formatDistanceToNow(jsDate),\n            id: doc.id\n          });\n        });\n        setMainTicketList(tickets);\n      },\n      (error) => {\n        setError(error.message);\n      }\n    );\n\n    return () => unSubscribe();\n  }, []);\n\n  ...\n  \n  ...\n}\n\nexport default TicketControl;\n")),(0,i.kt)("p",null,"Let's break down this new code. First we go through the process of turning the Firestore server timestamp into a JS Date object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const timeOpen = doc.get('timeOpen', {serverTimestamps: \"estimate\"}).toDate();\nconst jsDate = new Date(timeOpen);\n")),(0,i.kt)("p",null,"The code ",(0,i.kt)("inlineCode",{parentName:"p"},"doc.get('timeOpen', {serverTimestamps: \"estimate\"})")," gets the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," field for the current document; this value is a ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/js/firestore_.timestamp.md"},"Firestore ",(0,i.kt)("inlineCode",{parentName:"a"},"Timestamp")," object"),". Then we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Timestamp.toDate()")," method on the server timestamp to turn it into data that's formatted for JavaScript. "),(0,i.kt)("p",null,"Then we pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," variable \u2014 a Firestore timestamp that's been transformed into data that's formatted for JavaScript \u2014 and pass it into the JavaScript Date constructor: ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date(timeOpen)"),". "),(0,i.kt)("p",null,"We then add two new properties to our ticket object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tickets.push({\n  ...\n  timeOpen: jsDate,\n  formattedWaitTime: formatDistanceToNow(jsDate),\n  ...\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property is set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"jsDate")," variable, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property is set to a time that's formatted by ",(0,i.kt)("inlineCode",{parentName:"p"},"date-fns"),". "),(0,i.kt)("p",null,"Why not leave ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," as a server Timestamp? We'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property later to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," every minute. Let's do that part next!"),(0,i.kt)("h3",{id:"adding-a-side-effect-updating-formattedwaittime-every-minute"},"Adding a Side Effect: Updating ",(0,i.kt)("inlineCode",{parentName:"h3"},"formattedWaitTime")," Every Minute"),(0,i.kt)("p",null,"To update the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property every minute, we'll need to make use of the  JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function and React's ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook. "),(0,i.kt)("p",null,"Here's the new code:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { formatDistanceToNow } from 'date-fns';\n\nfunction TicketControl() {\n  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);\n  const [mainTicketList, setMainTicketList] = useState([]);\n  ...\n\n  useEffect(() => {\n    function updateTicketElapsedWaitTime() {\n      const newMainTicketList = mainTicketList.map(ticket => {\n        const newFormattedWaitTime = formatDistanceToNow(ticket.timeOpen);\n        return {...ticket, formattedWaitTime: newFormattedWaitTime};\n      });\n      setMainTicketList(newMainTicketList);\n    }\n\n    const waitTimeUpdateTimer = setInterval(() =>\n      updateTicketElapsedWaitTime(), \n      60000\n    );\n\n    return function cleanup() {\n      clearInterval(waitTimeUpdateTimer);\n    }\n  }, [mainTicketList])\n\n  ...\n}\n\nexport default TicketControl;\n")),(0,i.kt)("p",null,"Let's first note that our ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook depends on the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable, because we look through it within the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook; that's why we've added ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," to the dependencies array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  useEffect(() => {\n    // code for side effect\n  }, [mainTicketList])\n")),(0,i.kt)("p",null,"This also means that our effect will get called anytime the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList")," state variable updates. "),(0,i.kt)("p",null,"Next, let's take a look at the effect itself, all of the code inside of the callback function that we pass as the first argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"() => {\n  function updateTicketWaitTime() {\n    const newMainTicketList = mainTicketList.map(ticket => {\n      const newFormattedWaitTime = formatDistanceToNow(ticket.timeOpen);\n      return {...ticket, formattedWaitTime: newFormattedWaitTime};\n    });\n    setMainTicketList(newMainTicketList);\n  }\n\n  const waitTimeInterval = setInterval(() =>\n    updateTicketWaitTime(), \n    60000\n  );\n\n  return function cleanup() {\n    clearInterval(waitTimeInterval);\n  }\n}\n")),(0,i.kt)("p",null,"First we set up a helper function called ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTicketWaitTime()"),". This function handles two main tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mapping through the ",(0,i.kt)("inlineCode",{parentName:"li"},"mainTicketList")," state variable to update the ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime")," for each ticket, and return a new array of updated tickets."),(0,i.kt)("li",{parentName:"ul"},"Passing the updated version of the ticket list to ",(0,i.kt)("inlineCode",{parentName:"li"},"setMainTicketList()")," so that our state variable is updated and our ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl")," component re-renders with the updated list of tickets.")),(0,i.kt)("p",null,"We then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTicketWaitTime()")," when we set up the interval. As a reminder, JavaScript's ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function takes two arguments: a function that should be run on every interval, and the length of the interval in milliseconds. We've set up our interval to run ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTicketWaitTime()")," every minute, which corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"60000")," milliseconds."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function itself returns a reference to itself, which we store in the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"waitTimeInterval"),". We can then use this reference to stop/clear the interval. That's exactly what we do with the function that we return from the effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"() => {\n  ...\n\n  return function cleanup() {\n    clearInterval(waitTimeInterval);\n  }\n}\n")),(0,i.kt)("p",null,"The function that we return from the effect is the clean up function that will run when the component unmounts, and before every rerun of the effect. What we do is call ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval(waitTimeInterval)"),", stopping the interval from running. This is an important step, because it prevents the creation of multiple intervals!"),(0,i.kt)("h3",{id:"displaying-formattedwaittime-in-the-ticket-component"},"Displaying ",(0,i.kt)("inlineCode",{parentName:"h3"},"formattedWaitTime")," in the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Ticket")," Component"),(0,i.kt)("p",null,"Next, let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket")," component to display the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),". In this case, we'll need to update ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList.js")," to pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," as a prop to each ",(0,i.kt)("inlineCode",{parentName:"p"},"<Ticket />")," component. Let's start there. "),(0,i.kt)("p",null,"Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport Ticket from "./Ticket";\nimport PropTypes from "prop-types";\n\nfunction TicketList(props){\n\n  return (\n    <React.Fragment>\n      <hr/>\n      {props.ticketList.map((ticket) =>\n        <Ticket \n          whenTicketClicked={props.onTicketSelection}\n          names={ticket.names}\n          location={ticket.location}\n          // new prop!\n          formattedWaitTime={ticket.formattedWaitTime}\n          issue={ticket.issue}\n          id={ticket.id}\n          key={ticket.id}/>\n      )}\n    </React.Fragment>\n  );\n}\n\nTicketList.propTypes = {\n  ticketList: PropTypes.array,\n  onTicketSelection: PropTypes.func\n};\n\nexport default TicketList;\n')),(0,i.kt)("p",null,"Next, we'll update ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js")," to  display the new ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," prop, and add it to our prop-types."),(0,i.kt)("p",null,"Here's the new code:"),(0,i.kt)("div",{class:"filename"},"src/components/Ticket.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction Ticket(props){\n\n  return (\n    <React.Fragment>\n      <div onClick = {() => props.whenTicketClicked(props.id)}>\n        <h3>{props.location} - {props.names}</h3>\n        <p><em>{props.issue}</em></p>\n        {/* new code below! */}\n        <p><em>{props.formattedWaitTime}</em></p>\n        <hr/>\n      </div>\n    </React.Fragment>\n  );\n}\n\nTicket.propTypes = {\n  names: PropTypes.string,\n  location: PropTypes.string,\n  issue: PropTypes.string,\n  // new code below!\n  formattedWaitTime: PropTypes.string,\n  id: PropTypes.string,\n  whenTicketClicked: PropTypes.func\n}\n\nexport default Ticket;\n')),(0,i.kt)("p",null,"At this point, we've completed our refactor. Serve your Help Queue and test out the changes we made; you should now see a formatted time listed that shows how long a ticket has been open. "),(0,i.kt)("p",null,"Before proceeding, delete any old tickets created without a formatted wait time. Doing this will help us avoid errors when we sort the Firestore tickets by their creation date. "),(0,i.kt)("h2",{id:"ordering-tickets-by-creation-timestamp"},"Ordering Tickets by Creation Timestamp"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that we have a timestamp associated with each ticket, let's sort our tickets by their creation date. To do this we need to change our ",(0,i.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," Firestore listener in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"query()"),"."),(0,i.kt)("p",null,"Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'...\n// Two new imports: query and orderBy\nimport { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";\n...\n\nfunction TicketControl() {\n  ...\n\n  useEffect(() => { \n    // new code below!\n    const queryByTimestamp = query(\n      collection(db, "tickets"), \n      orderBy(\'timeOpen\')\n    );\n    const unSubscribe = onSnapshot(\n      // new code below!\n      queryByTimestamp, \n      (querySnapshot) => {\n        const tickets = [];\n        querySnapshot.forEach((doc) => {\n          const timeOpen = doc.get(\'timeOpen\', {serverTimestamps: "estimate"}).toDate();\n          const jsDate = new Date(timeOpen);\n          tickets.push({\n            names: doc.data().names, \n            location: doc.data().location, \n            issue: doc.data().issue, \n            timeOpen: jsDate,\n            formattedWaitTime: formatDistanceToNow(jsDate),\n            id: doc.id\n          });\n        });\n        setMainTicketList(tickets);\n      },\n      (error) => {\n        setError(error.message);\n      }\n    );\n\n    return () => unSubscribe();\n  }, []);\n\n  ...\n  ...\n}\n\nexport default TicketControl;\n')),(0,i.kt)("p",null,"We start by updating our import statement from ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase/firestore")," to also import ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"orderby"),". "),(0,i.kt)("p",null,"Then, in our effect, we start by constructing a query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const queryByTimestamp = query(\n  collection(db, \"tickets\"), \n  orderBy('timeOpen')\n);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"queryByTimestamp")," query gets all documents in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"tickets"')," collection and orders them by the value set in each ticket's ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," field. The order of the tickets will be ascending: older tickets will be at the top and newer tickets will be at the bottom. "),(0,i.kt)("p",null,"If we wanted descending order instead, we could specify that by adding a second argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderBy()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const queryByTimestamp = query(\n  collection(db, \"tickets\"), \n  orderBy('timeOpen', 'desc')\n);\n")),(0,i.kt)("p",null,"The only other change we make is updating the first argument in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSnapshot()")," function call to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryByTimeStamp")," variable, which represents our Firestore query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => { \n  const queryByTimestamp = query(\n    collection(db, \"tickets\"), \n    orderBy('timeOpen')\n  );\n  const unSubscribe = onSnapshot(\n    queryByTimestamp, // new code!\n    ...,\n    ...\n  );\n\n  return () => unSubscribe();\n}, []);\n")),(0,i.kt)("p",null,"And that's it! Now our tickets are organized by their creation date. "),(0,i.kt)("p",null,"The best thing about this refactor is that we didn't have to write our own function to sort the Firestore data. That's a big advantage of using Firestore: it's flexible like all NoSQL databases are, but it contains enough structure (in the form of collections and documents) and built-in helper functions to make filtering and sorting data easy and sweat-free!"),(0,i.kt)("p",null,"Next up, let's learn how to host our Help Queue web app with Firebase."))}d.isMDXComponent=!0}}]);