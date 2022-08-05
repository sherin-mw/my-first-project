var num1 = 15
var num2 = 6
console.log("sum is "+ (num1 + num2))
console.log("Difference is "+ (num1 - num2))
console.log("Multiplication "+ (num1 * num2))
console.log("Division "+ (num1 / num2))
console.log("Modulas "+ (num1 % num2))

console.log("Even numbers from 1 to 100 ")
var i = 1
while( i<= 100 ){
    if( i % 2 == 0 )
        console.log(i)
        i++
}

var num = 131
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