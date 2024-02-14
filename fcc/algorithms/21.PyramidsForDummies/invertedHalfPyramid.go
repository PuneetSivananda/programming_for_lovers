package main

import "fmt"

func main() {
	for i := 5; i > 0; i-- {
		for j := 1; j < 1+i; j++ {
			fmt.Printf("%d", j)
			fmt.Printf("    ")
		}
		fmt.Println()
	}
}
