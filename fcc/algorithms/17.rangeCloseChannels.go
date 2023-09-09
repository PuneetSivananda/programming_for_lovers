package main

import "fmt"

func Fibonacci(nos []int, c chan int) {
	c <- 0
}

func main() {
	fmt.Println("Hello World")
}
