var name ="kumar swamy";

console.log(name);

console.log(name.length); //o/p: 11

console.log(name.split(' ')); // o/p: (2) ["kumar", "swamy"]

console.log(name.charAt(4)); //o/p:  r

console.log(name.charCodeAt(3)); //o/p: 97  (for a)  (far A ->65)

console.log("hello ".concat(name).concat(" How r u")); // o/p:  hello kumar swamy How r u
 
console.log(name.replace("swamy","kommanaboyina")); // o/p: kumar kommanaboyina

console.log(name.indexOf("swamy")); // o/p: 6

console.log(name.indexOf('a'));  //o/p: 3

console.log(name.lastIndexOf('a')) //o/p: 8

console.log(name.substr(0,4)); //o/p: kuma
console.log(name.substr(2,4)); // o/p: mar

console.log(name.substring(0,4)); //o/p: kuma
console.log(name.substring(2,4)); // o/p: ma


console.log(name.search("swamy"))  // o/p: 6
console.log(name.search("kumar"))  // o/p: 0
console.log(name.search("suresh")) // o/p: -1

console.log(name.slice(2,4));  // o/p: ma

console.log(name.toLowerCase()); // o/p: kumar swamy

console.log(name.toUpperCase()); // o/p: KUMAR SWAMY


console.log(String.fromCharCode(97,98,99,120,121,122)) //output: abcxyz


//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(myInt); //output: 999

console.log(name.valueOf()); //output: kumar swamy



// --------------------------------***********-------------------------------
 // string methods
// 1. startsWith()
  // Check if string starts with specified character(s).
const str = 'JavaScript is amazing';

  console.log(str.startsWith('JavaScript')); // true
  console.log(str.startsWith('Java')); // true
  console.log(str.startsWith('javascript')); // false

  // position is optional
  // if not specified, the default value is 0
  console.log(str.startsWith('Script', 4)); // true
  console.log(str.startsWith('SCRIPT', 4)); // false

//-------------------------End----------------
//2. endsWith()

// Check if string ends with specified character(s).
  // check if ends with 'amazing'
  console.log(str.endsWith('amazing')); // true
  console.log(str.endsWith('ing')); // true
  console.log(str.endsWith('Amazing')); // false

  // length is optional
  // if not specified, the default value is length of the string
  console.log(str.endsWith('is', 13)); // true
  console.log(str.endsWith('i', 13)); // false
  console.log(str.endsWith('s', 13)); // true

//-------------------------End----------------

 // 3.includes()
 // Check if string contains specified character(s).

  console.log(str.includes('Script')); // true
  console.log(str.includes('script')); // false
  console.log(str.includes(' ')); // true
  console.log(str.includes('array')); // false

//-------------------------End----------------
  // 10. repeat()

  // return new string with specified number of copies of existing string.

  const str1 = 'JavaScript';

  console.log(str1.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
  console.log(str1.repeat(1)); // 'JavaScript'
  console.log(str1.repeat(0)); // ''

  //-------------------------End----------------
  //8. split()

 // Split string into array of substrings.

 const str2 = 'JavaScript is amazing';
  const strNew = 'JavaScript-is-amazing';


  // Separator string used to determine where to make each split
  console.log(str2.split('S')); // ["Java", "cript is amazing"]
  console.log(str2.split('is')); // ["JavaScript ", " amazing"]
  console.log(str2.split(' ')); // ["JavaScript", "is", "amazing"]
  console.log(strNew.split('-')); // ["JavaScript", "is", "amazing"]

  //-------------------------End----------------

 // 9. replace()
 // Replaces specified value with another value in a string.
 const str3 = 'JavaScript is amazing';

 console.log(str3.replace('JavaScript', 'Node.js')); // 'Node.js is amazing'

 // replace() method is case sensitive
 // replace will not work
 console.log(str3.replace('Javascript', 'Node.js')); // 'JavaScript is amazing'

 // use regular expression for case insensitive
 console.log(str3.replace(/Javascript/i, 'Node.js')); // 'Node.js is amazing'

 // replace() method replaces only the first match
 console.log(str3.replace('a', 'A')); // 'JAvaScript is amazing'

 // to replace all matches, use regular expression
 console.log(str3.replace(/a/g, 'A')); // 'JAvAScript is AmAzing'

//-------------------------End----------------

   //4. slice()

//Copy some part of string without modifying the original one.

const str5 = 'JavaScript is amazing';

// Default start index is 0
console.log(str5.slice()); // 'JavaScript is amazing'

// start copy at index 4
console.log(str5.slice(4)); // 'Script is amazing'

// end copy at index 10(character at this index will not be included)
console.log(str5.slice(0, 10)); // 'JavaScript'
//-------------------------End----------------

// trim()
var stringone = '     abc     ';
var stringtwo = '     def     ';
 
var newstring = stringone.trim() + stringtwo.trim();
 
console.log(newstring);
//  abcdef
