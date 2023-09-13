// https://www.freecodecamp.org/news/iteration-in-golang/
// https://blog.boot.dev/golang/anonymous-structs-golang/
package main

import "fmt"

type Item struct {
	name string
	age  int
}

func main() {
	SolveUsingMap()
}

func SolveUsingStruct() {}

func SolveUsingMap() {
	list_of_characters := []map[string]interface{}{
		{"name": "Ram", "age": 20},
		{"name": "Sam", "age": 25},
		{"name": "Sita", "age": 27},
		{"name": "Gita", "age": 22},
	}

	for i := 0; i < len(list_of_characters); i++ {
		for j := 0; j < len(list_of_characters); j++ {
			if list_of_characters[i]["age"].(int) < list_of_characters[j]["age"].(int) { // Type Assertions (.int)
				fmt.Println(list_of_characters[i])
				break
			}
		}
	}
}
