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
	ix := 2
	a = append(a[:ix], a[ix+1:]...)
	fmt.Println(a)

	a[1] = a[3]
	fmt.Println(a)
	a = append(a[:3], a[4:]...)
	fmt.Println(a)

}

// lets count the number of occurences a pattern occures in a text as a substring
