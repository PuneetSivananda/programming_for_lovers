package main

import "fmt"

func Fibonacci(n int, c chan int) {
	defer close(c)
	a, b := 0, 1
	for i := 0; i < n; i++ {
		c <- a
		a, b = b, a+b
	}
}

func main() {
	c := make(chan int, 10)
	go Fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i)
	}
}
