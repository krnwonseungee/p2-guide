###Responsive Web Design
####What is responsive web design?
#####RWD is an approach to designing websites where the site style may change based on the viewing device. RWD maximizes readability for the user.

####What are some responsive web design techniques?
#####RWD uses CSS media queries to figure out the size of the viewing browser. Based on the browser size, the page will render with different style. There are certain screen sizes called "breakpoints", which are determined by the designer, at which the style of the page will change. RWD also tends to use fluid grid concepts for element sizing, in which element sizes are measured in relative units (percentages) rather than absolute units (pixels).

####What is an example of a responsive web site?
#####The following URL is a very basic example of RWD. Click and drag to change the size of your browser window and see how the style changes!
http://jasonylo.com/portfolio/HTML_CSS_projects/responsive/index.html

####Example of some RWD CSS Code
```css
@media screen and (max-width: 1024px){
  #logo, #links{
    width: 100%;
    text-align: center;
  }

  ul.nav {
    text-align: center;
    float: left;
  }
}
```
####Other resources:
http://en.wikipedia.org/wiki/Responsive_web_design  
http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design  
http://www.targetlocal.co.uk/responsive-web-design-resources/  
http://alistapart.com/article/responsive-web-design  




