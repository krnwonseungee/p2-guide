# How can I use local git branches to make spiking easier?

## What is spike code?
Spike code is code that is written to solve a particular problem.  It is separate from normal code in that you throw out normal coding best practices when you are spiking.

Spiking is particularly helpful when learning a new technology or library.

It can help isolate a bug or error because your code is separate from the rest of you code base.  As a result, you don't have to wonder whether a bug or error is caused by something else in the project or environment unrelated to the actual problem in question.

Some people spike to estimate the time it will take to complete a user story.

Here is an example of a spike to find out whether an exception is thrown if you go over a maximum integer value.

```java
  public class ArithmeticOverflowSpike {
      public static void main(String[] args) {
          try {
              int a = Integer.MAX_VALUE + 1;
              System.out.println("No exception: a = " + a);
          }
          catch (Throwable e) {
              System.out.println("Exception: " + e);
          }
      }
  }

  No exception: a = -2147483648
```

## Local git branches
Local git branches can be created to work on a specific spike.  Some people like to name the actual branch 'spike.'

Don't merge spike code into your actual code.  The idea is that spike code is just to solve a particular problem.  You shouldn't then merge this back into your main project or production environment.  It can be tempting to do this, and just write tests that your spike code will pass.  However, this is considered bad practice.

Once you are done answering the question that your spike was meant to answer, you can throw it away.  Alternatively, you can leave existing spikes so you or another developer can reference it in the future.

### Resources
http://odetocode.com/blogs/scott/archive/2008/11/18/spike-code-and-source-control.aspx

http://codebetter.com/jeremymiller/2008/11/12/don-t-check-in-spike-code/

http://www.jamesshore.com/Agile-Book/spike_solutions.html