
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined){
        return [];
    }
    if (matrix.length == 0){
        return [];
    }
    console.log(matrix.length);
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++){
        if (i%2==0){
            for (l of matrix[i]){
                newMatrix.push(l);
            }
        }else{
            for (r of matrix[i].reverse()){
                newMatrix.push(r);
            }
        }
    }
    return newMatrix;
}

// console.log(towelSort([
//     [1, 2],
//     [3, 4],
// ]))
