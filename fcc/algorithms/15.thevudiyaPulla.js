// https://www.geeksforgeeks.org/number-of-subsets-with-zero-sum/
// Vaddakan koodi has referenced here
const inputArr = [1, 3, -4, 4, -2, -2];

function findSubSetsWithSumZero(arr) {
  let sums = {};
  let currentSum = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

findSubSetsWithSumZero(inputArr);

/**
 * def find_subsets_with_sum_zero(arr):
    sums = {}  # Dictionary to store sums and their corresponding indices
    current_sum = 0
    max_length = 0  # To track the largest number of subsets

    # Initialize the sums dictionary with a sum of 0 at index -1
    sums[0] = [-1]

    for i, num in enumerate(arr):
        current_sum += num

        # If the current sum has been seen before, it means there is a subset that sums to 0
        if current_sum in sums:
            # Calculate the length of the subset
            subset_length = i - sums[current_sum][-1]

            # If this is the longest subset found so far, update max_length
            if subset_length > max_length:
                max_length = subset_length

        # If the current sum is not in the sums dictionary, add it
        if current_sum not in sums:
            sums[current_sum] = [i]
        else:
            sums[current_sum].append(i)

    # Extract and return the items that form the longest subset
    longest_subsets = []
    for start_index in sums[current_sum][-1] - max_length + 1:
        longest_subsets.append(arr[start_index + 1 : sums[current_sum][-1] + 1])

    return longest_subsets, max_length

# Example usage:
arr = [1, 3, -4, 4, -2, -2]
subsets, max_length = find_subsets_with_sum_zero(arr)
print("Longest subsets with sum 0:", subsets)
print("Largest number of such subsets:", max_length)
**/
