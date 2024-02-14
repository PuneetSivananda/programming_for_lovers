package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var board [9]string

func print_board() {
	row1 := fmt.Sprintf("| %v | %v | %v |\n", board[0], board[1], board[2])
	row2 := fmt.Sprintf("| %v | %v | %v |\n", board[3], board[4], board[5])
	row3 := fmt.Sprintf("| %v | %v | %v |\n", board[6], board[7], board[8])
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
	fmt.Println("Enter your move (1-9)")
	choice := bufio.NewReader(os.Stdin)
	playerChoice, _ := choice.ReadString('\n')
	playerChoice = strings.Replace(playerChoice, "\n", "", -1)
	ix, _ := strconv.Atoi(playerChoice)
	if board[ix] == "" {
		board[ix] = icon
		fmt.Println(board)
	} else {
		fmt.Println("\nThat place is already taken")
	}
}

func is_victory(icon string) bool {
	if (board[0] == icon && board[1] == icon && board[2] == icon) ||
		(board[3] == icon && board[4] == icon && board[5] == icon) ||
		(board[6] == icon && board[7] == icon && board[8] == icon) ||
		(board[0] == icon && board[3] == icon && board[6] == icon) ||
		(board[1] == icon && board[4] == icon && board[7] == icon) ||
		(board[2] == icon && board[5] == icon && board[8] == icon) ||
		(board[0] == icon && board[4] == icon && board[8] == icon) ||
		(board[2] == icon && board[4] == icon && board[6] == icon) {
		return true
	}
	return false
}

func is_draw() bool {
	isDraw := false
	for _, item := range board {
		if item != "" {
			isDraw = true
			break
		}
	}
	return isDraw
}

func main() {
	// initialize board
	// board = [" " for x in range(9)]

	for i := 0; i < 9; i++ {
		board[i] = ""
	}

	// player1 := bufio.NewReader(os.Stdin)
	for {
		print_board()
		player_move("X")
		print_board()
		if is_victory("X") {
			fmt.Println("X Wins!")
			break
		} else if is_draw() {
			fmt.Println("It's a draw!")
			break
		}
		player_move("O")
		if is_victory("O") {
			fmt.Println("O Wins!")
			break
		} else if is_draw() {
			fmt.Println("It's a draw!")
			break
		}
		// fmt.Println("Enter Prompt: ")
		// player1Text, _ := player1.ReadString('\n')
		// player1Text = strings.Replace(player1Text, "\n", "", -1)
		// if player1Text == "exit" {
		// 	break
		// }
	}

}
