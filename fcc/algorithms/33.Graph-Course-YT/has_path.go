package main

import (
	"encoding/json"
	"fmt"
	"log"
)

var graph = `{
	"a": ["b", "c"],
	"b": ["d"],
	"c": ["e"],
	"d": ["f"],
	"e": [],
	"f": []
  }`

var graphData map[string][]string

type Queue []string

func (q *Queue) Enqueue(elem string) {
	*q = append(*q, elem)
	fmt.Println("Enqueued: ", elem)
}

func (q *Queue) Dequeue() (string, bool) {
	if len(*q) == 0 {
		fmt.Println("No elements in queue")
		return "", false
	}
	ele := (*q)[0]
	*q = (*q)[1:]
	return ele, true
}

func has_pathQ(graph map[string][]string, src string, dest string) bool {
	var q Queue
	q = append(q, src)
	fmt.Println(q)
	for len(q) > 0 {
		curr, _ := q.Dequeue()
		if curr == dest {
			return true
		}

		for _, ele := range graph[curr] {
			q.Enqueue(ele)
		}
	}
	// initialize queue with src node
	// if len of Q > 0
	// Dequque first item into curr
	// if curr == dest return true
	// Enqueue all neighbours in list

	return false
}

func has_path(graph map[string][]string, src string, dest string) bool {
	if src == dest {
		return true
	}
	for _, neigh := range graph[src] {
		if has_path(graph, neigh, dest) {
			return true
		}
	}
	return false
}

func main() {
	var err = json.Unmarshal([]byte(graph), &graphData)
	if err != nil {
		log.Fatal(err.Error())
	}

	fmt.Println(has_path(graphData, "f", "e"))

	// for k, v := range graphData {
	// 	fmt.Println(k, "=", v)
	// }
	fmt.Println(has_pathQ(graphData, "a", "f"))

}
