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
	fmt.Println(len(polls))
	// to delete a k,v in a map
	delete(polls, "FL")
	fmt.Println(len(polls))
	for state, percentage := range polls {
		fmt.Println("The polling percentage of ", state, "is ", percentage)
	}

	b := [4]float64{8.1, 0.0, -34.56, 21.22}
	fmt.Println(b)
	primes := []int{2, 3, 5, 7, 11}
	fmt.Println(primes)

	//map literls declare shortform
	electoralVotes := map[string]uint{
		"PA": 29,
		"OH": 32,
		"TX": 37,
	}
	fmt.Println(electoralVotes)

}
