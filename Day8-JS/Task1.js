window.addEventListener("load", function () {

    class Person {
        #_name;
        #_age;
        constructor(_name, _age) {
            this.#_name = _name;
            if (_age < 0) {
                this.#_age = `enter your age > 0 not negative`
            } else {
                this.#_age = _age;
            }

        }
        print() {
            return `${this.#_name} : ${this.#_age}`
        }
        get Name() {
            return this.#_name;
        }
        set Name(_name) {
            if (this.#_name.trim().length < 2) {
                this.#_name = "User";
            } else {
                this.#_name = _name;
            }
        }

        get Age() {
            return this.#_age;
        }
        set Age(_age) {
            if (_age < 0) {
                return `enter your age right`
            } else {
                this.#_age = _age;
            }

        }
        introduce() {
            return `Hello, I'm person`
        }


    }
    p1 = new Person("randa", 25);
    p2 = new Person("Yamen", -10);

    // console.log(p.print())
    document.body.innerHTML += `<h2>${p1.print()}</h2>`
    //   console.log(p.Age)
    document.body.innerHTML += `<h2>${p1.Age}</h2>`
    // p.Age= 10
    document.body.innerHTML += `<h2>${p2.print()}</h2>`
    //  console.log(p.Age)
    document.body.innerHTML += `<h2>####################################</h2>`


    class Teacher extends Person {
        constructor(_name, _age, subject) {
            super(_name, _age);
            this.subject = subject;
        }
        teach() {
            return `${super.print()} : is teaching ${this.subject}`

        }
        introduce() {
            return `Hello, I'm Teacher`
        }
    }
    te = new Teacher("randood", 25, "Programming")
    document.body.innerHTML += `<h2>${te.print()}</h2>`
    document.body.innerHTML += `<h2>${te.teach()}</h2>`
    document.body.innerHTML += `<h2>${te.introduce()}</h2>`
    document.body.innerHTML += `<h2>####################################</h2>`






    class Student extends Person {
        constructor(_name, _age, major) {
            super(_name, _age);
            this.major = major;
        }
        study() {
            return `${super.print()} : is learning ${this.major}`

        }
        introduce() {
            return `Hello, I'm Student`
        }


    }
    std = new Student("randod", 22, "JavaScript")
    // console.log(std.print());
    document.body.innerHTML += `<h2>${std.print()}</h2>`
    document.body.innerHTML += `<h2>${std.study()}</h2>`
    document.body.innerHTML += `<h2>${te.introduce()}</h2>`
    document.body.innerHTML += `<h2>####################################</h2>`



    class Shape {
        constructor(leng, width, dim) {
            this.leng = leng;
            this.width = width;
            this.dim = dim;
        }
        calcArea() {

        }
        print() {
            return `length : ${this.leng} ,width : ${this.width} ,Dimater : ${this.dim}`
        }
    }
    s1 = new Shape(10, 20, 5);
    document.body.innerHTML += `<h2>${s1.print()}</h2>`
    document.body.innerHTML += `<h2>####################################</h2>`
    class Rectangle extends Shape {
        constructor(leng, width) {
            super(leng, width);
        }
        calcArea() {

            return this.leng * this.width
        }
    }
    rect = new Rectangle(20, 30)
    document.body.innerHTML += `<h2>${rect.calcArea()}</h2>`
    document.body.innerHTML += `<h2>####################################</h2>`
    class Circle extends Shape {
        constructor(dim2) {
            super();
            this.dim = dim2
        }
        calcArea() {
            return 2 * Math.PI * this.dim
        }
    }
    cir = new Circle(10);
    document.body.innerHTML += `<h2>${cir.calcArea()}</h2>`
    document.body.innerHTML += `<h2>####################################</h2>`
    let arr = [new Circle(10),
    new Rectangle(100, 20),
    new Circle(20),
    new Rectangle(30, 40),
    new Circle(14),
    new Rectangle(15, 12)]
     document.body.innerHTML += `<h2 style="color:red;">Array of Shapes</h2>`
    arr.forEach(element => {


   document.body.innerHTML += `<h2>${element.calcArea()}</h2>`
   
});
 document.body.innerHTML += `<h2>####################################</h2>`

})
