package main

import (
	"fmt"
	"strings"
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

	pattern := "ATA"
	text := "ATATA"
	fmt.Println(strings.Count(text, pattern))
	fmt.Println(CountPattern(pattern, text))
}

// lets count the number of occurences a pattern occures in a text as a substring

func CountPattern(pattern, text string) int {
	count := 0
	k := len(pattern)
	n := len(text)
	// range over the substrings of text, and increment the count
	for i := 0; i < n-k+1; i++ {
		// does the substring of text of length k, starting at position i match pattern?
		if text[i:i+k] == pattern {
			count++
		}
	}
	return count
}
