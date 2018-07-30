/* ----------------------- Some common iqs----------------------------------------- */

//1. Change The Url in javascript

//history.pushState({},"home/allinclusive","http://localhost:4200");  //To Hide Url From User  

2. //window.scrollTo();
// Click the button to scroll the document window 300 pixels horizontally and 500 pixels vertically.
//<button onclick="scrollbtn()">Click me to scroll</button>

function scrollbtn() {
    window.scrollTo(300, 500); //window.scrollTo(xpos, ypos);
    window.scrollTo(0, 0); //for top page 
}

//3. To empty  All console.log()'s;
  console.log = function() {}
//4. get current Url in javascript
//different ways
 //1.window.location.href;
"https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript";
//2.location.hostname;
//"stackoverflow.com"
//3.document.URL //will get you the URL of the current page.

//4. How can I refresh a page with jQuery?
//Use location.reload():

/*$('#something').click(function() {
    location.reload();
});*/
//window.location.reload();  // in javascript

//5  Use Strict;

`Strict mode helps out in a couple ways:

1.It catches some common coding bloopers, throwing exceptions.
2.It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
3.It disables features that are confusing or poorly thought out.`
ex:
// Non-strict code...

(function(){
    "use strict";
  //x=10;   //O/P: x is not defined  in strict mode 
  var y=10;   //correct
    // Define your library strictly...
  })();
  
  // Non-strict code... 