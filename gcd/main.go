package main

import (
	"fmt"
	"log"
	"time"
)

/*
TrivialGCD(a, b)

	d <-1
	m <-min2(a,b)
	for every integer p from 1 to m
		if p is a divisor of a,b
			d <- p
	return d
*/

/*
EuclidGCD(a, b)
while a not equal to b

	if a>b
		a = a-b
	else
		b = b-a

	return a or b
*/

func main() {
	fmt.Println("Trivial GCD")
	x := 378248175
	y := 273162747
	start := time.Now()
	d := TrivialGCD(x, y)
	elapsed := time.Since(start)
	fmt.Println("TrivialGCD", d)
	log.Printf("TrivialGCD took %s", elapsed)

	start2 := time.Now()
	dd := EuclidGCD(x, y)
	elapsed2 := time.Since(start2)
	fmt.Println("EuclidGCD", dd)
	log.Printf("EuclidGCD took %s", elapsed2)

	fmt.Println("Another Sum Even->", AnotherSumEven(20))
}

func EuclidGCD(a, b int) int {
	for a != b {
		if a > b {
			a = a - b
		} else {
			b = b - a
		}
	}
	return a
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

func AnotherSumEven(n int) int {
	sum := 0
	for i := 2; i <= n; i = i + 2 {
		// is i even ??
		if i%2 == 0 {
			sum += i
		}
	}
	return sum
}
