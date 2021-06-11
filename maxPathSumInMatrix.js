
const MaxSumPath = function(a){
    let s = Math.max(...a[0])
let v = a.splice(1,a.length)

let j = a[0].indexOf(s)
let add = []
add.push(s)

let b = j
for (let i in v ){
    let c 
    if (b==(a[0].length-1)){
        c = [b-1,b]
        
    }else if(b == 0){
        c = [b,b+1]
        
    }else{
        c = [b-1,b,b + 1]
        
    }
    let d = []
    let max = []
    for (let m of c){
        max.push(v[i][m])
    }
    d.push(Math.max(...max))
    b = v[i].indexOf(d[0])
    add.push(...d)
    
}
sum = 0
let path = ''
for (let i of add){
    sum+=i
    path += i +'-' 
}

console.log(sum)
console.log(`The maximum sum path is ${path.slice(0,path.length-1)}  `)
}

let a1 = [[10, 10 , 2,  0, 20,  4], [1,  0,  0, 30,  2,  5 ],[0, 10,  4,  0,  2,  0 ],[1 , 0,  2, 20,  0,  4 ]]
let a2 = [[1,2,3],[9,8,7],[4,5,6]]

MaxSumPath(a1)
MaxSumPath(a2)




