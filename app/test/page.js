"use client";
import CombinedEpicycle from "@/components/combinedEpicycle";
import useWindowDimensions from "@/components/windowDimensions";

function Slider() {
  // let pointstest = [
  //   [
  //     [566, -83],
  //     [557, -81],
  //     [548, -80],
  //     [540, -79],
  //     [533, -82],
  //     [527, -85],
  //     [521, -88],
  //     [517, -96],
  //     [513, -104],
  //     [514, -111],
  //     [515, -119],
  //     [523, -122],
  //     [532, -126],
  //     [541, -130],
  //     [550, -134],
  //     [552, -139],
  //     [555, -144],
  //     [548, -151],
  //     [542, -159],
  //     [534, -159],
  //     [527, -159],
  //     [520, -160],
  //     [515, -157],
  //     [511, -155],
  //     [515, -150],
  //     [520, -145],
  //     [518, -136],
  //     [512, -135],
  //     [506, -134],
  //     [501, -139],
  //     [497, -145],
  //     [500, -153],
  //     [504, -162],
  //     [513, -164],
  //     [522, -166],
  //     [532, -168],
  //     [539, -164],
  //     [547, -161],
  //     [554, -157],
  //     [562, -154],
  //     [565, -146],
  //     [569, -139],
  //     [567, -131],
  //     [566, -123],
  //     [557, -119],
  //     [548, -115],
  //     [539, -111],
  //     [531, -108],
  //     [527, -100],
  //     [530, -94],
  //     [534, -89],
  //     [543, -87],
  //     [552, -86],
  //     [560, -91],
  //     [557, -99],
  //     [555, -107],
  //     [560, -108],
  //     [565, -109],
  //     [569, -104],
  //     [573, -100],
  //   ],
  //   [
  //     [317, -105],
  //     [321, -108],
  //     [326, -111],
  //     [331, -104],
  //     [337, -97],
  //     [343, -90],
  //     [340, -99],
  //     [338, -109],
  //     [336, -118],
  //     [333, -128],
  //     [331, -137],
  //     [329, -147],
  //     [327, -157],
  //     [331, -162],
  //     [335, -168],
  //     [338, -159],
  //     [342, -151],
  //     [345, -143],
  //     [349, -135],
  //     [352, -126],
  //     [356, -118],
  //     [359, -110],
  //     [363, -102],
  //     [370, -96],
  //     [377, -91],
  //     [384, -86],
  //     [390, -89],
  //     [397, -92],
  //     [395, -101],
  //     [394, -110],
  //     [393, -120],
  //     [392, -129],
  //     [390, -138],
  //     [389, -148],
  //     [388, -157],
  //     [387, -167],
  //     [394, -164],
  //     [402, -162],
  //     [404, -152],
  //     [407, -143],
  //     [409, -133],
  //     [412, -124],
  //     [414, -114],
  //     [417, -105],
  //     [423, -99],
  //     [430, -93],
  //     [437, -87],
  //     [445, -90],
  //     [453, -93],
  //     [451, -102],
  //     [449, -112],
  //     [448, -122],
  //     [446, -131],
  //     [445, -141],
  //     [443, -151],
  //     [442, -161],
  //     [450, -162],
  //     [458, -164],
  //     [467, -166],
  //     [472, -159],
  //     [477, -153],
  //     [482, -147],
  //     [487, -141],
  //     [482, -138],
  //     [477, -136],
  //     [472, -141],
  //     [467, -147],
  //     [462, -153],
  //     [457, -159],
  //     [459, -150],
  //     [462, -142],
  //     [464, -133],
  //     [467, -125],
  //     [469, -116],
  //     [472, -108],
  //     [468, -101],
  //     [465, -94],
  //     [461, -87],
  //     [458, -80],
  //     [449, -82],
  //     [441, -85],
  //     [432, -87],
  //     [424, -90],
  //     [416, -93],
  //     [410, -88],
  //     [404, -83],
  //     [398, -79],
  //     [389, -82],
  //     [380, -85],
  //     [371, -88],
  //     [363, -91],
  //     [354, -87],
  //     [346, -83],
  //     [338, -79],
  //   ],
  //   [
  //     [306, -83],
  //     [298, -81],
  //     [290, -80],
  //     [283, -79],
  //     [277, -82],
  //     [271, -85],
  //     [265, -89],
  //     [257, -85],
  //     [249, -82],
  //     [242, -79],
  //     [235, -84],
  //     [228, -89],
  //     [225, -96],
  //     [223, -103],
  //     [221, -110],
  //     [229, -112],
  //     [232, -104],
  //     [235, -97],
  //     [238, -90],
  //     [247, -88],
  //     [245, -97],
  //     [243, -107],
  //     [242, -117],
  //     [240, -127],
  //     [238, -136],
  //     [237, -146],
  //     [235, -156],
  //     [234, -166],
  //     [239, -166],
  //     [245, -167],
  //     [251, -161],
  //     [253, -152],
  //     [256, -144],
  //     [258, -135],
  //     [261, -127],
  //     [264, -119],
  //     [266, -110],
  //     [269, -102],
  //     [272, -94],
  //     [279, -91],
  //     [287, -89],
  //     [295, -87],
  //     [292, -96],
  //     [290, -105],
  //     [297, -107],
  //     [304, -110],
  //     [308, -104],
  //     [313, -99],
  //   ],
  //   [
  //     [198, -87],
  //     [189, -83],
  //     [180, -79],
  //     [171, -79],
  //     [162, -79],
  //     [153, -83],
  //     [144, -87],
  //     [135, -91],
  //     [130, -98],
  //     [125, -106],
  //     [120, -113],
  //     [116, -121],
  //     [115, -128],
  //     [114, -136],
  //     [116, -145],
  //     [119, -154],
  //     [125, -159],
  //     [131, -164],
  //     [139, -166],
  //     [148, -168],
  //     [157, -167],
  //     [166, -166],
  //     [172, -162],
  //     [179, -159],
  //     [186, -156],
  //     [192, -148],
  //     [199, -141],
  //     [201, -133],
  //     [204, -126],
  //     [207, -119],
  //     [206, -109],
  //     [206, -100],
  //   ],
  //   [
  //     [177, -87],
  //     [181, -92],
  //     [186, -97],
  //     [186, -103],
  //     [186, -110],
  //     [183, -119],
  //     [181, -128],
  //     [179, -137],
  //     [175, -144],
  //     [171, -151],
  //     [167, -154],
  //     [163, -158],
  //     [154, -161],
  //     [145, -160],
  //     [138, -155],
  //     [136, -147],
  //     [135, -140],
  //     [137, -130],
  //     [140, -121],
  //     [143, -111],
  //     [146, -102],
  //     [153, -95],
  //     [160, -88],
  //   ],
  //   [
  //     [9, -82],
  //     [1, -81],
  //     [-7, -80],
  //     [-15, -79],
  //     [-22, -82],
  //     [-29, -86],
  //     [-36, -90],
  //     [-37, -99],
  //     [-38, -109],
  //     [-40, -119],
  //     [-31, -123],
  //     [-22, -127],
  //     [-13, -131],
  //     [-4, -135],
  //     [-2, -140],
  //     [-1, -146],
  //     [-6, -152],
  //     [-11, -158],
  //     [-19, -158],
  //     [-27, -159],
  //     [-36, -160],
  //     [-44, -155],
  //     [-40, -146],
  //     [-36, -138],
  //     [-42, -136],
  //     [-49, -134],
  //     [-53, -139],
  //     [-58, -144],
  //     [-55, -150],
  //     [-52, -156],
  //     [-50, -163],
  //     [-41, -164],
  //     [-32, -166],
  //     [-23, -168],
  //     [-15, -164],
  //     [-8, -161],
  //     [-1, -158],
  //     [6, -155],
  //     [7, -147],
  //     [9, -140],
  //     [10, -132],
  //     [12, -125],
  //     [3, -121],
  //     [-5, -117],
  //     [-14, -113],
  //     [-23, -109],
  //     [-25, -103],
  //     [-28, -98],
  //     [-24, -93],
  //     [-20, -88],
  //     [-12, -88],
  //     [-4, -89],
  //     [4, -90],
  //     [1, -98],
  //     [-1, -106],
  //     [4, -107],
  //     [9, -109],
  //     [13, -104],
  //     [18, -99],
  //   ],
  //   [
  //     [-174, -86],
  //     [-176, -94],
  //     [-178, -103],
  //     [-181, -112],
  //     [-175, -106],
  //     [-169, -100],
  //     [-163, -94],
  //     [-157, -89],
  //     [-158, -98],
  //     [-160, -108],
  //     [-161, -117],
  //     [-163, -127],
  //     [-165, -137],
  //     [-166, -146],
  //     [-168, -156],
  //     [-170, -166],
  //     [-162, -164],
  //     [-154, -163],
  //     [-151, -154],
  //     [-149, -145],
  //     [-146, -137],
  //     [-144, -128],
  //     [-141, -120],
  //     [-139, -111],
  //     [-137, -103],
  //     [-129, -97],
  //     [-122, -91],
  //     [-115, -86],
  //     [-108, -90],
  //     [-102, -95],
  //     [-103, -104],
  //     [-105, -113],
  //     [-107, -122],
  //     [-109, -131],
  //     [-111, -140],
  //     [-113, -149],
  //     [-115, -159],
  //     [-108, -162],
  //     [-102, -165],
  //     [-96, -168],
  //     [-88, -163],
  //     [-81, -158],
  //     [-74, -153],
  //     [-71, -144],
  //     [-68, -136],
  //     [-77, -135],
  //     [-81, -144],
  //     [-85, -153],
  //     [-92, -155],
  //     [-99, -158],
  //     [-96, -149],
  //     [-93, -140],
  //     [-91, -131],
  //     [-88, -122],
  //     [-85, -113],
  //     [-83, -105],
  //     [-85, -98],
  //     [-87, -91],
  //     [-90, -84],
  //     [-98, -82],
  //     [-106, -80],
  //     [-115, -79],
  //     [-122, -83],
  //     [-130, -87],
  //     [-138, -92],
  //     [-144, -87],
  //     [-150, -83],
  //     [-156, -79],
  //   ],
  //   [
  //     [-262, -85],
  //     [-268, -92],
  //     [-274, -100],
  //     [-280, -108],
  //     [-287, -116],
  //     [-288, -125],
  //     [-289, -135],
  //     [-290, -145],
  //     [-288, -150],
  //     [-286, -155],
  //     [-278, -159],
  //     [-270, -163],
  //     [-262, -168],
  //     [-253, -164],
  //     [-244, -161],
  //     [-235, -158],
  //     [-228, -162],
  //     [-222, -167],
  //     [-214, -166],
  //     [-206, -165],
  //     [-201, -157],
  //     [-196, -149],
  //     [-192, -141],
  //     [-193, -135],
  //     [-200, -135],
  //     [-203, -142],
  //     [-206, -149],
  //     [-209, -157],
  //     [-218, -157],
  //     [-216, -148],
  //     [-214, -139],
  //     [-212, -130],
  //     [-211, -122],
  //     [-209, -113],
  //     [-207, -104],
  //     [-205, -95],
  //     [-204, -87],
  //     [-211, -85],
  //     [-218, -83],
  //     [-225, -81],
  //     [-233, -79],
  //   ],
  //   [
  //     [-235, -86],
  //     [-228, -91],
  //     [-225, -99],
  //     [-227, -108],
  //     [-229, -117],
  //     [-232, -127],
  //     [-234, -136],
  //     [-237, -146],
  //     [-242, -151],
  //     [-247, -157],
  //     [-253, -160],
  //     [-258, -160],
  //     [-263, -160],
  //     [-269, -154],
  //     [-269, -148],
  //     [-270, -143],
  //     [-268, -134],
  //     [-266, -126],
  //     [-264, -118],
  //     [-262, -110],
  //     [-258, -103],
  //     [-254, -97],
  //     [-251, -91],
  //     [-246, -88],
  //     [-242, -86],
  //   ],
  //   [
  //     [-292, -85],
  //     [-300, -83],
  //     [-308, -81],
  //     [-317, -79],
  //     [-323, -82],
  //     [-329, -85],
  //     [-336, -89],
  //     [-343, -85],
  //     [-351, -82],
  //     [-359, -79],
  //     [-365, -83],
  //     [-371, -87],
  //     [-373, -95],
  //     [-375, -103],
  //     [-377, -112],
  //     [-369, -110],
  //     [-366, -102],
  //     [-363, -94],
  //     [-360, -87],
  //     [-353, -90],
  //     [-355, -99],
  //     [-357, -109],
  //     [-359, -118],
  //     [-362, -128],
  //     [-364, -137],
  //     [-366, -147],
  //     [-369, -157],
  //     [-366, -166],
  //     [-358, -164],
  //     [-350, -162],
  //     [-347, -152],
  //     [-344, -143],
  //     [-341, -134],
  //     [-339, -124],
  //     [-336, -115],
  //     [-333, -106],
  //     [-331, -97],
  //     [-326, -92],
  //     [-321, -88],
  //     [-313, -87],
  //     [-306, -87],
  //     [-308, -96],
  //     [-310, -106],
  //     [-303, -108],
  //     [-297, -110],
  //     [-292, -105],
  //     [-288, -100],
  //   ],
  //   [
  //     [-479, -38],
  //     [-481, -47],
  //     [-484, -56],
  //     [-486, -65],
  //     [-489, -74],
  //     [-492, -83],
  //     [-486, -76],
  //     [-481, -69],
  //     [-475, -63],
  //     [-470, -56],
  //     [-465, -50],
  //     [-455, -50],
  //     [-446, -50],
  //     [-437, -50],
  //     [-439, -59],
  //     [-441, -68],
  //     [-444, -78],
  //     [-446, -87],
  //     [-448, -96],
  //     [-451, -106],
  //     [-453, -115],
  //     [-455, -124],
  //     [-458, -134],
  //     [-460, -143],
  //     [-463, -153],
  //     [-470, -155],
  //     [-478, -158],
  //     [-486, -161],
  //     [-494, -164],
  //     [-484, -164],
  //     [-475, -164],
  //     [-466, -164],
  //     [-457, -164],
  //     [-448, -164],
  //     [-439, -164],
  //     [-430, -164],
  //     [-421, -164],
  //     [-412, -165],
  //     [-412, -157],
  //     [-420, -155],
  //     [-428, -153],
  //     [-437, -152],
  //     [-434, -142],
  //     [-432, -133],
  //     [-429, -123],
  //     [-427, -114],
  //     [-425, -104],
  //     [-422, -95],
  //     [-420, -85],
  //     [-418, -76],
  //     [-415, -66],
  //     [-413, -57],
  //     [-411, -48],
  //     [-402, -48],
  //     [-393, -48],
  //     [-384, -49],
  //     [-383, -57],
  //     [-382, -65],
  //     [-381, -73],
  //     [-380, -81],
  //     [-372, -83],
  //     [-370, -74],
  //     [-368, -65],
  //     [-367, -56],
  //     [-365, -47],
  //     [-364, -39],
  //   ],
  //   [
  //     [112, -34],
  //     [104, -34],
  //     [96, -35],
  //     [88, -36],
  //     [81, -37],
  //     [77, -45],
  //     [74, -54],
  //     [71, -62],
  //     [68, -71],
  //     [65, -80],
  //     [57, -81],
  //     [49, -82],
  //     [41, -84],
  //     [48, -87],
  //     [55, -90],
  //     [63, -93],
  //     [61, -101],
  //     [59, -110],
  //     [57, -119],
  //     [55, -128],
  //     [53, -137],
  //     [52, -146],
  //     [50, -155],
  //     [48, -164],
  //     [46, -173],
  //     [44, -182],
  //     [43, -191],
  //     [37, -194],
  //     [31, -197],
  //     [34, -190],
  //     [38, -183],
  //     [31, -179],
  //     [24, -175],
  //     [19, -179],
  //     [15, -184],
  //     [18, -192],
  //     [21, -201],
  //     [27, -202],
  //     [34, -203],
  //     [41, -204],
  //     [47, -199],
  //     [53, -194],
  //     [60, -189],
  //     [62, -180],
  //     [64, -171],
  //     [66, -162],
  //     [68, -153],
  //     [70, -144],
  //     [72, -135],
  //     [74, -126],
  //     [76, -117],
  //     [78, -108],
  //     [80, -99],
  //     [83, -91],
  //     [92, -89],
  //     [101, -87],
  //     [111, -86],
  //     [102, -84],
  //     [93, -82],
  //     [85, -80],
  //     [86, -71],
  //     [88, -62],
  //     [90, -53],
  //     [92, -44],
  //     [97, -41],
  //     [103, -39],
  //     [100, -48],
  //     [98, -57],
  //     [105, -58],
  //     [113, -60],
  //     [116, -51],
  //     [120, -43],
  //   ],
  //   [
  //     [382, 78],
  //     [374, 79],
  //     [366, 80],
  //     [359, 82],
  //     [352, 78],
  //     [346, 75],
  //     [340, 72],
  //     [332, 75],
  //     [325, 78],
  //     [318, 82],
  //     [311, 77],
  //     [304, 72],
  //     [302, 64],
  //     [300, 56],
  //     [299, 49],
  //     [308, 52],
  //     [311, 59],
  //     [314, 67],
  //     [318, 75],
  //     [323, 72],
  //     [321, 62],
  //     [319, 52],
  //     [318, 43],
  //     [316, 33],
  //     [314, 23],
  //     [313, 14],
  //     [311, 4],
  //     [310, -5],
  //     [315, -5],
  //     [321, -6],
  //     [327, 0],
  //     [329, 8],
  //     [332, 16],
  //     [334, 25],
  //     [337, 33],
  //     [340, 41],
  //     [342, 50],
  //     [345, 58],
  //     [348, 67],
  //     [355, 69],
  //     [363, 71],
  //     [371, 74],
  //     [368, 65],
  //     [366, 56],
  //     [373, 53],
  //     [380, 51],
  //     [384, 57],
  //     [389, 63],
  //   ],
  //   [
  //     [273, 79],
  //     [265, 79],
  //     [258, 80],
  //     [250, 80],
  //     [243, 81],
  //     [235, 76],
  //     [228, 71],
  //     [220, 66],
  //     [213, 61],
  //     [209, 52],
  //     [205, 43],
  //     [202, 34],
  //     [202, 25],
  //     [203, 16],
  //     [207, 9],
  //     [211, 2],
  //     [218, 0],
  //     [226, -2],
  //     [233, -4],
  //     [241, -7],
  //     [249, -5],
  //     [258, -3],
  //     [267, -2],
  //     [274, 3],
  //     [282, 9],
  //     [281, 16],
  //     [275, 17],
  //     [268, 12],
  //     [261, 7],
  //     [255, 3],
  //     [245, 1],
  //     [236, 0],
  //     [229, 5],
  //     [223, 11],
  //     [224, 19],
  //     [225, 28],
  //     [226, 37],
  //     [234, 37],
  //     [242, 38],
  //     [250, 38],
  //     [258, 39],
  //     [264, 42],
  //     [271, 46],
  //     [278, 50],
  //     [280, 59],
  //     [282, 69],
  //   ],
  //   [
  //     [269, 69],
  //     [269, 63],
  //     [269, 58],
  //     [265, 54],
  //     [262, 50],
  //     [253, 46],
  //     [247, 45],
  //     [242, 44],
  //     [235, 44],
  //     [228, 45],
  //     [230, 52],
  //     [233, 59],
  //     [237, 65],
  //     [244, 71],
  //     [252, 75],
  //     [261, 75],
  //   ],
  //   [
  //     [153, 82],
  //     [145, 76],
  //     [137, 71],
  //     [134, 64],
  //     [131, 57],
  //     [129, 50],
  //     [138, 50],
  //     [142, 59],
  //     [146, 68],
  //     [150, 71],
  //     [154, 75],
  //     [159, 73],
  //     [156, 64],
  //     [153, 56],
  //     [150, 47],
  //     [147, 39],
  //     [144, 30],
  //     [141, 22],
  //     [139, 14],
  //     [140, 7],
  //     [142, 0],
  //     [150, -3],
  //     [159, -7],
  //     [165, -3],
  //     [171, 0],
  //     [178, 3],
  //     [181, 10],
  //     [184, 17],
  //     [187, 25],
  //     [179, 26],
  //     [176, 19],
  //     [173, 13],
  //     [170, 7],
  //     [164, 4],
  //     [158, 1],
  //     [160, 9],
  //     [162, 18],
  //     [165, 26],
  //     [167, 35],
  //     [169, 44],
  //     [172, 52],
  //     [174, 61],
  //     [177, 70],
  //     [173, 74],
  //     [170, 79],
  //   ],
  //   [
  //     [118, 78],
  //     [110, 79],
  //     [103, 80],
  //     [96, 82],
  //     [89, 78],
  //     [83, 75],
  //     [77, 72],
  //     [69, 75],
  //     [61, 78],
  //     [54, 82],
  //     [47, 77],
  //     [41, 73],
  //     [39, 65],
  //     [37, 57],
  //     [36, 49],
  //     [43, 50],
  //     [45, 57],
  //     [47, 64],
  //     [50, 71],
  //     [59, 73],
  //     [56, 63],
  //     [54, 53],
  //     [52, 43],
  //     [50, 34],
  //     [48, 24],
  //     [46, 14],
  //     [44, 5],
  //     [46, 0],
  //     [48, -6],
  //     [57, -6],
  //     [60, -2],
  //     [64, 2],
  //     [66, 11],
  //     [69, 20],
  //     [72, 29],
  //     [75, 39],
  //     [78, 48],
  //     [81, 57],
  //     [84, 67],
  //     [91, 69],
  //     [99, 71],
  //     [107, 74],
  //     [104, 65],
  //     [102, 57],
  //     [109, 54],
  //     [116, 51],
  //     [120, 56],
  //     [125, 62],
  //   ],
  //   [
  //     [-77, 70],
  //     [-80, 63],
  //     [-84, 56],
  //     [-77, 49],
  //     [-73, 56],
  //     [-69, 63],
  //     [-66, 70],
  //     [-60, 71],
  //     [-54, 73],
  //     [-56, 64],
  //     [-59, 55],
  //     [-61, 46],
  //     [-64, 37],
  //     [-66, 28],
  //     [-69, 20],
  //     [-66, 12],
  //     [-63, 5],
  //     [-60, -2],
  //     [-53, -3],
  //     [-46, -5],
  //     [-40, -7],
  //     [-32, -4],
  //     [-25, -1],
  //     [-18, 2],
  //     [-11, -1],
  //     [-4, -4],
  //     [2, -7],
  //     [10, -1],
  //     [18, 4],
  //     [20, 10],
  //     [22, 16],
  //     [25, 23],
  //     [16, 26],
  //     [10, 18],
  //     [4, 10],
  //     [-1, 2],
  //     [0, 11],
  //     [2, 21],
  //     [3, 30],
  //     [5, 40],
  //     [6, 49],
  //     [8, 59],
  //     [9, 68],
  //     [11, 78],
  //     [3, 77],
  //     [-4, 76],
  //     [-6, 67],
  //     [-8, 58],
  //     [-10, 49],
  //     [-13, 41],
  //     [-15, 32],
  //     [-17, 23],
  //     [-20, 15],
  //     [-27, 8],
  //     [-34, 1],
  //     [-42, 6],
  //     [-50, 12],
  //     [-48, 20],
  //     [-46, 29],
  //     [-44, 37],
  //     [-42, 46],
  //     [-40, 54],
  //     [-38, 63],
  //     [-37, 72],
  //     [-44, 75],
  //     [-52, 78],
  //     [-60, 82],
  //   ],
  //   [
  //     [-109, 75],
  //     [-115, 78],
  //     [-121, 81],
  //     [-128, 81],
  //     [-136, 81],
  //     [-144, 82],
  //     [-152, 78],
  //     [-160, 75],
  //     [-168, 72],
  //     [-173, 66],
  //     [-179, 61],
  //     [-182, 53],
  //     [-186, 46],
  //     [-190, 39],
  //     [-190, 32],
  //     [-190, 25],
  //     [-191, 18],
  //     [-188, 12],
  //     [-186, 6],
  //     [-178, 0],
  //     [-170, -5],
  //     [-161, -6],
  //     [-153, -7],
  //     [-145, -5],
  //     [-138, -3],
  //     [-131, -2],
  //     [-123, 3],
  //     [-116, 8],
  //     [-111, 14],
  //     [-107, 20],
  //     [-103, 27],
  //     [-101, 34],
  //     [-99, 41],
  //     [-98, 48],
  //     [-99, 55],
  //     [-100, 62],
  //   ],
  //   [
  //     [-131, 75],
  //     [-126, 72],
  //     [-122, 69],
  //     [-119, 62],
  //     [-120, 52],
  //     [-122, 43],
  //     [-124, 34],
  //     [-126, 25],
  //     [-131, 18],
  //     [-136, 11],
  //     [-141, 4],
  //     [-146, 2],
  //     [-151, 0],
  //     [-156, 0],
  //     [-161, 1],
  //     [-165, 6],
  //     [-170, 11],
  //     [-170, 18],
  //     [-170, 25],
  //     [-168, 32],
  //     [-166, 39],
  //     [-164, 46],
  //     [-162, 54],
  //     [-158, 59],
  //     [-154, 64],
  //     [-150, 70],
  //     [-145, 72],
  //     [-140, 75],
  //   ],
  //   [
  //     [-184, 124],
  //     [-193, 124],
  //     [-203, 124],
  //     [-212, 124],
  //     [-222, 124],
  //     [-231, 124],
  //     [-241, 124],
  //     [-250, 124],
  //     [-260, 124],
  //     [-269, 124],
  //     [-279, 124],
  //     [-289, 124],
  //     [-283, 119],
  //     [-277, 115],
  //     [-272, 111],
  //     [-274, 101],
  //     [-276, 92],
  //     [-279, 82],
  //     [-281, 73],
  //     [-283, 63],
  //     [-286, 54],
  //     [-288, 44],
  //     [-290, 35],
  //     [-293, 25],
  //     [-295, 16],
  //     [-298, 7],
  //     [-305, 3],
  //     [-312, 0],
  //     [-320, -3],
  //     [-311, -3],
  //     [-302, -3],
  //     [-293, -3],
  //     [-285, -3],
  //     [-276, -3],
  //     [-267, -3],
  //     [-258, -3],
  //     [-250, -4],
  //     [-250, 4],
  //     [-257, 4],
  //     [-265, 5],
  //     [-273, 6],
  //     [-270, 15],
  //     [-268, 24],
  //     [-265, 34],
  //     [-263, 43],
  //     [-261, 53],
  //     [-252, 54],
  //     [-243, 55],
  //     [-239, 48],
  //     [-235, 41],
  //     [-232, 34],
  //     [-229, 42],
  //     [-227, 50],
  //     [-225, 58],
  //     [-222, 66],
  //     [-220, 74],
  //     [-218, 83],
  //     [-226, 79],
  //     [-234, 75],
  //     [-242, 72],
  //     [-250, 68],
  //     [-258, 65],
  //     [-256, 73],
  //     [-254, 81],
  //     [-252, 89],
  //     [-250, 97],
  //     [-248, 105],
  //     [-246, 114],
  //     [-237, 113],
  //     [-229, 113],
  //     [-221, 113],
  //     [-213, 113],
  //     [-205, 113],
  //     [-201, 104],
  //     [-197, 96],
  //     [-193, 87],
  //     [-190, 79],
  //   ],
  //   [
  //     [178, 127],
  //     [171, 127],
  //     [167, 125],
  //     [164, 122],
  //     [162, 118],
  //     [162, 110],
  //     [166, 106],
  //     [169, 106],
  //     [170, 105],
  //     [176, 106],
  //     [183, 112],
  //     [184, 115],
  //     [184, 121],
  //     [183, 123],
  //   ],
  // ];

  let pointstest = [[[566, -83], [557, -81], [548, -80], [540, -79], [533, -82], [527, -85], [521, -88], [517, -96], [513, -104], [514, -111], [515, -119], [523, -122], [532, -126], [541, -130], [550, -134], [552, -139], [555, -144], [548, -151], [542, -159], [534, -159], [527, -159], [520, -160], [515, -157], [511, -155], [515, -150], [520, -145], [518, -136], [512, -135], [506, -134], [501, -139], [497, -145], [500, -153], [504, -162], [513, -164], [522, -166], [532, -168], [539, -164], [547, -161], [554, -157], [562, -154], [565, -146], [569, -139], [567, -131], [566, -123], [557, -119], [548, -115], [539, -111], [531, -108], [527, -100], [530, -94], [534, -89], [543, -87], [552, -86], [560, -91], [557, -99], [555, -107], [560, -108], [565, -109], [569, -104], [573, -100], [571, -96], [570, -93], [568, -89], [567, -86]], [[317, -105], [321, -108], [326, -111], [331, -104], [337, -97], [343, -90], [340, -99], [338, -109], [336, -118], [333, -128], [331, -137], [329, -147], [327, -157], [331, -162], [335, -168], [338, -159], [342, -151], [345, -143], [349, -135], [352, -126], [356, -118], [359, -110], [363, -102], [370, -96], [377, -91], [384, -86], [390, -89], [397, -92], [395, -101], [394, -110], [393, -120], [392, -129], [390, -138], [389, -148], [388, -157], [387, -167], [394, -164], [402, -162], [404, -152], [407, -143], [409, -133], [412, -124], [414, -114], [417, -105], [423, -99], [430, -93], [437, -87], [445, -90], [453, -93], [451, -102], [449, -112], [448, -122], [446, -131], [445, -141], [443, -151], [442, -161], [450, -162], [458, -164], [467, -166], [472, -159], [477, -153], [482, -147], [487, -141], [482, -138], [477, -136], [472, -141], [467, -147], [462, -153], [457, -159], [459, -150], [462, -142], [464, -133], [467, -125], [469, -116], [472, -108], [468, -101], [465, -94], [461, -87], [458, -80], [449, -82], [441, -85], [432, -87], [424, -90], [416, -93], [410, -88], [404, -83], [398, -79], [389, -82], [380, -85], [371, -88], [363, -91], [354, -87], [346, -83], [338, -79], [333, -84], [329, -89], [325, -94], [321, -99]], [[306, -83], [298, -81], [290, -80], [283, -79], [277, -82], [271, -85], [265, -89], [257, -85], [249, -82], [242, -79], [235, -84], [228, -89], [225, -96], [223, -103], [221, -110], [229, -112], [232, -104], [235, -97], [238, -90], [247, -88], [245, -97], [243, -107], [242, -117], [240, -127], [238, -136], [237, -146], [235, -156], [234, -166], [239, -166], [245, -167], [251, -161], [253, -152], [256, -144], [258, -135], [261, -127], [264, -119], [266, -110], [269, -102], [272, -94], [279, -91], [287, -89], [295, -87], [292, -96], [290, -105], [297, -107], [304, -110], [308, -104], [313, -99], [311, -95], [310, -92], [308, -89], [307, -86]], [[198, -87], [189, -83], [180, -79], [171, -79], [162, -79], [153, -83], [144, -87], [135, -91], [130, -98], [125, -106], [120, -113], [116, -121], [115, -128], [114, -136], [116, -145], [119, -154], [125, -159], [131, -164], [139, -166], [148, -168], [157, -167], [166, -166], [172, -162], [179, -159], [186, -156], [192, -148], [199, -141], [201, -133], [204, -126], [207, -119], [206, -109], [206, -100], [204, -97], [202, -94], [201, -92], [199, -89]], [[177, -87], [181, -92], [186, -97], [186, -103], [186, -110], [183, -119], [181, -128], [179, -137], [175, -144], [171, -151], [167, -154], [163, -158], [154, -161], [145, -160], [138, -155], [136, -147], [135, -140], [137, -130], [140, -121], [143, -111], [146, -102], [153, -95], [160, -88], [163, -87], [166, -87], [170, -87], [173, -87]], [[9, -82], [1, -81], [-7, -80], [-15, -79], [-22, -82], [-29, -86], [-36, -90], [-37, -99], [-38, -109], [-40, -119], [-31, -123], [-22, -127], [-13, -131], [-4, -135], [-2, -140], [-1, -146], [-6, -152], [-11, -158], [-19, -158], [-27, -159], [-36, -160], [-44, -155], [-40, -146], [-36, -138], [-42, -136], [-49, -134], [-53, -139], [-58, -144], [-55, -150], [-52, -156], [-50, -163], [-41, -164], [-32, -166], [-23, -168], [-15, -164], [-8, -161], [-1, -158], [6, -155], [7, -147], [9, -140], [10, -132], [12, -125], [3, -121], [-5, -117], [-14, -113], [-23, -109], [-25, -103], [-28, -98], [-24, -93], [-20, -88], [-12, -88], [-4, -89], [4, -90], [1, -98], [-1, -106], [4, -107], [9, -109], [13, -104], [18, -99], [16, -95], [14, -92], [12, -88], [10, -85]], [[-174, -86], [-176, -94], [-178, -103], [-181, -112], [-175, -106], [-169, -100], [-163, -94], [-157, -89], [-158, -98], [-160, -108], [-161, -117], [-163, -127], [-165, -137], [-166, -146], [-168, -156], [-170, -166], [-162, -164], [-154, -163], [-151, -154], [-149, -145], [-146, -137], [-144, -128], [-141, -120], [-139, -111], [-137, -103], [-129, -97], [-122, -91], [-115, -86], [-108, -90], [-102, -95], [-103, -104], [-105, -113], [-107, -122], [-109, -131], [-111, -140], [-113, -149], [-115, -159], [-108, -162], [-102, -165], [-96, -168], [-88, -163], [-81, -158], [-74, -153], [-71, -144], [-68, -136], [-77, -135], [-81, -144], [-85, -153], [-92, -155], [-99, -158], [-96, -149], [-93, -140], [-91, -131], [-88, -122], [-85, -113], [-83, -105], [-85, -98], [-87, -91], [-90, -84], [-98, -82], [-106, -80], [-115, -79], [-122, -83], [-130, -87], [-138, -92], [-144, -87], [-150, -83], [-156, -79], [-159, -80], [-163, -81], [-166, -83], [-170, -84]], [[-262, -85], [-268, -92], [-274, -100], [-280, -108], [-287, -116], [-288, -125], [-289, -135], [-290, -145], [-288, -150], [-286, -155], [-278, -159], [-270, -163], [-262, -168], [-253, -164], [-244, -161], [-235, -158], [-228, -162], [-222, -167], [-214, -166], [-206, -165], [-201, -157], [-196, -149], [-192, -141], [-193, -135], [-200, -135], [-203, -142], [-206, -149], [-209, -157], [-218, -157], [-216, -148], [-214, -139], [-212, -130], [-211, -122], [-209, -113], [-207, -104], [-205, -95], [-204, -87], [-211, -85], [-218, -83], [-225, -81], [-233, -79], [-238, -80], [-244, -81], [-250, -82], [-256, -83]], [[-235, -86], [-228, -91], [-225, -99], [-227, -108], [-229, -117], [-232, -127], [-234, -136], [-237, -146], [-242, -151], [-247, -157], [-253, -160], [-258, -160], [-263, -160], [-269, -154], [-269, -148], [-270, -143], [-268, -134], [-266, -126], [-264, -118], [-262, -110], [-258, -103], [-254, -97], [-251, -91], [-246, -88], [-242, -86], [-240, -86], [-239, -86], [-237, -86], [-236, -86]], [[-292, -85], [-300, -83], [-308, -81], [-317, -79], [-323, -82], [-329, -85], [-336, -89], [-343, -85], [-351, -82], [-359, -79], [-365, -83], [-371, -87], [-373, -95], [-375, -103], [-377, -112], [-369, -110], [-366, -102], [-363, -94], [-360, -87], [-353, -90], [-355, -99], [-357, -109], [-359, -118], [-362, -128], [-364, -137], [-366, -147], [-369, -157], [-366, -166], [-358, -164], [-350, -162], [-347, -152], [-344, -143], [-341, -134], [-339, -124], [-336, -115], [-333, -106], [-331, -97], [-326, -92], [-321, -88], [-313, -87], [-306, -87], [-308, -96], [-310, -106], [-303, -108], [-297, -110], [-292, -105], [-288, -100], [-288, -97], [-289, -94], [-290, -91], [-291, -88]], [[-479, -38], [-481, -47], [-484, -56], [-486, -65], [-489, -74], [-492, -83], [-486, -76], [-481, -69], [-475, -63], [-470, -56], [-465, -50], [-455, -50], [-446, -50], [-437, -50], [-439, -59], [-441, -68], [-444, -78], [-446, -87], [-448, -96], [-451, -106], [-453, -115], [-455, -124], [-458, -134], [-460, -143], [-463, -153], [-470, -155], [-478, -158], [-486, -161], [-494, -164], [-484, -164], [-475, -164], [-466, -164], [-457, -164], [-448, -164], [-439, -164], [-430, -164], [-421, -164], [-412, -165], [-412, -157], [-420, -155], [-428, -153], [-437, -152], [-434, -142], [-432, -133], [-429, -123], [-427, -114], [-425, -104], [-422, -95], [-420, -85], [-418, -76], [-415, -66], [-413, -57], [-411, -48], [-402, -48], [-393, -48], [-384, -49], [-383, -57], [-382, -65], [-381, -73], [-380, -81], [-372, -83], [-370, -74], [-368, -65], [-367, -56], [-365, -47], [-364, -39], [-387, -38], [-410, -38], [-433, -38], [-456, -38]], [[112, -34], [104, -34], [96, -35], [88, -36], [81, -37], [77, -45], [74, -54], [71, -62], [68, -71], [65, -80], [57, -81], [49, -82], [41, -84], [48, -87], [55, -90], [63, -93], [61, -101], [59, -110], [57, -119], [55, -128], [53, -137], [52, -146], [50, -155], [48, -164], [46, -173], [44, -182], [43, -191], [37, -194], [31, -197], [34, -190], [38, -183], [31, -179], [24, -175], [19, -179], [15, -184], [18, -192], [21, -201], [27, -202], [34, -203], [41, -204], [47, -199], [53, -194], [60, -189], [62, -180], [64, -171], [66, -162], [68, -153], [70, -144], [72, -135], [74, -126], [76, -117], [78, -108], [80, -99], [83, -91], [92, -89], [101, -87], [111, -86], [102, -84], [93, -82], [85, -80], [86, -71], [88, -62], [90, -53], [92, -44], [97, -41], [103, -39], [100, -48], [98, -57], [105, -58], [113, -60], [116, -51], [120, -43], [118, -41], [116, -39], [115, -37], [113, -35]], [[382, 78], [374, 79], [366, 80], [359, 82], [352, 78], [346, 75], [340, 72], [332, 75], [325, 78], [318, 82], [311, 77], [304, 72], [302, 64], [300, 56], [299, 49], [308, 52], [311, 59], [314, 67], [318, 75], [323, 72], [321, 62], [319, 52], [318, 43], [316, 33], [314, 23], [313, 14], [311, 4], [310, -5], [315, -5], [321, -6], [327, 0], [329, 8], [332, 16], [334, 25], [337, 33], [340, 41], [342, 50], [345, 58], [348, 67], [355, 69], [363, 71], [371, 74], [368, 65], [366, 56], [373, 53], [380, 51], [384, 57], [389, 63], [387, 66], [386, 69], [384, 72], [383, 75]], [[273, 79], [265, 79], [258, 80], [250, 80], [243, 81], [235, 76], [228, 71], [220, 66], [213, 61], [209, 52], [205, 43], [202, 34], [202, 25], [203, 16], [207, 9], [211, 2], [218, 0], [226, -2], [233, -4], [241, -7], [249, -5], [258, -3], [267, -2], [274, 3], [282, 9], [281, 16], [275, 17], [268, 12], [261, 7], [255, 3], [245, 1], [236, 0], [229, 5], [223, 11], [224, 19], [225, 28], [226, 37], [234, 37], [242, 38], [250, 38], [258, 39], [264, 42], [271, 46], [278, 50], [280, 59], [282, 69], [280, 71], [278, 73], [276, 75], [274, 77]], [[269, 69], [269, 63], [269, 58], [265, 54], [262, 50], [253, 46], [247, 45], [242, 44], [235, 44], [228, 45], [230, 52], [233, 59], [237, 65], [244, 71], [252, 75], [261, 75], [262, 73], [264, 72], [265, 71], [267, 70]], [[153, 82], [145, 76], [137, 71], [134, 64], [131, 57], [129, 50], [138, 50], [142, 59], [146, 68], [150, 71], [154, 75], [159, 73], [156, 64], [153, 56], [150, 47], [147, 39], [144, 30], [141, 22], [139, 14], [140, 7], [142, 0], [150, -3], [159, -7], [165, -3], [171, 0], [178, 3], [181, 10], [184, 17], [187, 25], [179, 26], [176, 19], [173, 13], [170, 7], [164, 4], [158, 1], [160, 9], [162, 18], [165, 26], [167, 35], [169, 44], [172, 52], [174, 61], [177, 70], [173, 74], [170, 79], [166, 79], [163, 80], [159, 80], [156, 81]], [[118, 78], [110, 79], [103, 80], [96, 82], [89, 78], [83, 75], [77, 72], [69, 75], [61, 78], [54, 82], [47, 77], [41, 73], [39, 65], [37, 57], [36, 49], [43, 50], [45, 57], [47, 64], [50, 71], [59, 73], [56, 63], [54, 53], [52, 43], [50, 34], [48, 24], [46, 14], [44, 5], [46, 0], [48, -6], [57, -6], [60, -2], [64, 2], [66, 11], [69, 20], [72, 29], [75, 39], [78, 48], [81, 57], [84, 67], [91, 69], [99, 71], [107, 74], [104, 65], [102, 57], [109, 54], [116, 51], [120, 56], [125, 62], [123, 65], [122, 68], [120, 71], [119, 74]], [[-77, 70], [-80, 63], [-84, 56], [-77, 49], [-73, 56], [-69, 63], [-66, 70], [-60, 71], [-54, 73], [-56, 64], [-59, 55], [-61, 46], [-64, 37], [-66, 28], [-69, 20], [-66, 12], [-63, 5], [-60, -2], [-53, -3], [-46, -5], [-40, -7], [-32, -4], [-25, -1], [-18, 2], [-11, -1], [-4, -4], [2, -7], [10, -1], [18, 4], [20, 10], [22, 16], [25, 23], [16, 26], [10, 18], [4, 10], [-1, 2], [0, 11], [2, 21], [3, 30], [5, 40], [6, 49], [8, 59], [9, 68], [11, 78], [3, 77], [-4, 76], [-6, 67], [-8, 58], [-10, 49], [-13, 41], [-15, 32], [-17, 23], [-20, 15], [-27, 8], [-34, 1], [-42, 6], [-50, 12], [-48, 20], [-46, 29], [-44, 37], [-42, 46], [-40, 54], [-38, 63], [-37, 72], [-44, 75], [-52, 78], [-60, 82], [-63, 79], [-66, 77], [-70, 74], [-73, 72]], [[-109, 75], [-115, 78], [-121, 81], [-128, 81], [-136, 81], [-144, 82], [-152, 78], [-160, 75], [-168, 72], [-173, 66], [-179, 61], [-182, 53], [-186, 46], [-190, 39], [-190, 32], [-190, 25], [-191, 18], [-188, 12], [-186, 6], [-178, 0], [-170, -5], [-161, -6], [-153, -7], [-145, -5], [-138, -3], [-131, -2], [-123, 3], [-116, 8], [-111, 14], [-107, 20], [-103, 27], [-101, 34], [-99, 41], [-98, 48], [-99, 55], [-100, 62], [-101, 64], [-103, 67], [-105, 69], [-107, 72]], [[-131, 75], [-126, 72], [-122, 69], [-119, 62], [-120, 52], [-122, 43], [-124, 34], [-126, 25], [-131, 18], [-136, 11], [-141, 4], [-146, 2], [-151, 0], [-156, 0], [-161, 1], [-165, 6], [-170, 11], [-170, 18], [-170, 25], [-168, 32], [-166, 39], [-164, 46], [-162, 54], [-158, 59], [-154, 64], [-150, 70], [-145, 72], [-140, 75], [-138, 75], [-136, 75], [-134, 75], [-132, 75]], [[-184, 124], [-193, 124], [-203, 124], [-212, 124], [-222, 124], [-231, 124], [-241, 124], [-250, 124], [-260, 124], [-269, 124], [-279, 124], [-289, 124], [-283, 119], [-277, 115], [-272, 111], [-274, 101], [-276, 92], [-279, 82], [-281, 73], [-283, 63], [-286, 54], [-288, 44], [-290, 35], [-293, 25], [-295, 16], [-298, 7], [-305, 3], [-312, 0], [-320, -3], [-311, -3], [-302, -3], [-293, -3], [-285, -3], [-276, -3], [-267, -3], [-258, -3], [-250, -4], [-250, 4], [-257, 4], [-265, 5], [-273, 6], [-270, 15], [-268, 24], [-265, 34], [-263, 43], [-261, 53], [-252, 54], [-243, 55], [-239, 48], [-235, 41], [-232, 34], [-229, 42], [-227, 50], [-225, 58], [-222, 66], [-220, 74], [-218, 83], [-226, 79], [-234, 75], [-242, 72], [-250, 68], [-258, 65], [-256, 73], [-254, 81], [-252, 89], [-250, 97], [-248, 105], [-246, 114], [-237, 113], [-229, 113], [-221, 113], [-213, 113], [-205, 113], [-201, 104], [-197, 96], [-193, 87], [-190, 79], [-188, 88], [-187, 97], [-186, 106], [-185, 115]], [[178, 127], [171, 127], [167, 125], [164, 122], [162, 118], [162, 110], [166, 106], [169, 106], [170, 105], [176, 106], [183, 112], [184, 115], [184, 121], [183, 123], [182, 123], [181, 124], [180, 125], [179, 126]]]



  const { width, height } = useWindowDimensions();
  return (
    <div className="h-screen w-full flex flex-col  items-center text-5xl font-operatorItalic bg-[#0F1A19]">
      <CombinedEpicycle
        points={pointstest}
        speed={0.01}
        width={width}
        height={height}
        colour={"#F4FFF8"}
        className="absolute left-0 top-0"
      />
    </div>
  );
}

export default Slider;
