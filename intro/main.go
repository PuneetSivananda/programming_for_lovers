package main

import "fmt"

//  Go wont read this line

/*
	wont read these either
	variable types:
		int,
		uint
		bool
		float64

		string: contiguous collection of symbols
		byte: single symbol
*/

func main() {
	fmt.Println("Let's get started!!")

	var j int = 7 
 	var x float64 = 2.3
	var yo string = "Hello"
	var u uint = 14
	var symbol byte = 'H'
	var statment bool = true

	fmt.Println(j)
	fmt.Println(x)
	fmt.Println(yo)
	fmt.Println(u)
	fmt.Println(symbol)
	fmt.Println(statment)
}
