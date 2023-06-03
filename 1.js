/* Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.*/


const someObj = {
    a: 1,
    b: 2,
    c: "C"
}

const obj1 = Object.create(someObj)

obj1.d = 5

function ownProp(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key])
        }
    }
}

console.log(ownProp(obj1))