const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã'
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite'
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite'
};

const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });

//console.log(allLessons);

const allStudents = () => {
  let sumStudents = 0;
  for (let key of Object.keys(allLessons)) {
    sumStudents += allLessons[key].numeroEstudantes;
  }
  return sumStudents;
}

//console.log(allStudents());
const getValueByNumber = (objectLesson, index) => {
  let arrayKeys = Object.keys(objectLesson)
  return objectLesson[arrayKeys[index]];
  //Se quisesse trazer a inf da key, retira [objectLesson]
}

console.log(getValueByNumber(lesson1, 2));
// Output: 'Matématica'