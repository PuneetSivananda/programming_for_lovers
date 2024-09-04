package main

import (
	"fmt"
	"strings"
)

func isPalindrome(s string) bool {
	asciChars := "abcdefghijklmnopqrstuvxyz0123456789"
	lowerS := strings.ToLower(s)
	var onlyAsciChars []rune
	for i := 0; i <= len(lowerS)-1; i++ {
		if strings.Contains(asciChars, string(lowerS[i])) {
			onlyAsciChars = append(onlyAsciChars, lowerS[i])
		}
	}
	lenS := len(onlyAsciChars)
	var reversedChars []rune
	for i := lenS - 1; i >= 0; i-- {
		reversedChars = append(reversedChars, onlyAsciChars[i])
	}

	if string(reversedChars) == string(onlyAsciChars) {
		return true
	} else {
		return false
	}
}

func main() {
	fmt.Println(isPalindrome("aba"))
}
