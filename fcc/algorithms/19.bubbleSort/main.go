package main

import "fmt"

func BubbleSort(inputArray []int) []int {
	var swap bool = false
	for i := 0; i < len(inputArray)-1; i++ {
		for j := 0; j < len(inputArray)-i-1; j++ {
			if inputArray[j] > inputArray[j+1] {
				swap = true
				// swap two ins
				inputArray[j], inputArray[j+1] = inputArray[j+1], inputArray[j]
			}
		}
		if !swap {
			break
		}
	}
	return inputArray
}

func main() {
	bubbleSortArray := []int{6, 7, 3, 2, 1, 7, 8, 9}
	fmt.Println(bubbleSortArray)
	fmt.Println(BubbleSort(bubbleSortArray))
}
