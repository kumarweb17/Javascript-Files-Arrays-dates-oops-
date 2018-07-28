//URL:   https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

//TODAY DATE IS: JULY 28 2018 Saturday

var now= new Date();    //"07/28/2018"

console.log(now); // O/P: 2018-07-28T11:19:14.715Z

console.log(now.getTime()); // O/P: 1532776973416

console.log(now.toLocaleTimeString()); // O/P: 16:55:07  (displays local time)

console.log(now.getFullYear()); // O/P: 2018

console.log(now.getDay()); // O/P: 6

console.log(now.getDate()); // O/P: 28

console.log(now.getMonth()); // O/P: 6

console.log(now.getHours()); // O/P: 17

console.log(now.getMinutes()); // O/P: 3

console.log(now.getSeconds()); // O/P: 44

console.log(now.getMilliseconds()); // O/P: 970


/* ---------------------------------------------------------------- */

   /* 
   Different types of Date Formats

   1.var mydateformat=new Date("08/17/1990");  //(month/date/year) 

   2.var mydateformat=new Date("1990-08-17");  //(year-month-date) 

   3.var mydateformat=new Date("Aug 17 1990");

   4.var mydateformat=new Date("August 17 1990");

   5.var mydateformat=new Date("17 Aug 1990");

   6.var mydateformat=new Date("17 August 1990");

   7.var mydateformat=new Date("17, August ,1990");

  */

 var mydate=new Date("17, August ,1990");

console.log(mydate.getFullYear()); // O/P: 1990

var MonthNames=["January","February", "March", "April","May","June","July","August","September","October","November","December" ];

// Get Month Name
console.log(MonthNames[mydate.getMonth()]); // O/P: August


// Get Week Day
var WeekNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log(WeekNames[mydate.getDay()]); // O/P: Friday

/*---------- SET METHODS --------------*/

//console.log(mydate.setFullYear(2016)); // set year to 2016

//console.log(mydate.setMonth(05)); // set year to 06

//console.log(mydate.setDate(21)); // set year to 20

//console.log(mydate) // 2016-06-19T18:30:00.000Z  (Main date is Modified Here)

/*-------------  Differences Between Dates --------------*/

var date1 = new Date("2016-06-20");

var date2 = new Date ("2016-06-20");

if(date2-date1==0){
console.log("TWO DATES ARE EQUAL");  // executed 
}
else if(date1>date2){
    console.log("Date1 Is Greater");
}
else {
  console.log("Date2 Is Greater");
}

/* -------------  Adding years,months,days,... to present dates -------------- */

var presentDate=new Date("03/14/2016");

var Modifieddate=new Date(presentDate.getTime()+(3*24*60*60*1000));   // 3 is the Number of Days if we want to add one month we can add 30 days
var Modifieddate1=new Date(presentDate.getTime()+(30*24*60*60*1000));  // Add one Month(30 days)
var Modifieddate2=new Date(presentDate.getTime()+(365*24*60*60*1000));   // Add one year (365 days)
var Modifieddate3=new Date(presentDate.getTime()+(365*2*24*60*60*1000)); // Add 2 years

console.log(presentDate); //2016-03-14T00:00:00.000Z
console.log(Modifieddate); //2016-03-17T00:00:00.000Z   (for 3 days)
console.log(Modifieddate1); //2016-04-13T00:00:00.000Z   (for 1 month)
console.log(Modifieddate2); //2017-03-14T00:00:00.000Z   (for 1 years)
console.log(Modifieddate3); //2018-03-14T00:00:00.000Z   (for 2 years)
console.log(Modifieddate.toString()); //o/p: Thu Mar 17 2016 05:30:00 GMT+0530 (India Standard Time)


console.log(MonthNames[Modifieddate.getMonth()] , Modifieddate.getFullYear(),Modifieddate.getDate()); //O/p: March 2016 17










