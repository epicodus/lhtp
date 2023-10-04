---
title: HTML Elements
id: html-elements
slug: html-elements
hide_table_of_contents: true
sidebar_position: 9
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_2_html_elements.md
---

Alright, so we learned a bit about HTML and its purpose. How do we write HTML code though? The first thing we need to learn about HTML is **elements**. HTML **elements** are the building blocks of HTML. In this lesson we are going to define HTML **elements** and discuss the anatomy of an **element**.


## Overview

There are lots of HTML **elements** available to us when writing HTML code. To get started, we’ll explore a list of common HTML **elements**. By the end of this lesson you should be able to:

1. Describe what _generally_ defines an HTML element.
    * How do you know if a **tag** is a **start** or **end tag**?
2. Create an HTML **element**.
3. Correctly **nest** HTML **elements**.

### HTML **elements** you will practice: 
* `div`,  “division” element, often referred to as a container element 
* `p`, “paragraph” element
* `h1`, and `h2` through `h6`, “header” elements,  
* `ul`, “unordered list” element
* `ol`, “ordered list” element
* `li`, “list item” element


### Important new terminology in this lesson:
* element
* element content, content of the element
* tag, tagname
* start tag, opening tag 
* end tag, closing tag
* nesting, nested elements
* parent and child elements
* wrapping elements


## Defining an HTML Element

What defines an HTML **element**? _In general_, a HTML **element** consists of a **start tag**, **element content** , and an **end tag**. These are also known by **opening tag**, **content**, and **closing tag**. 

Be prepared that you will encounter some exceptions to this general rule in the future.

![static image table defines html](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/html-elements-example-p-tag.png)

The **start tag**/**opening tag**, displayed as two angle brackets with the **tagname** in the middle (`<h1>`, `<div>`, `<p>`) marks the start of an HTML element.


The **end tag**/**closing tag**, displayed as two angle brackets with a slash `/` and tagname in the middle (`</h1>`, `</div>`, `</p>`) marks the end of an HTML element.


Anything in between the start and end tags of an HTML element is the **content of the element**. Content is typically text or other HTML elements. Adding HTML elements to the content of other HTML elements is called **nesting**.

>Note!   
>Very often the terms element and tag are used interchangeably in casual speech. For example, you will find other sources or hear people say "div tag" when actually referring to the entire div element - not just div opening and closing tag.  
>Generally in casual speech that's okay. Nobody is really going to fault you for it and the majority of other HTML writers will understand you.  
>In LearnHowToProgram.com we will clearly distinguish between element `<div>element content</div>`and tag `<div>`, `</div>`.

>The terms "Opening tag" and "closing tag" are used synonymously to refer to **start** and **end tags**. Technically, the correct term from W3C (the organization that manages HTML) says **start** and **end tags**. However, opening and closing tags are common speech and widely used. Both are right.  
>In LearnHowToProgram.com, we'll try to stick with the terminology start and end tags.

## Nesting HTML Elements

HTML elements can be the content of other HTML elements. This is called **nesting**. This example contains nine nested HTML elements (seven nested `li` elements and two nested `p` elements):

```
<h1>My favorite Cookie Recipe</h1>

<div>
    <p>This is my favorite cookie recipe.<p>
    <p>I am going to share this recipe with you!<p>
</div>

<h2>Ingredients</h2>

<ul>
    <li>Flour</li>
    <li>Milk</li>
    <li>Chocolate Chips</li>
    <li>Oil</li>
</ul>

<h2>Cooking Steps:</h2>

<ol>
    <li>Mix all the ingredients together.</li>
    <li>Spread on a baking sheet.</li>
    <li>Bake at 350 degrees for 20 minutes.</li>
</ol>

```

Notice how the **start tag** of **nested elements** starts further to the right. This is called **indentation** which we will talk more about in depth very soon. For now, just know that indentation is _often (but not always)_ used to denote nested elements which makes HTML code easier to read.


### Describing Nested Elements 

Nested elements are typically described by their relationship to other elements using the terms **parent element** and **child element** (or just **parent** and **child** for short). 


