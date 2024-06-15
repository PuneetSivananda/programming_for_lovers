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
	if _, ok := setResults[ix]; ok {
		return true
	} else {
		return false
	}
}

func max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
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

	// Option 2 dontsort the array
	// Create a set
	setResults := make(map[int]struct{})
	for i := 0; i < len(arr); i++ {
		setResults[arr[i]] = struct{}{}
	}
	fmt.Println(setResults)
	for i := 0; i < n; i++ {
		if !checkIfStartofSequence(setResults, n-1) {
			length = 0
			// for items in numset
			for j := 0; j < n; j++ {
				if checkIfStartofSequence(setResults, j+length) {
					length += 1
				}
			}

			longest = max(length, longest)
		}
	}
	fmt.Println(longest)
}
