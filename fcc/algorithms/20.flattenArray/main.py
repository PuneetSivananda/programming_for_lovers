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


def main():
    for i in arr:
        print(i)


if __name__ == "__main__":
    main()