For example, in the HTML example above, the two `p` elements are **child elements** of the `div` element. The `div` element that **wraps around** the two `p` elements is a **parent** element.


An element that **wraps around** another element is another way of saying that an element has another element in between its opening and closing tags. This is also simply called **wrapping**.


There is no limit to nesting elements. A single element can be both a **parent** and **child** to many other elements at the same time.


## Exercise

> Let's Pair Program!  
>Before you begin this exercise, does anyone in the pair group have any questions? Discuss among yourselves what you have learned so far. Be sure to check-in with other pair groups if there are any lingering questions or points of confusion.
>
>As before, one person in the pair group will be the driver. The driver is the only person who should be typing code. The first person to be the driver will start Live Share and Live Server in VS Code.
>
>As a navigator, observe the driver and help them by referencing the lessons. Since writing HTML elements can take several steps, be sure to give the driver a moment before calling out any possible mistakes. As questions such as: "I don't understand what you just did there. Can you explain it to me?" Perhaps you do understand what the driver is doing; the question "Can you explain this to me?" is still a great question to ask because it gives the driver an opportunity to explain their thoughts.

>Before you begin, read over the directions below. Decide what the theme of the project will be and when you will trade off between driver and navigator. 
>
>By the end of this exercise everyone in the pair group should have had an opportunity to create HTML elements and nest elements.


### Project Setup:

1. Create a new directory with any name you like. Inside that directory create a new `.html` file. Revisit the lesson [The Terminal and the Command Line](https://new.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line) if you are not sure how to complete this step.
    * The theme of this practice project is up to you. If you can’t decide then take the cookie recipe from above and improve on it.

2. Open your `.html` file using VS Live Server. Revisit lesson [VS Code Live Server](https://new.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/vs-code-live-server) if needed.


### Goals:

1. Create HTML elements. Use all the elements listed so far in this lesson:
    * `div`,  “division” element, often referred to as a container element 
    * `p`, “paragraph” element
    * `h1`, and any of `h2` through `h6`, “header” elements,  
    * `ul`, “unordered list” element
    * `ol`, “ordered list” element
    * `li`, “list item” element

2. Properly nest elements. Right now it is important to understand how an element **wraps around** another element using its **opening** and **closing tags**.

>Note!  
>Save any questions that come up about indentation and formatting HTML as you practice. We will talk about it more in depth soon.  
>You can indent your code in VS Code like in the example above using the keyboard `Tab` to indent to the right and `Shift + Tab` to indent to the left. You can also highlight code to indent several lines at once.  
>Indentation and formatting HTML code is just so people can more easily read the code. So as long as HTML elements have correct start and end tags and elements are correctly nested then any indentation and >formatting won't break your HTML code when it is loaded in the browser.

### Guidelines:

1. As part of accessible web design when using a `h1` through `h6` header elements:
    * Web pages should have only one `h1` element. This means only one `h1` element per `.html` file.
    * Heading elements should be used _in descending order_. Do not skip heading levels. This means start with `h1`, then use `h2`, then `h3`, and so on.  
    Example:

    ```
    <h1>Title</h1>

    <h2>Section 1</h2>

    <h3>sub section 1</h3>

    <h3>sub section 1</h3>

    <h2>Section 2</h2>

    <h3>sub section 2</h3>

    <h2>Section 3</h2>
    ```

2. Some HTML elements are only expected to be used nested inside other elements. The “list item” `li` element is one such example. In this exercise, only use `li` elements nested in `ol` or `ul` elements.


### Optional Challenge

Add an image to your web page! Visit [this resource from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) on using an `img` element. 


We include this optional challenge now because often people are really eager to add images to their web pages. However, there is more we need to learn about HTML elements before we can do that.


At the same time, a lot about being a developer is teaching yourself by researching and trying things out. Can you infer how to add an image based on what we have learned so far and using the MDN resource?


Don’t worry if you want to skip this challenge or it's not working. We’ll talk more about `img` elements later.
