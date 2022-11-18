package main

import (
	"fmt"
	"strings"
)

func otherComplement(text string) string {
	return ""
}

var complementString = strings.NewReplacer(
	"T", "A", "A", "T", "G", "C", "C", "G",
	"t", "a", "a", "t", "g", "c", "c", "g",
)

func Reverse(text string) (reversed string) {
	for _, v := range text {
		reversed = string(v) + reversed
	}
	return reversed
}

func main() {
	var stringA string
	fmt.Println("Enter a string to compute reverseCompliment")
	fmt.Scanln(&stringA)
	c := complementString.Replace(stringA)
	fmt.Println(Reverse(c))
}
