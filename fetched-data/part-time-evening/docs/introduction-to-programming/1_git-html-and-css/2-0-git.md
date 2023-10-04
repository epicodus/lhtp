---
title: Git
id: git
slug: git
hide_table_of_contents: true
sidebar_position: 18
day: wednesday
type: lesson
url: 'https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_0_git.md'
---

**Git** is a **version control system** for tracking changes in our code. We have to use tools like **Git** while we code to periodically take snapshots of our projects. By taking a snapshot of our project we can preserve the state of the project in that particular point in time. We continue to take snapshots as we work. Older snapshots are kept and the collection of snapshots represents our project history. The benefits of doing this include but are not limited to: 


1. If we really mess something up in our code, we can revert back to a previous snapshot when the project was working.
2. We can demonstrate we are making progress on a project. Our project's history is proof of work.
3. Each snapshot can be authored meaning we retain credit for past work even if someone else takes over the project.
4. We can preserve unused code we may want later. 

**Git** also works with [GitHub](https://github.com/), which will be your coding portfolio when job seeking. The work you do now while learning how to code will be tracked by **Git **and all your hard work will be reflected in your GitHub account.   


For these reasons, we need to take a pause from learning about code and shift to learning about **Git**. Afterwards, we will integrate Git into our regular workflow. 



## Overview

Learning **Git** is difficult and it likely will feel very convoluted at first. We want to give you context for what is happening with **Git** while doing our best to not weigh you down with unnecessary details. 


Don’t worry if you don’t feel 100% with **Git** after the exercise. We will continue to use **Git** for the remainder of the program so you will get plenty of practice. After this lesson, we’ll include a concise step-by-step practical use guide for how to use **Git** in your workflow. 


### Git commands you will practice:

* git init
* git status
* git add
* git commit -m
* git diff
* git log


### Important new terminology:

* Git
* repository 
* commit (a snapshot is often used to describe a commit)
* untracked file
* tracked file
* unmodified, modified, staged changes in a file


## Exercise


Let's learn a bit about how **Git** categorizes changes when they happen in your project. To start, we’ll set up **Git** in a brand new project. We’ll then make changes to our project to see how **Git** categorizes those changes. Then we’ll end with taking a snapshot of our project to preserve its current state in our project's history. 


### Requirements

This exercise assumes you have git installed on your computer following the directions in lesson [Git an GitHub](https://new.learnhowtoprogram.com/pre-work/getting-started-with-intro-to-programming/git-and-github)

>Note!   
>Epicodus machines already have git installed.


### Project Setup:


>Let's Pair Program!  
>If working remotely in a pair group:  
>Using Git relies on using the terminal. We shouldn't share access to our terminal with other people for security reasons. So for this project, the person who sets up the project on their computer will be the driver for the entire exercise. Go through this exercise multiple times so everyone has an opportunity to be the driver. 




Create a new directory on your desktop called `hello-world`. Navigate into that directory and create an HTML file called `hello-world.html`


Copy and paste this starter code to the `hello-world.html` file:


``` 
<h1> Hello World </h1>

<h2> A program to greet the planet. </h2>

<p>This page is an attempt to greet everyone on Earth using our various human languages.</p>

<ul>
    <li> English: Hello, world! </li>
    <li> Spanish:  Hola, mundo! </li>
    <li> Japanese: Konnichiwa, sekai! </li>
    <li> French: Bonjour, monde! </li>
    <li> Kinyarwanda: Mwirwe, isi! </li>
</ul>
```


## Initialize Git

In the `hello-world` directory: type:

```
git init 
```
Hit Enter. The response should look something like:

```
$ git init

Initialized empty Git repository in /Users/staff/Desktop/hello-world/.git/
```

You only need to **initialize git** once per project. 

A new directory has been made in your project called `.git`. The `.` before the directory name means it is a **hidden file**. You can view **hidden files** on your computer by using the `ls -a` terminal command.

The `.git` directory is a **Git repository** inside your project. It will be able to track changes made in your project. A **repository** in English is a place where things may be stored. **Git** uses the term **repository** to refer to where a project is stored. 


We’re not going to explain how `.git` works. It's not essential for us to know in order to use **Git** effectively . Just know that deleting  the `.git` **repository** inside your project will delete your project's history. 


## 	Git Status

The `.git` **repository** tracks changes in your project but you have to tell **Git** when to take a snapshot to preserve a record of those changes. It's kinda like how a video game will have a save option but you have to use the save option in order for your progress to be recorded.


Let's learn how **Git** categories change in your project as they happen. 


**Git** puts all files in your project into two main categories: **untracked** or **tracked** status. **Tracked** files additionally have **unmodified**, **modified**, or **staged** status. A **tracked** file can have more than one additional status.


**Git** describes this as the lifecycle of the status of your file. For this lesson we are going to shorten that to just a status lifecycle.  When describing the status lifecycle, we refer to the statuses: **untracked**, **unmodified**, **modified**, or **staged**. Here is a visual that represents the status lifecycle:


![static image of lifecylce chart](https://lh3.googleusercontent.com/u/0/docs/ADP-6oG7c_d8VHBJ5wfuf8UvlykZzdmbkmZpq6XDQiP630m-kV4MYb2MHb_DtOvkkLD1AO0wan-DOdnPu-DshmOBooWHlbzpjMVGT2ncpUhJ4lP7fpLsvkSi--dmnqKg4MGUiwstUjeFQVR2Hzq9o20HFwWWggfQvz43B5IuKT1xk-Mg2g8DqD1fA9kQ8WOj76Y6M0zG8ZNHlRLO8Gx7-K_dKwwKDZ4fogzy1upf4uSZH36MYxMvfzIcX_ReRuy2L62ooDDVr9WKIu1VY-9SqD0o6Ir7kvLLtjH-TV_CYtkbulku7BQm4Z8dyQ-9PP_aXH2olvBYusZRA7ydMSvVByQUUaBU1Drgg-LAlikDiFo_4LHQzPf1TM10DFYTEEVvJBhCZUIZ-jUl25ZYCV3IDCPpsZGuygpHNp3k3enVTz49qzEA9OAbp4VozklTTGw_EZ2KIrR_Rvwb-A-WPXdcqGYzymipLEUWRxVEqQN-3QQQTrdZzcb1b41tHZIacMjkz3Dm7l3YX6GqzUoWM-TqdgtxDx22BJz4iGifDcwv84Vxoj6sYGhaUPLhsOyGMcK6PuHpZXwu4GZqlajlo0_TYMPy1GWG8ohiwmKhcSZtDJNzaheKgZslK9Gwrpkbjm8aVvKSXWaMAuNcJAmjQPITcmOS3UPldzLOJGZvCiTuLqP5aqJ_57ARiGp8VkGNaL6kHrUODUNEWg7sL5iZLg-b-NiVaGfybG7L_jW-dljPOG6uMXFEtPseSD1Mi41jYRTvL2lpCAamXd3w8bPnIRf6lU6cWUA7Z7Rv_FLxrkEiSYG9OX1Tfk7WdRTCXrGiuWp5pISIMZ_0ZDz7JwzFGgnJ8NzT5Nn85nMLS3GPiG66J7oWX6Tk5DKsASJlK72SStvltgdRaGw1xKleQWsxrVuppqsTpe3AEBJZm4JZrzVY5Cj-GQjNwhRkCXZZHanqPn48TDbaO7wphTmwvIR8dc-A1SBM-OPIYjr0do6AA3wfI6bJslxaZsF7zY3yTsh_g41xSxIYnWpRM0kA02kUcHFajJS8OglEindlNwFszn0kdA)
 
Image from [git-scm.com | 2.2 Git Basics - Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository).


In your terminal, navigate to the `hello-world` directory, type: 

```
git status
```
Hit Enter. You should get a response something like this (our terminal theme may look different from yours):

![static image of git response](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEBM48WfzxDVncxOYmrFPU_9mQKjDt_SgftS3k8cF09xgVfqiyCcCwxogTXaORpfd5OBveiigJ7qGnm698gZuhTCBoPjatlSI8kzs6n-6cNHGadEH10nnREbMJLNqlKYRZzo9eA3pYGroOfiNQ1hcD4-tj63WCHy8v5Zp8yqH7wbrJmKIKWfFyCGf48FYRQ_LCs3GxhZup_mh0PtvHZdNqvkgIMjOYfkOBMXnqWjLpf6CdzuQDHKdQn07dW6LNUcFoUCeuT1lHJDY1jN8TlAExGp66u8QIjTIu02GJlhde84b8PV_gCfuJe2VbI3syYQsm-T953DGBl9pRvRDvgcWhvrPbFgop4occfXd-7zwAz5l744SYSf8y-f4tgIjZ7Mpib3Cngw-IwsPhPPj4ebWvRJ-sXAxzEY-8qiRrPLAvVfilDKiXHU6GtVq-jmIJJPPhI2ejGIXf3VH8NA7PKdZm6e4Qf0pnCCJF91iESbCR_YPWNY6WNdiIKI8r9u_wdrmSV7XRaLpFIuYD9149vRKUt1KhFlAj7cUsModGiZXFTRBFsAdg7FsytOHaLp-exYsfjgzkiqesvsAuZn7kcuRBCpTHgkaO5xkshLVXJzVRMXnrqEzEzumWXVDr6N-9otR8bwJ0b1X33-ZJpm7WUScPvwQVmIeSFcWDcOTpXEAmkGbs847C5ZASH-e3EOUMC-aiOQTRT2GUQUjeQxCg8ed0n7Xrly2vvu6-n45uHw1eZw0AkQJkW9CWgl79N1zGLC-afPDqniQoViJq6o1QNXBM5YkoLf2BK6ZiVgLK1jP0jLS51MEeVVlp4wiCd1uhwuGKms87dNsqWUFsiD8MSEu5P1voE5p6XntBDW4-V_4g4JtcFdSSGF2aZIWpRu9B6ylFgl2R21dg7s8ouWR8rNiRU9-DXQs1SWpkOUetDmGvtIn4FDIn6Fyg9yIhdnNDvTH2PmIDpChs4MMNt0vRsTooqTQAL3ZYthRTEpvX7M4jqCC7_fFa-veDPe7SAJV6XrPxzGEGImQ16_nga1Ou0YgUjjbEWTa3yLSMesQ)

The file `hello-world.html` is listed under “Untracked files” (circled in blue). This file is currently **untracked** so we’re here in the status lifecycle (the purple 1 in a circle):

![static image fist status in lifecycle](https://lh3.googleusercontent.com/u/0/docs/ADP-6oH-dVsAevBF5C_-s15WLg-JtCHWab-nj4wGDiQRlywEaTGYybc5Jk-uUcMOi9wBC9awfHo7jlQKX2IWLVPlW6CW7EBuD1mL9JMt7IoG749M4C4deLP_yCw3wKkAo0HKdctZIuil68MrhSt9dB9ihfp8BPS5UwvS6WuMRJpUQOzZ0NrVoWqrYBRTra-e5YWjbCZVQLbLTno9YIUa0dTO2a_mFjjSyg3CWm1o_uX-UYXMaZ7BZB5R5bTBsY0y2KWETjE3alDnV97EEoY4SZRXxTAUMr2zVMLOjd7yWHQtNTI3RGcnYTAnExkjrSI_SfnZ-nl7MsiX-2cB57M7LAOqvEUV94KvTTQxxEKU12I6mXav6pxyU2BoTd4XwwVSgaXb5V2i4IP8PPM8_-JTvX4eDKmfGxlgMEi-m7jtbvad9yOF32DoV_6GJz3dlOIWXLF0_tLo4xDa1REEs0GPSPjZYlglEOgNLY0k23slkG4vGfHA-vKilrIN6pf9n73yts67K5xqorhs1MU3LLRJaxM6DTlcqxvJa-_xkFT3TmorykMvPRTgCq9FR476kb-U4Ri5wwgHysDavFLwmNOfFPdLBAmqTBkZnzOeHyDsD8c8Eg7Q3F_pQBaUIQGjxuRRMRKqyu7HeelAc-vYInFb_x6fqvWiPegUKf2xqyeqwso5cxiIa3AtOgnkiuSiS1RSLlViYLU7rVy7US91XQMZrT-wRoyCWyMc9QZ7iC5cKvCPBW66TxZWmuMwvqCb_lz3LGpMIxIut5Fdg5_kwHkvxmNBwpED-0gCciZqHVQjvZS2u6zhk2Fjow_upDtVLJ4BWy0-moaTxK_AGyGdmZEd6ihoP0wzw8zTVfKKeY86FFDUTEYMzHMKcrQOXL4DHVLpwl_e7mg5nLFm0TphAhR-bI_U9f5PIniTeIDnY0ES68V8aO4KUEFPOxO9kx8GORXjeOKzLG0qPUVIV6EoPl8S6UDbWj4CuAQ-rNeVo3wFtxdrkAvqhA2cVNjjnKubJLaYNIitrZVBjL-5QyTg4wuEc_gFNaqzhTpHyzTkf3SBCQ)


The only place to go from status **untracked** is to **staged**. This means that even if you are to make changes to the `hello-world.html` file now and then run `git status` again, the file will remain as **untracked**. That's because **Git** has no prior history of this file to compare to. The words “unmodified” and “modified” even imply that there needs to be something to compare against in order to have either of those statuses.


**Git** has nothing to compare against for `hello-world.html` because we just initialized git. We haven’t created any history yet.


Well, let's create some history then. Let's change the status of the `hello-world.html` file to **staged**.


In the `hello-world` directory, type:

``` 
git add hello-world.html
```

Hit Enter. You should get no response. **Git** usually does not give a response if the git command was successful. Don’t worry, if something goes wrong, **Git** is great at letting you know and often provides helpful suggestions.


So to see what happened, use `git status` again. You should see something like this:

![changes to be commited terminal](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEFoEwl2ADHP6qxuVPPw1A9rPtPyr8zrSc2TmRx8GDdlh4bHpUw6eDv01QaieXFEztQGY4a3TNnRL0fU7oY31_Yea0qLbeczAhvIsLo-jYZ8Rjl4zFLW1QEy3Lz12ayifZjZF7hj1LGe7BEjvE3Nr-tNmVGw5r5fkfvh9_2RPR3JWCxVokutFsZHMKCgqVPHLa-cULbPX67W0JYarFsWtCKGF-3pd6D0mhS6zhEVl2j8Ka9eXU1sCAC-y_4jlosn5-nG-jPNnTJ6h59AZjE3DxIh-bCNQCvljk1WdA6PxcLOGlb1n23rGtT3wL_T1l7dUULqGz2wMTg-WNz5KV58C7NW-URu-z4MrBkf2kadMtpMfC9wdsvyWblqIQXwqADKpPShS2Kt-XoIL39DxT5xBEjEYktnS8Ibb4TTOOMBgATM9HeRlmqRfiNZfPJZtaHaNTOIJKbV4EYBx9T3-XNWg6bI4HRyOi07pseb47FN30TtpLpIFPBffDGiNRzwaG6cII16q8NSfGGc8kKkozX_Am4amZ_jdJ1dBg6avTmtPsM2Iwj4PEBBrRHKY2ttMJ01lUM9fx9a5BxOT5bjcseGQ3zw29XGAo5ezf0ZGpkKPSVdRLJaX1K6Vq2k7ksYKs0S3ym9rAt2oiFCdQl8h_-cVvFjKV14TDMRTllta25BSrN_7injfwhrZZi85__k-Q00H9tGVzM8bEHRUG5K_P_NOIgWr-wGsJ0qjs4AsQYh_MHxWrELzFBx4jv4qldYNE5pjkKaFg7WysgxtUya3EY_pHDUb3kIVziXfRVYHhdfz4LYzb6mzmv7vWx_-IdMloh4_Ujzm1hu1Q_ntjg2aZwy90qd7MOuk3OhK-T_L0fLvmzpUczyX7MfJDV3J3drJj2NOhgeV8_TrFpzIzQZ9HjiYdt8X-ob8D-goJSHkZBMaTBXe-tD0LRuTSbzpXvy9WBvKcPnqwbo7f0V2V94gIooVr06OPXaP_J9XQVFS0YfP6-tX_1evKXzsUKUKH7kU_ls1L8KcTXplWYNkyyplTcm_F0YoXy1oE9GyAjEg)



“Changes to be committed” (circled in blue) means that these changes (now in green) are ready to be included the next time we take a snapshot of our project. That snapshot will be preserved in our project's history as a **commit.** We can revisit any previous **commits** as we please. 


We’ll make a commit in just a moment but first a little more information about status lifecycle:


The `hello-world.html` file has the status of **staged** because it has changes to be committed. In the the status lifecycle, we’re here (purple 2 in a circle):

![second stage lifecycle](https://lh3.googleusercontent.com/u/0/docs/ADP-6oG9YM8xFFkepdpwROsC9I6rYd7y7aj7inLjZa7Q8tca--qpcWAQS_lBPkLF5iV_zvDk1YttybUB4GtLnl0c6I7pUwtKkDETej3YAwX7acsyL1IoqxJQNBknNKhZrL32dtpNAgaELB6yB7E24hoFx7ZmCuqrXpaRWMWK_4WZPxLXI3KjkWqw2_75Ve3ytr8dRBMizVCAh1ROxzJKrPLIqbX6dijXsmoI_nP39Yd2ZNL1DCbC1CwkMddOjxPFf1324m7UfA24M1N3rClroLLIVDqCn_VqJNZziMbXD4OtkJHI-BP6r7KJmp3WDXqVsVTkKimTzrqu6ZuvqViPH4bOGyxVX71Ib5bJvvP5BIGFvHXf_fAEV-2dtOtd5-Qv3fvHGebGtH5s00kSCrGs00P76p-RdylVyDsi28fcssZLNOOQ-JR2Ge9daGWkLA04P5STvXiTNIx-C2M-NpNAauO-MpTtCf84o_EKr6KZszcERQSzWdsiJmWwFtjHse_6PIUVqoMVbiJJLg1_yvuI3r1Vi4Dhb1o5eGnv8SKVx-8d2kfhUnuoAU9ZTV1PCaKy-yoTMw_ZypxCygKZybFrNTlnmZohICBUfvpdRkz4IgCMSIOGQvmQ7gE4t4xhCsI22H6Ir6a22015TLH85bGrHNJDP24RhXjYdXHcBwujhDaDoszZ1zbqMdg2KYCdWwyEAMcAaMwf95vUvjCiOeUgvi_A65-_NVLz_ofy6sDA2qfEW1asXFEXO2RV8INKqPYftklS0GQ5OfTjRkeRnJGHXzGP83gxGSjyqktF_IOZEQaQEstZdKvRHe5vzupUBEeCCrUQDZc2L_Cr0CRqIEs3zvTsPaVUzXps2C2wST2QMskINIhZYI6XNoPWI_zfc7VeFTcU2k1l-gbvE6oArqKVmwimQhEsqP2WVWmzV3IzSBxbya2479bumLghespMyv8ixOYiAmP3ZybEuHu25wXYZwT7w5w3XDCzARHJvzP66OFzM5_pNMSUQHqvttABSf1jmIgSAG4GXawen214jmMM8xrUqD8wnwTIsLuWvJroyw)


The tricky thing is that a **tracked** file can have more than one status from the options: **unmodified**, **modified**, **staged**.


To demonstrate, make any change to your `hello-world.html` file at this time and then use `git status`. You should see something like this:

![two status file](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFc9swNgp6YY-dr9m05ZymNkcGSMtkhV-yacHcJcT6KZ7iG3CtEdQgUCBWydyj0j7L76sUOJ9qc84QhD20qnKHNsOOvZNhOO2btnTA2Eb3I1-e7GojrHlmnKmepy-D_hY1oz6x01v9CuQ4CbCz-y3jB3_9_nBFrEsMPZjKKgUNnopgMLQWa9WnlzdmlPZEKCdX7tAN3wFjjHwVKQipHs0_awnJ-TvdzpuZIOY0IzwDVb26_1LXiRBpNkCBdYeT4fGPKXKAHI6Kge5XGyEfS1E_KQ0__772A9zFcscE92bR2OmdPcEG6NGOIk1BKKFquHh0niItp5UZzyo2YPG1YP2XcemmVf84HW_jGHi8WieVx5TgHa8BMchMl2e3BVcbHZK9bfp4JyTBPoEnepKlXpt-kIYBOjOESAuuZ-rBEQINZmDs4caHdP2QkVVP4XyGsgYtOIf6bzvSuBjrfiRcADAzfpVWUMmABuLkUQ-r11j2dkdF6zge6jzQMCVTXW5ECF9CP1ILJ493zPzhbI9hS22MrRTUIk2-Ll727k2q6xjcq3NcVaOclUwD_uvXPZcABfmtcknD1_NKoymgXOnfmL1HUUPBWC2oi8yGoyfcwUwWDPXLQ13P_ufeBrUt7NlgqQ2j3DaeIqYZSYwHGNJdLzohKpTeNBb3undVq4Z8thrqk_LGBtEdo7VRmYVyYnArbrEGEZw0M_nH4tMyg0Bi3d88cTxkXPBYGAz-DmxRN5bl5BPRU0aE9Mr2GEJ1XJQvq0QUEZvYKlwlzBduj8L0LZkM2OCeD045ht1CNtUvKWi2qcHzwoNMl55rjCmvLS-iH5NUwC40YnvriYzcGWFZaHVS6FbavRq0yUr9BTCd5J9uI15HdNUggtYq36Wx6tFAOXN1BFEJJli_sbMsyMPtvPGerVuENJxGNuYAJboHEZMXJk4xShPBz9BSBSJkTGAqqO18c729hpUV8FMzRZIrDdNcLs30smX4IJKGfGsvoWKwI0m8LoZqPZg6U8nVZXXvLNmuse02uCERWJi-F_-VFtttlCCXAX1Lq58YVQQ)


The `hello-world` file now has the status of  **staged** AND **modified** because some changes are **staged** under the “changes to be committed” section and the other changes are not. 


In other words, we made additional changes after using the `git add` command. **Git** will not make the assumption that additional changes to a file should be included under “changes to be committed.” 


This is good because we want to be the ones to make that decision. We don’t want **Git** to add changes that will be included in the next **commit** and preserved in our project history without us saying so.


Revisiting the status lifecycle chart, `hello-world.html` is now in two places (two purple 2 in a circle):

![flowchart in two places](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFnnOweZPHOMbcqAo554eNG0soXq1thjY-RyzjAZ_jezKUZ_2SEUk7hw25OtxYWQX_86TF0DhBsmtU25vcgg2uGqFmijwZtiDMzXELWqmQZmed83qcGGTbHvOjzvVbMp4bB1zmp9c8-wqJRjW69ryAYfU2CiWLxtRGKxZ_hGx1UfIyczZ7AcnzK5UvxZFXF6bPjrXYoIdjg-sIfiQKMF1sLEaDUf01-9G7fDc4lue-ikBJnD4_s_dB-U7k8q6pVW-tD91kSfo-7zoAhqSFDjENziY2F6zotGQKqdduHjtVtl16ncVL2zDxWiW6Jw0IuMevM8H4Gb-Gj0zf9tXBek6cXR6HRGEAtck-5KenIxsvVcUEkwk2WahIrvlOgnLy2pxQGKuPCErqyrt_l18iDsB5uv0k2THtOIDSnuPtdj-d7d8ehDDgW4XcYJprAhgen2ckSqXm20XUx6sBdIU8wSQBE2_Z-tjZVC5EtbUqd4nuJy4gvYyx7X5SWly0pBnQfy3dfvFDrmZuP4HNNdPVzsDWot_K9ncd5_3LkDfU6vRiukM75KYcQxRQ36hZSvBPz-LGZ8utLO1bWNVdutFEMa73cEJCMVofc5zS11IkSPknqgLd0qMjXp1-Gl3yulwteiFcGmVbXInLtv7dBtbSYUe6y0LlQZrYzBtHtatxhZwXn5vhTcDl6IO4EBT3RxYMXITIc7mHMHu2zxa5D9K65OqFDPypJPk0w1O3PW41M5LNxOfuvDbI5ivwiL0NMeT6EpeV8HcVDmgEN_mrQrpG2SZRZXupPjbZ0OjYcIHvj1IzHH-AToVUIf4etEN74FSrj1KTVMzvii07miAosJRchfDHotdtQVNB3qCv-0bazBx6THR5ZKpyI5hIA8vZ6HtAZ9lXFEqxudhSYT_x2svG9AREcVfab8VjLW-p0h198MN2fJFoqZcUykxopkLBKMY8TzgPBJKhFOs3TiNRlaugpKX7mQXEkrddRm9WzzSu2pdYytbRwu9jqma_FJIecQGgYrb0hv1QHi464pfGXsXAPZlXY6qzMAtbeyz-cUQ)



Now is a good time to try out a new git command: `git diff hello-world.html` This command is helpful to quickly see what changes happened in a **modified** file. 


Moving on, if you want the new changes to be added to “changes to be committed” (and eventually included in our snapshot when we make a **commit**) you have to use `git add hello-world.html` again. Do that now and here is an example of what it should look like:

![git add all files](https://lh3.googleusercontent.com/u/0/docs/ADP-6oF49wlVK5PBpgNBQfC06Uq3kwndwYZGUbE_bWkOZvHHYqsTB1BlzvLzsqENj9Ix0v_8PlMXzLrTCIub7TC0ZiXaSYFJUnkdEqtu-gORfgIn3DjctLz9RctgYWC04noagC4dI_euaqe7pOX1pxOqnTWf-8DU1l0wRymcNVP54f8D0b2H7Yuz6tZczn86b0lt_3u1_BG7oUPCeO7eKREevIt7cqg97cJaVgp_N-VrN20SEH7c-uGhFC4P6l8Sx0J-dkJSxLZTpY_dwP82YtsuvkZink6RbPs0I558hCpTwC4UhjZE-4kWdNpKnS1Vd3EaebuRuVm4Z8x2ysQBgRf32_hWTQwudsOQA455QBqpIz5Jse7aI-lY0iTSVCHulBEN3CRwMFnSHahI6vKRprFKN7XF_n8CKH2WRmuqDI08AYFUsV5J5O1Ive-u8FLho5gUVjrhe3LNtOeFVtS5WXhwMMC3MdqlCuAK_SkFNzo02OMNeiP8j-JsBXnEMUoo3qhWShiGWdLm-k9rCBoIEgQMMZwG5zWyD_hUwCJpYAFPqg5lXKGc4hr1lCBXupFnfEU3JU5fgjG2LcSIGAZoqliGFfncbvy9i7b05nu7CJEsn4krtVEydfa0FZIZbkTDdBNcrPJa8yW9YRA7XwHT4BhFvI_cimORSMKEC9l79eIJpBnxVwbl6vEkSDFvf046I_ee-Y6dxO6G2wgUqhmUpuAm7Pa4aRiNH5S6dX5C8sXUCmt_GtEifpWpsvxwDvBl6wD9U9Afidso-PElQYdgjny_WKX_F1DVEQPPT3ORqRCZY_cgTVVTT2au6TvKY1T7E1hF8VKI5JoRbWsQxoRMVb7lHNuf6UiH0rbEZU3-CpzTbCyvICPdGjG5-TPy_i80NnSLYNt44E7-oBp9DRKHJwNGYud-FOpuXBNGu9fAurjZMoGxK5GIcJN6U0shKZHGE7soDW7cwLzDSNYW-iDa44qQWvKl424_M9U14O3My3rBRzNjh5xE1-fBS8cijfFa_eaBNfbaN70j8kJ6rWjJm6mZAFq8VDB03t8T4OoVEA)

Okay, let's finally **commit** our changes so we can create a snapshot of our work and complete the file status lifecycle.

In the `hello-world` directory, type:

``` \
git commit -m “my first commit!”
```
Hit Enter. The response should look something like this:

		
![response from git commit](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEs1xx9KYAuo9BBOVEVj8m803SfCYAjxkkFg4l-0gtwgAwVoNDis03T2MSq1C0KWMvFcML6PfJdghrQR6izT9ICmdXPRwPPq5AR9uyL_WxG2YyoBFkvu_s0-er8dh6nbUyYusvZcop8UJZe5Fsy_mc8P_4KGhaAxHqzzZsHHy_ri1qrqyeQiH03KUeAkJYD13thU6Bnrpl-ESza2s1EbH-xDqlDwmb39aoVE2yeQrf-XWcM0yDJsQ_oy7-R88Oz0eap0c_Rlc-hPbIfcfmTOpNRPIiYo95PEzNutsWUZxkCtFKzec7lnYKR8mcbXiz_oFVLDwD3BSq2STuhaWJc3gwLsDqCC2uA_B1sPm00Gn7174KB9YxKH68hC96_vAZl7YZwNN1sZhPRiDfJgx1w5HEQjE9XCUa44oY9uDKCmpwYziceCvq1ptc8r3BX3qeKVYa_UMzpoXoSC5epPJbHKdK9ECy14UF6Ez6_BZ8AUqR-8pb1RxtZWbxLSrD4H-3eXrslPlx3BpeeDk7i3Bi57fTxzbglZPmEhxBMF_R6PqIVwuMXhKPT3UIWxwV0O7QefINv7t2toC4R_dwO7NO_dD1GP6XS95TfougkJeuwXUgjB7v-fQ5UMfOWx0qMv0Qp1SjS2QI27EIUh1QhV7w6B095h1lz2Y-9QsYXBVU-DchaCvkKFyTOBfLTJw4mEP8lKw57WQQPNksYCttuMkzIrLSTwiNzqpIajx1WH2YCgf8nW7ixKWcbeJrUmohQ6wvXdiv3FDXg2v-0emLrjxh-wSiwfvfPDoGps_OmuxwudDYIPFk0uNzDAiJ0I0Ww9SZFSRsGUvDAcAhtQ70R9ouXYM_TNodEfToIk0GmyAEvU5RTALfe35Y6wWT-PJqyel8dZZdMD7Ggw8BkwC0D01sBLZG21iFDqDfP3FkL7rcVWPxaiTzo9dKhBzBAxB2o_PbQjr4FKWyn-pI3_7n65B4rars-LaUvQh4Yte0z6pv7YozXriKfmFloBMF5QPaMgGd9dMAJpzl3v_ETMTIuvVMGkIcS1sc6-J8eqET8Pw)


The `git commit` command takes a snapshot of our project. The `- m` option stands for “message” and is followed by a **commit message** in quotes. A **commit message** is a brief note attached to the commit and it makes it easier for us to reference the commit at a later time.


You can check that a commit was created by using the git command `git log` in the terminal.

Now if you use `git status` you should get:

![reponse no changes](https://lh3.googleusercontent.com/u/0/docs/ADP-6oH0BgJ2Xz7NFtrCq8RWkRcb4NwjiAzdU3DHwiW9F7gMrmyCQoMOyHAQvDnuQv5yVmp2aLuIohzADAWMUBNHknt0NzV3wB5IbBffgRRqnhXdTX_LH8wAooNQYmBd6IHE_8ZoPuoDxcpUme-AuKdw4Sy0-wQBkpehnUgSQW613enlXEJF1ckpFrqohJHMdJthdS5y29QrXsREEt6hohdpIYp6kZsxKRiDQywPAgkMOPAvWP4EtR5-8Gn7uYAqqRTGAmqkEvQMEBs2iHXf8R5ws4ynpZGtvipj_4QYn2MIKgfccGtCVlxeGBk_s0eIutP0-Eh_YJW8-D3zPFJnQlMpf0Oahq1OtpIgisnLn7o_mKtN9_IDyJUTJ4yZrXfndHQ1X2IqRVwYAdRiQPhlxZ0DnImZ7ig2JEVaEHDq6yEEK3J09f2Rme5lJ1nniPLGQ_HtQYuxarKgonwa5yx1ssRbznxlH548gKMTO95n2HMfUpgcb5cQR6mYvs2hH_QZ029tmln3Jtk4wSIVJJRZsWUFZS6pHpoqN0gqt2woK7WvFsvHH1ZSi1LKnDggmLoQ8VTsE3I73dAlLwJ7PNiINwJpUQ2jEYse7nOztODYDRoMCTm1j6LJmMXYlNXgxV3khvQVxBtH7SYQV9LM2T0tg3A0Z-8wj2deEx9wtovvmhidQeh2PL-O7y5BrsbUHnF5U6O-sbb7yAogq_Yy7U0bLbji_yKSyWSisUd5aa5e8I5uw2kogeLQrdSOfXf175I2gqVf4jBe4emqnPhWoaK1RpbFoNKKjvychCM61zFDQMoISXIYsZYnTuS6cMYYwFzu6nwAOL7XaNt8SMmpm1WN11KNdOME3EzK3X7nP8dF24FK079TVpz9UHKmjlgTkeF_jODSUcrv3JaZ8yuBIGcnTngcJJGL9wCqMuRQn1kmPDXuu2tM4989v2UHHaGqK7vDEABqxUlWInq2fu5_YKzwsZGKoQHHGTkKQMiIm5XKjhKj31WKNFzrNM2Z4k2h_KVO1c5_-sZvwsk1BnOQXIYa2f2vooBjUOK0Tdv7tc-T8g)



The response doesn’t say this directly but **Git** is saying all files are now **unmodified**,meaning no new changes have happened since the last **commit**.   


If we make changes to the `hello-world.html` file now, the status would change again to **modified.** The status lifecycle of a **tracked** file repeats between **unmodified**, **modified**, **staged**.

![status lifesycle loop](https://lh3.googleusercontent.com/u/0/docs/ADP-6oHCc95R9beg4P9l_ie3BEriw9zsfxmZ4dY2-08ayxswU3gc4d2Edht7JgvQDuBILnfRf8tpAt6o9fKGu7Tk_ZvfXChLsDO0mAuG-p7YWEuAaFhfp83z1vLvGYCBkF-Y1FJ8si0nVk1axOXQlL3Uv03BABip8XWsOK6JoGRwFcXkeqOQgzgPzKAt0ccWyZUPzmBA0fjWiobDEyzYBMcllAQFVaDUZFL-dQvR5kWYCX1qhH11BxN8nML4fPYFRPwaQ2iaWRXWGobObCC4P44ZWtdI6uZuhKBUYl2FCA4cM8djYBiSbInXYaii_o5Z49dh4TheKA72ZgzbJ9JQiYblu0sFkLQ4xnX6YJviPp-lp822UBo7MZZ_z4aUsY_oUZnlB1O5x-mT9JK08SDnyNGMCZSxUfUk8JPuEtvR0-POOuWSyOR5ikUdYLS4bysRiqOju7u6Y3ypYqSGe2r133zMYsHbUYkV4qaFGWL8UCpo0bpmQLXbStz1TmvayRovzWT_3W_HMl1kDivwRufiukwGr3xkAcGzYzuItJZ2nv_ITjCeC5EzZVB0MNpBzMh_ZBA_MchejXWg9K4OgP5F_HybnIr9DrY5O0fiWR1JFgoUPVCJQw11XORAc3jsSR8iDymZ3Q76FUc87KiGhlzaTtqCz7tjv1SDtTZXjdIbVFVorjSkVn9LhWd0c2l9fLUc3OybLspnfFH6qOLyI6WVunofKJrVUChQ8uw3XCpl5GeieGFGF08Z0gmDB-BliGq0Xc8fv5dMj1XZuNYFnblEaFcpWt73f6a8o9rho8mvGzO5F02M3H4FQWPF91dmcsLy6jVtVuKoBZP6ima4SVSHeDwZtAjyPz39yV7GPFnXym2UepxRflYrvIWFbTbn3Ij_qpruk12HQjhEOu4iDWSw30f-IdTAgOZoms9c33p06ShghKxiwyzVjPGXs1AyM7RLxiwM2WFxocBWlX2ybqOm8W5V8PWzzr8MdaHJcVsYIyEWz9hx0bAem9E3nfKa3gnRTPEt7Pgb0MvbWDtpkboFNRWCzReVgQYO4Hue9PItkQ)		


Remember that a **tracked** file can have multiple statuses if some changes are **staged** under “changes to committed” and others are not.

## Wrap-up

You should have some understanding how **Git** categorizes changes in your file and the status lifecycle of files.


Don’t worry if this isn’t all making sense. You won’t be tested on **Git** status lifecycles of files. We offer this information now so you have some context for how **Git** works. When integrating **Git** into your workflow, use the command `git status` often, especially before making a **commit**.


In the next few lessons, we’ll go over a practical use step-by-step guide for exactly how to integrate **Git** into your workflow and what relevant git commands you should know.
