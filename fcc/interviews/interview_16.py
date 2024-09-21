# def multiplexers ():  
#     return [lambda n1: index * n1 for index in range (4)]  
  
# print([m1(2) for m1 in multiplexers()])

# def print_pattern():
#     for i in range(4):
#         # print("\n")
#         for j in range(i - 1):
#             print("*")

# print_pattern()

a = [1,2,3,4,5] 
b = [4,5,2,0,9]

# print(list(set(a+b)))

def ownLogic(a, b):
    intermediate = []
    for i in a:
        intermediate.append(i)
    for j in b:
        intermediate.append(j)
    setIntermediate = {}
    
    # for x in intermediate:
    #     if (x in intermediate):
    #         continue
    #     else:
    #         anotherIntermediate.append(x)
    
    for item in intermediate:
        if setIntermediate.get(item) is not None:
            setIntermediate[item] += 1
        else:
            setIntermediate[item] = 1
        
    # print(setIntermediate)
    for k, v in setIntermediate.items():
        print(k)
ownLogic(a, b)

# def multiplexers ():  
  
#     return [lambda n1: index * n1 for index in range (4)]  
  
# print [m1 (2) for m1 in multiplexers ()]  
 
"""
* * * * *

 * * * *

  * * *

   * *

    *
"""
# a = [1,2,3,4,5] b = [4,5,2,0,9]
 
def print_inverted_pyramid(n):
    n = int(n)
    for i in range(n, 1, -1):
        for space in range(0, n-i):
            print("  ", end="")
        for j in range(i, 2*i-1):
            print("* ", end="")
        for j in range(1, i-1):
            print("* ", end="")
        print()

print_inverted_pyramid(5)