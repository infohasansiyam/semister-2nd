// using function

// 
// let Num1=Number(prompt("Enter a number: "));
// function mathMatic(){
// document.write(Num1,)


// }


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