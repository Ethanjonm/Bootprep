/* nested loop a loop in a loop
*/

function everyCombination(){
    for (let i = 0; i < 3; i++){
        console.log(`autoloop: ${i}`);
        for (let j = 0; j < 5; j++){
            console.log(`innerloop: ${j}`)
            // console.log(i + ' ' + j)
        }
    }
}
//everyCombination()


// the first loop starts when it get to the first number the second loop
// does a full loop then contine to first loop second number then 
// then second loop does a full loop

let students = ['Kevin', 'Jesse', 'Jason', 'Simon'];

function pairStudents(arr){
    for (let i = 0; i < arr.length; i++){
        let student = arr[i];

        for (let j = i + 1; j < arr.length; j++){
            let student2 = arr[j];

            console.log(`${student} will be paired with ${student2}`);

        }
    }

}

//pairStudents(students)


function twoSums(arr,target){
    
    for(let i = 0; i < arr.length; i++){

        for (let j = i + 1; j <arr.length; j++) {
            if( arr[i] + arr [j] === target){
                console.log([i,j])
            }
        }

    }
}
// twoSums([0,1,2,3,4,5,6], 5) [0,5] [1,4] [2,3]

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for (let i =0; i < matrix.length; i++){
    let subArray = matrix[i];

    for (let j = 0; j < subArray.length; j++){
        let ele = matrix[i][j]; // matrix[0][0] = 1 matrix[0][1] = 2 
        // console.log(ele);
    }
}

console.log('-----')

let geography = [
    [0,2,3,0],
    [1,4,3,1],
    [1,5,6,4],
    [0,4,3,2]
]

function getHighestCordinateOnAPlane(plane){
    let biggest = plane[0][0];
    let currentBiggestIndex = [0,0];

    for (let i = 0; i < plane.length; i++){
        let subArray = plane[i];
        for (let j = 0; j < subArray.length; j++){
            console.log(j)
            if (subArray[j] > biggest){
                biggest = subArray[j]
                currentBiggestIndex = [i,j]
            }
        }
    }
    return currentBiggestIndex;
}

console.log(getHighestCordinateOnAPlane(geography))


let peopleArr = [
    {name: 'Ry',
    favFoods:['brownies', 'sushi', 'tacos'],
},
    {name: 'Brooke',
favFoods: ['Apples', 'Bananas', 'Pears'],
}
]

function printFavoriteFoods(arrays){
    for (let i = 0; i < arrays.length; i++){
        let obj = array[i];
        let arrayInObj = obj=favFoods;
        for (let j = 0; j < arrayInObj.length; j++){
            console.log(arrayInObj[j])
        }
    }
}

