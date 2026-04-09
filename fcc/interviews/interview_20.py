# Write a Python function to generate an N x N matrix filled with numbers from 1 to N² in a clockwise spiral pattern

# def circular_patter(len_items, n):
def spiral_matrix_step(n, k):
    matrix = [[0]*n for _ in range(n)]

    top, bottom = 0, n - 1
    left, right = 0, n - 1

    num = 1

    while top <= bottom and left <= right:
        # top row
        for i in range(left, right+1):
            matrix[top][i] = num
            num += k
        top += 1

        # right column
        for i in range(top, bottom+1):
            matrix[i][right] = num
            num += k
        right -= 1

        # bottom row
        if top <= bottom:
            for i in range(right, left-1, -1):
                matrix[bottom][i] = num
                num += k
            bottom -= 1

        # left column
        if left <= right:
            for i in range(bottom, top-1, -1):
                matrix[i][left] = num
                num += k
            left += 1

    return matrix

3 user types
sites
siteA = permissionSet


permission
can create = Site A
can read
can wriret

read siteA
viewe sitB,C
admin siteD


roles
admin = all permissikon sets
editor = view, edit
view = view

superadmin


jwt
=cognito
-man

sso

applicaiont verifi
google authentic 

user -> app -> google -> certi
google -> approve -> /logub -> logic -> user token - ui token -> landing page
                     app > forogpasawd page
                     


get client details

service fine grainde access serice
 -create client
    - seperate db
    - stored here
    
/client_id/doc1
file is added add a messiag in q
- kafaka 
- queue - worker process the job - getch from db update sns to 

/client1/doc1.txt

userA - admin - loggedin
userA - Viewer
- wss: role - viewer - appliciotn ad,om 
- make logout force login 





abc.com




