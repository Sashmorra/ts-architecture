import { CarService } from "./services";
import { SQLCarRepository } from "./repository";
import { Car } from "./models";


function main() {
  const car = new Car("BMW", "X5", 2020);
  const carService = new CarService(new SQLCarRepository());
  carService.wash(car);
  carService.buy(car);
}

main();
