//todo   1. Додай до класу `Student` перевірку: якщо `grade < 1` або `grade > 12`, виводь `"Невірний клас!"`.
//todo   2. Створи клас `Counter` із властивістю `count`, який має методи `increase()`, `decrease()` і `reset()`.
//todo   3. Створи клас `Rectangle` з методами для обчислення `area()` і `perimeter()`.
//todo   4. Напиши клас `BankAccount` з балансом і методами `deposit(sum)` та `withdraw(sum)`.
//todo   5. Зроби клас `Light`, який має властивість `isOn`, і метод `toggle()` — щоб перемикав лампочку (on/off).



//*   1. Додай до класу `Student` перевірку: якщо `grade < 1` або `grade > 12`, виводь `"Невірний клас!"`.
class Student {
    constructor(grade) {
        this.grade = grade;
    }

    checkGrade() {
        if (this.grade < 1 || this.grade > 12) {
            console.log("Невірний клас!");
        } else {
            console.log("Клас правильний");
        }
    }
}

let student = new Student(123);
student.checkGrade();

//*  2. Створи клас `Counter` із властивістю `count`, який має методи `increase()`, `decrease()` і `reset()`.
class Counter {
    constructor() {
        this.count = 0;
    }

    increase() {
        this.count++;
    }

    decrease() {
        this.count--;
    }

    reset() {
        this.count = 0;
    }
}

let counter = new Counter();

counter.increase();
console.log(counter.count);

console.log(counter);

//*   3. Створи клас `Rectangle` з методами для обчислення `area()` і `perimeter()`.

class Rectangle {
    constructor(area, perimeter,width,height,widthb,heightb) {
        this.area = area;
        this.perimeter = perimeter;
        this.width = width;
        this.height = height;
        this.widthb = widthb;
        this.heightb = heightb;
    }
    area() {
        this.width*this.height
    };
    perimeter() {
        console.log();
        
    }

}
