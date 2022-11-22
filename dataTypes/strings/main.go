package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("String!!.")
	fmt.Println(string('A'))
	fmt.Println(string(45))
	// 45 th symbol from ascii chart
	mj := strconv.Itoa(45)
	fmt.Println(mj)

	j, err := strconv.Atoi("-37")
	if err != nil {
		panic("Error:" + err.Error())
	}
	fmt.Println(j)

	x, err2 := strconv.ParseFloat("3.14", 64)
	if err2 != nil {
		panic("Error:" + err.Error())
	}
	fmt.Println(x)
	
	// String concat
	s := "Hi"
	t := " Lovers"
	fmt.Println(s + t)
}
