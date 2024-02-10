import pandas as pd

'''
Calculate variance
var(X) = E([X-E(X)]^2)
'''

df = pd.DataFrame({
    'Week': [1, 2, 3, 4, 5, 6, 7],
    'NumPatients': [1, 2, 3, 1, 4, 4, 1],
})
