package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	fmt.Println("Craps!")

	// rand.Seed(47)
	// we need to give a seed, this is not truly random
	// instead use the current time to millisecond
	rand.Seed(time.Now().UnixNano())

	for i := 0; i < 5; i++ {
		fmt.Println(RollDie())
	}
}

func RollDie() int {
	return rand.Intn(6) + 1
}
