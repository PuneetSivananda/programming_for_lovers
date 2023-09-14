def bubble_sort(input_array):
    swap = False
    for i in range(len(input_array)-1):
        for j in range(len(input_array) - i - 1):
            if (input_array[j] > input_array[j+1]):
                swap = True
                input_array[j], input_array[j +
                                            1] = input_array[j+1], input_array[j]
        if not swap:
            return
    return input_array


print(bubble_sort([6, 7, 3, 2, 1, 7, 8, 9]))
