package main

import "fmt"

func main() {
	fmt.Println("Loops")

	n := 5
	m := Factorial(n)
	fmt.Println(m)
}

// factorial function
func Factorial(n int) int {
	p := 1
	i := 1
	for i <= n {
		p *= i
		i += 1
	}
	return p
}
