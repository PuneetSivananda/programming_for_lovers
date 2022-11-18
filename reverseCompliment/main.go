package main

import (
	"fmt"
	"strings"
)

func otherComplement(text string) string {
	returnString := ""
	for _, s := range text {
		if string(s) == "a" {
			returnString += "t"
		} else if string(s) == "t" {
			returnString += "a"
		} else if string(s) == "g" {
			returnString += "c"
		} else if string(s) == "c" {
			returnString += "g"
		}
	}
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
