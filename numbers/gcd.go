package gcd

/*
Input: integers a and b
Output: The greatest common divisor of a and b, denoted as GCD(a,b)

1, start with gcd at 1
2, for every integer n between 1 and min(a,b)
	is n a divisor of a
	is n a divisor of b
	if yes for both then gcd to be n
3, after ranging through all these integers the larget number must be the GCD(a,b)

Min2(a,b)
	if a> b
		return b
	else
		return a
*/


/*
Trivial Gcd pseudocode

trivialGcd(a, b)
	d<-1
	m<-min2(a, b)
	for every integer p from 1 to m
		if p is divisor of a and b
			d<-p
	return d
*/

func min(a, b int) int{
	if(a<b){
		return a
	}
	return b
}

func trivialGcd(a, b int) int{
	d:= 1
	m:= min(a, b)
	for (p:=1; p<= m; p++){
		if( p%a === 0 && p%b ===0){
			d = p
		}
	}
	return d
}

