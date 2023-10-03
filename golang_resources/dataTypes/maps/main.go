package main

import (
	"fmt"
)

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

	dict2 := make(map[string]int)
	dict2["Love"] = 0
	fmt.Println(dict2["Love"])
	BoostLove(dict2)
	fmt.Println(dict2["Love"])

	// find Freq words problem
	text := "ACGTTTTGAGACGACGTTT"
	k := 3
	fmt.Println(FindFrequentWords(text, k))
}

func BoostLove(dict map[string]int) {
	dict["Love"] = 100
}

func FindFrequentWords(text string, k int) []string {
	freqPatterns := make([]string, 0)

	freqMap := FrequencyMap(text, k)
	max := MaxValue(freqMap)

	// range over the freq map, looking for strings achieveing the max num of values
	for pattern, value := range freqMap {
		if value == max {
			// append the paater to freqpattern list
			freqPatterns = append(freqPatterns, pattern)
		}
	}

	return freqPatterns
}

// takes a map of strings as input and returns the max value of the map
func MaxValue(freqMap map[string]int) int {
	m := 0

	firstTimeThrough := true

	for _, value := range freqMap {
		if firstTimeThrough == true || value > m {
			m = value
			firstTimeThrough = false
		}
	}
	return m
}

// takes a string, and k int and returns each k-mer substring
func FrequencyMap(text string, k int) map[string]int {
	freq := make(map[string]int)

	for j := 0; j < len(text)-k+1; j++ {
		pattern := text[j : j+k]
		// method1
		/*
			// does freq of pattern exist
			_, exists := freq[pattern]
			if !exists {
				freq[pattern] = 1
			} else {
				freq[pattern]++
			}
		*/
		// method2: map for counting
		freq[pattern]++
	}

	return freq
}
