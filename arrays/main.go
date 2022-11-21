package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("More on arrays/slices.")
}

func Max(list []int) int {
	var m int
	// range over and update if we find a bigger value
	for i := 0; i < len(list); i++ {
		if list[i] > m {
			m = list[i]
		}
	}
	return m
}

// // ListPrimes takes an integer n and returns a list of all prime numbers up to and including n.
// func ListPrimes(n int) []int {
// 	primes := make([]int, ???)
// 	return primes
// }

// SieveOfEratosthenes takes an integer n and returns a slice of n+1 booleans
// primeArray where primeArray[p] is true if p is prime and false if otherwise
// It implements the SieveOfErastosthenes approach
func SieveOfEratosthenes(n int) []bool {
	primeArray := make([]bool, n+1)

	// set everything to prime other than 0 and 1
	for k := 2; k <= n; k++ {
		primeArray[k] = true
	}

	// range over primeArray and cross of multiples of the first prime that we find
	for p := 2; float64(p) <= math.Sqrt(float64(n)); p++ {
		if primeArray[p] == true {
			primeArray = CrossOfMultiples(primeArray, p)
		}
	}
	return primeArray
}

// takes a boolean sliec and integer p and crosses of multiples of p
// meaning turning these multiples to false in the slice
// it returns the slice obtainer as a result
func CrossOfMultiples(primeArray []bool, p int) []bool {
	n := len(primeArray) - 1
	for k := 2 * p; k <= n; k += p {
		// all these multiples must be made composite
		primeArray[k] = false
	}
	return primeArray
}
