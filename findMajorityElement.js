
const check = function(inp,i,a,res){
    let count = 0
    for (let j of inp){
        if(j==i){
            count+=1
        }
    }
    for (let k of res){
        if(k==i){
            return false
        }
    }
    if(count>a){
        return true
    }else{
        return false
    }
}

const initate = function(inp){
    let a = Math.floor(inp.length/2)

let res = []

for (let i of inp){
    let checkRes = check(inp,i,a,res)
    if (checkRes){
        res.push(i)
    }
}
if (res.length>0){
    console.log(...res)
}else{
    console.log('No Majority Element')
}
}
let inp1 = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let inp2 = [3, 3, 4, 2, 4, 4, 2, 4]

initate(inp1)
initate(inp2)const check = function(inp,i,a,res){
    let count = 0
    for (let j of inp){
        if(j==i){
            count+=1
        }
    }
    for (let k of res){
        if(k==i){
            return false
        }
    }
    if(count>a){
        return true
    }else{
        return false
    }
}

const initate = function(inp){
    let a = Math.floor(inp.length/2)

let res = []

for (let i of inp){
    let checkRes = check(inp,i,a,res)
    if (checkRes){
        res.push(i)
    }
}
if (res.length>0){
    console.log(...res)
}else{
    console.log('No Majority Element')
}
}
let inp1 = [3, 3, 4, 2, 4, 4, 2, 4, 4]
let inp2 = [3, 3, 4, 2, 4, 4, 2, 4]

initate(inp1)
initate(inp2)
