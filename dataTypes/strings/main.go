package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("String!!.")
	fmt.Println(string('A'))
	fmt.Println(string(45))
	// 45 th symbol from ascii chart
	mj := strconv.Itoa(45)
	fmt.Println(mj)

	j, err := strconv.Atoi("-37")
	if err != nil {
		panic("Error:" + err.Error())
	}
	fmt.Println(j)

	x, err2 := strconv.ParseFloat("3.14", 64)
	if err2 != nil {
		panic("Error:" + err.Error())
	}
	fmt.Println(x)

	// String concat
	s := "Hi"
	t := " Lovers"
	u := s + t
	fmt.Println(u)

	fmt.Println(u[0], string(u[0]))
	fmt.Println(u[len(u)-1], string(u[len(u)-1]))

	if t[2] == 'o' {
		fmt.Println("Success")
	}
	dna := "accgat"
	fmt.Println("DNA: ", dna)
	fmt.Println("Complement: ", Complement(dna))
	fmt.Println("Reversed: ", Reverse(dna))
}

// ReverseComplement takes a dna string and returns the reverse complement
func ReverseComplement(dna string) string {
	return Reverse(Complement(dna))
}

// Takes a string and reverses the string
func Reverse(dna string) (reversedString string) {
	for _, c := range dna {
		reversedString = string(c) + reversedString
	}
	return reversedString
}

// Complement takes a string and gives the complement symbol
func Complement(dna string) string {
	dna2 := ""
	for i := range dna {
		// would give error
		/*
			switch dna[i] {
			case 'a':
				dna[i] = 't'
			case 't':
				dna[i] = 'a'
			case 'g':
				dna[i] = 'c'
			case 'c':
				dna[i] = 'g'
			}
		*/
		switch dna[i] {
		case 'a':
			dna2 += "t"
		case 't':
			dna2 += "a"
		case 'g':
			dna2 += "c"
		case 'c':
			dna2 += "g"
		}
	}
	return dna2
}
