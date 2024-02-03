import pandas as pd
import matplotlib.pyplot as plt
comments = """
Given A population having

Blood group | Percentile
O           | 37% 
A           | 23%
B           | 32%
AB          | 8%

Calculate what is the probability that a randomly chosen person 
can donate blood to a person of blood group B

"""

df = pd.DataFrame({
    'Blood Group':['O', 'A','B', 'AB'],
    'Probability Distribution':[0.37, 0.23, 0.32, 0.08],
                   })
df.plot(kind="bar", x="Blood Group", y="Probability Distribution", rot=0)
plt.show()
print(df[df["Blood Group"] != "A"]["Probability Distribution"].sum())
