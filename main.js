class Worker{

	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours; 
    }

    getSalary(){
        console.log(this.hourRate * this.hours);
    }
}

let worker = new Worker('Ion', 'Creanga', 10, 176);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.hourRate); 
console.log(worker.hours); 
console.log(worker.getSalary()); 

let worker2 = new Worker('Ion', 'Paladii', 58, 166);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate); 
console.log(worker2.hours); 
console.log(worker2.getSalary()); 



