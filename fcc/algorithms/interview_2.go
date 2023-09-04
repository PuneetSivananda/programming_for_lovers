package main

import (
	"fmt"
	"sync"
)

func Add(wg *sync.WaitGroup, n1, n2 int, c1 chan int) {
	defer wg.Done()
	c1 <- n1 + n2
}

func main() {
	wg := &sync.WaitGroup{}
	fmt.Println("Hello, 世界")
	c1 := make(chan int, 4)
	// defer close(c1)

	//var chan c1 int
	wg.Add(1)
	go Add(wg, 5, 6, c1)
	go Add(wg, 2, 3, c1)
	wg.Wait()

	for res := range c1 {
		wg.Add(1)
		fmt.Println(res)
	}
}
