package main

import "fmt"

func main() {
	fmt.Println("Sum even nums output:")
	n := 5
	m := SumEven(n)
	fmt.Println(m)
}

func SumEven(n int) int {
	sum := 0
	for i := 0; i <= n; i++ {
		if i%2 == 0 {
			sum += i
		}
	}
	return sum
}
