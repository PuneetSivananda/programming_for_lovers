package main

import "fmt"

func BubbleSort(inputArray []int) []int {
	fmt.Println(inputArray[1], inputArray[2])
	fmt.Println(inputArray)
	inputArray[1], inputArray[2] = inputArray[2], inputArray[1]
	fmt.Println(inputArray)
	return []int{1, 23, 5}
}

func main() {
	bubbleSortArray := []int{6, 7, 3, 2, 1, 7, 8, 9}
	BubbleSort(bubbleSortArray)
}
