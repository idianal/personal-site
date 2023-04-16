---
layout: post.njk
title: "Course Review: Introduction to Information Security"
date: 2021-11-29
---

{% include omscs-header.njk %}

#### Overview

CS6035 is a true introductory graduate course.
It assumes an undergraduate-level familiarity with the course material and tackles a breadth of topics across the Information Security field.
CS6035 gives students the lay of the land in Information Security and aims to prepare them for more focused study in one or more of its subfields.

Topics covered in the course include software security, operating system security, authentication, database security, malware and malicious code, cryptography and encryption, and web security.

#### Projects

There were four full projects in the course this past semester, along with a short one for a little extra credit.
A custom x86 VM image (either Debian or Kali) was provided for each of the projects below.
This means Apple Silicon machines are not a viable option here.

In my opinion, the projects were by far the most interesting and challenging part of this course.
They also account for at least 80% of your grade.

-   Project 1 tasks students with exploiting a buffer overflow exploit in `C`.
    The bulk of this project involved reading and understanding `C`, applying buffer overflow concepts, and using `gdb` for debugging in order to successfully complete a buffer overflow attack to invoke a new shell.
    Familiarity with `c` and `gdb` is helpful here, as well as being comfortable with using a shell and perhaps a command-line editor like `vi`.
    Some review of low-level OS concepts like registers and memory is recommended.
-   Project 2 applies machine learning concepts to categorize malware using a tool called `malheur`.
    There is no programming here --- but general comfort with using a shell and introductory machine learning knowledge are helpful.
-   Project 3 uses `python` to complete some interesting cryptography-related exercises.
    For instance, it explores interesting ways the RSA protocol can be broken (due to its mathematical idiosyncrasies).
    This is the most programming-intensive project in this course --- but it is mostly just filling out stub methods and writing helper functions.
    A basic-to-intermediate-level knowledge of `python` is sufficient.
    The ability and willingness to quickly grok mathematical relationships (e.g. modular math) is helpful here.
-   Project 4 is about web security and requires some ability to read and write JavaScript and PHP.
    While the programming component is easy to grasp even for beginners, the project more intensively tests for understanding of concepts like cross-site scripting (XSS), cross-site request forgery (CSRF), and SQL injection.
-   Project 5 is shorter and is done only for extra credit.
    It is a modified version of Project 1 which requires the insertion of shell code in a buffer to manipulate code execution into invoking a new shell.
    I believe there are plans to eventually turn this mini-project into a full one in the future.

#### Learning materials

The lectures were all pre-recorded and are of generally good quality.
I found them to be a good first pass at the material, before diving into the textbook readings.

The textbook *Computer Security* by Stallings is comprehensive (if a little dry).
In my opinion, anyone taking this course should get it.
Since the quizzes are all open-book and many questions are derived from the textbook, it helps to have a digital version handy so you can `ctrl + f`.
I found that as I naturally progressed in the course, I read almost the entire book.

Several times in CS6035, students are required to read from other provided sources which include journal articles and technical blogs.
I found many of these interesting and almost always helpful towards completing the projects.

#### Exams

There were two exams.
Both were closed-notes and proctored through Honorlock.
There were also four quizzes, and they were open-notes and unproctored.
Neither the exams or the quizzes were very difficult.
I found them fair especially since they don't count for very much in the final grade.

#### Teaching staff

The course feels like it is run solely by the TAs.
The professor (along with a colleague) appeared mostly only in the pre-recorded lectures.
This might be a deliberate strategy on the part of the teaching staff.
I found I did not mind this at all --- I don't think I would have taken away more from the course if the professor was more involved in office hours or in the discussion boards.

The TAs were usually patient, helpful, and responsive.
In general, they will not spoon-feed information to students (which is to be expected in a graduate-level course).
Interestingly, the TAs can also be quite stingy in giving out solutions to projects even after the due date.
Students would need to find the answers by researching the material themselves.

#### Difficulty

This course was mostly easy.
There were certainly components of the projects that I had to wrestle with for many hours but I was always able to complete the projects with time to spare.
The exams and quizzes were fair, and ample time was provided to complete each component of the course.

I spent around 10-15 hours per week on this course.
If you don't meet some of the prerequisites, expect to spend a little extra time to get yourself up to speed.

#### Conclusion

CS6035 was an excellent first course in OMSCS.
The material covered is mostly interesting and not overly challenging.
Although some aspects of security is exciting to me (e.g. operating system security, cryptography, etc.), I was not as keen on the organizational security topics in the course.
CS6035 did for me exactly what an introductory graduate course should do: tell me which parts of the Information Security field I might want to study more deeply.
