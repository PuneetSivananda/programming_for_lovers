package main

import (
	"fmt"
	"math/rand"
)

/*
SumTwoDice()
	the output cannot be more than 12,

	output 2 nums between 1 to 6 get the sum of these numbers
*/

func main() {
	fmt.Println("Craps!")

	
	for i := 0; i < 7; i++ {
		fmt.Println(RollDie())
	}
}

func RollDie() int {
	return rand.Intn(6) + 1
}
func SumTwoDice() int {
	return RollDie() + RollDie()
}
