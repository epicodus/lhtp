---
title: 'Bootstrap: Navigating Documentation'
id: bootstrap-navigating-documentation
slug: bootstrap-navigating-documentation
hide_table_of_contents: true
sidebar_position: 39
day: wednesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4i_bootstrap_navigating_documentation.md
---

Bootstrap is a _huge_ framework. If you've taken a look at the un-minified `bootstrap.css` stylesheet, you'll see that it has thousands of lines of CSS. There's no reasonable way we could address every Bootstrap element and feature in the LearnHowToProgram.com curriculum. But that's also not a goal for anything we teach in our curriculum. 

One goal we have is for you to finish the program with a basic knowledge of coding concepts, like CSS and using frameworks in your projects. Another goal is for you to learn how to effectively teach yourself new concepts so that you can continue to grow your skillset and your career, post Epicodus. This is what we call "learning how to learn" and we can do this by practicing the following:

- Perusing online resources
- Researching about bugs online
- Reading official documentation

With Bootstrap, we'll get our first real practice with learning how to learn. This lesson is meant to give you a foundation of tips and tools for navigating and understanding Bootstrap documentation so you can begin to explore and apply new Bootstrap features in your projects. But before we move on, let's cover another reason why being proficient at using documentation is so important. 

Documentation does just teach us new things, it also exists so that we don't have to worry about remembering every little detail about a tool. In fact, perfectly remembering how to use every tool we learn about should not be our goal at all! Most developers don't just sit down at their computers and type out large amounts of code from memory. Instead, it's a constant process of using developer tools, referencing documentation and other resources, and experimenting with different code to see what works. 

All of this is to say that it is also important to know how to find a piece of information, because we quite simply can't remember everything. And this is why we need to become comfortable using online resources and referencing documentation.

## Bootstrap Products
---

