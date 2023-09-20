package main

import (
	"fmt"
)

// flatten the array and sort desc by age
// ['A', 'B', 'F', 'C', 'D', 'E']
type Item struct {
	Name  string
	Age   int
	Child []Item
}

func main() {
	fmt.Println("flatten an array in golang")
	arr := []Item{
		{Name: "A", Age: 60, Child: []Item{
			{Name: "B", Age: 40},
			{Name: "C", Age: 30, Child: []Item{
				{Name: "D", Age: 14},
				{Name: "E", Age: 5},
			}},
		}},
		{Name: "F", Age: 35},
	}
	fmt.Println(arr)
}
