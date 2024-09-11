# Enter your code here. Read input from STDIN. Print output to STDOUT
inputString=input("Enter Input:")
import sys

hashValues = {}
for letter in inputString:
    if(not letter in hashValues):
        hashValues[letter]=1
    else:
        hashValues[letter]+=1

ix = 0
for k,v in hashValues.items():
    ix+=1
    if (v == 1):
        print(ix, v, k)
        sys.exit(1)
    else:
        ix = ix + 1




