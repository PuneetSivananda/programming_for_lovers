# flatten the array and  sort desc by age
# ['A','B','F','C', 'D', 'E']

arr = [
    {
        "name": "A",
        "age": 60,
        "child": [
            {
                "name": "B",
                "age": 40,
            },
            {
                "name": "C",
                "age": 30,
                "child": [
                    {
                        "name": "D",
                        "age": 14,
                    },
                    {
                        "name": "E",
                        "age": 5,
                    },
                ],
            },
        ],
    },
    {
        "name": "F",
        "age": 35,
    },
]

temp_list = []


def process_child(item):
    temp_list.append({"name": item["name"], "age": item["age"]})
    if ("child" in item.keys()):
        for child in item["child"]:
            process_child(child)
    return temp_list


def main():
    result = []
    for i in arr:
        if ("child" in i.keys()):
            result.extend(process_child(i))
        else:
            result.append({"name": i["name"], "age": i["age"]})
    print(result)


if __name__ == "__main__":
    main()
