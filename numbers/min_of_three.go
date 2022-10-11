package main

import (
	"fmt"
)
// min of 2 integers and reuse them in min of 3

func min_of_three(num1, num2, num3 int){
	if(num1 < num2 && num1 < num3){
		fmt.Println("num1 is smallest")
		return
	} else if(num2 < num1 && num2 < num3){
		fmt.Println("num2 is smallest")
		return
	} else {
		fmt.Println("num3 is smallest")
		return
	}
}

func main(){
	fmt.Println("Hello World")
	min_of_three(4, 2, 1)
}