for (var i=1;i<11;i++){
    console.log(i)
}
for (var number=20;number<25;number++){
    console.log(number)
} 
// for loops synatax:
//for(intialization;condition;updation){   
//statements
//}
// sum of numbers from 1 to 100
var sum=0
for (var i=1;i<101;i++){
     sum+=i
    console.log(sum)
}
// difference of numbers from 100 to 1
var diff=0
for (var i=101;i>1;i--){
    diff-=i
    console.log(diff)//100 98 95
}
// multiplication of 7th table  
for (var i=1;i<11;i++){
    console.log(`7*${i}=${7*i}`)
}
// printing even numbers between 1 and 20
for (var i=1;i<21;i++){
    if (i%2==0){
        console.log(i)
    }

}
// factorial of some number
var fact=1
for ( var i=5;i>0;i--){
fact=i*fact 
    }
    console.log(fact)
//power of number 
var p=5

for (var num=p;num>4;num-- ){
    var power=num*num

}
//printing odd numbers in reverse order
for (var num=20;num>0;num--){
    if (num%2!=0){
        console.log(num)
    }
}

