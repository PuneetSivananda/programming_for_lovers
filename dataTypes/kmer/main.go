package main

import (
	"fmt"
)

func main() {
	fmt.Println("Find Kmers of a string")
	s := "Hi Lovers!"
	fmt.Println(s[2:5])
	fmt.Println(s[4:])
	fmt.Println(s[:5])
	// note: sub arrays and sub slices have same notations

	a := make([]int, 6)
	for i := range a {
		a[i] = -2*i + 1
	}

	fmt.Println(a)
	fmt.Println(a[3:5])

	// given a slice a how can we delete at elem of a given index

}
