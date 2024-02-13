package main

import "fmt"

// usings sets check if each, row and column are having unique values
// for every 3 by 3 grid check if any are duplicates
// 	check the index of the 9 items first divide each index by 3 to get remainder
//	eg: (2,3) => (2/3 = 0, 3/3 =1) its in index 0,1 for the final 3 by 3 matrix
type KeyType struct {
	row rune
	col rune
}

func isValidSudoku(grid [][]rune) {
	cols := make(map[rune]int)
	rows := make(map[rune]int)
	squares := make(map[KeyType]int)

	for r := 0; r <= 9; r++ {
		for c := 0; c <= 9; c++ {
			fmt.Println(r, c)
			fmt.Println(grid[r][c])
		}
	}
	fmt.Println(cols[2], rows, squares)
}

func main() {
	fmt.Println("hello")
	var grid [][]rune = [][]rune{{5, 3, '.'}, {}}
	isValidSudoku(grid)
}
