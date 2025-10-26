---
layout: post.njk
title: "Writing an App Uninstaller for macOS"
date: 2022-08-16
description: "`zap` is a simple app uninstaller for macOS. Here I write some thoughts around creating `zap`, an effective and user-friendly uninstaller to help users remove applications and associated files."
---

### What did I make?

The process of uninstalling apps on macOS can be disorienting for new users.
While on Windows, users typically use an uninstaller or the *Add or Remove Programs* utility, uninstalling apps on macOS simply means dragging the .app file to trash.
For many, this minimalistic process triggers distrust and disbelief.
What about preference files and other gunk written by the application that presumably remain in the system?

I recently wrote an app uninstaller called [`zap`](https://github.com/idianal/zap) that deals with this problem.
It is command-line only and is packaged as a script that can be downloaded from GitHub and run without installation.

`zap` is similar to other uninstaller applications on macOS like [AppCleaner](http://freemacsoft.net/appcleaner/) in that it tries to accomplish the same task.
Unlike AppCleaner, `zap` is free and open source.
Users can be confident that `zap` does only what it says it does.

For a short usage guide, see the readme [here](https://github.com/idianal/zap).

### Decisions, decisions...

To find files to remove, `zap` first checks inside the .app file.
In macOS, .app files are directories that contain the binaries and ancillary files related to the application.
`zap` expects to find a file called Info.plist, which contain identifiers for the application.

`zap` looks in some common directories for any files that contain the retrieved identifiers.
Instead of deleting, it moves these files to trash.

In my testing, the approach used provides a good balance of reliability and protection.
`zap` intentionally casts a wide net to gather files for deletion but it requires a manual review from the user to mitigate any false positives.

There are also obvious limitations:

1.  To find files to delete, `zap` relies on identifiers in Info.plist.
    If an unrelated file's name somehow contains one of the identifiers, it will be moved to trash.
2.  Only a static list of directories are searched.
    Any files written to unconventional locations in the file system will be missed.
3.  Manual intervention is required to completely delete any files found.
    This step is required to give the user a chance to restore any false matches.

### The state of uninstallers

The process of uninstalling apps is imperfect and messy on macOS, and the situation isn't much better on Windows and Linux.
Mass-market operating systems generally allow apps the freedom to write to unconventional locations on the file system.
As a result, app uninstallation often leaves behind unnecessary files.
While these files are usually unobtrusive and insignificant, some users certainly prefer that these files be removed as part of the uninstallation process.

### Recommendations

In my opinion, it is unlikely the situation will improve anytime soon for personal computers.
I recommend the following multi-part approach:

1.  Mostly follow the officially-supported way of uninstalling apps.
    On macOS, this typically means simply dragging the .app to the trash.
2.  On a regular basis (perhaps once every 1-2 years), completely refresh your computer.
    This means removing files and directories and reinstalling the OS.
    To make this process easier, one can use a Time Machine image *from a freshly-installed state*.
3.  In rare instances where you want to purge an app from your system without doing a complete refresh, use `zap`.
