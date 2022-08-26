const student = {

    name: 'Hasan',
    roll: 12,
    marks: {
        bangla: 80,
        english: 95,
        math: 70

    }
}

// console.log(student);
// console.log(student.marks);
// console.log(student.marks.english);

const mathmark = student['marks']['math'];
console.log(mathmark);