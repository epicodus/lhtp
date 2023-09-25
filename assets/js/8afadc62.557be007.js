"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[26935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"5. Further Exploration: Aliases",id:"further_exploration_aliases",slug:"further_exploration_aliases",hide_table_of_contents:!0,sidebar_position:31,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/3e_using_aliases.md"},r=void 0,l={unversionedId:"intermediate_javascript_classic/object-oriented-javascript/further_exploration_aliases",id:"intermediate_javascript_classic/object-oriented-javascript/further_exploration_aliases",title:"5. Further Exploration: Aliases",description:"Sometimes we'll need to use the command line for the same command over and over again. This can get annoying, especially when we are typing in a very long command. While we can't do away with typing altogether, we can make our lives easier by using aliases. An alias is simply a shortcut, allowing us to reference a longer command via a short command of our choosing.",source:"@site/docs/intermediate_javascript_classic/3_object-oriented-javascript/3e_using_aliases.md",sourceDirName:"intermediate_javascript_classic/3_object-oriented-javascript",slug:"/intermediate_javascript_classic/object-oriented-javascript/further_exploration_aliases",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/further_exploration_aliases",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"5. Further Exploration: Aliases",id:"further_exploration_aliases",slug:"further_exploration_aliases",hide_table_of_contents:!0,sidebar_position:31,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/3_object-oriented-javascript/3e_using_aliases.md"},sidebar:"intermediate_javascript_classic",previous:{title:"4. Further Exploration: Local Storage",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/further_exploration_local_storage"},next:{title:"1. Whiteboard Practice: JavaScript Objects",permalink:"/lhtp/intermediate_javascript_classic/object-oriented-javascript/whiteboard_practice_javascript_objects"}},s={},p=[{value:"Creating an Alias",id:"creating-an-alias",level:2},{value:"Using bash Functions as Shortcuts",id:"using-bash-functions-as-shortcuts",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes we'll need to use the command line for the same command over and over again. This can get annoying, especially when we are typing in a very long command. While we can't do away with typing altogether, we can make our lives easier by using ",(0,i.kt)("strong",{parentName:"p"},"aliases"),". An alias is simply a shortcut, allowing us to reference a longer command via a short command of our choosing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You aren't expected to have or use aliases for an independent project but it can make your development experience more pleasant \u2014 and some students will encounter recommended aliases for certain commands in future lessons."),(0,i.kt)("h2",{id:"creating-an-alias"},"Creating an Alias"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's say, for instance, we regularly want to check the size of every file in a directory. We can do this in the shell but it's a little unwieldy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ du -sh * | sort -nr\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$")," is the symbol for the command prompt, and indicates that we're  inputting this command into the command line."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"du")," is short for disk usage. ",(0,i.kt)("inlineCode",{parentName:"p"},"-sh")," is short for human-readable summary while the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," means all. So the part before the pipe ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," means to display the disk usage of all the files in the directory where we run the above command."),(0,i.kt)("p",null,"The part after ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"sort"),", which means the list of files should be sorted. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-nr")," flag indicates that the files should be listed in descending order by their size."),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," is a pipe between the two that ",(0,i.kt)("em",{parentName:"p"},"chains")," the commands together \u2014 the same as when we chain functions together in a language like JavaScript."),(0,i.kt)("p",null,"In short, the command above lists the disk usage of all files in a directory in descending order."),(0,i.kt)("p",null,"Here's an example of what ",(0,i.kt)("inlineCode",{parentName:"p"},"du -sh * | sort -nr")," outputs in my Address Book project directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"4.0K    js\n4.0K    index.html\n1.0K    css\n0       README.md\n")),(0,i.kt)("p",null,"Take note that if you try running this command in your own Address Book directory, your file sizes may be different."),(0,i.kt)("p",null,"This is a pretty useful command, especially if you want to keep an eye on which files are taking up a lot of space. But remembering the ",(0,i.kt)("inlineCode",{parentName:"p"},"du -sh * | sort -nr")," command is pretty tough \u2014 and not too much fun to type, either."),(0,i.kt)("p",null,"Wouldn't it be nice if we could just type ",(0,i.kt)("inlineCode",{parentName:"p"},"ls_size")," instead? It's easy to remember and easy to type. (And you can customize it however you like to make it more convenient for your personal environment.)"),(0,i.kt)("p",null,"That's exactly what an alias does \u2014 and many developers use them to make their command line experience better. Here's how we'd create an ",(0,i.kt)("inlineCode",{parentName:"p"},"ls_size")," alias."),(0,i.kt)("p",null,"First, we need to open up the configuration file for our shell. If you are using bash, you'll need to type in the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ code ~/.bash_profile\n")),(0,i.kt)("p",null,"This will open the bash configuration file in the root directory of your machine."),(0,i.kt)("p",null,"If you're using zsh, then you'll type in the following command instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ code ~/.zshrc\n")),(0,i.kt)("p",null,"This will open the zsh configuration file in the root directory of your machine."),(0,i.kt)("p",null,"If you aren't sure which shell you're using, you should be able to run the following in the terminal to check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ echo $SHELL\n")),(0,i.kt)("p",null,"Once you have the configuration file for your shell open, it's time to add an alias. We can do so with the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," keyword:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Put this in your configuration file. This will likely be either .bash_profile or .zshrc.\n\nalias ls_size="du -sh * | sort -nr"\n')),(0,i.kt)("p",null,"As we can see, the structure of the alias includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias")," keyword and the name of the alias (",(0,i.kt)("inlineCode",{parentName:"p"},"ls_size"),"). We then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," to set the alias equal to some command (which should be enclosed in quotations). In this case, that command is the following (with the quotes included): ",(0,i.kt)("inlineCode",{parentName:"p"},'"du -sh * | sort -nr"')),(0,i.kt)("p",null,"If you have a terminal window open, your new alias won't work just yet. Whenever we add an alias or ",(0,i.kt)("em",{parentName:"p"},"any")," change to our shell configuration, we need to refresh the terminal window. There are two ways to do this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"source ~/.zshrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile")," (depending on which shell you are using). This tells the terminal window to use the updated shell configuration file as its source, not the outdated one.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alternatively, you can close out of all terminal windows and reopen the terminal."))),(0,i.kt)("p",null,"Once you've done that, you'll be able to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ls_size")," command in your terminal."),(0,i.kt)("p",null,"At this point, you should start thinking about which commands you might want to alias. Are there any commands that you're using a lot and that you'd like to shorten? They might be good candidates for aliasing."),(0,i.kt)("p",null,"However, there's a very important and big gotcha that you need to remember when you create your own aliases. ",(0,i.kt)("strong",{parentName:"p"},"If you name an alias the same name as an existing shell command, the alias will override the existing command.")," That's not always a bad thing. For instance, if you want the ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command not just to list all files in a directory but do some extra work (such as colorizing the output), and you ",(0,i.kt)("em",{parentName:"p"},"always")," want this to happen, you might alias it."),(0,i.kt)("p",null,"But here's an example of something you ",(0,i.kt)("em",{parentName:"p"},"should not")," do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Don't add this to your shell configuration! It will override the ls command.\n\nalias ls=\"echo 'hi!'\"\n")),(0,i.kt)("p",null,"If we were to add this alias, whenever we type in ",(0,i.kt)("inlineCode",{parentName:"p"},"ls"),", our terminal will just output ",(0,i.kt)("inlineCode",{parentName:"p"},"hi!"),". We pretty much just got rid of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command on our machine. "),(0,i.kt)("p",null,"An easy way around this gotcha is to try typing the name of your alias in the terminal (or looking it up first). If we wanted to check if there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"hi")," command, for instance, we could type ",(0,i.kt)("inlineCode",{parentName:"p"},"hi")," in the terminal and we'd get a message like this (for bash): ",(0,i.kt)("inlineCode",{parentName:"p"},"-bash: hi: command not found"),". That means the command doesn't exist and it's safe to use ",(0,i.kt)("inlineCode",{parentName:"p"},"hi")," as an alias."),(0,i.kt)("h3",{id:"using-bash-functions-as-shortcuts"},"Using bash Functions as Shortcuts"),(0,i.kt)("p",null,"Let's say we want to run a bunch of commands in the terminal. We often run these commands together and it's a hassle to type them all in. We can write a simple bash function to run the commands for us. (Most bash functionality is compatible with zsh.)"),(0,i.kt)("p",null,"Here's an example that will create a new directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into that directory, and then create a ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This would go in your configuration file \u2014 .bash_profile or .zshrc. However, this is just an example. You can try it out yourself and then remove it from your configuration if you like.\n\nmake_move ()\n{\n  mkdir $1\n  cd $1\n  touch README.md\n}\n")),(0,i.kt)("p",null,"This function is called ",(0,i.kt)("inlineCode",{parentName:"p"},"make_move"),". When we call it, it will ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir $1"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"$1")," is the first argument passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"make_move"),". For instance, if we were to call ",(0,i.kt)("inlineCode",{parentName:"p"},"make_move hello")," in the command line, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"$1")," would be ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),", which means this function would make a new directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),". It would then ",(0,i.kt)("inlineCode",{parentName:"p"},"cd hello")," (due to ",(0,i.kt)("inlineCode",{parentName:"p"},"cd $1"),") and finally it would add a ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," directory (",(0,i.kt)("inlineCode",{parentName:"p"},"touch README.md"),")."),(0,i.kt)("p",null,"As you might guess, ",(0,i.kt)("inlineCode",{parentName:"p"},"$2")," represents the second argument passed into a bash function, ",(0,i.kt)("inlineCode",{parentName:"p"},"$3")," represents the third argument, and so on. That makes it easy to write bash functions that can handle multiple arguments."),(0,i.kt)("p",null,"The example above is arbitrary and not particularly helpful so we don't recommend that you add this specific function to your configuration file. However, the example should give you a good sense of how to customize bash functions to make your command line experience more convenient."),(0,i.kt)("p",null,"You aren't expected to add aliases to your personal environment while you are a student at Epicodus. However, to improve your personal experience, you might find it helpful to think about any pain points you're experiencing with the terminal and then determine whether aliases might be helpful. Also, you may be encouraged to use specific aliases in future lessons to make your development experience easier."))}d.isMDXComponent=!0}}]);