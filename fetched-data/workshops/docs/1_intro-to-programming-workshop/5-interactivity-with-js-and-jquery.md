---
title: Interactivity with JavaScript and jQuery
id: interactivity-with-javascript-and-jquery
slug: interactivity-with-javascript-and-jquery
hide_table_of_contents: true
sidebar_position: 5
day: weekend
type: lesson
url: >-
  https://github.com/epicodus-curriculum/workshops/blob/main/5_interactivity_with_js_and_jquery.md
---

While an `alert()` can be helpful for beginning programmers, we generally don't want to use them in our applications. Ideally, we want as much of our functionality to happen on the page as possible. In this lesson, we'll create a form where users can type in a goal. When the goal is submitted, it will then be added to our list of goals.

In order to do this, we're going to use a JavaScript library called jQuery. jQuery just uses JavaScript under the hood. We could do the exact same thing with just JavaScript but the purpose of jQuery is to make this interactivity much easier to work with in our code. A library in JavaScript is just like a CSS library like Bootstrap. It's a collection of already existing code that can help speed up our process.

First we need to alter our HTML `head` again to include jQuery. We'll use a URL to reference it just like we did with the Bootstrap library.

<div class="filename">index.html</div>

```html
...
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <script src="js/scripts.js"></script>
  <title>Epicodus Workshop Project</title>
</head>
...
```

Note that we've listed this new `<script>` *above* the script we're writing ourselves. When these JavaScript files load, they do so from the top down. Since the code we're about to write depends on the jQuery library, we need to make sure jQuery loads first.

Before we go any further, let's talk a little more about what actually happens when we load HTML on a webpage. What we see in the browser isn't actually HTML. It's what's called the DOM, which stands for Document Object Model. Our HTML is just a blueprint. It tells the browser what to do and then the browser creates a DOM based on that blueprint.

Why is this important? Well, the DOM needs to be built before we run our JavaScript code. Otherwise our JavaScript code won't run. If HTML is the blueprint, then the DOM is a virtual house built with that blueprint. We need the house to be finished before we can actually start doing stuff in it.

For that reason, our code is going to be wrapped in a jQuery function that is very common in scripts that are used for websites:

<div class="filename">script.js</div>

```js
$(document).ready(function() {
  // Our code will go here.
});
```

Let's explain this in further detail:

* We begin by using the `$`. All jQuery methods are preceded by this symbol.
* We call the following jQuery method: `$(document).ready()`. This ensures that the DOM is built first so our JavaScript code works. Otherwise, the JavaScript code will run immediately - before there's a DOM in place.
* The `function()` keyword comes from JavaScript. We are putting all of the code that should run inside this function. jQuery will then call that function after the document is ready.
* `});` is used to close a JavaScript function. Just like a CSS style, this curly-brace/parens combo closes the `ready()` function and the area where we define those actions. An area of actions within a function is called that function's **scope**. The scope of our function doesn't have any code in it yet.

As a quick reference, a JavaScript function has this syntax:

```js
function() {
  // All code goes here.
};
```

Now let's get this code to interact with our page. We can target specific elements in our site by using the same classes and ids we've already added to our code for CSS rules. Let's change our function to the following:

<div class="filename">js/scripts.js</div>

```js
$(document).ready(function() {
  alert($("#css-item").text());
});
```

This may look complicated at first so let's break this down a little further. We'll start by looking at what's inside the parens of the `alert()` function.

```js
$("#css-item").text()
```

We have passed another function into our `alert()` here. This one states that we want to find an element with an ID of `css-item` in our HTML and target it. Once we've targeted the part of the HTML we want to interact with, we can do something with it. In this case, we're calling a new jQuery method called `text()`. The job of this function is to report the text contents of an element. When we load our page, the text of the element with the id `css-item` is populated into our `alert()`.

![second-js-alert](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/second-js-alert.png)

Try adding different ids to other elements within the HTML and then use jQuery's `text()` function to pass them into the `alert()`. For instance, try adding an id to a `<p>` element or a header element.

<hr />

### Adding to our list.

Next, let's create a form that allows us to add new items to our list of programming goals. We'll add this form to our `index.html` file just above the `<ul>` that contains our list of goals.

<div class="filename">index.html</div>

