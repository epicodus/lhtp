"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[16009],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},97371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={title:"Git with Collaborators: Setup",id:"git-with-collaborators-setup",slug:"git-with-collaborators-setup",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/git_with_collaborators_setup.md"},i=void 0,l={unversionedId:"c-and-net-classic/team-week/git-with-collaborators-setup",id:"c-and-net-classic/team-week/git-with-collaborators-setup",title:"Git with Collaborators: Setup",description:"Working in a team rather than alone can allow you to build more advanced projects, but it can be a little tricky to divide up the work and make sure that no one is overwriting anyone else's code unintentionally. We have used Git to backup our work and save our changes as we go, but it is also a powerful tool for working in a group.",source:"@site/docs/c-and-net-classic/12_team-week/git-with-collaborators-setup.md",sourceDirName:"c-and-net-classic/12_team-week",slug:"/c-and-net-classic/team-week/git-with-collaborators-setup",permalink:"/c-and-net-classic/team-week/git-with-collaborators-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Git with Collaborators: Setup",id:"git-with-collaborators-setup",slug:"git-with-collaborators-setup",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/git_with_collaborators_setup.md"},sidebar:"c-and-net-classic",previous:{title:"Team Week Objectives",permalink:"/c-and-net-classic/team-week/team-week-objectives"},next:{title:"Git with Collaborators: Workflow",permalink:"/c-and-net-classic/team-week/git-with-collaborators-workflow"}},s={},c=[{value:"Remote Repository Ownership",id:"remote-repository-ownership",level:2},{value:"Collaborators",id:"collaborators",level:2},{value:"Contributors",id:"contributors",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Working in a team rather than alone can allow you to build more advanced projects, but it can be a little tricky to divide up the work and make sure that no one is overwriting anyone else's code unintentionally. We have used Git to backup our work and save our changes as we go, but it is also a powerful tool for working in a group.  "),(0,a.kt)("p",null,"To determine the best workflow for team development, a few decisions have to be made regarding the roles of team members. On GitHub, developers contributing to the project can be owners, collaborators or contributors. In this lesson, we detail how a team member's role will determine the workflow for team development. "),(0,a.kt)("h2",{id:"remote-repository-ownership"},"Remote Repository Ownership"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"One of the first decisions a team will need to make is to determine who will own the GitHub remote repository. Every project should have one main repository that is created with a single GitHub account. If there is a logical owner or team leader for the project, it makes sense that the main repository is created with their account. If not, the team should determine who will create the main and therefore be the owner. "),(0,a.kt)("p",null,"The owner will have the following privileges for the repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add and remove collaborators"),(0,a.kt)("li",{parentName:"ul"},"change the visibility of the repository (public vs private)"),(0,a.kt)("li",{parentName:"ul"},"delete the repository"),(0,a.kt)("li",{parentName:"ul"},"implement all collaborator privileges")),(0,a.kt)("p",null,"Once an owner is determined, other developers can work on the code as either collaborators or contributors.  "),(0,a.kt)("h2",{id:"collaborators"},"Collaborators"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Collaborators are members of the core development team and are officially designated as collaborators by the owner. When working in teams at Epicodus, team members are collaborators."),(0,a.kt)("p",null,"Collaborators have the following privileges for the repository:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"push to (write) and pull from (read) the main repository"),(0,a.kt)("li",{parentName:"ul"},"manage issues"),(0,a.kt)("li",{parentName:"ul"},"merge and close pull requests (code from contributors)"),(0,a.kt)("li",{parentName:"ul"},"remove themselves as collaborators")),(0,a.kt)("p",null,"They will use a ","[branching and merging]"," workflow when they add and modify code for the project."),(0,a.kt)("p",null,"To assign a person as a collaborator, the owner will need to follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," menu on the right side of the main repository (see in red box below).\n",(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-on-settings-tab.png",alt:"GitHub repo settings"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Access")," on the left side menu:"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-manage-access.png",alt:"Manage Access is in left-hand menu"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Invite Teams or People"),": ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/click-invite-teams-or-people.png",alt:'Click "Invite Teams or People"'})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Add a team member by GitHub username, full name or email in the Collaborators form. GitHub will helpfully offer to autopopulate, but be careful! It's easy to give a random account access otherwise.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/git-with-teams/git-june-2020/add-gh-username-or-email.png",alt:"Add the team member you want to add."})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Select a team or member above")," to add the GitHub user to the project. At that point, the GitHub user will be sent a confirmation email. Once they have confirmed, they will be added to the project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You may optionally update a user's role in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Access")," pane. If you want to be very careful about access, you'd give ",(0,a.kt)("inlineCode",{parentName:"p"},"Read")," access, which allows contributors to create and comment on issues and also create pull requests. For group projects, it's more likely that you will give ",(0,a.kt)("inlineCode",{parentName:"p"},"Write")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," access. ",(0,a.kt)("inlineCode",{parentName:"p"},"Write")," access will allow contributors to make direct changes to the repository, including pushing to the repository and managing issues. ",(0,a.kt)("inlineCode",{parentName:"p"},"Admin")," access allows additional functionality such as adding collaborators and updating repository settings."))),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Anyone can be a contributor on an open source repository. Contributors are interested developers that want to offer code but can NOT make commits directly to the main repository.  The workflow of a contributor uses ","[forking and pulling]"," to submit their code for review (pull request) to the core development team.  The core team can then determine whether to merge the code with the main or not."))}m.isMDXComponent=!0}}]);