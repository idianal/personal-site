---
layout: post.njk
title: "Writing a PDF Metadata Editor"
date: 2026-05-19
description: "`etch` is a simple PDF metadata editor. Here I write some thoughts around creating `etch`, a lightweight tool for viewing and editing the metadata of PDF files."
---

### What did I make?

PDF files often carry incorrect or incomplete metadata.
A paper downloaded from a server might have a title like *draft_final.docx*.
A document exported from another program might have a completely empty author field.
For users who rely on a PDF reader to organize a library of documents, this matters.

I recently wrote a tool called [`etch`](https://github.com/idianal/toys-python/tree/main/etch) that deals with this problem.
It is command-line only and is packaged as a script that can be downloaded from GitHub and run without installation.

Running `etch` with just a file path displays the current metadata.
Passing `--title` or `--author` or both shows a before-and-after preview and asks for confirmation before making any changes.

For a short usage guide, see the readme [here](https://github.com/idianal/toys-python/tree/main/etch).

### Implementation details

Rather than reading and writing PDF metadata directly, `etch` delegates this work to [`exiftool`](https://exiftool.org/), a well-established utility created by Phil Harvey that handles metadata for many file formats.
`etch` checks that it is installed at startup and exits with a clear message if it is not.

When writing changes, `etch` passes `-overwrite_original` to `exiftool`.
This flag alters `exiftool`'s default behaviour of keeping a  backup of the original file before modifying it.
Instead of keeping a backup, I opted to ask the user to confirm their change.

Limitations of this tool include the following:

1.  `etch` can only edit title and author.
    Other metadata fields are not supported.
2.  `etch` requires `exiftool` to be installed.

### Keeping a curated document library

The quality of PDF metadata varies widely and is largely determined by the tool used to create the file.
Unfortunately, most tools do a poor job.
Files exported from word processors tend to carry over whatever document title was last saved, and scanned documents often have no metadata at all.
This is mostly outside the user's control.

Correcting PDF metadata by hand is a low-priority task for most people.
But for those building a well-organized document library, it is worth doing.
