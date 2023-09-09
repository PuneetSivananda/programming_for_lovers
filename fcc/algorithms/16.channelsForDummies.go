package main

import "fmt"

func Fino(nos []int, c chan int) {
	n := len(nos)
	sum := 0
	for i := 0; i < n; i++ {
		sum = sum + nos[i]
	}
	c <- sum
}

func main() {
	var s []int
	c := make(chan int)
	s = []int{7, 2, 8, -9, 4, 0}
	go AddNumbers(s[:len(s)/2], c)
	go AddNumbers(s[len(s)/2:], c)
	run1, run2 := <-c, <-c
	fmt.Println(run1, run2)
	fmt.Println(run1 + run2)
}
