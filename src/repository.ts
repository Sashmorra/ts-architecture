import { Car } from "./models";


interface ICarRepository {
  wash(car: Car): void,
  buy(car: Car): void
}

class SQLCarRepository implements ICarRepository {
  wash(car: Car): void {
    process.stdout.write("SQLCarRepository layer")
    process.stdout.write("Car washed")
  }
  buy(car: Car): void {
    process.stdout.write("SQLCarRepository layer")
    process.stdout.write("Car bought")
  }
}

class MongoCarRepository implements ICarRepository {
  wash(car: Car): void {
    process.stdout.write("MongoCarRepository layer")
    process.stdout.write("Car washed")
  }
  buy(car: Car): void {
    process.stdout.write("MongoCarRepository layer")
    process.stdout.write("Car bought")
  }
}
export { ICarRepository, SQLCarRepository, MongoCarRepository };
