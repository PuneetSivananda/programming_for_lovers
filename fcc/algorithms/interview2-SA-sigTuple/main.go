package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	// initialize board
	// board = [" " for x in range(9)]
	var board [9]string
	for i := 0; i < 9; i++ {
		board[i] = "0"
	}

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
