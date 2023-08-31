// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func main() {
	arr := []int{2, 3, 5, 4, 5, 3, 4}
	mapA := make(map[int]int)
	for i := 0; i < len(arr); i++ {
		if mapA[i] != 0 {
			mapA[arr[i]] += 1
		}

		fmt.Println(mapA[arr[i]])
	}
	fmt.Println(mapA)
}
