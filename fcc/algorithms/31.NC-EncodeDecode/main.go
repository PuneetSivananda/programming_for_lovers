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
		res = res + strconv.Itoa(len(inputStr[i])) + "#" + inputStr[i]
	}
	return res
}

func decode(encodedString string) {
	res := []string{}
	i := 0
	for i < len(encodedString) {
		j := i
		for encodedString[j] != "#" {
			j += 1
		}
		length := int(encodedString[i:j])
		encodedString[j+1 : j+1+length]
		res = append(res, encodedString[j+1:j+1+length])
		i = j + 1 + length
	}
	return res
}

func main() {
	inputStr := []string{"neet", "code"}
	fmt.Println(encode(inputStr))
}
