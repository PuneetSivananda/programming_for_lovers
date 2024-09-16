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

func main() {
	var err = json.Unmarshal([]byte(graph), &graphData)
	if err != nil {
		log.Fatal(err.Error())
	}

	for k, v := range graphData {
		fmt.Println(k, "=", v)
	}

}
