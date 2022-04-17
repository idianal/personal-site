---
layout: post.njk
title: "Windows for Software Development"
date: 2021-07-21
---

As an operating system for software development, Windows gets a bad rap. Although it is by far the most popular desktop OS, many discerning users fairly criticize Windows for the way it handles system updates, how it is often saddled with bloatware even on a fresh installation, and --- perhaps most concerning --- its unethical user data collection policies.

On the other hand, Mac users are often quick to cite that macOS is POSIX-compliant, which means a wide range of software for Unix-like systems can easily be made to run on it. Mac has also become synonymous with superior hardware aesthetics, reliability, and --- more recently --- extraordinary performance and efficiency ([Wikipedia](https://en.wikipedia.org/wiki/Apple_M1#Performance_and_efficiency)).

Lastly, Linux users love their OS because it is open source, endlessly customizable, performant, and cutting-edge. In my opinion, knowing your way around a Linux system is essential for developers because it is ubiquitous in the field. Linux is dominant in the cloud, in containers, in IOT... perhaps the only subsection of computing it has not conquered is the desktop.

### Why Windows?

I have used macOS heavily for the past fifteen years and Linux for the past five --- but after some deliberation, I have decided to use Windows as my sole desktop OS. After some initial cleanup and settings management, I find that Windows simply fits the way I work and looks the way I want my desktop OS to look. To be clear, this was not always the case --- but in 2021, I think Windows is a great choice for software developers.

Here below are the things that set Windows apart for me. Each of these items might also be found in Linux and macOS but --- for each item below --- I found the way Windows does things best suits my personal taste:

1. Beautiful UI

    This might be a surprise to many but the first thing that sets Windows apart for me is its looks. Although I find it a bit busy by default, it is trivial to configure Windows to be clean, minimalistic, and very pleasing to look at.

    Unlike the macOS dock, the Windows taskbar can stay visible without taking too much space. Personally, I have grown to dislike how the macOS dock leaves empty space to its left and right; I feel it really does not work with maximized app windows.

    With Linux and its unmatched customizability on the other hand, I have struggled to no avail to configure a desktop to be as pretty as the near-default Windows desktop I have. I say this after dozens of hours tinkering with a number of Linux desktop environments, including GNOME, Plasma, LXQT, XFCE, MATE, Pantheon, and more.


2. Unmatched window management

    True to the Windows name, window management really shines on Windows. Whether your workflow is mouse or keyboard-centric, it is incredibly easy to maximize and minimize windows, split your screen between multiple apps, switch applications, and switch desktops.

    On the other hand, window management is perhaps macOS' biggest weakness. In fact, many power users have taken to installing paid applications to improve the default macOS window management system. I have also done this myself --- but even after having tried a couple of paid window managers, I found that none of them feel nearly as nice as the default Windows system.

    Unlike macOS, Linux has some excellent window managers available. If you feel so inclined, you can even ditch floating window managers (i.e. Windows and macOS style) altogether and go for a tiling window manager instead. Still, I am partial to Windows-style window management. If I needed to use a Linux desktop environment, I feel I would be best served by looking for one that closely emulates Windows.

3. Supports real Linux

    Perhaps the biggest developer-specific gripe about Windows is, unlike its two main competitors, it is not Unix-like. Its file system is different enough to be bothersome and its command-line tools pale in comparison to the plethora of Unix tools beloved by many developers.

    Enter Windows Subsystem for Linux (WSL). Available in two distinct iterations (i.e. WSL1 and WSL2), users will do well to learn the differences between each one. In a nutshell, WSL1 allows better interoperability between your Windows and Linux systems, while WSL2 sacrifices interoperability for near-native performance and great compatibility on the Linux side. Essentially, WSL2 is much better if you can bear to treat your Linux subsystem more like an ever-available VPS rather than something that is fully-integrated into Windows.

    In real-world use, I find that my Windows usage is usually limited to a browser and Visual Studio Code. The rest of my workflow happens through a terminal running packages (natively or in a container) on a Debian subsystem. This gives me access to all the great Unix tools I am used to, with great performance, while running my desktop environment of choice, Windows.

    More about this in the next section...

### Setup and workflow

Currently, I maintain two personal Windows machines: (a) a compact yet robust Intel NUC (with an i5 processor) which I use whenever I am in my home office and (b) an adorable Surface Go 2 (with an m3 processor) for when I'm mobile. I generally keep the same settings and slew of apps across the two devices. However, I avoid auto-launching Docker Desktop on startup on the Surface to conserve battery.

In general, I keep my use of Windows pretty minimalistic. As my default browser, I use Microsoft Edge, which I find impeccable in terms of features, performance, and UI. To interact with my Windows file system, I use a combination of File Explorer and Windows PowerShell. I also install Microsoft PowerToys, a fantastic bundle of utilities which includes a keymapper (I always remap *caps lock* to *control*) and a convenient shortcuts cheat sheet. I also install my favourite GUI text editor Visual Studio Code, which doubles as a feature-rich yet lightweight IDE when I need one.

Using WSL2, I also run a Debian subsystem on my Windows machines. To interact with Debian, I use Windows Terminal, a great terminal emulator that is apparently coming preinstalled with Windows 11. Inside my Debian system is all the Linux/Unix stuff I like, including Git, Vim, Docker, and Bash. The Debian installation is also configured with my latest dotfiles and security-related files (like my GnuPG and SSH keys). This way, I get a consistent Unix experience regardless of which machine I am using.

Whenever I can, I try to avoid installing specialized software development tooling straight onto Debian. Instead, I make heavy use of containerized developer environments. For instance, I maintain a customized LaTeX development container image on Docker Hub. Whenever I need to work on a TeX document, I just pull this image and I am able to spin up a fresh LaTeX environment in no time. I do something similar whenever I work on something like Node.js or .NET or even something I am entirely unfamiliar with.

This setup has worked out really well for me so far. And while I don't use it for my day job (I use the company-issued laptop for that), I am able to make good use of it for personal study, tinkering with software, and contributing to open source projects. This fall, I intend to use the same setup and workflow as I go back to school part-time to take my Masters in CS.

### TL/DR

Windows is a good fit for me as a desktop environment because I enjoy its simple yet beautiful UI and its sensible and powerful window management. While I am a fan of the Windows GUI, I prefer a Unix-like command-line environment and file system to do my work. Thankfully, Windows supports this with WSL2. I am currently happy with the workflow Windows enables me to have --- and I plan to continue building on it as I tackle new and fun things in the near future.
