package main

import "fmt"

type Item struct {
	name string
	age  int
}

func main() {
	SolveUsingMap()
}

func SolveUsingStruct(){}

func SolveUsingMap(){
	var list_of_characters = []Item {
		name string json:"name"
		age  int    json:"age"
	}{
		{"name": "Ram", "age": 20},
		{"name": "Sam", "age": 25},
		{"name": "Sita", "age": 27},
		{"name": "Gita", "age": 22},
	}

	for i := 0; i <= len(list_of_characters); i++ {
		fmt.Println(list_of_characters[i].age)
	}
}