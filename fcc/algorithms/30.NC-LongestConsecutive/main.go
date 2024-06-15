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

func checkIfStartofSequence(setResults map[int]struct{}, ix int) bool {
	if _, ok := setResults[ix-1]; ok {
		return false
	}
	return true
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	var n int
	var longest, length int
	fmt.Printf("Enter the num of integers to input:= ")
	fmt.Scanf("%d", &n)

	var arr = make([]int, n)

	for i := 0; i < n; i++ {
		fmt.Scanf("%d", &arr[i])
	}

	fmt.Printf("Original Array %v\n", arr)
	fmt.Println("Sorted Array ", sort(arr))

	// Create a set
	setResults := make(map[int]struct{})
	for i := 0; i < len(arr); i++ {
		setResults[arr[i]] = struct{}{}
	}

	for i := 0; i < n; i++ {
		if checkIfStartofSequence(setResults, arr[i]) {
			length = 1
			current := arr[i]
			for {
				current++
				if _, ok := setResults[current]; ok {
					length++
				} else {
					break
				}
			}
			fmt.Println(setResults)
			longest = max(length, longest)
		}
	}
	fmt.Println("Length of the longest consecutive sequence:", longest)
}
