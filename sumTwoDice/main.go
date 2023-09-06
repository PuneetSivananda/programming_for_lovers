package main

import (
	"fmt"
	"math/rand"
	"time"
)

/*
SumTwoDice()
	the output cannot be more than 12,

	output 2 nums between 1 to 6 get the sum of these numbers
*/

func main() {
	fmt.Println("Craps!")

	rand.Seed(time.Now().UnixNano())

	// for i := 0; i < 7; i++ {
	// 	fmt.Println(RollDie())
	// }
	numTrails := 100000
	fmt.Println(ComputeHouseEdge(numTrails))
}

func RollDie() int {
	return rand.Intn(6) + 1
}

func SumTwoDice() int {
	return RollDie() + RollDie()
}

func PlayCrapsOnce() bool {
	firstRoll := SumTwoDice()
	if firstRoll == 7 || firstRoll == 11 {
		return true
	} else if firstRoll == 2 || firstRoll == 3 || firstRoll == 12 {
		return false
	} else {
		for true {
			newRoll := SumTwoDice()
			if newRoll == firstRoll {
				return true
			} else if newRoll == 7 {
				return false
			}
		}
	}
	panic("We should not be here")
	return false
}

// takes numtrails and computes house edge of craps for whatever binary game
func ComputeHouseEdge(numTrails int) float64 {
	count := 0
	for i := 0; i < numTrails; i++ {
		var outcome bool
		outcome = PlayCrapsOnce()
		if outcome == true { //win
			count++
		} else {
			count--
		}
	}
	return float64(count) / float64(numTrails)
}
