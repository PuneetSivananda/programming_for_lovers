package main

import "fmt"

// Input: nums = [2,20,4,10,3,4,5]
// Output: 4

func main() {
	var n int
	fmt.Scanf("%d", &n)

	var arr = make([]int, n)

	for i := 0; i < n; i++ {
		fmt.Scanf("%d", &arr[i])
	}

	fmt.Printf("%v", arr)
}
