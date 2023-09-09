package main

import "fmt"

func AddNumbers(nos []int, c chan int) {
	c <- 2
}

func main() {
	var s []int
	c := make(chan int)
	s = []int{7, 2, 8, -9, 4, 0}
	go AddNumbers(s[:len(s)/2], c)
	go AddNumbers(s[len(s)/2:], c)
	run1, run2 := <-c, <-c
	fmt.Println(run1, run2)
}
