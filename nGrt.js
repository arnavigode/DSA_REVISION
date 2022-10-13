var arr = [4,5,2,10,8];
var stack = [];
var ans = [];

for(var i = arr.length - 1; i >= 0; i--) {
if(stack.length == 0){
    ans.push(-1);
}
else if(stack.length > 0 && stack[stack.length - 1] < arr[i]){
    ans.push(stack[stack.length - 1] );
}
else if(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
while(stack.length > 0 && stack[stack.length - 1] >=  arr[i]){
    stack.pop();
}
if(stack.length == 0){
    ans.push(-1)
}
else{
    ans.push(stack[stack.length - 1] );
}
}
stack.push(arr[i])
}
console.log(ans.reverse())