package main

/**
Factorial(n):
	p <- 1
	i <- 1
	while(i<= n)
		p <- p.i (p=1)
		i <- i+1 (i=2)
	return p
*/
import (
	"fmt"
)

func Factorial(n int) int {
	p := 1
	i := 1
	for i <= n {
		p = p * i
		i = i + 1
	}
	return p
}

func AnotherFactorial(n int) int {
	p := 1
	for i := 1; i <= n; i++ {
		p = p * i
	}
	return p
}

func main() {
	fact := Factorial(10)
	anotherFact := AnotherFactorial(10)
	fmt.Println("AnotherFactorial:= ", anotherFact)
	fmt.Println("Factorial:= ", fact)
}
