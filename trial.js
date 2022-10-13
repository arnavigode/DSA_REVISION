// nearest smaller to left;
var arr = [4, 5, 2, 10, 8];

var st = [];
var vt = [];

for(var i =0; i < arr.length; i++){
    if(st.length == 0){
        vt.push(-1)
    }
    else if(st.length > 0 && st[st.length-1] < arr[i]){
        vt.push(st[st.length-1])
    }
    else if(st.length > 0 && st[st.length-1] > arr[i]){
        while(st.length > 0 && st[st.length-1] >= arr[i] ){
            st.pop()
        }
        if(st.length == 0){
            vt.push(-1)
        }
        else{
            vt.push(st[st.length-1])
        }
    }
    st.push(arr[i])
}
console.log(st)
console.log(vt)