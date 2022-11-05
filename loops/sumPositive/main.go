package main

import "fmt"

// Write a function in go using while loop that takes an integer n and returns the sum of first n positive integers
func main() {
	n := 5
	m := SumPositive(n)
	fmt.Println(m)
}

func SumPositive(n int) int {
	p := 0
	i := 0
	for i <= n {
		p += i
		i += 1
	}
	return p
}
