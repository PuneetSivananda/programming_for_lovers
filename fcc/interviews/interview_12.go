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

func fetchCatsApiWithChannels(ch chan<- string, wg *sync.WaitGroup) {
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
	ch <- fmt.Sprintf("This is the data %s", images[0].Url)
}

func main() {
	startNow := time.Now()
	// for i := 0; i < 10; i++ {
	// 	cat := fetchCatsApiWithoutChanels()
	// 	fmt.Println(cat[0].Url)
	// }

	ch := make(chan string)
	var wg sync.WaitGroup
	// run the code as co-routine for each single api call
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go fetchCatsApiWithChannels(ch, &wg)
	}

	// go routine for cleanup and wait for finish
	go func() {
		wg.Wait()
		close(ch)
	}()

	// read the result sent to channel
	for result := range ch {
		fmt.Println(result)
	}
	fmt.Println("Elapased Time Since: ", time.Since(startNow))
}
