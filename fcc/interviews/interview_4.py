# get prime num bewrween 1 to 100
def check_if_prime(l, u):
    for i in range(l, u+1):
        if i > 1:
            for num in range(2, i):
                if (i % num) == 0:
                    break
            else:
                if (i != None):
                    print(i)


def prime_nos():
    print(check_if_prime(1, 100))


def fibonacci():
    a, b = 0, 1
    counts = []
    counts.append(1)
    for i in range(1, 10):
        a, b = b, a+b
        counts.append(b)

    for i in range(len(counts)):
        print(counts[i])


# fibonacci()

prime_nos()
