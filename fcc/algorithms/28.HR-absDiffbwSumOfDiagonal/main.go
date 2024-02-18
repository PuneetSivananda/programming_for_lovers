package main

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
func computeValuesFromTopLeftToBottomRight(arr [][]int32) int32 {
	rows := len(arr)
	if rows == 0 {
		return 0
	}
	cols := len(arr[0])
	var tmpRes int32
	for i := 0; i < rows && i < cols; i++ {
		tmpRes = tmpRes + arr[i][i]
	}
	return tmpRes
}

func computeValuesFromTopRightToBottomLeft(arr [][]int32) int32 {
	rows := len(arr)
	if rows == 0 {
		return 0
	}
	cols := len(arr[0])
	var tmpRes int32
	for i := 0; i < rows && i < cols; i++ {
		tmpRes = tmpRes + arr[i][cols-1-i]
	}
	return tmpRes
}

func diagonalDifference(arr [][]int32) int32 {
	tlbr := computeValuesFromTopLeftToBottomRight(arr)
	trbl := computeValuesFromTopRightToBottomLeft(arr)

	return tlbr + trbl
}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)

	stdout, err := os.Create("output.txt")
	checkError(err)

	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 16*1024*1024)

	nTemp, err := strconv.ParseInt(strings.TrimSpace(readLine(reader)), 10, 64)
	checkError(err)
	n := int32(nTemp)

	var arr [][]int32
	for i := 0; i < int(n); i++ {
		arrRowTemp := strings.Split(strings.TrimRight(readLine(reader), " \t\r\n"), " ")

		var arrRow []int32
		for _, arrRowItem := range arrRowTemp {
			arrItemTemp, err := strconv.ParseInt(arrRowItem, 10, 64)
			checkError(err)
			arrItem := int32(arrItemTemp)
			arrRow = append(arrRow, arrItem)
		}

		if len(arrRow) != int(n) {
			panic("Bad input")
		}

		arr = append(arr, arrRow)
	}

	result := diagonalDifference(arr)

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
