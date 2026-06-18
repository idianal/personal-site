---
layout: post.njk
title: "Writing a Keyboard Disabler for macOS"
date: 2026-06-18
description: "`heel` disables the macOS keyboard. It is useful when you want to clean your laptop without triggering stray input."
---

### What did I make?

Whenever I wipe down my laptop keyboard, I prefer to disable the keys first.
There are apps that can do this, but none of them are a good fit for me: some are paid, some are closed source, and some do far more than I need.

[`heel`](https://github.com/idianal/toys-python/tree/main/heel) is a small tool that deals with this problem.
It is command-line only and is packaged as a script that can be downloaded from GitHub and run without installation.

Running `heel` disables all keyboard input, including special keys like brightness and volume.
To re-enable the keyboard, press `ctrl + c`.

`heel` requires macOS Accessibility permission.
For a short usage guide, see the readme [here](https://github.com/idianal/toys-python/tree/main/heel).

### Implementation details

`heel` works by creating a `CGEventTap` --- a low-level hook into macOS's input event pipeline provided by the CoreGraphics framework.
The tap sits at the Human Interface Device (HID) level and intercepts keyboard events before they reach any application.
When an event arrives, the callback tells the system to discard it.

Rather than depend on a third-party library, `heel` calls into the CoreGraphics and CoreFoundation system frameworks directly using Python's built-in `ctypes` module.
This keeps the tool dependency-free.

The callback is wrapped in a `ctypes.CFUNCTYPE` object, which must be kept alive for as long as the tap is active.
If it is garbage-collected, the callback pointer becomes invalid and the program will crash.
To prevent this, `heel` holds an explicit reference to the object.

The `ctrl + c` escape hatch is implemented inside the callback itself rather than as a signal handler.
When a key-down event arrives, `heel` checks whether the key is `c` and whether the `control` modifier flag is set.
If so, it calls `CFRunLoopStop` to exit the run loop and proceed to re-enable the keyboard.
All other key events are swallowed.

Limitations of this tool include:

1.  It is macOS only.
    The `CGEventTap` API is specific to macOS.
2.  `ctrl + c` cannot be suppressed.
    By design, there must be a way to escape.
3.  Accessibility permission is required.

### The case for small tools

`heel` is short enough to read in a few minutes and has no dependencies beyond Python's standard library.
Being open source, users can verify what it does before granting it Accessibility permission.
Since input monitoring is involved, this is a reasonable thing to want.

Small, focused tools tend to be easier to trust for this reason.
When the scope is narrow and the source is available, there is nothing to take on faith.
