package main

import "fmt"

func main() {

	var arr []int32 = []int32{5, 6, 7, 6, 0, -4, -6}
	var positiveCount, negativeCount, zeroCount int
	for i := 0; i < len(arr); i++ {
		if arr[i] > 0 {
			positiveCount++
		} else if arr[i] < 0 {
			negativeCount++
		} else if arr[i] == 0 {
			zeroCount++
		}
	}
	fmt.Println(positiveCount, negativeCount, zeroCount)

}
