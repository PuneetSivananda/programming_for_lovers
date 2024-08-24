#Given an array where each element represents the price of a stock on a given day, 
#find the maximum profit that can be achieved by buying and selling the stock. You are allowed to buy and sell only once (i.e., buy one stock and sell it later).
#Example:

prices = [7, 1, 5, 3, 6, 4]

max_profit = 0
min_price = float("inf")

for item in prices:
    if(item < min_price):
        min_price = item

    diff = item - min_price
    if(diff > max_profit):
        max_profit = diff 
    
    
print(max_profit)
    

# Given a list of orders and a list of applicable offers, 
# write a function that calculates the best possible price for each order by applying the most favorable offer or combination of offers.
 
# Example usage:
# order = {
# "product_id": 101,
# "quantity": 2,
# "unit_price": 100
# }
 
# offers = [
#     {"type": "fixed", "value": 20},       # $20 off
#     {"type": "percentage", "value": 15},  # 15% off
#     {"type": "bogo"},                     # Buy one, get one free
#     {"type": "conditional", "value": 50, "condition": {"min_spend": 200}}  # $50 off if you spend more than $200
# ]

# magine you have two lists of integers representing two non-negative integers. Write a function that takes these two lists as input and returns a new list representing the sum of the two integers. Each element in the input lists represents a digit of the corresponding integer, with the first element representing the most significant digit.
 
# Here's an example to consider: Given the lists [7, 8, 3, 1] and [4, 5, 6], which represent the integers 7831 and 456 respectively, what would be the result of adding these two integers together? Explain your approach and provide the code implementation without using any inbuilt methods.

# inp1 = [1, 3, 8, 7] 
# inp2 = [6, 5, 4]

# def get_number(input_number):
#     range_start = 1
#     count = len(input_number)
#     for i in range(0, len(input_number)-1):
#         input_number
        
#     return input_number

# print(get_number(inp1))



# @('/path/value/{params}')
# return 
# yeild 






"""
    BOOKS(id, isdn, author, tilte, description)

AUTHORS(id, boodid, author)

PUBLISHERS(id, isdn, auther_id, pushder)

ORDER(orderid, bookid, shiipig details, shippingid )
CART()

CUSTOMERS(id, name, age, )







select u.userid, 

Assuming the following sample data:
 
users table:
user_id	name
1	John Doe
2	Jane Smith
3	Sam Johnson
 
orders table:
order_id	user_id	amount
1	1	200
2	1	850
3	2	1500
4	3	300
5	1	100
6	3	900
 
Expected Output
Given the data, the output will be:
 
user_id	name	totalamt
1	John Doe	1150
2	Jane Smith	1500
3	Sam Johnson	1200
 
This output matches your criteria, as all have total purchase amounts greater than 1000.

"""