```html
...
  <div class="form-group">
    <label>New Goal</label>
    <input type="text" id="new-goal">
    <button class="btn" type="button" id="goal-button">Add goal</button>
  </div>
...
```

Notice how these HTML elements are indented to keep them organized? Good coding includes using good organization and conventions to help make these items easier to read. We won't cover indentation further here, but it's covered in the first few weeks of Introduction to Programming.

Our new form contains a label, a text input field for the user, and a button to click when the form has been filled out. Note the `id` given to the text input. That's about to become important.

If we reload our page now, we can see our form. Now we can enter a new goal into it.

![form-on-webpage](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/form-on-page.png)

When we click the button however, nothing happens. We'll need to use jQuery to make the button interactive.

In our `scripts.js` file, let's replace our alert with a new kind of function. Here's what we want our file to look like:

<div class="filename">js/scripts.js</div>

```js
$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  });
});
```

Let's look at these new lines together:

![annotated-jquery-in-atom](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/annotated-jquery%20(1).png)

* Most of the code (everything in the solid blue rectangle above) is nested inside the `$(document).ready` function. As discussed earlier, code that resides within this must wait until our HTML has fully loaded before it runs.

* Next, let's take a look at our new `click()` function. A `click()` function does exactly what it sounds like. When an element that has a click function attached to it is clicked, all the code inside that click function will run. This function targets the `goal-button` ID in our HTML. This is called a **callback function** because it is called back when the event it's waiting for takes place. So, **code within the red dotted rectangle only runs when our `goal-button` is clicked.**

* Now let's look at the code inside our `click()` function:

* `$("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");` is composed of two primary actions:
    * `$("#goal-list").append()` tells jQuery we have something we want to **append** to the `#goal-list` element. This method literally does what it sounds like: it appends something to the element it's called on. Specifically, we'll append whatever is passed into the parens as an argument.
    * The argument to the `append()` method is `"<li class='list-item'>" + $("#new-goal").val() + "</li>"` See that we're using concatenation here? We've used our knowledge of HTML to add `<li>` tags to create a new list item for our HTML list.
    * In the middle of this line of code, we use `$("#new-goal").val()`. The `val()` function refers to the **value** of the `#new-goal` element. Happily, the value is whatever the user has typed into our form field.
* Finally, we have this line of code: `$("#new-goal").val("");`. This line resets the input form to `""`, which is an empty string.

To review, as soon as we visit our page, the following events occur in this order:

*  The `$(document).ready` function makes our script wait until our other code has loaded. This is very important because our HTML must be loaded in the browser first. Note that our HTML isn't loaded exactly. Instead, a representation of our HTML called the DOM is loaded in the browser. All of our HTML elements are in the DOM. When our JavaScript code runs, the click function will be attached to the HTML element, but if the element isn't there yet, the click function won't be attached and the code won't work. The DOM is a more advanced concept, so don't worry about it too much at this point.

*  Once the page is finished loading, the `click()` function will be attached to the corresponding HTML element with an ID of `goal-button`.

*  If a user clicks the button, the `click()` function is activated:

![jquery-activating-click-listener](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/jquery-step-one.png)

*  Then the code in the `click()` function runs:

![code-within-click-listener](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/jquery-step-1-5.png)

*  The first line in the click listener block _appends_ new content to the HTML element on our page with the `goal-list` id. It adds the HTML `<li class='list-item'>`, the _custom_ content the user typed into the form field, and a closing `</li>` tag. The user's form content is retrieved by calling `$("#new-goal").val()`:

![jquery-appending-to-html](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/jquery-step-two%20(1).png)

*  The line `$("#new-goal").val("");` simply empties the form field so the user may enter another goal into the form.

*  Every time the user clicks the button, steps 3 through 5 occur again.   

Now that we have an introductory understanding of what's going on, let's try it out. Save your JavaScript file and reload your page.

We can now add new elements to our list with our form and our application is now interactive.

In the next and final lesson, we'll learn how to save our work and host it on GitHub, an industry standard cloud storage solution.

## A Note on JavaScript & jQuery

Before we move on, we'd like to emphasize that JavaScript and jQuery are challenging at first. Don't worry if you don't fully understand everything we just completed. That's entirely normal. Our full-time Introduction to Programming students spent many weeks learning and practicing these concepts. If you're interested in developing your JavaScript skills further, we'll provide a list of resources in the last lesson of this workshop.