Frameworks like Bootstrap often offer more than one product. If we navigate to the Bootstrap homepage at [getbootstrap.com](https://getbootstrap.com/), we can see what Bootstrap offers by taking a look at its navigation bar options.

![The Bootstrap homepage.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Bootstrap+Lessons/bootstrap-homepage.png)

On the left-hand side, we can see menu options for "Docs", "Examples", "Icons", and "Themes". This is circled in yellow in the above image. Well, the Bootstrap styling we've learned about so far is actually a separate product from Bootstrap Icons and Bootstrap Themes. We can figure this out by navigating to each page and learning about each tool. We'll be able to tell that these are separate products because they have different setup processes, different version numbers, and potentially separate usage guides. You are welcome to explore [Bootstrap Icons](https://icons.getbootstrap.com/) and [Bootstrap Themes](https://themes.getbootstrap.com/) on your own. 

When you are working with an external library or framework it may not be immediately obvious whether it offers more than one product. To find out, start by reviewing the navigation bar to see the available options. Otherwise, clicking around the website and reading about the tool is the best way to find out.

On Bootstrap's homepage, we can also see a few links and a version number on the top right-hand side, circled in orange in the above image. The selected version number is always important to pay attention to! Bootstrap and many other frameworks/libraries default to the latest version. It's your job to make sure that you are on the version that matches the one that your project uses (at your internship, developer job, or in LearnHowToProgram.com lessons). 

As a final note, [the "Examples" navbar option](https://getbootstrap.com/docs/5.2/examples/) will take us to a page of examples of common website features built with Bootstrap. You'll likely spend most of your time perusing [the "Docs" section](https://getbootstrap.com/docs/5.2/getting-started/introduction/) of Bootstrap.

## Bootstrap Documentation
---

Pause for a moment and navigate to [Bootstrap's documentation for version 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) and take a look around. This is the first thing you should do when working with new documentation: take a broad look at what's in the documentation including the different categories and topics.

The next best place to start is with any introductory or "getting started" section. It's great to read through these articles to get a sense of what the tool does and how to install and configure it if necessary. Sometimes documentation includes guides that walk you through building simple example projects, which you should always take the time to do. 

In our case with Bootstrap, we're already familiar with how to install it in our application, so you don't necessarily need to spend anymore time reading through Bootstrap's "Getting Started" section. If you do, you'll get a sense of other ways to install and configure Bootstrap.

### Categories within the Bootstrap Docs

There are many categories within the Bootstrap Docs! We'll take the time now to review what each of these covers. 

When you are on your own or working through new documentation, the best thing to do is to briefly review each category to get a sense of what each covers. This will give you a broad sense of what the documentation covers and what tools are available to you. You might do this by reading through the first topic within the category, or the documentation might have an overview page that explains what each category is meant to cover. With Bootstrap, we can get a sense of what all it offers by reviewing [the "Introduction" page on the docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/). 

Alright, let's briefly review what each category within the Bootstrap docs covers:

- **Getting started.** This section covers all of the introductory information about Bootstrap, including what it is and how to download and install it in your application.

- **Customize.** This section covers how you can customize Bootstrap's styles in your application(s). We won't spend any time learning how to customize Bootstrap in LearnHowToProgram.com, so the content in this section is further exploration.

- **Layout.** This section covers how you can place elements on the webpage, which we call the "layout" of elements. Within this section, we can learn more about the `container` class. We can also learn how to create a [grid](https://getbootstrap.com/docs/5.2/layout/grid/) on our webpage to place items anywhere we need to! 

- **Content.** This section covers how the content on our webpage looks, like the color, size, and font family of our text, how images appear, or organizing our text into tables and figures.

- **Forms.** This section covers how to style different forms elements with Bootstrap. We'll learn how to create forms in the next course section. 

- **Components.** This section is a long list of many common webpage elements, like navbars, carousels, and spinners. These aren't HTML elements (like a paragraph or div element), but a combination of HTML and styling that we can call a "component" on a webpage. Keep in mind that some Bootstrap components require JavaScript. To learn which ones do, [check out this list on the Bootstrap docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/#js-components)!

- **Helpers** and **Utilities.** Bootstrap "helpers" and "utilities" are classes with specific styling that we can use in our application as needed. These classes cover common styling cases and help to make styling standard across an application. For example, the `bg-success` class that we learned about to set the background color of an element is [a utility class](https://getbootstrap.com/docs/5.2/utilities/background/), and it is also listed as part of a Bootstrap [helper that sets a background color with a contrasting text color](https://getbootstrap.com/docs/5.2/helpers/color-background/).

- **Extend.** This section contains more information on how to customize Bootstrap so that developers can build on top of Bootstrap's code to make it work for their own purposes. When we build on top of existing code, we call this "extending" a code base to have it do more. 

- **About.** This section covers more about Bootstrap as a company.

### Bootstrap Entries

Every entry in the Bootstrap documentation contains a description of the Bootstrap tool, subheadings for the different ways to customize or implement the tool (if applicable), examples of what it looks like, and example code. There's also a handy left-hand menu called "On this page" that lists all of the information that the entry covers. This is a common structure that most documentation follows.

For instance, if we look at the content for [Navbars](https://getbootstrap.com/docs/5.2/components/navbar/), we'll see a description of how it works as well as sample code and an example of a navbar built with sample code that we can copy and paste directly into our projects to customize and experiment with. So even if you've never built a navbar before, you can easily start experimenting with integrating the code in your own project. 

Keep in mind that there is poorly written documentation out there. Part of being a developer is figuring that out, too. It's often hard, frustrating work — but that's why developers get paid well for doing very skilled labor.

## Some Advice
---

Finally, we'll leave you with some advice. First of all, **it's normal not to understand everything that you read.** Similarly, you should not feel pressured to do extra research to understand everything that you read within online documentation. If you start to feel overwhelmed when reading through the documentation, we have a few suggestions: take a break to rest your brain, and when you come back take time to refocus on your goals for reading the documentation. For example, are you trying to learn what this tool does? How to install it? How to implement a specific part of it? With your goal in mind, and a break, you'll be in a better spot to try again. 

If you are still stuck on some part of the documentation, try looking for another resource, like a guide on how to do what you want to do.

The next piece of advice is to **look for and try out code snippets in your project, even if you don't understand every piece of the code perfectly.** While it's not recommend to add code to your project that you don't understand at all, it is okay to add code to your project that you only half understand. When you get a code snippet into your project, you can experiment with it and doing so can lead to a better understanding.

Finally, keep in mind that **not every documentation is created equally.** Some documentation is harder to use than others. So don't get discouraged if you run into challenges. 

Remember that reading documentation is practice in itself, and getting good at using documentation can take time. The goal of using documentation while at Epicodus is to practice getting better at using documentation. If you need help understanding documentation, or writing an effective search query, ask your instructor for help. 

Have fun exploring!