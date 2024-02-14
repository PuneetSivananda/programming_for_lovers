package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func print_board(board [9]string) {
	row1 := fmt.Sprintf("| %s | %s | %s |\n", board[0], board[1], board[2])
	row2 := fmt.Sprintf("| %s | %s | %s |\n", board[3], board[4], board[5])
	row3 := fmt.Sprintf("| %s | %s | %s |\n", board[6], board[7], board[8])
	fmt.Printf(row1)
	fmt.Printf(row2)
	fmt.Printf(row3)
	fmt.Println()
}

func player_move(icon string) {
	var number int
	if icon == "x" || icon == "X" {
		number = 1
	} else if icon == "o" || icon == "O" {
		number = 2
	}
	turn := fmt.Sprintf("Your turn player %v\n", number)
	fmt.Printf(turn)

}

func main() {
	// initialize board
	// board = [" " for x in range(9)]
	var board [9]string
	for i := 0; i < 9; i++ {
		board[i] = "0"
	}

	print_board(board)

	player1 := bufio.NewReader(os.Stdin)
	for {
		fmt.Println("Enter Prompt: ")
		player1Text, _ := player1.ReadString('\n')
		player1Text = strings.Replace(player1Text, "\n", "", -1)
		fmt.Println(player1Text)
		if player1Text == "exit" {
			break
		}
	}

}
