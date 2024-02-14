package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
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
