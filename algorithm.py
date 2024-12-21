import numpy as np
import math

# Given n points, we want to create a function as a sum of e^ikt to pass through all n points

# Points will be denoted as an ordered pair, with its real part and imaginary part
points=[[0,4],[2,4],[3,5]]

aCoefficients=[]
for i in range(len(points)):
    temp=[]
    for j in range(len(points)):
        temp.append(math.cos(i*j))
    aCoefficients.append(temp)
aCoefficients=np.array(aCoefficients)
asolutions=np.array([point[0] for point in points])
a=np.linalg.solve(aCoefficients, asolutions)


bCoefficients=[]
for i in range(len(points)):
    temp=[1]
    for j in range(1,len(points)):
        temp.append(math.sin(i*j))
    bCoefficients.append(temp)
bCoefficients=np.array(bCoefficients)
bsolutions=np.array([point[1] for point in points])
b=np.linalg.solve(bCoefficients, bsolutions)


print(a)
print(b)

coefficients=[a[0],b[0]]
for i in range(1,len(points)):
    positive=(a[i]+b[i])/2
    negative=(a[i]-b[i])/2

    coefficients.append(positive)
    coefficients.append(negative)

print(coefficients)

# The output of coefficients is organized as follows:
# The first value is the real constant, the second value is the imaginary constant.
# Afterwards, the number at the 2k th index is the coefficient for e^ikt, and the value at the 2k+1 th index is the coefficient for e^-ikt
