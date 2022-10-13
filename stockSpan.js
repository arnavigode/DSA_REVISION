var arr = [100, 80, 60, 70, 60, 75, 85];
var stack = [];
var stack2 = [];
var ans = [];

for(var i = 0; i <arr.length; i++) {
if(stack.length == 0){
    ans.push(-1);
}
else if(stack.length > 0 && stack[stack.length - 1][0] > arr[i]){
    ans.push(stack[stack.length - 1][1] );
}
else if(stack.length > 0 && stack[stack.length - 1][0] < arr[i]){
while(stack.length > 0 && stack[stack.length - 1][0] <=  arr[i]){
    stack.pop();
}
if(stack.length == 0){
    ans.push(-1)
}
else{
    ans.push(stack[stack.length - 1][1] );
}
}
stack.push([arr[i], i])
}
// console.log("ans:", ans);

for(var i =0; i < ans.length; i++){
    ans[i] = i - ans[i]
}
console.log(ans)