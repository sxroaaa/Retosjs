var vector1 = [2,4,6,8, 10];
var vector2 = [3, 6, 9, 12, 15];
var vector3 = [];

for(i = 0; i < vector1.length; i++){
  vector3[i] =vector1[i]+vector2[i];
}

document.write(vector3);