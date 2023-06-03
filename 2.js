/* Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

const user = {
  name:"Lena",
  city:"Tver",
  age:29  
}

function nameProp(obj, name) {
        if (obj.hasOwnProperty(name)) {
            return true
        }
		return false
}

console.log(nameProp(user, 'name'))
