package main

import (
	"fmt"
	"strings"
)

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// func isPalindrome(s string) bool {}
// _______
// _______
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// ToLower
// Contains
// Reverse using for loop
// check strings

func isPalindrome(s string) bool {
	asciChars := "abcdefghijklmnopqrstuvxyz0123456789"
	lowerS := strings.ToLower(s)
	var onlyAsciChars []string
	for i := 0; i <= len(lowerS)-1; i++ {
		if strings.Contains(asciChars, string(lowerS[i])) {
			onlyAsciChars = append(onlyAsciChars, string(lowerS[i]))
		}
	}
	lenS := len(onlyAsciChars)
	var reversedChars []string
	for i := lenS - 1; i >= 0; i-- {
		reversedChars = append(reversedChars, onlyAsciChars[i])

	}
	reversedStr := strings.Join(reversedChars, "")
	joinedStr := strings.Join(onlyAsciChars, "")

	if reversedStr == joinedStr {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(isPalindrome("aba"))
}
