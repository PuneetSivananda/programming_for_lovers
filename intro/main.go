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

	var j int
	var x float64
	var yo string
	var u uint
	var symbol byte
	var statment bool

	fmt.Println(j, x, yo, u, symbol, statment)
}
