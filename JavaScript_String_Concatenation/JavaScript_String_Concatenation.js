document.getElementById("demo").innerHTML="welcome To String Concatenate";
var text1="What a very";
var text2="nice day";
let text3 = " happy";
text3 += " birth day";
let x=5+5;
let y='5'+5;
let z="hello "+5;

document.getElementById("demo1").innerHTML=text1+text2;
document.getElementById("demo2").innerHTML= text1 + text2;
document.getElementById("demo3").innerHTML= text1 +" "+ text2;
document.getElementById("demo4").innerHTML= text3;
document.getElementById("demo5").innerHTML= x+"<br>"+y+"<br>"+z;