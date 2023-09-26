"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[43037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||k[u]||l;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const l={title:"Deleting a Ticket",id:"deleting-a-ticket",slug:"deleting-a-ticket",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3e_deleting_a_ticket.md"},o=void 0,r={unversionedId:"react-part-time/react-fundamentals-part-2/deleting-a-ticket",id:"react-part-time/react-fundamentals-part-2/deleting-a-ticket",title:"Deleting a Ticket",description:"In the last lesson, we added the ability for a user to see an individual ticket's detail page. We had to alter or create four different components in order to add this relatively small piece of functionality.",source:"@site/docs/react-part-time/5_react-fundamentals-part-2/3e-deleting-a-ticket.md",sourceDirName:"react-part-time/5_react-fundamentals-part-2",slug:"/react-part-time/react-fundamentals-part-2/deleting-a-ticket",permalink:"/react-part-time/react-fundamentals-part-2/deleting-a-ticket",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Deleting a Ticket",id:"deleting-a-ticket",slug:"deleting-a-ticket",hide_table_of_contents:!0,sidebar_position:6,day:"sunday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3e_deleting_a_ticket.md"},sidebar:"react-part-time",previous:{title:"Showing Ticket Detail",permalink:"/react-part-time/react-fundamentals-part-2/showing-ticket-detail"},next:{title:"Reusing Components",permalink:"/react-part-time/react-fundamentals-part-2/reusing-components"}},c={},d=[{value:"<code>handleDeletingTicket</code> Method",id:"handledeletingticket-method",level:3},{value:"Passing <code>handleDeletingTicket</code> as Prop to <code>TicketDetail</code>",id:"passing-handledeletingticket-as-prop-to-ticketdetail",level:3},{value:"Adding a Delete Button and PropType to <code>TicketDetail</code>",id:"adding-a-delete-button-and-proptype-to-ticketdetail",level:3}],p={toc:d},s="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we added the ability for a user to see an individual ticket's detail page. We had to alter or create four different components in order to add this relatively small piece of functionality."),(0,a.kt)("p",null,"However, some good news. Adding delete functionality to our application is going to be much easier. This is because we planned out our application carefully. We will only need to alter two components \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," (which holds our shared state) and ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," (where the delete button will live)."),(0,a.kt)("p",null,"If we'd chosen to place ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," below ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," in the component tree, we'd have a prop-drilling nightmare. Our method for deleting tickets would affect four different components because we'd need to pass it as a prop through ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Ticket")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail"),"."),(0,a.kt)("p",null,"Here are the steps we will need to take to add delete functionality to our Help Queue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write a ",(0,a.kt)("inlineCode",{parentName:"li"},"handleDeletingTicket")," method in ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketControl"),". This method will mutate the state of the ",(0,a.kt)("inlineCode",{parentName:"li"},"mainTicketList"),"."),(0,a.kt)("li",{parentName:"ul"},"Pass this method down as a prop to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail"),". We will call this prop ",(0,a.kt)("inlineCode",{parentName:"li"},"onClickingDelete"),"."),(0,a.kt)("li",{parentName:"ul"},"Add a button to ",(0,a.kt)("inlineCode",{parentName:"li"},"TicketDetail")," with an ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick")," event handler that will trigger ",(0,a.kt)("inlineCode",{parentName:"li"},"onClickingDelete"),"."),(0,a.kt)("li",{parentName:"ul"},"As always, we will need to add a PropType for ",(0,a.kt)("inlineCode",{parentName:"li"},"onClickingDelete"),".")),(0,a.kt)("h3",{id:"handledeletingticket-method"},(0,a.kt)("inlineCode",{parentName:"h3"},"handleDeletingTicket")," Method"),(0,a.kt)("p",null,"We will start by adding a method to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component that will delete a ticket from the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," based on its ID. Once again, we can write this method in isolation without worry about how it will interact with other components yet."),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"handleDeletingTicket = (id) => {\n  const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);\n  this.setState({\n    mainTicketList: newMainTicketList,\n    selectedTicket: null\n  });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket")," will take an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as a parameter."),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," method again. This time, though, we want the ",(0,a.kt)("inlineCode",{parentName:"p"},"newMainTicketList")," to filter everything that ",(0,a.kt)("em",{parentName:"p"},"doesn't")," have the ticket ID that will be passed into the method. In other words, we are ",(0,a.kt)("em",{parentName:"p"},"filtering out")," the ticket that has the specified ID because we want it to be deleted from the list."),(0,a.kt)("p",null,"Next, we need to set the state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," to be equal to our filtered ",(0,a.kt)("inlineCode",{parentName:"p"},"newMainTicketList"),"."),(0,a.kt)("p",null,"Finally, we will also need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," back to null. That way, once a ticket is closed, ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," will ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component is showing."),(0,a.kt)("h3",{id:"passing-handledeletingticket-as-prop-to-ticketdetail"},"Passing ",(0,a.kt)("inlineCode",{parentName:"h3"},"handleDeletingTicket")," as Prop to ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketDetail")),(0,a.kt)("p",null,"Next, we need to pass our ",(0,a.kt)("inlineCode",{parentName:"p"},"handleDeletingTicket")," method as a prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". This just involves a small change in our ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method:"),(0,a.kt)("div",{class:"filename"},"TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'render(){\n   ...\n  if (this.state.selectedTicket != null) {\n    currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} />\n    buttonText = "Return to Ticket List";\n  }\n...\n}\n')),(0,a.kt)("h3",{id:"adding-a-delete-button-and-proptype-to-ticketdetail"},"Adding a Delete Button and PropType to ",(0,a.kt)("inlineCode",{parentName:"h3"},"TicketDetail")),(0,a.kt)("p",null,"We just need to make a few small changes to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketDetail")," component:"),(0,a.kt)("div",{class:"filename"},"TicketDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport PropTypes from "prop-types";\n\nfunction TicketDetail(props){\n  const { ticket, onClickingDelete } = props; //new code\n  \n  return (\n    <React.Fragment>\n      <h1>Ticket Detail</h1>\n      <h3>{ticket.location} - {ticket.names}</h3>\n      <p><em>{ticket.issue}</em></p>\n      <button onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button> { /* new code */ }\n      <hr/>\n    </React.Fragment>\n  );\n}\n\nTicketDetail.propTypes = {\n  ticket: PropTypes.object,\n  onClickingDelete: PropTypes.func // new code\n};\n\nexport default TicketDetail;\n')),(0,a.kt)("p",null,"First, we add a button with an ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," handler. When the button is clicked, ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickingDelete(ticket.id)")," will be executed. Once again, we need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"() =>")," in our JSX curly braces because our function has parens with an argument. Also note that we're destructuring props to create an onClickingDelete method, just like we did for ticket. "),(0,a.kt)("p",null,"Finally, we need to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"PropType")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"onClickingDelete"),"."),(0,a.kt)("p",null,"And that's it! We didn't have to add too much code, in large part because we didn't do any prop-drilling."))}k.isMDXComponent=!0}}]);