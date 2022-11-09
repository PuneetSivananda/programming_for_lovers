package main

import (
	"fmt"
	"log"
	"math"
	"time"
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

	n := 10000000

	start := time.Now()
	TrivialPrimeFinder(n)
	// fmt.Println(primeArray)
	elapsed := time.Since(start)
	log.Printf("TrivialPrimeFinder took %s", elapsed)

	start2 := time.Now()
	SieveOfEratosthenes(n)
	// fmt.Println(primeArray2)
	elapsed2 := time.Since(start2)
	log.Printf("SieveOfEratosthenes took %s", elapsed2)

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
