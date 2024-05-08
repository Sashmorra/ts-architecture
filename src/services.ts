import { ICarRepository } from "./repository";
import { Car } from "./models";

class CarService {
  constructor(private carRepository: ICarRepository) {}

  wash(car: Car): void {
    process.stdout.write("CarService layer")
    this.carRepository.wash(car);
  }

  buy(car: Car): void {
    process.stdout.write("CarService layer")
    this.carRepository.buy(car);
  }
}

export { CarService };
