## How can I use git branches to make spiking easier?

You should never work on a clone of master, and you should never send a pull request from master - always from a branch.

Helpful stuff

Workflow
 - git status
 - git diff
 - git add file1 newfile2 newfolder3
 - git commit -v

Check up on stuff
 - git log
 or
 - git log --stat --summary

Git branching
 - git branch
    (shows current branches)
 - git branch new_branch
    (creates a branch called new_branch)
 - git checkout <branch_name>
    (moves HEAD to branch_name)
 - git merge other_branch_name
    (merges the diff between two branches)
 - git rebase other_branch_name
    (makes the current branch the same as the specified branch, and then applies all of the changes between the current branch and the common ancestor of the two branches)

Finally

 - git push origin myBranch



###### Add alias commands to ~/.gitconfig
###### or use this command: $ git config --global alias.ci 'commit -v'

###### Here's a helpful link
[git branching tutorial](http://pcottle.github.io/learnGitBranching/)