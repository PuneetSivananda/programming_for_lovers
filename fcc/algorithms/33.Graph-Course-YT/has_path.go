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

	for k, v := range graphData {
		fmt.Println(k, "=", v)
	}

}
