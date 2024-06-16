package main

import "fmt"

type genericSet map[rune]struct{}

func (s genericSet) add(item rune) {
	s[item] = struct{}{}
}
func (s genericSet) remove(item rune) {
	delete(s, item)
}
func (s genericSet) has(item rune) bool {
	_, ok := s[item]
	return ok
}

type genericKeyTypeSet map[KeyType]struct{}

// usings sets check if each, row and column are having unique values
// for every 3 by 3 grid check if any are duplicates
// 	check the index of the 9 items first divide each index by 3 to get remainder
//	eg: (2,3) => (2/3 = 0, 3/3 =1) its in index 0,1 for the final 3 by 3 matrix
type KeyType struct {
	row rune
	col rune
}

func isValidSudoku(grid [][]rune) {
	cols := genericSet{}
	rows := genericSet{}
	squares := make(map[KeyType]int)
	fmt.Println(cols)
	for k, _ := range cols {
		cols[k] = struct{}{}
	}
	fmt.Println(cols)
	for r := 0; r <= 2; r++ {
		for c := 0; c <= 2; c++ {
			fmt.Println(r, c)
			fmt.Println(grid[r][c])
		}
	}
	fmt.Println(cols, rows, squares)
}

func main() {
	var grid [][]rune = [][]rune{{5, 3, '.'}, {5, 3, '.'}, {5, 3, '.'}}
	isValidSudoku(grid)
}
