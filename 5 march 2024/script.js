"use strict"  // well check error strickly we use it for debuging || The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.


// Creating H1 and put content and attributes by JS
let newElm = document.createElement('h1'); // create h1 in newElm
newElm.setAttribute('id','helo'); // setting id = "helo"
newElm.innerHTML = 'hello world' //
document.body.appendChild(newElm)
console.log(newElm);
let image = document.createElement('img');
image.setAttribute('src','images/pic.jpg');
image.setAttribute('style','width : 500px; height : auto');
document.body.appendChild(image)
console.log(image);

