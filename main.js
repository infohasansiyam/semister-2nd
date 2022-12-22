// // using function


let Num1=Number(prompt("Enter a number: "));
function mathMatic(){
document.write(Num1,) }

function mathMatic(){
    let Sum1=10;
    let Sum2=20;
    let Sum3=30;

    document.write("<br/> The Addition: "+(Sum1+Sum2+Sum3));
    document.write("<br/> The Subtraction: "+(Num3+Num2+Num1));
    document.write("<br/> The Multiplication: "+(Num1*Num2*Num3));
    document.write("<br/> The divition: "+((Num3/Num2)/Num1));
}
mathMatic();

// Parametar function
function mathMatic(Num1,Num2,Num3){
    document.write("<br/> The Addition: "+(Num1+Num2+Num3));
    document.write("<br/> The Subtraction: "+(Num3+Num2+Num1));
    document.write("<br/> The Multiplication: "+(Num1*Num2*Num3));
    document.write("<br/> The divition: "+((Num3/Num2)/Num1));
}
let N1=Number (prompt("Enter a Number: "));
let N2=Number (prompt("Enter a Number: "));
let N3=Number (prompt("Enter a Number: "));
mathMatic(N1,N2,N3);


// // function username,password-----22.12.22-----------------

// // function math(user,pass){
        
    document.write("<br/> Username is : "+ user)
    document.write("<br/> User's Password : "+ pass) }
let user=prompt("Enter user name");
let pass=prompt("Enter your Password");
math(user,pass)

iifes (immediately invokeable function Expressions) function 

(function show(user,pass){
    document.write("<br/>immediately invokeable function Expressions: " + user);
    document.write("<br/>immediately invokeable function Expressions: " + pass);
})(user,pass);

let user=prompt("Enter user name");
let pass=prompt("Enter your Password");
(function show(){
    document.write("<br/> User is : "+ user)
    document.write("<br/> Password : "+ pass)
})();

// Array 

var names=["Hasan","Rahad","Abir-Hasan","Nur-Hasan"];
// document.write(names);

document.write(names[1]);
document.write(names[2]);
document.write(names[3]);
document.write(names[4]);
 
document.write(names [0] + "<br/>");
document.write(names [1] + "<br/>");
document.write(names [2] + "<br/>");
document.write(names [3] + "<br/>");

LOOP------------------------------
for (var i = 0 ; i<names.length; i++)
document.write(names[i] + "<br>");

// // 1st part---------------------------------------------
var mylist = new Array();
for (var i = 0 ; i<4; i++ )
    mylist[i] = prompt("Enter"+ i+ "number");

    for (var i = 0 ; i<mylist.length; i++)
    document.write(mylist[i] + "<br>");
// 2nd part-------------------------------------------
    var mylist = new Array(5);
for (var i = 0 ; i<mylist.length; i++ )
    mylist[i] = prompt("Enter"+ i+ "index number");
    
    for (var i = 0 ; i<mylist.length; i++)
    document.write(mylist[i] + "<br>");


