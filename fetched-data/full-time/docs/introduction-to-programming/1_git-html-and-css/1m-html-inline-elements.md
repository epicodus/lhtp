---
title: 'HTML Inline Elements and Attributes: <strong>, <em>, <img>, <a>, and More'
id: html-inline-elements-and-attributes-strong-em-img-a-and-more
slug: html-inline-elements-and-attributes-strong-em-img-a-and-more
hide_table_of_contents: true
sidebar_position: 13
day: monday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1m_html_inline_elements.md
---

All of the tags we learned about in the previous lessons are block elements, meaning that each element is displayed on a new line. In this lesson, we are going to look at elements that do not appear on their own line but share a line with other elements.  These are called **inline elements**. 

We'll also learn about HTML **attributes** that we add to HTML elements to provide more information about them. Sometimes attributes are required for an HTML element to work properly, and other times they are optional.

## HTML Inline Elements and Attributes

---

### `<strong>` and `<em>` Tags

Open any prior `html` file you have include an **inline element**:

```html
<p>This is my <strong>first web page</strong>!</p>
```

The `<strong>` tag indicates that something is important. By default, it will make the text inside it bold (although we'll learn how to customize this soon). If we want to *emphasize* something, we'll use the `<em>` tag, which will italicize it:

```html
<h2>Written with the guidance of <em>Epicodus</em></h2>
```

### `<a>` Tags

Now, let's learn about perhaps the most important HTML tag of them all:

```html
<p>Check out <a href="http://www.epicodus.com/">Epicodus</a>. It's a great school for learning web programming!</p>
```

The `<a>` is an **anchor tag** and it creates a link. The `href` (for *hypertext reference*) is an **attribute** for the anchor tag that provides the web address the link will go to. In the example above, we've linked to a website outside of our project.

### HTML Attributes 

All HTML tags can have one or more attributes. An **attribute** provides additional information about an HTML element. Sometimes attributes are required for an HTML element to work properly, and other times they are optional.

Let's review the anchor tag example we just learned about. In this anchor:

```html
<a href="http://www.epicodus.com/">Epicodus</a>
```

* `<a>` is opening tag for the anchor tag (the HTML element).
* `</a>` is closing tag for the anchor tag (the HTML element).
* `Epicodus` is the content of the anchor tag (the link's text, displayed to the user).
* `href` is the attribute.
* `http://www.epicodus.com/` is the value of the `href` attribute. The value of an HTML attribute is surrounded in quotes.

**Take note:** attributes are always added to the opening tag, and never to the closing tag

### Using an Anchor to Link to Other HTML Files Within the Same Project 

If your project has two `html` files, you can use the anchor tag to link from one to the other:

```html
<p>Here is a link to my <a href="favorite-things.html">favorite things</a>.</p>
```

Instead of supplying a full path, we've provided a **relative path**. If a link doesn't start with `http://` (or `https://`, or a few other specific protocols you may come across), your web browser will look in the same folder for the file you're linking to.

This brings up a pitfall you should be careful to avoid: if you write a link like `<a href="www.epicodus.com">link</a>`, it will look for a file called `www.epicodus.com` in the current directory. So if you're linking to another website, don't forget to put `http://` in front!

### Using an Anchor to Link to Email Addresses

We can also use `<a>` tags to link to an email address. Here's an example:

```html
<a href="mailto:michael@epicodus.com">
```

Clicking on the above anchor tag would cause our computer to open up our default email application to a new message composition screen with the email address `michael@epicodus.com` listed as the recipient.

### `<img>` Tags

Finally, let's make your  webpage a bit prettier and include an image. Save an image in the same folder as your HTML files and then include it like this:

```html
<img src="kitten.jpeg" alt="A photo of a cute kitten."/>
```

The `<img>` tag is different from the other tags we've used in that it is **self-closing**: you don't need a closing tag. 

The `src` attribute tells our webpage to look for a file named `kitten.jpeg` in our current directory as the source of the image element.

Also notice the `alt` attribute. If the browser can't render the image, it will display the value of the `alt` attribute, which in this case is "A photo of a cute kitten". This attribute is optional, but it's a really good idea to include it, so that blind people using software that reads web pages to them can know what the image is.

Typically, webpages will store their images in a separate folder from their HTML. Let's create a folder called `img` and put the image file in there. Pick any image from the internet to practice this, saving the image to your project's `img` folder. Now, we need to update our code to tell the browser where to find the image:


```html
<img src="img/kitten.jpeg" alt="A photo of a cute kitten."/>
```

The `src` attribute with the value `img/kitten.jpeg` tells the browser to look in the `img` folder in the current directory and then look for the `kitten.jpeg` file.

This handy website https://picsum.photos/ offers placeholder images to use. The value of the `src` attribute can also be a url to an image, such as

```
<img src="https://picsum.photos/200/300" alt="a placeholder image"/>
```
