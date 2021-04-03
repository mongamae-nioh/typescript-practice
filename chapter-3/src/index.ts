let c: {
    firstName: string,
    lastName: string
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}
}

c = new Person('taro', 'yamada');
console.log(c.firstName, c.lastName);