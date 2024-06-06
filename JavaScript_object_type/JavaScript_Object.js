 //to Create a JavaScript Variable
 let car1="TATA";
 document.getElementById("demo").innerHTML="car is "+car1;
 const car= {
    type:"TATA",
    model:2015,
    color:"white" };

    document.getElementById("demo1").innerHTML=car.color+" "+car.model+" "+car.type;
    //To Create a Single Line Object
    const person={name:"kannan",age:26,hair_color:"black"};
    document.getElementById("demo2").innerHTML=person.name+" is "+person["age"]+" years old";
    // object a method
    const bike={type:"honda",model:"shine",life:2018,
      full_name:function(){
         return this.type+" "+this.model+" "+this.life;
      }
    };
    document.getElementById("demo3").innerHTML=bike.full_name();