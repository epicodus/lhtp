"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[69811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(d,l(l({ref:t},h),{},{components:a})):n.createElement(d,l({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Pull Requests with Branches",id:"pull_requests_with_branches",slug:"pull_requests_with_branches",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/12_team-week/pull_requests_with_branches.md"},l=void 0,i={unversionedId:"c_and_net/team-week/pull_requests_with_branches",id:"c_and_net/team-week/pull_requests_with_branches",title:"Pull Requests with Branches",description:"In this lesson, we'll practice making pull requests with branches. This is a common workflow in the industry. In this workflow, a developer pulls down the latest code from the main branch and creates a new branch. When a feature is completed, the new branch is committed and pushed to GitHub. Then the developer makes a pull request so the code can be merged into the main branch via GitHub's UI.",source:"@site/docs/c_and_net/12_team-week/pull_requests_with_branches.md",sourceDirName:"c_and_net/12_team-week",slug:"/c_and_net/team-week/pull_requests_with_branches",permalink:"/lhtp/c_and_net/team-week/pull_requests_with_branches",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Pull Requests with Branches",id:"pull_requests_with_branches",slug:"pull_requests_with_branches",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/shared-full-stack/blob/main/12_team-week/pull_requests_with_branches.md"},sidebar:"c_and_net",previous:{title:"Practicing the Git Workflow",permalink:"/lhtp/c_and_net/team-week/practicing_the_git_workflow"},next:{title:"Pull Requests with Forks",permalink:"/lhtp/c_and_net/team-week/pull_requests_with_forks"}},s={},c=[{value:"Pull Requests with Branches",id:"pull-requests-with-branches",level:2},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:3},{value:"Approving a Pull Request",id:"approving-a-pull-request",level:3},{value:"Dealing with Merge Conflicts",id:"dealing-with-merge-conflicts",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we'll practice making pull requests with branches. This is a common workflow in the industry. In this workflow, a developer pulls down the latest code from the main branch and creates a new branch. When a feature is completed, the new branch is committed and pushed to GitHub. Then the developer makes a pull request so the code can be merged into the main branch via GitHub's UI."),(0,r.kt)("p",null,"We've already learned one way to merge our code into the main branch in ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/team-week/practicing-the-git-workflow"},"Practicing the Git Workflow"),". While it's important to be fluent in this workflow, it doesn't allow for any oversight of the process. All of the merging happens locally."),(0,r.kt)("p",null,"In the case of group projects, the entire team should be able to comment on and merge pull requests. In order to do so, everyone must be a collaborator on the project. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/intermediate-javascript/team-week/git-with-collaborators-setup"},"Git with Collaborators Setup")," lesson for instructions on adding collaborators."),(0,r.kt)("h2",{id:"pull-requests-with-branches"},"Pull Requests with Branches"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Once again, we'll create a very simple project with a README to walk through the process of making pull requests. After all, the goal isn't to code here \u2014 it's to practice a new git workflow."),(0,r.kt)("p",null,"Start by creating a repository in GitHub called ",(0,r.kt)("inlineCode",{parentName:"p"},"pr-practice"),". Clone that down to your local machine and add a README with the following text:"),(0,r.kt)("div",{class:"filename"},"README.md"),"``` This code needs some updates. Fork it and make a pull request! ```",(0,r.kt)("p",null,"Next, commit this code and push it back to the main branch. We need to have some starter code before we practice our new git workflow."),(0,r.kt)("p",null,"Next, create a branch called ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git checkout -b new-feature\n")),(0,r.kt)("p",null,"Now let's update our README (in the local ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch, not in the GitHub UI):"),(0,r.kt)("div",{class:"filename"},"README.md"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This code needs some updates. Fork it and make a pull request!\n\nNew feature added!\n")),(0,r.kt)("p",null,"Next, we need to save and commit our code. Finally, we'll push our ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch to GitHub. As of now, it only exists locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push origin new-feature\n")),(0,r.kt)("p",null,"Now our ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch exists both locally and remotely, but it still hasn't been merged into the main branch yet."),(0,r.kt)("p",null,"At this point, we're ready to make our first pull request."),(0,r.kt)("h3",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,r.kt)("p",null,"At this point, we can go to the repository in GitHub and click on the ",(0,r.kt)("em",{parentName:"p"},"Branches")," tab. This will show all of the branches you've created as well as all of the active branches in the project."),(0,r.kt)("p",null,"![We can see all the active branches in our project.]","\n(",(0,r.kt)("a",{parentName:"p",href:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/click-on-pr-request-button.png"},"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/click-on-pr-request-button.png"),")"),(0,r.kt)("p",null,"In the image above, we can also see that our branches have a button on the right side of the screen that reads ",(0,r.kt)("em",{parentName:"p"},"New Pull Request"),". That's exactly what we want. Click on this button to open a new pull request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you don't see the branch you've been working on in GitHub, that probably means it only exists locally. Make sure to commit and push the branch and then refresh GitHub."),(0,r.kt)("p",null,"Once we click on the ",(0,r.kt)("em",{parentName:"p"},"New Pull Request")," button, we'll be taken to a screen that looks like this:"),(0,r.kt)("p",null,"![Image shows screen with option to add comment and create pull request.]","\n(",(0,r.kt)("a",{parentName:"p",href:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/add-a-comment-to-pr.png"},"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/add-a-comment-to-pr.png"),")"),(0,r.kt)("p",null,"There are several important things to note about this screen."),(0,r.kt)("p",null,"First, at the top, we see two dropdowns. The one on the left reads ",(0,r.kt)("em",{parentName:"p"},"base: main"),". The one on the right reads ",(0,r.kt)("em",{parentName:"p"},"compare: _new","_","feature"),". Then, just to the right of that, we see a green message with a checkbox that says ",(0,r.kt)("em",{parentName:"p"},"Able to merge.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Base")," is the branch we want to merge our new feature ",(0,r.kt)("em",{parentName:"p"},"into"),". It will often be the main branch but not always. For instance, if we also had a development branch, we might want to target that branch with our PR instead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compare")," is the branch that includes the code we want to merge. In this case, it's the ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch. However, we could also change it to be another branch instead. Why is it ",(0,r.kt)("em",{parentName:"p"},"compare")," instead of ",(0,r.kt)("em",{parentName:"p"},"merge"),"? Well, just because we are creating a PR doesn't mean the code will eventually be merged. It is just a request. We are asking someone else to review the code and compare it. Based on that, the reviewers will determine whether the PR should be merged, if it needs more changes, or if it should be rejected outright."),(0,r.kt)("p",null,"Next, we have an ",(0,r.kt)("em",{parentName:"p"},"Able to merge")," message. This is important. This verifies that our PR, if it is approved, can be merged without any conflicts. We can still make a PR even if it will cause merge conflicts but in general we want to avoid that if possible. Merge conflicts are often a sign that developers haven't been communicating about the code they are working on, resulting in two sets of code that has conflicts. We will work through an example of a PR with merge conflicts after we are finished creating and merging this PR."),(0,r.kt)("p",null,"Next, we need to give our PR a title and add a comment. It's important to communicate clearly and concisely. While it's technically optional to add a comment to a PR, doing so (and having a clear title) makes it easier for reviewers to see what your PR is supposed to do. In an actual job, you should always strive to have good communication. Your senior devs will not be happy if they have to review poor PRs that create more work for them."),(0,r.kt)("p",null,"Once this is done, we can click on ",(0,r.kt)("em",{parentName:"p"},"Create pull request"),". There are actually two options here. We can click on the dropdown attached to the button to have an option to ",(0,r.kt)("em",{parentName:"p"},"Create Draft Pull Request"),". This simply means that the PR can't be merged until you mark it ready for review. Generally, we'll be making PRs only when the code is ready to merge. However, a draft pull request can be helpful because it allows others to see the new code \u2014 and comment on it \u2014 while it's still in progress."),(0,r.kt)("p",null,"Click on ",(0,r.kt)("em",{parentName:"p"},"Create pull request")," and we're done making the request. "),(0,r.kt)("h3",{id:"approving-a-pull-request"},"Approving a Pull Request"),(0,r.kt)("p",null,"After we create the pull request, GitHub will display the page with the pull request. We can also navigate to our new PR, or any other PR in the repository, by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Pull requests")," tab in the repository."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/list-of-pull-requests.png",alt:"See a list of pull requests in the repository."})),(0,r.kt)("p",null,"As we can see in the image above, the ",(0,r.kt)("em",{parentName:"p"},"New feature")," title isn't so great \u2014 it's fine for practice, but if we had many pull requests, the purpose of this one wouldn't be clear."),(0,r.kt)("p",null,"The image below shows the page for the PR itself:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/merge-pull-request.png",alt:"PR page gives us several options which we'll discuss below."})),(0,r.kt)("p",null,"There are several important things to note about the PR page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The PR will show a list of commits. If we need to, we can click on any of the commits to review the code. This is one thing a senior dev would do before approving the PR. (Note that the image above doesn't show the list of commits but you'll see it in your own UI.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As the image above shows, ",(0,r.kt)("em",{parentName:"p"},"This branch has no conflicts with the base branch"),". We already know that. The good news here is that we can easily merge without running into conflicts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The green button gives us the option to ",(0,r.kt)("em",{parentName:"p"},"Merge pull request"),". You can also click on the dropdown by this button to choose to ",(0,r.kt)("em",{parentName:"p"},"Squash and merge")," or ",(0,r.kt)("em",{parentName:"p"},"Rebase and merge"),". Generally, we will just click ",(0,r.kt)("em",{parentName:"p"},"Merge pull request"),". The advantage of ",(0,r.kt)("em",{parentName:"p"},"Squash and merge")," is that it will take all the commits from the PR and squash it down into one commit. This makes the commit history on our main branch tidier. For instance, if we added a navbar, we could ",(0,r.kt)("em",{parentName:"p"},"Squash and merge")," to a single commit that reads ",(0,r.kt)("inlineCode",{parentName:"p"},"complete navbar feature"),". Finally, ",(0,r.kt)("em",{parentName:"p"},"Rebase and merge")," means that we can reorganize and rewrite all the commits. However, rebasing should be avoided unless it's necessary due to a poor commit history."))),(0,r.kt)("p",null,"At the bottom of the page, we can leave a comment. There's also a ",(0,r.kt)("em",{parentName:"p"},"Close pull request")," button (if you have privileges to close pull requests, which you will in your own account). We'd only click the ",(0,r.kt)("em",{parentName:"p"},"Close pull request")," button if we want to reject it."),(0,r.kt)("p",null,"The comments are a great place to discuss the PR, including any changes or updates that should be made to it. Try adding a message for practice."),(0,r.kt)("p",null,"Now let's click on the ",(0,r.kt)("em",{parentName:"p"},"Merge pull request")," button to actually merge the pull request. We can name this commit whatever we want and then click ",(0,r.kt)("em",{parentName:"p"},"Confirm merge"),". "),(0,r.kt)("p",null,"Once the branch is merged, we'll be given the option to delete it by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Delete Branch")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/delete-branch.png",alt:"We can click on the Delete Branch button to delete it."})),(0,r.kt)("p",null,"Generally, once a feature is complete, the branch should be deleted. Then a new branch should be created for new features. For that reason, it's a good idea to delete the branch so it doesn't clutter the GitHub repository. The branch will still be available locally (unless it is deleted there, too)."),(0,r.kt)("p",null,"If we were to continue working on that branch locally, we could still make a new PR with that branch later. That's actually what we'll do with our second PR \u2014 no need to create a new branch when we are focused on making and accepting pull requests in this lesson."),(0,r.kt)("p",null,"Our first PR is complete! We've learned how to make a PR and approve it."),(0,r.kt)("h2",{id:"dealing-with-merge-conflicts"},"Dealing with Merge Conflicts"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's create one more PR. This time around, we'll intentionally introduce a merge conflict. That way, we can practice resolving a merge conflict in the GitHub UI. While we want to avoid merge conflicts if possible, they will happen from time to time, and you should be prepared when it does. "),(0,r.kt)("p",null,"First, we need to introduce a merge conflict in our code. We'll start by making an update to the README in the GitHub UI. Click on the pencil icon by the README in GitHub and update the final line of the README to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New feature updated...\n")),(0,r.kt)("p",null,"Commit this code in GitHub."),(0,r.kt)("p",null,"Next, we'll make a change in the ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch locally. We'll update the final line to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New feature changed...\n")),(0,r.kt)("p",null,"It's a fairly similar line of text, but just different enough to create a merge conflict."),(0,r.kt)("p",null,"Save and commit this code. Next, push the branch to GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push origin new-feature\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch will be in direct conflict with the main branch \u2014 a great opportunity to practice resolving a conflict!"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("em",{parentName:"p"},"Branches")," tab of the repository in GitHub and click on the ",(0,r.kt)("em",{parentName:"p"},"New Pull Request")," button to the right of the ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch. (In general, all of the steps involved in creating a PR will be the same as they were for our first PR.)"),(0,r.kt)("p",null,"Now, when we're taken to the page to make a PR, we'll see a message that states we can't automatically merge."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/cant-automatically-merge.png",alt:"Message states we can't automatically merge."})),(0,r.kt)("p",null,"In our own projects, we should definitely heed this message if we weren't expecting a merge conflict. Generally, this means that two different teams have been working on the same code in different ways, which is a likely sign of a communication breakdown."),(0,r.kt)("p",null,"Go ahead and submit the PR following the same steps as stated for our first PR. The only difference in this entire process is the message that states that we can't automatically merge the PR. If you need assistance, review the steps from when we created our first PR in the previous section of this lesson."),(0,r.kt)("p",null,"Now we're ready to merge our PR. If you haven't already, navigate to the PR in GitHub. Instead of the green ",(0,r.kt)("em",{parentName:"p"},"Merge pull request")," button, we'll see a new message:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/click-resolve-conflicts.png",alt:"This branch has conflicts that must be resolved."})),(0,r.kt)("p",null,"The message reads ",(0,r.kt)("em",{parentName:"p"},"This branch has conflicts that must be resolved"),". We can click the button to the right of this message to ",(0,r.kt)("em",{parentName:"p"},"Resolve conflicts"),". Click that button now. The GitHub UI will allow us to resolve the merge conflicts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/resolve-merge-conflict.png",alt:"GitHub UI shows the merge conflict."})),(0,r.kt)("p",null,"In this example, there is only one file with a merge conflict. However, if there are multiple files that have merge conflicts, we'll see the name of each file in the left-hand pane. At the top right hand corner of the pane, we'll see a greyed-out ",(0,r.kt)("em",{parentName:"p"},"Mark as resolved")," button. We cannot click this button until we remove all lines that indicate where the conflicts are. These lines will always include ",(0,r.kt)("inlineCode",{parentName:"p"},"======="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<<<<"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">>>>>>>"),"."),(0,r.kt)("p",null,"To the left of the ",(0,r.kt)("em",{parentName:"p"},"Mark as resolved")," button, we'll see a message in red that says ",(0,r.kt)("em",{parentName:"p"},"1 conflict")," \u2014 and then just to the right of that we'll see we can click ",(0,r.kt)("em",{parentName:"p"},"Prev")," and ",(0,r.kt)("em",{parentName:"p"},"Next"),". This is so we can navigate between files with conflicts. We can't do that here because we only have one conflict to resolve."),(0,r.kt)("p",null,"Fixing the issue itself is a bit more involved than doing so in VS Code. In VS Code, we can click whether we want the current, incoming, or both changes to take effect. In the GitHub UI, we have to modify the code manually."),(0,r.kt)("p",null,"The code below ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<<<<")," is the incoming change from the ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," branch. The code below ",(0,r.kt)("inlineCode",{parentName:"p"},">>>>>>>")," is the current change from the main branch. If the arrows mix you up, just focus on the names of the branches instead and keep in mind that the code in the branch you choose will take precedence."),(0,r.kt)("p",null,"This is how the code currently looks with GitHub's merge messages inserted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<<<<<<< new-feature\nNew feature changed...\n=======\nNew feature updated...\n>>>>>>>\n")),(0,r.kt)("p",null,"Assuming that we want to accept the code from the ",(0,r.kt)("inlineCode",{parentName:"p"},"new-feature")," (since that's the point of the PR), we'd remove ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<<<< new-feature")," and then also remove:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"=======\nNew feature updated...\n>>>>>>>\n")),(0,r.kt)("p",null,"That would leave just:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"New feature changed...\n")),(0,r.kt)("p",null,"Alternatively, we can modify the code in other ways as well as long as the GH merge conflict messages are removed. Once again, those are all the lines with ",(0,r.kt)("inlineCode",{parentName:"p"},"======="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<<<<"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">>>>>>>"),"."),(0,r.kt)("p",null,"When the merge conflict lines are removed, the ",(0,r.kt)("em",{parentName:"p"},"Mark as resolved")," button will no longer be greyed-out and we can click it. This is a nice little feature to ensure we don't accidentally leave any of those lines in our code."),(0,r.kt)("p",null,"Once our merge conflict is marked as resolved, we'll see some changes in the UI."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Intermediate+JavaScript/making-pr-requests/resolved-conflict.png",alt:"We can now click the commit merge button."})),(0,r.kt)("p",null,"Most importantly, we can now click ",(0,r.kt)("em",{parentName:"p"},"Commit merge"),". When we click on this button, we'll be able to make a new commit (as always, with a clear, concise commit message) that commits the changes we just made to resolve the conflict. At this point, we've just made a new commit, but we still haven't merged the PR yet! Now that the conflict is resolved, we'll see the green ",(0,r.kt)("em",{parentName:"p"},"Merge pull request")," button. We can click that button and finish merging the PR."),(0,r.kt)("p",null,"In this lesson, we made and merged two simple pull requests, including one with a merge conflict. We recommend practicing this workflow as you work on your group project \u2014 and give your project teammates the chance to look at your pull requests, make comments, and then approve them!"))}u.isMDXComponent=!0}}]);