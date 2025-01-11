# Python code to find the co-ordinates of 
# the contours detected in an image. 
import numpy as np 
import cv2 
import math

# Reading image 
font = cv2.FONT_HERSHEY_COMPLEX 
img2 = cv2.imread('fourier.png', cv2.IMREAD_COLOR) 

# Reading same image in another 
# variable and converting to gray scale. 
img = cv2.imread('fourier.png', cv2.IMREAD_GRAYSCALE) 

# Converting image to a binary image 
# ( black and white only image). 
_, threshold = cv2.threshold(img, 10, 255, cv2.THRESH_BINARY) 

# Detecting contours in image. 
contours, _= cv2.findContours(threshold, cv2.RETR_TREE, 
                            cv2.CHAIN_APPROX_SIMPLE) 

def add_points(coords, distance=10): 
    new_coords = [] 
    for i in range(len(coords) - 1): 
        start = np.array(coords[i]) 
        end = np.array(coords[i + 1]) 
        diff = end - start 
        dist = int(np.linalg.norm(diff))
        num_points = int(dist // distance) 
        step = diff / (num_points + 1) 
        new_coords.append(coords[i]) 
        for j in range(1, num_points + 1): 
            new_point = start + j * step 
            new_coords.append(list(map(int,new_point))) 
    new_coords.append(coords[-1]) 

    if len(new_coords) > 1: 
        firstPoint = new_coords[0] 
        lastPoint = new_coords[-1] 
        distance = math.sqrt((lastPoint[0] - firstPoint[0]) ** 2 + (lastPoint[1] - firstPoint[1]) ** 2) 
        numIntermediatePoints = 4
        for i in range(numIntermediatePoints, 0, -1): 
            t = i / (numIntermediatePoints + 1) 
            intermediatePoint = [ int((1 - t) * firstPoint[0] + t * lastPoint[0]), int((1 - t) * firstPoint[1] + t * lastPoint[1]) ] 
            newPoint = [intermediatePoint[0], (intermediatePoint[1])] 
            new_coords.append(newPoint) # Output the modified new_coords print(new_coords)

    return new_coords

a=[]

# Going through every contours found in the image. 
for cnt in contours : 
    arr=[]
    approx = cv2.approxPolyDP(cnt, 0.009 * cv2.arcLength(cnt, True), True) 

    # draws boundary of contours. 
    cv2.drawContours(img2, [approx], 0, (0, 0, 255), 5) 

    # Used to flatted the array containing 
    # the co-ordinates of the vertices. 
    n = approx.ravel() 
    i = 0

    for j in n : 
        if(i % 2 == 0): 
            x = n[i] 
            y = n[i + 1] 

            # String containing the co-ordinates. 
            string = str(x) + " " + str(y) 
            arr.append([int(str(x))-500,-1*int(str(y))+500])

            if(i == 0): 
                # text on topmost co-ordinate. 
                cv2.putText(img2, "Arrow tip", (x, y), 
                                font, 0.5, (255, 0, 0)) 
            else: 
                # text on remaining co-ordinates. 
                cv2.putText(img2, string, (x, y), 
                        font, 0.5, (0, 255, 0)) 
        i = i + 1

    a.append(add_points(arr))


f = open("points.txt", "w")
f.write(str(a))
f.close()



# Exiting the window if 'q' is pressed on the keyboard. 
if cv2.waitKey(0) & 0xFF == ord('q'): 
    cv2.destroyAllWindows() 
