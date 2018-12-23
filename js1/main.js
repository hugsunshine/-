console.log("------默认排序(ASCII字符排序)------");  
var arr = [21,52,33,62,22,93,35,57,354,245,243,333];  
arr.sort();  //ASCII字符代码从小到大排序  
console.log(arr.toString());  
   
console.log("------自定义函数排序------");  
var arr1 =[21,52,33,62,22,93,35,57,354,245,243,333];  
arr1.sort(function(a,b){  //自定义函数排序  
    var a1= parseInt(a);  
    var b1= parseInt(b);  
    if(a1<b1){  
        return -1;  
    }else if(a1>b1){  
        return 1;  
    }  
    return 0;  
});  
console.log(arr1.toString());  
