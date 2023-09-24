rows = 6


def printPascalsPyramid(rows):
    for i in range(rows):
        for j in range(1+i):
            print(j+1, end=" ")
        print("\n")
    return


printPascalsPyramid(rows)
