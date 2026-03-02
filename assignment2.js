let mark=0
if (mark>=0 && mark<=30){
    console.log('failed')
}
else if(mark>=31 && mark<=50){
    console.log('below average')
}
else if(mark>=51 && mark<=70){
    console.log('above average')
}
else if(mark>=71 && mark<=100){
    console.log('excellent')
}
else{
    console.log('invalid mark')
}

let distance = 2250
if(distance >0 && distance <= 100){
    console.log("pay 5 USD");
}
else if (distance>=101 && distance<=500){
    console.log('pay 10 USD')
}
else if (distance>=501 && distance<=1000){
    console.log('pay 20 USD')
}
else if (distance>=1001){
    console.log('pay 40 USD')
}
else{
    console.log('invalid input')
}