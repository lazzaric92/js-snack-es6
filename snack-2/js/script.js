//todo: Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame... 
//todo: Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE); 
//todo: Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70.
//todo: Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120.

/*
    Id  Name                Grades
    213 Giuseppina della Rovere 78
    110 Paola Cortellessa       96
    250 Andrea Mantegna         48
    145 Gaia Borromini          74
    196 Luigi Grimaldello       68
    102 Piero della Francesca   50
    120 Francesca da Polenta    84
*/

const students = [
    {
        id: 213,
        name: 'Giuseppina della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]

const newCourse = students.map((student) => student.name.toUpperCase());
console.log(newCourse);

const higherGradesStudents = students.filter((student) => student.grades > 70);
console.log(higherGradesStudents);
higherGradesStudents.forEach(element => {
    console.log(`Student Id: ${element.id} - ${element.name}, grades: ${element.grades}`);
});

const filteredStudentsList = higherGradesStudents.filter((student) => student.id > 120);
console.log(filteredStudentsList);
filteredStudentsList.forEach(element => {
    console.log(`Student Id: ${element.id} - ${element.name}, grades: ${element.grades}`);
});
