const Students = [
    {
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
            }
        },
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
            }
        },
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
            }
        }
    }
]


// expected output
/**
 *          My Name is abul.
            My age is 17.
            My gender is Male
            My subjects are: bangla,english,math
 *
 */
//console.log(Students[0].student1.name);
//console.log(Students[0].student1.age);
//console.log(Students[0].student1.isMale);
//console.log(Students[0].student3.education.subjects);

Students.map(value => {
    for (let i in value) {
        const { name, age, isMale, education } = value[i];
        const { subjects } = education;

        const information = `
        my name is ${name}
        my age is ${age}
        my gender is ${isMale === true ? 'Male' : 'Female'}
        my subjects are:${subjects.map(s => s)}
        `
        console.log(information);
    }

});

//console.log(propertyValue);
