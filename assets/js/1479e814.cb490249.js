"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Adding Wait Time to the Queue Part 2",id:"adding_wait_time_to_the_queue_part_2",slug:"adding_wait_time_to_the_queue_part_2",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/7_react-with-redux-part-2/3e_adding_wait_time_to_the_queue_part_2.md"},r=void 0,l={unversionedId:"react_part_time/react-with-redux-part-2/adding_wait_time_to_the_queue_part_2",id:"react_part_time/react-with-redux-part-2/adding_wait_time_to_the_queue_part_2",title:"Adding Wait Time to the Queue Part 2",description:'In the last lesson, we covered the "business" logic for updating a ticket\'s elapsed time in the Redux store. In the process, we had to write and test a reducer action, update and test another reducer action, and write action creators.',source:"@site/docs/react_part_time/7_react-with-redux-part-2/3e_adding_wait_time_to_the_queue_part_2.md",sourceDirName:"react_part_time/7_react-with-redux-part-2",slug:"/react_part_time/react-with-redux-part-2/adding_wait_time_to_the_queue_part_2",permalink:"/lhtp/react_part_time/react-with-redux-part-2/adding_wait_time_to_the_queue_part_2",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Adding Wait Time to the Queue Part 2",id:"adding_wait_time_to_the_queue_part_2",slug:"adding_wait_time_to_the_queue_part_2",hide_table_of_contents:!0,sidebar_position:5,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/7_react-with-redux-part-2/3e_adding_wait_time_to_the_queue_part_2.md"},sidebar:"react_part_time",previous:{title:"Adding Wait Time to the Queue",permalink:"/lhtp/react_part_time/react-with-redux-part-2/adding_wait_time_to_the_queue"},next:{title:"Forum, Word Puzzle, Tic Tac Toe (Multi-Day Project) (day 2)",permalink:"/lhtp/react_part_time/react-with-redux-part-2/forum_word_puzzle_tic_tac_toe_multi_day_project_day_2"}},p={},s=[{value:"Changes to <code>NewTicketForm.js</code>",id:"changes-to-newticketformjs",level:3},{value:"Changes to <code>TicketControl.js</code>",id:"changes-to-ticketcontroljs",level:3},{value:"Changes to <code>TicketList.js</code>",id:"changes-to-ticketlistjs",level:3},{value:"Changes to <code>Ticket.js</code>",id:"changes-to-ticketjs",level:3},{value:"Changes to <code>EditTicketForm.js</code>",id:"changes-to-editticketformjs",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'In the last lesson, we covered the "business" logic for updating a ticket\'s elapsed time in the Redux store. In the process, we had to write and test a reducer action, update and test another reducer action, and write action creators.'),(0,i.kt)("p",null,"Now that we're ready to implement this functionality in the UI, we should think carefully about where it's needed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We know that a new ticket should have a ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime")," property, which means that we'll need to add these in ",(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm.js"),"."),(0,i.kt)("li",{parentName:"ul"},"Next, we'll need to implement a timer in our ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl")," component. Fortunately, we added most of the code for that a few lessons ago. We'll go over it again in this lesson."),(0,i.kt)("li",{parentName:"ul"},"When we demonstrated how our timer would work, we created an ",(0,i.kt)("inlineCode",{parentName:"li"},"updateTicketElapsedWaitTime()")," method that logged ",(0,i.kt)("inlineCode",{parentName:"li"},'"tick"')," to the queue. In this lesson, we'll update that method to actually update the elapsed wait time for a ticket."),(0,i.kt)("li",{parentName:"ul"},"Once that's complete, we'll need to pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime")," properties of a ticket to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ticket")," component via ",(0,i.kt)("inlineCode",{parentName:"li"},"TicketList"),". (And we can't forget to add PropTypes, either.)"),(0,i.kt)("li",{parentName:"ul"},"We'll also need to make a tweak to our ",(0,i.kt)("inlineCode",{parentName:"li"},"EditTicketForm")," so that ",(0,i.kt)("inlineCode",{parentName:"li"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"formattedWaitTime")," don't become undefined when we update tickets. ")),(0,i.kt)("p",null,"To recap, we'll need to make changes to the following five components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NewTicketForm.js"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TicketControl.js"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TicketList.js"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ticket.js"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EditTicketForm.js"),".")),(0,i.kt)("p",null,"We'll make the changes in that order."),(0,i.kt)("h3",{id:"changes-to-newticketformjs"},"Changes to ",(0,i.kt)("inlineCode",{parentName:"h3"},"NewTicketForm.js")),(0,i.kt)("p",null,"We just need to make a few small changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm.js"),":"),(0,i.kt)("div",{class:"filename"},"NewTicketForm.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { formatDistanceToNow } from 'date-fns';\n...\n\nfunction NewTicketForm(props){\n  function handleNewTicketFormSubmission(event) {\n    event.preventDefault();\n    props.onNewTicketCreation({\n      names: event.target.names.value,\n      location: event.target.location.value, \n      issue: event.target.issue.value,\n      id: v4(),\n      timeOpen: new Date(),\n      formattedWaitTime: formatDistanceToNow(new Date(), {\n        addSuffix: true\n      })\n    });\n  }\n...\n")),(0,i.kt)("p",null,"First we need to import date-fns. Then we need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties to the ticket object. ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," will be set to the value of a ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date()"),". That way, when a user adds a ticket via the form and this function is triggered, the current date and time will be created for a ticket's ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property. Meanwhile, ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," will be set to the formatted elapsed time since the ticket was opened. Later, we'll use the date set for ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),"."),(0,i.kt)("p",null,"If we wanted to, we could define ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," instead. After all, these aren't values that are being pulled from the form. ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," actually processes the new tickets and passes them to the Redux store, so why not add these values to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"handleAddingNewTicketToList()")," method instead?"),(0,i.kt)("p",null,"An argument could be made for that \u2014 but there are advantages to creating all the properties a ticket needs in the same place. This keeps our code modular and makes it easier for other developers to read. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," already creates the other properties, it makes sense to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties here as well."),(0,i.kt)("h3",{id:"changes-to-ticketcontroljs"},"Changes to ",(0,i.kt)("inlineCode",{parentName:"h3"},"TicketControl.js")),(0,i.kt)("p",null,"Most of our updates will be made in this component. However, we already implemented almost all of the changes we need when we learned about lifecycle methods and implemented a timer. Here's what we have so far from that lesson:"),(0,i.kt)("div",{class:"filename"},"TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\ncomponentDidMount() {\n    this.waitTimeUpdateTimer = setInterval(() =>\n      this.updateTicketElapsedWaitTime(),\n    60000\n    );\n  }\n\n  componentWillUnmount(){\n    clearInterval(this.waitTimeUpdateTimer);\n  }\n\n  updateTicketElapsedWaitTime = () => {\n    // New code will go here.\n  }\n")),(0,i.kt)("p",null,"A few things to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We've changed the interval of our ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()")," function to ",(0,i.kt)("inlineCode",{parentName:"p"},"60000")," because the Help Queue at Epicodus updates every minute.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There's no need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidUpdate()")," lifecycle method here so it's been removed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The only other new code we will need to add to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl")," will go in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedTicketElapsedWaitTime()"),". Every 60 seconds, this function will be called. As you may have already guessed, we'll be dispatching our new action here."))),(0,i.kt)("p",null,"Let's add the code to implement date-fns now:"),(0,i.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nimport { formatDistanceToNow } from 'date-fns';\n...\n\n...\nupdateTicketElapsedWaitTime = () => {\n  const { dispatch } = this.props;\n  Object.values(this.props.mainTicketList).forEach(ticket => {\n      const newFormattedWaitTime = formatDistanceToNow(ticket.timeOpen, {\n        addSuffix: true\n      });\n    const action = a.updateTime(ticket.id, newFormattedWaitTime);\n    dispatch(action);\n  });\n}\n...\n")),(0,i.kt)("p",null,"Note that we've added a new import statement to the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js")," to import the help function ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()"),"."),(0,i.kt)("p",null,"Next, let's cover exactly what the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateTicketElapsedWaitTime")," function is doing. This will all be review of concepts we've already covered."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We start by deconstructing the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We iterate over the values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainTicketList"),". For each ticket, we determine the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()")," method from date-fns. This time we pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"ticket.timeOpen")," as the first argument. That's because we want to calculate the distance between the time the ticket was first opened that's stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," property, and now.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that we use ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach()"),". Technically, we could use ",(0,i.kt)("inlineCode",{parentName:"p"},"map()")," and it would work. However, this function only has side effects (updating the store) and ",(0,i.kt)("inlineCode",{parentName:"p"},"map()")," is supposed to return something without side effects. For that reason, ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach()")," communicates our intentions here."))),(0,i.kt)("p",null,"There's another important thing to note about this code. It's not going to scale up very well. Every minute, this function will dispatch an action for ",(0,i.kt)("em",{parentName:"p"},"every single ticket")," in the queue. That wouldn't be very efficient if our queue was meant to handle thousands of tickets. Since this is just a simple implementation \u2014 and our queue doesn't need to handle a lot of tickets anyway \u2014 we won't worry about it. However, you may want to see if you can refactor it to be more efficient on your own."),(0,i.kt)("h3",{id:"changes-to-ticketlistjs"},"Changes to ",(0,i.kt)("inlineCode",{parentName:"h3"},"TicketList.js")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js")," component needs to have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," property. In order to pass these props to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js"),", though, we first need to pass them to ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketList.js"),", which is the direct parent of ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js")," and the child of ",(0,i.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),":"),(0,i.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nfunction TicketList(props){\n  return (\n    <React.Fragment>\n      <hr/>\n      {Object.values(props.ticketList).map((ticket) => {\n        return <Ticket\n          whenTicketClicked = { props.onTicketSelection }\n          names={ticket.names}\n          location={ticket.location}\n          issue={ticket.issue}\n          formattedWaitTime={ticket.formattedWaitTime}\n          id={ticket.id}\n          key={ticket.id}/>\n  })}\n    </React.Fragment>\n  );\n}\n...\n")),(0,i.kt)("p",null,"We just add ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," as a prop to pass down to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js"),". We don't need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," as a prop because we won't be displaying it in ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js"),". We'll only be showing the ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime"),"."),(0,i.kt)("h3",{id:"changes-to-ticketjs"},"Changes to ",(0,i.kt)("inlineCode",{parentName:"h3"},"Ticket.js")),(0,i.kt)("p",null,"Now we just need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," as a prop type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticket.js")," and then actually use the prop in our React fragment:"),(0,i.kt)("div",{class:"filename"},"src/components/Ticket.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction Ticket(props){\n  return (\n    <React.Fragment>\n      <div onClick = {()=> props.whenTicketClicked(props.id)}>\n        <h3>{props.location} - {props.names}</h3>\n        <p><em>{props.issue}</em></p>\n        { /* new code below. */}\n        <p><em>{props.formattedWaitTime}</em></p>\n        <hr/>\n      </div>\n    </React.Fragment>\n  );\n}\n\nTicket.propTypes = {\n  // New prop type added.\n  ...\n  formattedWaitTime: PropTypes.string\n};\n\n...\n")),(0,i.kt)("p",null,"Only two lines of code have been added here. Comments have been included to highlight the new lines of code."),(0,i.kt)("h3",{id:"changes-to-editticketformjs"},"Changes to ",(0,i.kt)("inlineCode",{parentName:"h3"},"EditTicketForm.js")),(0,i.kt)("p",null,"If we run our application, everything will work correctly when we add a new ticket. The time for a new ticket will display as ",(0,i.kt)("inlineCode",{parentName:"p"},"'less than a minute ago'"),". If we wait a minute, it will update to ",(0,i.kt)("inlineCode",{parentName:"p"},"'One minute ago'"),"."),(0,i.kt)("p",null,"However, if we edit a ticket, the elapsed time will no longer display. See if you can figure out the issue on your own first \u2014 it's a quick fix."),(0,i.kt)("p",null,"The issue is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"handleEditTicketFormSubmission()")," function. When we call ",(0,i.kt)("inlineCode",{parentName:"p"},"props.onEditTicket()"),", we don't specify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties should be included in the ticket object. Remember that when we update a ticket, it's almost exactly the same as adding a new ticket \u2014 we just happen to be overwriting the pre-existing ticket with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". To fix this issue, we just need to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"timeOpen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formattedWaitTime")," properties into the method."),(0,i.kt)("div",{class:"filename"},"src/components/EditTicketForm.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nfunction handleEditTicketFormSubmission(event) {\n  event.preventDefault();\n  props.onEditTicket({\n    names: event.target.names.value, \n    location: event.target.location.value, \n    issue: event.target.issue.value, \n    id: ticket.id, \n    timeOpen: ticket.timeOpen, \n    formattedWaitTime: ticket.formattedWaitTime \n  });\n}\n...\n")),(0,i.kt)("p",null,"At this point, our Help Queue should now show the elapsed time since the ticket was opened regardless of whether the ticket was updated."),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"As we've already stated, you won't be expected to add this kind of functionality to your independent projects. The most important takeaway from these lessons isn't using a timer or incorporating date-fns \u2014 although it's fun to do both \u2014 or getting the Help Queue fully functional. Instead, it's essential to know about how the component lifecycle works \u2014 and to have at least a basic understanding of the following methods and what they do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constructor()"),": Called when a state-based component is instantiated;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"render()"),": Called both when a component is being loaded and also when it's updated;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"componentDidMount()"),": Called when a component has finished updating the DOM;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"componentDidUpdate()"),": Called immediately after a component updates;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()"),"; Called right before a component is unmounted and destroyed.")))}m.isMDXComponent=!0}}]);