import { TechEventDto } from "../../src/features/Events/domain/dtos/TechEvent.dto";
import { TechEvent } from "../../src/features/Events/domain/TechEvent.model";
import { Faker } from "./Faker";

const faker = new Faker();

export class TechEventMother {
  public static create(props: Partial<TechEventDto> = {}): TechEvent {
    const defaultProps: TechEventDto = {
      uuid: faker.uuid(),
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
