class Instructor {
    name;
    designation = 'web instructor';
    team = 'web team';
    location;

    constructor(personName, personLocation) {
        this.name = personName;
        this.location = personLocation;

    }

    suporrtSessionTime(time) {
        console.log(`support start ar ${time}`);
    }

    createQuizeModule(module) {
        console.log(`please create quize for ${module}`);
    }

}

const hasan = new Instructor('Md.Hasan', 'Mirpur');
console.log(hasan);


hasan.createQuizeModule(10);
hasan.suporrtSessionTime('9 pm');