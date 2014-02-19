# Week 4, Wednesday Morning

## REST in ten minutes

Action  | HTTP Verb | Path             | CRUD Verb | Notes
------- | --------- | ------------     | --------- | -----
index   | GET    | '/puppies'          | Read   | The only collection action.
show    | GET    | '/puppies/:id'      | Read   | Profile page
create  | POST   | '/puppies/'         | Create | Takes in form info
update  | PATCH  | '/puppies/:id'      | Update | Takes in form info
destroy | DELETE | '/puppies/:id'      | Delete | Deletes an element
new     | GET    | '/puppies/new'      | Read   | Display form for new to consume
edit    | GET    | '/puppies/:id/edit' | Read   | Display form for edit to consume

I found the following charts helpful in understanding REST and RESTful routes:

- [REST applied to web services](http://en.wikipedia.org/wiki/REST#Applied_to_Web_Services)
- [CRUD, Verbs, and Actions](http://guides.rubyonrails.org/routing.html#crud-verbs-and-actions)

## Deploying to Heroku

- [The Curse of Expertise](https://twitter.com/seriouspony/status/435512168272760832)
- [Deploying Rack-based apps](https://devcenter.heroku.com/articles/rack#frameworks)
- [Running Rake Commands](https://devcenter.heroku.com/articles/rake)