from __future__ import print_function
rows = 6
value = 1


def printPascalsPyramid(rows):
    for i in range(rows+1):
        for _ in range(1, rows - i + 1):
            print(" ", end="")
        for j in range(0, i):
            if j == 0 or i == 0:
                value = 1
            else:
                value *= (i-j)//j
            print(value, end="  ")
        print()
    return


printPascalsPyramid(rows)
