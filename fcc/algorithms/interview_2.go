package main

import (
	"fmt"
	"sync"
)

func Add(n1, n2 int, wg *sync.WaitGroup, c1 chan int) {
	defer wg.Done()
	c1 <- n1 + n2
}

func main() {
	wg := new(sync.WaitGroup)

	c1 := make(chan int, 4)
	// defer close(c1)

	wg.Add(1)
	go Add(5, 6, wg, c1)
	wg.Add(1)
	go Add(2, 3, wg, c1)

	go func() {
		wg.Wait()
		close(c1)
	}()

	for item := range c1 {
		fmt.Println(item)
	}

}
