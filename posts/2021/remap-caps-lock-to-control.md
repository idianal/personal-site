---
layout: post.njk
title: Remap Caps Lock to Control
date: 2021-10-30
---

### Displace the Caps Lock key

The Caps Lock key occupies a prominent position on modern keyboards.
This placement was inherited from the Shift Lock key on mechanical typewriters where pressing the key physically shifted the mechanism allowing consecutive typing of uppercase letters.
The key was relatively large and prominently placed because it required more force to press compared to other keys, which often meant that typists preferred to push it down with two fingers.
([Stack Overflow](https://ux.stackexchange.com/a/41877))

Today, the Caps Lock key has a much less important role.
For most typists, typing in all caps is rare.
In internet-based communication, like email, instant messaging, or social media, typing in all caps is generally frowned upon as it is associated with yelling ([Wikipedia](https://en.wikipedia.org/wiki/All_caps)).
Even when a few consecutive uppercase words are required, it is usually easy enough for a capable typist to use the shift key/s instead.
This makes the Caps Lock key an excellent candidate to remap to a more useful key instead.

### Promote the Control key

As a software developer and an avid user of Vim and Vim-style keybindings, my preference is to remap Caps Lock to Control.
Not only is the Control key heavily-used within a typical software development workflow, the Control key on most keyboards is usually relatively difficult to reach.

Here are some examples of keyboard shortcuts involving the Control key that I use frequently:

-   Vim
    -   Control + [ - Escape
    -   Control + f - Move down a page
    -   Control + b - Move up a page
    -   Control + d - Move down a half page
    -   Control + u - Move up a half page
    -   Control + r - Redo changes
- Terminal
    -   Control + a - Move to the beginning
    -   Control + e - Move to the end
    -   Control + f - Move forward one character
    -   Control + b - Move backwards one character
    -   Control + w - Delete all prior characters until the next space
    -   Control + u - Delete all characters
    -   Control + c - Send interrupt signal (SIGINT) to the current process
-   Visual Studio Code
    -   Control + Shift + p - Launch Command Palette (Windows and Linux)
    -   Control + ` - Launch Terminal
    -   Control + / - Toggle line comment (Windows and Linux)
-   Other
    -   Control + x - Cut (Windows and Linux)
    -   Control + c - Copy (Windows and Linux)
    -   Control + v - Paste (Windows and Linux)
    -   Control + z - Undo changes (Windows and Linux)
    -   Control + y - Redo changes (Windows and Linux)
    -   Control + t - Open new tab (Windows and Linux)
    -   Control + w - Close current tab (Windows and Linux)

If you use an IDE or another type of technical program, chances are that keyboard shortcuts in that program also make heavy use of the Control key.
Clearly, the Control key deserves a prominent position on many software developers' keyboards.

### How to Remap Caps Lock to Control

The most convenient way to replace Caps Lock with Control is not to remap at all.
An excellent line of keyboards called the [Happy Hacking Keyboard](https://pixelfed.social/p/idian.io/360138290466426027) (HHKB) is set up by default to have the Control key in the recommended position.
Alternatively, any programmable keyboard (with onboard memory) can also be easily configured to have this feature.
With one of these solutions, your operating system needs no further configuration; you can connect your keyboard to any computer and keep the same mapping you are used to.

Remapping Caps Lock to Control is most simple on macOS.
All that is needed is to change the Modifier Keys configuration in the Keyboard settings.
This performs the remapping on the OS-level.
A similar setting exists on iPadOS.

On Windows, I recommend installing the [PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/) utility from Microsoft.
PowerToys is an excellent open-source project that give power users more ways to configure Windows.
Note that you probably want to set PowerToys to run on startup and to run as administrator.
The latter allows your PowerToys keymappings to take effect even when running an application as administrator.

Per usual, there are myriad ways to remap keys on Linux.
The way you might want to do it would depend on your preference, your distro, and your desktop environment.
On Pop!_OS 20.04 LTS (GNOME), my favourite way is to run this in the command line:

```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['ctrl:nocaps']"
```

In my experience, this method is simple, reliable, and requires no additional installation.

### TL/DR

The Caps Lock key has limited use but occupies a prominent position in modern keyboards.
On the other hand, the Control key is much more useful but is more difficult to reach.
In this post, I recommend remapping Caps Lock to Control and provide ways to do this in popular operating systems.
As an alternative, I suggest using a keyboard that either has this layout by default or can be programmed with this layout.
