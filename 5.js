//Задание 5. Переписать консольное приложение из предыдущего юнита на классы.


class Appliances{
  constructor(name) {
    this.name = name;
    }
}

Appliances.prototype.AppliancesConnected = function () {
    let connect = ''
    if (this.connected) {
        connect = 'Да';
        } else {
        connect = 'Нет';
        }
       return connect;
       }

class Appliance extends Appliances{
  constructor(name, power, connected, powerCheck){
    super(name);
    this.power = power;
    this.connected = connected;
    this.powerCheck = function(){
        console.log(`Мощность прибора ${name} равна ${power} Вт`)
        }
    } 
}

Appliance.prototype = new Appliances();

let powerJustConnected = function (){
    let sum = 0;
    for(let val of allAppliances){
    if (val.AppliancesConnected()=='Да'){
        sum += val.power;
    } else{
        sum;
     }
    }
    return sum;
}
  
  const lamp = new Appliance(name = "Лампа", power = 60, connected = true);
  const laptop = new Appliance(name = "Ноутбук", power = 450, connected = false);
  const fridge = new Appliance(name = "Холодильник", power = 500, connected = true);

  let allAppliances = [lamp, laptop, fridge];

  console.log(`Лампа подключена к сети? ${lamp.AppliancesConnected()}`);
  console.log(`Ноутбук подключен к сети? ${laptop.AppliancesConnected()}`);
  console.log(`Холодильник подключена к сети? ${lamp.AppliancesConnected()}`);

  console.log(`Общая потребляемая мощность включенных приборов: ${powerJustConnected(allAppliances)} Вт`);


  lamp.powerCheck();
  laptop.powerCheck();
  fridge.powerCheck();