package main

import (
	"bufio"
	"fmt"
	"io"
	"strings"
)

func aVeryBigSum(ar []int64) int64 {
	var sum, carry int64
	for _, num := range ar {
		sum += num
		carry = sum / 10000000000
		sum %= 10000000000
	}
	sum += carry

	return sum
}

// Boilerplate for aVertBigSum
func main() {
	// reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	// stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
	// checkError(err)

	// defer stdout.Close()

	// writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	// arCount, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
	// checkError(err)

	// arTemp := strings.Split(strings.TrimSpace(readLine(reader)), " ")

	// var ar []int64

	// for i := 0; i < int(arCount); i++ {
	// 	arItem, err := strconv.ParseInt(arTemp[i], 10, 64)
	// 	checkError(err)
	// 	ar = append(ar, arItem)
	// }

	result := aVeryBigSum([]int64{1000000001, 1000000002, 1000000003, 1000000004, 1000000005})
	fmt.Println(result)

	// fmt.Fprintf(writer, "%d\n", result)

	// writer.Flush()
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
