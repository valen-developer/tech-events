import { faker } from "@faker-js/faker";
import { DomainDate } from "../../src/features/Shared/domain/valueObjects/DomainDate";

export class Faker {
  public uuid(): string {
    return faker.datatype.uuid();
  }

  public words(count = 4): string {
    return faker.random.words(count);
  }

  public domainDate(from?: string, past = false): DomainDate {
    const auteGeneratedDate = past ? faker.date.past() : faker.date.future();

    const date = from ? new Date(from) : auteGeneratedDate;
    return new DomainDate(date);
  }
}
