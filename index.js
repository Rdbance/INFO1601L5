//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course){
  let courseData = student.transcript.find (c=> c.course === course);
  if (!courseData) return -1;
  let total = courseData.grades.reduce((sum, grade) => sum + grade, 0);
  return total / courseData.grades.length;
}
console.log(getAverageGrade(bob, "INFO 1603"));
console.log(getAverageGrade(sally, "INFO 1601"));
console.log(getAverageGrade(paul, "INFO 1601"));

function getAssignmentMark (student, course, num){
  let courseData = student.transcript.find (c => c.course === course);
  if (!courseData || num < 0 || num >= courseData.grades.length) return -1;
  return courseData.grades[num];
}
console.log(getAssignmentMark(bob, "INFO 1603", 1));
console.log(getAssignmentMark(sally, "INFO 1601, 2"));
console.log(getAssignmentMark(paul, "INFO 1601", 0));

function averageAssessment(students, courseName, assignment){
 let total = 0, count = 0;
 students.forEach(student => {
  let mark = getAssignmentMark(student, courseName, assignment);
  if (mark !== -1){
    total += mark;
    count++;
  }
 });
 return count > 0 ? total / count : -1;
 console.log(averageAssessment(students, "INFO 1601", 0));
 console.log(averageAssessment(students, "INFO 1603", 1));
 console.log(averageAssessment(students, "INFO 1602", 0));
}
  

