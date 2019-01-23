  Javascript programms
 
// 1.Polyndrome or not
  
str= "madam";
var mystr= str.replace(/g/,'');
var mystr1=str.split('').reverse().join('');
if(mystr == mystr1){
console.log("Plyndrome");
}

//  2.Fibonacci series

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
 // Output: 1 2 3 5 8 13 21 34 55
 
 // 3. Sorting An array without sort function
 
//var array=["l","f","a","c"]
var array=[3,4,6,7,8,2,9];
for(var i=0; i<array.length; i++){
var min =i;

for(var j=i+1; j<array.length; j++){

if(array[j]<array[min])
 {
var min=j;
 }
}
 if(min!=i)  {
var temp=array[i];
array[i]=array[min];
array[min]=temp;
}
}

console.log(array);

// output:[2, 3, 4, 6, 7, 8, 9]
// output: ["a", "c", "f", "l"]

// 4. String replace 

someString = 'the cat looks like a cat';
anotherString = someString.replace(/cat/g, 'dog');


// 5. Remove duplicate eliments in an array
 //method:1
var array = ["a","b","k","d","a","b","c"]
var result=[];
for (i=0;i<array.length;i++)
{
if(result.indexOf(array[i])==-1){
result.push(array[i]);
}
}
console.log(result); 

// o/p: ["a","b","k","d","c"]

// method 2

var array = ["a","b","k","d","a","b","c"]

var result = function(array){
      return  array.filter(function(index,pos){
	     return array.indexOf(index) == pos;
	  })
}
console.log(result(array));

// o/p: ["a","b","k","d","c"]

//6.Print even numbers

for(var i=0;i<=20;i++){
if(i%2==0){
console.log(i);
}
}

//6.Print odd numbers
for(var i=0;i<=20;i++){
if(i%2!=0){
console.log(i);
}
}

//7. Finding middle item of an array
   //method1:
   
   var array=["1","2","25","4","5"];

var midarry=Math.round((array.length-1)/2);

console.log(array[midarry]);
     //o/p:25
   
  //method2:
  
  var value=25;

var array=["1","2","25","4","5","28"];

  result= array.filter(function(item){
  
  return item!=value;
  })
  console.log(result);
  //o/p:25
   
// method 3
   var value=5;
   
var array=["1","2","25","4","5","28"];

  result= array.filter(item => item!=value)
  console.log(result);

  //o/p:25

//Removing multiple items in Array
  
var array=["1","2","25","4","5","28"];
var deleteitems=["2","5"];

var result1= array.filter(item => !deleteitems.includes(item));

console.log(result1);

 // o/P: ["1", "25", "4", "28"]
