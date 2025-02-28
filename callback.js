function example (callback1,callback2){
     console.log(callback1(2,4))
     console.log(callback2(20,34))
}
example( function(a,b){
    return a+b
},(c,d)=>c+d)
function one(callback1,callback2,callback3){

    callback1( (a,b)=>{return a+b})

    console.log(callback3(23,32,43))

    console.log(callback2( 48,8 ))
}
one(function(a){
  console.log(a(12,23))
    console.log('logging callback1')
 },(a,b)=> a%b
,(a,b,c)=>(a*b/c))



function main(callback1, callback2, callback3) { 
  console.log("Main Start"); 
  callback1(() => { 
      console.log("Main Mid"); 
      callback2(() => { 
          console.log("Main End"); 
          callback3(); 
      }); 
  }); 
} 

function sub1(callback) { 
  console.log("Sub1 Start"); 
  callback(); 
  console.log("Sub1 End"); 
} 

function sub2() { 
  console.log("Sub2 Start"); 
  console.log("Sub2 End"); 
} 

main((cb) => sub1(cb), (cb) => sub1(cb), sub2);


function outer(callback1, callback2, callback3) { 
  console.log("Outer Start"); 
  callback1(() => { 
      console.log("Outer Mid"); 
      callback2(() => { 
          console.log("Outer End"); 
          callback3(); 
      }); 
  }); 
} 

function middle(callback) { 
  console.log("Middle Start"); 
  callback(); 
  console.log("Middle End"); 
} 

function inner() { 
  console.log("Inner Action"); 
} 

outer((cb) => middle(cb), (cb) => middle(cb), inner); 



function alpha(callback1, callback2, callback3) { 
  console.log("Alpha Start"); 
  callback1(() => { 
      console.log("Alpha Mid"); 
      callback2(() => { 
          console.log("Alpha End"); 
          callback3(); 
      }); 
  }); 
} 

function beta(callback) { 
  console.log("Beta Start"); 
  callback(); 
  console.log("Beta End"); 
} 

function gamma() { 
  console.log("Gamma Start"); 
  console.log("Gamma End"); 
} 

alpha((innerCallback) => beta(innerCallback), (innerCallback) => 
beta(innerCallback), gamma);




function firstStep(callback1, callback2) { 
  console.log("First Step Start"); 
  callback1(() => { 
      console.log("First Step Mid"); 
      callback2(); 
  }); 
  console.log("First Step End"); 
} 

function secondStep(callback) { 
  console.log("Second Step Start"); 
  callback(); 
  console.log("Second Step End"); 
} 

function thirdStep(callback) { 
  console.log("Third Step Start"); 
  callback(); 
  console.log("Third Step End"); 
} 

firstStep(() => secondStep(() => console.log("Inside Second Step")), () => 
thirdStep(() => console.log("Inside Third Step")));




function funcA(callback1, callback2, callback3) { 
  console.log("A1"); 
  callback1(() => { 
      console.log("A2"); 
      callback2(); 
      console.log("A3"); 
  }); 
  console.log("A4"); 
  callback3(); 
} 

function funcB(callback) { 
  console.log("B1"); 
  callback(); 
  console.log("B2"); 
} 

function funcC() { 
  console.log("C1"); 
} 

funcA((innerCallback) => funcB(innerCallback), () => console.log("End of B"), 
funcC);


let z
z=2
z='madd'
console.log(z)