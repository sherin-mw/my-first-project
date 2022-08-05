function calculations( num1, num2 ){
console.log("sum is "+ (num1 + num2))
console.log("Difference is "+ (num1 - num2))
console.log("Multiplication "+ (num1 * num2))
console.log("Division "+ (num1 / num2))
console.log("Modulas "+ (num1 % num2))

}

calculations(15,6)
function even_numbers(num){

console.log("Even numbers from 1 to "+num )
var i = 1
while( i<= num ){
    if( i % 2 == 0 )
        console.log(i)
        i++
}
}
even_numbers(100)
function check_primenumber(num){
    
var i = 2
var flag = false
while( i <= (num/2)){
    if( num % i == 0)
        flag = true

        i++
}
if( flag )
    console.log(num +" is not a prime number")
else
    console.log(num +" is prime number")

}
check_primenumber(150)