package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Primes and arrays.")
	// arrays in go have a fixed constant size

	var list [6]int
	list[0] = -8
	i := 3
	list[2*i-4] = 17
	list[len(list)-1] = 43
	fmt.Println(list)

	fmt.Println(TrivialPrimeFinder(10))
}

// Arrays have a constant sizes in go
// Slices have a variable sizes in go

// Trivial Prime Finder takes an integrer and produces a boolean array of length
// n+1 where primeArray[p] is true if p is prime (and false otherwise).
func TrivialPrimeFinder(n int) []bool {
	var primeArray []bool // type is slice bool

	// slices start as nil and need to be made
	primeArray = make([]bool, n+1)

	for p := 2; p <= n; p++ {
		if IsPrime(p) == true {
			primeArray[p] = true
		}
	}
	return primeArray
}

func IsPrime(p int) bool {
	for k := 2; float64(k) <= math.Sqrt(float64(p)); k++ {
		if p%k == 0 {
			return false
		}
	}
	return true
}
