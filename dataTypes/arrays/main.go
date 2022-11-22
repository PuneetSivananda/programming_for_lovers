package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("More on arrays/slices.")

	a := make([]int, 3) // slice of len 3
	var b [3]int        //array of len3

	ChangeFirst1Slice(a)
	ChangeFirst1Array(b)

	fmt.Println(a)
	fmt.Println(b)

	a = append(a, 5) // adds 5 to slice
	fmt.Println(a)
	n := 31
	primes := ListPrimes(n)
	fmt.Println(primes)
}

func Max(list []int) int {
	if len(list) == 0 {
		panic("Empty list passed to Max()")
	}
	var m int
	// range over and update if we find a bigger value
	for i := 0; i < len(list); i++ {
		if list[i] > m {
			m = list[i]
		}
	}
	return m
}

// Sum takes the slice of integers and returns the sum of all the values in the slice
func Sum(a []int) int {
	var s int

	for _, value := range a {
		s += value
	}

	return s
}

// Passing a param as a slice is possible
func ChangeFirst1Slice(list []int) {
	list[0] = 1 // we can edit a slice
}

func ChangeFirst1Array(list [3]int) {
	list[0] = 1 // we are going to deal with a copy of the array
}

// ListPrimes takes an integer n and returns a list of all prime numbers up to and including n.
func ListPrimes(n int) []int {
	primes := make([]int, 0) // great if you dont know inital len
	primeBooleanArray := SieveOfEratosthenes(n)
	// boolean variables where p th element is true if prime

	for p, isPrime := range primeBooleanArray {
		if isPrime {
			primes = append(primes, p)
		}
	}

	return primes
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
