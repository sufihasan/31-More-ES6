//when object in an array

const person = [{ name: 'Hasan', old: 23, height: 6, color: 'brown', febFood: 'meat' }];

// console.log(person.name); //undefine beacuse object id in an arry



// console.log(person);
// console.log(person[0]);
// console.log(person[0].name);


// when array in an object 

const obj1 = {
    Name: 'hasan',
    data: [{ sonaName: 'tahsim', sonAge: 4, sonHeight: 6 }]

}

// console.log(obj1.data[0].sonAge);

const district = {
    NameNo: 6,
    Name: 'Barisal',
    thana: {
        thanaName: 'AgailJhara',
        Union: {
            Goila: {

                totalpeople: 3000
            }

        }

    }


}

console.log(district.than?.thanaName);

