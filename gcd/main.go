package main

import "fmt"

/*
TrivialGCD(a, b)

	d <-1
	m <-min2(a,b)
	for every integer p from 1 to m
		if p is a divisor of a,b
			d <- p
	return d
*/

func main() {
	fmt.Println("Trivial GCD")
	x := 378
	y := 273
	d := TrivialGCD(x, y)
	fmt.Println(d)
}

func TrivialGCD(a, b int) int {
	d := 1
	m := Min2(a, b)
	// if p is a divisor of a
	// if p is a divisor of b
	// return Y

	for p := 1; p <= m; p++ {
		if a%p == 0 && b%p == 0 {
			d = p
		}

	}
	return d
}

func Min2(a, b int) int {
	if a > b {
		return b
	}
	return a
}
