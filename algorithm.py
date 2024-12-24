import numpy as np
import math

# Given n points, we want to create a function as a sum of e^ikt to pass through all n points

# Points will be denoted as an ordered pair, with its real part and imaginary part
points=[[0,0],[2,0],[1.5,1],[1,2],[0.5,1]]

# aCoefficients=[]
# for i in range(len(points)):
#     temp=[]
#     for j in range(len(points)):
#         temp.append(math.cos(i*j*math.pi/(2*len(points))))
#     aCoefficients.append(temp)
# aCoefficients=np.array(aCoefficients)
# asolutions=np.array([point[0] for point in points])
# a=np.linalg.solve(aCoefficients, asolutions)


# bCoefficients=[]
# for i in range(len(points)):
#     temp=[1]
#     for j in range(1,len(points)):
#         temp.append(math.sin(i*j*math.pi/(2*len(points))))
#     bCoefficients.append(temp)
# bCoefficients=np.array(bCoefficients)
# bsolutions=np.array([point[1] for point in points])
# b=np.linalg.solve(bCoefficients, bsolutions)


# print(a)
# print(b)

# coefficients=[a[0],b[0]]
# for i in range(1,len(points)):
#     positive=(a[i]+b[i])/2
#     negative=(a[i]-b[i])/2

#     coefficients.append(positive)
#     coefficients.append(negative)

# print(coefficients)

# The output of coefficients is organized as follows:
# The first value is the real constant, the second value is the imaginary constant.
# Afterwards, the number at the 2k th index is the coefficient for e^ikt, and the value at the 2k+1 th index is the coefficient for e^-ikt


# Desmos partial input
#
# The commented code will create an input for desmos to plot the curve.
# The exponents don't seem to work though :skull:
#
# print(a[0],"+ i",b[0],end="")
# for i in range(1,len(points)):
#     positive=(a[i]+b[i])/2
#     negative=(a[i]-b[i])/2

#     print("+",positive,"e^(i",i,"t) +",negative,"e^(-i",i,"t)",end="")


# Algorithm 2

coefficients=[]

for i in range(len(points)):
    temp=[]
    if i%2==1:
        for k in range(-1*(len(points)-1)//2,(len(points)-1)//2+1):
            temp.append(math.cos(2*math.pi*i*k/len(points))+math.sin(2*math.pi*i*k/len(points))*1j)
        coefficients.append(temp)
    else:
        for k in range(-1*(len(points))//2+1,(len(points))//2+1):
            temp.append(math.cos(2*math.pi*i*k/len(points))+math.sin(2*math.pi*i*k/len(points))*1j)
        coefficients.append(temp)



complexPoints=[]
for i in range(len(points)):
    point=points[i][0]+points[i][1]*1j
    complexPoints.append(point)

coefficients=np.array(coefficients)
complexPoints=np.array(complexPoints)
solutions=np.linalg.solve(coefficients, complexPoints)

print(solutions.tolist())


