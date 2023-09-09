// You can edit this code!
// Click here and start typing.
package main

import "fmt"

// queue

type Queue struct {
	data []string
}

func (q *Queue) Insert(ele string) {
	q.data = append(q.data, ele)
	// fmt.Println(q.data)
}

func (q Queue) Display() {
	ix := len(q.data)
	for i := 0; i < ix; i++ {
		fmt.Println(q.data[i], "--")
	}
}

func main() {
	q1 := Queue{
		data: []string{},
	}
	q1.Insert("3")
	q1.Insert("5")
	q1.Insert("8")
	q1.Display()

}
