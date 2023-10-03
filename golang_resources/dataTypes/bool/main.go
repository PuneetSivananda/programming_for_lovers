package main

import (
	"fmt"
	"math/rand"
	"time"
)

func randBool() bool {
	rand.Seed(time.Now().UnixNano())
	val := rand.Intn(2)
	if val == 1 {
		return true
	}
	return false
}

func main() {
	fmt.Println("Create random boolean")
	fmt.Println(randBool())
}
