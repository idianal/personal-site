---
layout: post.njk
title: "Keeping Your Place with Git Worktrees"
date: 2026-04-03
description: "Git worktrees let you check out multiple branches simultaneously into separate directories&mdash;a cleaner alternative to stashing when you need to context-switch without losing your place."
---

### The context-switching problem

It happens often enough: you are in the middle of a feature branch, files scattered in various states of half-done work, and something urgent comes up.
A bug needs a hotfix.
A colleague asks you to review their branch.
You need to run the app on a different branch to compare behaviour.

The usual answer is `git stash` --- push your work onto a temporary stack, switch branches, do what needs to be done, switch back, pop the stash.
This works fine for small interruptions.
But for longer context switches, stashing starts to feel clumsy.
You lose the mental picture of where you were, and there is always a small risk of forgetting you left something on the stash.

Git worktrees offer a cleaner solution.

### What is a worktree?

When you clone a repository, Git creates a single working tree --- the directory where you see and edit files.
A worktree is simply an additional working tree linked to the same repository.
Each worktree can be checked out to a different branch simultaneously, and they all share the same underlying `.git` data.

The result is that instead of switching branches within a single directory, you can navigate between branches the same way you navigate between directories.

### Basic usage

To add a worktree, run the following from inside your existing repository:

```bash
$ git worktree add ../personal-site-hotfix hotfix/my-fix
```

This creates a new directory at `../personal-site-hotfix` (relative to your current position) and checks out the branch `hotfix/my-fix` there.
If the branch does not exist yet, you can add the `-b` option:

```bash
$ git worktree add -b hotfix/my-fix ../personal-site-hotfix main
```

This creates the branch `hotfix/my-fix` from `main` and checks it out in the new directory.

From this point, you have two independent working trees:

-   Your original directory, still on your feature branch, untouched.
-   A new directory at `../personal-site-hotfix`, on the hotfix branch, ready to go.

You can open a second terminal, `cd` into the new directory, make your changes, and commit --- all without disturbing your original working tree.

To see all active worktrees, run:

```bash
$ git worktree list
```

Once you are done with the worktree, remove it:

```bash
$ git worktree remove ../personal-site-hotfix
```

### Practical scenarios

1.  Hotfixes without losing your place

    This is the scenario I use worktrees for most often.
    Rather than stashing half-done work, I add a worktree for the hotfix branch, make the fix, and remove the worktree when done.
    My feature branch remains exactly as I left it.

2.  Reviewing a pull request

    Reviewing code that requires actually running the application used to mean stashing or committing before switching branches.
    With a worktree, I can check out the branch under review into a separate directory, run the app there, and keep my own work running in the original directory at the same time.

3.  Running parallel builds

    If you maintain builds across multiple branches at once --- say, a stable release branch and a development branch --- worktrees let you keep them both ready without any branch switching overhead.

### A few things to keep in mind

-   You cannot check out the same branch in two worktrees at the same time.
    Git will prevent this and return an error.
-   Worktree directories persist on disk until you explicitly remove them.
    It is a good habit to clean them up once you are done to avoid accumulating stale directories.
-   Since all worktrees share the same `.git` directory, any commits you make in a worktree are immediately visible from other worktrees and from the main repository.

### TL/DR

Git worktrees let you work on multiple branches simultaneously without stashing or committing incomplete work.
For quick context switches --- hotfixes, PR reviews, parallel builds --- they are a notably cleaner alternative to the usual branch-switching workflow.
