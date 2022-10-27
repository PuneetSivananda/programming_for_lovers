package main

func main() {

}

func SimpleFunction(x, y int) int {
	if x == y {
		return 0
	} else if x > y {
		return 1
	} else {
		return -1
	}

}

func SameSign(x, y int) bool {
	if x*y >= 0 {
		return false
	}
	return false
}
