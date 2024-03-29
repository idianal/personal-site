---
layout: post.njk
title: "Course Review: Computer Networks"
date: 2022-04-24
---

{% include omscs-header.njk %}

#### Overview

CS6250 is a broad exploration of modern and traditional internet architecture.
It is light on prerequisites, making it an ideal first course to take in the OMSCS program.
CS6250 deepens student knowledge on many internet-related technologies used in software development and computer science.

Topics covered in the course include internet history and architecture, protocols and technologies used, router design, software-defined networking, internet security, and internet applications.

#### Projects

There were five full projects in the course this past semester, along with an optional one for extra credit.
A custom x86 VM image (running Ubuntu) was provided for all of the projects below.
While some projects can be completed on any reasonable host OS or in a Docker container, others require the use of the VM provided.
Apple Silicon machines may be a viable option for some projects --- but not all!

In my opinion, the projects were by far the most interesting and challenging part of this course.
They account for 66% of your grade.
Each project uses Python, and an intermediate knowledge of Python is sufficient.
It is helpful to know basic ways to keep Python performant (e.g. using the correct collection types and using nested loops with appropriate caution).

-   Project 1 tasks students with implementing the Spanning Tree algorithm in the context of preventing forwarding loops in the Data Link layer of the internet.
-   Project 2 involves implementing a distributed Bellman-Ford algorithm in the context of calculating routing paths in a computer network.
-   Project 3 involves implementing a configurable firewall using OpenFlow.
    Popular tools like Mininet and Wireshark are used to complete requirements and test your solution.
    Familiarity with using a shell and perhaps a command-line editor like `vi` is helpful here.
-   Project 4 tasks students with demonstrating the vulnerabilities of Border Gateway Protocol (BGP).
    Like project 3, this project uses Mininet and benefits from familiarity with using the command-line.
-   Project 5 uses BGPStream and its Python interface PyBGPStream to analyze and manipulate BGP data.
    The goal is to take useful measurements based on snapshots from an actual production network.
-   Project 6 is shorter and counts only for extra credit.
    It is also much more open-ended and involves using BGPStream and PyBGPStream to identify and examine real-world data involving a global event that has significantly affected the internet.
    Students are encouraged to use resources like IODA and Netblocks.org to identify candidates for study.
    Unlike the other projects, students are asked to use a Jupyter Notebook and the `matplotlib` library to present findings and methodology.

#### Learning materials

Learning materials for the course is primarily provided in text form.
Some modules have accompanying videos but many do not.
Even when videos are present, they don't offer more than the text.
I found both text and video materials for this course to be decent but quite dry.
Thankfully, the modules are relatively small and involve frequent ungraded quizzes to test understanding.

At the start of the term, a study guide is provided to students.
The study guide is a detailed set of questions for each of the twelve modules.
This resource was invaluable because it allowed me to systematically find the answers to the study guide questions as I completed the modules.
In the process, I constructed a resource that helped me do well in the exams and quizzes.

There is no required textbook but *Computer Networking* by Kurose and Ross is frequently cited as an optional resource.
Aside from this, each module has a collection of optional resources students can look into should they want to dig deeper.

Some projects direct students to read tooling documentation or journal articles to provide guidance and context.
I found it was enough just to scan these external materials and to only read more if I got stuck.

#### Exams

There were two exams.
Both were closed-notes and proctored through Honorlock.
There were also end-of-module quizzes for each of the twelve modules, which were open-notes and unproctored.
None of the exams or quizzes were difficult.

To do well on the exams and quizzes, I found it was enough to rely on the study guide provided at the start of the term.
The study guide is a detailed set of questions for each of the twelve modules.
It is easy to find answers to these questions as students are going through each module.

#### Teaching staff

For the most part, this course is run by TAs.
The professor appears in the pre-recorded lectures and sometimes conducts office hours and responds in Ed, the course's discussion platform.
I did not mind this at all --- I don't think I would have taken away more from the course if the professor was more involved.

TAs were helpful and polite but I think they could have been more responsive to posts on the discussion board.
Not only do the TAs conduct weekly office hours, they have daily timeslots where students can ask questions.
Although I never made use of these daily timeslots, I believe this is going above and beyond and deserves a kudos! I can also point to specific instances in the course where TAs made reasonable adjustments on-the-fly to accommodate student requests.

Lastly, project and exam results were provided within an acceptable timeframe.
When there were delays (always due to students getting approved extensions), the class was informed.

#### Difficulty

I found this course mostly engaging yet easy.
At no time during this course was I stuck on a problem that required some sort of mental leap.
The projects were interesting but I was always able to complete the projects with time to spare.
The exams and quizzes were fair.

I spent around 10-15 hours per week on this course.

#### Conclusion

CS6250 delivered on its goal of deepening my knowledge of internet technologies and computer networking in general.
The material covered is interesting, and I think every computer science professional should probably know the contents of this course.
Although I don't foresee myself working directly on the technologies discussed here, they are ubiquitous enough to be helpful no matter which area of computer science I end up in.
