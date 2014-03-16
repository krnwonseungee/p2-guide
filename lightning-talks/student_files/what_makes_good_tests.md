What makes a good test?
=======================

- Many things are similar to what makes good code (short, readable, etc.)
  - Debatable what is more important

- Keep description short
  - Description should be less than 40 characters
  - if more than 40 characters split using context

- Create only the data you need

- Use let & context for readability

- Use subject{ } for variables that are used in multiple tests
  - Keeps tests DRY

- Tests should have single expectation
  - One assertion per test

- Expect vs Should
  - According to betterspecs.org: Use expect() on all new projects
  - Expect is newer
  - Tests should be written in third person, present tense

- Consistency should be important
  - If old project is using should() or specific keywords, keep consistency