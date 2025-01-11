# Python code to find the co-ordinates of 
# the contours detected in an image. 
import numpy as np 
import cv2 

# Reading image 
font = cv2.FONT_HERSHEY_COMPLEX 
img2 = cv2.imread('./Images/fourier.png', cv2.IMREAD_COLOR) 

# Reading same image in another 
# variable and converting to gray scale. 
img = cv2.imread('./Images/fourier.png', cv2.IMREAD_GRAYSCALE) 
cv2.imshow('image', img)

# Converting image to a binary image 
# ( black and white only image). 
_, threshold = cv2.threshold(img, 10, 255, cv2.THRESH_BINARY) 

# Detecting contours in image. 
contours, _= cv2.findContours(threshold, cv2.RETR_TREE, 
                            cv2.CHAIN_APPROX_SIMPLE) 

def add_points(coords, distance=100): 
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

    a.append(arr)

print(a)





# Showing the final image. 
cv2.imshow('image2', img2) 

# Exiting the window if 'q' is pressed on the keyboard. 
if cv2.waitKey(0) & 0xFF == ord('q'): 
    cv2.destroyAllWindows() 
