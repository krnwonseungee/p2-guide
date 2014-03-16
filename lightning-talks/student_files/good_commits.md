GIT Commit Good Practice
-

###**Structural split of changes:**

**For committing your code changes: Less is not more. More is more.**  
**In other words: commit often.**

**Some guidelines:**
 
- Only one "logical change" per commit.
- The smaller the amount of code being changed, the quicker & easier it is to review & identify potential flaws.
- If a change is found to be flawed later, it may be necessary to revert the broken commit
- Avoid mixing two unrelated functional changes.  
(E.g. If you have an College Productivity program. And you create an edit_favorite_courses method for your User class, and then creating a give_all notes in your Notebook class, and then commiting that. That's bad.)

###**Information in commit messages**

When writing you commit: do not assume...

- the reviewer understands what the original problem was.
- the reviewer has access to external web services/site.
- the code is self-evident/self-documenting.

####**Some guidelines:**
**Describe what and why.**
E.g. Removed `edit_favorite_courses` method from Student model, since is redundant to the `edit_favorites` method.

**Sufficient yet succinct information.**
Bad example: Removed `edit_favorite_courses` method from Student model, because the `edit_favorites` method in the same model does the same function already, in addition to editing the favorite professors.

**Describe limitations in change, if any.**
E.g. "Added add_a_course functionality for Student model. No way yet to verify if the course was a duplicate or if student is repeating course."

By: Christine Dolendo
