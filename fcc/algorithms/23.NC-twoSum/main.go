package main

import "fmt"

func twoSum(nums []int, target int) []int {
	dict := make(map[int]int)
	for idx, k := range nums {
		if val, found := dict[target-k]; found {
			return []int{val, idx}
		}
		dict[k] = idx
	}
	return nil
}

func main() {
	// for a given list and the target value
	// we must find the index of the numbers that will add up to the sum
	ans1 := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Println(ans1)
}
