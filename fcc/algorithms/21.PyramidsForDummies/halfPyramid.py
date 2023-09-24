# ref : https://www.programiz.com/python-programming/examples/pyramid-patterns
from __future__ import print_function
rows = 5


def printHalfPyramid(rows):
    for i in range(rows):
        for j in range(1+i):
            print(j+1, end=" ")
        print("\n")
    return


printHalfPyramid(rows)
