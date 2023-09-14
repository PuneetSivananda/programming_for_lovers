# hashmap = {}
# for item in valuesA:
#     chck if (item[vakue] present in haspmap)
#     if no create a list with key as value, and append the value to its list
#     next item check if exists append or create new


valuesA = {'Ram': 'Pen', 'Shyam': 'copy',
           'Karim': 'Tab', 'Abhishek': 'Pen', 'Ajai': 'copy'}


def create_hashmap_values(values):
    hashmap = {}

    for k, v in valuesA.items():
        if v not in hashmap.keys():
            hashmap[v] = [k]
        else:
            hashmap[v].append(k)
    return hashmap


print(create_hashmap_values(valuesA))

"""
def get_if_crcular(item, substr):
    world = item + item
    while len(world) > 0:
        check = world[0:len(substr)]
        if (check - - substr):

    return item


input_1 = input()
substr = input()
print(get_if_crcular(input_1, substr))
"""


lista = [[10, 20, 30], [20, 30, 40], [34, 45, 67], 40]
# use extend instead of append


def recurs_items(lista):
    return_array = []
    for item in lista:
        if (type(item) == int):
            return_array.append(item)
        else:
            return_array.extend(item)
    return return_array


print(recurs_items(lista))
