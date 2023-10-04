---
title: Writing HTML
id: writing-html
slug: writing-html
hide_table_of_contents: true
sidebar_position: 2
day: weekend
type: lesson
url: 'https://github.com/epicodus-curriculum/workshops/blob/main/2_writing_html.md'
---

In the previous lesson, we created our project's directory along with our first file. Next, let's begin creating our actual website using **HTML**.

<hr />

### Writing HTML

In the last lesson, we opened our project with `atom .`. This will open an Atom screen with a pane on the left side that shows our project files. Right now, the only file we have is `index.html`.

![file-directory-in-atom](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/directory_in_atom.png)

Open that file now. It's time to add some HTML!

**HTML** is the basic building block of the internet. HTML is used to display the basic content of every website you've ever visited.

Read the following code and carefully type it into the `index.html` file.

<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Epicodus Workshop Project</title>
  </head>
  <body>
    <h1>My Programming Goals</h1>
  </body>
</html>
```

We are using several different element types here. Each element has two **tags**: an opening tag and a closing tag. Here is an example: `<html>` and `</html>`. Tags are always enclosed in `<` and `>`. `<html>` is an opening tag. `</html>` is a closing tag. Closing tags always include a `/` after the `<`.

Here are the tags we are using in the code above:

* `<html>` tells the browser that everything within it is HTML.
* `<head>` includes important information about the webpage that will not be displayed. For now we are just including a `<title>`. We will cover other elements that go in `<head>` soon.
* `<body>` contains information that will be displayed to the user. Most of the code we add will go in the body.
* `<h1>` is a header tag. There are headers 1-6 and they correspond to different text sizes.

Next, we need to save our file. We can do this by pressing the `alt + S` keys on Epicodus keyboards or by selecting _File > Save_ in Atom. To open our webpage, go to the Terminal (the same window you used commands like `touch` and `mkdir` earlier) and enter the command `open index.html`.

Now we can see our page:

![webpage-in-browser-1](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/webpage_in_browser_1.png)

<hr />

### Expanding HTML

Let's add some more elements to our HTML. We'll start with another header. Follow along and match your HTML to the following code snippet. Note that we've limited the code snippet to the `<body>` element for now. Also, each html document should have just one set of `body` tags. The `body` tags should "wrap around" the rest of the html code that isn't inside the `head`.

<div class="filename">index.html</div>

```html
...
  <body>
    <h1>My Programming Goals</h1>
    <p>Every journey is easier if you <strong>know where you're going.</strong> <em>-unknown</em></p>
  </body>
...
```

* The `<p>` element is a paragraph. This is the basic text element used in HTML. It's used to display most basic text to the user.

Save the file and refresh the page in your browser. Note how the `<strong>` and `<em>` tags inside the paragraph element have changed the styling of our site. `strong` tags add **bold** while `em` tags add _italics_.

![webpage-in-browser-2](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/webpage_in_browser_2.png)

Let's use a new element to display an image on our page.

<div class="filename">index.html</div>

```html
...
  <body>
    <h1>My Programming Goals</h1>
    <p>Every journey is easier if you <strong>know where you're going.</strong> <em>-unknown</em></p>

    <img src="https://tinyurl.com/lfkubwe" />

  </body>
...
```

Here we've added an element called an `<img>`. We can use this image to link to an image. Note that there is no closing tag `</img>` present. Instead the `/` is located at the end of the element itself. This is called a self-closing element.

This element has additional information included as well. It has an **attribute** called `src`. This attribute defines the source of the image. In this case we're using a URL to show an image from the internet. You can replace this URL with another image if you'd prefer. Just copy and paste an image link inside the double quotation marks. You must always add quotation marks to an attribute. Any information about the attribute is included inside the quotation marks like the code example above.
Save the file and refresh the page in your browser. Our webpage now includes an image.

![webpage-with-image](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/webpage_in_browser_3.png)

<hr />

### An HTML list

Let's create a list of goals below the image we're displaying. Add the following code below the `<img>` element:

<div class="filename">index.html</div>

```html
...
<h3>My Goals:</h3>
<p>
  I want to become a professional web developer. Here are the things I'll need to learn first.
</p>
<ul>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
</ul>
...
```

* `<ul>` is an element that indicates we wish to display an un-ordered list. By default this means we'll display bullet points.
* `<li>` is a list item. When displayed within a list, they will be grouped together.

When we reload, we see our list neatly displayed under the image.



![list-in-webpage](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/Screen%20Shot%202017-04-07%20at%203.26.25%20PM.png)

<hr />

### Hyperlinks

Let's add one more element to our page. No website would be complete without links. They're important for linking pages together and providing references to external sites.

Let's add the following code to the *index.html* file.

<div class="filename">index.html</div>

```html
...
<h3>My favorite website</h3>
<h4><a href="http://www.google.com">Google</a></h4>
...
```

Here we've used another set of header elements and a new element called an **anchor**. The anchor is defined with the `<a>` element. Notice that the anchor has an **attribute** just like an image. The `href` attribute is the hypertext reference. If a user clicks on the link, the `href` declares the site where the user will end up. Here's how our site should look now:

![site-after-completion-of-html-lesson](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/Workshop/webpage_after_html_lesson.png)

Our basic site now has basic elements including a header, paragraph element, an image, a list, and a hyperlink. In the next lesson, we'll add styling with CSS.
