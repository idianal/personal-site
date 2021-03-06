---
layout: post.njk
title: On Shorter Retry Loops in Elden Ring
date: 2022-04-17
---

Elden Ring is the newest game from acclaimed Dark Souls developer FromSoftware.
It has released to near-universal praise and currently sits among the most highly-rated games of all time according to Metacritic.
Elden Ring retains and refines many design patterns present in other FromSoftware games like Dark Souls, Bloodborne, and Sekiro.
But unlike any other game from this developer, Elden Ring is situated in an expansive open-world setting, which has been compared to The Elder Scrolls V: Skyrim and The Legend of Zelda: Breath of the Wild.

In Elden Ring, FromSoftware has been able to expertly balance several complex game systems with jaw-dropping precision.
In this post, I discuss how Elden Ring encourages learning from failure better than its predecessors and reflect on how this same pattern can be applied to writing software.

FromSoftware's games are known to be "tough but fair".
By tradition, one of the first things each Souls game teaches its players is that death comes swiftly and often.
This lesson is not taught through a conversation with an NPC or some pop-up text but through gameplay.
Players are fully expected to have to fight important enemies many times to learn their attack patterns and weaknesses.
However one aspect of Souls games that has been a cause of frustration for new and experienced players alike is the dreaded walk back to the boss after a defeat.

In Souls games, the walk back to a boss is traditionally unnecessarily long and dangerous.
As a result, retrying a boss encounter becomes a long, arduous process.
For games where players are expected to die several times to the same boss, it is obvious to see how this loop can cause many to quit in frustration.

Elden Ring breaks out of the mold by shortening the retry loop for many of its important enemies.
In Elden Ring, when a player dies to a boss, the walk back is usually short and relatively safe.
This is a significant improvement because it minimizes frustration and encourages looking at defeat as a genuine opportunity for learning.
In Elden Ring, instead of feeling dejection, I often found myself smiling even after losing by the smallest of margins.
I even found that I was better able to stay in a flow state across boss attempts.

This truncated retry loop in Elden Ring contributes highly to my enjoyment of the game.
While in the other games I would start to feel some frustration after the second or third attempt at a boss encounter, in Elden Ring my mind was fully engaged with thinking up and executing on a game plan.

When writing software, a similar loop can come, for example, in the following forms:

1.  Finding and fixing a bug,
2.  Calling an unfamiliar API, or
3.  Analyzing an prorgam's behaviour or performance.

Like bosses in Souls games, these programming tasks require cycling many times through compiling, running, debugging, and modifying code.
Whenever a loop like this exists for a software development task, it is worth considering whether something can be done to shorten the retry loop.
Doing so can save time and prevent frustration.
It is also usually much more satisfying to solve the problem of shortening a retry loop than mindlessly repeating a set of tasks.

This practice of reducing dull repetition can also give developers opportunities to write small, focused programs to make their jobs easier.
The following quote by Abraham Lincoln comes to mind: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
