class Car {

    //Encapsulation : protection des propriétés
    // public : propriété publique
    // private : propriété privée, _nom de la propriété
    // protected : propriété protégée, _nom de la propriété

    //Les propriétés
    private _brand: string;
    private _speed: number;

    //Le constructeur
    constructor(brand: string, speed: number) {
        this._brand = brand;
        this._speed = speed;
    }

    //Les getters et setters
    get brand(): string {
        return this._brand;
    }
    set brand(brand: string) {
        this._brand = brand;
    }
    get speed(): number {
        return this._speed;
    }
    set speed(speed: number) {
        this._speed = speed;
    }
    accelerate(): void {
        this._speed += 10;
    }
    brake(): void {
        this._speed -= 10;
    }
}

let car = new Car("Toyota", 100);
console.log(car.brand);
console.log(car.speed);
car.accelerate();
console.log(car.speed);
car.brake();
console.log(car.speed);

//L'héritage
class ElectricCar extends Car {
    battery: number;
    constructor(brand: string, speed: number, battery: number) {
        super(brand, speed);
        this.battery = battery;
    }
}
let electricCar = new ElectricCar("Toyota", 100, 100);
console.log(electricCar.brand);
console.log(electricCar.speed);
console.log(electricCar.battery);


