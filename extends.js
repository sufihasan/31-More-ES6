
//parent cls
class TeamMember {
    name;
    location;

    constructor(personName, personLocation) {
        this.name = personName;
        this.location = personLocation;

    }
    provideFidback() {

        console.log(` ${this.name} thank you for your fid back`);
    }

}

//instructor class

class Instructor extends TeamMember {

    designation = 'web instructor';
    team = 'web team';



    constructor(personName, personLocation) {
        super(personName, personLocation);


    }

    suporrtSessionTime(time) {
        console.log(`support start ar ${time}`);
    }

    createQuizeModule(module) {
        console.log(`please create quize for ${module}`);
    }



}

//developer class
class Developer extends TeamMember {

    designation = 'developer';
    team = 'web team';
    tech;

    constructor(personName, personLocation, personTech) {
        super(personName, personLocation);
        this.tech = personTech;

    }

    developerFeature(feature) {
        console.log(`please develop the feature ${feature}`);
    }

    realease(version) {
        console.log(`please realease the version ${version}`);
    }



}




//job plesement class
class Jobplesement extends TeamMember {

    designation = 'job plesement commandos';
    team = 'job plesement';
    region;


    constructor(personName, personLocation, Persionregion) {
        super(personName, personLocation);
        this.region = Persionregion;

    }

    provideResume(time) {
        console.log(`support start ar ${time}`);
    }

    prepareStudent(module) {
        console.log(`please create quize for ${module}`);
    }


}

//object for developer

const hasan = new Developer('Hasan', 'Dhaka', 'react');
console.log(hasan);
hasan.realease(3);