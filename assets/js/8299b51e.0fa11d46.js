"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[72243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(k,a(a({ref:t},u),{},{components:n})):o.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"LinkedIn",id:"linkedin",slug:"linkedin",hide_table_of_contents:!0,sidebar_position:48,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/3_linkedin_classwork.md"},a=void 0,l={unversionedId:"introduction_to_programming/arrays-and-looping/linkedin",id:"introduction_to_programming/arrays-and-looping/linkedin",title:"LinkedIn",description:"LinkedIn is a social network service specifically oriented toward employment and professional networking. It's similar to sites like Facebook, but user profiles feature professional accolades, work histories, resumes, and more employment-related content.",source:"@site/docs/introduction_to_programming/3_arrays-and-looping/3_linkedin_classwork.md",sourceDirName:"introduction_to_programming/3_arrays-and-looping",slug:"/introduction_to_programming/arrays-and-looping/linkedin",permalink:"/introduction_to_programming/arrays-and-looping/linkedin",draft:!1,tags:[],version:"current",sidebarPosition:48,frontMatter:{title:"LinkedIn",id:"linkedin",slug:"linkedin",hide_table_of_contents:!0,sidebar_position:48,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/career-services-full-stack/blob/main/3_linkedin_classwork.md"},sidebar:"introduction_to_programming",previous:{title:"Optional Review: Which Loop Should I Use?",permalink:"/introduction_to_programming/arrays-and-looping/optional_review_which_loop_should_i_use"},next:{title:"Arrays and Looping Independent Project",permalink:"/introduction_to_programming/arrays-and-looping/arrays_and_looping_independent_project"}},s={},p=[{value:"Introduction to LinkedIn",id:"introduction-to-linkedin",level:3},{value:"Creating a LinkedIn Profile",id:"creating-a-linkedin-profile",level:3},{value:"Making Connections and Building your Network",id:"making-connections-and-building-your-network",level:3},{value:"Connect with Classmates and Epicodus Alumni",id:"connect-with-classmates-and-epicodus-alumni",level:4},{value:"Help Recruiters Find You",id:"help-recruiters-find-you",level:4},{value:"Connect with people in your field",id:"connect-with-people-in-your-field",level:4},{value:"Using LinkedIn Regularly",id:"using-linkedin-regularly",level:3},{value:"Post, Share, Like, Comment",id:"post-share-like-comment",level:4},{value:"Recommendations",id:"recommendations",level:4},{value:"Networking Without Letting Your Employer Know",id:"networking-without-letting-your-employer-know",level:3},{value:"Keep Your Connections Private",id:"keep-your-connections-private",level:4},{value:"Online LinkedIn Members Can View Your Profile",id:"online-linkedin-members-can-view-your-profile",level:4},{value:"Hiding Update Activity from Other Users Viewing Your Profile",id:"hiding-update-activity-from-other-users-viewing-your-profile",level:4},{value:"View Other LinkedIn Profiles Anonymously",id:"view-other-linkedin-profiles-anonymously",level:4},{value:"Recommendations for Job Hunting on Work Equipment",id:"recommendations-for-job-hunting-on-work-equipment",level:4},{value:"Additional Resources:",id:"additional-resources",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"LinkedIn is a social network service specifically oriented toward employment and professional networking. It's similar to sites like Facebook, but user profiles feature professional accolades, work histories, resumes, and more employment-related content.\xa0"),(0,r.kt)("h3",{id:"introduction-to-linkedin"},"Introduction to LinkedIn"),(0,r.kt)("p",null,"LinkedIn is not just a platform to chat about careers. It's a great way to find a job. Most technical job applications request your LinkedIn URL right alongside the standard cover letter, resume, and contact information. One of LinkedIn's recent ",(0,r.kt)("a",{parentName:"p",href:"https://economicgraph.linkedin.com/resources/linkedin-workforce-report-january-2019"},"Workforce Reports")," and their ongoing ",(0,r.kt)("a",{parentName:"p",href:"https://news.linkedin.com/about-us#statistics"},"Statistics Page")," even detail that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Over 190 million American workers have LinkedIn profiles. "),(0,r.kt)("li",{parentName:"ul"},"More than 30,000 U.S. companies specifically use it to recruit new hires. "),(0,r.kt)("li",{parentName:"ul"},"30 million total companies are represented on the platform. "),(0,r.kt)("li",{parentName:"ul"},"An estimated 3,000,000 jobs are posted on LinkedIn every month. ")),(0,r.kt)("p",null,"Epicodus' own career services team report many graduates finding work on the platform. We've even seen a student's regular LinkedIn posts get noticed by a friend's manager, resulting in the manager reaching out, interviewing, and hiring that student!"),(0,r.kt)("p",null,"Our internship companies also request to preview student LinkedIn profiles during the matchmaking process. Because this tool is so widely used, we consider it necessary for your upcoming job search. So we'll create our LinkedIn profiles early in class and begin regularly using them throughout the course. This will ensure we have active, well-rounded profiles by the time internship hosts and employers see them."),(0,r.kt)("h3",{id:"creating-a-linkedin-profile"},"Creating a LinkedIn Profile"),(0,r.kt)("p",null,"If you don't already have one, create a free LinkedIn account ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/reg/join"},"here"),". Then use the instructions below to complete your profile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Include a recent, high-quality photo that emphasizes your face.")," It doesn't have to be a professional-quality head shot, but it should be easily recognizable (no sunglasses, make sure your face is clearly visible), professional, and friendly. If you don't have a photo handy, ask a classmate, friend, or family member to take one. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Include a high-quality cover photo.")," This is a great place to show off your personality, accomplishments, and interests.\xa0 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Edit your tagline."),' Taglines carry a lot of weight when it comes to being found by recruiters. Use them to sell your skills! Include keywords that recruiters will be looking for. For example, if you want a recruiter looking for a React developer to find you, use the word "React" in your tagline: "Junior Web Developer | Software Engineer | React and JavaScript Wiz"  ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a custom easy-to-remember URL that includes your first and last name."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write a summary.")," Think of this as a space to showcase who you are. Incorporate relevant keywords so recruiters are more likely to find you. Start with a statement that summarizes your experience. Next, dive into what you're doing now (learning to code) and what relevant skills you bring from previous work, hobbies, and volunteer experience. Finally, write a closing statement that describes what you're excited about working on in the future. If the perfect position fell into your lap tomorrow, what would it be? Your summary should be at least five sentences but don't limit yourself. Include what you think is most important for hiring managers to know about you. Don't be shy about getting lots of the relevant keywords in there.\xa0 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add a Featured section to your page and add link to your GitHub profile as a piece of media.")," You can add this section by clicking ",(0,r.kt)("em",{parentName:"p"},"Add Profile Section"),", selecting ",(0,r.kt)("em",{parentName:"p"},"Recommended")," from the list, and clicking ",(0,r.kt)("em",{parentName:"p"},"Featured"),".You can change the title of the link and write a short blurb about your coding portfolio! If you haven't already, update your GitHub's profile picture to something other than the default. If you have a personal portfolio website or blog (whether now or created later in the program) update this section to include links to those too. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add two or three of your Epicodus projects.")," You can add projects to the ",(0,r.kt)("em",{parentName:"p"},"Projects")," section of LinkedIn. To create this section, click ",(0,r.kt)("em",{parentName:"p"},"Add Profile Section"),", select ",(0,r.kt)("em",{parentName:"p"},"Additional")," from the list, and then click on ",(0,r.kt)("em",{parentName:"p"},"Add Projects"),". Include links to the GitHub repository or live site if possible. Summarize what the projects do and what technologies and programming concepts were used. If you worked on the project with classmates, you can add each other as contributors. (",(0,r.kt)("strong",{parentName:"p"},"Note:")," As you continue developing projects throughout the program, update this section regularly so it always displays the work you're most proud of!) ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List your previous jobs.")," Jobs should be listed under ",(0,r.kt)("em",{parentName:"p"},"Experience"),". Each job should include a short description of what you did at that role. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Be specific and succinct."),' Use concrete numbers and examples such as "Responsible for onboarding and training two dozen new employees in 3 months" rather than vague statements like "Fulfilled management duties beyond expectations." '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Think about the ",(0,r.kt)("em",{parentName:"strong"},"why")," for your descriptions.")," Why does a hiring manager care about this description and what does each point demonstrate about you, your skills, or achievements? "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Include only the most recent jobs.")," You should only include your three or four most recent jobs unless earlier roles are relevant to the types of jobs you'll be applying for after graduation. For non-technical roles, focus on the specific responsibilities that could translate into a technical career."),(0,r.kt)("li",{parentName:"ul"},"Break down past experience descriptions into bullet points. You can easily do this by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"Alt-8")," shortcut. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add your Epicodus experience.")," This should be added to ",(0,r.kt)("em",{parentName:"p"},"Education section"),", not the ",(0,r.kt)("em",{parentName:"p"},"Experience")," section. Write a brief summary of what you're learning and doing at Epicodus. Don't write about what Epicodus is \u2014 write about your experience. For example, past students have written things like: "))),(0,r.kt)("p",null,"\"I'm currently learning how to build web applications with JavaScript, Ruby/Rails, HTML, and CSS. More importantly, I'm learning how to think more like a programmer, write good code, and pick up new languages and technologies.\"\n\"At Epicodus, I've learned how to learn programming languages more than learning any one language for the sake of itself. I've learned how to work towards a programming goal on my own and with others until success happens. I've also learned how quickly I can process a tremendous amount of information that is new and uncomfortable at first, and have it feel comfortable like a worn pair of jeans by the end of a week!\" "),(0,r.kt)("p",null,"Do not copy these examples. Come up with your own that describes your unique experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List the skills you've learned at Epicodus.")," In the ",(0,r.kt)("em",{parentName:"p"},"Skills")," section, list skills and tools you've learned, especially those that are common keywords in job descriptions. Don't list only the names of the courses you've taken so far. Also include each major technology, skill, and concept you practiced in each course. For instance, at this point in the course, depending on your track, you've likely learned things like: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTML "),(0,r.kt)("li",{parentName:"ul"},"CSS "),(0,r.kt)("li",{parentName:"ul"},"Sass "),(0,r.kt)("li",{parentName:"ul"},"UI Design "),(0,r.kt)("li",{parentName:"ul"},"JavaScript "),(0,r.kt)("li",{parentName:"ul"},"jQuery "),(0,r.kt)("li",{parentName:"ul"},"Object-Oriented Programming "),(0,r.kt)("li",{parentName:"ul"},"C# "),(0,r.kt)("li",{parentName:"ul"},"Ruby "),(0,r.kt)("li",{parentName:"ul"},"Sinatra "),(0,r.kt)("li",{parentName:"ul"},".NET "),(0,r.kt)("li",{parentName:"ul"},"SQL "),(0,r.kt)("li",{parentName:"ul"},"Git "),(0,r.kt)("li",{parentName:"ul"},"Test-Driven Development "),(0,r.kt)("li",{parentName:"ul"},"Pair Programming "),(0,r.kt)("li",{parentName:"ul"},"REST "),(0,r.kt)("li",{parentName:"ul"},"Responsive Design "),(0,r.kt)("li",{parentName:"ul"},"Mobile-First Design "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Continue to update the ",(0,r.kt)("em",{parentName:"strong"},"Skills")," section as you learn more throughout the program.")," List non-Epicodus skills that may apply to your future work, too, even non-technical skills. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Include months and years for all dates.")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check your profile in an incognito window once you're done.")," This way, you can see exactly what your LinkedIn page looks like to others (instead of seeing what it looks like just for you)."))),(0,r.kt)("p",null,"For examples of LinkedIn profiles, search Epicodus on LinkedIn. You'll find countless profiles of past graduates. Use their profiles as inspiration or general guidelines but do not copy their content."),(0,r.kt)("p",null,"If you are concerned about creating or updating your LinkedIn profile because your current employer will not support you in job seeking, ",(0,r.kt)("strong",{parentName:"p"},"let your advisor know")," so they can work with you on alternative or more private networking options."),(0,r.kt)("h3",{id:"making-connections-and-building-your-network"},"Making Connections and Building your Network"),(0,r.kt)("h4",{id:"connect-with-classmates-and-epicodus-alumni"},"Connect with Classmates and Epicodus Alumni"),(0,r.kt)("p",null,"Not only will it be helpful to see what your peers are posting, you'll also have a guaranteed way to stay in touch after graduation. You can also find past Epicodus students and connect with them."),(0,r.kt)("h4",{id:"help-recruiters-find-you"},"Help Recruiters Find You"),(0,r.kt)("p",null,"Recruiters often find candidates through connections and endorsements. Add connections with all of your Epicodus classmates and anybody else you know, even if they don't work in tech. The more connections you have, the more likely it is a recruiter will find you."),(0,r.kt)("p",null,"Once you're connected, ask your classmates and friends to endorse you for the skills you've listed on your profile. They can click the ",(0,r.kt)("em",{parentName:"p"},"+")," button next to the skill. Having more endorsements for the skills recruiters are looking for will make it more likely they will find you."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Soft+Skills+&+Career+Prep/HelpRecruitersFindYou.png",alt:"An example of endorsements on LinkedIn so recruiters can find you."})),(0,r.kt)("h4",{id:"connect-with-people-in-your-field"},"Connect with people in your field"),(0,r.kt)("p",null,"A great way to build your network is to connect with people on LinkedIn after meeting them at events or meetups. You can leverage these new connections for opportunities like informational interviews, which can potentially lead to jobs down the line."),(0,r.kt)("p",null,"When you connect with someone after an event, it's best practice to send them a personalized message. When asking for an informational interview, don't go into it expecting a job. This is a chance to build a new relationship in the industry and learn from someone with more experience. Use this as a time to find mentorship, ask for advice, and listen to an insider's perspective of the industry."),(0,r.kt)("p",null,"Here's an example approach: \"It was great meeting you at the event last week. I'd love to buy you coffee and pick your brain about working as a JavaScript senior dev with KatChat. When would you be available?\""),(0,r.kt)("h3",{id:"using-linkedin-regularly"},"Using LinkedIn Regularly"),(0,r.kt)("p",null,"Creating your profile is a great first step. But it's important you also remain fairly active on the platform, especially before your eventual job search. Not sure where to start? Here are some ideas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Follow hashtags on subjects that interest you.")," Anytime someone uses the hashtag you follow, it will appear in your feed. If you really like the post, you can share it yourself or simply like the post. To follow hashtags, start in the search bar on LinkedIn and type the pound key '#' followed by any topic you're interested in. For example: #startups #remoteworkers #javascript")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Soft+Skills+&+Career+Prep/FollowHashtags.png",alt:"This image shows how we can type pound key to follow hashtags."})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Join groups of people that have shared interests.")," Often people post jobs in these groups to focus their candidate search. Find groups by typing a subject in the search bar and wait for a dropdown to appear. You should see the subject ",(0,r.kt)("em",{parentName:"li"},"in Groups")," the third option down.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Soft+Skills+&+Career+Prep/JoinGroups.png",alt:'This image shows a dropdown with the "groups" subject as the third option.'})),(0,r.kt)("h4",{id:"post-share-like-comment"},"Post, Share, Like, Comment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Regularly document your work.")," Next time you make a site you're proud of or tackle an interesting challenge, write a LinkedIn post about it! Make sure you update the ",(0,r.kt)("em",{parentName:"p"},"Projects")," section to include your latest and greatest work examples.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write a blog.")," Longer-form blog posts documenting your experience can communicate your enthusiasm, skills, interest, and personality to future employers. If you don't have a personal blog, you can post on sites like ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/"},"Medium"),". Make sure to share them to your LinkedIn feed! You can even write articles directly on LinkedIn that will automatically be associated with your LinkedIn account and show up on your profile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Find a helpful resource? Others will probably find it helpful too.")," Why not share it on your LinkedIn feed? Make sure to credit the original author."))),(0,r.kt)("h4",{id:"recommendations"},"Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check in with potential references.")," Have you thought about who you'll use as references for a future job? Do your references include managers from past jobs or anyone you're not currently in touch with? Check if they're on LinkedIn and connect with them now. That way you don't have to scramble to find them later.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write recommendations for your peers.")," If you've had great experiences working with fellow students, consider writing recommendations highlighting the technical and interpersonal skills that made them so great to work with. Preview recommendations left for others on LinkedIn (you can search Epicodus to see all kinds of past students) to get an idea of what these typically look like. Please note that Epicodus staff are unable to provide LinkedIn recommendations."))),(0,r.kt)("p",null,"Regardless of how you use LinkedIn, make sure to keep your posts, comments, and interactions positive and professional. Again, your LinkedIn profile acts as a resume and representation of yourself to future employers and coworkers. Put your best foot forward while simultaneously showing off your investment in the industry, eagerness to learn, and interest in technical work."),(0,r.kt)("h3",{id:"networking-without-letting-your-employer-know"},"Networking Without Letting Your Employer Know"),(0,r.kt)("p",null,"Generally, keeping your LinkedIn profile information public is the easiest way to signal to employers and recruiters that you're looking for work. However, you may want to keep your profile more private if you are concerned your current employer will not support you in job seeking. In this case, ",(0,r.kt)("strong",{parentName:"p"},"let your advisor know")," so they can work with you on alternative networking options."),(0,r.kt)("p",null,"If you prefer to keep your profile more private, your general networking strategy should be to entice people in hiring positions to reach out to you to learn more about you."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Follow these steps to make your LinkedIn profile more private and to conceal activities that may indicate you are job seeking.")," If you prefer to keep your profile more public, you can still follow these steps. Just make sure the last step is set to the more public option."),(0,r.kt)("h4",{id:"keep-your-connections-private"},"Keep Your Connections Private"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the dropdown below your avatar in the upper right corner of the screen, click on ",(0,r.kt)("em",{parentName:"p"},"Settings & Privacy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left-hand pane, click on ",(0,r.kt)("em",{parentName:"p"},"Visibility"),", then click on ",(0,r.kt)("em",{parentName:"p"},"Visibility of your profile & network"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Who can see your connections")," and select ",(0,r.kt)("em",{parentName:"p"},"Only you"),"."))),(0,r.kt)("h4",{id:"online-linkedin-members-can-view-your-profile"},"Online LinkedIn Members Can View Your Profile"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("em",{parentName:"p"},"Settings & Privacy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left-hand pane, click on ",(0,r.kt)("em",{parentName:"p"},"Visibility"),", then click on ",(0,r.kt)("em",{parentName:"p"},"Visibility of your profile & network"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Profile visibility off LinkedIn")," and select ",(0,r.kt)("em",{parentName:"p"},"No"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Edit your public profile"),". You can then change the visibility of anything on your public profile in the right-hand pane."))),(0,r.kt)("h4",{id:"hiding-update-activity-from-other-users-viewing-your-profile"},"Hiding Update Activity from Other Users Viewing Your Profile"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("em",{parentName:"p"},"Settings and Privacy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Visibility")," and then ",(0,r.kt)("em",{parentName:"p"},"Visibility of your LinkedIn activity"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Share profile updates with your network")," and then select ",(0,r.kt)("em",{parentName:"p"},"No"),"."))),(0,r.kt)("h4",{id:"view-other-linkedin-profiles-anonymously"},"View Other LinkedIn Profiles Anonymously"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("em",{parentName:"p"},"Settings and Privacy"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Visibility")," and then ",(0,r.kt)("em",{parentName:"p"},"Visibility of your LinkedIn activity"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("em",{parentName:"p"},"Profile viewing options")," and then select ",(0,r.kt)("em",{parentName:"p"},"Private profile characteristics"),"."))),(0,r.kt)("h4",{id:"recommendations-for-job-hunting-on-work-equipment"},"Recommendations for Job Hunting on Work Equipment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use your personal computer for job hunting.")," Your work computer may be configured to notify your employer about the websites you visit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If you use your work machine, use your browser in incognito mode.")," This prevents the web browser from saving your search history. Note that some work computers could still be configured to notify your employer about the websites you visit even in incognito mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Make sure you are logged out of LinkedIn at work.")))),(0,r.kt)("h4",{id:"additional-resources"},"Additional Resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/pulse/how-job-search-linkedin-secret-tana-storani/"},"How to Job Search on LinkedIn in Secret"))))}d.isMDXComponent=!0}}]);