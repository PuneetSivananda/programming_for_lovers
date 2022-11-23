package main

import "fmt"

func main() {
	fmt.Println("Frequent words and maps")
	// keys are strings of words and values are the number of times a given word occurs
	// another example: a map whose keys are state names and values are decimals / polling percentages (0 to 1) for each candidate

	var a []int
	a = make([]int, 6)
	fmt.Println(a)

	// maps generalize the slice decoration

	var polls map[string]float64     // whos keys are strings and values are float64
	polls = make(map[string]float64) // no need to give the length
	polls["PA"] = 0.517
	polls["NY"] = 0.789 // no need to append
	polls["NE"] = 0.401
	polls["FL"] = 0.500
	fmt.Println(polls)
	fmt.Println(len(polls))
}
