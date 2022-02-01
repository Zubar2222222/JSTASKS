// create constructor-function to make student objects with fields:name,mark
function Student(name,mark) {
    this.name = name;
    this.mark = mark;   
  };
  
  let student1 = new Student("Anton", 5);
  let student2 = new Student("Vasya", 7);
  let student3 = new Student("Larik", 6);
  let studentsArray = [student1, student2, student3];
  // create function to calculate the highest mark of all students
  calculateHighestMark(studentsArray);
  function calculateHighestMark(students) {
    let maxMark = 0; 
    for(let i = 0; i < students.length; i++) { 
      if(students[i].mark > maxMark) {
        maxMark = students[i].mark;
      };
    };
    console.log(maxMark);
  };
  



  