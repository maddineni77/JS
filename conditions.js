

var reg=prompt('register done or not if yes enter done ')
var pay=prompt('enter the payment amount you have done')
if (reg=='done'&& pay>=35000){
    console.log('eligible to attend')


}
else if (reg=='done'&& pay==0){
    console.log('not eligible')

}else if (reg==''&&pay>=35000){
    console.log('please register')
}
else if(reg=='done'&&pay<35000){
    console.log('to do full payment click on payment')

} 
else{
    console.log('enter required credentials')
}