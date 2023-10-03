package main

// min of 2 integers and reuse them in min of 3

func Min_of_three(num1, num2, num3 int) int {
	first_pair := min(num1, num2)
	final_ans := min(first_pair, num3)
	return final_ans
}
