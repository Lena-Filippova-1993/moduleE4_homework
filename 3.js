// Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.
 

function empCreate(){
	return Object.create(null)
}
console.log(empCreate());