var arr = [6,2,5,4,5,1,6];
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
    console.log(rt.reverse());

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
    console.log(lft);

var width = [];
var area = [];
for(var i =0; i < rt.length; i++){
    width.push(rt[i]-lft[i]-1)
}
for(var i =0; i < width.length; i++){
    area.push(width[i]*arr[i])
}
console.log(width)
console.log(Math.max(...area))