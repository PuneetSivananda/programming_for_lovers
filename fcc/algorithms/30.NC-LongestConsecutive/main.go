package main

import "fmt"

// Input: nums = [2,20,4,10,3,4,5]
// Output: 4

func sort(inputArr []int) []int {
	temp := 0
	for i := 0; i < len(inputArr); i++ {
		swapped := false
		for j := 0; j < len(inputArr)-i-1; j++ {
			if inputArr[j] > inputArr[j+1] {
				temp = inputArr[j]
				inputArr[j] = inputArr[j+1]
				inputArr[j+1] = temp
				swapped = true
			}
		}
		if !swapped {
			break
		}

	}
	return inputArr
}

func main() {
	var n int
	fmt.Printf("Enter the num of integers to input:= ")
	fmt.Scanf("%d", &n)

	var arr = make([]int, n)

	for i := 0; i < n; i++ {
		fmt.Scanf("%d", &arr[i])
	}

	fmt.Printf("Original Array %v\n", arr)
	fmt.Println("Sorted Array ", sort(arr))
	setResults := make(map[int]struct{})
	for i := 0; i < len(sort(arr)); i++ {
		setResults[arr[i]] = struct{}{}
	}
	fmt.Println(setResults)
	if _, ok := setResults[5]; ok {
		fmt.Println("Found")
	} else {
		fmt.Println("Not Found")
	}

}
