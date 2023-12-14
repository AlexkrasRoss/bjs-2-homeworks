function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	for (const grade of marks)
		Student.hasOwnProperty((this.marks) ? this.marks.push(grade) : 0);
}

Student.prototype.getAverage = function(marks) {
	if (this.marks === undefined) {
		return 0;
	} else {
		return this.marks.reduce((acc, element, index, arr) => acc + element / arr.length, 0 ? acc : 0);
	}
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}