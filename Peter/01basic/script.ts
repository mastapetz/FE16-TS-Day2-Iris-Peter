class person{
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
        this.name =name;
        this.age=age;
        this.jobTitle=jobTitle;
    }
    printInfo (){
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} `;
    }
}

// let peter = new person("Peter",42,"Content Creator");

// console.log(peter.printInfo());

class extraInfo extends person{
    salary : number;
    jobLocation: string;
    constructor(name: string, age: number, jobTitle: string, salary: number, jobLocation: string){
    super(name, age, jobTitle)
    this.salary = salary;
    this.jobLocation=jobLocation;
    }
    printExtraInfo (){
        return `and I get ${this.salary} every month, and I work in ${this.jobLocation} `;
    }
}

let peter = new extraInfo("Peter",42,"Content Creator",500,"Vienna");
console.log(peter.printInfo());
console.log(peter.printExtraInfo());
