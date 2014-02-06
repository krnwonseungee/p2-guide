Most of this is from: http://guides.rubyonrails.org/layouts_and_rendering.html  

Partial templates, aka "partials" help to make the views more manageable by breaking them down into smaller chunks.

In Rails:
<%= render :partial => "menu" %>

Rails will look for and render a file called _menu.html.erb

In Sinatra
<%= erb :menu %>

Partials should be named with a leading underscore to distinguish them from regular views.

Think of Partials as method calls.

Methods contain some chunk of code that executes when it is invoked.

Partials contain embedded ruby (erb) code that executes when the partial is invoked (aka called).

You can also call partials directly from layouts.
  Especially useful for content that is shared among all pages in your application.

Partials can use its own layout file:
<%= render :partial => "link_area", :layout => "graybar" %>

You can pass variables into partials:
<%= render :partial => "form", :locals => {:zone => @zone}

Every partial also has a local variable with the same name as the partial (minus the underscore)

You can pass an object in to this local variable via the :object option

<%= render :partial => "customer", :object => @new_customer %>
Within the customer partial, the customer variable will refer to @new_customer from the parent view.

Rendering Collections
When you pass a collection to a partial via the :collection option, the partial will be inserted once for each member in the collection
<%= render :partial => "product", :collection => @products %>

By convention Rails makes |product| available to you.

To use a custom local variable name:
<%= render :partial => "product", :collection => @products, :as => :item %>

You can call product_counter to tell you how many times the partial has been rendered (while it is rendering a collection)
Included automagically thanks to Rails.

You can also specify a second partial to be rendered between instances of the main partial by using the :spacer_template option:
<%= render :partial => "product", :collection => @products, 
  :spacer_template => "product_ruler" %>

The Sinatra Documentation: http://www.sinatrarb.com/

Sinatra Book: http://sinatra-book.gittr.com/

API Documentation for Sinatra: http://rubydoc.info/github/sinatra/sinatra

In Sinatra, erb and haml simply returns a string.

vanilla Sinatra only supports very basic partials functionality.

See Sinatra-Partial extension gem for a better partials implementation. It makes partials support rending collections and partials in subdirs.

<%= partial(:mypartial) %> <!--(1)-->
<%= partial(:'admin/mypartial') %> <!--(2)-->
<%= partial(:object, :collection => @objects) %> <!--(3)-->
<%= partial(:'admin/object', :collection => @objects) %> <!--(4)-->

In (1) & (2), the partial will be rendered plain from their files, with no local variables (specify them with a hash passed into :locals). In (3) & (4), the partials will be rendered, populating the local variable object with each of the objects from the collection.

