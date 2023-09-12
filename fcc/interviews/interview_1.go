// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func main() {
	arr := []int{2, 3, 5, 4, 5, 3, 4}
	res := []int{}
	mapA := make(map[int]int)
	for i := 0; i < len(arr); i++ {
		_, ok := mapA[arr[i]]
		if !ok {
			mapA[arr[i]] += 1
		} else {
			mapA[arr[i]] += 1
		}
	}
	for k, v := range mapA {
		if v == 1 {

			res = append(res, k)
		}
	}
	fmt.Println(res)

}
