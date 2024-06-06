function myFunction(){
document.getElementById("demo").innerHTML="welcome to JavaScript Function";
}
function myFunction1(name,job)
{
    document.getElementById("demo1").innerHTML="Welcome "+name+ ",the job "+job+" .";
}
function myFunction2(txt)
{
    document.getElementById("demo2").innerHTML=txt;
}
let x=myFunction3(4,8);
document.getElementById("demo3").innerHTML=x;

function myFunction3(a,b)
{
    return a+b;
}
let value=tocelcius(77);
document.getElementById("demo4").innerHTML=value;

function tocelcius(farenheat)
{
    return (5/9)*(farenheat-32);
}
//the last example
