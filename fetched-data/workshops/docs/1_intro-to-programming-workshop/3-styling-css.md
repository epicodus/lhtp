---
title: Styling CSS
id: styling-css
slug: styling-css
hide_table_of_contents: true
sidebar_position: 3
day: weekend
type: lesson
url: 'https://github.com/epicodus-curriculum/workshops/blob/main/3_styling_css.md'
---

Now that we've added HTML content to our webpage, we can style and format our HTML using **CSS**.

<hr />

### Using CSS

**CSS** stands for **Cascading Style Sheet**. Just as HTML defines *what* appears on our page, CSS defines how it *looks*.

Let's begin by creating a new style sheet in the Terminal.

Use `pwd` to verify that your Terminal is inside the project folder. Then enter the following commands:

* `mkdir css`: This will create a new folder called *css* where we can store our CSS.
* `touch css/styles.css`: This will create a new CSS file within the *css* directory.

Back in Atom, we see that our *css* folder now exists and contains our new file.

![directory-with-css](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/new_css_folder_in_atom.png)

Open the `styles.css` file. Let's write our first CSS rule.

<div class="filename">css/styles.css</div>

```css
h1 {
  color:'blue';
}
```

This style can be broken down into a few sections.

* `h1` tells our CSS that this style should be applied to any element of this type. It will be universal for all `<h1>` elements on our page.
* `{...}` are called **curly-braces** by most programmers. Some call them *handlebars* or *wave-braces* or other things, but they define the beginning and end of a style rule. Every rule within these symbols will be applied to the `<h1>` elements.
* `color` is a **property**. It is the element we want to style in our HTML.
* ` blue` is a **value**. It's the actual value that the property should have. We could change this to another color as well.

We can combine multiple rules in each style. Let's add another property to this rule.

<div class="filename">css/styles.css</div>

```css
h1 {
  color:'blue';
  background-color:'gray';
}
```

This rule will change the background color of all `<h1>` elements on our page. However, we need to do one more thing before we'll see any CSS rules applied on our site. We need to link our CSS file to our HTML file. Let's reopen `index.html` in Atom and add this line to the `<head>` of our HTML.

```html
<link rel="stylesheet" href="css/styles.css">
```

This `link` element in the `head` tells the HTML to find the `styles.css` file and apply its rules to our HTML file.

Let's take a look at our page. Our title has been styled according to our CSS rule.



![first-css-rule-applied](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/first-css-rule.png)

It may not be the prettiest style, but we certainly have changed it. In fact, that gray looks a little too dark. Let's upgrade the style.


<div class="filename">css/styles.css</div>

```css
h1 {
  color:'blue';
  background-color:'lightgray';
}
```

This is how our site looks now:

![updated-first-css-rule](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/ammended-first-css-rule.png)

You can look up a list of all the colors CSS has defined or use a **hex-color**. Let's use a hex-color to change the text to a lighter blue. While we're at it, we'll put that background color behind the entire body of the page.

<div class="filename">css/styles.css</div>

```css
h1 {
  color:'#5179ba';
}

body {
  background-color:'lightgray';
}
```

![second-css-rule](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/second-css-rule.png)

Feel free to style elements on your page using the attributes and properties above. You can modify any element on that page including other header tags, paragraph tags, `img` tags and so on.

<hr />

### Using a class or id

So far we've been styling everything based on its element type. However, this isn't such a great idea in web development. What if we want to have one `h1` look a certain way while another `h1` should look completely different? In order to do this, we need to target only a single element or groups of elements.

We can use two powerful HTML tools to do this: the **class** and the **id**.

* An **id** is a single identifying attribute given to an HTML element.
* A **class** is an attribute given to multiple HTML elements.

Let's modify our list of goals in our HTML to see how this works. We'll add a few more items as well as add a few classes and ids.

<div class="filename">index.html</div>

```html
...
<ul id="goal-list">
  <li class="list-item">Learn HTML</li>
  <li class="list-item" id="css-item">Learn CSS</li>
  <li class="list-item">Learn JavaScript</li>
  <li class="list-item">Learn Git</li>
</ul>
...
```

Let's also add an `id` to our image:

```html
...
<img id="picture" src="https://tinyurl.com/lfkubwe" />
...
```

Next, let's add new CSS rules that we can apply to these ids and classes.

In order to apply rules to ids and classes in our CSS, we must do the following:

* We use a `#` to indicate that we are referring to an *id*.
* We use a `.` to indicate that we're targeting a *class*.


<div class="filename">css/styles.css</div>

```css
.list-item {
  font-family: monospace;
}

#css-item {
  color:'#5179ba';
}

#goal-list {
  border-style: solid;
  border-color:'#5179ba';
  width:' 30%%';
}
```

`.list-item` refers to a class because it has a `.`. `#css-item` and `#goal-list` refer to ids because they use a `#`. It is a common error to get these mixed up when applying CSS rules. If a CSS rule isn't working correctly, this is the first thing to check.

It's time to reload our page in the browser. We'll see our new CSS rules being applied:


![css-with-classes-and-ids](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/css-with-classes-and-ids.png)


Finally, let's give our image some style rules. We've already added the id `picture`. Now we can target the image with a CSS rule that applies to `#picture`.

<div class="filename">css/styles.css</div>

```css
#picture {
  width:' 60%%';
  float: right;
  border: solid;
  border-color:'grey' beige white grey;
}
```

Here's our page now:



![css-rule-applied-to-img](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/css-rule-applied-to-img-id.png)

<hr />

### Using Bootstrap

We can make our CSS styling much easier by using an existing CSS library. There are many different CSS libraries out there but we'll focus on using a library called **Bootstrap**, which was built by Twitter. Let's add it to our project and make a few minor changes to our CSS.

In our HTML, just above where we linked our `styles.css` file, let's add a new line of code. It should look like this:

<div class="filename">index.html</div>

```html
...
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="css/styles.css">
<title>Epicodus Workshop Project</title>
...
```

This is a CSS file that contains thousands of styles and rules. Instead of linking to a file in our project (as we do with `styles.css`), we are linking to it via a CDN, which is short for content delivery network. This Bootstrap CSS file defines special classes we can use on our html.

Bootstrap automatically applies some styles to elements like `body`. Let's take a look in the browser:

![bootstrap-applied-to-webpage](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/bootstrap-applied.png)

One problem that jumps out is that the text is very tight on the left of the screen. Let's use a Bootstrap class to fix that.

We'll also use a new HTML element called a `<div>`. A `<div>` makes divisions on the page and is used to group parts of our page together. Let's put all the code within the `<body>` within a `<div>`. We'll also give it a Bootstrap class called `container`.

<div class="filename">index.html</div>

```html
...
<body>
  <div class="container">
    ...
  </div>
</body>
...
```

This will make some styling changes to our page, including fixing some of our spacing issues.

![bootstrap-container-class-applied](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/bootstrap-container-applied.png)

If you want to see what the page looked like before and after we added this styling, you can comment out the styling links in the HTML head. When we comment code, it remains on the page but the code isn't rendered. If you highlight a line of code and press `Alt + /` on your keyboard, you can see the code will be grayed out within Atom. Try this, and reload your page. To un-comment the code, simply repeat the process.

Now that we've learned the basics of CSS, we're ready to add some interactivity to our site with JavaScript.
