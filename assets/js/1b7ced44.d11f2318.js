"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[62373],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(i),g=a,u=c["".concat(d,".").concat(g)]||c[g]||m[g]||o;return i?n.createElement(u,r(r({ref:t},p),{},{components:i})):n.createElement(u,r({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},4158:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const o={title:"5. Git Best Practices and Adding a .gitignore File",id:"git_best_practices_and_adding_a_gitignore_file",slug:"git_best_practices_and_adding_a_gitignore_file",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0e_git_best_practices_and_adding_a_gitignore_file.md"},r=void 0,l={unversionedId:"intermediate_javascript_part_time/test-driven-development/git_best_practices_and_adding_a_gitignore_file",id:"intermediate_javascript_part_time/test-driven-development/git_best_practices_and_adding_a_gitignore_file",title:"5. Git Best Practices and Adding a .gitignore File",description:"The very first step in creating any project that uses multiple JS dependencies that are managed by node package manager (npm) is to create a .gitignore file, and we'll do just that in this lesson. We'll also take the opportunity to review a few additional Git best practices. You are expected to incorporate all of these best practices into your projects for the remainder of the Intermediate JavaScript course.",source:"@site/docs/intermediate_javascript_part_time/5_test-driven-development/0e_git_best_practices_and_adding_a_gitignore_file.md",sourceDirName:"intermediate_javascript_part_time/5_test-driven-development",slug:"/intermediate_javascript_part_time/test-driven-development/git_best_practices_and_adding_a_gitignore_file",permalink:"/lhtp/intermediate_javascript_part_time/test-driven-development/git_best_practices_and_adding_a_gitignore_file",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Git Best Practices and Adding a .gitignore File",id:"git_best_practices_and_adding_a_gitignore_file",slug:"git_best_practices_and_adding_a_gitignore_file",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/5_test-driven-development/0e_git_best_practices_and_adding_a_gitignore_file.md"},sidebar:"intermediate_javascript_part_time",previous:{title:"4. Future Project Structure",permalink:"/lhtp/intermediate_javascript_part_time/test-driven-development/future_project_structure"},next:{title:"6. Creating a package.json with npm",permalink:"/lhtp/intermediate_javascript_part_time/test-driven-development/creating_a_packagejson_with_npm"}},d={},s=[{value:"Adding a <code>.gitignore</code> File",id:"adding-a-gitignore-file",level:2},{value:"Removing a Committed File that Should Be Ignored",id:"removing-a-committed-file-that-should-be-ignored",level:3},{value:"Git Best Practices",id:"git-best-practices",level:2},{value:"Checking Changes with <code>$ git diff</code>",id:"checking-changes-with--git-diff",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The very first step in creating any project that uses multiple JS dependencies that are managed by node package manager (npm) is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file, and we'll do just that in this lesson. We'll also take the opportunity to review a few additional Git best practices. You are expected to incorporate all of these best practices into your projects for the remainder of the Intermediate JavaScript course."),(0,a.kt)("h2",{id:"adding-a-gitignore-file"},"Adding a ",(0,a.kt)("inlineCode",{parentName:"h2"},".gitignore")," File"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We briefly discussed ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," files in ",(0,a.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-configurations"},"Git Configurations"),". That lesson discussed setting up a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global")," file which we can use to ensure that git ignores files we don't want to commit to GitHub. "),(0,a.kt)("p",null,"Just like with ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," files aren't specific to project written in JavaScript. In general, they should be included in all projects being pushed to GitHub, and we'll continue to use ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," files for the remained of the program."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file lists all of the files that are ",(0,a.kt)("em",{parentName:"p"},"local")," to a project that Git should not push to GitHub. A ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," always goes in the top level of the project directory, which is also called the project's 'root'. The ",(0,a.kt)("strong",{parentName:"p"},"root")," of a project is the folder that is the parent for all the project files and subfolders. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In order for a ",(0,a.kt)("inlineCode",{parentName:"strong"},".gitignore")," file to work correctly, it ",(0,a.kt)("em",{parentName:"strong"},"must")," be committed ",(0,a.kt)("em",{parentName:"strong"},"before")," we commit (by accident) any code we don't want in our Git history.")),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file now and list a few files and folders in it. When file(s) or folder(s) are listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", then that directs Git to ignore them when you make commits."),(0,a.kt)("div",{class:"filename"},".gitignore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"node_modules/\n.DS_Store // only include this if you are on a Mac\ndist/\n")),(0,a.kt)("p",null,"We add the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dist/")," folders to ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," because these are both automatically generated by npm and webpack, respectively. Since we've only just been introduced to these folders in the last lesson, we'll revisit why we add these folders to the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," when we learn how they are generated. "),(0,a.kt)("p",null,"As previously mentioned, Git will only ignore the files and folders inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," if we commit ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," to our project's Git history ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"before"))," we add those folders/files inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," to our project. "),(0,a.kt)("p",null,"Let's go ahead and make a commit. Set up the repository on your own if you haven't ready. Now we'll make our commit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git add .gitignore\n$ git commit -m "add .gitignore file to project"\n$ git push origin main\n')),(0,a.kt)("p",null,"Note that we didn't do ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add ."),". That's because our project directory has other files already. And if our project already had a ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder when we went to commit out ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", then we'd be adding those files to GitHub along with our ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file. This will cause Git to not be able to ignore those files. "),(0,a.kt)("p",null,'This is like putting up a sign that says "Wet Paint" on a bench ',(0,a.kt)("em",{parentName:"p"},"after")," someone has already sat on the bench by accident. Then we'd have a mess to clean up. GitHub absolutely needs to know what files should be ignored ",(0,a.kt)("em",{parentName:"p"},"before")," they (usually accidentally) get pushed."),(0,a.kt)("p",null,"That's why we need to be diligent about setting up the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," first thing, and also committing ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," without any other file with ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add .gitignore"),". "),(0,a.kt)("p",null,"Once our ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file has been pushed to GitHub, we can make further commits without worrying about accidentally pushing files that are listed in our ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"From now on, you should always include a ",(0,a.kt)("inlineCode",{parentName:"strong"},".gitignore")," file in the top level directory of your projects, not just in this JavaScript course but in future courses as well.")," This goes for C#, Ruby, and React projects, too. Your first commit should generally include your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Once again, make sure to avoid pushing any files that you want to ignore when you make that first commit \u2014 because GitHub won't know they should be ignored yet."),(0,a.kt)("h3",{id:"removing-a-committed-file-that-should-be-ignored"},"Removing a Committed File that Should Be Ignored"),(0,a.kt)("p",null,"If you do accidentally add a file that should be ignored to your repository, you'll need to remove it. You can do so by running ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git rm -r --cached [FILE-NAME]"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"[FILE-NAME]")," is the name of the file that shouldn't be tracked. Git will no longer track the file."),(0,a.kt)("p",null,"However, this won't entirely fix the problem if you are working with sensitive data. We won't be working with that kind of data in this section, but we will do so once we start working with APIs in the next section. Sensitive data often includes a private key that should never be shared with others. (It's similar to a password.) Just running ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git rm -r --cached [FILE-NAME]")," won't fix the issue. While GitHub will stop tracking the file, it won't remove the file from your Git history. That's a big problem \u2014 a hacker could still get that information. "),(0,a.kt)("p",null,"If you find yourself needing to remove a file from a repository's history, see ",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-large-files/removing-files-from-a-repositorys-history"},"Removing Files from a Repository's History")," on GitHub's documentation."),(0,a.kt)("p",null,"In future lessons, we will specify which files and directories shouldn't be tracked. These files should be added to the local ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file for all future projects. "),(0,a.kt)("p",null,"While you could add these files to your ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore_global")," file, it's still important to have the local ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file. If other developers push to the project later, or if you push to it from a different machine, you'll automatically use the local ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file."),(0,a.kt)("h2",{id:"git-best-practices"},"Git Best Practices"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's take another look at our commit above. Instead of using ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add ."),", we specified the name of the file we wanted to commit. In the real world, using ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add .")," is often a bad idea. It's generally better to add files one at a time and push code that's both ready to be committed (in other words, working, not broken code) that's relevant to the commit you're working on."),(0,a.kt)("p",null,"Let's demonstrate why with an example. In the snippet below, we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git status")," to look at an imaginary file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ git status\nOn branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n    modified:   ready-to-commit.js\n  modified:   really-yucky-code.js\n  modified:   most-embarrassing-elementary-school-secrets.md\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,a.kt)("p",null,"Here we have three files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first, ",(0,a.kt)("inlineCode",{parentName:"li"},"ready-to-commit.js"),", is ready to be committed and pushed."),(0,a.kt)("li",{parentName:"ul"},"The second, ",(0,a.kt)("inlineCode",{parentName:"li"},"really-yucky-code.js"),", isn't ready yet and shouldn't be committed."),(0,a.kt)("li",{parentName:"ul"},"The third should ",(0,a.kt)("em",{parentName:"li"},"never")," be pushed to GitHub. You'd never live it down!")),(0,a.kt)("p",null,"Obviously, ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add .")," isn't the answer here. Instead, we should just run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add ready-to-commit.js"),". And if we want to commit multiple files, we could do so by passing in multiple file names like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add file1 file2 file3"),"."),(0,a.kt)("h3",{id:"checking-changes-with--git-diff"},"Checking Changes with ",(0,a.kt)("inlineCode",{parentName:"h3"},"$ git diff")),(0,a.kt)("p",null,"We could also verify all the changes we've made in ",(0,a.kt)("inlineCode",{parentName:"p"},"ready-to-commit.js")," since our last commit by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git diff")," command. If we run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git diff ready-to-commit.js"),", we'll see a list of these changes. It's generally a good idea to do a quick ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff")," before committing files. That way, we can verify we're committing the right code."),(0,a.kt)("p",null,"If we want to be thorough and follow best practices, we should do the following when we commit ",(0,a.kt)("em",{parentName:"p"},"instead")," of using ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add ."),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, get the ",(0,a.kt)("inlineCode",{parentName:"li"},"$ git status"),"."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"$ git diff [FILE-NAME]")," to verify that the changes look correct."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"$ git add [FILE-NAME]")," to select a file to commit. Multiple files can be committed at once ",(0,a.kt)("em",{parentName:"li"},"if")," they are related to the same feature \u2014 but should be added one by one by doing ",(0,a.kt)("inlineCode",{parentName:"li"},"$ git add file1 file2 etc"),"."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"$ git commit")," and add a great commit message.")),(0,a.kt)("p",null,"While it's often convenient to run ",(0,a.kt)("inlineCode",{parentName:"p"},"$ git add ."),", especially for learning projects, we recommend practicing good habits with your git workflow now."))}m.isMDXComponent=!0}}]);