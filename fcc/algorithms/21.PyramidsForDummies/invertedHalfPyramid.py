# ref : https://www.programiz.com/python-programming/examples/pyramid-patterns
from __future__ import print_function
rows = 5


def printInvertedHalfPyramid(rows):
    for i in range(rows, 0, -1):
        for j in range(1, 1+i):
            print(j, end=" ")
        print("\n")
    return


printInvertedHalfPyramid(rows)
