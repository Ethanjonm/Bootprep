/* Data modeling
Data structrue = a container to store and organize

let student = ['alice', 'female', '6'3']

to get the student's name ... student[0]
to get student's gender ... student[1]

Q: How could we store a student's info more effecitently
A: store in an object

Takeaway
If your data needs to be ordered, then use an array, otherwise use and object
*/

/*how should we model these?
(i.e. array or object)
1) student  => object
2) class of student => an array of objects
3) car => object
4) parking lot => An array of car objects
*/

let student1 = {
    "name": "jon",
    "grade": 2
}
let student2 = {
    "name": "sam",
    "grade": 4
}
let student3 = {
    "name": "joe",
    "grade": 12
}

let class1 = [student1, student2, student3]

console.log(class1)

for(let student of class1){
    "name"
    "grade"
}

// for in loops over the indexs, for of loops over the values