package main

import "fmt"

// input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
// output: [['tan', 'nat'], ['bat'], ['eat', 'tea', 'ate']]

func GetAnagrams(words []string) [][]string {
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
