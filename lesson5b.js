// arrow functions with parameters
// example 1 
const greeting=(name)=>{
    console.log("Hello "+ name);
}
// call the function 
greeting('Mike')
const mycounty=(county)=>{
    console.log("my county is "+ county);
    
}
// caal thye function 
mycounty("Nairobi")
// example 3 
const addition=(num1,num2)=>{
    let answer=num1+num2
    console.log("The sum is " + answer)
}
// call the function 
  addition(50,100)
const subtract=(num1,num2)=>{
    let answer=num1-num2
    console.log("the difference is " + answer);  
}
// call the function 
subtract(500,450)
const multiply=(num1,num2)=>{
    let answer=num1*num2
    console.log("The product is "+ answer);
    
}
// call the function 
multiply(25,625)
const checktrafficlight=(light)=>{
    if (light=="red"){
        console.log("stop");
    }
    else if (light=="orange"){
        console.log("get ready");    
    }
    else if(light=="green"){
        console.log("go");
    }
    else{
        console.log("invalid");
    }
}
// call the function 
checktrafficlight("green")
