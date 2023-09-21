package main

import (
	"encoding/json"
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
	jsonInput := `[
		{
		  "name": "A",
		  "age": 60,
		  "child": [
			{
			  "name": "B",
			  "age": 40
			},
			{
			  "name": "C",
			  "age": 30,
			  "child": [
				{
				  "name": "D",
				  "age": 14
				},
				{
				  "name": "E",
				  "age": 5
				}
			  ]
			}
		  ]
		},
		{
		  "name": "F",
		  "age": 35
		}
	]`
	var outputJson []Item
	err := json.Unmarshal([]byte(jsonInput), &outputJson)
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
	fmt.Println(outputJson)
	fmt.Println(arr)
}
