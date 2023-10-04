---
title: GitHub and Remote Repositories
id: github-and-remote-repositories
slug: github-and-remote-repositories
hide_table_of_contents: true
sidebar_position: 19
day: tuesday
type: lesson
url: >-
  https://github.com/epicodus-curriculum/intro-full-stack/blob/main/2_2_github_and_remote_repositories.md
---

[GitHub](https://github.com/) is a website that allows us to easily store, track, and collaborate on coding projects. It is an incredibly popular site for developers to share code and collaborate with each other. Your GitHub account will be your coding portfolio. Most employers will want to see your GitHub profile to view your coding history and recent projects. 


So as part of integrating Git into our workflow we need to learn how to store our coding projects on GitHub. Additional benefits to doing this include:


* We can access our projects from other devices.
* If something bad happens to our computer or to the `.git` repository in our project, we can retrieve our project from GitHub hopefully without much lost progress. 


## Overview


Git and GitHub naturally work in tandem. On your computer, you have a **local** version of your project stored in the `.git` repository. GitHub offers you **remote** repositories as a second place to store your project. Including GitHub into our Git workflow means we need to understand the relationship between the **local** and **remote** versions of our project.


### Important new terminology:

* local
* remote
* push
* pull
* clone
* fork
* origin
* main branch


## Exercise

We’re going to take an existing project with some commit history and **push** it to GitHub. To **push** to GitHub means that any additional commits in our **local** `.git` repository will be added to our **remote** repository on GitHub.


For example, let's say you made two commits in your project on your computer. You then **push** a copy of those commits to GitHub. Your project's history now exists in two places: in your **local** `.git` repository and in your **remote** repository on GitHub. 


You keep working and over time make three more commits on your project on your computer. Your project's history in your **local** `.git` repository now looks different from the version of your project in your **remote** repository on GitHub. No problem, just push the changes from your **local** repository to your **remote** repository again. Now the two versions again match.


Where it gets complicated is when we collaborate with others. Say you’re on a team working with other people on the same project. Everyone has their own version of the project in their **local** `.git` repository on their own computer. However, everyone on the team is sharing the same **remote** repository on Github.  This is intentional as part of how **Git** works as a version management system. Say you’re working on one task for the project but you can’t complete that task until your teammate completes their task. Your teammate completes the task but how do they then share that code with you? The answer is your teammate **pushes** their changes to the **remote** repository and then you **pull** those new changes from the shared **remote** repository to update your **local** repository. To **pull** means to get any content from a **remote** repository to update your **local** repository.


In a different scenario, you can also **clone** a remote repository from Github. To **clone** means to copy an existing **remote** repository to create a **local** repository on your computer. Similar to **cloning** a project, you can also **fork** a project. To **fork** a project is to copy an existing **remote** repository to your GitHub account.

By the end of this exercise, you should be able to:

1. Connect a remote repository to your local repository.
2. Push changes from a local repository to a remote repository.
3. Pull changes from a remote repository to a local repository.
4. Clone a project from GitHub
5. Fork a project on Github

### Requirements:

Required you have a [GitHub](https://github.com/) account created.


### Project Setup:

This exercise assumes you have a project on your computer with some commit history. If not you can revisit the previous lessons on `Git` to create one.

The examples in this lesson will continue with the `hello-world` project started in very recent lessons.


## 	Create a remote repository on Github

First thing we need to do is create a **remote** repository so we can later link it to our **local** repository.

1. Sign into your GitHub account, navigate to the “Repositories” menu and click “New” (Your Github theme may look different than ours):

![new repo button](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFYeZyx1Hey0dsOTTVbNQLnDDKimpz0L09ulw8Gog9xG2IPzEtmFCQUIOs-ExSpLXm7noUeAxiDyqGNy93mMCkeS5WfJYHwtnUZ3W1k8rh9uYnWx0Y8ejkb6sq8bupF2k7NdteXRdFuqOVluvSpj9-kd4Nb1Lfi_P5HdhlArdmafvTNCMuI4D5y37G49ttruViPTQd9QDJW6naHnWsopXTFoxv-sFTPB6Ha-iv9WU7MRIcmuPREGI_KB6Uipga_DDcuCKOkoyZFhLNRdStuBhBxOK7Sz7491bQC0QP27hnMZQhOa_fRQtCLkAaD9JtoqFnE2a3Uk-wS_Cj6KrPBrdKrkcyO3L-cLdepOsDwlR6ooGCEZfSVQ1Zydf5wga4QMbC5J_tc9Tbm6k3yvdaKZYYTNip1uRpGn9LCTiF_qg7-l30eNxTjZrxtsWKq5O_F2xo_HI0JQDEJuGKq-Jt4GYj_aRlzKKKpHNDRYu50_ttMKWD0lO76DZtqigmYtUeYoYRtZafs8xib6iB2mbNdz3JM16qsZC0SeOr3TTKHZxO4ka2PhSZHwgaUZiLYq9lFLCKF6Hjw3J-QTVN4G5MOE95amJ12Qy7CmZC8ADEC_QWaZORb3WAYTKTxA1fyLfhUZ2m8rEy80qu9QjQlNiT18HadQVLaKPr6IRy-ctLrgnpP1XQ6QttOi_ZR5za4u4H9ou1cgvVjeiYpBgDvMMBaXTiS3An_jQqT-tdD9Dl6aYdY_Ee-HIYtaUecFAUuuRVxmz5jErY-U7i_xlPB8fg4e5hv_iXjWqaaoTmJq0bQ-4yqekkiMGtWyjhXCZheCZ1b7eYKTZmHZhhRTnGrjMoWEBiHu7xTaiLw032FTX7hEAJk-EV1cVLwfz1V1T1-TWjgVSRTX-8PwAEtG-5c6MOdfffN3M_JTfvqxAQuf6B7NEtCzcinHBDxDad6mfce2P6zhT9oHu8M3R02zEHvYAcV3KmYki_v8LgUtY7HtCZw6DNbtGibZv1DXZMlN_TvnGRxQFU5LwjvMsw9HuEpmx7YSy8u2g_S_yZXodREkw)

2. You will be presented with a form to create a new repository. For now, all you need to do is give your repository a name. We have named ours “hello-world” but you may name yours whatever you like. Though, we recommend not to use spaces in your repository name. Instead use dashes `-` or underscores `_`.

Give your project a name, don’t touch any other settings, then click “Create repository” in the bottom right corner.

![project name](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFU2KNPmQ_N3cPtztxQG4lyqGO4TqbkgxHNsygzMnACs62wMj2xX59hxOChDAMP0dxMOjGO3_3QNiIbXBfKFVZ8IUt8dyGBwdzIOC76J5X_rRiVLVNE1WPfRbfWnaostQMS-DTwXZ1i9ez-O9UxCXq_W9tHsGMF9JRFLWkZFKdYORgCZE9t964i7SQo3jmShv0-SlEy6LMAZt5UUH_o9-i0YHvkyfFFer729oVGRBrA6ZJaF_39B_4vaju13HjxHtwthUT8jiGAD4gfuj_wmSPR3g00LC7z4RNP4O73JVBl7Am6IwHZgyZ1fFbpVjLf_zqU7NdcEOGuXMh13fQ2G57FXpNqLQy0xW83aaZPGkYeOgqrdciYT0wSjVnrPaynsdFpplvYny52S0QcWrFb6hmwsNJC3U5ONMXDsddBMxTBwwaASOCZOEybw46BnNzmdzL4PQk3RIIR1U3GAQ8M77IWOrxmkJeOW1CduXPCc5Lxn1FKAJOx2r5Ye47GpHTKMHzOylrstFyrwq1lN2OzyqCDVKjerZUbgCln-9aCGcmnRMdi5EnnIxrWjtVJwj8OtXbXGnmjLFQ1T2xcYrrppPHNuymTQsyugnt3pyUHquBNwJGR1jVpMc1xjQ5wYhZzT-p4WhniLuBwKI4Xgrarrr9D5bx8HAIOZj5jfD1ylF0M2scMUCUKesGidk82AZBsGSz91TxvVWsmGeedKF9CXmDd06l8nNsqiIhwmJj_U_ke8tOfVyX9ndi-_ZQa6Eo5ddwnMLiEW7L8WUQkDwhTNNi3a2KH9CcS8AGh20a2CAany-phszqzRnhez-LKCu0SJ_KSkAUsJw7e9WG2RGBK0qW78z3TM2n8srCTP-XUR0EJVi86yPz23UB5em4TCA9pqIaJ9aII8qAaC014JMtEXylCuoWQ76hMPCUMd4C-NVmpqb4eudeRcvIkS4SQaCGrwEXCLM7sMtOwr6mN-K8dICo24W1Td86P_pe1CRGv4U79G_UJEff8BfX6zVSMmjw0bBARO4eytOPQDIXMoK54mt92iy5HSalj2fAV7w)

3. At this point, you’ve now created your **remote** repository! Your **remote** repository should look similar to the image below. This is what an empty **remote** repository looks like; meaning there is no project stored in it yet. We are going to do that next.  

Copy the url to your **remote** repository by clicking the button circled in red in the image below. We’ll use this url to connect our **remote** repository to our **local** repository.

![empty repo](https://lh3.googleusercontent.com/u/0/docs/ADP-6oE9DikDTOkUQHXN3lwSQ9jTfeAvCk6seIA35OEurbGCku48NOnyjzrilYA4Z7lzffIFtnUO5pmEqjQl7y1AHnjIRdmArSJ2SR_icu3DfXYmjBoGtPTYBMhWsg_8i5NFDkchAJ5c38sddxJwFUm0uSCO0OYQOrFhgCrS5OqtCDlQy5oZS_YhGBlcrs9ZNCTv7Udk_WLXFB5ZjCMzR1TK_UO5PQDAU4oxKfUZbnNVoLBI9oIB4JaHUoRRJ_UY06q8lNsYcYpGw2sKXrnQk84V4Zp3XawP4yTK_w62iDp0UTa9i0xcAkG1M229hST04m8nsdB2sTVTNfbcqVlLqhs7GpQnhkRlCzDnzmtE9lscjNVgIjr6EoK5tHT3BNUNOuWCnc6S-SEsbobEW7Iar7B_vYbMYdJRxQ_kZt3jvpyTczkSwWUwKFCwU04VZUQDCA_lS7EV1RYWmNEvo_Enb73OspOlSSRC8fkLr6u7SVL_mqWAU0I56EOUcsJx2-l-glQgIzYQLiUGfNDWkMvzgu8__JRXfahc13Vqq7E-es4WN0ftUZIeaLliOKYRMlFmGSGOZge_g_oIGlPFP-tH4Pb4DtGMd3IUNCyeC78040RgzQKfTTWvNKs_l89Wqtnn_2lqZrbSh3rUngJDAQK8QpY4SqDv7uSSkr3R29RhTqNqqgYJLve3nOSQBrmMCQ3wctPQVgtNrBS3ZuXvmu-uzBek-nUE0DURR3PgCzFhvSHMNy3ol09Wsa59E4W6F_wp6z5Yfe7sNuzIMGZW3ZNGrmvFz1HLJkITHCLbeC3zrLTImLXL3x8lCEz4bB3ZqwtzSU2xjBsmoTQTmgaXKaW-Ajp89ag3T4WjFXwTgSDPoYzoYoKX0h2AlECIDN54Mojvg3De7RvZQzlSCHlI-jAPR4suHJngzXUIbxLvAv_BE4PPXIHXc8Uv4eqq9k_j6pxhH7bxECPVuZTlBS2aCSdL8YH61FHwVzJ4G9uZjcHK0owTAmB1XDL_-uxlOHv33weQQnRh3klXrKJ0Lv10g_OrAY3qxD-V1fxzlATaqhyIjA)


## Connect a remote repository to a local repository

In your project's top level directory, use the git command:

``` 
git remote add origin the-url-to-your-remote-repo
```
![add remote repo](https://lh3.googleusercontent.com/u/0/docs/ADP-6oF8YF2CwheWnE-YFiVXKjzEFRy4dl3ldMSf0VFlNYl_CMIckVcz_aU5MzVH8mpTMt-2mwwWTalUPCqKPm_jbW5-H3AwM-g0jVGjDLAuXRX38kHNshU4FwING77gqCBAb64199asrtzOlGB2H2uFWJo3Tbm1IUO3QRa9ddVpJXURWe25HHvYzNH5dfpndB8gXw6x-sFWDYjYCZf0bmE44kbFQ6KcCy5CWLaDS-n3q-nwXXHONGxi8Hwbzl3iALNZ-fRm_r0nh-nJTO3m_kAO_g3JeObTP3NwEvvHDLk0j1fO_pkzbTGog-sNgyTaKOQpAsO2noTG3rdox8NyfWbcugdXrpVng8LgI3pSVsPJmFwtKcVC4MXOAJtkk_ikmm3JCqNdcRJw2m4SEcncP6cQvZ63NZs4qNwZb6TXulng8qrb6lNayy7hgwqA71-KOviPiARAb-t1EBzqUW3T7xolpzCEqaVEZNV1F1A9bagZB_fDPjCu7Ke-wZlyXAabp3tlf92d6U-n0RhoU2FG-kCTyzwNYUk4BrAbKApWXlJIfSE5U7WSeQTNsZ18NVB5GMQW1c7PFOQTeJY6cHJ_A_Nb4qMELVK-LszCw469rXF2hehxvGxVVb1trJ4bV4Dv3wqCrV6xMgJDbQj9d47Qzav8z7ZAGABiE6yHrbVZFqOmEtbzSEx4eKqZoZXXjRt-FW1QQBZ6APv9hxiBd439DFMs9ysh8Q8sswV4Qi76UW3eKqMjLeMif5VxutBZVInqBAhWhL9YKQIymHzSt4l39_feBPX-IekPHOWQNPCX5NjNUiFLwv8zFoTPQ3hQKREsS50UuXlADR_iV5NRaPe2Lhia4iZdR3ipgJo_PfxJxN0Ijb8uIjtx6ivv9-2SyFwkWxsUea9-dt8pOVeLrAMcbUTllJP_Rywjknu_2hdyycddN2jowALu5902R_quzDGeOAttp0g9634tGOOWxBv4z4ztcM9LTE5wQmMwNA5N-JcsuLt9n3EaAjI9GhVPFLkBxkGEofn7cpQCwKPWmHCi0R7kFqTNAvNF-Ra-C7LXBg)


The name “origin” is simply an alias in your **local** repository for a specific **remote** repository. By default, Github names your remote repository as “origin” but you can call it whatever you like. 


The main reason you may want to rename “origin” to something else is that your **local** repository may be connected to several **remote** repositories. This often happens when working with others. Choosing a different nickname for a remote repository is as simple as replacing “origin” in the git command with something else. For example, my initials are “mtb” so I might do:


```
git remote add mtb a-different-url-to-a-remote-repo
```

The results are:

![repo with initals](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFyJHG-hp7cVag4VJKV52fiC6TMiY2CGPjLab9mu7wvU2Feny0elLZX4T-zFUfUU6uRyBL0eVSDrITlr4VrxdzqCHuPdopdQnTdX16DDO9w4Su3aQqdjzH84yk0I-orgCWFipJQyM9HyUtZ4G2L3zlOCOP2-_1YwR9p8cYT4I2jdUyUQPo-C1Yc8XSFe5xSgxcqXVapkBxUJ4Z0I2odlxQsegkqHTv2kcFrvtX5Hk7Q5NjjcYJbR2gvQCYd2dxdzBoTYd80ugfW_w8xPsvqn5wh3iyiODoytFuHJkj2zHapzS96BmYRpDGnf2blKHBUkkZC3BgpfOlweOPO5FojABH8JTqDturtSdJKJfMsK9SRD5VL08IFeJ21lh26iIi4v47cmzx48R8e_sMbjF7E8lR_A1I46HBTawH5Ro0W5Kr9INQsuNjODzW0U2Lo2wHpsARgIYFtQclTdU-QPlclW6pw6s-_FQ9SygRi6IaZFgP2AIjKTOpw2FS8zZJ2eqSKUf3_lB3TqX7UiFyKC0xZdM1FTTI7WCECu3QR4-uvhHgU5sxeb7R_3PWnGMzwGN-S3Kxa9VLJp3o_VPpM6k6JXeBEalX8oegMyESnKq-XV4O__iRZ43LDrt3vGRXenDpOrbsH4JgM-YxCUE7ghFvbgnc_k4abLSjNdCoCQOEzbwTKbvMDhGUimpI9z05H9nQAI7a_qojJEMAqxXWdS2qeg--nxHMiF_WTuuxY9m2LYXTUzs6EGLM4AXrGAfpzNiXXyc6EGwd7znz1Nd00Tu5_7EmRN-pT3aUIQg00xR5xU5DB_VlkoiMFMcPUN7x9qPNAT_McMGxXPu44DvocCg_p78J7wwpPCNoLg_vFFDJC2XM22NGeGLdJm_kj10IMOIkqh_R8m9GHcjDVTun5xbVHYNUZlVLLrPpYQzJ-nypbdw7OFW0FO3HjSF0tU1oyyGKcWDSGKNVHz9lHaO2ZP8wjBZ1NydQ33PpuaP6MBJoZMd9UpySKxbekWIjlkjgXt1eG69xeSS41-i_KognPnAq98-Dw7HmPl2YbrA0HJA)
        

You only need to add a **remote** repository once per project. You can delete a connection to a remote repository by using the git command: `git remote rm nickname-of-remote-repo`.


>Let's Pair Program!  
>
>If working remotely in a pair group:
>Only the person who has the project on their computer should connect to their remote repository at this time because only they have a local repository.
>
>Everyone else in the pair group is working via VS Code Live Share. Everyone else in the pair group will get a copy of the project in their own GitHub account by forking which we'll talk about in this lesson.
>
>If sharing a computer:
>Talk to an instructor about how your pair group should proceed. Epicodus computers will require some additional steps to set up your local Git configuration.


## Push to a remote repository

Before you push your commit history from your **local** repository to your **remote** repository, make sure you actually have some commits to push. You can check by using `git log`. If needed, take a moment to create some new commits before proceeding.


In your project's top level directory, use the git command:

```
git push origin main 
```
Replace “origin” if you are using a different nickname for your **remote** repository. This git command means we should copy the changes from our **local** repository to a **remote** repository nicknamed “origin”, to the **main branch**. We will discuss in detail at a later time exactly what a **branch** is and how to utilize them. What you need to know now is that when you **push** changes you have to pick a **branch** and the **main branch** is the default in Git. 


If successful, you should get a result like this:

![push to main](https://lh3.googleusercontent.com/u/0/docs/ADP-6oGiC7E9BKcNiPKj669IBpbCd3Z4DCnU-v0axJdysLGIslZP-Tcz14GKATObDESFK7Duk2q8g6e4ULqEtWBHzKEtWE1QDZ52iQNMYnMK25NI7ZX1DDrygSy5i573DJPIwxely1XnpKxAZAgpl7rCduW1d_7jNlbhEQN7cTL1WAI9k9u_mH39aM3OsZsUy66SVseKM6IuUVW4fSwYRdsXMVJvvrFmxEiMpDhxBdkueBSHXnC4U0v5FidU4UMpfpaMkwPCLmtlD4gTbOPId2SblwZVK9lXY9kaqPvesNtsLC3vp0vQaZ2ZC2MqUORUrRNsyh_cxD63bRlJHDkwQyNx_IkjoPHG4JaVhL3jtZqg2deyB-oYatD2eGBGmFZAaanm-3EszVWzYCvo59XfKyHH3nr8jZ3C7Ui4Ofn0yV41AVXfEH0hX5v1ZA2BqZnjoELTGHKloth-pfM_uV40fhVGIvZl6qzssNQsyQzaPUpDC5XV5KVDQNzss49w8hLx4dWxVt30M7G1uZnm4hd7uEGe_CtB4bbd1nCOrJZupBEcIbT9v3PQbvHe20B9kmt-lkbOd_plupLSSnwxdLSZminHbYzVlV6daPOehWb_wKWWSjP0p9rKxeIpMSQLo0fK_3i9JJcDKLiE3pukKSNwy-7GolGDVPWdlYDG7PcbjMAfwGvKdPZbm6udeQt_uMsgWpy1SiAi_OaK9nkUG6HBfUQyJTvSRhPmM_0I80ZEj3WL-ht82zyEUh0cUK5DJRkuRTyZpsNraV6jvvGktMrWfydzA34HdQI06Od9PV2UusKGaiBak2UCIGU2OFVPkQaw2KAHKle0D2GFTgyU-zQA8O0bfCiB_ppu_rok6KMz9cKMGlmLqgg3m2pIw5tDrQJczZA2x7qOQEWbQupFAdKxQMosv0i_pVW722EDMKjon_tIKENo0P9acRt0Xylu0Smo_WgiFrC5eDkLSJQWBJXXU1W50wXWTr51tEqR2nOR_vi-fzE8VpVK3aI43-9jlZlvnP8Jlx_jytYB7_iayqjNnJN_GHUE75FOI40dGygtIg)

Look back at your remote repository on GitHub, you should see something like this now:

![success repo push](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEHOJSzNsH2b3_DfV6AeAN7suVjTfUef9cBwBEOtgs_TkL8Ce_orDacXl9q3nxO4Hw-QXmGH8Znh020jPR-cWy1MzSmVn_lkLRuf3Xov7fHRK8mI-qAE7ewyE-lrO1lMDMGH41wNMqIiX8SN1hx6YEsMxdlF1ViPFk6F9qPef51Vcb178rmYoXfwgGYZRwB8XKygg7XHEvSnMLE5q7sQRfbDib4esNoa1_OtMCAklkhO2ZEPubENcLPXytTqLCpZsIMlFN6DE2y3VpTGMvKC7_tlzKmWhXnkiI9HowZkFnMox43APA1tSqinddiGAO8YeujmHcM72WtpFFAg_iZvniNd8HlwDy0rsSuv48vrxBphKWkHlkLkhQF_0u5eO-dUMnMmQ0ti-xH6dGSRhFz3I7etWU8ZvWCrjaNgsT9SAeaqNWqVYxX1aEcugamCTrmYorpim0pLbn7yQZ7T1VfSOT13xXqwXOBt7pPp0ckv_3rOdC5-5TbKsBnwBdsLxoon7CcuUj5kV2Gp1qiu8jpzGxeH29cq4HmYwnQl-YQovKgZkuk0DJdJUz1No2rsoR56g9IDsqUXoJSyVys3dvhGsgiHWA3DAs6tlQt9lDNsoCKDHgRl4vhb2FDROfFQuE0uXcUF2mFIZgrPLVnjNjA5D2hmxTHtFIsrGn3GlCKAvkIubz3X9nB66KUJpH_OP5CyBUQue9VYd0QwEvCw4DUcMSir_BVDkO4KURjeRRvm_uYLtwBlNZ2EYfGjzuWbSG3dzeTpJ74zbR9vJySVvmFA6HmOxZg7bxXpVCyBZ5a32UpnKpQxnzUX4mE4UechPhnw45ZxQRbliVKoXzb9IpYatPaD-cqYo1pxuR18zVqfHIplf4Nt77iHdDI8s12R_MP61GOf5HIH-t7Cqc33LxgUdzTxz9FKuLTj4kEG2tXCXzvKGYFhUEsEYkNyGDFZcS_jUtdlMEgxIlJRzAumGJ8BIvwCcVcr3QXu9M2FW3-VN6_F-isYY-jaCOxIwsRi7yOpt29fEoAn0XFXx9K4mo2mO1CY8u-kG7EcjlkNQ)

You can view your commit history in your **remote** repository by clicking on the button highlighted with a red circle. Our example might have a different number of commits.

Good practice is to **push** your commit history to your remote repository when you are done working for the day or before a long break. 


## Pull from a remote repository

So far we know how to **push** changes on our **local** repository to our **remote** repository but how do we do the reverse? How to **pull**changes from a **remote** repository to our **local** repository?


We often need to **pull** when working with others using the same **remote** repository or when we make changes to our **remote**repository directly via GitHub. The latter is a common source of confusion for beginners to GitHub. Let's recreate that mishap and then fix it by using the git **pull** command.


1. In your remote repository on GitHub, click the “Add a README” button. 

![add a readme button](https://lh3.googleusercontent.com/u/0/docs/ADP-6oHEQ3GQTZP_PjOG43bri-w3gUduD8OtIwJljWxhOElg6yQWQ8G0JeGOHnGPrHbQq00Pjh4pGw-9kLt1aM8sZGI9Xk4gtojPb-emAWjCbQY4nExJzv-NqmHkAtcQr9Bu_4wAT4uuhxYs6Oel45VUOU6A8eQJEVoPOAWEI_dN4sWOIQberFWsMdRtosDoBdCTc0XLpoI0HSzrkkJP7Jke-YV2rvvmU1JHozIt0H7bQue8tTDhSQCtlm0NFgQd1sHWA0LkRzwctdS3qF59oZJEswfX60vKRCZ1DnI-Y8HVRSS_ZIh5JjSiAunkVbT8hjj9fgdj3okbt8Re0OKMvT4KJGjLcNCUj-Wr0pf3622zd8wo33o6gZ0H-ZOKJcR8YoDEAdRQEgimL1pdJxYeJuj3ZYtVUAIt7xu-xh8y32cKFXFb5fov88jRtz3ydjDCHiJO0Wlx1JzVujD796hB-u57KgBQMyUHw1eQ8PRyUDIES3N023DfqArQUhvc3TUMW1eKLy8Wo9h4KpC3DFEM6_IH8e7HmOMsM0FeyaMovs_aopEMPG-PKMTC4-AMQzzzF07pdWSf3cPyzIg0zCWtIwy4V2KAMBY3InfaepILWNfQw7jXQmL3U1EumcTWRy2Qt6Cc8UsG2kkOHSditxXlz0dffVOwL1-Bk9nOMG1EChdXw56yRJGSHsnJfDzFuw3sBoDNLd1jy26odAt79m36Gy0F_M69aHLGlPuNmIJSa4iybC8xV-E6QRx0d6W7fNFof58NoT18W16VjIEJrLUzT2OPRmy5_ZLTm8UPN1Vs6VLPe1o-nyc94ptuD71fQPAi4zKui4Qg3lnCulzeR2nnW42-d5V44KEJoH9vhQIEBvboWk39yp1ltD_fSSNDPmI9kzzDTqWTWiS0RYZd7Zdi2N8YIkpZo1UJiX7lYnO1tujaOyTPUwzlDUDi1brwGdlUM6yzeODyOw8wAD6To8I9A5H6sN3p9iItMdkFywuCsJd3BWPajkLx6_ODlEROiahBfcsCDjtM-gVU-w74LnYYNtyiApuUG8sxaXzJsPW5Jg)
(READMEs is documentation for your project. We’ll talk more on READMEs later.)

2. Edit your project's README however you want and then click the “Commit changes” button (This page may look different than what is on your account):

![edit readme](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEBUK2SkBdiKTsf_lmDczVLfs65HenzhaLQxpgjf-Zmv7daegRVKKW2FuL-GE_BjErQED_P_fyQRIXU_ihJjz_cV_w5RsxDJTwX-nf5ZDwhDGxoA4B0IgoD5rlbjtuX7dAtxSAdbCyRLF5pXIcyNNp7QvxcYqQywFuXvUQ0ksUSl_dExqf1jFXIazyAaW0Ra_1th5vmDGR0qBG6yFnAEkc9cmY7TeUmx3oLOyic4zTLrIP-ZzoiK2p2-kFaKQ8tu109hGp9IP9Q198RBfnyiIOBUTrNYUjFD_PPbTHctTPFhNVva6MmAmdLdukogIW3e4lx_awCea5GsDwgh5y8buibk1U-jsCW4_Iesq5LzBEYSxILtEd2Ypkj7hmO50LUBqlnW_5OvlQyzKpPob_X5SP_NMmr7iicdifOzxDP1Nsc03XgGASjQUym9grIvrcPiIGKULaBfYNNqDYbXVZPJuFlrLA-mYD32pvz9b-VMZ5czmmmpqBObXH_6RZEXsaQvbrVkpaPjiuz8UuRFMMTL5Te6spUNn522Rhv4tGOStvZeGrkbrj2Kd9ciBWGjw-cAvYvFSJLNz0o7MyQMs_uRgIJEIOQvrWWCplUvttwj6CELnGVtSjVcJr_SMiwhLDPIOlZk5J03mFTiuEYmxDl6YTfFkjg-HI5xo2cPLw2bUg1DnQu_v8YMXNx8q71UaWs-D6NOYXxalgzfrhAiWqsvRrKUZS3QELyOnRt3FL1jXqHqFwePGuXjrySlxmleYmtuLlS8smNI5_91MBOY51i7J5hi9LO1qd6-jqaXPQdzJsMQCF2CEqf0QtNdGq10Nu4Zgl6upoMJJskDmStV5isrQNXLywTCFF1tkZq2YoCkh8VWL4OFpJ34W-45NxQVOjR9SmQTG0Pp3_wQagvuHZB1rpTq4cfqCOHi7FSEIrgZq29JImKqwKvKEzjyaDMDyq9LLK8tyTWC4z4whMfAjULYzvRJV0TE9KNPDCVtLMTZDjK79l51Xhi2ZO02O8kJnVuvy6o3qifQy4MVGyNEhzvUXlUF6g5BuPC2LShGQ)       


3. A new form will appear, click the “Commit changes” button:

![commit readme](https://lh3.googleusercontent.com/u/0/docs/ADP-6oF6lfZeRBZZ3Np59XVBMiuZXFdRe1OpgUAAxF574TwrddgfUQ2q-ZjEpYTFms3Sfub43y5_T_2W_hY03zuzpz-wWsPJ0uZGWwxiuYzyuUCW8KmvOEiV1pza82lFcO_q5cZETTofwF_H1S8qDwZo9cSDN7Uy8wR6MdIf32wjNtKkG68GRcDnGSBDGqxcWqfF4UGhPTZC_ShuY21aFWiPWnkwfWUVzac7o6RhyiqrxUThpYmQAUj50MW5hB0lZ59WQKpzkkeeZAweh6tQt8zLKzM0wzP8ZkWVXC_GxZiONHMHK4pHEzxzbqu1NTxWvxjclv1r-1yynG0gTojJFnrxmKS32m0ivNLuNRe93IT2xdgpIMPRnW3QMHc4aYywJFUReRptdtSYVrPpksWphAKIR0JKoeYBi1HdRwlvrC5autlJrG5-86lbL6SA4y-L11qlsIhd01pvnrfBSaZWqc1sZ1VodxfEsJGEsIX83C-mTqzthzlsQmTfqDWNhOxHCx90ecxRgkL_4oM-y66Dkx0-t6PpT4OPCBh503afGCJQYSFrRV4axy4eUVPbe5Gq46EfWUSF1MXEsgFOHuAXiqRqEnQ9di3HsgKIrnPeTu8OyPXSroA79SF4dUZOYfwbbiK80pfrZe8jtaMxFrDbFXJbhvGeHWZfsV3IXW2VD3I2CmsJLwo-MEVX2ZD5-LAiWq7fq-mLb3eOI9C399w9JD0paO_yqL7egDzdTs01v69ZhazrGf2hcaxhMZMDuSotxD78kP1yFXEAapRYTXdtgg3DAxTRAAaZtxe2GgygDP2hE0iIu00ZyxAMVe8zhGIIftdUSQyAIK34zppzC5T5ViGdOFMukNg7rxKFQJ3pc86XZ7PIxG8Qx-CInMRFaWwcWcQKdmoDdT7P4uioMFgSYOVGkITpTg0FVYTARmjMd_cB--DKzf81Q9sfihTl3rPwlyvPDbx3IODTouU_zTdTtSGBhuXBZMkJlu9YqpaLz4RllEMoFqk18pck8k_ftk5Wkbeib1_Vsz8zqHYTwpFwenmP2FEd8NbkreNs-sg74g)            

Going back to your remote repository, it should look something like this:

![repo with a new readme](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEVi1bGLSpi89liO5A2sR0n9hWTKZa05mJPF1chqdAT3Y19ctNqHuEFw_T8T3AEpqawq-3NLG6Hvw2DUtoVaPURO10grb44QBkWgJy1jGOyuEo_USTEsbHxTBbWeLktaPFfoVqwqWwJGL0SthSSnBFfgOdUMwOLW07oIqRTCHWBYW8NaG8bawqHpDezAGzYv7OPPQvYYpSLtEnsQdrF_pd3RC25aZys3U05RVJvYKsWR3UEKJbRYk3bgG22OBLtuTW0Y-GmHe9H4UmF9M1uAVoaHfTqXDYko-efTCzPSTQPbNKfEFWtvGtjQJrWMaxArkryufvwFI2yQcZ7LZjwMy2aX7D9IUdNYBK1NFvm2zIz3TffobbdKhTcGJZm82QjtAdfUqnsZjA29TBvS2Ffg5For7zcs2CUlagwiVVD6FhZNu6cVsNV3aUKtgSK5YP1NBceVgJLKY3TlUUyj6PhXQrwRpvlptA_v8Vp2IVJXac_Qhh3A9C5ZKCk8zl_qA3ahWmmsGrU2p2bnY_WxJgT-iyWCTy3zCjUidF7i2uEFUF389YVQYjnmLgXsOGwdkzqK4YsQHa6tXn3ruVf5kRsIX70mQmWYDBFD7nzZ-kKtiMcjY3XZX6CFWOgS1LMk_qVOBDDpANtZ9Af2kAfpJ6M2ypHufqIPdJeHF-vZKVAIrHP-WNp6sHCzT-e_XG6xO-6_jjGsnjH3RznxtAB9ct409M8LKAgI9iQgMba-RC3L7d-bOaoA5kTtJWxPdUNuWx8FAGxYfmK4rqiCsTweGJlcjUdeWQrG2oMybW5w79uMVNx53P7fxHeabJiDPKAiJOX5chLhrkEXnd4BALADkWrkIikVmfxa-Cnqr03OOaNKumjimA8SYDLjPriEgni4F4caLyTLxQ3KSXd-O5Gk50W0COItySZcKbsMGFDT2m0Yv19XiaT8ScmQqY6EIWdP89quhcSOU5NfT54we5lLl_SpZw6eg_dxv6BB3nJsVzBsB9J_Si99uLtCeriFCgoyp3obvMaUWkhDLA0BBTgFTQACcHVxrhifJkXhHmgrA)



What have we done? We made a commit directly to our **remote**repository via GitHub. We could have done the same process by creating a README.md file by `touch README.md` and making a commit on our **local** repository on our computer via the terminal. 

Your **remote** repository should have one additional commit than your **local** repository at this time. If you were to try to **push** now then you would get an error message from Git like this:

![error from git push](https://lh3.googleusercontent.com/u/0/docs/ADP-6oF5VW4sRi0ooQI5TxLg8_J2r_gi-oREomKcnW7vu9ziCOUcznbfwGoVME4_siJbiCRHRBTkM8TiczgtsURr3ckMMCxjcJ1XraWuLBk0KTCWQdsQ7Dldh-7zwZEroz5_9SQb1HO0j54iY7kdkULz9BMfte6KhcxcFPnAUGxCeenMkVafQZYYrjrrcbaMn8jYkfGrKmdpriRaPi96Tkb-WXYtKxPVh5xbZtkiYi2I1tnXuL3xDdj5haCo7QxdQPENyioazmvwlRngD8Emy0bDaE5bj6biRxPcf9tXA2JDnYEKmkEjXH4PT6G0I73o5nrkg0uhvqnJVHFMnZOr-XWwi--EhQD8m14Ztv9iUs25PfBlzaQihCu_OeuAgJ5-W9VLUuMXJ8PoRgJVcd5f5FbZGZHjzMVt6dp9OYX6llpzhYCrrQkOJp66aScN1T4MCLmz3p4KfEh3skXAhY9ve_o1Eeaeh-ZvsCmzI173IBmVKpL7QatER4jWwZJbG_L2NkmcJYzx_wvRxmb9nzU1mK6Gaiy4K7ly29oxr0Y4C9YsKxm5c9EdrA-o_z94reYXmNd6y3GHegvgvW7MOYx3SZKNlnCoDeYym6NGT0WwPzBxoS3iF-DHf7a0jwJRIfyvF-j4mFCctcfTlWZlFnVL2IctSKl6KfplG1XCk_4xTMUZEtxQTE0FTt22NXIiS468Ex2m2eWcG2biTZFb_9i5WqStWk-_0u8eDjfRiYk63BQ94bO6RlKH-gm2RTeAqY7yaj4HK34CcnGRQYuc1o_B1I642WauZ-wR5YUJc1c7Wu75gAWZSQmBp6PoUDsD_lm_3P8sazFw9SUcGhBylD_kFK7_lQ6mWhyajW2QlGcy_VbwiRp3Xm5KbtzbfZ5srSWOxPUDDgZH1G3gxM6eSb6Vk6vDI01a-C6t_TgMvhN__kBuknRJtuPiqt7aHdv1kygpzoZjZmYW5fC0k0COx8x8RceudUIPpTlAqAGyCYITL9YtEOUfHRQVG7a1Dt3-UWvsNVWAcQ-a8QVo28wgC3bhsQvfMo8YeAVgT8WbXclCZg)

Go ahead and try it yourself! Errors are fun! Thankfully, Git is providing us with a very helpful error message: _“Updates were rejected because the remote contains work that you do not have locally…You may want to first integrate the remote changes (e.g., `git pull…) before pushing again.”_

Git is telling us to **pull** our changes from the **remote** repository!

In the top level directory of your project, use the git command:

```
git pull origin main
```

The result should look something like this:

![git pull origin main](https://lh3.googleusercontent.com/u/0/docs/ADP-6oHz_r7blYM_sAIkYJSjm_jEHeVMZuAy38yVe6MLWMmdIGBsUZTkS23zevCr8Rwa92JceR1qiVnd2crEQNNZM4yDq7shhNuDnJ8zca7p-MIluwQaFlS7_m5E3w1iNBtis16OdgrIdrg5qKeqBBUP_upSThA7MDmhkyUwmcS696RigLxDCuKO0M8cGxfIBy5aKQ_HNKoAGeSYavvuUyxfrIkxTX2qSqtmTBOLo2Yln053iEMl3f965Kj7lUNq5VdtXJDNF4ede0DM_pm_FYKrBIX0MUsxmvrkH2R2Zyom7wq_Rlvrg753hsKNs3t70oV2GKNyYWbs330UT7rYARpcAdTqst4tL3vIaIUiHncCvbmHuY_d7R3Y-kF4pZW3_Bg1TJaWezeq4_DBxd42b0fERfgvinKMurOBdq4A34XHLbVSG0h5gFmAh1HaS_gVXwxGEkftHotgLkziGBz0Snmhjuk0xO9KIoxIzB3r9efZXBKVSTCMib6uXR6vBJKHQQkuFI1GstvMqXRCdenwJc7mQswQ-wK2L-V_vD3rA2ojnyVClDIOatMEv9n2RkvYqWEPi2tiEt1j8FdUvysLCTHFiNolCiCUNyszZIdlrzs0c_zCOj0ISNNZEoTgXg-WRAvB3wdHqF3M_ErsBy52O5qksd8IzSMbc-IP5Rk0LFY12y4YMKLoD1zNBJrGGvAun19HL2sei0ReavU8-nT2aPqvf81bSwYFW5IjlhFsUmDjrilOnhp7lgrEABD4EvMOW1BjnWXfaHRxSvMeBGYisJY6gora1X1ke_Hvh6AIuVDeFVhX9_OVjQOvfiiYZgWVOwebjFp1ufHYpts98jGoBcmfBhHFPKPLW-zARC7ObL6WPSjwDJDADgyuLDK9wVRBl2LfMRDDNNY4SXLKklw20ATppFDr21JtmZZdmA5OSGAitvKLKhiHvd_CwhyqlgYIZEGL04cBQ-5Cpy1eXP2USJ8rJhI7nng9fw-z6rH0t_S4WXFCdGo18tqDG7cAuv4XAU8va-HONvHIU-X749sMgv6ieWUdHBJGDtJKvqocgg)
        

Using `git log` confirms you now have the additional commit(s) from your **remote** repository on your **local** repository.


Git requires that our **remote** and **local** repositories match before it will allow you to **push** changes. That is part of **Git**'s role as a verison management system. **Git** enforces protocol for what to do when versions of our project don’t match so we don’t accidentally lose code when copying changes from one version to another. 

## Clone a remote repository

Okay, switching topics, let's say there is a **remote** repository that we don’t have on our computer but we want to copy it. To **clone** is to make a copy of a **remote** repository to be a **local** repository on our computer. You can clone any remote repository that is publicly available or that you have access to.

For example, let's clone the [React library](https://github.com/facebook/react) from Github; a tool we are going to use later in the program! React is created by Facebook(Meta) but is an open source tool. For us this means React's source code is freely available on GitHub.

Go to the website following the link above and click on the `<> Code` button then click on the copy button (circled in red with a 2):

![clone from react](https://lh3.googleusercontent.com/u/0/docs/ADP-6oGfFh3CPwfNTNlZG-TdEPcCDjxugbyI8XuvYKapcW3N5U0Xvbd7d28J6dOw2y9RWMQo17-0oXBLaEN5drNvRTc6fDdvYNbsqlNDncbLgfyHyVFKeg5ZCzMFfWGnyeKImcMwhh1RKAuFJE13kzj-3kxhyFznQr5kDSjFgaSeObUsb2IOsoSLzjElWRhbjbUu5PNeDpCrfNzUOMPyCv9sNIZ_GZPsC72j7nG-JccM9yEBpCaUp8knYtbUqizPCfj24ZkB6xIrCpftkSVYdZG-vhutYIDhQQ9aNjUcWcwP5VIL_xf9esP8p4MZdklIvzZ-soLYzrcev-6IQNs2yqVqrkRCSOQl4Xzc1ZfLML_Yx3gNMjAIDf3mqOLpRxI6dK9iBknDjbvYRJhmqdRK1iwJNMydnR9XbH9adpihu1E8Dgbw5tKHzZWgBXm8VKfdDHezzg74vjlnirN8Ep6vndnDskPhOgD9NSwlZYK1l6-rwMidVhe7kT5McMbkjVrleRT9fOEQBWcqvWLGYssROuW5162cFqBsGC77CZ7SU4tezLtySJG4fKWCpFMmJzCygDejX64rBWCgnPTj5NUm7HE50Iz-nQE4rwi4ykYUK7Zxg48MUjIvC1o0DklLtjxCWa3gODmOl_EWt7Pg6qNOD5V72cvJvh-9OYRwDjqmC-rTWm49YEgRIsb8UD7PM-YAeUMULHi3tN8RQKqD7HtP9yicu2d_aowoIg2pcFZurnJXt559FW8fHsu6E0-hla_wDtyMYeee3ddAeUIAY9_Ck97J6fv3-Ff9dDgd_vPMYXJLNXsI-kgWrLC1NuBxYf85B2Urtj6UxyPnAs4z0s1YVTo17IqEKKNhZSe9CLsO6P6tNyAKu_BrPXqW0OKzNc4EHNRc1-JlafW-7QHJgoC-U17Rkwdv54GOsCxyfbhXGfbucpw4y0Q1iQTgiFdRN-eOGSeOsL3-tjQu1If32HsaUfL2xCJdmKimf9T4m0lMYAP8xfdF7Gyncu9ZmgzAvb9WHKsni2po3c6RSHCet6Qxnf1S-drIfpgKEM8b--IJBg)


Then, anywhere you are keeping projects on your computer, use the git command:

``` 
git clone url-of-remote-repo
```

A new folder called “react” should be created on your computer. You just created a copy of the “react” remote repository on your computer. This is now your **local** copy that you can do what you please with. 

We picked the React repository to clone because we knew it would be readability available for this example on how to **clone**. However, typically you only need to clone **remote** repositories from your own GitHub account.

While you can **clone** a **remote** repository that doesn’t belong to you (in other words, it's not from your GitHub account), the problem in doing so is that you don’t have permission to **push** changes to **remote** repositories that live on other GitHub accounts. In our case, you need to be given permission from the owners of the react **remote** repository to **push** changes.

One way around this is to delete the connection between your copied **local** repository of react and the remote repository using `git remote rm nickname-of-repo-url.” Then create a new **remote** repository under your GitHub account and connect your copied **local** repository to react to your **remote** repository.

But that's a lot of confusing steps! The better solution is to **fork**.

## Fork a remote repository

To **fork** a repository is to copy an existing remote repository to your GitHub account. It's very easy to do. Click the “Fork” button in a **remote** repository. 

![forking from](https://lh3.googleusercontent.com/u/0/docs/ADP-6oFFXS28gyNrhUJVomZ0_IJ_BcFgT1rDM1olPzA6AI1lRqnSF-vGVkfk38FyROyfzqKZVJ-qwxL-CTsCbvoW85uWO6eATChEttig3EW9vTwx5blF7JjKHge9c35ABW1sJOkIp4r-VHKwbidyI3myiBOkzy7GLWwufYHE-qu5D8W0L6TlvvvpSUQYVdBKdhhrYNTA_m4_AMsY0pLHgr6592W9lDOdFTsVryFXUqWbXXmznTq6DDpNZB2eDUkKXHJI2c7o4gQtlsRdzwvT1i_-xKrekR8r8DYM0goZu2WAbra1nItrUA2hBE0aRuTwVLViELw0ZoBknHIn-oUauA1YH-knmqtYE9XtE0uNVEtWSUKoLEJTIlhgeGkI64G18iYVXhl4wQAZyV4hdsh-eFEuhjWrPSUt9XE0EUFGsqR9GqDGcodKpo5RFuK04BNFcDbfZkeD5G4GcoDaUQVv3KGYQRkU8CO-muJBekV_miDUt1iVjQNdRTpGZsT7ZemOS8i12fSpFgzMrhIMjiPvmg5Pes1bgqWUyBQFQ8isMyTHfRxufHVv1gfE6kcZdz-LXx8mwYtaICz8SUONMv0ZcArzKdRuAeEmeTZvcNYYKWY3LPk_uYjKNxNhTUqog9hnJVoOoDCBNkVVEoRhh854jnPCnRuuiblNyqogIpdWF9e7lWbTKsnX6pLckJ6t0iaDA1dDsY5C66hLfHqSeIpMRFoO2NB1kek3qUPbqmRQnJKAZYJBqiHssDsQiJyXy_2CvOS3C34jg5K8kA1SA06XXTRHWG2KsDSsxdOKc9WB_RB3cbh6b_CVJAUMJWalqKksl6CLuOVDSZLjSef54eRruf71WBPpINZ4mqLkAV6txLh1Y7UoSNLD16YEp8QHN_zISYM_LVb8cJOzDKOvPGBI4SuUod2TiwJ3RaH2y9luqAhBsQ1XoamEtgEI2h2R__dUdajQmct8OgGIA637hPPdAkTcNT6B7-uqvGC9KhUFvJOPu4Y1IbRM9ooDZa6bykXPqyZpPBQAWlsKGHrcRkxGfFEqLgqun5dk65_VOudOFg)


Click “create a new fork” and then select your account as the “Owner.”


That's it! Now you have your own copy of a repository from another GitHub account.

![my copy of react](https://lh3.googleusercontent.com/u/0/docs/ADP-6oEcqRMB3osSTJJpRpFld_lIQn02-lhEA2P620BFu4l2c4s-KImuP0mLNCvQjxRqa1E8N2qUZmp8k59eirZUqDggkGnp7U_D7dPnQPE6QVNPWw66938OtVX66iLN006hLv2x7LLs2vmQTYc7Jk5aIkUjUpWqfSZIt3AgyIJqvE7MVgAadvl8etf6bOJ4PgJLjCrKAz04jLsF_267ff2EIRsyLFxnHyXd0wTG0eU1EqtZl-HE0iPpph7gPOtRCIPTgcB40Too1KVXhBT8FpGqZD0vn9CoDRacii_6WOpZhzfOFjJGTk_3kX-xXoo5SLCWkaPY-R6Uiv8pbxF5Ww-YehR6w-AiRLQOJG-0HFkSCBGrFNmfxLUC3MoH-HhVHXeW0pwXUquxgwIapQtEn-Ce_YZyFag8PIhch1NAK2H0xzdGV4B0Rv2M6LNNq04mpnez88c5jsE0JwxNngduzBmJKJYLkLeWAg4N3-gRqb4-_YTHBm5XTreDYRLms6715m0UOp3VfUJ4K_ja6i4fSTYfYy8rpvl028b-a5dSBfsMpSkv2ersoBSlgy_KVHsCQ7VTelzxTCIlsCSeMjhwVvEbhtlCfUvRH0IgLuohyisoMhgm4qIDEqCSF-sertqU5FSxfu-BpvraCCLEWmsQkEdl5wuxH_9nh5v_eLlkBiswU3xk3rkRCwlxtScTgoF2Q43fh20eJcMW6jkYV3455YBubhFWlhTSpBw8DtLOd5RcIr4sxdMSkgPGjzT-GA7WtHhgqtrpa7921UpZbJreDicYeU5p2AUxw_2FGEzdLg8NO-PRNui38qm0-Ep_dmALfgZRKjKPZLM-u_1DfWOlyvNOJ5MIN6DCh_l6mDalzuiMt2yM5X-e2a63lygDoYTyeUIvC08cXHTievbTSMZ6kZ3JhKuKLQ0BRyFenS9Nm2XKvM7FBrb_8NLbQ1Ff0GAdtZkd7Za_iA9wQ4GSPdjSI_SD3_MftIf1E1q1NLZZJV8MRHDecbio8oT5WG7YlPHR1yQeB2WN3pl8ib0q03pKhu2rdY-8EWk-JpsCi3uhaQ)


From here, you can **clone** and set up a connection to your **remote** repository as usual.


The original repository is known as the **upstream** repository. It is listed in your remote repository as “forked from…” There are a few paths you can take after forking a remote repository:


1. You want to take the project completely in your own direction. You are no longer interested in what the original repository is doing. This is totally fine to do but be sure to read the licensing information in the README of the original repository. Public repositories may still have terms of use. No matter what, never try to delete the commit history of a forked repository in your GitHub account. That's disrespectful to the original authors of the code and unethical. 


>Let's Pair Program!
>
>If working remotely in a pair group:
>Option 1 above is recommended for pair groups working remotely. The person who has the original local repository on their computer will push to GitHub after a pair programming session is done.
>
>Everyone else in the pair group will then fork a copy to their own GitHub accounts. When you are no longer pair programming with your peer on this project, you are free to take it any direction you please. For example, some students may put personal touches on their final copy of the project that will appear on their GitHub account or further implement something they couldn't do while pair programming.
>
>You may have noticed that only one person in the pair group has been able to author commits. Don't worry, we are going to fix that soon so everyone gets credit for work.


2. You want your forked repository to be up to date with the original. In that case, use the “Sync fork” option in the image above (below the blue “Code” button). Any changes that happened in the original repository will be copied to your forked repository. People often do this because they are interested in contributing to the original repository. This is part of an advanced Git workflow for teams we will learn later.