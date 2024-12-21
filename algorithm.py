import numpy as np
import math

# Given n points, we want to create a function as a sum of e^ikt to pass through all n points

# Points will be denoted as an ordered pair, with its real part and imaginary part
points=[(0,4),(2,4),(3,5)]
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
    temp=[]
    for j in range(len(points)):
        temp.append(math.sin(i*j))
    bCoefficients.append(temp)
bCoefficients=np.array(bCoefficients)
bsolutions=np.array([point[1] for point in points])
b=np.linalg.solve(bCoefficients, bsolutions)


print(a)
print(b)