package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

func aVeryBigSum(ar []int64) int64 {
	var sum int64
	for _, num := range ar {
		sum += num
	}
	return sum
}

// Boilerplate for aVertBigSum
func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	stdout, err := os.Create("./output.txt")
	checkError(err)

	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	arCount, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
	checkError(err)

	arTemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

	var ar []int64

	for i := 0; i < int(arCount); i++ {
		arItem, err := strconv.ParseInt(arTemp[i], 10, 64)
		checkError(err)
		ar = append(ar, arItem)
	}

	result := aVeryBigSum(ar)
	// result := aVeryBigSum([]int64{1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249})
	// fmt.Println(result)

	fmt.Fprintf(writer, "%d\n", result)

	writer.Flush()
}

func readLine(reader *bufio.Reader) string {
	str, _, err := reader.ReadLine()
	if err == io.EOF {
		return ""
	}

	return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}
