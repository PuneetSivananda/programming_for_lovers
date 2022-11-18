package main

import "fmt"

func Complement(text string) string {
	return ""
}

func Reverse(text string) string {
	return ""
}

func main() {
	var stringA string
	fmt.Println("Enter a string to compute reverseCompliment")
	fmt.Scanln(&stringA)
	fmt.Println(Complement(Reverse(stringA)))
}
