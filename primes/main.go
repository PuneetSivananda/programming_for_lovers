package main

import "fmt"

func main() {
	fmt.Println("Primes and arrays.")
	// arrays in go have a fixed constant size

	var list [6]int
	list[0] = -8
	i := 3
	list[2*i-4] = 17
	list[len(list)-1] = 43
	fmt.Println(list)
}
