class Worker{

	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours; 
    }
    getSalary(){
        return(this.hourRate * this.hours);
    }

    getName(){
        return(this.name);
    }

    getSurname(){
        return(this.surname);
    }

    getHourRata(){
        return(this.hourRate);
    }

    getHours(){
        return(this.hours);
    }
    increaseSalary(x){
        this.hourRate += x;
    }
    setTax(x){
        this.x = 1 - x / 100;
    }
    getSalartyNetto(){
        return(this.getSalary() * this.x);
    }

}


let worker = new Worker('Ion', 'Creanga', 10, 176);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.hourRate); 
console.log(worker.hours); 
console.log(worker.getSalary());
worker.increaseSalary(2);
console.log(worker.getSalary());
worker.setTax(18); 
console.log(worker.getSalartyNetto()); 

let worker2 = new Worker('Vasile', 'Paladii', 58, 166);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate); 
console.log(worker2.hours); 
worker2.increaseSalary(2);
console.log(worker2.getSalary()); 
worker2.setTax(18); 
console.log(worker2.getSalartyNetto());

if(worker.getSalary() > worker2.getSalary()){
    console.log(worker.name + ' primeste mai mult de cit ' + worker2.name + ' cu ' + (worker.getSalary() - worker2.getSalary()));
    }else{
        console.log(worker2.name + ' primeste mai mult de cit ' + worker.name + ' cu ' + (worker2.getSalary() - worker.getSalary()));
    } 


