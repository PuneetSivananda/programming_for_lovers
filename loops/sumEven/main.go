package main

import "fmt"

func main() {
	fmt.Println("Sum even nums output:")
	n := 10
	m := SumEven(n)
	fmt.Println(m)
}

func SumEven(n int) int {
	sum := 0
	for i := 2; i <= n; i = i + 2 {
		sum += i
	}
	return sum
}
