package main

import "fmt"

func main() {
	fmt.Println("Loops")

	n := 5
	m := Factorial(n)
	fmt.Println(m)
	fmt.Println("Another Factorial-->", AnotherFactorial(5))

	fmt.Println(Factorial(-100))
}

// factorial function
func Factorial(n int) int {
	// handle negative input
	if n < 0 {
		panic("Error: Negative inputs are not allowed")
	}
	p := 1
	i := 1
	for i <= n {
		p *= i
		i += 1
	}
	return p
}

func AnotherFactorial(n int) int {
	// handle negative input
	if n < 0 {
		panic("Error: Negative inputs are not allowed")
	}
	p := 1
	// for every integer i between 1 and n, p=p*i
	for i := 1; i <= n; i++ {
		p *= i
	}
	return p
}
