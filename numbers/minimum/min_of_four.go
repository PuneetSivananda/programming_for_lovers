package main

// min of 4 integers and reuse them in min of 3
func min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}


func Min_of_four(num1, num2, num3, num4 int) int {
	first_pair := min(num1, num2)
	second_pair := min(num3, num4)
	return min(first_pair, second_pair)
}
