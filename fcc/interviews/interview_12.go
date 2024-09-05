// Concurrency in go
// https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
	"time"
)

type data struct {
	Id     string `json:"id"`
	Url    string `json:"url"`
	Width  int    `json:"width"`
	Height int    `json:"height"`
}

func fetchCatsApiWithoutChanels() []data {
	count := "1"
	url := fmt.Sprintf("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=%s", count)
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching data")
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Unable to read response body")
	}

	var images []data
	err = json.Unmarshal(body, &images)
	if err != nil {
		fmt.Printf("Error Decoding Data")

	}
	return images
}

func fetchCatsApiWithChannels(ch chan<- string, wg *sync.WaitGroup) []data {
	defer wg.Done()
	count := "1"
	url := fmt.Sprintf("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=%s", count)
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching data")
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Unable to read response body")
	}

	var images []data
	err = json.Unmarshal(body, &images)
	if err != nil {
		fmt.Printf("Error Decoding Data")

	}
	// ch <- fmt.Sprintf("This is the data %s", data)
	return images
}

func main() {
	startNow := time.Now()
	for i := 0; i < 10; i++ {
		cat := fetchCatsApiWithoutChanels()
		fmt.Println(cat[0].Url)
	}
	fmt.Println("Elapased Time Since: ", time.Since(startNow))
}
