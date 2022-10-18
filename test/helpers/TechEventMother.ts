import { TechEventDto } from "../../src/features/Events/domain/dtos/TechEvent.dto";
import { TechEvent } from "../../src/features/Events/domain/TechEvent.model";
import { Faker } from "./Faker";

const faker = new Faker();

export class TechEventMother {
  public static create(props: Partial<TechEventDto> = {}): TechEvent {
    const defaultProps: TechEventDto = {
      uuid: faker.uuid(),
      title: faker.words(),
      shortDescription: faker.words(10),
      description: faker.words(100),
      date: {
        initDate: faker.domainDate(),
        endDate: faker.domainDate(),
      },
      location: faker.words(2),
    };

    return new TechEvent({
      ...defaultProps,
      ...props,
    });
  }

  public static collection(
    len = 3,
    props: Partial<TechEventDto> = {}
  ): TechEvent[] {
    return Array.from({ length: len }, () => this.create(props));
  }
}
