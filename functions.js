
function SayHello(){
 console.log('hello world')
}
SayHello()
function DisplayWarning(){
    console.log('warning! system overloaded!')
}
DisplayWarning()
function PrintStatus(){
    console.log('system staatus:Active')
}
function Initialize(){
    console.log('initialization completed')
    ShuttingDown()
}
function ShuttingDown(){
    console.log('system shutting down')
}
Initialize()
function StartProcess(){
    console.log('process started')
    EndProcess()
}
function EndProcess(){
    console.log('process ended')
}
StartProcess()
function GreetUser(name){
    console.log('hello maddineni!')
    
}
GreetUser('venkat')
GreetUser('hemanth')
GreetUser('gopal')
function CaluculateSum(a,b){
    console.log(a+b)

}
CaluculateSum(1,5)
CaluculateSum(2999,37658)
CaluculateSum(7834,947568)
function Caluculate(a,b,c){
    console.log(a+b+c)
}
Caluculate(a=200,c=10,b=20)
Caluculate(a=20,b=34,c=23)
//desending order using for loop
function CountDown(start){
    for ( var i=start;i>=1; i--){
        console.log(i)

    }

}
CountDown(100)
//desending order using while loop
function CountDown1(start){
    var i=start;
    while (i>=1){
        console.log(i)
        i--;


    }
}
CountDown1(20)
// asending order using for loop
function  CountUp(start){
    for (var i =start;i<=100;i++){
        console.log(i)
         
    }
    }
CountUp(1)

//using while for asending the numbers


function CountUp1(start){
    var start;

    while( start<=100  ){
        console.log(start)
        start++;

    }
}
CountUp1(1)
// checking even or odd using functions ,using conditional statements
function EvenOdd(number){
    var i=number
    if ( i%2==0){
        console.log('even number')
    } 
    else {
        console.log('odd number')
    }
}
 var ipt=EvenOdd()
 console.log(ipt)


