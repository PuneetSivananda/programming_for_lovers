import pandas as pd

'''
Calculate variance
var(X) = E([X-E(X)]^2)
or 
var(X) = E(X^2) - E(X)^2
'''

df = pd.DataFrame({
    'Week': [1, 2, 3, 4, 5, 6, 7],
    'NumPatients': [1, 2, 3, 1, 4, 4, 1],
})

variance = sum([x for x in df['NumPatients']])/len(df['NumPatients'])
print(f"Variance: {variance:.6f}")
df['DevMean'] = df['NumPatients'] - variance
df['DevMeanSq'] = df['DevMean']**2
print(df)
print(f"Sum: {sum(df['DevMeanSq'])}")
print(f"Variance | Avg sq of deviation: {sum(df['DevMeanSq'])/len(df)}")

"""
variance
s2 = 1/n-1 summation of (xi - xi2)

Read: 
    Measurement of joint variability
    eg: expression of two genes, what is the variability
    
"""
