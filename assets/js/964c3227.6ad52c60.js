"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Accessing Code From Different Branches",id:"accessing-code-from-different-branches",slug:"accessing-code-from-different-branches",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0g_accessing_different_branches_and_commits.md"},a=void 0,c={unversionedId:"intermediate-javascript-part-time-evening/object-oriented-javascript/accessing-code-from-different-branches",id:"intermediate-javascript-part-time-evening/object-oriented-javascript/accessing-code-from-different-branches",title:"Accessing Code From Different Branches",description:"In this section, we will be providing a repository that you can use as a reference as you work through the lessons. There will be links to this repository throughout the section. However, each link will be to a different branch in the repository.",source:"@site/docs/intermediate-javascript-part-time-evening/3_object-oriented-javascript/0g-accessing-different-branches-and-commits.md",sourceDirName:"intermediate-javascript-part-time-evening/3_object-oriented-javascript",slug:"/intermediate-javascript-part-time-evening/object-oriented-javascript/accessing-code-from-different-branches",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/accessing-code-from-different-branches",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Accessing Code From Different Branches",id:"accessing-code-from-different-branches",slug:"accessing-code-from-different-branches",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0g_accessing_different_branches_and_commits.md"},sidebar:"intermediate-javascript-part-time-evening",previous:{title:"Constructor and Prototype Methods",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/constructor-and-prototype-methods"},next:{title:"Objects Within Objects",permalink:"/intermediate-javascript-part-time-evening/object-oriented-javascript/objects-within-objects"}},s={},l=[{value:"Accessing Different Branches in a Cloned Project",id:"accessing-different-branches-in-a-cloned-project",level:2},{value:"Accessing A Single Branch in a Downloaded Project",id:"accessing-a-single-branch-in-a-downloaded-project",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section, we will be providing a repository that you can use as a reference as you work through the lessons. There will be links to this repository throughout the section. However, each link will be to a ",(0,r.kt)("strong",{parentName:"p"},"different branch")," in the repository."),(0,r.kt)("p",null,"Going forward, it will be common for a section to include a reference repository. Some links will point to a specific branch in a repository (which is the case in this section). Other links will point to a specific commit in a repository (which will be the case in the reference repository for other sections). This lesson will focus on working with a reference repository using branches because that is directly relevant to this section."),(0,r.kt)("p",null,"A link to a reference repository in Learn How to Program will always have this format:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/oop-address-book-v2/tree/3_unique_ids"},(0,r.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Example GitHub Repo for the Address Book"))),(0,r.kt)("p",null,"If you click on this link, it will take you to a specific branch in the Address Book project called ",(0,r.kt)("inlineCode",{parentName:"p"},"3_unique_ids"),". In GitHub, we can browse through the code in this specific branch. However, if we were to click on epicodus-lessons/",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epicodus-lessons/oop-address-book-v2"},"\noop-address-book")," at the top of the page (specifically the ",(0,r.kt)("inlineCode",{parentName:"p"},"opp-address-book")," part), it will take us to the ",(0,r.kt)("em",{parentName:"p"},"default")," branch. This is usually going to be ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", but in this case the main branch has been removed and the default branch is ",(0,r.kt)("inlineCode",{parentName:"p"},"1_address_book_constructors_and_prototype_methods"),"."),(0,r.kt)("p",null,"If you navigate around the code of a specific branch or commit on GitHub, make sure you don't accidentally navigate to another commit, branch, or even the most recent code. Otherwise, the code will be different from the reference code you are supposed to be looking at for the lesson."),(0,r.kt)("p",null,"If you want the reference code locally, you have two choices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Clone")," the project and switch between branches. You can easily navigate between branches this way."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Download")," the code at that particular point in time. You won't need to switch branches to access the reference code, but you also will not be able to access other branches or commits, either.")),(0,r.kt)("h2",{id:"accessing-different-branches-in-a-cloned-project"},"Accessing Different Branches in a Cloned Project"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you ",(0,r.kt)("em",{parentName:"p"},"clone")," the project (which is what we usually do), it will automatically be set to the default branch (usually ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"). We can verify this by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch")," command in the root directory of the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git branch\n1_address_book_constructors_and_prototype_methods\n")),(0,r.kt)("p",null,"Note that none of the other branches are showing. ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch")," only shows local branches by default, not remote branches. To see all of the branches, we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git branch -a\n* 1_address_book_constructor_and_prototype_methods\n  remotes/origin/1_address_book_constructor_and_prototype_methods\n  remotes/origin/2_objects_within_objects\n  remotes/origin/3_unique_ids\n  remotes/origin/4_finding_and_deleting_contacts\n  remotes/origin/5_address_book_user_interface\n  remotes/origin/6_adding_interactivity\n  remotes/origin/7_event_delegation\n  remotes/origin/8_event_delegation_2\n  remotes/origin/HEAD -> origin/1_address_book_constructor_and_prototype_methods\n  remotes/origin/main\n")),(0,r.kt)("p",null,"It's not showing in the example above, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"remotes/origin")," branches will probably be highlighted in red in your terminal."),(0,r.kt)("p",null,"We can access any of these branches with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git checkout"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git checkout 3_unique_ids\nSwitched to branch '3_unique_ids'\nYour branch is up to date with 'origin/3_unique_ids'.\n$ git branch\n  1_address_book_constructor_and_prototype_methods\n* 3_unique_ids\n")),(0,r.kt)("p",null,"As we can see here, we checked out the remote branch ",(0,r.kt)("inlineCode",{parentName:"p"},"3_unique_ids"),". If we run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch")," again, we'll see we are on the new branch \u2014 and that it is now a local branch as well."),(0,r.kt)("p",null,"We can easily navigate to any branch in the project this way."),(0,r.kt)("h2",{id:"accessing-a-single-branch-in-a-downloaded-project"},"Accessing A Single Branch in a Downloaded Project"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We can also download the project directly by selecting the ",(0,r.kt)("em",{parentName:"p"},"Download ZIP")," options, as the image below shows."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/Object-Oriented-JavaScript-2020/download-zip.png",alt:"Image shows we can download the project directly."})),(0,r.kt)("p",null,"When we download a project at a specific reference point, whether that's from the main branch, or a different branch, the code from that reference point will be downloaded. This is also the case if you download a project from a commit other than the most recent one. There's no need to switch branches or commits \u2014 you've already got the code from that reference point. While this can be convenient, ",(0,r.kt)("strong",{parentName:"p"},"the downloaded code is not linked to the Git repository"),". If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," on it, you'll get the error ",(0,r.kt)("inlineCode",{parentName:"p"},"fatal: not a git repository (or any of the parent directories): .git"),". So while you have a reference from that moment in time, you can't switch branches or commits because it's just the code without any git information."),(0,r.kt)("p",null,"Generally, it's a better idea to clone the code and use ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git checkout")," to navigate to the branch or commit that you want to access. However, it's important to know how the download option is different \u2014 and there may be times when you prefer to download the project instead. For instance, if you want to start your own project from a specific commit, but don't want to be tied to the previous commit history, downloading the project is a better option."))}h.isMDXComponent=!0}}]);