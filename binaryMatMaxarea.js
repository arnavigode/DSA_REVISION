var mat = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

var [n,m] = [4,4]

var v = [];
var ans = [];

for(var j =0; j < m; j++){
  v.push(mat[0][j])
}
var max = mah(v)
// console.log(max)
for(var i =1; i < n;i++){
  for(var j =0; j < m; j++){
    if(mat[i][j] == 0){
      v[j] = 0;
      console.log("v[j]: ", v[j])
    }
    else{
      v[j] = v[j] + mat[i][j]
      console.log("v[j]: ", v[j])
    }
  
  }
  max = Math.max(max, mah(v))
  console.log(max)
  ans.push(max)
}
console.log(ans)


// MAH

function mah(arr){
  var rt = [];
var lft = [];
var stack = [];
var stack1 = [];

// nsr
for(var i = arr.length-1; i >=0; i--) {
    if(stack.length == 0){
        rt.push(arr.length);
    }
    else if(stack.length > 0 && stack[stack.length - 1][0] < arr[i]){
        rt.push(stack[stack.length - 1][1] );
    }
    else if(stack.length > 0 && stack[stack.length - 1][0] >= arr[i]){
    while(stack.length > 0 && stack[stack.length - 1][0] >=  arr[i]){
        stack.pop();
    }
    if(stack.length == 0){
        rt.push(arr.length)
    }
    else{
        rt.push(stack[stack.length - 1][1] );
    }
    }
    stack.push([arr[i], i])
    }
    // console.log(rt.reverse());

// nsl
for(var i = 0; i <arr.length; i++) {
    if(stack1.length == 0){
        lft.push(-1);
    }
    else if(stack1.length > 0 && stack1[stack1.length - 1][0] < arr[i]){
        lft.push(stack1[stack1.length - 1][1] );
    }
    else if(stack1.length > 0 && stack1[stack1.length - 1][0] >= arr[i]){
    while(stack1.length > 0 && stack1[stack1.length - 1][0] >=  arr[i]){
        stack1.pop();
    }
    if(stack1.length == 0){
        lft.push(-1)
    }
    else{
        lft.push(stack1[stack1.length - 1][1] );
    }
    }
    stack1.push([arr[i], i])
    }
    // console.log(lft);

var width = [];
var area = [];
for(var i =0; i < rt.length; i++){
    width.push(rt[i]-lft[i]-1)
}
for(var i =0; i < width.length; i++){
    area.push(width[i]*arr[i])
}
// console.log(width)
// console.log(Math.max(...area))
return Math.max(...area);
}