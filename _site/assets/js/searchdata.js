
var jsondata=[
  
    {
      "title"    : "Welcome to Jekyll!",
      "category" : "",
      "tags"     : "",
      "url"      : "/blog/posts/2020/05/09/welcome-to-jekyll.html",
      "date"     : "2020-05-09 19:55:26 +0530",
      "content"  : "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.Jekyll requires blog post files to be named according to the following format:YEAR-MONTH-DAY-title.MARKUPWhere YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.Jekyll also offers powerful support for code snippets:def print_hi(name)  puts Hi, #{name}endprint_hi('Tom')#=&gt; prints 'Hi, Tom' to STDOUT.Check out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk."
    } ,
  
    {
      "title"    : "Example Post",
      "category" : "",
      "tags"     : "",
      "url"      : "/blog/posts/2020/01/01/example-post.html",
      "date"     : "2020-01-01 00:00:00 +0530",
      "content"  : "Example postThis is an example post. You can edit it or create a new one"
    } 
  
  ,
  
   {
     
     
        "title"    : "404.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/404.html",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "404.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/404.html",
        "date"     : "",
        "content"  : "  404  Page not found :(  The requested page could not be found."
     
   } ,
  
   {
     
     
        "title"    : "About",
        "category" : "",
        "tags"     : "",
        "url"      : "/about/",
        "date"     : "",
        "content"  : "This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at jekyllrb.comYou can find the source code for Minima at GitHub:jekyll /minimaYou can find the source code for Jekyll at GitHub:jekyll /jekyll"
     
   } ,
  
   {
     
     
        "title"    : "index.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/blog/index.html",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "index.markdown",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : ""
     
   } ,
  
   {
     
     
        "title"    : "main_page.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/main_page",
        "date"     : "",
        "content"  : "This is a sample of main page. You can edit it to start your wiki.For documentation, installation guide and demo of git-wiki-theme visit this link"
     
   } ,
  
   {
     
     
        "title"    : "CHANGELOG.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/CHANGELOG.html",
        "date"     : "",
        "content"  : "## [2.0.3-dev.1](https://github.com/twyr/twyr.github.io/compare/2.0.3-dev.0...2.0.3-dev.1) (2020-05-08)### Bug Fixes* **release:** config file ([a1d8c8e](https://github.com/twyr/twyr.github.io/commit/a1d8c8e))### Features* **release:** semantics update ([5b8f0a8](https://github.com/twyr/twyr.github.io/commit/5b8f0a8))## 2.0.3-dev.0 (2020-05-07)### Features* **commitizen:** cnoventional-commit ([b0404bc](https://github.com/twyr/twyr.github.io/commit/b0404bc))* **init:** getting back into this game ([eeba39f](https://github.com/twyr/twyr.github.io/commit/eeba39f))* **release-it:** adding a release manager dependency ([97ed6a1](https://github.com/twyr/twyr.github.io/commit/97ed6a1))* **release-it:** release semantics ([797b86f](https://github.com/twyr/twyr.github.io/commit/797b86f))"
     
   } ,
  
   {
     
     
        "title"    : "index.md",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : "Hello World"
     
   } ,
  
   {
     
     
        "title"    : "Example page",
        "category" : "",
        "tags"     : "",
        "url"      : "/example-page",
        "date"     : "",
        "content"  : "## Example pageThis is an example page. You can edit it or create a [new one](new_page.md)"
     
   } ,
  
   {
     
     
        "title"    : "redirect.html",
        "category" : "",
        "tags"     : "",
        "url"      : "/",
        "date"     : "",
        "content"  : ""
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


