# How can I use <code>let</code> and <code>context</code> to DRY up my tests?

## Let
Let blocks allow you to provide some input to the subject block that change in various contexts.  You can simply provide an alternative 'let' block for a given value and not have to duplicate the setup code for the subject over again.

For the method defined by <code>let</code>, the initialization code only runs if the example calls it.  <code>let!</code> will eager-load the variable. initializes it before it's ever used.

```ruby
  # this:
  let(:foo) { Foo.new }
  # is very nearly equivalent to this:
  def foo
    @foo ||= Foo.new
  end
```

## Shared Context
Shared contexts allow you to inject context that will be used by their host's examples. Shared contexts are mostly useful when there are several examples that share some initial state, but they are can't be specified well in a single describe block through nesting.

Example:
```ruby
  shared_context "shared stuff" do
    before do
      @shared_var = :some_value
    end

    def shared_method
      # ...
    end

    let(:shared_let) { :some_value }
  end
```
Then, we include it in our example group like this:
```ruby
  describe "group that includes a shared context" do
    include_context "shared stuff"

    it "has access to everything defined in shared context" do
      @shared_var
      shared_method
      shared_let
    end
  end
```
## Examples (opposite of context)
Shared examples extract complete sections of sysetm under test specification into shared examples. Especially useful for specifying inheritance hierarchies.

Example:
```ruby
shared_examples_for Serializable do
  # ...
end

describe Dictionary do
  it_behaves_like Serializable
  # ...
end

describe TreeGraph do
  it_behaves_like Serializable
  # ...
end
```
### Resources
http://benscheirman.com/2011/05/dry-up-your-rspec-files-with-subject-let-blocks/

http://testdrivenwebsites.com/2011/08/17/different-ways-of-code-reuse-in-rspec/

http://betterspecs.org/#let

http://betterspecs.org/#contexts

http://stackoverflow.com/questions/5359558/when-to-use-rspec-let/5359979#5359979
