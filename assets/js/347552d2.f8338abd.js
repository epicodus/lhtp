"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[27357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,u=d["".concat(p,".").concat(h)]||d[h]||k[h]||o;return n?i.createElement(u,l(l({ref:t},s),{},{components:n})):i.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Showing Ticket Detail",id:"showing_ticket_detail",slug:"showing_ticket_detail",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3d_showing_ticket_detail.md"},l=void 0,r={unversionedId:"react/react-fundamentals/showing_ticket_detail",id:"react/react-fundamentals/showing_ticket_detail",title:"Showing Ticket Detail",description:"In the lesson called Planning Our Application: Part 3, we updated the plan for our Help Queue application to include a TicketDetail component. A user should be able to click on a ticket and then go to that ticket's detail page.",source:"@site/docs/react/3_react-fundamentals/3d_showing_ticket_detail.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/showing_ticket_detail",permalink:"/react/react-fundamentals/showing_ticket_detail",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"Showing Ticket Detail",id:"showing_ticket_detail",slug:"showing_ticket_detail",hide_table_of_contents:!0,sidebar_position:35,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3d_showing_ticket_detail.md"},sidebar:"react",previous:{title:"Using JSX Expressions with Arguments",permalink:"/react/react-fundamentals/using_jsx_expressions_with_arguments"},next:{title:"Deleting a Ticket",permalink:"/react/react-fundamentals/deleting_a_ticket"}},p={},c=[{value:"Create a Placeholder <code>TicketDetail</code> Component",id:"create-a-placeholder-ticketdetail-component",level:3},{value:"Update the <code>TicketControl</code> Component",id:"update-the-ticketcontrol-component",level:3},{value:"Update <code>TicketControl</code> State",id:"update-ticketcontrol-state",level:4},{value:"Write Method to Handle Click Event on Ticket",id:"write-method-to-handle-click-event-on-ticket",level:4},{value:"Update <code>TicketControl</code>&#39;s <code>render()</code> Method",id:"update-ticketcontrols-render-method",level:3},{value:"Pass Props Through <code>TicketList</code> Component",id:"pass-props-through-ticketlist-component",level:3},{value:"Add Method To <code>Ticket</code> Component",id:"add-method-to-ticket-component",level:3},{value:"Update <code>TicketDetail</code> Component to Render <code>SelectedTicket</code>",id:"update-ticketdetail-component-to-render-selectedticket",level:3},{value:"Finishing Up",id:"finishing-up",level:4}],s={toc:c},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the lesson called ",(0,a.kt)("em",{parentName:"p"},"Planning Our Application: Part 3"),", we updated the plan for our Help Queue application to include a ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. A user should be able to click on a ticket and then go to that ticket's detail page."),(0,a.kt)("p",null,"Before starting, this might be a good time to take a deep breath. We aren't going to be adding too many new lines of code to our application in this lesson. However, we have to do a lot of little things in many different places. This will be a long lesson, so pay close attention."),(0,a.kt)("p",null,"Here are the things we need to do to add ticket detail functionality to our site:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a placeholder ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component (it will be updated to take props later in this lesson)."),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," to include a ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," state slice."),(0,a.kt)("li",{parentName:"ul"},"Create a method in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," that will handle when a ticket is clicked."),(0,a.kt)("li",{parentName:"ul"},"Create a new conditional in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl")," to handle the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component."),(0,a.kt)("li",{parentName:"ul"},"Use props to pass down our method for handling a ticket click first to our ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketList")," component and then to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ticket")," component, where the method will be attached to a ticket."),(0,a.kt)("li",{parentName:"ul"},"Once the ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," state is properly being updated, update the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component to accept ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," props."),(0,a.kt)("li",{parentName:"ul"},"Add PropTypes for props as needed.")),(0,a.kt)("p",null,"This is a lot of stuff \u2014 but we are being exhaustive in outlining each step we need to take to update our code. Take your time with this lesson \u2014 and also when you are adding functionality across multiple components in your own React applications."),(0,a.kt)("h3",{id:"create-a-placeholder-ticketdetail-component"},"Create a Placeholder ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketDetail")," Component"),(0,a.kt)("p",null,"Let's start with a placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component:"),(0,a.kt)("div",{class:"filename"},"TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\nfunction TicketDetail(props){\n  return (\n    <React.Fragment>\n      <h1>Ticket Detail</h1>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nexport default TicketDetail;\n')),(0,a.kt)("p",null,"There's nothing new or unusual here \u2014 just a component rendering a single hard-coded element. We will update this component to use props after we successfully get the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component to update a selected ticket."),(0,a.kt)("h3",{id:"update-the-ticketcontrol-component"},"Update the ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketControl")," Component"),(0,a.kt)("p",null,"Now let's make some changes to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. We will do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a state slice for ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket"),". It will have a default state of ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},"Add a method called ",(0,a.kt)("inlineCode",{parentName:"li"},"handleChangingSelectedTicket")," for handling a click event on a ticket. When a user clicks on the ticket, it will activate this method, which will change the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," to an actual ticket object."),(0,a.kt)("li",{parentName:"ul"},"Add a conditional for rendering the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component when ",(0,a.kt)("inlineCode",{parentName:"li"},"selectedTicket")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),". This will ensure the user actually sees the ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," component.")),(0,a.kt)("h4",{id:"update-ticketcontrol-state"},"Update ",(0,a.kt)("inlineCode",{parentName:"h4"},"TicketControl")," State"),(0,a.kt)("p",null,"We will start by updating our state:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n    this.state = {\n      formVisibleOnPage: false,\n      mainTicketList: [],\n      selectedTicket: null // new code\n    };\n...\n")),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," starts as ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," because no ticket has been selected yet."),(0,a.kt)("h4",{id:"write-method-to-handle-click-event-on-ticket"},"Write Method to Handle Click Event on Ticket"),(0,a.kt)("p",null,"Next, let's write a method that will take the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property of a ticket, find the correct ticket, and then set ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," equal to that ticket. Since we know what this method should do, we can write it in isolation without worrying how it will interact with other components. We'll add this method to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," after the constructor and before the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method (which is where all our custom methods should go in a class component)."),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  handleChangingSelectedTicket = (id) => {\n    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];\n    this.setState({selectedTicket: selectedTicket});\n  }\n...\n")),(0,a.kt)("p",null,"We will use ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," (which is perfect for functional programming) to filter our mainTicketList down to tickets where ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket.id")," equals the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," passed into our method. Because we are using UUIDs now, we know that only one ticket will ever have a matching ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," returns an array, we need to specify that we want the first (and only element) in that array. We use bracket notation to do that."),(0,a.kt)("p",null,"Finally, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," method to mutate the state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," state slice."),(0,a.kt)("p",null,"Our method isn't connected to our user interface yet \u2014 but its functionality will be in place by the end of the lesson."),(0,a.kt)("h3",{id:"update-ticketcontrols-render-method"},"Update ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketControl"),"'s ",(0,a.kt)("inlineCode",{parentName:"h3"},"render()")," Method"),(0,a.kt)("p",null,"Now we need to make some updates to our ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. We've included comments detailing the three changes we are making. The first two changes are related to adding a conditional to our conditional rendering. The third involves passing our new method as a prop."),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport TicketDetail from \'./TicketDetail\';\n\n...\n\n  render(){\n    let currentlyVisibleState = null;\n    let buttonText = null; \n    \n    if (this.state.selectedTicket != null) {\n      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />\n      buttonText = "Return to Ticket List";\n      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.\n    }\n    else if (this.state.formVisibleOnPage) {\n      // This conditional needs to be updated to "else if."\n      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;\n      buttonText = "Return to Ticket List";\n    } else {\n      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;\n      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.\n      buttonText = "Add Ticket";\n    }\n\n    ...\n  }\n')),(0,a.kt)("p",null,"First, we add a conditional that will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component if ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket != null"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.selectedTicket")," isn't null, it will be set to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket"),"."),(0,a.kt)("p",null,"Right now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," is just a hard-coded placeholder. However, we will eventually be passing ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. For that reason, we will pass in a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket")," that we will set to the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket"),". We will attach this prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," soon."),(0,a.kt)("p",null,"We also update our previous ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statement to an ",(0,a.kt)("inlineCode",{parentName:"p"},"else if")," statement. We won't use two ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statements \u2014 if the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component should be rendered, there's no reason to check if the ",(0,a.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," should be rendered."),(0,a.kt)("p",null,"Last, we need to pass our new ",(0,a.kt)("inlineCode",{parentName:"p"},"handleChangingSelectedTicket")," method down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component as a prop so we add the following code to ",(0,a.kt)("inlineCode",{parentName:"p"},"<TicketList />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"onTicketSelection={this.handleChangingSelectedTicket}\n")),(0,a.kt)("p",null,"We are saving the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this.handleChangingSelectedTicket")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onTicketSelection")," prop."),(0,a.kt)("h3",{id:"pass-props-through-ticketlist-component"},"Pass Props Through ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketList")," Component"),(0,a.kt)("p",null,"We need to make several small changes to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We will no longer use the ",(0,a.kt)("inlineCode",{parentName:"li"},"index")," of our iterator as a ",(0,a.kt)("inlineCode",{parentName:"li"},"key"),". We will use a ticket's actual ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," property instead."),(0,a.kt)("li",{parentName:"ul"},"We will add a PropType for our new ",(0,a.kt)("inlineCode",{parentName:"li"},"onTicketSelection")," prop."),(0,a.kt)("li",{parentName:"ul"},"We will also pass down several props to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Ticket")," component.")),(0,a.kt)("p",null,"Here are the updates:"),(0,a.kt)("div",{class:"filename"},"TicketList.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction TicketList(props){\n\n  return (\n    <React.Fragment>\n      <hr/>\n      {props.ticketList.map((ticket) =>\n        <Ticket\n          whenTicketClicked = { props.onTicketSelection }\n          names={ticket.names}\n          location={ticket.location}\n          issue={ticket.issue}\n          id={ticket.id}\n          key={ticket.id}/>\n      )}\n    </React.Fragment>\n  );\n}\n\nTicketList.propTypes = {\n  ticketList: PropTypes.array,\n  onTicketSelection: PropTypes.func\n};\n\n...\n")),(0,a.kt)("p",null,"First, we no longer need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," into our ",(0,a.kt)("inlineCode",{parentName:"p"},"map()")," function. We've updated the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to be equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket.id"),"."),(0,a.kt)("p",null,"Note that we also have to pass in an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," prop. This is because we can't pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," to a child component as a prop. However, our ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component will still need access to its own ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", hence a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," prop which is also set to ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket.id"),"."),(0,a.kt)("p",null,"We will also pass ",(0,a.kt)("inlineCode",{parentName:"p"},"props.onTicketSelection")," down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component as a prop. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component will handle determining whether it has been selected \u2014 not the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component. For the sake of clarity, we are naming the prop being passed down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component ",(0,a.kt)("inlineCode",{parentName:"p"},"whenTicketClicked"),". Because ",(0,a.kt)("inlineCode",{parentName:"p"},"onTicketSelection")," is itself a prop from the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component, it is one of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList"),"'s props, which is why we need to prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"onTicketSelection")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,a.kt)("p",null,"Finally, we also need to add a PropType: ",(0,a.kt)("inlineCode",{parentName:"p"},"onTicketSelection: PropTypes.func"),"."),(0,a.kt)("h3",{id:"add-method-to-ticket-component"},"Add Method To ",(0,a.kt)("inlineCode",{parentName:"h3"},"Ticket")," Component"),(0,a.kt)("p",null,"Now it's time to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleChangingSelectedTicket")," method down to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component. It has been passed down from ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," as a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"onTicketSelection"),". Then ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," passed it down to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," as a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"whenTicketClicked"),"."),(0,a.kt)("p",null,"It may already seem a bit convoluted \u2014 and we are only passing this method down through a few components. It should be clear why prop drilling through many components should generally be avoided. Fortunately, we are only passing this prop down from a parent to a child to that child's child. That's not a big deal \u2014 but our code would get messy if we drilled much further."),(0,a.kt)("p",null,"Let's take a look at our updated ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," component. All we are adding is a div with an ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," handler and a few ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTypes"),". Once again, we've also added a few comments \u2014 you should remove these from your own code if you are following along."),(0,a.kt)("div",{class:"filename"},"Ticket.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction Ticket(props){\n  return (\n    <React.Fragment>\n      <div onClick = {() => props.whenTicketClicked(props.id)}>\n        { /* We add a div with an onClick function. Don't forget to close out the div below! */}\n        <h3>{props.location} - {props.names}</h3>\n        <p><em>{props.issue}</em></p>\n        <hr/>\n      </div>\n    </React.Fragment>\n  );\n}\n\nTicket.propTypes = {\n  names: PropTypes.string,\n  location: PropTypes.string,\n  issue: PropTypes.string,\n  id: PropTypes.string, // new PropType\n  whenTicketClicked: PropTypes.func // new PropType\n};\n\n...\n")),(0,a.kt)("p",null,"We wrap an individual ticket in a div that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<div onClick = {() => props.whenTicketClicked(props.id)}>\n")),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," is iterating through each individual ticket, each ticket will have its own div with an ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," handler attached."),(0,a.kt)("p",null,"As we discussed in the last lesson, we need to use an arrow function so the expression isn't evaluated immediately. We pass in the ticket's id via ",(0,a.kt)("inlineCode",{parentName:"p"},"props.id"),"."),(0,a.kt)("p",null,"At this point, we can click on a ticket and the ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," state slice in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," will update, showing our placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. Once again, it may seem like information is being passed up from ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," all the way to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),", but the opposite is happening. Instead, think of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," expanding its scope all the way down to ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," with the help of props and callbacks."),(0,a.kt)("h3",{id:"update-ticketdetail-component-to-render-selectedticket"},"Update ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketDetail")," Component to Render ",(0,a.kt)("inlineCode",{parentName:"h3"},"SelectedTicket")),(0,a.kt)("p",null,"Earlier in this lesson, we added the following line of code to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),":"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />\n")),(0,a.kt)("p",null,"We specified that the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.selectedTicket")," should be passed as a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket")," down to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component. "),(0,a.kt)("p",null,"Now we just need to use those props in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail"),". Here's our updated ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component:"),(0,a.kt)("div",{class:"filename"},"TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction TicketDetail(props){\n  const { ticket } = props;\n  \n  return (\n    <React.Fragment>\n      <h1>Ticket Detail</h1>\n      <h3>{ticket.location} - {ticket.names}</h3>\n      <p><em>{ticket.issue}</em></p>\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nTicketDetail.propTypes = {\n  ticket: PropTypes.object\n};\n\nexport default TicketDetail;\n')),(0,a.kt)("p",null,"Note that we use object destructuring (",(0,a.kt)("inlineCode",{parentName:"p"},"const { ticket } = props;"),") to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket")," object from our props. Otherwise, for a ticket attribute like ",(0,a.kt)("inlineCode",{parentName:"p"},"location"),", we'd need to say ",(0,a.kt)("inlineCode",{parentName:"p"},"props.ticket.location")," instead of just ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket.location"),". It is common \u2014 but not necessary \u2014 to use object destructuring with props in React."),(0,a.kt)("p",null,"We also specify that ",(0,a.kt)("inlineCode",{parentName:"p"},"ticket")," will have a PropType of ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,a.kt)("h4",{id:"finishing-up"},"Finishing Up"),(0,a.kt)("p",null,"We are almost done. However, there's still a problem with our application. When we navigate to ticket detail and click on the ",(0,a.kt)("em",{parentName:"p"},"Return to Ticket List")," button, nothing will happen."),(0,a.kt)("p",null,"Let's take a look at that button in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n<button onClick={this.handleClick}>{buttonText}</button>\n...\n")),(0,a.kt)("p",null,"The issue must be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClick")," method, so let's take a look at that next:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  handleClick = () => {\n    this.setState(prevState => ({\n      formVisibleOnPage: !prevState.formVisibleOnPage\n    }));\n  }\n...\n")),(0,a.kt)("p",null,"Currently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClick")," method only toggles the visibility of our form. We also need it to set ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," so the queue can show. But it's not quite that simple. When we click on a ticket's detail, ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". We don't want to toggle it back to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"! That's why we see the form for adding a ticket when we click on the button."),(0,a.kt)("p",null,"Let's update the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClick")," method so it can also handle returning to the queue from the ticket detail page. The solution isn't going to be ideal, but it will get the job done:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n  handleClick = () => {\n    if (this.state.selectedTicket != null) {\n      this.setState({\n        formVisibleOnPage: false,\n        selectedTicket: null\n      });\n    } else {\n      this.setState(prevState => ({\n        formVisibleOnPage: !prevState.formVisibleOnPage,\n      }));\n    }\n  }\n...\n")),(0,a.kt)("p",null,"We know that if ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.selectedTicket")," isn't ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," then we must be on the ticket detail page. In that case, we know that ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," should be set to false and ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". Otherwise, we know that we must be on the add ticket page or the ticket list page \u2014 so our ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," statement can just continue to toggle the ",(0,a.kt)("inlineCode",{parentName:"p"},"formVisibleOnPage")," state."),(0,a.kt)("p",null,"Now our button toggles between all of our components."),(0,a.kt)("p",null,"However, we are at the point when this function is probably trying to do too much. It felt like nice, clean code and a reusable function before \u2014 and while we've adapted it for yet another use, it's not quite as clean anymore. We definitely wouldn't want this function to have a ton of conditionals, each for handling a different kind of click! So this is the point where we might want to consider refactoring this function as our application gets larger. Because everything is working, we won't do a refactor here \u2014 but it's always good to pay close attention and consider when we might want to refactor code."),(0,a.kt)("p",null,"If you've been holding your breath (hopefully not), you can breathe out now. All of these steps may seem overly complicated at first. There are a lot of moving parts in a React application, especially once we start passing around a lot of props. Good planning is very important. Ultimately, the content in this lesson will be more likely to click if you code along with it."),(0,a.kt)("p",null,"Practice is also important, and at least in the short term, try to look at bugs as a potential teacher as opposed to a source of frustration. Bugs ",(0,a.kt)("em",{parentName:"p"},"will")," happen, especially at first. It can be challenging to keep track of all the props that need to be passed around \u2014 along with all the other little details that come with adding a core piece of functionality. However, React error messages tend to be very informative, so follow your errors up and down the component tree until you see where everything connects."))}k.isMDXComponent=!0}}]);