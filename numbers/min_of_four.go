package main

import (
	"fmt"
)

// min of 4 integers and reuse them in min of 3
func min(a, b int) int{
	if(a<b){
		return a
	}else {
		return b
	}
}

func min_of_three(num1, num2, num3 int) int{
	if(num1 > num2){
		return min(num2, num3)
	} else {
		return min(num1, num3)
	} 
}

func min_of_four(num1, num2, num3, num4 int) int{
	first_pair:= min(num1, num2)
	second_pair:=min(num3, num4)
	return min(first_pair, second_pair)
}

func main(){
	ans:= min_of_four(4, 2, 5, 1)
	fmt.Println(ans)
}