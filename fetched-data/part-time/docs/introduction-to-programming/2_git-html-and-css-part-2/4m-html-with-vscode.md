---
title: 'Optional: VS Code with HTML'
id: optional-vs-code-with-html
slug: optional-vs-code-with-html
hide_table_of_contents: true
sidebar_position: 34
day: thursday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4m_html_with_vscode.md
---

Before we move on, let's cover a few basic tips and tricks for working with HTML in VS Code. This lesson is optional but the content here is highly recommended. The VS Code features mentioned below make it easier to work with HTML and other coding languages.

If we look at the HTML in our `section-in-review` project, it's starting to get a bit overwhelming. It's often frustrating to add rows and columns to HTML that already exists, and it can also be challenging to get our indentation lined up and make sure we have the correct number of tags and closing tags — and that all of those tags are in the right places.

VS Code is designed to make our lives easier as developers. Here are a few things we can do to make HTML easier to work with.

### Folding Code

When we are working with longer sections of code, it's helpful to be able to hide code we don't need at the moment. This can make the code less overwhelming to look at and work with.

We can "fold" sections of code in VS Code, as this GIF shows.

![Fold code by clicking on the arrow between the line number and the code.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/folding-code.gif)

In the GIF above, we fold sections of code (code enclosed in tags). To do this, we hover over the gutter between the line numbers and the code. This will show arrows for each section of code.

If the arrow is pointing down, that means the section of code is fully expanded and showing. If the arrow is pointing to the right, that means the code is hidden, though the first line of the hidden section will be showing. This line will be highlighted in blue and there will also be ellipses to the right of the line to show that the section is hidden. This can be helpful when we accidentally hide our code and wonder where it went.

We can click on the arrows to either expand or hide our code. As the GIF above shows, it's probably not very helpful to hide larger sections of code like the code for our `<body>`, but it can be helpful to hide our `"head"` code.

If we take a look at the image below, we can see another use case, which is to hide code that we're done with so that we can focus on the new code we want to write: 

![Previous code is folded so that we can focus on new code.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/folded-code.png)

It's totally up to you to fold code in a way that helps your coding process.

Note that code folding isn't limited to HTML. We can fold code for other languages in VS Code, too.

### Highlighting Divs

Sometimes we'll want to see exactly where a div begins and ends. While folding code can help a bit, it might not be as helpful if we need to see all the code — either for reasons of context or because we are hunting down an error (such as a missing closing tag or a typo). There are two subtle but very useful things VS Code does to help us.

Well, we can click on a div to highlight it. When we do, the closing div will also automatically be highlighted. Take a look at the GIF below.

![In this GIF, we can click on a div to highlight its closing div. It also emphasizes the line guide.](https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/line-guides.gif)

As we can see in the GIF above, when we click on a tag, this also highlights the corresponding closing tag. This can be particularly useful — and sometimes is necessary — when trying to figure out where a closing tag is missing (or when we have one too many closing tags). Of course, to fully use this functionality, we need to have clear, consistent indentation.

### Intellisense

Like other powerful code editors, VS Code has a built-in ability to "sense" what you might be typing in. You've probably noticed this before — VS Code will provide a dropdown of items as you're typing. It might seem annoying at first, at least until you know how to harness the power of what's called Intellisense. Let's take a look at a basic example. In the process, we'll demonstrate another piece of cool VS Code functionality as well.

<img alt="We can use VS Code's Intellisense to autofill code for us. And we can use Emmet snippets to autofill even more" src="https://learnhowtoprogram.s3.us-west-2.amazonaws.com/VS+Code+Lessons/intellisense.gif" style={{width:'75%%'}} />

In the example above, when we type in the letter "d", VS Code knows that we might mean `<div>`. It will provide a dropdown that includes `div` as the first option. If we hit _Tab_, VS Code will automatically create a div and its closing tag for us — all we had to do is type in "d" and then hit _Tab_. That can save us a lot of typing in the long run.

Note that if VS Code isn't automatically showing a dropdown when we are typing, we can always prompt it to do so by hitting `Ctrl` + `Space`.

Next, we can do the same thing with an ordered list. And finally, here's another cool piece of functionality. We can type `li*3` to specify that we want three `<li>` tags. As we'll learn in the next course section, the `*` represents multiplication in coding.

`li*3` is known as an Emmet snippet. Emmet is a toolkit for web developers that makes writing code more efficient. You are not required to know about Emmet snippets in this course, but they can make your coding life easier in the long run. For more information about using Emmet snippets with VS Code, see the [documentation](https://code.visualstudio.com/docs/editor/emmet).

There's another very helpful thing to know about Intellisense. It doesn't just help us type code more efficiently — it makes code **discoverable**. For instance, let's say we want to add an HTML tag and we can't remember what it is. All we know is the letter it begins with. We can type in that letter and then Intellisense can help jog our memory. Intellisense can sometimes even suggest something we don't know about at all, saving us the time we'd need to hunt through documentation. This quality of discoverability becomes more apparent when we start working with other coding languages like JavaScript. However, by working with and becoming more comfortable with Intellisense now, we'll be better prepared to take advantage of this feature going forward.

For more information on how VS Code can help us work with HTML, see [HTML in Visual Studio Code](https://code.visualstudio.com/docs/languages/html). You are not required to know or use any of these features for Epicodus. However, we recommend using the VS Code features above because they make it easier to write and debug HTML.