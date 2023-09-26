"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[25927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"Adding Redux to React: Part 3",id:"adding-redux-to-react-part-3",slug:"adding-redux-to-react-part-3",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0m_adding_redux_to_react_part_3.md"},r=void 0,s={unversionedId:"react-part-time-evening/react-with-redux/adding-redux-to-react-part-3",id:"react-part-time-evening/react-with-redux/adding-redux-to-react-part-3",title:"Adding Redux to React: Part 3",description:"In the last lesson, we updated the CRUD methods in our Help Queue application. They are now connected to a Redux store. In this lesson, we will use the mapStateToProps() function in order to display the state from our Redux store in our application. We will need to make minor changes in two components to do this.",source:"@site/docs/react-part-time-evening/6_react-with-redux/0m-adding-redux-to-react-part-3.md",sourceDirName:"react-part-time-evening/6_react-with-redux",slug:"/react-part-time-evening/react-with-redux/adding-redux-to-react-part-3",permalink:"/react-part-time-evening/react-with-redux/adding-redux-to-react-part-3",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Adding Redux to React: Part 3",id:"adding-redux-to-react-part-3",slug:"adding-redux-to-react-part-3",hide_table_of_contents:!0,sidebar_position:13,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0m_adding_redux_to_react_part_3.md"},sidebar:"react-part-time-evening",previous:{title:"Adding Redux to React: Part 2",permalink:"/react-part-time-evening/react-with-redux/adding-redux-to-react-part-2"},next:{title:"Capstone Sign-Up Reminder",permalink:"/react-part-time-evening/react-with-redux/capstone-sign-up-reminder"}},p={},l=[{value:"Mapping State to Props",id:"mapping-state-to-props",level:3},{value:"Adding PropTypes",id:"adding-proptypes",level:3},{value:"Updating Our Code To Use Our New Prop",id:"updating-our-code-to-use-our-new-prop",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the last lesson, we updated the CRUD methods in our Help Queue application. They are now connected to a Redux store. In this lesson, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps()")," function in order to display the state from our Redux store in our application. We will need to make minor changes in two components to do this."),(0,a.kt)("h3",{id:"mapping-state-to-props"},"Mapping State to Props"),(0,a.kt)("p",null,"We're now ready to use an extremely powerful part of React Redux: the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function. This function takes a state slice from the store and then maps it to a prop in the component."),(0,a.kt)("p",null,"Add the following code just above the export statement at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Note that we've already written the line with the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function at the bottom of the code snippet below \u2014 however, a key addition has been made to that line of code. "),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nconst mapStateToProps = state => {\n  return {\n    mainTicketList: state\n  }\n}\n\n// Note: we are now passing mapStateToProps into the connect() function.\n\nTicketControl = connect(mapStateToProps)(TicketControl);\n")),(0,a.kt)("p",null,"In the code snippet above, we define how the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function should look. It will always have the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = state => {\n  return {\n    // Key-value pairs of state to be mapped from Redux to React component go here.\n  }\n}\n")),(0,a.kt)("p",null,"The key-value pairs determine the state slices that should be mapped to the component's props. In our case, we want ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," from the store to be mapped to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),"'s props."),(0,a.kt)("p",null,"Then we need to pass our newly-defined ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function into the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"TicketControl = connect(mapStateToProps)(TicketControl);\n")),(0,a.kt)("p",null,"This ensures the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component has the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functionality when ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," redefines the component."),(0,a.kt)("h3",{id:"adding-proptypes"},"Adding PropTypes"),(0,a.kt)("p",null,"We are mapping state from the Redux store to our component's props. That means we need to add prop types to ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl"),". Let's do so now:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'...\nimport PropTypes from "prop-types";\n\n...\n\nTicketControl.propTypes = {\n  mainTicketList: PropTypes.object\n};\n\n// mapStateToProps function is here.\n...\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," in our Redux store is an object so we define it as that prop type."),(0,a.kt)("h3",{id:"updating-our-code-to-use-our-new-prop"},"Updating Our Code To Use Our New Prop"),(0,a.kt)("p",null,"Next, we need to pass this prop to where it's needed \u2014 our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component! We could also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," function directly in that component. However, we are already using ",(0,a.kt)("inlineCode",{parentName:"p"},"connect()")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component \u2014 and it will take a minimal refactor to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component working correctly."),(0,a.kt)("p",null,"We will need to change two things in our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component. First, we need to update our ",(0,a.kt)("inlineCode",{parentName:"p"},"handleChangingSelectedTicket")," method. Currently, the method looks like this:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nhandleChangingSelectedTicket = (id) => {\n  const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];\n  this.setState({selectedTicket: selectedTicket});\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," is no longer part of ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," \u2014 it's part of the Redux store now and we need to pass it into the component via ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props"),". Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"mainTicketList")," is an object now, not an array. No need to use filter anymore \u2014 we can just use bracket notation instead. Here's the updated method:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\nhandleChangingSelectedTicket = (id) => {\n  const selectedTicket = this.props.mainTicketList[id];\n  this.setState({selectedTicket: selectedTicket});\n}\n...\n")),(0,a.kt)("p",null,"We only need to change part of one line of code: we will now get the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"selectedTicket")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.mainTicketList[id]"),"."),(0,a.kt)("p",null,"This is the power of ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),": we don't have to do any fancy additional code to get a specific state slice from the store. We can just use ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," \u2014 as long as we've defined the state slice we want to map in our ",(0,a.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function literal."),(0,a.kt)("p",null,"There is one more line of code we need to change in ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl.js"),". We need to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"ticketList")," prop that is currently being passed down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component. Currently, it looks like this:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;\n")),(0,a.kt)("p",null,"We'll extract the key piece of code that needs to be changed here for clarity's sake:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<TicketList ticketList={this.state.mainTicketList}\n")),(0,a.kt)("p",null,"Currently, our application is trying to pass down a prop called ",(0,a.kt)("inlineCode",{parentName:"p"},"ticketList")," that is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.mainTicketList"),". Now we have to make a change that's similar to the one we just made \u2014 change the prop from ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.mainTicketList")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props.mainTicketList"),". Here's how the updated code should look:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;\n")),(0,a.kt)("p",null,"As we see here, we just needed to change a single word. ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," is changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props"),"."),(0,a.kt)("p",null,"Even though it's a small change in the code, there's a huge difference in what it means. At this point, you should have a clear understanding of the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," (which refers to a class component's state) and ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," (which refers to the props being passed into a component from a parent component or the Redux store)."),(0,a.kt)("p",null,"We are almost done \u2014 everything would work correctly if we hadn't made another change to our application. Previously, all of our tickets were stored in an array. Now they are stored in an object. We will need to make a few small changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component to get everything working as it should. There are three comments in the code below to point out the changes. (You should remove the comments from your own code.)"),(0,a.kt)("div",{class:"filename"},"src/components/TicketList.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nfunction TicketList(props){\n  return (\n    <React.Fragment>\n      <hr />\n      {/* We now need to map over the values of an object, not an array. */}\n      {Object.values(props.ticketList).map((ticket) =>\n        <Ticket\n          whenTicketClicked = { props.onTicketSelection }\n          names={ticket.names}\n          location={ticket.location}\n          issue={ticket.issue}\n          id={ticket.id}\n          key={ticket.id}/>\n      )}\n      {/* Don't forget to add the curly brace above \u2014 otherwise there will be a syntax error. */}\n    </React.Fragment>\n  );\n}\n\n\nTicketList.propTypes = {\n  // The PropType below has been updated \u2014 it's now an object, not an array.\n  ticketList: PropTypes.object,\n  onTicketSelection: PropTypes.func\n};\n\n...\n")),(0,a.kt)("p",null,"First, we iterate over the values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ticketList"),". We do this with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.values()")," method, which grabs all the values from the object. Once we have the values, we can map over them."),(0,a.kt)("p",null,"At this point, everything should work correctly. We have successfully moved all of our shared state from our React application to a Redux store."),(0,a.kt)("p",null,"Note that our application still has plenty of local state. As we've already mentioned, we're letting React handle that side of things. Once we add a Redux store to an application, it should always handle the application's shared state. However, local state can still be handled by React components. That being said, it's also perfectly okay to add local state to a Redux store as well. During class, you'll have the opportunity to refactor the Help Queue so that the Redux store handles all state \u2014 local and shared."))}u.isMDXComponent=!0}}]);