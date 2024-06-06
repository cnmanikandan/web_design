let answer1="It is alright";
let answer2="He is 'Mani'";
let answer3='He is "Mani"';
document.getElementById("demo").innerHTML=answer1+"<br>"+answer2+"<br>"+answer3;
let t1=5;
let t2=6;
let t3=3;
document.getElementById("demo1").innerHTML="The first Number is : "+t1+"<br>"+"The Second Number is : "+t2+"<br>"+"The Third Number is : "+t3;
const car=["Tata","BMW","audi","Benz","Lambo","porch"];
let text=" ";
for(var i=0;i<car.length;i++)
    {
        text += car[i]+"<br>";
    }
document.getElementById("demo2").innerHTML=text;

const person={
    first_name:"raj",
    last_name:"jas",
    age:35,
    hair_color:"black"
}
document.getElementById("demo3").innerHTML=person.first_name+" "+person.last_name+" is "+person.age+" "+person.hair_color;

document.getElementById("demo4").innerHTML=typeof "manikandan"+"</br>"+
typeof ("Mani+kandan")+"<br>"+ 
typeof 3.14+"<br>"+
typeof (22+66)+"<br>"+
typeof true+"<br>"+
typeof false+"<br>"+
typeof 1234n+"<br>"+
typeof x;

let y=6+5+"john";
document.getElementById("demo5").innerHTML="The Ouptput of 6+5+\"john\" is "+y;
let z="hendry"+6+5;
document.getElementById("demo6").innerHTML="The Ouptput of 6+5+\"john\" is "+z;
let bus;
document.getElementById("demo7").innerHTML=bus+"<br>"+typeof bus;
let bus1=" ";
document.getElementById("demo8").innerHTML=bus1+"<br>"+typeof bus1;
