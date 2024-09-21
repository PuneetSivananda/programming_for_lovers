/* Required Output
Odd: 1
Even: 2
Odd: 3
Even: 4
Odd: 5
Even: 6
Odd: 7
Even: 8
Odd: 9
Even: 10*/
 
package main
 
import (
	"sync"
)
 
var wg sync.WaitGroup
 
func main() {
	wg.Add(2)
	odd := make(chan int)
	even := make(chan int)
 
	go Odd(odd, even)
	go Even(odd, even)
	// Add missing code.
}
 
func Odd(odd chan int, even chan int) {
 	// Add missing code
	
}
 
func Even(odd chan int, even chan int) {
	//Add missing code
}

func getReversed(inp string) string{
	lenS := len(inp)
	var returnString string 
	for i:= lenS; lenS>0; i--{
		returnString:= append(returnSting, inp[i]	
	}
	return returnString

}

func isPalindrome(sample string){
	reversedString := getReversedString(sample)
	if (reversdString == sample){
		fmt.Println("Is Palindrome")
	}else{
		fmt.Println("Not Palindrome")
	}
}
