package main

import "fmt"

func main() {
	fmt.Println("Loops")

	n := 5
	m := Factorial(n)
	fmt.Println(m)

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
