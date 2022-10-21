package main

import (
	"fmt"
)
/**
if a>b then 
	GCD(a,b) = GCD(a-b, b)

Breaking down:
	Any shared divisor of a and b must also be a divisor of a-b
	Any shared divisor of a - b and b must also be a divisor of a 
*/
func GCD(a, b int){
	// d:= 1
	// m:= min(a, b)
	// for (p:=1; p <= m; p++){
	// 	if( p%a === 0 & p%b ===0){
	// 		d = p
	// 	}
	// }
	// return d
}

func main(){
	var num1, num2 int
	fmt.Println("Program starts!")
	fmt.Scanln(&num1, &num2)
	fmt.Printf("%d, %d \n", num1, num2)
}