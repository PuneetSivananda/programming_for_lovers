package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("Craps!")
	for i := 0; i < 100; i++ {
		fmt.Println(RollDie())
	}
}

func RollDie() int {
	return rand.Intn(6) + 1
}
