package main

// Create a caching mechanism in Go that caches the results of expensive function calls and serves cached results for subsequent calls with the same input parameters
// Implement a data pipeline in Go that processes incoming data from a source (e.g., Kafka, RabbitMQ), performs some transformations, and writes the processed data to a destination

// call an api recursively 5 times

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
)

type data struct {
	Id     string `json:"id"`
	Url    string `json:"url"`
	Width  int    `json:"width"`
	Height int    `json:"height"`
}

func callData(c chan string, wg *sync.WaitGroup) {
	defer wg.Done()
	resp, err := http.Get("https://api.thecatapi.com/v1/images/jyjEWK7xp")
	if err != nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}

	var catImage data
	err = json.Unmarshal(body, &catImage)
	if err != nil {
		fmt.Println(err)
	}
	c <- fmt.Sprintf("Cat Image is: %s", catImage.Url)
}

func main() {
	c := make(chan string)
	var wg sync.WaitGroup

	for i := 0; i < 5; i++ {
		wg.Add(1)
		go callData(c, &wg)
	}

	go func() {
		wg.Wait()
		close(c)
	}()

	for item := range c {
		fmt.Println(item)
	}

}
