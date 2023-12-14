function Student(name, gender, age) {
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.marks=[];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    for (let grade of marks)
    if ( this.marks === null ?? undefined) {
        // this.marks = 1;
        return 0; 
        } else {
        this.marks.push(grade); 
        }
}

Student.prototype.getAverage = function (marks) {
    
      return this.marks.reduce((acc,element,index,arr)=>acc+element/arr.length,0?acc:0)
    }
  
Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason; 
}
