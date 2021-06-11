
let mat = [[0, 1, 1, 1],[0, 0, 1, 1],[1, 1, 1, 1],[0, 0, 0, 0]]
let index = 0
let indexCon = 0
let res =''
for (let i in mat){
    con = 0
    for (let j of mat[i]){
        if ( j == 1){
            con += 1
        }   
    }
    if (con > indexCon){
        indexCon = con
        res = i
    }
}
console.log(res)
