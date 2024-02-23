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

	var j int = 14
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

	// shorthand declarations
	i := -6 // this is an int if you want uint you need to be explicit
	hi := "Yo! "
	k := 34 // automaticallly an int

	// we can do arthimertic on numeric variables
	fmt.Println((i + j) * 2 * k)
	fmt.Println(2*x - 3.16)
	fmt.Println(hi + yo)

	// integer division and throws away the remainder
	fmt.Println(j / i)
	fmt.Println(k / j)

	// if we want the actual value we use type conversion
	fmt.Println(float64(k) / float64(j))

	// not all type conversions will work

	var ok bool = bool(false)
	fmt.Println(ok)

	// cannot convert int to unint coorectly
	var p int = -187
	var s uint = uint(p)

	fmt.Println(s)

	m := 9223372036854775807
	fmt.Println(m + 1)
	// finite amount of space for any value integer can take in the memory 2^63-1

	// fmt.Println(j * x) // strict compiler
	fmt.Println(float64(j) * x)

	// n := SumTwoInts(x, x)
	// fmt.Println(n)

	// w, z := DoubleAndDuplicate(m)
	// fmt.Println(w, z)
	n := 17
	fmt.Println(AddOne(n))
	fmt.Println(n)

	o := SumTwoInts(n, p)
	fmt.Println(o)
}

func AddOne(n int) int {
	n = n + 1
	return n
	// n is destroyed after the return and returns the copy
}

// SumTwoInts takes two integers and returns their sum
func SumTwoInts(a int, b int) int {
	return a + b
}

func DoubleAndDuplicate(x float64) (float64, float64) {
	return 2.0 * x, 2.0 * x
}

func Pi() float64 {
	return 3.14
}

func PrintHi() {
	fmt.Println("Hi")
}
