def isPalindrome(inputStr):
    newLongString = list(inputStr)
    return newLongString == newLongString[::-1]

    
print(isPalindrome("aaa"))