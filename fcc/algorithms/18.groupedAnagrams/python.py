# group anagrams
# get the sorted word for each item in the list
# compare the sorted word with the dict, if present add, else create new key and add

def get_anagrams(list_of_words):
    result = {}
    for word in list_of_words:
        x = "".join(sorted(word))
        if x in result:
            result[x].append(word)
        else:
            result[x] = [word]
    for k, v in result.items():
        print(k, v)

    return result


print(get_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
