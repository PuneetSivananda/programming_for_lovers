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
func Factorial(n int) int{
	p:=1
	i:=1
	for i<=n {
		p = p*i
		i = i+1
	}
	return p
}

func main(){
	fact := Factorial(1)
	fmt.Println(fact)
}