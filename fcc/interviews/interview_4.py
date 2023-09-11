# get prime num bewrween 1 to 100
NUM = 20


def check_if_prime(n):
    is_prime = False
    for i in range(1, n):
        if (n % i == 0):
            is_prime = False
            continue
        elif (n//i > 0):
            is_prime = False
        else:
            is_prime = True
    return is_prime


def prime_nos():
    for i in range(1, NUM):
        if (check_if_prime(i)):
            print(i)
        else:
            continue


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
