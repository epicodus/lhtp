"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[7230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,u=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"9. Git Merging",id:"git_merging",slug:"git_merging",hide_table_of_contents:!0,sidebar_position:28,day:"tuesday",type:"lesson"},o=void 0,l={unversionedId:"git_html_and_css/git_merging",id:"git_html_and_css/git_merging",title:"9. Git Merging",description:'In the last lesson we explored creating and managing multiple branches in a single Git repository. As we learned, branches allow us to create multiple copies of our code. These copies may be used to experiment with implementing new code, without putting the "final version" or main branch at risk of bugs or errors.',source:"@site/docs/1_git_html_and_css/2h_git_merging.md",sourceDirName:"1_git_html_and_css",slug:"/git_html_and_css/git_merging",permalink:"/lhtp/git_html_and_css/git_merging",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"9. Git Merging",id:"git_merging",slug:"git_merging",hide_table_of_contents:!0,sidebar_position:28,day:"tuesday",type:"lesson"},sidebar:"docs",previous:{title:"8. Git Branching",permalink:"/lhtp/git_html_and_css/git_branching"},next:{title:"10. PRACTICE: Branching and Merging",permalink:"/lhtp/git_html_and_css/practice_branching_and_merging"}},s={},c=[{value:"Project Recap",id:"project-recap",level:2},{value:"Merging Branches",id:"merging-branches",level:2},{value:"Deleting Branches",id:"deleting-branches",level:2}],m={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'In the last lesson we explored creating and managing multiple branches in a single Git repository. As we learned, branches allow us to create multiple copies of our code. These copies may be used to experiment with implementing new code, without putting the "final version" or ',(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch at risk of bugs or errors."),(0,r.kt)("p",null,"Additionally, branches can be used to simply try out different options before deciding which should end up in the final iteration of the project; like we did in the previous lesson with different sets of CSS styles."),(0,r.kt)("p",null,"However, once we confirm the code located in a feature branch works, and that we want to include it in the final version of our project, we need to integrate this code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch that represents our final product. The act of incorporating code from multiple branches together is called ",(0,r.kt)("strong",{parentName:"p"},"merging"),". In this lesson, we'll walk through merging branches together in our example project."),(0,r.kt)("h2",{id:"project-recap"},"Project Recap"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In the last lesson, we created a website to practice branching together. It currently has three branches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blue_theme")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"red_theme"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Git+Branching+and+Merging+Lessons/test-site-blue-headers.png",alt:"master-version"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"blue_theme")," was branched off of ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". It contains one possible set of CSS rules for our site. They look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Git+Branching+and+Merging+Lessons/test-site-blue-theme.png",alt:"blue-version"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," was also branched from ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". It contains an alternate set of CSS rules to style our site. They make our site look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Git+Branching+and+Merging+Lessons/red-theme-with-sans-serif.png",alt:"red-version"})),(0,r.kt)("p",null,"The commits across all branches should look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Git+Branching+and+Merging+Lessons/flow-chart-3.png",alt:"project-flowchart"})),(0,r.kt)("p",null,"Now that we have two different options in place, we can decide which branch's styles we like best, and merge it into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("h2",{id:"merging-branches"},"Merging Branches"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's say we've decided to use the CSS we wrote in the ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," branch in the final version of our project. Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch represents the final product, we'll need to merge the ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," branch with ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("p",null,"To merge two branches you must first navigate to the branch you'd like to introduce new code into. In our case, this is the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, because we'd like to integrate the CSS we created in ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("p",null,"Let's run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch")," to see where we are currently located:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch\n\n  blue_theme\n  main\n* red_theme\n")),(0,r.kt)("p",null,"If you followed along with the previous lesson exactly, you should still be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme"),". Let's navigate into ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git checkout"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout main\n\nSwitched to branch 'main'\n")),(0,r.kt)("p",null,"Then, we'll run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch")," again to confirm we've successfully navigated to ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch\n\n  blue_theme\n* main\n  red_theme\n")),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git merge")," command to bring the contents and commits of an outside branch into our current branch. In our case, we'll bring the commits from ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch we are currently located in. We'll run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git merge red_theme\n")),(0,r.kt)("p",null,"This should result in something that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Updating 982b0f2..d5bae64\nFast-forward\n css/styles.css | 17 ++++++++++++++++-\n 1 file changed, 16 insertions(+), 1 deletion(-)\n")),(0,r.kt)("p",null,"Now, let's run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git log"),"  to view our commit history:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log\n\ncommit d5bae6406669988e154608ce990e08fed51e9cb3\nAuthor: Ada Lovelace and Enrique de la Fuente <enrique@>\nDate:   Mon Oct 10 13:00:42 2016 -0700\n\n    Make all font sans-serif style.\n\ncommit 5f2d9510cdc76736c7c5cf7e5d56264cd405fcd1\nAuthor: Ada Lovelace and Enrique de la Fuente <enrique@>\nDate:   Mon Oct 10 12:51:11 2016 -0700\n\n    Add styles to h1, h2, p, and body to fit red theme.\n\ncommit 982b0f21463be34d909c45dd67778d6ffe3d7668\nAuthor: Ada Lovelace and Enrique de la Fuente <enrique@>\nDate:   Mon Oct 10 12:06:35 2016 -0700\n\n    Add CSS rule to make H1 headings blue.\n\ncommit 8e36f8bfd58643487565c5a4fbcb5250fed0808b\nAuthor: Ada Lovelace and Enrique de la Fuente <ada@>\nDate:   Mon Oct 10 12:04:27 2016 -0700\n\n    Create stylesheet, link in head of website.\n")),(0,r.kt)("p",null,"Notice that the two most recent commits from ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," are now part of the commit history here in ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". This is because we ",(0,r.kt)("em",{parentName:"p"},"merged")," ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". This means all code and commits from ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," have been incorporated into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", too."),(0,r.kt)("p",null,"The commit structure of our project across all branches currently looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Git+Branching+and+Merging+Lessons/flow-chart-4.png",alt:"branches-with-merged-commits"})),(0,r.kt)("p",null,"Notice that merging ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," has brought all commits previously exclusive to ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," here in ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". Also, notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," commits don't instantly disappear when we merge them into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". They still exist in the ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," branch."),(0,r.kt)("h2",{id:"deleting-branches"},"Deleting Branches"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"After ",(0,r.kt)("em",{parentName:"p"},"successfully")," merging a branch (always confirm all of the branch's commits are present), you may delete it if you do not plan on using it further. This is safe to do because all commits in ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," are now present in ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". So, we don't risk losing any work."),(0,r.kt)("p",null,"We can delete a branch using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch -D")," command, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -D red_theme\n\nDeleted branch red_theme (was d5bae64).\n")),(0,r.kt)("p",null,"We can run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ git branch"),"  and see ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," has been removed from the repository entirely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch\n\n  blue_theme\n* main\n")),(0,r.kt)("p",null,"And, since we opted to integrate the styles in ",(0,r.kt)("inlineCode",{parentName:"p"},"red_theme")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"blue_theme"),", we no longer need the ",(0,r.kt)("inlineCode",{parentName:"p"},"blue_theme")," branch either. We'll delete it at this time, too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git branch -D blue_theme\n\nDeleted branch blue_theme (was 268363a).\n")),(0,r.kt)("p",null,"Know that merging doesn't always go quite this smoothly, unfortunately. If multiple branches contain edits to the same lines of code, Git won't know which edit should supersede which, and requires the developer to manually intervene (this primarily occurs when branches are working on the same code simultaneously, and both attempt to merge with ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),").  This is known as a merge conflict."),(0,r.kt)("p",null,"However, we shouldn't encounter any merge conflicts quite yet. For now, simply make sure you're familiar with the general concepts of branching and merging. We'll explore merge conflicts, what they look like, and how to resolve them later on."),(0,r.kt)("p",null,"As you can see, merging and branching in Git is a powerful, complex feature. However, don't feel overwhelmed if you don't yet have a handle on everything we've covered in these past two lessons. Feel free to refer back to this content whenever necessary. Soon enough, branching and merging will become second nature!"))}h.isMDXComponent=!0}}]);