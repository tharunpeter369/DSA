//        2 ----- 0        //image 6
//    -       -
// 1----------- 3

//Edge List
// const graph = [[0,2],[2,3],[2,1],[1,3]]  

//Adjacent List
// const graph = [[2],[2,3],[0,1,3],[1,2]]  // here is based on index and index is considered as node/vertex

//Adjacent matrix

const graph = {      //image 7
    0: [0, 0, 1, 0], //  index 0 have connectin with  0,1,2,and 3 
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
}