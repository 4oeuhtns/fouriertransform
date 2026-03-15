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
        x0, y0 = coords[i]
        x1, y1 = coords[i + 1]
        dx = x1 - x0
        dy = y1 - y0
        dist = int(math.hypot(dx, dy))
        num_points = int(dist // distance) 
        step_x = dx / (num_points + 1) 
        step_y = dy / (num_points + 1) 
        new_coords.append(coords[i]) 
        for j in range(1, num_points + 1): 
            new_coords.append([int(x0 + j * step_x), int(y0 + j * step_y)]) 
    new_coords.append(coords[-1]) 

    if len(new_coords) > 1: 
        firstPoint = new_coords[0] 
        lastPoint = new_coords[-1] 
        numIntermediatePoints = 4
        for i in range(numIntermediatePoints, 0, -1): 
            t = i / (numIntermediatePoints + 1) 
            newPoint = [int((1 - t) * firstPoint[0] + t * lastPoint[0]), int((1 - t) * firstPoint[1] + t * lastPoint[1])] 
            new_coords.append(newPoint) # Output the modified new_coords print(new_coords)

    return new_coords

a=[]

# Going through every contours found in the image. 
for cnt in contours : 
    arr=[]
    approx = cv2.approxPolyDP(cnt, 0.009 * cv2.arcLength(cnt, True), True) 

    # draws boundary of contours. 
    cv2.drawContours(img2, [approx], 0, (0, 0, 255), 5) 

    # Extract co-ordinates of the vertices. 
    pts = approx.reshape(-1, 2)

    for i, (x, y) in enumerate(pts): 
        x_val, y_val = int(x), int(y)

        # String containing the co-ordinates. 
        string = f"{x_val} {y_val}"
        arr.append([x_val - 500, -y_val + 500])

        if i == 0: 
            # text on topmost co-ordinate. 
            cv2.putText(img2, "Arrow tip", (x_val, y_val), 
                            font, 0.5, (255, 0, 0)) 
        else: 
            # text on remaining co-ordinates. 
            cv2.putText(img2, string, (x_val, y_val), 
                    font, 0.5, (0, 255, 0)) 

    a.append(add_points(arr))


f = open("points.txt", "w")
f.write(str(a))
f.close()



# Exiting the window if 'q' is pressed on the keyboard. 
if cv2.waitKey(0) & 0xFF == ord('q'): 
    cv2.destroyAllWindows() 
