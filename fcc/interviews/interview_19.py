
# Online Python - IDE, Editor, Compiler, Interpreter

# Finds the "path" of the target value.
Input = {
    "a": "A",
    "b": "B",
    "c": {
        "d": [
            {
                "e": "E"
            }
        ]
    }
}
target ="E"

# Output = c.d.0.e


def find_target(json_inp, target):
    store_keys = ""
    for k,v in json_inp.items():
        if not isinstance(v, str) and not isinstance(v, list) and v != target:
            store_keys += (f"{v}.")
            find_target(v, target)
        else:
            store_keys += (f"{k}.")
    print(store_keys)
            
            
# find_target(Input, target)

list1 = [1, [2, [3, 4], 5]]
# [1, 2, 3, 4, 5]
output = []
for item in list1:
    print()
    if not isinstance(item, list):
        output.append(item)
    else:
        output.extend(item)
    # if not isinstance(item, list):
    #     output.append(item)
    # else:
    #     for var in item:
    #         if isinstance(var, list):
    #             for v in var:
    #                 output.append(v)
    #             output.append(var)
        
print(output)

        


    