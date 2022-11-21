package main

import (
	"fmt"
	"strings"
)

func otherComplement(text string) string {
	dictionary := map[rune]string{
		'a': "t",
		't': "a",
		'g': "c",
		'c': "g",
		'A': "T",
		'T': "A",
		'G': "C",
		'C': "G",
	}
	returnString := ""
	for _, s := range text {
		returnString += dictionary[s]
	}
	fmt.Println(returnString)
	return returnString
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
	c1 := otherComplement(stringA)
	c := complementString.Replace(stringA)
	fmt.Println("OtherCompliment=>", Reverse(c1))
	fmt.Println(Reverse(c))
}
