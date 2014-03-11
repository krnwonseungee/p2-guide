## The  [Sinatra Skelton](../../../sinatra-skeleton-mvc-challenge)

### The Files
Provide a brief description of the file next to your name, be prepared to give a 1 min presentation of this.

* Brittan McGinnis - controllers/index.rb
* Christine Dolendo - helpers/format.rb
helpers/format.rb is the file where you put your helper methods specific to formatting for your view, and can be used inside of your view templates. (Note: you can use helper methods on a ton of things other than formatting for your view such as logging and sessions, but you'd likely put it in another file)
* Drew Parker Eric - models folder
* Eric Joseph Johnson -views/ layout.erb - A master HTML file that all child files are styled/structured after.
* Germain Boue - config/database.rb - Loads all the necessary files for app including the database connection, autoload is a feature that allows you to only load when you need to.
* Erin Snyder - views/ index.erb - Design. Takes data from the user via the controller, passes the display settings back to the controller to be shown to the user.
* Jackie Johnston - config/environment.rb
This is where:
  - all your gems are required
  - the constant is stored for your path-centric logic
  - the sessions are enabled and variable(s) set-up
  - the path locations for root, views, etc. are set-up
  - the database configuration is required
  - the controllers and helpers are required
* Janet Yi - db/migrate/..create_bands.rb - Migration file to create the table bands. Create Bands is a child class of the Active Record module, Migration class. method change to denote a change in the database. creates table bandS (PLURAL), with column "name" as string .
* Jason Lo - public/css/normalize.css- renders HTML consistently across major browsers.
* Jordan Luyke - public/css/application.css - main css file that helps display content across all html files in the application
* Katherine Hayden - public/js/application.js - the container for javascript that is loaded on document ready.
* Lucas Mathis - db/seeds.rb - seeds information into your database. default to band names so you should probably write your own seed methods.
* Lyndsey Williams - spec/band_spec.rb
* Mason O'Neal - spec/index_controller.rb - This file is where you would have code that runs controller tests (tests of your controller code).
* Matt Bechtel - spec/spec_helper.rb - This file forces the environment to become the test environment (by loading add'l gems). Any specs(tests) we write will require this file.

* Melanie Archer - spec/factories/band.rb

  Uses the methods provided by the FactoryGirl gem to create
  the Band object for testing purposes. This is preferable to using `Band.create`
  over and over in the tests--for instance, it's easier to update the test when the Band object's
  structure changes in some way.

* Michael Gleason - Gemfile
* Namrata Honnavar Gemfile.lock
* Nicholas Cu - config.ru
* Ryan Wood - .rspec
  The .rspec file is used to store non-default configuration settings for Rspec's output. Common settings are --color (which colors the terminal output) and --format documentation. See below for the latter output:

      something
        does something that passes
        does something that fails (FAILED - 1)
        does something that is pending (PENDING: Not Yet Implemented)

* Zohar Liran - Rakefile
  - Rake is a software task management tool. 
  - The word itself stands for Ruby Make.
  - It is just another ruby file with ruby syntax that is interperted using the rake gem.
  - The rake file contains tasks which we can execute using the rake command.
  - Once we issue the rake command, rake searches the current folder for rake files, if a rake file is not found, the system will continue up the folder structure until it finds one.
  - Multi rake files are usually placed in "rakelib" folder. In Rails the convention is to place them under lib/tasks
  - The tasks in the rake file can have prerequisites and will have the following structure:
  task :name => [preq1, preq2] do
    #actions
  end




### Open Questions:


