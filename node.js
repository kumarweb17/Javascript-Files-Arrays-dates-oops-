`1. Non-Blocking I/O
In standard I/O systems, a request can be issued only after the previous request’s response has arrived. However, Node.js doesn’t follow the same principle. Node.js first sends the request in an event loop and then it handles the next request in the call stack. As soon as the request that is pending gets executed, it informs Node.js and then gets the response rendered on the browser.

2. Prototype
Unlike C++ and Java, JavaScript doesn’t offer the concept of classes. Hence in JS, an object has to be created first. It is only then that we can augment an object or even create our own objects from it. This concept is known as Prototypal Inheritance as the objects are not implemented through the classes, but are implemented through the prototype. Each JS object can inherit properties from a prototyped object it is linked to.

3. Modules
Modules are basically simple JavaScript files that contain small codes for a particular purpose. It is pretty much similar to packages in Java. They make the code a lot easier to understand and work with. To use its properties, we will have to ‘require’ it in a JavaScript file, more or less in the same way we ‘import’ packages in Java. The two types of modules are-

Core Modules- They are pre-compiled along with the Node.js library. It provides the developers with the code sections that recur often, whose absence would make it tedious for developers.
User Defined Modules- Developer creates these modules for a specific purpose in his/her application.
4. Functional Programming
It is the process of developing software by composing pure functions. It has some minimum requirements and it can be done only by avoiding shared state, side effects, and mutable data. Functional programming isn’t imperative, rather is declarative. It is a programming paradigm, which means that it’s the procedure of developing software using a few fundamental principles. The code of functional programming often tends to be pretty concise, making it easy to understand and implement.

5. Asynchronous programming
The processing and execution technique of JavaScript is a little complicated, and it follows a certain predetermined algorithm. JavaScript applications continue to execute in a single event loop. This doesn’t mean that we should freeze the other applications just because some complicated functions are in progress and continue to wait for network requests. Asynchronous programming is a concept that is used to bring in Process Concurrency in the JavaScript executions. Callback is a concept that implements Asynchronous programming.
6. Callbacks
Callback is one of the most commonly used functional programming concepts. It is a function which gets executed once another function gets executed. It can be passed as an argument to another function and can be executed or returned from that function so that it can be executed later.

7. Events
If the user manipulates a web page or if the browser causes a similar manipulation of the webpage,  the interaction between JavaScript and HTML will be handled by ‘events’. Loading of a page, the user clicking a button on the screen or pressing a key on the keyboard, closing or resizing a window are all examples of an event. Developers can use events to execute JavaScript coded responses. These can give the user a particular message, or it could enable the data to be validated and can also fulfill many other similar applications too.

8. Streams
A stream is an abstract interface implemented by various objects in Node.js. So in simple words- it is a collection of objects in sequential flow. Streams can be readable, writable or even both. Request made to an HTTP server, sliding window protocol are the examples of a stream.

9.Closures
Closures are vital to the success of a web application development. A closure basically stores the function state, even after that function has been returned. To create a closure, a function has to be defined and then exposed i.e. it has to be returned or passed on to another function. The inner function would have access to all the variables that were declared in the outer function. This technique is generally used to give data hiding and data privacy.

10. Aspect Oriented Programming
Aspect Oriented Programming is a technique for modifying the behavior of functions, methods, and objects non-invasively.  It allows us to add new behaviors and also combine and modify existing behavior from the outside. Despite the presence of many other techniques for adding and modifying behavior, such as inheritance, delegation, and composition, AOP tends to be more flexible and less invasive in most situations.`