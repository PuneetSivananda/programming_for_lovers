package main

import (
	"encoding/json"
	"fmt"
	"sort"
)

// flatten the array and sort desc by age
// ['A', 'B', 'F', 'C', 'D', 'E']
type Item struct {
	Name  string
	Age   int
	Child []Item
}

func processItem(items []Item) []Item { //return type is required for recursion in go
	var flattenedItem []Item
	for _, c := range items {
		flattenedItem = append(flattenedItem, c)
		flattenedItem = append(flattenedItem, processItem(c.Child)...) // we need to use the spread operator
	}
	return flattenedItem
}

func main() {
	// fmt.Println("flatten an array in golang")
	// arr := []Item{
	// 	{Name: "A", Age: 60, Child: []Item{
	// 		{Name: "B", Age: 40},
	// 		{Name: "C", Age: 30, Child: []Item{
	// 			{Name: "D", Age: 14},
	// 			{Name: "E", Age: 5},
	// 		}},
	// 	}},
	// 	{Name: "F", Age: 35},
	// }
	jsonInput := []byte(`[
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
	]`)
	var outputJson []Item
	err := json.Unmarshal(jsonInput, &outputJson)
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
	flattenedList := processItem(outputJson)
	// fmt.Println(flattenedList)
	for _, data := range flattenedList {
		fmt.Println(data.Age)
	}

	sort.Slice(flattenedList, func(i, j int) bool {
		return flattenedList[i].Age > flattenedList[j].Age
	})
	fmt.Println("----------------")

	type FinalList struct {
		Name string
		Age  int
	}

	var sortedList []FinalList
	for _, data := range flattenedList {
		sortedList = append(sortedList, FinalList{data.Name, data.Age})
	}

	fmt.Println(sortedList)
}
