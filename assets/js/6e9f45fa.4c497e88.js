"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[37871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={title:"9. Creating and Using a Git PAT",id:"creating_and_using_a_git_pat",slug:"creating_and_using_a_git_pat",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/pre-work-full-stack/blob/main/4_getting-started-with-intro-to-programming/0g_creating_and_using_a_pat.md"},i=void 0,s={unversionedId:"prework/getting-started-with-intro-to-programming/creating_and_using_a_git_pat",id:"prework/getting-started-with-intro-to-programming/creating_and_using_a_git_pat",title:"9. Creating and Using a Git PAT",description:"While you are a student at Epicodus, you will be using the terminal to push and pull code from GitHub repositories. A repository is just a place where a codebase is stored. Generally, we will be working with new repositories every class session, but sometimes we'll use the same repository for longer projects. Enterprise companies generally have repositories that are used for long-term projects. That means in your future career, you'll likely be focused on just a handful of repositories that are used regularly.",source:"@site/docs/prework/4_getting-started-with-intro-to-programming/0g_creating_and_using_a_pat.md",sourceDirName:"prework/4_getting-started-with-intro-to-programming",slug:"/prework/getting-started-with-intro-to-programming/creating_and_using_a_git_pat",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/creating_and_using_a_git_pat",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"9. Creating and Using a Git PAT",id:"creating_and_using_a_git_pat",slug:"creating_and_using_a_git_pat",hide_table_of_contents:!0,sidebar_position:9,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/pre-work-full-stack/blob/main/4_getting-started-with-intro-to-programming/0g_creating_and_using_a_pat.md"},sidebar:"prework",previous:{title:"8. Git Configurations",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/git_configurations"},next:{title:"10. Preparing for the First Week",permalink:"/lhtp/prework/getting-started-with-intro-to-programming/preparing_for_the_first_week"}},l={},u=[{value:"Verifying Your Email in GitHub",id:"verifying-your-email-in-github",level:2},{value:"Creating a PAT",id:"creating-a-pat",level:2},{value:"Using a PAT",id:"using-a-pat",level:2},{value:"Reusing a PAT",id:"reusing-a-pat",level:2},{value:"MacOS Users \u2014 Managing PATs with Keychain",id:"macos-users--managing-pats-with-keychain",level:3},{value:"Windows Users \u2014 Managing PATs with Window&#39;s Credential Manager",id:"windows-users--managing-pats-with-windows-credential-manager",level:3},{value:"Using PATs on Shared Computers",id:"using-pats-on-shared-computers",level:3}],p={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While you are a student at Epicodus, you will be using the terminal to push and pull code from GitHub repositories. A repository is just a place where a codebase is stored. Generally, we will be working with new repositories every class session, but sometimes we'll use the same repository for longer projects. Enterprise companies generally have repositories that are used for long-term projects. That means in your future career, you'll likely be focused on just a handful of repositories that are used regularly."),(0,n.kt)("p",null,"When we need to grab code from a repository, we can ",(0,n.kt)("em",{parentName:"p"},"pull")," it to our local machines using the command line. When we make changes to code on our local machines, we can ",(0,n.kt)("em",{parentName:"p"},"push")," the updated code to a repository. However, in order to push and pull code, GitHub needs to verify that we should have access to the repositories. This process is called ",(0,n.kt)("strong",{parentName:"p"},"authentication"),". We use authentication all the time when we are working on computers. For example, when you log in to your email with a username and password, your email provider will authenticate your credentials before giving you access."),(0,n.kt)("p",null,"To access repositories in GitHub via the command line, we need to use a ",(0,n.kt)("strong",{parentName:"p"},"personal access token"),", which is also called a PAT for short. A PAT is a bit like a password. The difference is that GitHub will generate it for you. Another key difference is that it's easy to delete and create new PATs in GitHub if you need to. This is different from how we generally use a password. With a password, we might update it from time to time (hopefully), but we don't delete and replace it."),(0,n.kt)("p",null,"Let's go through the steps to generate and use a PAT. You will be using PATs every day while you are a student at Epicodus, so it's really important that you know how to do it. If you are reviewing this lesson before starting at Epicodus, you should follow the steps below to learn how to use a PAT, but you won't be expected to actually use it until your first day of Epicodus when you do the following lesson: ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories"},"Practice: GitHub Remote Repositories"),"."),(0,n.kt)("h2",{id:"verifying-your-email-in-github"},(0,n.kt)("a",{parentName:"h2",href:"#verifying-your-email-in-github"},"Verifying Your Email in GitHub")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"To generate a PAT in GitHub, the email you're using for GitHub needs to be verified. You may have already done this when you set up your account. To check, click on the icon in the upper right corner of GitHub (the icon is your avatar and has a little downward facing arrow to its right, click on ",(0,n.kt)("em",{parentName:"p"},"Settings")," from the dropdown menu, and then click on ",(0,n.kt)("em",{parentName:"p"},"Email")," in the left-hand menu of the page you are directed to."),(0,n.kt)("p",null,"If your email is ",(0,n.kt)("strong",{parentName:"p"},"not")," verified, there will be a bullet point beneath the email that says ",(0,n.kt)("em",{parentName:"p"},"Unverified")," with a link to ",(0,n.kt)("em",{parentName:"p"},"Resend verification email"),". Click on that link, check your personal email, and then click on the link in your email to verify. For more information on verifying email, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address"},"Verifying Your Email Address"),"."),(0,n.kt)("p",null,"If your email is verified, you won't see a bullet point specifying this. Your email is already verified and you are ready to create a PAT."),(0,n.kt)("h2",{id:"creating-a-pat"},(0,n.kt)("a",{parentName:"h2",href:"#creating-a-pat"},"Creating a PAT")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In the left-hand menu of your GitHub settings, click on ",(0,n.kt)("em",{parentName:"p"},"Developer Settings"),". This will likely be at the bottom of the menu. "),(0,n.kt)("p",null,"You'll be directed to a new page and a new left-hand menu will come up that looks like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/PAT+Lesson/pat-menu.png",alt:"left-hand menu includes three options. The bottom left item is _Personal access tokens_."})),(0,n.kt)("p",null,"Click on ",(0,n.kt)("em",{parentName:"p"},"Personal access tokens"),' to expand a submenu with two options: "Fine-grained tokens" and "Tokens (classic)". From this submenu, select "Tokens (classic)", which will take you to a new page with some options that looks like this:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/PAT+Lesson/create-pat-button.png",alt:"There are two buttons, one for generating a new token and the other for revoking all tokens."})),(0,n.kt)("p",null,"When you need to create or delete a personal access token, this is where you'll do it. We'll always use classic PAT tokens, though you are welcome to experiment with ",(0,n.kt)("a",{parentName:"p",href:"https://github.blog/changelog/2022-10-18-introducing-fine-grained-personal-access-tokens/"},"fine-grained tokens")," on your own."),(0,n.kt)("p",null,"Take note of the two buttons in the upper right corner of the screen. The button on the left is ",(0,n.kt)("em",{parentName:"p"},"Generate new token")," while the button on the right is ",(0,n.kt)("em",{parentName:"p"},"Revoke all"),". You will likely only want to ",(0,n.kt)("em",{parentName:"p"},"Revoke all")," personal access tokens (which will delete all PATs) if you're worried others may have gained access to one or more of your PATs."),(0,n.kt)("p",null,"Click on ",(0,n.kt)("em",{parentName:"p"},"Generate new token")," and we'll see a new page with a form and many options to select from:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/PAT+Lesson/GH_PAT_creation.png",alt:"This image shows the new personal access token menu. The _repo_ checkbox is clicked."})),(0,n.kt)("p",null,"First, add a ",(0,n.kt)("em",{parentName:"p"},"Note")," to describe what the token is for. In the photo above, we put ",(0,n.kt)("em",{parentName:"p"},"Epicodus")," in as a note. You could also name one something like ",(0,n.kt)("em",{parentName:"p"},"personal computer")," to denote that it's only being used on your personal machine and doesn't need to be deleted. On the other hand, if you were planning on working on a shared computer for the day (such as a machine at Epicodus), you might generate a different one called ",(0,n.kt)("em",{parentName:"p"},"shared machine"),". You could then delete that PAT at the end of the day when you are done using it so no one else can potentially access your GitHub credentials."),(0,n.kt)("p",null,"You also have the option to set an expiration date for your PAT, including selecting from pre-filled options or creating a custom expiration date. We strongly recommend to students working in person at Epicodus to set their PATs to expire by the end of the day."),(0,n.kt)("p",null,"Finally take note that there are a lot of options in terms of what kind of access your PAT should have. Generally, you will only need basic repo access. You can click on the ",(0,n.kt)("em",{parentName:"p"},"repo")," checkbox to add this. If you don't click on the ",(0,n.kt)("em",{parentName:"p"},"repo")," checkbox, you won't be able to have the necessary privileges to access, push, and pull all of your repositories."),(0,n.kt)("p",null,"Once you are finished, scroll to the bottom of the page and click on the ",(0,n.kt)("em",{parentName:"p"},"Generate token")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/PAT+Lesson/generated-token.png",alt:"A token is generated. You need to copy the string of characters to reuse it."})),(0,n.kt)("p",null,"As you can see from the example above, there's a notice: ",(0,n.kt)("em",{parentName:"p"},"Make sure to copy your new personal access token now. You won't be able to see it again!")," If you navigate away from this page without copying it, you won't be able to access the characters that are specific to this PAT. Of course, if that happens, it's no big deal. Delete the PAT by clicking the ",(0,n.kt)("em",{parentName:"p"},"Delete")," button just to the right of the PAT. Then create a new one."),(0,n.kt)("p",null,"You might be wondering why a secure PAT was shared in the image above. Well, it was deleted directly after being created for this example. This is one of those advantages over using a password. It's very easy to get rid of tokens."),(0,n.kt)("p",null,"If you don't need to use a PAT yet (because it's not your first day of Epicodus), there's no need to copy this yet. You can refer back to this lesson when you get to ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories"},"Practice: GitHub Remote Repositories")," on your first day of class."),(0,n.kt)("h2",{id:"using-a-pat"},(0,n.kt)("a",{parentName:"h2",href:"#using-a-pat"},"Using a PAT")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories"},"Practice: GitHub Remote Repositories"),", you'll push code to a remote repository (in your GitHub account) for the first time."),(0,n.kt)("p",null,"When you push your code (or pull code from GitHub), you will be prompted to enter a username and password. Enter your GitHub username and then enter the string of characters associated with the PAT (in the example above, the string of characters is ",(0,n.kt)("inlineCode",{parentName:"p"},"f8bfdfd5bf51046ea51eb0c4c00c95a563bdbdd8"),"). Password inputs in the command line are not printed to the command line \u2014 so, trust that you are still typing even though nothing is being displayed. And remember, you can always add a new PAT if you don't have access to the string of characters anymore."),(0,n.kt)("p",null,"Once you've entered your credentials (username and PAT), you will be authenticated and you'll be able to push and pull code as needed."),(0,n.kt)("h2",{id:"reusing-a-pat"},(0,n.kt)("a",{parentName:"h2",href:"#reusing-a-pat"},"Reusing a PAT")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"While you're a student at Epicodus, you'll be pushing and pulling code very regularly \u2014 sometimes as much as dozens of times per day. As you might imagine, it would be very frustrating to have to copy and paste the string of characters associated with a PAT in every time you want to push or pull code. Fortunately, it's easy to store your credentials on your local machine."),(0,n.kt)("h3",{id:"macos-users--managing-pats-with-keychain"},(0,n.kt)("a",{parentName:"h3",href:"#macos-users-managing-pats-with-keychain"},"MacOS Users \u2014 Managing PATs with Keychain")),(0,n.kt)("p",null,"If you use a Mac, you can store the PAT you're using in Keychain Access. For Macs, Keychain Access is a place where you can store all of your passwords. It's really great for personal machines, though you need to be careful about using it on shared machines as you might inadvertently expose sensitive passwords to other users. Your machine may already be set up to use Keychain Access, particularly if you used ",(0,n.kt)("inlineCode",{parentName:"p"},"$ brew install git")," to install Git on your machine. Type this command in the terminal to find out:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git credential-osxkeychain\n")),(0,n.kt)("p",null,"If it returns the following, you're ready to go:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: git credential-osxkeychain <get|store|erase>\n")),(0,n.kt)("p",null,"If it's not installed yet, you'll get a message related to ",(0,n.kt)("inlineCode",{parentName:"p"},"xcode-select")," requesting that you install it. (",(0,n.kt)("inlineCode",{parentName:"p"},"xcode")," is a development environment for Apple machines.) Follow the instructions to install it."),(0,n.kt)("p",null,"Now update your Git configuration to tell Git to use the credentials that will be stored in the Keychain:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git config --global credential.helper osxkeychain\n")),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"git credential-osxkeychain")," is installed, the first time you enter your GitHub credentials into the command line, it will automatically be stored there."),(0,n.kt)("p",null,"You can verify this by doing a spotlight search (the magnifying glass in the upper right corner) for ",(0,n.kt)("em",{parentName:"p"},"keychain"),". Open ",(0,n.kt)("em",{parentName:"p"},"Keychain Access")," and do a search for ",(0,n.kt)("em",{parentName:"p"},"github.com"),". You should see that credentials have been stored. If you're on a shared computer, at the end of the day you should delete the PAT. You can also delete the credentials from ",(0,n.kt)("em",{parentName:"p"},"Keychain Access")," \u2014 though the nice thing about deleting PATs is that once they're gone, you can forget about where they were used. They can't be used again \u2014 unlike a password that's been exposed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To update your GitHub credentials on the MacOS Keychain,")," we suggest reading through GitHub's documentation that covers this topic well: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/getting-started-with-git/updating-credentials-from-the-macos-keychain"},"Updating credentials from the macOS Keychain"),"."),(0,n.kt)("h3",{id:"windows-users--managing-pats-with-windows-credential-manager"},(0,n.kt)("a",{parentName:"h3",href:"#windows-users-managing-pats-with-windows-credential-manager"},"Windows Users \u2014 Managing PATs with Window's Credential Manager")),(0,n.kt)("p",null,"When you installed Git Bash in ",(0,n.kt)("a",{parentName:"p",href:"https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/introduction-to-the-command-line"},"Introduction to the Command Line"),", you were prompted to install ",(0,n.kt)("em",{parentName:"p"},"Git Credential Manager"),". The first time you push or pull a repo from your GitHub account, Git Bash will ask you to log in by opening GitHub in the browser. Then you'll be prompted to give permission to Git Credential Manager to store your credentials. As long as you are on your personal computer and not a shared computer, you should do so. Alternatively, if you are on a shared machine, you'll be given the option to use a PAT instead."),(0,n.kt)("p",null,"If you allow Git Credential Manager to store your credentials, the next time you push or pull, you won't need to worry about entering your credentials and you won't be prompted to log into GitHub."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To edit or remove the PAT through the Window's Credential Manager"),", follow these steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("em",{parentName:"li"},"Control Panel"),"."),(0,n.kt)("li",{parentName:"ul"},"Search for and open ",(0,n.kt)("em",{parentName:"li"},"Credential Manager"),"."),(0,n.kt)("li",{parentName:"ul"},"Select to view the ",(0,n.kt)("em",{parentName:"li"},"Windows Credentials")," tab."),(0,n.kt)("li",{parentName:"ul"},"Select the credential entry titled ",(0,n.kt)("inlineCode",{parentName:"li"},"git:https://github.com")," to expand and view details, including options for editing and removing the credential.")),(0,n.kt)("p",null,"If you delete your PAT in the Credential Manager, next time you try to push to GitHub, you'll be prompted with this dialogue box to enter your PAT or sign into GitHub:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/prework/PAT+Lesson/git_credentials__PAT_signin_PC_windows_users.png",alt:"Image of Git Credential Manager dialogue."})),(0,n.kt)("p",null,"If you are not prompted with the dialogue box after you delete your PAT (on GitHub or through the Credential Manager), and after you've tried to push your changes to a remote repo, try pushing one more time. Sometimes it takes Git a while to see that a change in credentials has been made. If you are still not prompted with a dialogue box after you've tried pushing your changes multiple times, reach out to your instructor for help. "),(0,n.kt)("p",null,"If for some reason you aren't using Git Bash, you can install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Git-Credential-Manager-Core/releases/tag/v2.0.318-beta"},"Git-Credential-Manager-Core")," separately. ",(0,n.kt)("strong",{parentName:"p"},"Do not install this if you are using Git Bash.")," You should read the section on Windows installation ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Git-Credential-Manager-Core"},"here")," if you are going this route."),(0,n.kt)("h3",{id:"using-pats-on-shared-computers"},(0,n.kt)("a",{parentName:"h3",href:"#using-pats-on-shared-computers"},"Using PATs on Shared Computers")),(0,n.kt)("p",null,"If you are attending Epicodus in person, you'll be pairing with others using public Epicodus machines every day. Epicodus uses Mac machines, which by default adds git credentials to Keychain Access. We've disabled this feature, which means you'll manually need to enter your PAT when you make a commit (such as copying and pasting from a clipboard)."),(0,n.kt)("p",null,"If for some reason you are not prompted to enter your credentials on a shared machine, whether at Epicodus or elsewhere, that means your credentials are being stored on the machine. You should make sure to delete the PAT you used at the end of your session. Even if the credentials associated with that PAT are stored in a shared machine, the PAT will no longer be usable and your GitHub account will be secure."))}c.isMDXComponent=!0}}]);