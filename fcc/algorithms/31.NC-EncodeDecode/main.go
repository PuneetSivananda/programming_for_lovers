package main

import (
	"fmt"
	"strconv"
)

// Input: ["neet","code"]
// Output: "4#neet4#code"

func encode(inputStr []string) string {
	res := ""
	for i := 0; i < len(inputStr); i++ {
		length := strconv.Itoa(len(inputStr[i]))
		res = res + length + "#" + inputStr[i]
	}
	return res
}

func decode(encodedString string) []string {
	res := []string{}
	i := 0
	for i < len(encodedString) {
		j := i
		for j < len(encodedString) && encodedString[j] != '#' {
			j += 1
		}
		if j >= len(encodedString) {
			break
		}
		length, err := strconv.Atoi(encodedString[i:j])
		if err != nil {
			fmt.Println("Error converting string to int:", err)
			break
		}
		res = append(res, encodedString[j+1:j+1+length])
		i = j + 1 + length
	}
	return res
}

func main() {
	inputStr := []string{"neet", "code"}
	encodedString := encode(inputStr)
	fmt.Println(encode(inputStr))
	fmt.Println(decode(encodedString))
}
