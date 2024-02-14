package main

import "fmt"

func main() {
	rows := 10
	for i := 0; i <= rows; i++ {
		for j := 0; j < rows-i; j++ {
			fmt.Print(" ")
		}

		value := 1
		for k := 0; k <= i; k++ {
			if k > 0 && i > 0 {
				value = value * (i - k) / k
			}
			fmt.Println(value, "\t")
		}
		fmt.Println("\n")
	}
}
