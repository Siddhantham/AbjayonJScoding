const rotate = function(arr,d,n){
    let e = d % n 
    let res = []
    res.push(...arr.slice(e))
    res.push(...arr.slice(0,e))
    return res
}


let arr = [1,2,3,4,5]
let d = 2
let n = 5

console.log(rotate(arr,d,n)
