import { faker } from "@faker-js/faker";

export class Faker {
  public uuid(): string {
    return faker.datatype.uuid();
  }
}
