---
title: 'Practice: Accessing HTML Element Attributes and Properties in the DOM'
id: practice-accessing-html-element-attributes-and-properties-in-the-dom
slug: practice-accessing-html-element-attributes-and-properties-in-the-dom
hide_table_of_contents: true
sidebar_position: 6
day: monday
type: exercise
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2i_classwork_accessing_DOM_element_attributes_and_properties.md
---

**Goal:** Practice accessing DOM element attributes by using `document` methods and dot notation to access the properties that we learned about in previous lessons.

## Warm Up
---

* When we run our JavaScript in our browser, what is JavaScript's global object set to? 
* Why can we write simply `document.querySelector()` instead of `window.document.querySelector()`?
* What is the data type of HTML elements in the DOM?
* What are Web APIs?
* What is an interface?

## Code
---

### Cookie Recipe

Clone down the Cookie Recipe HTML and open it in your web browser. Then, use the DevTools console to practice accessing different DOM elements and their attributes by working through each prompt below. Reference the previous lesson "Accessing HTML Element Attributes in the DOM" as needed. You should be able to complete all of the following prompts with just the information in the lesson. 

* Get the text within the `<em>` tag of the paragraph element.
* Get the value for the class attribute of the ordered list. Then, give the class attribute a new value.
* Give the body a new background color.
* Find the exact object type (Web API interface) of the body element using `Object.prototype.toString.call();`.
* Change the hyperlink to point to a new website other than allrecipes.com.
* Add a class attribute with a random value to the H1 element using a method. 

Switch who's driving and observing, and complete the remaining prompts:

* Change the font size of the first list item in the unordered list element.
* Set the text of the H1 element to a new title.
* Update the `alt` attribute for the image.
* Find the exact object type (Web API interface) of the image element using `Object.prototype.toString.call();`.
* Use a method to remove the class attribute that was added to the H1 element.
* Update the inline styles for the `<body>` to change the font weight to the value `"700"`. 

Bonus:

* Review this documentation from [W3Schools that lists all `style` object properties](https://www.w3schools.com/jsref/dom_obj_style.asp) and apply a new style to any element. 