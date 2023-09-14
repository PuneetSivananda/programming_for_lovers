package main

import (
	"fmt"
	"sort"
)

// input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
// output: [['tan', 'nat'], ['bat'], ['eat', 'tea', 'ate']]

func SortString(input string) string {
	inputRunes := []rune(input)
	sort.Slice(inputRunes, func(i, j int) bool {
		return inputRunes[i] < inputRunes[j]
	})
	return string(inputRunes)
}

func GetAnagrams(words []string) [][]string {
	for i := 0; i < len(words); i++ {
		fmt.Println(SortString(words[i]))
	}
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
