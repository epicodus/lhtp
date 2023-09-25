"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[76636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(o),g=r,d=h["".concat(l,".").concat(g)]||h[g]||m[g]||i;return o?n.createElement(d,a(a({ref:t},u),{},{components:o})):n.createElement(d,a({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},62011:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const i={title:"Intro to Pair Programming",id:"intro_to_pair_programming",slug:"intro_to_pair_programming",hide_table_of_contents:!0,sidebar_position:2,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_1_epicodus_intro_to_pair_programming.md"},a=void 0,s={unversionedId:"introduction_to_programming_part_time_evening/git-html-and-css/intro_to_pair_programming",id:"introduction_to_programming_part_time_evening/git-html-and-css/intro_to_pair_programming",title:"Intro to Pair Programming",description:"As you read this lesson, you and your pair should be together in a voice channel in Discord. You\u2019re both ready to start with pair programming. Read through this lesson together. You may choose to switch reading out loud or read silently and reconvene at the end of the lesson.",source:"@site/docs/introduction_to_programming_part_time_evening/1_git-html-and-css/0_1_epicodus_intro_to_pair_programming.md",sourceDirName:"introduction_to_programming_part_time_evening/1_git-html-and-css",slug:"/introduction_to_programming_part_time_evening/git-html-and-css/intro_to_pair_programming",permalink:"/introduction_to_programming_part_time_evening/git-html-and-css/intro_to_pair_programming",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Intro to Pair Programming",id:"intro_to_pair_programming",slug:"intro_to_pair_programming",hide_table_of_contents:!0,sidebar_position:2,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_1_epicodus_intro_to_pair_programming.md"},sidebar:"introduction_to_programming_part_time_evening",previous:{title:"Dev Team Scrum and Finding a Pair",permalink:"/introduction_to_programming_part_time_evening/git-html-and-css/dev_team_scrum_and_finding_a_pair"},next:{title:"How to Screen Share in Discord",permalink:"/introduction_to_programming_part_time_evening/git-html-and-css/how_to_screen_share_in_discord"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Important terminology in this lesson:",id:"important-terminology-in-this-lesson",level:3},{value:"The Driver and Navigator in Pair Programming",id:"the-driver-and-navigator-in-pair-programming",level:2},{value:"When you are the driver:",id:"when-you-are-the-driver",level:3},{value:"When you are the navigator:",id:"when-you-are-the-navigator",level:3},{value:"Pair Programming Etiquette",id:"pair-programming-etiquette",level:2},{value:"General Good Strategies:",id:"general-good-strategies",level:3},{value:"FAQ",id:"faq",level:2},{value:"Check in with your Pair",id:"check-in-with-your-pair",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As you read this lesson, you and your pair should be together in a voice channel in Discord. You\u2019re both ready to start with pair programming. Read through this lesson together. You may choose to switch reading out loud or read silently and reconvene at the end of the lesson."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This lesson will revisit the description pair programming and further expand on the responsibilities of the ",(0,r.kt)("strong",{parentName:"p"},"driver")," and ",(0,r.kt)("strong",{parentName:"p"},"navigator")," in a ",(0,r.kt)("strong",{parentName:"p"},"pair group"),". Next we\u2019ll explain some general pair programming etiquette. "),(0,r.kt)("p",null,"Before you and your pair move on to the next lesson you will check-in with each other to communicate a plan for pair programming. "),(0,r.kt)("h3",{id:"important-terminology-in-this-lesson"},"Important terminology in this lesson:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pair programming"),(0,r.kt)("li",{parentName:"ul"},"driver"),(0,r.kt)("li",{parentName:"ul"},"navigator"),(0,r.kt)("li",{parentName:"ul"},"pair group")),(0,r.kt)("h2",{id:"the-driver-and-navigator-in-pair-programming"},"The Driver and Navigator in Pair Programming"),(0,r.kt)("p",null,"When pair programming, one person is the ",(0,r.kt)("strong",{parentName:"p"},"driver"),". The ",(0,r.kt)("strong",{parentName:"p"},"driver")," is the only person who controls the keyboard and mouse. The ",(0,r.kt)("strong",{parentName:"p"},"driver")," is writing code and has priority in the ",(0,r.kt)("strong",{parentName:"p"},"pair group")," to try out ideas."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"navigator")," is an observer. Anyone who is not the current ",(0,r.kt)("strong",{parentName:"p"},"driver")," in the pair group is a ",(0,r.kt)("strong",{parentName:"p"},"navigator"),". In a group of 3 that will mean there are two ",(0,r.kt)("strong",{parentName:"p"},"navigators"),". The ",(0,r.kt)("strong",{parentName:"p"},"navigator")," should have their hands off the keyboard and mouse at all times. Even when working remotely when everyone in the pair group has access to their own mouse and keyboard. The role of the ",(0,r.kt)("strong",{parentName:"p"},"navigator")," is to look out for errors, ask questions, take notes, and maybe look up something relevant for the ",(0,r.kt)("strong",{parentName:"p"},"driver")," on request. "),(0,r.kt)("p",null,"To simplify, the main role of the ",(0,r.kt)("strong",{parentName:"p"},"driver")," is to focus on the details while the main role of the ",(0,r.kt)("strong",{parentName:"p"},"navigator")," is to focus on the bigger picture. Pair programming relies on only one person coding and the other person observing. Two people writing coding at the same time in the same file is not pair programming. "),(0,r.kt)("p",null,"Pairs will switch off so that each person gets to ",(0,r.kt)("strong",{parentName:"p"},"drive")," frequently. "),(0,r.kt)("h3",{id:"when-you-are-the-driver"},"When you are the driver:"),(0,r.kt)("p",null,"When you're the one in your pair who is driving, your hands are on the keyboard and you are typing code. Here is how to be a communicative ",(0,r.kt)("strong",{parentName:"p"},"driver"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vocalize what you are thinking and doing."),(0,r.kt)("br",{parentName:"p"}),"\n","It is not always clear to your pair what your intentions are just by looking at your code. Vocalize what you are typing in the moment \u2014 this also gives you practice using coding terminology. If you are more experienced than your pair, make sure they are following what you are doing. Pause for questions and code at their pace of understanding."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Point or highlight code when speaking about it."),(0,r.kt)("br",{parentName:"p"}),"\n","When talking about a piece of code, be sure to point to it or highlight it. You can point if everyone in the group is working in-person. Otherwise, highlight code with your mouse. You can also zoom in or out with",(0,r.kt)("inlineCode",{parentName:"p"}," Command + or -")," for Mac and ",(0,r.kt)("inlineCode",{parentName:"p"},"CTL + or -")," for Windows."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proactively ask for input or opinions."),(0,r.kt)("br",{parentName:"p"}),"\n",'Sometimes it\'s helpful to signal when we want input from others or when we want to leave space for others to talk. You can ask a question such as "what do you think of this approach?" or \u201cany thoughts on what you might do here?\u201d'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be proactive about switching when you are driving."),(0,r.kt)("br",{parentName:"p"}),"\n","It's easy as the driver to lose track of how long you have been coding. It tends to feel more awkward for someone to ask for a turn to drive than for you to offer. Be mindful and give your pair opportunities to drive."),(0,r.kt)("h3",{id:"when-you-are-the-navigator"},"When you are the navigator:"),(0,r.kt)("p",null,"When you\u2019re not the ",(0,r.kt)("strong",{parentName:"p"},"driver"),", it means your hands are off the keyboard. You are observing the ",(0,r.kt)("strong",{parentName:"p"},"driver")," code in addition to looking for typos, asking questions, and keeping notes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do not take over driving without checking in first."),(0,r.kt)("br",{parentName:"p"}),"\n","This is very important. When pairing remotely, both pairs have the ability to simultaneously type but only the ",(0,r.kt)("strong",{parentName:"p"},"driver")," has permission to use the keyboard. While in-person sharing a computer, taking over driving would be the equivalent of taking the keyboard away from your pair. Get permission from your ",(0,r.kt)("strong",{parentName:"p"},"driver")," before typing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The driver's choices and experiments take precedence."),(0,r.kt)("br",{parentName:"p"}),"\n","You may know the answer or have a great idea but if you're not driving then give your pair space to try things out. We often learn better from trial and error. You will get your chance to try out ideas when it is your turn to drive. You are still welcome to ask questions and point out typos."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Avoid researching something in another window without checking in first."),(0,r.kt)("br",{parentName:"p"}),"\n","This one comes up more when working remotely. If you're looking something up then you're not engaged in coding and not listening to your pair. For the sake of learning it is best if everyone in the pair group research together, especially if the driver is stuck and not sure what to do next. It's not helpful for the driver to wait while you research something alone. Invite the driver to research with you."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don\u2019t always decline the opportunity to be the driver."),(0,r.kt)("br",{parentName:"p"}),"\n","Being the driver is challenging. You\u2019re the one controlling the direction of the group and other people are watching while you code. It can be nerve wracking to take over driving, especially if you are not sure what to do. Be kind to the driver and give them a break by taking over driving. Challenge yourself to be outside your comfort zone. Even if your pair is more experienced, everyone should have an equal amount of time driving."),(0,r.kt)("h2",{id:"pair-programming-etiquette"},"Pair Programming Etiquette"),(0,r.kt)("p",null,"When we pair program, especially remotely, we rely more on direct communication. Needless to say, the means in which humans communicate with others is vast and diverse. We all have cultural social norms and biases that guide how we ask questions or communicate information to others. A lot of our communication is done by body language and nonverbal cues that also vary, depending on culture. "),(0,r.kt)("p",null,"The challenge with working remotely is that we lose access to body language and nonverbal cues from others. To make up for this loss, we have to directly communicate our thoughts and intentions verbally. For many people this is incredibly difficult because  direct communication feels rude or presumptuous. Direct communication does sometimes mean asking for clarity at the cost of comfort.  "),(0,r.kt)("p",null,"Be patient and kind with each other as you work together. "),(0,r.kt)("h3",{id:"general-good-strategies"},"General Good Strategies:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Avoid jokes."),(0,r.kt)("br",{parentName:"p"}),"\n","You and your pair don\u2019t really know each other yet. Remember too that Epicodus is a workplace. Especially avoid self deprecating humor or making jokes in response to awkwardness. Self deprecating humor puts onus on your pair to make you feel better which can be emotionally draining for them. Making jokes in response to awkwardness is risky because it can invalidate the situation or other's feelings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Take turns speaking and allow room for silence."),(0,r.kt)("br",{parentName:"p"}),"\n","Turn-taking is a universal method that humans use to communicate with one another. It relies on being aware when it is your turn to speak and allowing space for others to speak."),(0,r.kt)("p",null,"You and your pair may have different social norms regarding communication. Also, since we\u2019re learning, you and your pair will need time to think before speaking. "),(0,r.kt)("p",null,"Allow room for silence. Oftentimes we feel uncomfortable in silence especially if we are with people we don\u2019t know well. However, when pair programming (especially remotely when it is difficult to see body language) we need to be comfortable with silence. Allow your pair(s) time to think and respond."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ask permission to speak."),(0,r.kt)("br",{parentName:"p"}),"\n","It can be helpful and polite to ask to speak before doing so, especially if you are not sure what your pair is thinking or doing. This helps to insure you are not accidentally interrupting anyone; even during periods of silence. Ask such questions like \u201cAre you open to suggestions?\u201d or \u201cMay I say something?\u201d or \u201cWhen would be a good moment for me to ask a question?\u201d Give your pair an opportunity first to say what's on their mind or to let you know that they need more time to think. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recognize indirect communication"),(0,r.kt)("br",{parentName:"p"}),"\n","Sometimes direct communication makes us feel uncomfortable because we don\u2019t want to be rude. In these moments we may rely on indirect ways to ask for what we want. Indirect communication generally avoids answering with hard \u201cyes\u201d or \u201cno\u201d. "),(0,r.kt)("p",null,"For example, someone in the pair group might say \u201cCoding this part looks really fun!\u201d For someone who communicates directly, this doesn\u2019t sound like a request to be the ",(0,r.kt)("strong",{parentName:"p"},"driver.")," This person may not be comfortable or not used to asking directly, \u201cThis part looks really fun to code. Can I drive?\u201d "),(0,r.kt)("p",null,"If you tend to be a naturally direct communicator, recognizing when someone might be communicating indirectly will be challenging. The important thing right now is to recognize that indirect communication is not wrong and it's not in any way a sign of timidness. Many languages in the world have an indirect communication style. Even in western culture, women are more socialized to speak indirectly more so than men."),(0,r.kt)("p",null,"When working remotely:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Turn off your microphone when you are not speaking.")," Some ways to do that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Discord's keyboard shortcut to mute: ",(0,r.kt)("inlineCode",{parentName:"li"},"control + shift + m"),". Though this is easier for pairs who are not driving."),(0,r.kt)("li",{parentName:"ul"},"Discord's push to talk option. You might find this a better option for you if you are driving. Push to talk means you are automatically silenced unless you push a button. You can follow the instructions provided by Discord if you're interested in this option.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It's okay to ask someone to silence themselves."),(0,r.kt)("br",{parentName:"p"}),"\n","Sometimes we forget that our mic is on. Oops! It's generally considered polite to let someone know that their mic is on because it protects them from accidentally saying something they didn\u2019t want others to hear. Kindly let your pair know their mic is on if extra noise is coming in through their mic while not talking."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clarify if someone is trying to speak."),(0,r.kt)("br",{parentName:"p"}),"\n","Sometimes we forget to unmute ourselves when we're talking. If you suspect that might be the case during a particularly long stretch of silence from your pair, it's okay to say something like: \"If you are talking, I cannot hear you.\" \\"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Turn on your camera so others can see you."),(0,r.kt)("br",{parentName:"p"}),"\n","This might not be feasible for everyone though. Turning on your camera takes up a lot of internet bandwidth so don\u2019t keep your camera on if it is slowing down your connection. "),(0,r.kt)("p",null,"If you can have your camera on while working, there are a number of advantages to this approach \u2014 it's easier to see and respond to your pair and there's more opportunity to empathize and get to know each other. Video calls also help encourage accountability."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q"),": \u201c",(0,r.kt)("em",{parentName:"p"},"What if the driver is doing something I know won\u2019t work or is wrong?\u201d"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"A"),": Let the driver try it anyway. Who knows, you might learn something new. When learning something new it is better to see the failed results of an attempt than to always be told what to do. Give the driver space to try even if you think they will fail."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q"),": ",(0,r.kt)("em",{parentName:"p"},"\u201cWhat if I am the driver and I don\u2019t know what to do?\u201d"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"A"),": That's okay and it is important to communicate that with your pair. Being a developer means being comfortable with saying \u201cI don\u2019t know but I can find out.\u201d Perhaps you and your pair could revisit a previous lesson that might help or look something up together? Do your best to verbalize what you don\u2019t understand."),(0,r.kt)("h2",{id:"check-in-with-your-pair"},"Check in with your Pair"),(0,r.kt)("p",null,"Every time you start a class session, and especially when working with a new person, you should both talk to establish an agreed upon set of expectations when pair programming. Here are some questions to discuss to get started:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How comfortable are you with the material?"),(0,r.kt)("br",{parentName:"li"}),"We all need to be honest if we are unfamiliar with something or don\u2019t understand the material. Remember that having a fixed mindset, counter to having a growth mindset, is preoccupied with appearing knowledge to avoid looking foolish. Whereas a person with a growth mindset is not embarrassed by not knowing. \\")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What will decide when it is time to switch driver and navigator roles?")," Some ideas include:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Switching after a certain amount of time has passed. Typically 20 to 30 minutes."),(0,r.kt)("li",{parentName:"ul"},"Split the class session in half (or thirds for three people in a pair group) and be the driver during your half."),(0,r.kt)("li",{parentName:"ul"},"After a certain number of lessons.  ")),(0,r.kt)("p",{parentName:"li"},"There are no hard rules for when to switch off in pair programming. The important thing is to just have an agreed upon plan for when it happens."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"How will group reading be done?")," You may have already decided this but some ideas include:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Taking turns reading out loud. Also known as \u201cpopcorn reading.\u201d This is a very effective strategy because it forces you to practice verbalizing coding terminology. When you are not the one reading you can take notes for yourself or write down questions for later."),(0,r.kt)("li",{parentName:"ul"},"Read silently but reconvene at scheduled check-in points. This could mean checking in at the end of a lesson or every section in a lesson.")))))}m.isMDXComponent=!0}}]);