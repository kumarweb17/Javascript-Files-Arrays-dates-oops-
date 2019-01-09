`
Q).call() function  (why use .call() we have already function calling)

1.The call() method calls a function with a given this value and arguments provided individually.
2.call is used when you want to control the scope that will be used in the function called. 
You might want the this keyword to be something else than the scope you assigned the function to, 
in those cases you can use call or apply to call the function with your own scope.
`

//Example with .call() we tell it what "this" refers to:

function x() {
    return this;
}

var obj = {
    myName      : 'kumar',
    myLocation  : 'hyderabad'
}

var res=x.call(obj);

console.log(res) // o/P: { myName: 'kumar', myLocation: 'hyderabad' }

//It can be used to emulate inheritance in OOP.

Example:

var Robert = {
    name: "Robert Rocha",
    age: 12,
    height: "5.1",
    sex: "male",
    describe: function() {
        return "This is me " + this.name + " " + this.age + " " + this.height + " " + this.sex;
    }
};

// Lets say that the above is a master object(prototype) and you want to inherit the function describe in another object:

var Richard = {
    name: "Richard Sash",
    age: 25,
    height: "5.4",
    sex: "male",
}

//The Richard object does not have the describe function and you want to simply inherit ,so to speak, the function. You would do it like so:
console.log( Robert.describe.call( Richard ) );  // O/P : This is me Richard Sash 25 5.4 male    -> (methodname.call(objname))
`
Q)The Difference Between Call and Apply in Javascript?

1.The difference is that call() takes the function arguments separately, 
and apply() takes the function arguments in an array.

Call:
function.call(thisArg, arg1, arg2, ...);
Apply:
function.apply(thisArg, [argsArray]);


2.The difference is that apply lets you invoke the function with arguments as an array; 
call requires the parameters be listed explicitly. 
A useful mnemonic is "A for array and C for comma."

`

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator

/*O/P: 
My name is John and I am a fireman.
My name is Susan and I am a school teacher.
My name is Claude and I am a mathematician.
My name is Matthew and I am a physicist. */

`
1.
.call() - calls the same function with the specified arguments

.apply() - calls the same function with the arguments specified in an array

.bind() - creates a new function with the same function body, with a preset value of this (the first argument) and returns that function.

2.
Use .bind() when you want that function to later be called with a certain context, useful in events. 
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

3.Call invokes the function and allows you to pass in arguments one by one.
Apply invokes the function and allows you to pass in arguments as an array.
Bind returns a new function, allowing you to pass in a this array and any number of arguments.

`
Example:


var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
call:
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

Apply:
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

Bind:
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

call vs apply:
var sayHello = function(){
    alert('Hello, ' + this.name);
};

var sayGoodbye = function(){
    alert('Goodbye, ' + this.name);
};

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

update.call(person1, 'Slarty', 200, '1xM');

The limitations of call quickly become apparent when you want to write code that doesn't (or shouldn't)
know the number of arguments that the functions need… like a dispatcher.

So that's where apply comes in - the second argument needs to be an array, which is unpacked into arguments that are passed to the called function.

So that's the difference between call and apply. Both can be called on functions, which they run in the context of the first argument. 
In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an 
array that it unpacks as arguments for the called function.

var dispatch = function(person, method, args){
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);

---------------------**************-----------------------------------------------------------------------------
`What is a closure?

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, 
but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, 
however, even though it can call the outer function’s parameters directly.

`
Example:
var a = (function () {
    var privatefunction = function () {
        console.log('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
    
})();



`As you can see there, a is now an object, with a method publicfunction ( a.publicfunction() ) which calls privatefunction,
 which only exists inside the closure. You can NOT call privatefunction directly (i.e. a.privatefunction() ), just publicfunction().`

 console.log=function(){}


 `
 Q)What is Hoisting?
 URL: https://scotch.io/tutorials/understanding-hoisting-in-javascript

 A)Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 
 JavaScript functions can be loosely classified as the following:

1.Function declarations
2.Function expressions
 
 `

 Example:
 //1.Function declarations
 //These are of the following form and are hoisted completely to the top. 
 //Now, we can understand why JavaScript enable us to invoke a function seemingly before declaring it.

 hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');      
};
//2.Function expressions, however are not hoisted.

expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

`Q)Let vs Var keywords?

 A)The difference is scoping. var is scoped to the nearest function block . 
   let is scoped to the nearest enclosing block, which can be smaller than a function block.
  Both are global if outside any block.
 `

 Example:

 Global:
 let me = 'go';  // globally scoped
 var i = 'able'; // globally scoped
 //However, global variables defined with let will not be added as properties on the global window object like those defined with var.
 console.log(window.me); // undefined
 console.log(window.i); // 'able'
 Function:
//They are identical when used like this in a function block.

function ingWithinEstablishedParameters() {
    let terOfRecommendation = 'awesome worker!'; //function block scoped
    var sityCheerleading = 'go!'; //function block scoped
}

Block:
//Here is the difference. let is only visible in the for() loop and var is visible to the whole function.

function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
}

Redeclaration:
//Assuming strict mode, var will let you re-declare the same variable in the same scope. On the other hand, let will not:

'use strict';
let me = 'foo';
let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared
'use strict';
var me = 'foo';
var me = 'bar'; // No problem, `me` is replaced.

//Q)Callback Function:

`A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, 
and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem),
 and therefore, the use of a callback function is also known as a callback pattern.`

function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    alert('Finished eating my sandwich.');
});

//Make Sure the Callback is a Function

function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', 'vegetables');

Example2:
// Callback function only know the action,
// but don't know what's the data.
function callbackFunction(unknown) {
  console.log(unknown);
}

// This is a consuming function.
function getInfo(thenCallback) {
  // When we define the function we only know the data but not
  // the action. The action will be deferred until excecuting.
  var info = 'I know now';
  if (typeof thenCallback === 'function') {
    thenCallback(info);    
  }
}

// Start.
getInfo(callbackFunction); // I know now

`Guy 1 to Guy 2: hey dude I wanna do something when a user clicks in there, call me back when that happens alright?

Guy 2 calls back Guy 1 when a user clicks here.`


//Q)setTimeout() vs setInterval()
//setTimeout():

//It is a function that execute a JavaScript statement AFTER x interval.

setTimeout(function () {
    something();
}, 1000); // Execute something() 1 second later.
//setInterval():

//It is a function that execute a JavaScript statement EVERY x interval.

var intervalID =setInterval(function () {
    somethingElse();
    // clearInterval(intervalID); // Will clear the timer.
}, 2000); // Execute somethingElse() every 2 seconds.
//The interval unit is in millisecond for both functions.
`setInterval fires again and again in intervals, while setTimeout only fires once.`

//Q)Cloning an Object
`The object cloning is a way to create exact copy of an object`
syntax:
var user = Object.assign({}, currentObject);
ex:
let obj = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = Object.assign({}, obj);
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  obj.a = 10;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  newObj.a = 20;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 20, b: { c: 2} }
  
  newObj.b.c = 30;
  console.log(obj); // { a: 10, b: { c: 30} }
  console.log(newObj); // { a: 20, b: { c: 30} }
  
  // Note: newObj.b.c = 30; Read why..
