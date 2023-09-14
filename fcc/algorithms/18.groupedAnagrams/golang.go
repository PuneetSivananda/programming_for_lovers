package main

import (
	"fmt"
	"sort"
)

// input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
// output: [['tan', 'nat'], ['bat'], ['eat', 'tea', 'ate']]

func SortString(input string) string {
	inputRunes := []rune(input)                  //convert string to rune array
	sort.Slice(inputRunes, func(i, j int) bool { // use the Slice option that takes the array of runes
		return inputRunes[i] < inputRunes[j] // and sorts the items in the array
	})
	return string(inputRunes)
}

func GetAnagrams(words []string) [][]string {
	result := map[string][]string{}
	for i := 0; i < len(words); i++ {
		if _, ok := result[SortString(words[i])]; ok {

			result[SortString(words[i])] = append(result[SortString(words[i])], words[i])
		} else {
			result[SortString(words[i])] = []string{words[i]}
		}
	}
	fmt.Println(result)
	return [][]string{
		{"one"},
		{"two", "three"},
	}
}

func main() {
	input := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
	output := GetAnagrams(input)
	fmt.Println(output)
}
