---
title: HyperText Markup Lanuage (HTML)
id: hypertext-markup-lanuage-html
slug: hypertext-markup-lanuage-html
hide_table_of_contents: true
sidebar_position: 8
day: tuesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1_0_hypertext_markup_language_html.md
---

If you have ever written a report or an article you probably were given some set of standards for how your words should be formatted. For example, you may have been instructed that the first line of paragraphs should be indented or vis vera instructed that all lines after the first should be indented. You likely were instructed on how you denote quotes, when to bold or italics text, and how to format the header, title, references, etc.

**HyperText Markup Language (HTML)** is a coding language that serves a similar purpose. It is used to standardize the structure and formatting of text documents intended to be displayed in a web browser. **HTML** is at the core of every webpage you see on the internet, regardless of the complexity of the website. 


## Introduction to HTML


What does **HyperText** and **Markup Language** mean? 


**Hypertext** (when not used in context with HTML, the “t” is lowercase) is text displayed on a computer that contains links to other text. Without getting too much into the subject, **Hypertext** is kinda just a “technical nerdy” way of saying “a link.” Most people just say “link.” It may seem odd but learning exactly what is **Hypertext** is off topic and not important right now for learning about HTML. Just know that HT in HTML stands for **HyperText**.


A **markup language** is used to control the structure, formatting, and relationship between parts of a text document. To give an analogy, let's say you wrote a paper and then gave it to your English teacher for review. Your English teacher then used a blue pen to mark on your paper where there are formatting errors. Your English teacher then gives the paper back to you and expects you to correct all formatting errors. In this analogy, the English teacher is enforcing their **markup language** on your paper. They have formatting rules they expect you to follow. 


This is what **HyperText Markup Language (HTML)** is doing for us too; enforcing structure and formatting standards for text intended to be displayed on the web. In fact, all formatted digital content relies on a **markup language**. **HTML** is by far the most standard meaning it is the most widely used and applicable to many professions; not just developers.


## How HTML Works

This will be a brief overview so you can get the general big picture of how HTML works. It's kinda a funny thing in code that you often don’t need to get into the details of a coding language or tool before you’re expected to start using it. 


This is how **HTML** works:

![static image how html works](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/HTML-Image-1.png)

HTML is written in a file, that file is rendered by the web browser and it is displayed according to the HTML syntax.

That's all we really need to know about **HTML** works for now. Using **HTML** is providing your web browser with instructions for how the text should be displayed. 


## 	Basic Structure of an HTML Document

HTML documents have the file extension `.html` You can name HTML documents whatever you like. However, the homepage of a website (in other words, the first page a visitor to the website sees) is conventionally named `index.html`. We’ll be following this convention as well through the lessons on LearnHowToProgram.com. 


This is the basic structure of an HTML document:


``` 
<!DOCTYPE html>
<html lang="en-US">
<body>
	
</body>
</html>
```



* `<!DOCTYPE html>` is the Document Type Declaration. It tells the browser (such as Chrome) what kind of document this is so it can be rendered correctly.  

* `<html lang="en-US"> … </html>` encloses all content within the HTML document. Specifically the `lang="en-US` specifies that the language for this document is “english United States.” This is important information for screen readers so vision-impaired visitors to your website can still use it.  

* `<body> </body>` is where we will write our own HTML. 
