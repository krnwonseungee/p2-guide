# What makes a good Pull request?

What:
* Think of pull requests as super-commits: you're not just
 changing files, but an entire codebase
* Pull requests enable several developers to work on the same codebase at the same time with less conflict than if everyone's on `master`
* Pull requests let repository owners choose which contributions to merge into the main branch

Why:
* Pull requests can help code review
* 
* Pull requests create an audit trail, something you can follow even a year from now.

How:
* `git checkout -b [new branch name]` or through GitHub
* check whether the master branch has changes you need on yours; 
`git merge master` on your local new branch if so
* write thorough commit messages: a 50-character summary, more words in description: tell us what you've built, 
what you're fixing. If you're using an issue tracker, include the number of the issue you've handled.
* Write a good description. What does this pull request do? How do you test it? What bugs does it work around?
* review what's changed in master since you created your branch--will you have to merge?
* Assign a reviewer for pull requests. Some places use GitHub label "needs review" to mark.

When:
* create a branch for the feature you're adding
* do your work, push it, make the pull request
* delete that feature branch once your code is in master--you don't need it anymore!

Where:
* Through the repository page on GitHub, or on the command line using [Hub](http://hub.github.com/)